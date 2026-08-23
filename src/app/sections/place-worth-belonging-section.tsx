"use client";

import React from "react";
import ScrollWordReveal from "../components/ui/ScrollWordReveal";

/** Manifesto section presenting QuarkMade's core design philosophy and studio mission. */
export default function PlaceWorthBelongingSection() {
  return (
    <section className="block bg-background py-24 md:py-36 px-6 max-md:py-16 max-md:px-4 relative overflow-hidden" id="philosophy">
      <div className="flex flex-col gap-10 mx-auto w-full max-w-4xl text-center">
        <div
          data-reveal
          className="[font-family:'Satoshi',_sans-serif] text-xs md:text-sm font-normal tracking-[0.25em] text-[#4442DB] uppercase"
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
