"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function MotionProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
      {children}
    </MotionConfig>
  );
}
