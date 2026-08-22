import React from "react";

interface QuarkLogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export default function QuarkLogo({ className = "", showText = true, size = 36 }: QuarkLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Circular Quark "Q" Logo */}
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

      {/* Brand Title */}
      {showText && (
        <div className="flex flex-col">
          <span className="[font-family:'Saans_Mono',_monospace] font-bold text-sm leading-tight tracking-[0.18em] uppercase transition-colors">
            QUARK<span className="text-[#4442DB] dark:text-[#635BFF]">MADE</span>
          </span>
          <span className="[font-family:'Saans_Mono',_monospace] text-[9px] font-medium tracking-[0.25em] uppercase text-foreground/60 dark:text-white/60">
            DIGITAL CRAFT
          </span>
        </div>
      )}
    </div>
  );
}
