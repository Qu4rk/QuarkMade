"use client";

import React, { useEffect, useState, useRef } from "react";

/**
 * Ultra-Fidelity Studio Preloader for QuarkMade:
 * - Zero-Latency Frame 0 Execution: Instant inline script starts the progress bar & counter the exact millisecond HTML parses
 * - Embedded 4K Vector Emblem: Authentic SVG Quark "Q" emblem with radiant electric purple halo
 * - Shimmer Brand Typography: Chillax "QUARKMADE" with luxury sweep shimmer & Satoshi studio descriptor
 * - Asset-Aware React Hydration: Smoothly hands off to React to complete at 100% and part the obsidian shutters
 * - Seamless Pitch-Black Curtains: 50.5% overlapping obsidian shutters with zero seam line
 */
export default function Preloader() {
  const [active, setActive] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const isExitingRef = useRef(false);

  useEffect(() => {
    // Notify the global window that React is ready
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

    let isMounted = true;
    let fontsReady = false;

    // Check fonts
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        fontsReady = true;
      }).catch(() => {
        fontsReady = true;
      });
    } else {
      fontsReady = true;
    }

    // React completes progress and triggers exit
    const exitTimer = setTimeout(() => {
      if (!isMounted || isExitingRef.current) return;
      isExitingRef.current = true;

      // Finish progress bar to 100%
      const barEl = document.getElementById("quark-preloader-bar");
      const numEl = document.getElementById("quark-preloader-num");
      if (barEl) barEl.style.width = "100%";
      if (numEl) numEl.textContent = "100%";

      // Hold for 160ms at 100%, then trigger curtain open
      setTimeout(() => {
        if (!isMounted) return;
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
      }, 160);
    }, 1700);

    return () => {
      isMounted = false;
      clearTimeout(exitTimer);
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
      id="quark-preloader-root"
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
        {/* Row: Embedded Vector Emblem + Divider + Typography */}
        <div className="flex items-center justify-center gap-5 sm:gap-6">
          {/* Authentic Vector Quark "Q" Emblem with Ambient Halo */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
            {/* Ambient Radial Glow Ring */}
            <div
              className="absolute -inset-1 rounded-full bg-[#4442DB]/35 blur-md pointer-events-none"
              style={{ animation: "preloader-pulse 2.2s ease-in-out infinite" }}
            />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border border-[#D4AF37]/35 shadow-[0_0_22px_rgba(68,66,219,0.45)] flex items-center justify-center bg-[#0B0A12] p-2">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer White Orbital Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="#FFFFFF"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Inner Electric Purple Vortex Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  stroke="#4442DB"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                />

                {/* Outer Diagonal Leg (#FFFFFF) */}
                <path
                  d="M50 50 L84 84"
                  stroke="#FFFFFF"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Inner Parallel Diagonal Leg (#4442DB) */}
                <path
                  d="M44 56 L70 82"
                  stroke="#4442DB"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                />
              </svg>
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
            <div className="[font-family:'Satoshi',_sans-serif] font-normal text-[9.5px] sm:text-[11px] text-white/75 tracking-[0.32em] uppercase mt-1.5 leading-none">
              DIGITAL CRAFT STUDIO
            </div>
          </div>
        </div>

        {/* Bottom Progress Counter */}
        <div className="flex items-center gap-3 pt-1.5" suppressHydrationWarning={true}>
          <span className="[font-family:'Satoshi',_sans-serif] text-[10px] md:text-[11px] font-medium text-white/40 tracking-[0.24em] uppercase">
            INITIALIZING
          </span>
          <div className="w-24 sm:w-28 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <div
              id="quark-preloader-bar"
              className="h-full bg-gradient-to-r from-[#4442DB] via-[#A594F9] to-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-[width] duration-75 ease-out"
              style={{ width: "4%" }}
              suppressHydrationWarning={true}
            />
          </div>
          <span
            id="quark-preloader-num"
            className="[font-family:'Satoshi',_sans-serif] text-[11px] md:text-xs font-semibold text-[#D4AF37] tabular-nums tracking-wider min-w-[2.5rem] text-right"
            suppressHydrationWarning={true}
          >
            04%
          </span>
        </div>
      </div>

      {/* Instant Frame 0 Execution Script (Executed immediately after DOM nodes are parsed) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
                window.scrollTo(0, 0);
                document.documentElement.style.overflow = 'hidden';
                document.body.style.overflow = 'hidden';

                var bar = document.getElementById('quark-preloader-bar');
                var num = document.getElementById('quark-preloader-num');
                if (!bar || !num) return;

                var start = performance.now();
                var duration = 1600;

                function tick(now) {
                  var elapsed = now - start;
                  var progress = Math.min(1, elapsed / duration);
                  var ease = 1 - Math.pow(1 - progress, 3);
                  var val = Math.min(96, Math.floor(ease * 96));
                  
                  if (bar) bar.style.width = val + '%';
                  if (num) num.textContent = (val < 10 ? '0' + val : val) + '%';

                  if (progress < 1 && !document.body.classList.contains('page-revealed')) {
                    requestAnimationFrame(tick);
                  }
                }
                requestAnimationFrame(tick);
              } catch (e) {}
            })();
          `,
        }}
      />
    </div>
  );
}

