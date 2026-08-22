"use client";

import { useState } from "react";
import QuarkLogo from "../components/QuarkLogo";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";

/** Top navigation bar with authentic QuarkMade branding, dynamic scroll theme, and interactive panels. */
export default function Navbar() {
  const [activeTab, setActiveTab] = useState<"design" | "craft" | "works">("design");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="h-47 block fixed inset-x-0 z-50 text-background max-md:h-[9.925rem] md:max-lg:h-40"
      id="header"
    >
      <div className="block overflow-hidden">
        <div className="h-19 block sticky top-0 z-20 max-md:h-[4.675rem]">
          <div className="flex pt-5 pb-3 px-6 justify-between mx-auto w-full max-w-screen max-md:p-4 items-center">
            {/* Sub-navigation Pill (Studio Capability Switcher) */}
            <nav
              className="nav-sub-pill w-[21.5rem] flex relative p-1 rounded-xs justify-stretch items-center gap-1 bg-white/15 backdrop-blur-md max-md:w-full transition-colors duration-300"
              data-component="nav"
              aria-label="Studio capabilities"
            >
              {/* Sliding Active Pill Background */}
              <div
                className="nav-sub-pill-active h-8 block absolute top-1 rounded-xs bg-white pointer-events-none transition-all duration-300 ease-out"
                style={{
                  width: "calc(33.333% - 4px)",
                  left:
                    activeTab === "design"
                      ? "4px"
                      : activeTab === "craft"
                      ? "calc(33.333% + 2px)"
                      : "calc(66.666% + 0px)",
                }}
              />

              <button
                type="button"
                onClick={() => setActiveTab("design")}
                className={`relative z-10 flex-1 py-2 px-2 text-center [font-family:'Saans_Mono',_monospace] text-[12px] md:text-[13px] font-medium leading-none tracking-[0.13px] uppercase whitespace-nowrap text-nowrap rounded-xs transition-colors duration-200 cursor-pointer ${
                  activeTab === "design"
                    ? "tab-active text-[#4442DB]"
                    : "tab-inactive hover:opacity-80"
                }`}
              >
                WEB DESIGN
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("craft")}
                className={`relative z-10 flex-1 py-2 px-2 text-center [font-family:'Saans_Mono',_monospace] text-[12px] md:text-[13px] font-medium leading-none tracking-[0.13px] uppercase whitespace-nowrap text-nowrap rounded-xs transition-colors duration-200 cursor-pointer ${
                  activeTab === "craft"
                    ? "tab-active text-[#4442DB]"
                    : "tab-inactive hover:opacity-80"
                }`}
              >
                DIGITAL CRAFT
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("works")}
                className={`relative z-10 flex-1 py-2 px-2 text-center [font-family:'Saans_Mono',_monospace] text-[12px] md:text-[13px] font-medium leading-none tracking-[0.13px] uppercase whitespace-nowrap text-nowrap rounded-xs transition-colors duration-200 cursor-pointer ${
                  activeTab === "works"
                    ? "tab-active text-[#4442DB]"
                    : "tab-inactive hover:opacity-80"
                }`}
              >
                SELECTED WORKS
              </button>
            </nav>

            {/* Right Header Status Bar (Availability / Commission Status) */}
            <div className="flex pr-3 items-center gap-4 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-right uppercase whitespace-nowrap text-nowrap max-md:hidden">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/40 text-[#D4AF37] backdrop-blur-md text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping inline-block" />
                OPEN FOR COMMISSIONS 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative pt-5 px-6 justify-between mx-auto w-full max-w-screen max-lg:py-3 max-md:px-4 items-center">
        {/* Mobile Search Overlay */}
        <div
          className={`fixed inset-0 isolate min-w-0 flex-col bg-background h-screen z-50 transition-opacity duration-300 ${
            isSearchOpen ? "flex opacity-100" : "hidden opacity-0 pointer-events-none"
          }`}
          aria-label="Search"
          id="mobile-search-overlay"
          role="search"
        >
          <div className="flex pt-6 px-4 justify-end">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-3 text-foreground uppercase text-xs [font-family:'Saans_Mono',_monospace] tracking-wider cursor-pointer"
            >
              Close ✕
            </button>
          </div>
          <div className="flex pt-12 pb-10 px-6 flex-col flex-1 gap-10 overflow-auto">
            <div className="border-b border-solid border-b-clr-0 flex min-w-0 py-3 px-1 items-center gap-3 h-12">
              <input
                className="w-full h-full block min-w-0 flex-1 overflow-clip text-foreground [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] cursor-text max-lg:h-[1.4375rem] max-md:text-sm focus:outline-none"
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
              className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:text-[#D4AF37] transition-colors duration-150"
              data-component="link"
              href="#philosophy"
            >
              Studio
              <Icon dittoId={"motion-1"} />
            </a>
            <a
              className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:text-[#D4AF37] transition-colors duration-150"
              data-component="link"
              href="#works"
            >
              Works
            </a>
            <a
              className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:text-[#D4AF37] transition-colors duration-150"
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
                  className="p-2 text-background uppercase text-xs [font-family:'Saans_Mono',_monospace] tracking-wider cursor-pointer"
                >
                  Close ✕
                </button>
              </div>
              <nav className="flex flex-col gap-6 text-base [font-family:'Saans_Mono',_monospace] tracking-wider uppercase">
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
          <QuarkLogo size={42} showText={true} />
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
            className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:text-[#D4AF37] transition-colors duration-150"
            data-component="button"
            aria-controls="header-search-panel"
            aria-expanded={isSearchOpen}
            type="button"
          >
            Search
          </button>
          <a
            className="inline-flex items-center justify-center py-2 px-4 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-semibold leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 bg-[#4442DB] text-white border border-[#D4AF37]/40 hover:bg-[#5654E4] hover:border-[#D4AF37] shadow-[0_0_12px_rgba(68,66,219,0.35)] transition-all duration-150"
            data-component="link"
            href="#inquire"
          >
            Start a Project
          </a>
        </div>

        {/* Desktop Search Panel */}
        <div
          className={`h-30 block absolute top-28 left-1/2 -translate-x-1/2 z-30 min-w-0 overflow-auto bg-background rounded-xs shadow-2xl max-h-[calc(95vh-120px)] w-[90vw] max-w-4xl max-lg:hidden transition-all duration-300 ${
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
              <div className="border-b border-solid border-b-clr-0 flex py-3 px-1 items-center flex-1 gap-3 h-12">
                <input
                  className="w-full h-[1.4375rem] block min-w-0 flex-1 overflow-clip text-foreground [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] cursor-text focus:outline-none"
                  data-ditto-id="style-input-2"
                  data-component="input"
                  placeholder="Search works (Chronotomi, Lumina Living, QuieTide), studio capabilities, journal..."
                  type="text"
                  autoFocus={isSearchOpen}
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="flex rounded-full justify-center items-center shrink-0 gap-2 text-foreground [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer h-9 w-9 hover:bg-accent transition-colors"
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
