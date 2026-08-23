"use client";

import { useState } from "react";
import QuarkLogo from "../components/QuarkLogo";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";

/** Sleek top navigation bar with QuarkMade branding, dynamic scroll theme, and interactive panels. */
export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 py-4 md:py-5 bg-[#0B0A12]/80 backdrop-blur-md border-b border-white/10"
      id="header"
    >
      <div className="flex relative px-6 justify-between items-center mx-auto w-full max-w-screen max-md:px-4">
        {/* Mobile Search Overlay */}
        <div
          className={`fixed inset-0 isolate min-w-0 flex-col bg-[#0B0A12] text-white h-screen z-50 lg:hidden transition-opacity duration-300 ${
            isSearchOpen ? "flex opacity-100" : "hidden opacity-0 pointer-events-none"
          }`}
          aria-label="Search"
          id="mobile-search-overlay"
          role="search"
        >
          <div className="flex pt-6 px-4 justify-end">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-3 text-white/80 hover:text-white uppercase text-xs [font-family:'Satoshi',_sans-serif] font-normal tracking-wider cursor-pointer"
            >
              Close ✕
            </button>
          </div>
          <div className="flex pt-12 pb-10 px-6 flex-col flex-1 gap-10 overflow-auto">
            <div className="border-b border-solid border-white/20 flex min-w-0 py-3 px-1 items-center gap-3 h-12">
              <input
                className="w-full h-full block min-w-0 flex-1 overflow-clip text-white placeholder:text-white/40 [font-family:'Satoshi',_sans-serif] font-medium leading-[1.375rem] tracking-[0.16px] cursor-text max-lg:h-[1.4375rem] max-md:text-sm focus:outline-none"
                placeholder="Search projects (Chronotomi, Lumina, QuieTide), articles..."
                type="text"
                autoFocus={isSearchOpen}
              />
            </div>
          </div>
        </div>

        {/* Desktop Left Nav Links */}
        <div className="block basis-2/5 max-lg:hidden">
          <div className="flex items-center gap-3 h-full">
            <a
              className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Satoshi',_sans-serif] font-normal text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:text-[#D4AF37] transition-colors duration-150"
              data-component="link"
              href="#philosophy"
            >
              Studio
              <Icon dittoId={"motion-1"} />
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

        {/* Mobile Search Icon Button */}
        <div className="hidden min-w-0 justify-end items-center basis-1/5 max-lg:flex">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex z-10 justify-center items-center text-center cursor-pointer h-8 w-8 hover:opacity-80 transition-opacity"
            aria-controls="mobile-search-overlay"
            aria-expanded={isSearchOpen}
            aria-label="Search"
            type="button"
          >
            <Icon3 />
          </button>
        </div>

        {/* Desktop Right Nav Links */}
        <div className="flex justify-end items-center basis-2/5 gap-3 max-lg:hidden" data-ditto-id="motion-div">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Satoshi',_sans-serif] font-normal text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:text-[#D4AF37] transition-colors duration-150"
            data-component="button"
            aria-controls="header-search-panel"
            aria-expanded={isSearchOpen}
            type="button"
          >
            Search
          </button>
          <a
            className="inline-flex items-center justify-center py-2 px-4 [font-family:'Satoshi',_sans-serif] font-normal text-[0.8125rem] font-semibold leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 bg-[#4442DB] text-white border border-[#D4AF37]/40 hover:bg-[#5654E4] hover:border-[#D4AF37] shadow-[0_0_12px_rgba(68,66,219,0.35)] transition-all duration-150"
            data-component="link"
            href="#inquire"
          >
            Start a Project
          </a>
        </div>

        {/* Desktop Search Panel */}
        <div
          className={`h-30 block absolute top-20 left-1/2 -translate-x-1/2 z-30 min-w-0 overflow-auto bg-[#0B0A12] border border-white/15 rounded-2xl shadow-2xl max-h-[calc(95vh-120px)] w-[90vw] max-w-4xl max-lg:hidden transition-all duration-300 ${
            isSearchOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-4"
          }`}
          aria-label="Search"
          id="header-search-panel"
          role="search"
        >
          <div className="flex pt-6 pb-12 px-6 flex-col gap-12">
            <div className="flex items-center gap-6">
              <div className="border-b border-solid border-b-white/20 flex py-3 px-1 items-center flex-1 gap-3 h-12">
                <input
                  className="w-full h-[1.4375rem] block min-w-0 flex-1 overflow-clip text-white placeholder:text-white/40 [font-family:'Satoshi',_sans-serif] font-medium leading-[1.375rem] tracking-[0.16px] cursor-text focus:outline-none bg-transparent"
                  data-ditto-id="style-input-2"
                  data-component="input"
                  placeholder="Search works (Chronotomi, Lumina Living, QuieTide), studio capabilities, journal..."
                  type="text"
                  autoFocus={isSearchOpen}
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="flex rounded-full justify-center items-center shrink-0 gap-2 text-white/80 hover:text-white [font-family:'Satoshi',_sans-serif] font-normal text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer h-9 w-9 hover:bg-white/10 transition-colors"
                data-ditto-id="motion-close"
                data-component="button"
                aria-label="Close"
                type="button"
              >
                <Icon4 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
