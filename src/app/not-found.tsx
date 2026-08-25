"use client";

import React from "react";
import Link from "next/link";
import QuarkLogo from "./components/QuarkLogo";
import ProjectBadge from "./components/ProjectBadge";

/**
 * Impeccable Custom 404 Page for QuarkMade Flagship Studio:
 * - Luxury Dark Obsidian Atmosphere with ambient twilight flares
 * - Large architectural typographic coordinate display
 * - Streamlined studio navigation & recovery routes
 * - Standardized footer signature with Chillax multi-hue shimmer
 */
export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B0A12] text-white selection:bg-[#4442DB] selection:text-white relative overflow-hidden flex flex-col justify-between py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
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
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
      `}</style>

      {/* Atmospheric Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] h-[350px] sm:h-[450px] bg-[#4442DB]/12 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-12 right-12 w-[350px] sm:w-[500px] h-[250px] sm:h-[350px] bg-[#D4AF37]/08 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-12 left-12 w-[300px] h-[250px] bg-[#A594F9]/08 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Top Header Navigation */}
      <header className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between pb-6 sm:pb-8 border-b border-white/10">
        <Link href="/" className="group" aria-label="QuarkMade Home">
          <QuarkLogo size={42} showText={true} />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm [font-family:'Satoshi',_sans-serif] font-medium text-white/70 hover:text-[#D4AF37] transition-colors uppercase tracking-[0.14em] py-2 px-3.5 rounded-full border border-white/10 hover:border-[#D4AF37]/40 bg-white/[0.03]"
        >
          <span>←</span> Return to Flagship
        </Link>
      </header>

      {/* Main Center Editorial Lockup */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center py-10 sm:py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <h1 className="[font-family:'Chillax',_sans-serif] text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium text-white tracking-tight leading-[1.05] drop-shadow-2xl">
              Lost in <br className="hidden sm:inline" />
              <span className="text-white/95">Digital Space.</span>
            </h1>

            <p className="[font-family:'Satoshi',_sans-serif] text-base sm:text-lg md:text-xl text-white/75 leading-relaxed font-normal max-w-xl">
              The spatial artifact or digital coordinate you navigated to does not exist or has been relocated within our studio architecture.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/"
                className="inline-flex items-center justify-center py-3.5 px-7 [font-family:'Satoshi',_sans-serif] font-semibold text-xs sm:text-[0.8125rem] uppercase tracking-[0.14em] bg-[#4442DB] text-white border border-[#D4AF37]/40 hover:bg-[#5654E4] hover:border-[#D4AF37] shadow-[0_0_20px_rgba(68,66,219,0.4)] transition-all duration-200 text-center"
              >
                Return to Studio Flagship
              </Link>
              <Link
                href="/#works"
                className="inline-flex items-center justify-center py-3.5 px-6 [font-family:'Satoshi',_sans-serif] font-medium text-xs sm:text-[0.8125rem] uppercase tracking-[0.14em] bg-white/[0.06] text-white/90 border border-white/15 hover:border-white/30 hover:bg-white/[0.1] hover:text-white transition-all duration-200 text-center"
              >
                Explore Selected Works →
              </Link>
            </div>

            {/* Quick Links Hub */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs [font-family:'Satoshi',_sans-serif] tracking-wider uppercase text-white/50">
              <span className="text-white/30 font-medium">Quick Routes:</span>
              <Link href="/#philosophy" className="hover:text-[#D4AF37] transition-colors">
                Philosophy
              </Link>
              <Link href="/#works" className="hover:text-[#D4AF37] transition-colors">
                Selected Works
              </Link>
              <Link href="/#journal" className="hover:text-[#D4AF37] transition-colors">
                Journal
              </Link>
              <a
                href="https://wa.me/35799057690?text=Hi%20Elias,%20I%20reached%20a%20missing%20page%20on%20QuarkMade."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366]/80 hover:text-[#25D366] transition-colors"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>

          {/* Right Column: Architectural 404 Watermark & Spatial Emblem */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative select-none pointer-events-none mt-6 lg:mt-0">
            <div className="relative flex items-center justify-center animate-float-gentle">
              
              {/* Massive Ambient Backdrop 404 */}
              <div
                className="[font-family:'Chillax',_sans-serif] font-semibold text-[8rem] xs:text-[10rem] sm:text-[14rem] md:text-[16rem] lg:text-[18rem] leading-none tracking-tighter opacity-15 select-none"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(68,66,219,0.3) 60%, transparent 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                404
              </div>

              {/* Center Floating Orbital Ring Lockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24 sm:w-36 sm:h-36 rounded-full border border-white/15 bg-[#0B0A12]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(68,66,219,0.35)] flex items-center justify-center p-4 sm:p-5">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#FFFFFF"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="25"
                      stroke="#4442DB"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50 50 L84 84"
                      stroke="#FFFFFF"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M44 56 L70 82"
                      stroke="#4442DB"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Signature */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60 [font-family:'Satoshi',_sans-serif]">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} QuarkMade. All Rights Reserved. Brought to life by{" "}
          <span className="[font-family:'Chillax',_sans-serif] font-medium tracking-[0.04em] text-white inline-block drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">
            <span className="quark-footer-shimmer-text">Quark</span>
          </span>
          .
        </p>
        <div className="flex flex-wrap justify-center gap-6 tracking-[0.12px] uppercase">
          <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">
            Terms of Service
          </Link>
          <a
            href="mailto:liasides.elias@gmail.com"
            className="hover:text-[#D4AF37] transition-colors"
          >
            Direct Desk
          </a>
        </div>
      </footer>
    </main>
  );
}
