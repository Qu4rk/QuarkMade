"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
} from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  link?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 336 : 640;
      const gap = isMobile() ? 16 : 24;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
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
                    delay: 0.1 * index,
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
            className="relative z-40 h-11 w-11 rounded-full bg-foreground/5 hover:bg-[#4442DB] hover:text-white border border-foreground/10 flex items-center justify-center disabled:opacity-30 disabled:hover:bg-foreground/5 disabled:hover:text-foreground cursor-pointer disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
            disabled={!canScrollLeft}
            onClick={scrollLeft}
            aria-label="Scroll left"
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
            className="relative z-40 h-11 w-11 rounded-full bg-foreground/5 hover:bg-[#4442DB] hover:text-white border border-foreground/10 flex items-center justify-center disabled:opacity-30 disabled:hover:bg-foreground/5 disabled:hover:text-foreground cursor-pointer disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
            disabled={!canScrollRight}
            onClick={scrollRight}
            aria-label="Scroll right"
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
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 h-screen w-screen z-[9999] overflow-auto py-12 px-4 flex justify-center items-start">
                {/* Backdrop Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-black/85 backdrop-blur-xl h-full w-full fixed inset-0 z-0"
                  onClick={handleClose}
                />
                {/* Expanded Modal Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  ref={containerRef}
                  className="w-full max-w-4xl bg-[#0B0A12] border border-[#D4AF37]/35 text-white h-fit z-10 my-6 p-6 md:p-10 rounded-3xl [font-family:'Denim',_serif] relative shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_25px_rgba(68,66,219,0.25)] overflow-hidden"
                >
                  {/* Close Button */}
                  <button
                    className="sticky top-2 right-2 ml-auto bg-white/10 hover:bg-[#4442DB] text-white rounded-full h-10 w-10 flex items-center justify-center cursor-pointer transition-colors shadow-lg z-50 border border-white/20"
                    onClick={handleClose}
                    aria-label="Close modal"
                  >
                    <svg
                      className="h-5 w-5"
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

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 [font-family:'Saans_Mono',_monospace] text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.2em]">
                      <span>→</span>
                      <span>{card.category}</span>
                    </div>
                    <h2 className="[font-family:'Chillax',_sans-serif] text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                      {card.title}
                    </h2>
                  </div>

                  <div className="my-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={card.src}
                      alt={card.title}
                      className="w-full h-auto object-cover max-h-[65vh]"
                    />
                  </div>

                  <div className="py-2">{card.content}</div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* Collapsed Carousel Card - Widescreen 16:9 Landscape Frame */}
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

        {/* Top Tag & Arrow */}
        <div className="relative z-20 flex w-full items-center justify-between">
          <span className="[font-family:'Saans_Mono',_monospace] text-[11px] md:text-xs font-semibold tracking-[0.2em] text-[#F3E5AB] uppercase bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            {card.category}
          </span>
          <div className="h-8 w-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:bg-[#4442DB] group-hover:text-white transition-colors duration-300">
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
          <h3 className="[font-family:'Ivar_Headline',_serif] text-lg sm:text-2xl md:text-3xl font-normal leading-snug tracking-tight text-white group-hover:text-[#F3E5AB] transition-colors max-w-2xl">
            {card.title}
          </h3>
          <div className="flex items-center gap-1.5 [font-family:'Saans_Mono',_monospace] text-[10px] md:text-[11px] text-white/80 tracking-widest uppercase">
            <span>INSPECT SNAPSHOT</span>
            <span className="text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 font-bold">
              →
            </span>
          </div>
        </div>
      </motion.button>
    </>
  );
};
