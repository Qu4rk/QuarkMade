"use client";

import React, { useEffect, useState } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import {
  getPreloaderTimeline,
  PRELOADER_CURTAIN_DURATION_MS,
} from "../../lib/preloader-timeline";

/**
 * 100% GPU-Composited Studio Preloader for QuarkMade:
 * - Pure hardware-accelerated CSS animations (zero JS timer drift or layout snapping)
 * - Exact official logo colors: Pure White (#FFFFFF) & Electric Purple (#4442DB)
 * - Coordinated Lenis scroll locking & clean curtain exit with zero residual artifacts
 */
export default function Preloader() {
  const [active, setActive] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!active) return;

    const originalDocOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;

    const revealPage = () => {
      document.documentElement.style.overflow = originalDocOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.classList.add("page-revealed");
      window.dispatchEvent(new CustomEvent("page-revealed"));
      const lenis = (window as unknown as { __lenis?: { start: () => void } }).__lenis;
      lenis?.start();
    };

    if (prefersReducedMotion) {
      revealPage();
      setActive(false);
      return;
    }

    // Lock scroll and reset scroll restoration on hard reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const lenis = (window as unknown as { __lenis?: { stop: () => void } }).__lenis;
    lenis?.stop();

    // CSS animation delays begin at component mount, so its lifecycle must
    // use that same clock rather than the earlier page-navigation clock.
    const mountedAt = performance.now();
    const timeline = getPreloaderTimeline(mountedAt);

    // Release scroll & dispatch page reveal event as curtain opens (1.8s from page start)
    const scrollTimer = setTimeout(() => {
      revealPage();
    }, timeline.revealAt - mountedAt);

    // A small fallback prevents an overlay from getting stuck if an animation
    // event is suppressed, while animationend remains the normal cleanup path.
    const removeTimer = setTimeout(() => {
      setActive(false);
      revealPage();
    }, timeline.removeAt - mountedAt + 200);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(removeTimer);
      document.documentElement.style.overflow = originalDocOverflow;
      document.body.style.overflow = originalBodyOverflow;
      const activeLenis = (window as unknown as { __lenis?: { start: () => void } }).__lenis;
      activeLenis?.start();
    };
  }, [active, prefersReducedMotion]);

  const handleCurtainEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.animationName !== "q-shutter-top") return;
    setActive(false);
  };

  if (!active) return null;

  return (
    <div
      id="quark-preloader-root"
      className="fixed inset-0 z-[99999] select-none pointer-events-none overflow-hidden flex items-center justify-center"
      suppressHydrationWarning={true}
    >
      <style>{`
        @keyframes q-draw-outer {
          0% { stroke-dashoffset: 252; transform: rotate(-90deg); }
          100% { stroke-dashoffset: 0; transform: rotate(270deg); }
        }
        @keyframes q-draw-inner {
          0% { stroke-dashoffset: 170; transform: rotate(90deg); }
          100% { stroke-dashoffset: 0; transform: rotate(-270deg); }
        }
        @keyframes q-draw-tail {
          0% { stroke-dashoffset: 50; opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes q-divider-expand {
          0% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        @keyframes q-typography-reveal {
          0% { opacity: 0; transform: translateX(-14px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes q-center-exit {
          0% { opacity: 1; transform: scale(1); filter: blur(0px); }
          100% { opacity: 0; transform: scale(0.94); filter: blur(8px); }
        }
        @keyframes q-shutter-top {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-100%); }
        }
        @keyframes q-shutter-bottom {
          0% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
      `}</style>

      {/* Top Shutter Curtain Panel */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#0B0A12] z-10 will-change-transform border-b border-white/[0.02]"
        style={{
          animation: `q-shutter-top ${PRELOADER_CURTAIN_DURATION_MS / 1000}s cubic-bezier(0.83, 0, 0.17, 1) 1.8s forwards`,
        }}
        onAnimationEnd={handleCurtainEnd}
      />

      {/* Bottom Shutter Curtain Panel */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0B0A12] z-10 will-change-transform border-t border-white/[0.02]"
        style={{
          animation: `q-shutter-bottom ${PRELOADER_CURTAIN_DURATION_MS / 1000}s cubic-bezier(0.83, 0, 0.17, 1) 1.8s forwards`,
        }}
      />

      {/* Center Animated Logo Lockup */}
      <div
        className="relative z-20 flex flex-col items-center justify-center gap-8 px-6 text-center will-change-transform"
        style={{
          animation: "q-center-exit 0.35s ease-out 1.55s forwards",
        }}
      >
        {/* Row: Emblem + Divider + Typography */}
        <div className="flex items-center justify-center gap-5 sm:gap-6">
          {/* Exact Official Quark "Q" Vector Emblem */}
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
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
                r="40"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="251.32"
                style={{
                  transformOrigin: "center",
                  animation: "q-draw-outer 1.0s cubic-bezier(0.83, 0, 0.17, 1) forwards",
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
                  transformOrigin: "center",
                  animation: "q-draw-inner 1.15s cubic-bezier(0.83, 0, 0.17, 1) 0.05s forwards",
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
                  animation: "q-draw-tail 0.45s cubic-bezier(0.83, 0, 0.17, 1) 0.7s forwards",
                  strokeDashoffset: 50,
                  opacity: 0,
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
                  animation: "q-draw-tail 0.45s cubic-bezier(0.83, 0, 0.17, 1) 0.75s forwards",
                  strokeDashoffset: 40,
                  opacity: 0,
                }}
              />
            </svg>
          </div>

          {/* Vertical Hairline Divider */}
          <div
            className="w-[1.5px] h-10 sm:h-12 bg-gradient-to-b from-white/90 via-white/40 to-[#4442DB] origin-top shrink-0"
            style={{
              animation: "q-divider-expand 0.55s cubic-bezier(0.83, 0, 0.17, 1) 0.75s forwards",
              transform: "scaleY(0)",
              opacity: 0,
            }}
          />

          {/* Brand Typography Lockup */}
          <div
            className="flex flex-col items-start justify-center text-left whitespace-nowrap min-w-[170px] sm:min-w-[210px]"
            style={{
              animation: "q-typography-reveal 0.6s cubic-bezier(0.83, 0, 0.17, 1) 0.8s forwards",
              opacity: 0,
            }}
          >
            <div className="[font-family:'Chillax',_sans-serif] font-medium text-lg sm:text-2xl md:text-[1.75rem] text-white tracking-[0.14em] uppercase leading-none">
              QUARK<span className="text-[#4442DB] ml-0.5">MADE</span>
            </div>
            <div className="[font-family:'Satoshi',_sans-serif] font-normal text-[9px] sm:text-[11px] text-white/70 tracking-[0.32em] uppercase mt-1.5 leading-none">
              DIGITAL CRAFT
            </div>
          </div>
        </div>

        {/* Bottom Progress Counter */}
        <div className="flex items-center gap-3 pt-1" suppressHydrationWarning={true}>
          <span className="[font-family:'Satoshi',_sans-serif] text-[10.5px] md:text-xs font-medium text-white/40 tracking-[0.22em] uppercase">
            INITIALIZING
          </span>
          <div className="w-20 h-[1.5px] bg-white/10 rounded-full overflow-hidden">
            <div
              id="quark-preloader-bar"
              className="h-full bg-gradient-to-r from-white/60 to-[#4442DB]"
              style={{ width: "0%" }}
              suppressHydrationWarning={true}
            />
          </div>
          <span
            id="quark-preloader-num"
            className="[font-family:'Satoshi',_sans-serif] text-[11px] md:text-xs font-semibold text-[#4442DB] tabular-nums tracking-wider min-w-[2.5rem] text-right"
            suppressHydrationWarning={true}
          >
            00%
          </span>
        </div>
      </div>

      {/* Frame-0 Execution Script for zero-delay progress on hard reload */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var bar = document.getElementById('quark-preloader-bar');
                var num = document.getElementById('quark-preloader-num');
                if (!bar || !num) return;

                var start = performance.now();
                var duration = 1600;

                function tick(now) {
                  var elapsed = now - start;
                  var progress = Math.min(100, Math.floor((elapsed / duration) * 100));
                  
                  if (bar) bar.style.width = progress + '%';
                  if (num) num.textContent = (progress < 10 ? '0' + progress : progress) + '%';

                  if (progress < 100 && !document.body.classList.contains('page-revealed')) {
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
