"use client";

import { useState } from "react";
import CardGridItem from "../components/card-grid-item";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Button from "../components/Button";
import { cards as cardsContent } from "../content";

/** Studio Journal and Case Studies section with carousel slider and progress tracking. */
export default function BaseSection({ cards = cardsContent } = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, cards.length - 1);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const progressPercent = cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0;

  return (
    <section className="block bg-background py-20 md:py-28 px-6 max-md:py-16 max-md:px-4" id="journal">
      <div className="flex flex-col gap-12 mx-auto w-full max-w-screen">
        <div data-reveal className="flex flex-col items-center gap-4 text-center">
          <div className="[font-family:'Saans_Mono',_monospace] text-xs font-semibold tracking-[0.25em] text-[#4442DB] uppercase">
            STUDIO ESSAYS & CASE STUDIES
          </div>
          <div className="[font-family:'Ivar_Headline',_serif] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-foreground" data-component="heading">
            <p className="block">
              Studio Journal
            </p>
          </div>
          <div className="[font-family:'Ivar_Mono',_monospace] text-sm md:text-base text-foreground/70 uppercase tracking-wider">
            <p className="block">
              Insights on design, motion, and digital flagships
            </p>
          </div>
        </div>

        <div className="block relative w-full">
          <div className="block overflow-hidden">
            <div
              className="flex -ml-4 max-md:-ml-3 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 30}%)` }}
            >
              {cards.map((d) => (
                <CardGridItem key={d.variant} d={d} />
              ))}
            </div>
          </div>

          {/* Interactive Progress Bar */}
          <div className="flex relative my-8 justify-center items-center max-md:my-6">
            <div
              className="block relative rounded-full overflow-hidden text-center bg-[#4442DB]/10 backdrop-blur-md h-1 w-full max-w-md mx-auto"
              data-component="button"
              aria-valuemax={cards.length}
              aria-valuemin={1}
              aria-valuenow={currentIndex + 1}
              role="progressbar"
            >
              <span
                className="block absolute top-0 left-0 bg-[#4442DB] h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-center items-center gap-5 mx-auto">
            <button
              onClick={prevSlide}
              className="flex rounded-full justify-center items-center shrink-0 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium text-foreground bg-foreground/5 hover:bg-[#4442DB] hover:text-white cursor-pointer h-12 w-12 transition-colors duration-150 shadow-sm"
              data-component="button"
              aria-label="Previous slide"
            >
              <Icon6 />
            </button>
            <button
              onClick={nextSlide}
              className="flex rounded-full justify-center items-center shrink-0 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium text-foreground bg-foreground/5 hover:bg-[#4442DB] hover:text-white cursor-pointer h-12 w-12 transition-colors duration-150 shadow-sm"
              data-component="button"
              aria-label="Next slide"
            >
              <Icon7 />
            </button>
          </div>
        </div>

        <div data-reveal className="flex justify-center mt-4">
          <Button href="#inquire" variant="primary-purple">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
