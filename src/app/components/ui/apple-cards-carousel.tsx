"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";

export type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  link?: string;
  projectName?: string;
};

interface CarouselProps {
  items: React.ReactNode[];
  cardsData?: CardType[];
  initialScroll?: number;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  openCard: (index: number) => void;
  currentIndex: number;
  openIndex: number | null;
}>({
  onCardClose: () => {},
  openCard: () => {},
  currentIndex: 0,
  openIndex: null,
});

export const Carousel = ({
  items,
  cardsData,
  initialScroll = 0,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile() ? 340 : 640;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile() ? 340 : 640;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToCard = useCallback((index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 336 : 640;
      const gap = isMobile() ? 16 : 24;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  }, []);

  const handleCardClose = useCallback(
    (index: number) => {
      scrollToCard(index);
    },
    [scrollToCard]
  );

  const openCard = useCallback((index: number) => {
    setOpenIndex(index);
  }, []);

  const closeSnapshotModal = useCallback(() => {
    if (openIndex !== null) {
      handleCardClose(openIndex);
    }
    setOpenIndex(null);
  }, [openIndex, handleCardClose]);

  const goToNextSnapshot = useCallback(() => {
    if (cardsData && cardsData.length > 0 && openIndex !== null) {
      const nextIndex = (openIndex + 1) % cardsData.length;
      setOpenIndex(nextIndex);
      scrollToCard(nextIndex);
    }
  }, [cardsData, openIndex, scrollToCard]);

  const goToPrevSnapshot = useCallback(() => {
    if (cardsData && cardsData.length > 0 && openIndex !== null) {
      const prevIndex = (openIndex - 1 + cardsData.length) % cardsData.length;
      setOpenIndex(prevIndex);
      scrollToCard(prevIndex);
    }
  }, [cardsData, openIndex, scrollToCard]);

  // Strict scroll-lock & Lenis synchronization
  useEffect(() => {
    if (openIndex !== null) {
      const originalDocOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      const lenis = (
        window as unknown as {
          __lenis?: { stop: () => void; start: () => void };
        }
      ).__lenis;
      if (lenis) {
        lenis.stop();
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeSnapshotModal();
        } else if (event.key === "ArrowRight") {
          goToNextSnapshot();
        } else if (event.key === "ArrowLeft") {
          goToPrevSnapshot();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.documentElement.style.overflow = originalDocOverflow;
        document.body.style.overflow = originalBodyOverflow;
        if (lenis) {
          lenis.start();
        }
      };
    }
  }, [openIndex, closeSnapshotModal, goToNextSnapshot, goToPrevSnapshot]);

  useOutsideClick(modalContentRef, () => {
    if (openIndex !== null) {
      closeSnapshotModal();
    }
  });

  const activeCard =
    cardsData && openIndex !== null ? cardsData[openIndex] : null;

  return (
    <CarouselContext.Provider
      value={{
        onCardClose: handleCardClose,
        openCard,
        currentIndex,
        openIndex,
      }}
    >
      <div className="relative w-full">
        {/* Horizontal Carousel Track */}
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-6 md:py-10 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 md:px-8"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row justify-start gap-5 md:gap-8 mx-auto w-max">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.08 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[15%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            className="relative z-40 h-11 w-11 rounded-full bg-white/5 hover:bg-[#4442DB] text-white/80 hover:text-white border border-white/10 hover:border-[#4442DB]/50 flex items-center justify-center disabled:opacity-20 disabled:hover:bg-white/5 disabled:hover:text-white/40 cursor-pointer disabled:cursor-not-allowed transition-all duration-300 shadow-md"
            disabled={!canScrollLeft}
            onClick={scrollLeft}
            aria-label="Scroll snapshots left"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="relative z-40 h-11 w-11 rounded-full bg-white/5 hover:bg-[#4442DB] text-white/80 hover:text-white border border-white/10 hover:border-[#4442DB]/50 flex items-center justify-center disabled:opacity-20 disabled:hover:bg-white/5 disabled:hover:text-white/40 cursor-pointer disabled:cursor-not-allowed transition-all duration-300 shadow-md"
            disabled={!canScrollRight}
            onClick={scrollRight}
            aria-label="Scroll snapshots right"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Unified Luxury Snapshot Modal Portal */}
        {mounted &&
          cardsData &&
          createPortal(
            <AnimatePresence mode="wait">
              {openIndex !== null && activeCard && (
                <div
                  key="snapshot-modal-overlay"
                  data-lenis-prevent
                  className="fixed inset-0 h-screen w-screen z-[99999] overflow-y-auto overflow-x-hidden pt-6 pb-20 sm:py-12 md:py-16 px-3 sm:px-6 flex justify-center items-start overscroll-contain select-text"
                  style={{
                    backgroundColor: "rgba(11, 10, 18, 0.92)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                  }}
                >
                  {/* Backdrop Click Dismiss */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-0 cursor-pointer"
                    onClick={closeSnapshotModal}
                  />

                  {/* Ambient Purple/Gold Radial Bloom in Modal Background */}
                  <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
                    <div className="w-[600px] h-[600px] bg-[#4442DB]/10 rounded-full blur-[140px] opacity-80" />
                    <div className="w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] opacity-60 ml-40 -mt-20" />
                  </div>

                  {/* Left Floating Previous Arrow (Desktop) */}
                  <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrevSnapshot();
                      }}
                      className="h-12 w-12 rounded-full bg-[#12111D]/80 hover:bg-[#4442DB] text-white/70 hover:text-white border border-white/15 hover:border-[#4442DB]/60 flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] group cursor-pointer backdrop-blur-md"
                      aria-label="Previous snapshot"
                      title="Previous (Left Arrow)"
                    >
                      <svg
                        className="h-6 w-6 transition-transform group-hover:-translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Right Floating Next Arrow (Desktop) */}
                  <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNextSnapshot();
                      }}
                      className="h-12 w-12 rounded-full bg-[#12111D]/80 hover:bg-[#4442DB] text-white/70 hover:text-white border border-white/15 hover:border-[#4442DB]/60 flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] group cursor-pointer backdrop-blur-md"
                      aria-label="Next snapshot"
                      title="Next (Right Arrow)"
                    >
                      <svg
                        className="h-6 w-6 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Container Card */}
                  <motion.div
                    key={"modal-content-" + openIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 16 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    ref={modalContentRef}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-4xl bg-[#0F0E1A] border border-white/15 rounded-3xl text-white z-20 my-auto shadow-[0_20px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(68,66,219,0.18)] overflow-hidden shrink-0"
                  >
                    {/* Top Glow Accent Bar */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#4442DB] to-transparent opacity-80" />

                    {/* Modal Sticky Header Bar */}
                    <div className="sticky top-0 z-30 flex items-center justify-between gap-4 p-5 sm:p-6 md:p-7 border-b border-white/10 bg-[#0F0E1A]/95 backdrop-blur-xl">
                      {/* Left: Category & Index Badge */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="[font-family:'Satoshi',_sans-serif] text-[11px] sm:text-xs font-bold text-[#D4AF37] tracking-[0.2em] uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                          {String(openIndex + 1).padStart(2, "0")} /{" "}
                          {String(cardsData.length).padStart(2, "0")}
                        </span>
                        <span className="hidden sm:inline-block text-white/30 text-xs">
                          •
                        </span>
                        <span className="[font-family:'Satoshi',_sans-serif] text-xs font-medium text-white/70 tracking-[0.16em] uppercase truncate max-w-[220px] sm:max-w-md">
                          {activeCard.category}
                        </span>
                      </div>

                      {/* Right: Inline Navigation & Action Controls */}
                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        {/* Mobile Prev / Next Controls */}
                        <div className="flex items-center bg-white/5 rounded-full border border-white/10 p-0.5 lg:hidden">
                          <button
                            onClick={goToPrevSnapshot}
                            className="h-8 w-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Previous snapshot"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={goToNextSnapshot}
                            className="h-8 w-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Next snapshot"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Direct Live Site Pill Button */}
                        {activeCard.link && (
                          <a
                            href={activeCard.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#F3E5AB] border border-[#D4AF37]/40 text-xs font-medium tracking-wider uppercase transition-all duration-200"
                          >
                            <span>Live Flagship</span>
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        )}

                        {/* Close Modal Button */}
                        <button
                          onClick={closeSnapshotModal}
                          className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 hover:bg-[#4442DB] text-white border border-white/20 hover:border-[#4442DB] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm group"
                          aria-label="Close snapshot modal"
                          title="Close (Esc)"
                        >
                          <svg
                            className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:rotate-90"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Modal Content Body */}
                    <div className="p-5 sm:p-7 md:p-9 space-y-6">
                      {/* Title Heading */}
                      <div>
                        <h2 className="[font-family:'Chillax',_sans-serif] text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                          {activeCard.title}
                        </h2>
                      </div>

                      {/* Razor-Sharp Media Frame */}
                      <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl group">
                        <img
                          src={activeCard.src}
                          alt={activeCard.title}
                          className="w-full h-auto object-cover max-h-[48vh] sm:max-h-[52vh] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                        {/* Subtle corner badge on media */}
                        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-medium text-white/80 tracking-widest uppercase">
                          4K Archival View
                        </div>
                      </div>

                      {/* Editorial Content Breakdown */}
                      <div className="pt-2 pb-4">{activeCard.content}</div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardType;
  index: number;
  layout?: boolean;
}) => {
  const { openCard } = useContext(CarouselContext);

  const handleOpen = () => {
    openCard(index);
  };

  return (
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onClick={handleOpen}
      className="rounded-3xl bg-[#0B0A12] w-[21rem] aspect-[16/10] sm:w-[30rem] sm:aspect-[16/9] md:w-[38rem] lg:w-[44rem] overflow-hidden flex flex-col items-start justify-between relative z-10 cursor-pointer shadow-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 group text-left p-5 sm:p-7 md:p-8 shrink-0"
    >
      {/* Background Image with Zoom on Hover */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <img
          src={card.src}
          alt={card.title}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Dynamic Gradient Overlays */}
      <div
        className="absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 10, 18, 0.8) 0%, rgba(11, 10, 18, 0.12) 35%, rgba(11, 10, 18, 0.92) 100%)",
        }}
      />

      {/* Top Expand Indicator */}
      <div className="relative z-20 flex w-full items-center justify-end">
        <div className="h-8 w-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:bg-[#4442DB] group-hover:text-white transition-colors duration-300 shadow-md">
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Title & Inspect Indicator */}
      <div className="relative z-20 flex flex-col gap-2.5 w-full">
        <h3 className="[font-family:'Satoshi',_sans-serif] font-normal text-lg sm:text-2xl md:text-3xl leading-snug tracking-tight text-white group-hover:text-[#F3E5AB] transition-colors max-w-2xl">
          {card.title}
        </h3>
        <div className="flex items-center gap-1.5 [font-family:'Satoshi',_sans-serif] font-normal text-[10px] md:text-[11px] text-white/80 tracking-widest uppercase">
          <span>INSPECT SNAPSHOT</span>
          <span className="text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 font-bold">
            →
          </span>
        </div>
      </div>
    </motion.button>
  );
};

