"use client";

import { useState } from "react";
import QuarkLogo from "../components/QuarkLogo";
import { textLinkData, logos } from "../content";

/** Footer and Studio Navigation Section for QuarkMade. */
export default function LogoCloudSection() {
  const [activeDistrict, setActiveDistrict] = useState<"quark" | "works" | "labs">("quark");

  return (
    <footer className="block bg-[#0B0A12] text-white pt-20 pb-12 px-6 border-t border-white/10" id="footer">
      <div className="flex flex-col gap-16 mx-auto w-full max-w-screen">
        {/* Top Footer: Brand Statement & Client Logo Tags */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-3 max-w-md">
            <QuarkLogo size={44} showText={true} />
            <p className="[font-family:Denim,_serif] text-sm text-white/70 leading-relaxed mt-2">
              QuarkMade is a boutique digital craft studio designing bespoke, high-performance web experiences and interactive flagships.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {logos.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-none border border-white/15 [font-family:'Saans_Mono',_monospace] text-[11px] font-medium tracking-[0.15em] uppercase text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Middle Footer: Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="[font-family:'Saans_Mono',_monospace] text-xs font-medium text-white/60">
            © {new Date().getFullYear()} QuarkMade. All Rights Reserved. Crafted with Next.js & Tailwind.
          </p>

          <div className="flex flex-wrap justify-center gap-6 [font-family:'Saans_Mono',_monospace] text-xs font-medium tracking-[0.12px] uppercase">
            {textLinkData.map((d, i) => (
              <a
                key={i}
                href={d.href}
                className="text-white/70 hover:text-[#D4AF37] transition-colors"
              >
                {d.text}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom District Navigation Switcher */}
        <div className="flex w-full mt-4">
          <nav
            className="flex relative p-1 rounded-xs justify-stretch items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-md w-full max-w-xl mx-auto"
            data-component="nav"
          >
            <div
              className="h-8 block absolute top-1 rounded-xs bg-[#4442DB] pointer-events-none transition-all duration-300 ease-out"
              style={{
                width: "calc(33.333% - 4px)",
                left:
                  activeDistrict === "quark"
                    ? "4px"
                    : activeDistrict === "works"
                    ? "calc(33.333% + 2px)"
                    : "calc(66.666% + 0px)",
              }}
            />

            <button
              type="button"
              onClick={() => setActiveDistrict("quark")}
              className={`relative z-10 flex-1 py-2 px-3 text-center [font-family:'Saans_Mono',_monospace] text-xs font-medium tracking-[0.13px] uppercase rounded-xs transition-colors duration-200 cursor-pointer ${
                activeDistrict === "quark" ? "text-white font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              QUARKMADE
            </button>

            <button
              type="button"
              onClick={() => setActiveDistrict("works")}
              className={`relative z-10 flex-1 py-2 px-3 text-center [font-family:'Saans_Mono',_monospace] text-xs font-medium tracking-[0.13px] uppercase rounded-xs transition-colors duration-200 cursor-pointer ${
                activeDistrict === "works" ? "text-white font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              STUDIO WORKS
            </button>

            <button
              type="button"
              onClick={() => setActiveDistrict("labs")}
              className={`relative z-10 flex-1 py-2 px-3 text-center [font-family:'Saans_Mono',_monospace] text-xs font-medium tracking-[0.13px] uppercase rounded-xs transition-colors duration-200 cursor-pointer ${
                activeDistrict === "labs" ? "text-white font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              LABS & EXPERIMENTS
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
