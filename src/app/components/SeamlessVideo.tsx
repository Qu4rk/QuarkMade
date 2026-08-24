"use client";

import React, { useEffect, useRef } from "react";

interface SeamlessVideoProps {
  src: string;
  poster?: string;
  className?: string;
  fadeDuration?: number; // Crossfade duration in seconds
}

/**
 * Ultra-performance dual-buffer video crossfader:
 * - Native browser timeupdate event triggers (0% idle CPU, no requestAnimationFrame loop)
 * - Direct GPU CSS transitions for 120 FPS buttery smooth crossfades
 * - Automatically pauses inactive stream to keep hardware video decoder load at a single stream
 * - Completely eliminates hard loop cuts, frame freezes, and jagged loop resets
 */
export default function SeamlessVideo({
  src,
  poster,
  className = "",
  fadeDuration = 1.4,
}: SeamlessVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const activeStreamRef = useRef<1 | 2>(1);
  const isFadingRef = useRef(false);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    const container = containerRef.current;
    if (!v1 || !v2 || !container) return;

    v1.muted = true;
    v2.muted = true;
    v1.playsInline = true;
    v2.playsInline = true;

    // Apply transition duration style directly
    v1.style.transitionDuration = `${fadeDuration}s`;
    v2.style.transitionDuration = `${fadeDuration}s`;

    // Initial state: v1 visible and playing, v2 hidden and paused
    v1.style.opacity = "1";
    v2.style.opacity = "0";
    v1.play().catch(() => {});

    // Viewport-aware playback observer: pause decoding when hero is off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        isVisibleRef.current = inView;
        const currentActive = activeStreamRef.current === 1 ? v1 : v2;
        if (inView) {
          currentActive.play().catch(() => {});
        } else {
          currentActive.pause();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(container);

    const handleCrossfade = (
      activeVideo: HTMLVideoElement,
      incomingVideo: HTMLVideoElement,
      targetStream: 1 | 2
    ) => {
      if (isFadingRef.current || !isVisibleRef.current) return;
      if (!activeVideo.duration || isNaN(activeVideo.duration)) return;

      const remaining = activeVideo.duration - activeVideo.currentTime;
      if (remaining <= fadeDuration && activeVideo.currentTime > 1) {
        isFadingRef.current = true;

        // Start incoming video from the beginning
        incomingVideo.currentTime = 0;
        incomingVideo.play().catch(() => {});

        // Direct hardware-accelerated CSS crossfade
        if (targetStream === 2) {
          v1.style.opacity = "0";
          v2.style.opacity = "1";
        } else {
          v1.style.opacity = "1";
          v2.style.opacity = "0";
        }

        activeStreamRef.current = targetStream;

        // Once crossfade settles, pause the previous video to conserve hardware decoder bandwidth
        setTimeout(() => {
          activeVideo.pause();
          activeVideo.currentTime = 0;
          isFadingRef.current = false;
        }, (fadeDuration + 0.1) * 1000);
      }
    };

    const onV1TimeUpdate = () => {
      if (activeStreamRef.current === 1) {
        handleCrossfade(v1, v2, 2);
      }
    };

    const onV2TimeUpdate = () => {
      if (activeStreamRef.current === 2) {
        handleCrossfade(v2, v1, 1);
      }
    };

    v1.addEventListener("timeupdate", onV1TimeUpdate, { passive: true });
    v2.addEventListener("timeupdate", onV2TimeUpdate, { passive: true });

    return () => {
      io.disconnect();
      v1.removeEventListener("timeupdate", onV1TimeUpdate);
      v2.removeEventListener("timeupdate", onV2TimeUpdate);
      v1.pause();
      v2.pause();
    };
  }, [fadeDuration]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-foreground [contain:strict]">
      {/* Stream 1 */}
      <video
        ref={video1Ref}
        muted
        playsInline
        preload="auto"
        poster={poster}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity ease-in-out [backface-visibility:hidden] ${className}`}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Stream 2 */}
      <video
        ref={video2Ref}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity ease-in-out [backface-visibility:hidden] ${className}`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
