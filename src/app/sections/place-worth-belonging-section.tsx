"use client";

import React from "react";
import ScrollWordReveal from "../components/ui/ScrollWordReveal";

/** Manifesto section presenting QuarkMade's core design philosophy and studio mission. */
export default function PlaceWorthBelongingSection() {
  return (
    <section className="block bg-transparent py-28 md:py-44 px-6 max-md:py-20 max-md:px-4 relative overflow-hidden" id="philosophy">
      {/* Atmospheric radial vignette to keep typography legible */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(11, 10, 18, 0.4) 0%, rgba(11, 10, 18, 0.85) 75%, rgba(11, 10, 18, 0.98) 100%)",
        }}
      />

      <div className="flex flex-col gap-10 mx-auto w-full max-w-4xl text-center relative z-2">
        <div
          data-reveal
          className="[font-family:'Satoshi',_sans-serif] text-xs md:text-sm font-normal tracking-[0.25em] text-[#D4AF37] uppercase"
        >
          STUDIO MANIFESTO
        </div>

        <div
          data-reveal
          className="[font-family:'Satoshi',_sans-serif] text-3xl sm:text-5xl md:text-6xl text-foreground font-normal leading-tight tracking-tight"
          data-component="heading"
        >
          <ScrollWordReveal
            text="Digital spaces worth remembering."
            className="[font-family:'Satoshi',_sans-serif] text-3xl sm:text-5xl md:text-6xl text-foreground font-normal leading-tight tracking-tight justify-center"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <ScrollWordReveal
            text="QuarkMade designs bespoke, high-performance web experiences where brand prestige, motion craftsmanship, and technical rigor unite."
            highlights={["QuarkMade"]}
            className="[font-family:'Satoshi',_sans-serif] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-center justify-center"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <ScrollWordReveal
            text="From the horological precision of Chronotomi to the architectural stillness of Lumina Living and QuieTide, we design digital flagships where emotion, aesthetics, and engineering grow together."
            highlights={["Chronotomi", "Lumina", "Living", "QuieTide"]}
            className="[font-family:'Satoshi',_sans-serif] text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center justify-center"
          />
        </div>
      </div>
    </section>
  );
}

