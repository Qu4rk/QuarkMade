# Editorial Scroll Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement an award-winning, fluid suite of scroll-driven animations across the entire QuarkMade site including Lenis smooth inertial scrolling, kinetic word-by-word typography illumination, multi-plane depth parallax, scroll-synchronized horological dial rotation, and luminous border beams.

**Architecture:** A client-side Lenis smooth scroll provider wraps the application layout, harmonizing with Framer Motion (`motion/react`) scroll-linked hooks (`useScroll`, `useTransform`, `useSpring`). Dedicated reusable UI components (`ScrollWordReveal`, `BorderBeam`, `SmoothScroll`) isolate animation logic and provide clean, type-safe interfaces for each page section.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Lenis, Framer Motion (`motion/react`), GSAP.

**Spec:** [`docs/superpowers/specs/2026-08-23-editorial-scroll-animations-design.md`](file:///Volumes/MicroSD/Projects/QuarkMade/docs/superpowers/specs/2026-08-23-editorial-scroll-animations-design.md)

## Global Constraints
- Preserve existing branding tokens: Chillax for wordmarks/project prefixes, Satoshi for all body copy/subheadings.
- Smooth scroll must automatically disable if `prefers-reduced-motion: reduce` is detected.
- All components must be SSR-safe (`"use client"` with client-side DOM guards).

---

### Task 1: Global Smooth Inertial Scroll (`lenis`)

**Files:**
- Create: `src/app/components/SmoothScroll.tsx`
- Modify: `src/app/layout.tsx:1-40`

**Interfaces:**
- Produces: `<SmoothScroll children={React.ReactNode} />` wrapper component.

- [ ] **Step 1: Install `lenis` dependency**

```bash
npm install lenis
```

- [ ] **Step 2: Create `SmoothScroll.tsx` component**

```tsx
"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 3: Integrate `SmoothScroll` into `src/app/layout.tsx`**

Wrap `{children}` inside `<body>` with `<SmoothScroll>{children}</SmoothScroll>`.

- [ ] **Step 4: Verify typecheck and build**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json src/app/components/SmoothScroll.tsx src/app/layout.tsx
git commit -m "feat: add global Lenis smooth inertial scrolling provider"
```

---

### Task 2: Studio Manifesto Kinetic Word-by-Word Illuminator

**Files:**
- Create: `src/app/components/ui/ScrollWordReveal.tsx`
- Modify: `src/app/sections/place-worth-belonging-section.tsx:1-44`

**Interfaces:**
- Produces: `<ScrollWordReveal paragraph={string} highlights?: string[] className?: string />`

- [ ] **Step 1: Create `ScrollWordReveal.tsx`**

```tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface WordProps {
  word: string;
  progress: any;
  range: [number, number];
  isHighlight?: boolean;
}

function Word({ word, progress, range, isHighlight }: WordProps) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block mr-[0.28em] transition-colors duration-150 ${
        isHighlight ? "text-[#D4AF37] font-medium [font-family:'Chillax',_sans-serif]" : "text-foreground"
      }`}
    >
      {word}
    </motion.span>
  );
}

export default function ScrollWordReveal({
  text,
  highlights = [],
  className = "",
}: {
  text: string;
  highlights?: string[];
  className?: string;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.88", "end 0.45"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, "");
        const isHighlight = highlights.some((h) => cleanWord.toLowerCase() === h.toLowerCase());
        const start = i / words.length;
        const end = start + 1 / words.length;

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
```

- [ ] **Step 2: Update `place-worth-belonging-section.tsx`**

Integrate `ScrollWordReveal` for both manifesto paragraphs, highlighting `"QuarkMade"`, `"Chronotomi"`, `"Lumina"`, and `"QuieTide"`.

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/components/ui/ScrollWordReveal.tsx src/app/sections/place-worth-belonging-section.tsx
git commit -m "feat: add kinetic scroll word illuminator to Studio Manifesto"
```

---

### Task 3: QuieTide Spatial Multi-Plane Depth Parallax

**Files:**
- Modify: `src/app/sections/rooted-in-history-section.tsx:1-85`

**Interfaces:**
- Consumes: `motion/react` `useScroll`, `useTransform`, `useSpring`.

- [ ] **Step 1: Add scroll-linked differential parallax transforms**

Apply `useScroll` target on the section container, and bind `useTransform(scrollYProgress, [0, 1], [40, -40])` to the architectural images and `useTransform(scrollYProgress, [0, 1], [15, -15])` to the title lockup and badge.

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/app/sections/rooted-in-history-section.tsx
git commit -m "feat: add multi-plane depth parallax to QuieTide showcase"
```

---

### Task 4: Lumina Living Ambient Light Drift & Luminous Shift

**Files:**
- Modify: `src/app/sections/building-place-to-section.tsx:1-85`

**Interfaces:**
- Consumes: `motion/react` `useScroll`, `useTransform`.

- [ ] **Step 1: Add scroll-linked ambient bloom and card depth scaling**

Bind `scrollYProgress` to exposure opacity and soft vertical translation of the interactive cards.

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/app/sections/building-place-to-section.tsx
git commit -m "feat: add luminous exposure drift to Lumina Living showcase"
```

---

### Task 5: Chronotomi Scroll-Velocity Horological Dial Mechanics

**Files:**
- Modify: `src/app/sections/partner-with-us-section.tsx:1-90`

**Interfaces:**
- Consumes: `motion/react` `useScroll`, `useTransform`, `useSpring`.

- [ ] **Step 1: Add horological rotating dial ring to Chronotomi background**

Render an intricate SVG horological gear ring in the backdrop with `style={{ rotate: dialRotation }}` where `dialRotation = useTransform(scrollYProgress, [0, 1], [0, 360])`.

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/app/sections/partner-with-us-section.tsx
git commit -m "feat: add scroll-synchronized horological dial rotation to Chronotomi"
```

---

### Task 6: Inquiry Form Luminous Border Beam

**Files:**
- Create: `src/app/components/ui/BorderBeam.tsx`
- Modify: `src/app/sections/stay-in-the-section.tsx:1-120`

**Interfaces:**
- Produces: `<BorderBeam size?: number duration?: number colorFrom?: string colorTo?: string />`

- [ ] **Step 1: Create `BorderBeam.tsx` component**

```tsx
"use client";

import React from "react";
import { motion } from "motion/react";

export interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export default function BorderBeam({
  className = "",
  size = 250,
  duration = 12,
  borderWidth = 1.5,
  colorFrom = "#4442DB",
  colorTo = "#D4AF37",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--border-width": `${borderWidth}px`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--size)*0.5px)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))] ${className}`}
    />
  );
}
```

- [ ] **Step 2: Add border-beam keyframes to `src/app/ditto.css`**

```css
@keyframes border-beam {
  100% {
    offset-distance: 100%;
  }
}
.animate-border-beam {
  animation: border-beam var(--duration) infinite linear;
}
```

- [ ] **Step 3: Integrate `BorderBeam` into `stay-in-the-section.tsx` inquiry card**

- [ ] **Step 4: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/ui/BorderBeam.tsx src/app/ditto.css src/app/sections/stay-in-the-section.tsx
git commit -m "feat: add animated luminous border beam to inquiry contact card"
```

---

### Task 7: End-to-End Verification & GitHub Push

- [ ] **Step 1: Run TypeScript compiler check**
Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 2: Visual & animation inspection via Playwright**
Inspect scroll behaviors across the full page in headless browser.

- [ ] **Step 3: Push all commits to GitHub**
Run: `git push origin main`
Expected: Remote `origin/main` updated cleanly.
