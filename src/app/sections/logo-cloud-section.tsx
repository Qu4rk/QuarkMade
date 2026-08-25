import Link from "next/link";
import QuarkLogo from "../components/QuarkLogo";
import { textLinkData } from "../content";

/** Footer Section for QuarkMade. */
export default function LogoCloudSection() {
  return (
    <footer className="block bg-transparent text-white pt-16 md:pt-20 pb-12 px-6 max-md:pt-12 max-md:px-4 max-md:pb-10 border-t border-white/10 relative z-1" id="footer">
      <style>{`
        @keyframes quark-footer-shimmer {
          0% {
            background-position: -150% 0, 0 0;
          }
          100% {
            background-position: 250% 0, 0 0;
          }
        }
        .quark-footer-shimmer-text {
          background-image:
            linear-gradient(
              90deg,
              transparent 0%,
              transparent 35%,
              #F3E5AB 45%,
              #FFFFFF 50%,
              #A594F9 55%,
              transparent 65%,
              transparent 100%
            ),
            linear-gradient(
              90deg,
              #FFFFFF 0%,
              #FFFFFF 45%,
              #D4AF37 55%,
              #4442DB 100%
            );
          background-size: 250% 100%, 100% 100%;
          background-repeat: no-repeat, no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: quark-footer-shimmer 2.2s linear infinite;
        }
      `}</style>
      <div className="flex flex-col gap-12 md:gap-14 mx-auto w-full max-w-screen">
        {/* Top Footer: Brand Statement & Client Logo Tags */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/10">
          <div className="flex flex-col gap-3 max-w-md">
            <QuarkLogo size={48} showText={true} />
            <p className="[font-family:'Satoshi',_sans-serif] text-sm text-white/70 leading-relaxed mt-2 font-normal">
              QuarkMade is a boutique digital craft studio designing bespoke, high-performance web experiences and interactive flagships.
            </p>
          </div>

          {/* Contact Channels: WhatsApp & Email Standalone Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* WhatsApp Icon (Outlined Vector matching user provided icon) */}
            <a
              href="https://wa.me/35799057690"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp (+357 99 057690)"
              className="text-white/70 hover:text-white transition-all duration-300 hover:scale-105 min-w-[44px] min-h-[44px] p-2.5 rounded-full border border-white/10 hover:border-[#25D366]/50 bg-white/[0.04] flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.07L2 22L7.09 20.67C8.54 21.52 10.22 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM3.85 12C3.85 7.5 7.5 3.85 12 3.85C16.5 3.85 20.15 7.5 20.15 12C20.15 16.5 16.5 20.15 12 20.15C10.42 20.15 8.95 19.7 7.7 18.92L7.35 18.7L4.35 19.49L5.16 16.58L4.92 16.2C4.24 14.94 3.85 13.51 3.85 12ZM8.6 7.4C8.42 7.4 8.16 7.46 7.93 7.71C7.7 7.96 7.05 8.57 7.05 9.8C7.05 11.03 7.95 12.21 8.08 12.38C8.2 12.54 9.82 15.04 12.3 16.11C12.89 16.37 13.35 16.52 13.71 16.63C14.3 16.82 14.84 16.79 15.27 16.73C15.75 16.66 16.74 16.13 16.95 15.55C17.16 14.97 17.16 14.47 17.1 14.37C17.04 14.27 16.88 14.21 16.63 14.09C16.38 13.97 15.18 13.38 14.96 13.3C14.74 13.22 14.58 13.18 14.42 13.43C14.26 13.68 13.79 14.23 13.65 14.39C13.51 14.55 13.37 14.57 13.12 14.45C12.87 14.33 12.08 14.07 11.14 13.23C10.41 12.58 9.92 11.78 9.78 11.53C9.64 11.28 9.76 11.15 9.88 11.03C9.99 10.92 10.13 10.74 10.25 10.6C10.37 10.46 10.41 10.36 10.49 10.2C10.57 10.04 10.53 9.9 10.47 9.78C10.41 9.66 9.94 8.5 9.74 8.03C9.54 7.57 9.35 7.63 9.2 7.62C9.05 7.61 8.89 7.61 8.73 7.61L8.6 7.4Z"
                />
              </svg>
            </a>

            {/* Email Envelope Icon */}
            <a
              href="mailto:liasides.elias@gmail.com"
              aria-label="Send an Email"
              className="text-white/70 hover:text-white transition-all duration-300 hover:scale-105 min-w-[44px] min-h-[44px] p-2.5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 bg-white/[0.04] flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 fill-none stroke-current"
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
            © {new Date().getFullYear()} QuarkMade. All Rights Reserved. Brought to life by{" "}
            <span className="[font-family:'Chillax',_sans-serif] font-medium tracking-[0.04em] text-white inline-block drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">
              <span className="quark-footer-shimmer-text">Quark</span>
            </span>
            .
          </p>

          <div className="flex flex-wrap justify-center gap-6 [font-family:'Satoshi',_sans-serif] text-xs font-normal tracking-[0.12px] uppercase">
            {textLinkData.map((d, i) => {
              const isExternal = d.href.startsWith("http") || d.href.startsWith("mailto:");
              if (isExternal) {
                return (
                  <a
                    key={i}
                    href={d.href}
                    className="inline-flex min-h-11 items-center px-1 text-white/70 hover:text-[#D4AF37] transition-colors"
                  >
                    {d.text}
                  </a>
                );
              }
              return (
                <Link
                  key={i}
                  href={d.href}
                  className="inline-flex min-h-11 items-center px-1 text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  {d.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
