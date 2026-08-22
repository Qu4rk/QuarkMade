import React from "react";
import Icon5 from "../svgs/svg-icon5";

interface ButtonProps {
  href?: string;
  variant?: "primary-inverse" | "secondary-inverse" | "primary-dark";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  showIcon?: boolean;
}

/**
 * Authentic Base31 CTA Button / Link Button:
 * - Font: "Saans Mono", monospace, 13px, font-weight 500, letter-spacing 0.13px, uppercase
 * - Height: 36px (h-9), padding: 12px 16px (px-4 py-3), rounded-none (0px border-radius)
 * - Variants:
 *   1. primary-inverse: solid white bg, #002800 text, hover:bg-white/85
 *   2. secondary-inverse: rgba(255,255,255,0.15) glass bg, white text, backdrop-blur-md, hover:bg-white/25
 *   3. primary-dark: solid #002800 bg, white text, hover:bg-[#003800]
 */
export default function Button({
  href,
  variant = "primary-inverse",
  children,
  className = "",
  onClick,
  showIcon = true,
}: ButtonProps) {
  let variantClasses = "";
  if (variant === "primary-inverse") {
    variantClasses = "bg-white text-[#002800] hover:bg-white/85 backdrop-blur-md";
  } else if (variant === "secondary-inverse") {
    variantClasses = "bg-white/15 text-white hover:bg-white/25 backdrop-blur-md";
  } else if (variant === "primary-dark") {
    variantClasses = "bg-[#002800] text-white hover:bg-[#003800] backdrop-blur-md";
  }

  const baseClasses = `inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap [font-family:'Saans_Mono',_monospace] text-[13px] font-medium leading-[13px] tracking-[0.13px] uppercase h-9 px-4 py-3 rounded-none transition-colors duration-150 ease-out outline-none select-none ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} data-component="button" onClick={onClick}>
        {showIcon && <Icon5 />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} data-component="button" onClick={onClick}>
      {showIcon && <Icon5 />}
      <span>{children}</span>
    </button>
  );
}
