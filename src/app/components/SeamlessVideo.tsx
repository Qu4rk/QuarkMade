"use client";

import React, { useEffect, useRef } from "react";

interface SeamlessVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

/**
 * Ultra-optimized hardware-accelerated video player with native GPU decoding,
 * zero RAF polling overhead, and instant poster fallback.
 */
export default function SeamlessVideo({
  src,
  poster,
  className = "",
}: SeamlessVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback handled gracefully
      });
    }
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-foreground [contain:paint]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        className={`w-full h-full object-cover object-center will-change-transform transform-gpu [backface-visibility:hidden] ${className}`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
