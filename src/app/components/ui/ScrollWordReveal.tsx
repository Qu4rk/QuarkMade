"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { useScroll } from "motion/react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

export interface ScrollWordRevealProps {
  text: string;
  highlights?: string[];
  className?: string;
}

export default function ScrollWordReveal({
  text,
  highlights = [],
  className = "",
}: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.88", "end 0.42"],
  });

  const words = useMemo(() => text.split(" "), [text]);

  const highlightSet = useMemo(() => {
    return new Set(highlights.map((h) => h.toLowerCase()));
  }, [highlights]);

  useEffect(() => {
    const spans = wordRefs.current;
    const total = words.length;
    if (!spans.length || total === 0) return;

    if (prefersReducedMotion) {
      spans.forEach((span) => {
        if (!span) return;
        span.style.opacity = "1";
        span.style.transform = "none";
        span.style.willChange = "auto";
      });
      return;
    }

    const ranges = words.map((_, i) => {
      const start = i / total;
      const end = Math.min(1, start + 1.2 / total);
      return { start, end, range: end - start };
    });

    spans.forEach((span) => {
      if (span) span.style.willChange = "opacity, transform";
    });

    const updateWords = (p: number) => {
      for (let i = 0; i < total; i++) {
        const span = spans[i];
        if (!span) continue;
        const { start, end, range } = ranges[i];

        if (p <= start) {
          span.style.opacity = "0.22";
          span.style.transform = "translateY(3px)";
        } else if (p >= end) {
          span.style.opacity = "1";
          span.style.transform = "translateY(0px)";
        } else {
          const ratio = (p - start) / range;
          span.style.opacity = (0.22 + 0.78 * ratio).toFixed(3);
          span.style.transform = `translateY(${(3 * (1 - ratio)).toFixed(1)}px)`;
        }
      }
    };

    updateWords(scrollYProgress.get());
    const unsubscribe = scrollYProgress.on("change", updateWords);

    return () => {
      unsubscribe();
    };
  }, [prefersReducedMotion, scrollYProgress, words]);

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center select-none ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, "");
        const isHighlight = highlightSet.has(cleanWord.toLowerCase());

        return (
          <span
            key={i}
            ref={(el) => {
              wordRefs.current[i] = el;
            }}
            style={{ opacity: 0.22, transform: "translateY(3px)", willChange: "opacity, transform" }}
            className={`inline-block mr-[0.28em] transition-colors duration-200 ${
              isHighlight
                ? "text-[#D4AF37] font-medium [font-family:'Chillax',_sans-serif]"
                : "text-foreground"
            }`}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}
