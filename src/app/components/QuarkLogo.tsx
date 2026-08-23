import React from "react";

interface QuarkLogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

/**
 * Official QuarkMade Logo Lockup:
 * - Circular Quark "Q" emblem with purple vortex
 * - "QUARKMADE" typography in Chillax (Medium stroke / weight 500)
 * - "DIGITAL CRAFT" studio tag in Saans Mono
 */
export default function QuarkLogo({ className = "", showText = true, size = 46 }: QuarkLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Circular Quark "Q" Logo Emblem */}
      <div
        className="relative flex items-center justify-center shrink-0 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img
          src="/assets/branding/quark-logo.png"
          alt="QuarkMade Logo"
          width={size}
          height={size}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Title Lockup */}
      {showText && (
        <div className="flex flex-col justify-center text-left">
          <span className="[font-family:'Chillax',_sans-serif] font-medium text-base sm:text-lg md:text-[1.25rem] leading-none tracking-[0.12em] uppercase transition-colors text-inherit">
            QUARK<span className="text-[#4442DB] dark:text-[#635BFF]">MADE</span>
          </span>
          <span className="[font-family:'Satoshi',_sans-serif] font-normal text-[9.5px] leading-none tracking-[0.26em] uppercase opacity-75 mt-1 text-inherit">
            DIGITAL CRAFT
          </span>
        </div>
      )}
    </div>
  );
}
