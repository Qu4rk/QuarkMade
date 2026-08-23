"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import RotatingText from "../components/RotatingText";
import SeamlessVideo from "../components/SeamlessVideo";

/**
 * Immersive, multi-layered Hero Section featuring:
 * - Seamless dual-stream twilight sunset video
 * - Interactive cursor-reactive 3D parallax depth
 * - Organic drifting light leak & celestial starburst glow
 * - Editorial studio tagline badge & brand ethos
 * - Staggered typography entrance & animated scroll indicator
 */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  // Cursor-reactive parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 60, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Layer translations based on mouse position
  const videoX = useTransform(smoothX, [-0.5, 0.5], [12, -12]);
  const videoY = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const flareX = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const flareY = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xNorm = e.clientX / innerWidth - 0.5;
      const yNorm = e.clientY / innerHeight - 0.5;
      mouseX.set(xNorm);
      mouseY.set(yNorm);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      className="block relative bg-foreground overflow-hidden select-none"
      id="hero"
    >
      <div className="h-screen min-h-175 max-h-260 block relative z-1 overflow-hidden w-full max-md:h-[100svh] max-md:min-h-145">
        {/* Layer 1: Parallax Video Background with Mouse Reactivity */}
        <motion.div
          style={{ x: mounted ? videoX : 0, y: mounted ? videoY : 0 }}
          className="h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none scale-105"
        >
          <div
            data-parallax
            data-parallax-speed="0.25"
            className="h-[125%] w-full block absolute -top-[12%] inset-x-0"
          >
            <SeamlessVideo
              src="/assets/branding/hero_vid.mp4"
              poster="/assets/branding/hero-sunset.jpg"
              fadeDuration={1.3}
              className="object-center align-middle scale-105"
            />
          </div>
        </motion.div>

        {/* Layer 2: Organic Light Leak & Ambient Twilight Bloom */}
        <motion.div
          style={{ x: mounted ? flareX : 0, y: mounted ? flareY : 0 }}
          className="h-full block absolute top-0 inset-x-0 z-2 pointer-events-none overflow-hidden"
        >
          {/* Drifting warm amber-violet light leak */}
          <div
            className="hero-light-leak absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 179, 138, 0.28) 0%, rgba(165, 148, 249, 0.22) 40%, rgba(212, 175, 55, 0.15) 70%, transparent 100%)",
            }}
          />

          {/* Twilight Horizon Celestial Glow */}
          <div
            className="hero-star-flare absolute top-[48%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 245, 214, 0.45) 0%, rgba(212, 175, 55, 0.2) 45%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </motion.div>

        {/* Layer 3: Atmospheric Gradient & Dark Vignette */}
        <div
          className="h-full block absolute top-0 inset-x-0 z-2 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(11, 10, 18, 0.5) 0%, rgba(42, 24, 84, 0.28) 45%, rgba(11, 10, 18, 0.88) 100%)",
          }}
        />

        {/* Layer 4: Tactile Film Grain Texture */}
        <div
          className="h-full block absolute top-0 inset-x-0 z-2 pointer-events-none opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 5: Vertically Centered Editorial Hero Content */}
        <div className="h-full flex flex-col justify-center items-center pt-24 pb-16 px-6 relative z-3 mx-auto max-w-screen max-md:pt-20 max-md:pb-12 max-md:px-4">
          <div
            data-reveal
            className="flex flex-col items-center text-center max-w-5xl mx-auto gap-5 md:gap-6 text-white"
          >
            {/* Studio Editorial Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
              </span>
              <span className="[font-family:'Saans_Mono',_monospace] text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/90 font-semibold">
                HIGH-CRAFT DIGITAL ARCHITECTURE · EST. MMXXIV
              </span>
            </motion.div>

            {/* Main Headline: Ivar Headline + Chillax Rotating Text */}
            <motion.h1
              layout
              transition={{ type: "spring", damping: 32, stiffness: 240, mass: 0.8 }}
              className="[font-family:'Ivar_Headline',_serif] text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-normal leading-[1.14] tracking-tight flex flex-wrap items-baseline justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-center drop-shadow-2xl"
              data-component="heading"
            >
              <motion.span
                layout
                transition={{ type: "spring", damping: 32, stiffness: 240, mass: 0.8 }}
                className="inline-block text-white"
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

              <motion.span
                layout
                transition={{ type: "spring", damping: 32, stiffness: 240, mass: 0.8 }}
                className="inline-block text-white"
              >
                that command attention.
              </motion.span>
            </motion.h1>

            {/* Editorial Sub-Ethos Descriptor */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="[font-family:Denim,_serif] text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-normal leading-relaxed tracking-wide drop-shadow-md px-2"
            >
              We architect bespoke digital flagships, interactive worlds, and luxury spaces engineered to elevate modern brands.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
        </div>

        {/* Layer 6: Subtle Animated Scroll Indicator */}
        <motion.a
          href="#works"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-3 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group cursor-pointer"
        >
          <span className="[font-family:'Saans_Mono',_monospace] text-[10px] tracking-[0.3em] uppercase font-medium">
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
      </div>
    </section>
  );
}
