"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import RotatingText from "../components/RotatingText";
import SeamlessVideo from "../components/SeamlessVideo";
import TextLoop from "../components/ui/TextLoop";

/**
 * Immersive, multi-layered Hero Section featuring:
 * - Seamless dual-stream twilight sunset video
 * - 3D Cinema container scroll exit with perspective tilt
 * - Interactive cursor-reactive parallax depth
 * - Organic drifting light leak & celestial starburst glow
 * - React Bits TextLoop cloud-weaving header
 */
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && document.body.classList.contains("page-revealed")) {
      setIsRevealed(true);
      return;
    }
    const handleReveal = () => setIsRevealed(true);
    window.addEventListener("page-revealed", handleReveal);
    // Fallback in case preloader is bypassed
    const fallback = setTimeout(() => setIsRevealed(true), 2400);
    return () => {
      window.removeEventListener("page-revealed", handleReveal);
      clearTimeout(fallback);
    };
  }, []);

  // 21st.dev 3D Cinema Container Scroll choreography (Hardware-composited for 120 FPS)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const cardRotateX = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <section
      ref={heroRef}
      className="block relative bg-background overflow-hidden select-none [perspective:1200px] [isolation:isolate]"
      id="hero"
    >
      <motion.div
        style={{
          rotateX: cardRotateX,
          scale: cardScale,
          y: cardY,
          transformOrigin: "center top",
        }}
        className="h-screen min-h-175 max-h-260 block relative z-1 overflow-hidden w-full max-md:h-[100svh] max-md:min-h-145 rounded-b-[2.5rem] border-b border-white/15 bg-foreground shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)] will-change-transform transform-gpu [contain:paint] [isolation:isolate]"
      >
        {/* Layer 1: Hardware-Accelerated Video Background with Zero-Overhead Looping */}
        <div className="h-full w-full block absolute inset-0 overflow-hidden pointer-events-none transform-gpu [contain:paint]">
          <SeamlessVideo
            src="/assets/branding/hero_vid.mp4"
            poster="/assets/branding/hero-sunset.webp"
            className="object-center align-middle scale-105"
          />
        </div>

        {/* Layer 2: Ambient Twilight Horizon Bloom */}
        <div className="h-full block absolute top-0 inset-x-0 z-2 pointer-events-none overflow-hidden [contain:paint]">
          {/* Warm amber-violet celestial glow */}
          <div
            className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full opacity-60 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 179, 138, 0.22) 0%, rgba(165, 148, 249, 0.16) 40%, rgba(212, 175, 55, 0.08) 70%, transparent 100%)",
            }}
          />

          {/* Twilight Horizon Celestial Flare */}
          <div
            className="absolute top-[48%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 245, 214, 0.35) 0%, rgba(212, 175, 55, 0.15) 50%, transparent 75%)",
            }}
          />
        </div>

        {/* Layer 3: Atmospheric Gradient & Dark Vignette */}
        <div
          className="h-full block absolute top-0 inset-x-0 z-2 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(11, 10, 18, 0.45) 0%, rgba(42, 24, 84, 0.22) 45%, rgba(11, 10, 18, 0.88) 100%)",
          }}
        />

        {/* Layer 4: Vertically Centered Editorial Hero Content with Subtle Parallax Float */}
        <motion.div
          style={{ y: contentY }}
          className="h-full flex flex-col justify-center items-center pt-24 pb-16 px-6 relative z-3 mx-auto max-w-screen max-md:pt-20 max-md:pb-12 max-md:px-4 [isolation:isolate]"
        >
          <div
            data-reveal
            className="flex flex-col items-center text-center max-w-5xl mx-auto gap-5 md:gap-6 text-white"
          >
            {/* React Bits TextLoop: Weaving through the sunset clouds */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={isRevealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 1.1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl relative mb-6 sm:mb-8 md:mb-12 select-none pointer-events-auto [isolation:isolate]"
            >
              <div
                className="w-full relative overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, transparent 4%, black 16%, black 84%, transparent 96%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, transparent 4%, black 16%, black 84%, transparent 96%, transparent 100%)",
                }}
              >
                <TextLoop
                  text="HIGH-CRAFT DIGITAL ARCHITECTURE · BESPOKE WEB EXPERIENCES · EST. MMXXIV · DIGITAL SANCTUARIES"
                  separator="·"
                  path="M -140 92 Q 600 6 1340 92"
                  viewBox="0 0 1200 105"
                  speed={70}
                  direction="forward"
                  fontSize={13.5}
                  fontWeight={500}
                  letterSpacing={2.8}
                  uppercase={true}
                  color="#FFFFFF"
                  ribbon={true}
                  ribbonColor="rgba(255, 255, 255, 0.08)"
                  ribbonBorder={true}
                  ribbonBorderColor="rgba(255, 255, 255, 0.18)"
                  ribbonWidth={40}
                  pauseOnHover={true}
                  className="w-full"
                />
              </div>

              {/* Left Cloud Bank Depth Occlusion Layer */}
              <div
                className="absolute -left-16 top-1/2 -translate-y-1/2 w-56 h-36 pointer-events-none rounded-full opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 50%, rgba(56, 32, 78, 0.7) 0%, rgba(42, 24, 84, 0.3) 50%, transparent 75%)",
                }}
              />

              {/* Right Cloud Bank Depth Occlusion Layer */}
              <div
                className="absolute -right-16 top-1/2 -translate-y-1/2 w-56 h-36 pointer-events-none rounded-full opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 50%, rgba(56, 32, 78, 0.7) 0%, rgba(42, 24, 84, 0.3) 50%, transparent 75%)",
                }}
              />
            </motion.div>

            {/* Main Headline: Satoshi Regular + Chillax Rotating Text */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 1.0, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="[font-family:'Satoshi',_sans-serif] text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-normal leading-[1.14] tracking-tight flex flex-wrap items-baseline justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-center drop-shadow-2xl"
              data-component="heading"
            >
              <span className="inline-block text-white">
                Crafting
              </span>

              <RotatingText
                texts={[
                  "digital flagships",
                  "interactive worlds",
                  "luxury experiences",
                  "bespoke websites",
                  "digital sanctuaries",
                ]}
                colors={[
                  "#F3E5AB", // 1. Champagne Gold
                  "#A594F9", // 2. Electric Iris / Violet
                  "#FFB38A", // 3. Sunset Amber / Coral
                  "#80E9DE", // 4. Celestial Aqua / Mint
                  "#F472B6", // 5. Sunlit Orchid / Rose
                ]}
                mainClassName="[font-family:'Chillax',_sans-serif] font-medium tracking-normal inline-flex transition-colors duration-300 drop-shadow-[0_0_24px_rgba(212,175,55,0.35)]"
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

              <span className="inline-block text-white">
                that command attention.
              </span>
            </motion.h1>

            {/* Editorial Sub-Ethos Descriptor */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="[font-family:'Satoshi',_sans-serif] text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-normal leading-relaxed tracking-wide drop-shadow-md px-2"
            >
              We architect bespoke digital flagships, interactive worlds, and luxury spaces engineered to elevate modern brands.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              transition={{ duration: 0.9, delay: 0.60, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center items-center gap-4 mt-2"
            >
              <Button href="#works" variant="gold">
                Explore Selected Works
              </Button>
              <Button href="#inquire" variant="secondary-inverse">
                Start a Project
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Layer 6: Subtle Animated Scroll Indicator */}
        <motion.a
          href="#works"
          initial={{ opacity: 0, y: 14 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 1.0, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-3 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group cursor-pointer"
        >
          <span className="[font-family:'Satoshi',_sans-serif] text-[10px] tracking-[0.3em] uppercase font-normal">
            SCROLL
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#D4AF37]/60 transition-colors shadow-[0_0_12px_rgba(0,0,0,0.4)]">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-[#D4AF37]"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
