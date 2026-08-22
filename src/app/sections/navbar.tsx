"use client";

import { useState, useEffect } from "react";
import NavLink from "../components/nav-link";
import Tile from "../components/tile";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Illustration from "../svgs/svg-illustration";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import { NavLink_styles, Tile_styles } from "../_styles";
import { navLinkData as navLinkDataContent, tileData as tileDataContent } from "../content";

/** Top navigation bar with full interactive motion and micro-interactions. */
export default function Navbar({ navLinkData = navLinkDataContent, tileData = tileDataContent } = {}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-47 block fixed inset-x-0 z-20 text-background max-md:h-[9.925rem] md:max-lg:h-40 transition-colors duration-300 ${
        isScrolled ? "bg-foreground/80 backdrop-blur-md" : ""
      }`}
      id="header"
    >
      <div className="block overflow-hidden">
        <div className="h-19 block sticky top-0 z-20 max-md:h-[4.675rem]">
          <div className="flex pt-5 pb-3 px-6 justify-between mx-auto w-full max-w-screen max-md:p-4">
            <nav
              className="w-[18.95rem] flex relative p-1 rounded-xs justify-stretch items-center gap-1 bg-surface backdrop-blur-md max-md:w-[21.4375rem] transition-all duration-300"
              data-component="nav"
            >
              <div className="w-[4.4375rem] h-9 block absolute top-1 min-w-0 rounded-xs bg-background/20 pointer-events-none max-md:w-[6.8125rem] max-md:h-[2.175rem] transition-transform duration-300" />
              {navLinkData.map((d, i) => (
                <NavLink key={i} d={d} styles={NavLink_styles[i]} />
              ))}
            </nav>
            <div className="flex pr-3 items-center gap-7 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-right uppercase whitespace-nowrap text-nowrap max-md:hidden">
              {tileData.map((d, i) => (
                <Tile key={i} d={d} styles={Tile_styles[i]} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative pt-5 px-6 justify-between mx-auto w-full max-w-screen max-lg:py-3 max-md:px-4">
        {/* Mobile Search Overlay */}
        <div
          className={`absolute top-0 inset-x-0 isolate min-w-0 flex-col bg-background h-screen z-50 transition-opacity duration-300 ${
            isSearchOpen ? "flex opacity-100" : "hidden opacity-0 pointer-events-none"
          }`}
          aria-label="Search"
          id="mobile-search-overlay"
          role="search"
        >
          <div className="flex pt-6 px-4 justify-end">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 text-foreground uppercase text-xs font-mono tracking-wider cursor-pointer"
            >
              Close ✕
            </button>
          </div>
          <div className="flex pt-12 pb-10 px-4 flex-col flex-1 gap-10 overflow-auto">
            <div className="border-b border-solid border-b-clr-0 flex min-w-0 py-3 px-1 items-center gap-3 h-12">
              <input
                className="w-full h-full block min-w-0 flex-1 overflow-clip text-foreground [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] cursor-text max-lg:h-[1.4375rem] max-md:text-sm"
                placeholder="Search events, dining, stories..."
                type="text"
                autoFocus={isSearchOpen}
              />
            </div>
          </div>
        </div>

        {/* Desktop Left Nav Links */}
        <div className="block basis-2/5 max-lg:hidden">
          <div className="w-[210.5px] flex items-start gap-3 h-full">
            <button
              className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:bg-surface focus:bg-clr-8 transition-colors duration-200"
              data-component="button"
              aria-controls="megamenu-about"
              aria-expanded="false"
              aria-haspopup="true"
            >
              About
              <Icon dittoId={"motion-1"} />
            </button>
            <a
              className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:bg-surface transition-colors duration-200"
              data-component="link"
              href="/on-base-blog"
              target="_self"
            >
              On Base Blog
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
            className={`fixed inset-0 z-20 flex-col bg-foreground text-background transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-0 flex" : "-translate-x-full hidden"
            }`}
          >
            <div className="flex relative flex-col flex-1 overflow-hidden p-8 pt-28">
              <nav className="flex flex-col gap-6 text-lg font-mono tracking-wider uppercase">
                <a
                  href="/events"
                  className="py-2 border-b border-background/20 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events & Programming
                </a>
                <a
                  href="/venues"
                  className="py-2 border-b border-background/20 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Explore The Site
                </a>
                <a
                  href="/on-base-blog"
                  className="py-2 border-b border-background/20 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  On Base Blog
                </a>
                <a
                  href="/contact-us"
                  className="py-2 border-b border-background/20 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Center Brand Logo */}
        <a
          className="flex pb-5 justify-center items-center basis-1/5 cursor-pointer w-full max-lg:basis-3/5 max-lg:pb-0 group transition-transform duration-300 hover:scale-105"
          data-component="link"
          href="/"
        >
          <div className="h-full block">
            <Illustration />
          </div>
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
        <div className="flex justify-end items-start basis-2/5 gap-2 max-lg:hidden" data-ditto-id="motion-div">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:bg-surface transition-colors duration-200"
            data-component="button"
            aria-controls="header-search-panel"
            aria-expanded={isSearchOpen}
            type="button"
          >
            Search
          </button>
          <a
            className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:bg-surface transition-colors duration-200"
            data-component="link"
            href="/contact-us?inquiry=general"
            target="_self"
          >
            Contact us
          </a>
        </div>

        {/* Desktop Search Panel */}
        <div
          className={`h-30 block absolute top-28 left-1/2 -translate-x-1/2 z-30 min-w-0 overflow-auto bg-background rounded-lg shadow-2xl max-h-[calc(95vh-120px)] w-[90vw] max-w-4xl max-lg:hidden transition-all duration-300 ${
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
                  placeholder="Search events, venues, stories..."
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
