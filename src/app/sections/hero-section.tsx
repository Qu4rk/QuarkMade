"use client";

import { motion } from "motion/react";
import Button from "../components/Button";
import RotatingText from "../components/RotatingText";

/** Hero section showcasing QuarkMade's sunset artwork, medium-stroke Chillax typography, and fluid rotating text. */
export default function HeroSection() {
  return (
    <section className="block relative bg-foreground overflow-hidden" id="hero">
      <div className="h-screen min-h-170 max-h-240 block relative z-1 overflow-hidden w-full max-md:h-[100svh] max-md:min-h-140">
        {/* Parallax Background Layer with User's Sunset Artwork */}
        <div className="h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none">
          <div
            data-parallax
            data-parallax-speed="0.25"
            className="h-[125%] w-full block absolute -top-[12%] inset-x-0"
          >
            <img
              src="/assets/branding/hero-sunset.jpg"
              alt="QuarkMade Cosmic Sunset Waves"
              className="w-full h-full object-cover object-center align-middle scale-105"
            />
          </div>
        </div>

        {/* Atmospheric Gradient & Vignette Overlay */}
        <div
          className="h-full block absolute top-0 inset-x-0 z-2 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(11, 10, 18, 0.45) 0%, rgba(42, 24, 84, 0.3) 45%, rgba(11, 10, 18, 0.85) 100%)",
          }}
        />

        {/* Vertically Centered Hero Content */}
        <div className="h-full flex flex-col justify-center items-center pt-24 pb-12 px-6 relative z-3 mx-auto max-w-screen max-md:pt-20 max-md:pb-10 max-md:px-4">
          <div
            data-reveal
            className="flex flex-col items-center text-center max-w-6xl mx-auto gap-7 text-white"
          >
            {/* Grand & Clean Headline with Chillax Medium Typography */}
            <motion.h1
              layout
              transition={{ type: "spring", damping: 32, stiffness: 240, mass: 0.8 }}
              className="[font-family:'Chillax',_sans-serif] text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.75rem] font-medium leading-[1.08] tracking-[-0.02em] flex flex-wrap items-baseline justify-center gap-x-3.5 sm:gap-x-4.5 gap-y-2 text-center drop-shadow-xl"
              data-component="heading"
            >
              <motion.span
                layout
                transition={{ type: "spring", damping: 32, stiffness: 240, mass: 0.8 }}
                className="inline-block font-medium"
              >
                Crafting
              </motion.span>

              <RotatingText
                texts={[
                  "digital flagships",
                  "interactive worlds",
                  "luxury experiences",
                  "bespoke websites",
                  "digital sanctuaries",
                ]}
                mainClassName="text-[#F3E5AB] italic font-medium inline-flex [font-family:'Chillax',_sans-serif]"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                widthTransition={{ type: "spring", damping: 32, stiffness: 240, mass: 0.8 }}
                rotationInterval={2800}
              />

              <motion.span
                layout
                transition={{ type: "spring", damping: 32, stiffness: 240, mass: 0.8 }}
                className="inline-block font-medium"
              >
                that command attention.
              </motion.span>
            </motion.h1>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-3">
              <Button href="#works" variant="gold">
                Explore Selected Works
              </Button>
              <Button href="#inquire" variant="secondary-inverse">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
