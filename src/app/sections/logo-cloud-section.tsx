"use client";

import QuarkLogo from "../components/QuarkLogo";
import { textLinkData, logos } from "../content";

/** Footer Section for QuarkMade. */
export default function LogoCloudSection() {
  return (
    <footer className="block bg-[#0B0A12] text-white pt-20 pb-12 px-6 border-t border-white/10" id="footer">
      <div className="flex flex-col gap-14 mx-auto w-full max-w-screen">
        {/* Top Footer: Brand Statement & Client Logo Tags */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/10">
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

        {/* Bottom Footer: Links & Copyright */}
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
      </div>
    </footer>
  );
}
