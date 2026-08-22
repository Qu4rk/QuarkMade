"use client";

import Button from "../components/Button";
import RotatingText from "../components/RotatingText";

/** Hero section showcasing QuarkMade's sunset artwork, animated rotating headline, and editorial typography. */
export default function HeroSection() {
  return (
    <section className="block relative bg-foreground overflow-hidden" id="hero">
      <div className="h-screen min-h-180 max-h-240 block relative z-1 overflow-hidden w-full max-md:h-[100svh] max-md:min-h-140">
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
              "linear-gradient(180deg, rgba(11, 10, 18, 0.45) 0%, rgba(42, 24, 84, 0.4) 50%, rgba(11, 10, 18, 0.85) 100%)",
          }}
        />

        {/* Hero Content */}
        <div className="h-full flex flex-col justify-end pb-20 md:pb-28 px-6 relative z-3 mx-auto max-w-screen max-md:pb-16 max-md:px-4">
          <div
            data-reveal
            className="flex flex-col items-center text-center max-w-4xl mx-auto gap-6 text-white"
          >
            {/* Main Animated Headline with RotatingText */}
            <h1
              className="[font-family:'Ivar_Headline',_serif] text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.14] tracking-tight"
              data-component="heading"
            >
              Crafting{" "}
              <RotatingText
                texts={[
                  "digital flagships",
                  "interactive worlds",
                  "luxury experiences",
                  "bespoke websites",
                  "digital sanctuaries",
                ]}
                mainClassName="text-[#F3E5AB] italic font-normal inline-flex align-baseline"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2600}
              />
              {" "}that command attention.
            </h1>

            {/* Subtext */}
            <p className="[font-family:Denim,_serif] text-base md:text-xl text-white/85 max-w-2xl font-light leading-relaxed">
              QuarkMade designs bespoke, high-performance web experiences where brand prestige, motion craftsmanship, and technical rigor unite.
            </p>

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
