"use client";

import { useState } from "react";
import CardGridItem from "../components/card-grid-item";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Icon5 from "../svgs/svg-icon5";
import { cards as cardsContent } from "../content";

/** Base section with interactive carousel slider, smooth transitions, and Base31 buttons. */
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
    <section className="block bg-background">
      <div className="flex py-16 px-6 flex-col gap-8 mx-auto w-full max-w-screen max-md:py-10 max-md:px-4 max-md:gap-6">
        <div data-reveal className="grid pb-8 gap-y-16 gap-x-4 grid-cols-12 max-md:pb-6 max-md:gap-y-12 max-md:gap-x-3">
          <div className="block col-start-3 col-end-[span_8] [font-family:Denim,_serif] text-[3.625rem] font-semibold leading-[4rem] tracking-[0.31px] text-center max-md:col-span-full max-md:text-4xl max-md:leading-[2.5rem]" data-component="heading">
            <p className="h-full block">
              <span className="inline" />
              ON
              <br className="inline" />
              BASE
            </p>
          </div>
          <div className="block col-start-4 col-end-[span_6] [font-family:'Ivar_Mono',_monospace] leading-[1.3125rem] text-center uppercase max-md:col-span-full max-md:text-sm max-md:leading-[1.125rem]">
            <p className="block">
              Stories, updates, and milestones
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
              className="block relative rounded-full overflow-hidden text-center bg-accent backdrop-blur-md h-0.5 w-full"
              data-component="button"
              aria-valuemax={cards.length}
              aria-valuemin={1}
              aria-valuenow={currentIndex + 1}
              role="progressbar"
            >
              <span
                className="block absolute top-0 left-0 bg-foreground h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-center items-center gap-5 mx-auto">
            <button
              onClick={prevSlide}
              className="flex left-6 rounded-full justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap backdrop-blur-md cursor-pointer h-12 w-12 max-md:hidden hover:bg-accent transition-colors duration-150"
              data-component="button"
              aria-label="Previous slide"
            >
              <Icon6 />
            </button>
            <button
              onClick={nextSlide}
              className="flex right-6 rounded-full justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap backdrop-blur-md cursor-pointer h-12 w-12 max-md:hidden hover:bg-accent transition-colors duration-150"
              data-component="button"
              aria-label="Next slide"
            >
              <Icon7 />
            </button>
          </div>
        </div>

        <div data-reveal className="flex justify-center">
          <a
            className="btn-base btn-primary-dark"
            data-component="button"
            href="/on-base-blog"
          >
            <Icon5 />
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
