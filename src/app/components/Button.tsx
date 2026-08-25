import React from "react";
import Icon5 from "../svgs/svg-icon5";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary-purple" | "gold" | "primary-inverse" | "secondary-inverse" | "primary-dark";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  showIcon?: boolean;
}

/**
 * Authentic QuarkMade CTA Button / Link Button:
 * - Font: "Saans Mono", monospace, 13px, font-weight 500, letter-spacing 0.13px, uppercase
 * - Minimum rendered height: 44px for touch accessibility, padding: 12px 16px, square corners
 * - Color Palette: Purple (#4442DB), Gold (#D4AF37), White (#FFFFFF), Midnight Black (#0B0A12)
 */
export default function Button({
  href,
  type = "button",
  variant = "primary-purple",
  children,
  className = "",
  onClick,
  showIcon = true,
}: ButtonProps) {
  let variantClasses = "";
  if (variant === "primary-purple") {
    variantClasses = "bg-[#4442db] text-white hover:bg-[#5654e4] border border-[#d4af37]/30 hover:border-[#d4af37] shadow-[0_0_15px_rgba(68,66,219,0.3)]";
  } else if (variant === "gold") {
    variantClasses = "bg-[#d4af37] text-[#0b0a12] font-semibold hover:bg-[#e5c158] shadow-[0_0_15px_rgba(212,175,55,0.3)]";
  } else if (variant === "primary-inverse") {
    variantClasses = "bg-white text-[#0b0a12] hover:bg-white/90 hover:text-[#4442db] backdrop-blur-md";
  } else if (variant === "secondary-inverse") {
    variantClasses = "bg-white/12 text-white hover:bg-white/20 border border-white/20 hover:border-[#d4af37]/50 backdrop-blur-md";
  } else if (variant === "primary-dark") {
    variantClasses = "bg-[#0b0a12] text-white hover:bg-[#171524] border border-[#4442db]/30 hover:border-[#4442db] hover:text-[#d4af37]";
  }

  // Mobile sections use a subtle scale transform, so 52px renders to at least a 44px hit area.
  const baseClasses = `inline-flex min-h-[52px] md:min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap [font-family:'Satoshi',_sans-serif] font-normal text-[13px] font-medium leading-[13px] tracking-[0.13px] uppercase px-4 py-3 rounded-none transition-all duration-200 ease-out outline-none select-none ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} data-component="button" onClick={onClick}>
        {showIcon && <Icon5 />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses} data-component="button" onClick={onClick}>
      {showIcon && <Icon5 />}
      <span>{children}</span>
    </button>
  );
}
