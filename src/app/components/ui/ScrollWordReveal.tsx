"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight?: boolean;
}

function Word({ word, progress, range, isHighlight }: WordProps) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const y = useTransform(progress, range, [3, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block mr-[0.28em] transition-colors duration-200 ${
        isHighlight
          ? "text-[#D4AF37] font-medium [font-family:'Chillax',_sans-serif]"
          : "text-foreground"
      }`}
    >
      {word}
    </motion.span>
  );
}

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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.88", "end 0.42"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, "");
        const isHighlight = highlights.some(
          (h) => cleanWord.toLowerCase() === h.toLowerCase()
        );
        const start = i / words.length;
        const end = Math.min(1, start + 1.2 / words.length);

        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
            isHighlight={isHighlight}
          />
        );
      })}
    </p>
  );
}
