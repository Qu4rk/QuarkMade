"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Button from "../components/Button";
import ProjectBadge from "../components/ProjectBadge";

/** Featured Project 3: QuieTide Case Study with actual website snapshot, official logo mark, and Chillax Gold heading. */
export default function RootedInHistorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 80 });
  const cardRotateX = useTransform(smoothProgress, [0, 0.45, 0.85, 1], [18, 0, 0, -14]);
  const cardScale = useTransform(smoothProgress, [0, 0.45, 0.85, 1], [0.86, 1, 1, 0.9]);
  const cardY = useTransform(smoothProgress, [0, 0.45, 1], [80, 0, -50]);
  const imageY = useTransform(smoothProgress, [0, 1], ["-14%", "14%"]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.45, 1], [0.15, 0.55, 0.15]);

  return (
    <section ref={sectionRef} className="block bg-transparent relative overflow-hidden [perspective:1400px]" id="quietide-showcase">
      {/* Background Ambient Glow Drifting with Scroll */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[65vw] h-[450px] rounded-full bg-[#4442DB]/15 blur-[120px] pointer-events-none"
      />

      <div className="flex py-24 px-6 flex-col gap-16 mx-auto w-full max-w-screen max-md:py-16 max-md:px-4 max-md:gap-10 relative z-1">
        {/* Main Section Heading: Chillax Medium Gold Brand Title with Logo to the left */}
        <div data-reveal className="flex flex-col items-center justify-center gap-2 text-center max-w-4xl mx-auto" data-component="heading">
          <div className="flex items-center justify-center gap-3.5 sm:gap-4 flex-wrap">
            <img
              src="/assets/portfolio/logos/quietide-logo.webp"
              alt="QuieTide"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105"
            />
            <span className="[font-family:'Chillax',_sans-serif] font-medium text-[2.75rem] sm:text-[3.5rem] md:text-[3.85rem] text-[#D4AF37] leading-none tracking-tight">
              QuieTide:
            </span>
          </div>
          <p className="[font-family:'Satoshi',_sans-serif] text-[2.25rem] sm:text-[3rem] md:text-[3.35rem] font-normal leading-[1.12] tracking-[0.25px] text-foreground">
            The art of stillness
          </p>
        </div>

        <ProjectBadge label="FEATURED PROJECT 03 / MEDITERRANEAN DIGITAL SANCTUARY" />

        {/* 3D Parallax Card Frame */}
        <div className="w-full flex justify-center [perspective:1200px]">
          <motion.div
            style={{
              scale: cardScale,
              rotateX: cardRotateX,
              y: cardY,
              transformOrigin: "center center",
            }}
            data-reveal
            className="block relative z-1 max-w-242.5 mx-auto rounded-2xl aspect-[231/130] w-full max-md:aspect-[343/428] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] group border border-foreground/10"
          >
            <div className="h-full block absolute top-0 inset-x-0 rounded-2xl overflow-hidden bg-foreground">
              {/* Real Snapshot of QuieTide with Differential Parallax Scrub */}
              <motion.div
                style={{ y: imageY }}
                className="h-[128%] w-full block absolute -top-[14%] inset-x-0 overflow-hidden"
              >
              <img
                className="w-full h-full block absolute overflow-clip object-cover align-middle scale-105 transition-transform duration-700 group-hover:scale-100"
                alt="QuieTide Mediterranean Digital Sanctuary Showcase"
                src="/assets/portfolio/quietide_hero.webp"
              />
            </motion.div>
            {/* Subtle Contrast Gradient */}
            <div
              className="h-full block absolute top-0 inset-x-0 z-2 transition-opacity duration-500 group-hover:opacity-85"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11, 10, 18, 0.45) 0%, rgba(42, 24, 84, 0.5) 50%, rgba(11, 10, 18, 0.85) 100%)",
              }}
            />
            <div className="h-full flex absolute top-0 inset-x-0 z-3 py-22 px-9 justify-center items-center max-md:py-16">
              <div className="flex max-w-119.5 flex-col justify-between items-center gap-6 text-center text-white">
                <div className="flex flex-col items-center gap-3">
                  {/* Official QuieTide Logo Emblem */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-2 bg-black/40 border border-[#D4AF37]/40 shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-transform duration-500 group-hover:scale-110 flex items-center justify-center backdrop-blur-md">
                    <img
                      src="/assets/portfolio/logos/quietide-logo.webp"
                      alt="QuieTide Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="[font-family:'Satoshi',_sans-serif] text-2xl font-bold tracking-[0.3em] uppercase text-white drop-shadow-md">
                    QUIETIDE
                  </span>
                  <span className="[font-family:'Satoshi',_sans-serif] text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                    QUIETIDE-WEBSITE
                  </span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5 max-md:gap-4">
                  <Button href="https://qu4rk.github.io/quietide-website/" variant="gold">
                    Visit Live Site (QuieTide)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

        <div data-reveal className="grid max-w-181 mx-auto flex-col gap-6 grid-cols-1 text-center">
          <div className="block [font-family:'Satoshi',_sans-serif] text-lg font-normal leading-relaxed tracking-[0.16px] max-md:text-base text-foreground/80">
            <p className="block">
              A curated digital experience capturing Mediterranean light and rhythmic coastal serenity through WebGL shaders, smooth motion, and contemplative pacing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
