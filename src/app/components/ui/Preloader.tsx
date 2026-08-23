"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Luxury Studio Preloader for QuarkMade:
 * - Color Palette: Pure White (#FFFFFF) & Official Brand Electric Purple (#4442DB) on Obsidian (#0B0A12)
 * - Exact vector geometry matching official Quark "Q" emblem
 * - Vertical hairline divider & typographic expansion
 * - Smooth counter 00% -> 100%
 * - Theatrical curtain shutter exit [0.83, 0, 0.17, 1]
 */
export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"drawing" | "revealing" | "exiting">("drawing");

  useEffect(() => {
    // Lock body scroll during preloader
    document.body.style.overflow = "hidden";

    // Progress counter ticker
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.max(1, Math.floor((100 - prev) * 0.14));
        return Math.min(100, prev + increment);
      });
    }, 30);

    // Sequence timelines matching Nabil Issa tempo
    const revealTimer = setTimeout(() => {
      setPhase("revealing");
    }, 900);

    const exitTimer = setTimeout(() => {
      setPhase("exiting");
    }, 2250);

    const doneTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2850);

    return () => {
      clearInterval(interval);
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.2 },
          }}
          className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden bg-[#0B0A12] flex items-center justify-center"
        >
          {/* Dual Obsidian Shutter Panels */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.85, ease: [0.83, 0, 0.17, 1] },
            }}
            className="absolute inset-x-0 top-0 h-1/2 bg-[#0B0A12] z-0 border-b border-white/[0.03]"
          />
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: "100%",
              transition: { duration: 0.85, ease: [0.83, 0, 0.17, 1] },
            }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0B0A12] z-0 border-t border-white/[0.03]"
          />

          {/* Ambient Brand Electric Purple Halo Flare */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: [0.25, 0.55, 0.35], scale: [0.9, 1.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-[#4442DB]/35 via-[#635BFF]/20 to-transparent blur-[100px] pointer-events-none z-10"
          />

          {/* Central Animated Logo & Typography Lockup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === "exiting" ? 0 : 1,
              scale: phase === "exiting" ? 0.94 : 1,
              filter: phase === "exiting" ? "blur(10px)" : "blur(0px)",
            }}
            transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
            className="relative z-20 flex flex-col items-center justify-center gap-10 px-6 text-center"
          >
            {/* Center Lockup Container */}
            <motion.div
              layout
              transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
              className="flex items-center justify-center gap-5 sm:gap-6"
            >
              {/* Exact Official Quark "Q" Vector Emblem */}
              <motion.div
                layout
                className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shrink-0"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer White Orbital Ring */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#FFFFFF"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, rotate: -90 }}
                    animate={{ pathLength: 1, rotate: 270 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.83, 0, 0.17, 1],
                    }}
                  />

                  {/* Inner Electric Purple Ring */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="27"
                    stroke="#4442DB"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, rotate: 90 }}
                    animate={{ pathLength: 1, rotate: -270 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.83, 0, 0.17, 1],
                      delay: 0.08,
                    }}
                  />

                  {/* Outer Diagonal Leg (#FFFFFF) */}
                  <motion.path
                    d="M52 52 L86 86"
                    stroke="#FFFFFF"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: phase !== "drawing" ? 1 : 0,
                      opacity: phase !== "drawing" ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.83, 0, 0.17, 1],
                    }}
                  />

                  {/* Inner Parallel Diagonal Leg (Electric Purple #4442DB) */}
                  <motion.path
                    d="M46 58 L72 84"
                    stroke="#4442DB"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: phase !== "drawing" ? 1 : 0,
                      opacity: phase !== "drawing" ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.83, 0, 0.17, 1],
                      delay: 0.05,
                    }}
                  />
                </svg>
              </motion.div>

              {/* Revealable Divider + Typography with Smooth Clip Mask */}
              <AnimatePresence>
                {phase !== "drawing" && (
                  <motion.div
                    initial={{ opacity: 0, width: 0, scaleX: 0 }}
                    animate={{ opacity: 1, width: "auto", scaleX: 1 }}
                    exit={{ opacity: 0, width: 0, scaleX: 0 }}
                    transition={{ duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
                    className="flex items-center gap-5 sm:gap-6 overflow-visible origin-left"
                  >
                    {/* Vertical Hairline Divider (White to Electric Purple) */}
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
                      className="w-[1.5px] h-10 sm:h-12 bg-gradient-to-b from-white/90 via-white/40 to-[#4442DB] origin-top shrink-0"
                    />

                    {/* Brand Typography */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1], delay: 0.1 }}
                      className="flex flex-col items-start justify-center text-left whitespace-nowrap min-w-[170px] sm:min-w-[220px]"
                    >
                      <div className="[font-family:'Chillax',_sans-serif] font-medium text-lg sm:text-2xl md:text-[1.75rem] text-white tracking-[0.14em] uppercase leading-none">
                        QUARK<span className="text-[#4442DB] ml-0.5">MADE</span>
                      </div>
                      <div className="[font-family:'Satoshi',_sans-serif] font-normal text-[9px] sm:text-[11px] text-white/70 tracking-[0.32em] uppercase mt-1.5 leading-none">
                        DIGITAL CRAFT
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Bottom Progress Counter */}
            <div className="flex items-center gap-3 pt-1">
              <span className="[font-family:'Satoshi',_sans-serif] text-[10.5px] md:text-xs font-medium text-white/40 tracking-[0.22em] uppercase">
                INITIALIZING
              </span>
              <div className="w-20 h-[1.5px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-white/60 to-[#4442DB]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="[font-family:'Satoshi',_sans-serif] text-[11px] md:text-xs font-semibold text-[#4442DB] tabular-nums tracking-wider min-w-[2.5rem] text-right">
                {progress < 10 ? `0${progress}` : progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
