"use client";

import React, { useEffect, useState, useRef } from "react";
import { assetPath } from "../../../lib/site";

/**
 * High-Craft Asset-Aware Studio Preloader for QuarkMade:
 * - Real asset synchronization (Web Fonts, Document ReadyState, Critical Hero Assets)
 * - Smooth physics-interpolated progress counter with calibrated luxury threshold
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
    // Lock scroll immediately
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      if (lenis) lenis.stop();
    }

    const startTime = performance.now();
    const minDisplayDuration = 1200; // Minimum luxury display window (ms)
    let isMounted = true;

    // Track real assets
    let fontsReady = false;
    let heroImageReady = false;
    let domReady = false;

    // 1. Initial stage: Start moving immediately
    targetProgressRef.current = 20;

    // 2. Preload Hero Image
    const heroImg = new Image();
    heroImg.src = assetPath("/assets/branding/hero-sunset.webp");
    heroImg.onload = () => {
      heroImageReady = true;
      targetProgressRef.current = Math.max(targetProgressRef.current, fontsReady ? 80 : 55);
    };
    heroImg.onerror = () => {
      heroImageReady = true;
      targetProgressRef.current = Math.max(targetProgressRef.current, 50);
    };

    // 3. Web Fonts Ready
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        fontsReady = true;
        targetProgressRef.current = Math.max(targetProgressRef.current, heroImageReady ? 85 : 60);
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

    // 5. Physics-based smooth progress interpolation
    const updateLoop = (now: number) => {
      if (!isMounted) return;

      const elapsed = now - startTime;

      // Gradually advance target based on time & asset state
      if (elapsed > 400 && targetProgressRef.current < 45) {
        targetProgressRef.current = 45;
      }
      if (elapsed > 800 && targetProgressRef.current < 75) {
        targetProgressRef.current = 75;
      }

      // Check if all criteria are satisfied
      const allAssetsLoaded = (fontsReady && (heroImageReady || elapsed > 900) && (domReady || elapsed > 1000));
      const minTimeElapsed = elapsed >= minDisplayDuration;

      if (allAssetsLoaded && minTimeElapsed) {
        targetProgressRef.current = 100;
      }

      // Smooth interpolation toward target
      const diff = targetProgressRef.current - currentProgressRef.current;
      const speed = currentProgressRef.current > 85 ? 0.12 : 0.08;
      currentProgressRef.current += diff * speed;

      if (Math.abs(100 - currentProgressRef.current) < 0.4 && targetProgressRef.current === 100) {
        currentProgressRef.current = 100;
      }

      const rounded = Math.min(100, Math.floor(currentProgressRef.current));
      setDisplayProgress(rounded);

      if (currentProgressRef.current < 100) {
        rafRef.current = requestAnimationFrame(updateLoop);
      } else {
        // Complete -> Trigger shutter exit
        triggerExitSequence();
      }
    };

    rafRef.current = requestAnimationFrame(updateLoop);

    // Fallback safety timeout (ensure preloader unblocks under any slow network condition)
    const safetyTimeout = setTimeout(() => {
      targetProgressRef.current = 100;
    }, 3200);

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
      }, 1050);
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
      className="fixed inset-0 z-[99999] select-none pointer-events-none overflow-hidden flex items-center justify-center"
      aria-hidden="true"
    >
      <style>{`
        @keyframes q-ring-spin-outer {
          0% { stroke-dashoffset: 252; transform: rotate(-90deg); }
          50% { stroke-dashoffset: 60; transform: rotate(90deg); }
          100% { stroke-dashoffset: 0; transform: rotate(270deg); }
        }
        @keyframes q-ring-spin-inner {
          0% { stroke-dashoffset: 170; transform: rotate(90deg); }
          50% { stroke-dashoffset: 40; transform: rotate(-90deg); }
          100% { stroke-dashoffset: 0; transform: rotate(-270deg); }
        }
        @keyframes q-leg-draw {
          0% { stroke-dashoffset: 50; opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>

      {/* Top Shutter Curtain Panel */}
      <div
        className={`absolute inset-x-0 top-0 h-[50.5%] bg-[#0B0A12] z-10 will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.83,0,0.17,1)] ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Bottom Shutter Curtain Panel */}
      <div
        className={`absolute inset-x-0 bottom-0 h-[50.5%] bg-[#0B0A12] z-10 will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.83,0,0.17,1)] ${
          isExiting ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Center Animated Logo & Status Lockup */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center gap-7 px-6 text-center will-change-transform transition-all duration-400 ease-out ${
          isExiting ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
        }`}
      >
        {/* Row: Vector Emblem + Divider + Typography */}
        <div className="flex items-center justify-center gap-5 sm:gap-6">
          {/* Authentic Quark "Q" Vector Emblem with Dual Glowing Rings */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
            <svg
              className="w-full h-full drop-shadow-[0_0_18px_rgba(68,66,219,0.4)]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer White Orbital Ring */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="251.32"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "50% 50%",
                  animation: "q-ring-spin-outer 1.3s cubic-bezier(0.83, 0, 0.17, 1) infinite alternate",
                }}
              />

              {/* Inner Electric Purple Vortex Ring */}
              <circle
                cx="50"
                cy="50"
                r="27"
                stroke="#4442DB"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeDasharray="169.64"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "50% 50%",
                  animation: "q-ring-spin-inner 1.4s cubic-bezier(0.83, 0, 0.17, 1) 0.05s infinite alternate",
                }}
              />

              {/* Outer Diagonal Leg (#FFFFFF) */}
              <path
                d="M52 52 L86 86"
                stroke="#FFFFFF"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="48"
                style={{
                  animation: "q-leg-draw 0.5s cubic-bezier(0.83, 0, 0.17, 1) forwards",
                }}
              />

              {/* Inner Parallel Diagonal Leg (#4442DB) */}
              <path
                d="M46 58 L72 84"
                stroke="#4442DB"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeDasharray="36"
                style={{
                  animation: "q-leg-draw 0.5s cubic-bezier(0.83, 0, 0.17, 1) 0.05s forwards",
                }}
              />
            </svg>
          </div>

          {/* Vertical Hairline Divider */}
          <div className="w-[1.5px] h-10 sm:h-12 bg-gradient-to-b from-[#D4AF37] via-white/40 to-[#4442DB] shrink-0 opacity-80" />

          {/* Brand Typography Lockup */}
          <div className="flex flex-col items-start justify-center text-left whitespace-nowrap min-w-[160px] sm:min-w-[190px]">
            <div className="[font-family:'Chillax',_sans-serif] font-medium text-lg sm:text-2xl text-white tracking-[0.14em] uppercase leading-none">
              QUARK<span className="text-[#D4AF37] ml-0.5 font-semibold">MADE</span>
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

