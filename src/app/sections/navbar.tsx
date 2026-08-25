"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import QuarkLogo from "../components/QuarkLogo";

/** Sleek top navigation bar with QuarkMade branding, dynamic scroll theme, and streamlined actions. */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && document.body.classList.contains("page-revealed")) {
      setIsRevealed(true);
      return;
    }
    const handleReveal = () => setIsRevealed(true);
    window.addEventListener("page-revealed", handleReveal);
    // Fallback in case preloader is bypassed
    const fallback = setTimeout(() => setIsRevealed(true), 2400);
    return () => {
      window.removeEventListener("page-revealed", handleReveal);
      clearTimeout(fallback);
    };
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -28 }}
      animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -28 }}
      transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 py-4 md:py-5 bg-transparent"
      id="header"
    >
      <div className="flex relative px-6 justify-between items-center mx-auto w-full max-w-screen max-md:px-4">
        {/* Desktop Left Nav Links */}
        <div className="block basis-2/5 max-lg:hidden">
          <div className="flex items-center gap-3 h-full">
            <a
              className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Satoshi',_sans-serif] font-normal text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:text-[#D4AF37] transition-colors duration-150"
              data-component="link"
              href="#philosophy"
            >
              Studio
            </a>
            <a
              className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Satoshi',_sans-serif] font-normal text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:text-[#D4AF37] transition-colors duration-150"
              data-component="link"
              href="#works"
            >
              Works
            </a>
            <a
              className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Satoshi',_sans-serif] font-normal text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:text-[#D4AF37] transition-colors duration-150"
              data-component="link"
              href="#journal"
            >
              Journal
            </a>
          </div>
        </div>

        {/* Mobile Morphing Animated Hamburger Button & Drawer */}
        <div className="hidden min-w-0 items-center basis-1/5 max-lg:flex">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex z-50 flex-col justify-center items-start gap-[5px] text-center cursor-pointer min-h-[44px] min-w-[44px] hover:opacity-80 transition-opacity p-2 -ml-2"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 3.5, width: 22 } : { rotate: 0, y: 0, width: 22 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              className="h-[2px] bg-white rounded-full block origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -3.5, width: 22 } : { rotate: 0, y: 0, width: 14 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              className="h-[2px] bg-white rounded-full block origin-center"
            />
          </button>

          {/* AnimatePresence Fluid Mobile Menu Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 z-40 flex flex-col bg-[#0B0A12]/98 backdrop-blur-2xl text-white"
              >
                {/* Ambient Mobile Background Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#4442DB]/15 rounded-full blur-[100px] pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="flex relative flex-col flex-1 overflow-y-auto p-6 pt-20 justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center pb-6 border-b border-white/10">
                      <QuarkLogo size={42} showText={true} />
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-white/70 hover:text-white uppercase text-xs [font-family:'Satoshi',_sans-serif] font-medium tracking-wider cursor-pointer border border-white/10 rounded-full hover:border-[#D4AF37]/50 transition-colors"
                        aria-label="Close menu"
                      >
                        ✕
                      </button>
                    </div>

                    <nav className="flex flex-col gap-1 text-base [font-family:'Satoshi',_sans-serif] font-normal tracking-wider uppercase pt-6">
                      {[
                        { href: "#works", label: "Selected Works", badge: "→" },
                        { href: "#philosophy", label: "Studio Philosophy", badge: "→" },
                        { href: "#journal", label: "Journal & Insights", badge: "→" },
                        { href: "#inquire", label: "Start a Project", badge: "✦", highlight: true },
                      ].map((item, idx) => (
                        <motion.a
                          key={item.href}
                          href={item.href}
                          initial={{ opacity: 0, x: -14 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.06 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                          className={`py-4 border-b border-white/10 transition-colors flex items-center justify-between group ${
                            item.highlight ? "text-[#F3E5AB] font-medium" : "hover:text-[#D4AF37]"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>{item.label}</span>
                          <span
                            className={`text-sm text-[#D4AF37] ${
                              item.highlight ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-opacity"
                            }`}
                          >
                            {item.badge}
                          </span>
                        </motion.a>
                      ))}
                    </nav>
                  </div>

                  {/* Mobile Drawer Bottom Quick Contacts */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-3 pt-8 pb-4 border-t border-white/10"
                  >
                    <a
                      href="https://wa.me/35799057690?text=Hi%20Elias,%20I'd%20like%20to%20discuss%20a%20new%20website%20project%20with%20QuarkMade."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-4 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] [font-family:'Satoshi',_sans-serif] text-xs font-semibold uppercase tracking-wider transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>WhatsApp Direct Desk</span>
                      <span>→</span>
                    </a>
                    <a
                      href="#inquire"
                      className="inline-flex items-center justify-center gap-2 h-11 px-4 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0B0A12] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Request Commission Quote</span>
                      <span>→</span>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Center Brand Logo (QuarkMade "Q" Emblem) */}
        <Link
          className="flex justify-center items-center basis-1/5 cursor-pointer max-lg:flex-1 max-lg:min-w-0 group px-2 text-center"
          data-component="link"
          href="/"
          aria-label="QuarkMade Home"
        >
          <QuarkLogo size={42} showText={true} />
        </Link>

        {/* Mobile Right CTA */}
        <div className="hidden min-w-0 justify-end items-center basis-1/5 max-lg:flex shrink-0">
          <a
            href="#inquire"
            className="inline-flex items-center justify-center py-1.5 px-3 [font-family:'Satoshi',_sans-serif] text-[0.72rem] sm:text-[0.75rem] font-semibold tracking-wider uppercase whitespace-nowrap bg-[#4442DB] text-white border border-[#D4AF37]/40 hover:bg-[#5654E4] transition-all duration-150 shadow-[0_0_10px_rgba(68,66,219,0.3)] shrink-0"
          >
            Inquire
          </a>
        </div>

        {/* Desktop Right Nav Links */}
        <div className="flex justify-end items-center basis-2/5 gap-3 max-lg:hidden" data-ditto-id="motion-div">
          <a
            className="inline-flex items-center justify-center py-2 px-5 [font-family:'Satoshi',_sans-serif] font-semibold text-[0.8125rem] leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 bg-[#4442DB] text-white border border-[#D4AF37]/40 hover:bg-[#5654E4] hover:border-[#D4AF37] shadow-[0_0_12px_rgba(68,66,219,0.35)] transition-all duration-150"
            data-component="link"
            href="#inquire"
          >
            Start a Project
          </a>
        </div>
      </div>
    </motion.header>
  );
}

