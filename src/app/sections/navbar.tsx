"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import QuarkLogo from "../components/QuarkLogo";
import Icon2 from "../svgs/svg-icon2";

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

        {/* Mobile Hamburger Button & Drawer */}
        <div className="hidden min-w-0 items-center basis-1/5 max-lg:flex">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex z-30 flex-col justify-center items-center gap-[0.3125rem] text-center cursor-pointer h-8 w-8 hover:opacity-80 transition-opacity"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <Icon2 />
          </button>
          <div
            className={`fixed inset-0 z-40 flex-col bg-foreground text-background transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-0 flex" : "-translate-x-full hidden"
            }`}
          >
            <div className="flex relative flex-col flex-1 overflow-hidden p-8 pt-28">
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-background uppercase text-xs [font-family:'Satoshi',_sans-serif] font-normal tracking-wider cursor-pointer"
                >
                  Close ✕
                </button>
              </div>
              <nav className="flex flex-col gap-6 text-base [font-family:'Satoshi',_sans-serif] font-normal tracking-wider uppercase">
                <a
                  href="#works"
                  className="py-3 border-b border-background/20 hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Selected Works
                </a>
                <a
                  href="#philosophy"
                  className="py-3 border-b border-background/20 hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Studio Philosophy
                </a>
                <a
                  href="#journal"
                  className="py-3 border-b border-background/20 hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Journal & Insights
                </a>
                <a
                  href="#inquire"
                  className="py-3 border-b border-background/20 hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start a Project
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Center Brand Logo (QuarkMade "Q" Emblem) */}
        <a
          className="flex justify-center items-center basis-1/5 cursor-pointer w-full max-lg:basis-3/5 group"
          data-component="link"
          href="/"
          aria-label="QuarkMade Home"
        >
          <QuarkLogo size={48} showText={true} />
        </a>

        {/* Mobile Right CTA */}
        <div className="hidden min-w-0 justify-end items-center basis-1/5 max-lg:flex">
          <a
            href="#inquire"
            className="inline-flex items-center justify-center py-1.5 px-3.5 [font-family:'Satoshi',_sans-serif] text-[0.75rem] font-semibold tracking-wider uppercase whitespace-nowrap bg-[#4442DB] text-white border border-[#D4AF37]/40 hover:bg-[#5654E4] transition-all duration-150 shadow-[0_0_10px_rgba(68,66,219,0.3)]"
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

