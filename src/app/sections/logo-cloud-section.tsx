"use client";

import QuarkLogo from "../components/QuarkLogo";
import { textLinkData } from "../content";

/** Footer Section for QuarkMade. */
export default function LogoCloudSection() {
  return (
    <footer className="block bg-transparent text-white pt-20 pb-12 px-6 border-t border-white/10 relative z-1" id="footer">
      <div className="flex flex-col gap-14 mx-auto w-full max-w-screen">
        {/* Top Footer: Brand Statement & Client Logo Tags */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/10">
          <div className="flex flex-col gap-3 max-w-md">
            <QuarkLogo size={52} showText={true} />
            <p className="[font-family:'Satoshi',_sans-serif] text-sm text-white/70 leading-relaxed mt-2 font-normal">
              QuarkMade is a boutique digital craft studio designing bespoke, high-performance web experiences and interactive flagships.
            </p>
          </div>

          {/* Contact Channels: WhatsApp & Email Standalone Icons */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* WhatsApp Icon (Official Vector) */}
            <a
              href="https://wa.me/35799057690"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp (+357 99 057690)"
              className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110 p-1 flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.301-.15-1.777-.876-2.052-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-1.084-.966-1.817-2.16-2.03-2.525-.213-.365-.023-.563.127-.712.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.675-1.625-.925-2.225c-.244-.585-.492-.506-.675-.515-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.23 5.124 4.53.716.31 1.275.495 1.71.635.72.23 1.375.197 1.893.12.578-.087 1.777-.726 2.027-1.427.25-.701.25-1.302.175-1.427-.075-.125-.275-.2-.575-.35zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.05 22l5.176-1.332A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.57 0-3.036-.454-4.28-1.236l-.307-.19-3.064.788.819-2.988-.2-.319A8.134 8.134 0 0 1 3.833 12c0-4.502 3.665-8.167 8.167-8.167 4.502 0 8.167 3.665 8.167 8.167 0 4.502-3.665 8.167-8.167 8.167z" />
              </svg>
            </a>

            {/* Email Envelope Icon */}
            <a
              href="mailto:hello@quarkmade.com"
              aria-label="Send an Email"
              className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110 p-1 flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Footer: Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="[font-family:'Satoshi',_sans-serif] text-xs font-normal text-white/60">
            © {new Date().getFullYear()} QuarkMade. All Rights Reserved. Crafted with Next.js & Tailwind.
          </p>

          <div className="flex flex-wrap justify-center gap-6 [font-family:'Satoshi',_sans-serif] text-xs font-normal tracking-[0.12px] uppercase">
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
