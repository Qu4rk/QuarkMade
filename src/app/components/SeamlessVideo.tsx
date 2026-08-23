"use client";

import { useEffect, useRef, useState } from "react";

interface SeamlessVideoProps {
  src: string;
  poster?: string;
  className?: string;
  fadeDuration?: number; // Duration of crossfade in seconds
}

/**
 * Seamless dual-layer video looper that eliminates hard loop cuts
 * by crossfading between two synchronized video streams.
 */
export default function SeamlessVideo({
  src,
  poster,
  className = "",
  fadeDuration = 1.3,
}: SeamlessVideoProps) {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const activeVideoRef = useRef<1 | 2>(1);
  const [opacity1, setOpacity1] = useState(1);
  const [opacity2, setOpacity2] = useState(0);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    // Start video 1
    v1.muted = true;
    v2.muted = true;
    v1.play().catch(() => {});

    let isFading = false;
    let animId: number;

    const checkTime = () => {
      const active = activeVideoRef.current === 1 ? v1 : v2;
      const next = activeVideoRef.current === 1 ? v2 : v1;

      if (active && active.duration && !isNaN(active.duration)) {
        const timeLeft = active.duration - active.currentTime;

        if (timeLeft <= fadeDuration && !isFading && active.currentTime > 1) {
          isFading = true;

          // Start the next video from the beginning
          next.currentTime = 0;
          next.play().catch(() => {});

          if (activeVideoRef.current === 1) {
            setOpacity2(1);
            setOpacity1(0);
            activeVideoRef.current = 2;
          } else {
            setOpacity1(1);
            setOpacity2(0);
            activeVideoRef.current = 1;
          }

          // Reset the fading lock once the crossfade completes
          setTimeout(() => {
            isFading = false;
          }, (fadeDuration + 0.3) * 1000);
        }
      }

      animId = requestAnimationFrame(checkTime);
    };

    animId = requestAnimationFrame(checkTime);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [fadeDuration]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Video Layer 1 */}
      <video
        ref={video1Ref}
        muted
        playsInline
        preload="auto"
        poster={poster}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out ${className}`}
        style={{
          opacity: opacity1,
          transitionDuration: `${fadeDuration}s`,
          zIndex: opacity1 > 0 ? 2 : 1,
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Video Layer 2 */}
      <video
        ref={video2Ref}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out ${className}`}
        style={{
          opacity: opacity2,
          transitionDuration: `${fadeDuration}s`,
          zIndex: opacity2 > 0 ? 2 : 1,
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
