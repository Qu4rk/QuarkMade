"use client";

import React from "react";

interface QuarkLogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
  shimmer?: boolean;
}

/**
 * Official QuarkMade Logo Lockup:
 * - Circular Quark "Q" emblem with purple vortex
 * - "QUARKMADE" typography in Chillax with luxury light-sweep shimmer
 * - "DIGITAL CRAFT" studio tag in Saans Mono
 */
export default function QuarkLogo({
  className = "",
  showText = true,
  size = 46,
  shimmer = true,
}: QuarkLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3.5 select-none shrink-0 ${className}`}>
      {/* Official Circular Quark "Q" Logo Emblem */}
      <div
        className="relative flex items-center justify-center shrink-0 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11"
      >
        <img
          src="/assets/branding/quark-logo.webp"
          alt="QuarkMade Logo"
          width={size}
          height={size}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Title Lockup with Single-Element Composite Shimmer */}
      {showText && (
        <div className="flex flex-col justify-center text-left min-w-0">
          <style>{`
            @keyframes quark-unified-shimmer {
              0% {
                background-position: -150% 0, 0 0;
              }
              100% {
                background-position: 250% 0, 0 0;
              }
            }
            .quark-shimmer-unified {
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
                  #FFFFFF 52%,
                  #4442DB 56%,
                  #4442DB 100%
                );
              background-size: 250% 100%, 100% 100%;
              background-repeat: no-repeat, no-repeat;
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: quark-unified-shimmer 1.5s linear infinite;
            }
          `}</style>
          <span className="[font-family:'Chillax',_sans-serif] font-medium text-[13.5px] xs:text-[15px] sm:text-lg md:text-[1.25rem] leading-none tracking-[0.1em] sm:tracking-[0.12em] uppercase inline-block drop-shadow-[0_0_14px_rgba(212,175,55,0.18)] select-none whitespace-nowrap">
            {shimmer ? (
              <span className="quark-shimmer-unified">
                QUARKMADE
              </span>
            ) : (
              <>
                <span className="text-white">QUARK</span>
                <span className="text-[#4442DB] dark:text-[#635BFF] ml-0.5">MADE</span>
              </>
            )}
          </span>
          <span className="[font-family:'Satoshi',_sans-serif] font-normal text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] leading-none tracking-[0.22em] sm:tracking-[0.26em] uppercase opacity-75 mt-0.5 sm:mt-1 text-inherit whitespace-nowrap">
            DIGITAL CRAFT
          </span>
        </div>
      )}
    </div>
  );
}
