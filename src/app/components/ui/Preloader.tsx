"use client";

import React, { useEffect, useState, useRef } from "react";
import { assetPath } from "../../../lib/site";

/**
 * High-Craft Asset-Aware Studio Preloader for QuarkMade:
 * - Real asset synchronization (Web Fonts, Document ReadyState, Critical Hero Assets)
 * - Smooth physics-interpolated progress counter with calibrated luxury threshold (~1.6s)
 * - Authentic Quark "Q" emblem with radiant pulse + luxury shimmer typography
 * - Seamless pitch-black obsidian shutter curtains (zero seam artifacts)
 * - Coordinated Lenis scroll locking and synchronous page reveal dispatch
 */
export default function Preloader() {
  const [active, setActive] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Lock scroll and reset scroll restoration on hard reload
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      if (lenis) lenis.stop();
    }

    const startTime = performance.now();
    const minDisplayDuration = 1600; // Calibrated luxury playback threshold (ms)
    let isMounted = true;

    // Track real asset readiness
    let fontsReady = false;
    let heroImageReady = false;
    let domReady = false;

    // 1. Initial stage: Start moving immediately
    targetProgressRef.current = 18;

    // 2. Preload Hero Image
    const heroImg = new Image();
    heroImg.src = assetPath("/assets/branding/hero-sunset.webp");
    heroImg.onload = () => {
      heroImageReady = true;
      targetProgressRef.current = Math.max(targetProgressRef.current, fontsReady ? 82 : 58);
    };
    heroImg.onerror = () => {
      heroImageReady = true;
      targetProgressRef.current = Math.max(targetProgressRef.current, 55);
    };

    // 3. Web Fonts Ready (Chillax & Satoshi)
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        fontsReady = true;
        targetProgressRef.current = Math.max(targetProgressRef.current, heroImageReady ? 88 : 64);
      }).catch(() => {
        fontsReady = true;
      });
    } else {
      fontsReady = true;
    }

    // 4. Document / Window Load
    if (typeof document !== "undefined") {
      if (document.readyState === "complete") {
        domReady = true;
      } else {
        const handleLoad = () => {
          domReady = true;
        };
        window.addEventListener("load", handleLoad, { once: true });
      }
    }

    // 5. Smooth physics-based progress interpolation
    const updateLoop = (now: number) => {
      if (!isMounted) return;

      const elapsed = now - startTime;

      // Increment progress targets organically based on elapsed time and assets
      if (elapsed > 350 && targetProgressRef.current < 42) {
        targetProgressRef.current = 42;
      }
      if (elapsed > 750 && targetProgressRef.current < 72) {
        targetProgressRef.current = 72;
      }
      if (elapsed > 1150 && targetProgressRef.current < 92) {
        targetProgressRef.current = 92;
      }

      // Check if all criteria and minimum duration are met
      const allAssetsLoaded = fontsReady && (heroImageReady || elapsed > 1000) && (domReady || elapsed > 1200);
      const minTimeElapsed = elapsed >= minDisplayDuration;

      if (allAssetsLoaded && minTimeElapsed) {
        targetProgressRef.current = 100;
      }

      // Smooth interpolation
      const diff = targetProgressRef.current - currentProgressRef.current;
      const speed = currentProgressRef.current > 85 ? 0.10 : 0.07;
      currentProgressRef.current += diff * speed;

      if (Math.abs(100 - currentProgressRef.current) < 0.35 && targetProgressRef.current === 100) {
        currentProgressRef.current = 100;
      }

      const rounded = Math.min(100, Math.floor(currentProgressRef.current));
      setDisplayProgress(rounded);

      if (currentProgressRef.current < 100) {
        rafRef.current = requestAnimationFrame(updateLoop);
      } else {
        // Complete -> Trigger shutter exit after brief moment at 100%
        setTimeout(() => {
          if (isMounted) {
            triggerExitSequence();
          }
        }, 120);
      }
    };

    rafRef.current = requestAnimationFrame(updateLoop);

    // Fallback safety timeout
    const safetyTimeout = setTimeout(() => {
      targetProgressRef.current = 100;
    }, 3800);

    const triggerExitSequence = () => {
      setIsExiting(true);

      // Dispatch page revealed as shutter starts parting
      setTimeout(() => {
        if (typeof window !== "undefined") {
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "";
          document.body.classList.add("page-revealed");
          window.dispatchEvent(new CustomEvent("page-revealed"));
          const lenis = (window as unknown as { __lenis?: { start: () => void } }).__lenis;
          if (lenis) lenis.start();
        }
      }, 250);

      // Unmount component once shutters completely clear
      setTimeout(() => {
        if (isMounted) {
          setActive(false);
        }
      }, 1100);
    };

    return () => {
      isMounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(safetyTimeout);
      if (typeof window !== "undefined") {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        const lenis = (window as unknown as { __lenis?: { start: () => void } }).__lenis;
        if (lenis) lenis.start();
      }
    };
  }, []);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] select-none pointer-events-none overflow-hidden flex items-center justify-center bg-[#0B0A12]"
      aria-hidden="true"
    >
      <style>{`
        @keyframes preloader-shimmer {
          0% {
            background-position: -150% 0, 0 0;
          }
          100% {
            background-position: 250% 0, 0 0;
          }
        }
        .preloader-shimmer-text {
          background-image:
            linear-gradient(
              90deg,
              transparent 0%,
              transparent 35%,
              #F3E5AB 45%,
              #FFFFFF 50%,
              #A594F9 55%,
              transparent 65%,
              transparent 100%
            ),
            linear-gradient(
              90deg,
              #FFFFFF 0%,
              #FFFFFF 52%,
              #D4AF37 56%,
              #D4AF37 100%
            );
          background-size: 250% 100%, 100% 100%;
          background-repeat: no-repeat, no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: preloader-shimmer 1.8s linear infinite;
        }
        @keyframes preloader-pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.08); opacity: 1; }
        }
      `}</style>

      {/* Top Shutter Curtain Panel */}
      <div
        className={`absolute inset-x-0 top-0 h-[50.5%] bg-[#0B0A12] z-10 will-change-transform transition-transform duration-800 ease-[cubic-bezier(0.83,0,0.17,1)] ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Bottom Shutter Curtain Panel */}
      <div
        className={`absolute inset-x-0 bottom-0 h-[50.5%] bg-[#0B0A12] z-10 will-change-transform transition-transform duration-800 ease-[cubic-bezier(0.83,0,0.17,1)] ${
          isExiting ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Center Animated Logo & Status Lockup */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center gap-7 px-6 text-center will-change-transform transition-all duration-400 ease-out ${
          isExiting ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
        }`}
      >
        {/* Row: Official Emblem + Divider + Typography */}
        <div className="flex items-center justify-center gap-5 sm:gap-6">
          {/* Official Quark "Q" Emblem with Ambient Halo */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
            {/* Ambient Radial Glow Ring */}
            <div
              className="absolute inset-0 rounded-full bg-[#4442DB]/30 blur-md pointer-events-none"
              style={{ animation: "preloader-pulse 2s ease-in-out infinite" }}
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(68,66,219,0.35)] flex items-center justify-center bg-[#0B0A12]">
              <img
                src={assetPath("/assets/branding/quark-logo.webp")}
                alt="QuarkMade Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain p-1.5"
              />
            </div>
          </div>

          {/* Vertical Hairline Divider */}
          <div className="w-[1.5px] h-10 sm:h-12 bg-gradient-to-b from-[#D4AF37] via-white/40 to-[#4442DB] shrink-0 opacity-80" />

          {/* Brand Typography Lockup with Shimmer */}
          <div className="flex flex-col items-start justify-center text-left whitespace-nowrap min-w-[160px] sm:min-w-[190px]">
            <div className="[font-family:'Chillax',_sans-serif] font-medium text-lg sm:text-2xl leading-none tracking-[0.14em] uppercase inline-block drop-shadow-[0_0_16px_rgba(212,175,55,0.25)] select-none">
              <span className="preloader-shimmer-text">
                QUARKMADE
              </span>
            </div>
            <div className="[font-family:'Satoshi',_sans-serif] font-normal text-[9.5px] sm:text-[11px] text-white/70 tracking-[0.32em] uppercase mt-1.5 leading-none">
              DIGITAL CRAFT STUDIO
            </div>
          </div>
        </div>

        {/* Bottom Progress Counter */}
        <div className="flex items-center gap-3 pt-1.5">
          <span className="[font-family:'Satoshi',_sans-serif] text-[10px] md:text-[11px] font-medium text-white/40 tracking-[0.24em] uppercase">
            INITIALIZING
          </span>
          <div className="w-24 sm:w-28 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4442DB] via-[#A594F9] to-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-[width] duration-75 ease-out"
              style={{ width: `${displayProgress}%` }}
            />
          </div>
          <span className="[font-family:'Satoshi',_sans-serif] text-[11px] md:text-xs font-semibold text-[#D4AF37] tabular-nums tracking-wider min-w-[2.5rem] text-right">
            {displayProgress < 10 ? `0${displayProgress}` : displayProgress}%
          </span>
        </div>
      </div>
    </div>
  );
}

