# Base31 Website Clone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clone the website `https://www.base31.ca/` into a complete, standalone Next.js App Router and Tailwind CSS project in `/Volumes/MicroSD/Projects/QuarkMade` preserving all animations, assets, and design tokens.

**Architecture:** Utilize Ditto's deterministic capture-to-code pipeline to extract rendered DOM, computed styling, web fonts, and media assets. Unpack the compiled Next.js project into the workspace, refine the motion utilities (`motion.css`) and interactive client components (drawers, carousels, hover effects), and verify via automated typechecks and production builds.

**Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS, Playwright, Node.js

**Spec:** [`docs/superpowers/specs/2026-08-22-base31-clone-design.md`](file:///Volumes/MicroSD/Projects/QuarkMade/docs/superpowers/specs/2026-08-22-base31-clone-design.md)

## Global Constraints
- Target URL: `https://www.base31.ca/`
- Workspace root: `/Volumes/MicroSD/Projects/QuarkMade`
- Framework: Next.js (App Router) + TypeScript + Tailwind CSS
- Animation Requirement: Retain and verify ALL animations (CSS transitions, keyframes, tickers/marquees, scroll effects, and hover states)
- Assets: Fully localized in `public/assets/` with no broken external links

---

### Task 1: Execute Ditto Compiler & Scaffold Next.js App

**Files:**
- Create: `/tmp/ditto-tool` (compiler workspace)
- Create: `/Volumes/MicroSD/Projects/QuarkMade/package.json`
- Create: `/Volumes/MicroSD/Projects/QuarkMade/src/app/page.tsx`
- Create: `/Volumes/MicroSD/Projects/QuarkMade/src/app/layout.tsx`
- Create: `/Volumes/MicroSD/Projects/QuarkMade/src/app/globals.css`
- Create: `/Volumes/MicroSD/Projects/QuarkMade/tailwind.config.ts`

**Interfaces:**
- Consumes: `https://www.base31.ca/` live DOM & styling
- Produces: Base Next.js project tree in `/Volumes/MicroSD/Projects/QuarkMade`

- [ ] **Step 1: Install Ditto dependencies and Playwright Chromium**
```bash
cd /tmp/ditto-tool && npm install && npx playwright install chromium
```

- [ ] **Step 2: Run Ditto compilation for base31.ca**
```bash
cd /tmp/ditto-tool && npm run clone -- https://www.base31.ca/ --out=/tmp/ditto-output/base31 --styling=tailwind --framework=next
```

- [ ] **Step 3: Transfer compiled app tree into workspace**
```bash
cp -R /tmp/ditto-output/base31/app/* /Volumes/MicroSD/Projects/QuarkMade/
```

- [ ] **Step 4: Install workspace dependencies**
```bash
cd /Volumes/MicroSD/Projects/QuarkMade && npm install
```

---

### Task 2: Localize Assets, Fonts, & Metadata

**Files:**
- Create/Verify: `/Volumes/MicroSD/Projects/QuarkMade/public/assets/fonts/`
- Create/Verify: `/Volumes/MicroSD/Projects/QuarkMade/public/assets/images/`
- Create/Verify: `/Volumes/MicroSD/Projects/QuarkMade/public/assets/icons/`
- Modify: `/Volumes/MicroSD/Projects/QuarkMade/src/app/layout.tsx`

**Interfaces:**
- Consumes: Downloaded media and fonts from compilation
- Produces: Fully self-contained local static asset references

- [ ] **Step 1: Verify font assets and `@font-face` rules**
Inspect `public/assets/fonts` and ensure all font references in `src/app/globals.css` and `src/app/layout.tsx` resolve to local files.

- [ ] **Step 2: Verify image and SVG paths**
Check that all image tags (`<Image>` or `<img>`) use relative paths to `public/assets/` rather than external URLs that might 403 or expire.

- [ ] **Step 3: Verify metadata and favicon**
Ensure `favicon.ico`, site titles, and open-graph meta tags match Base31 branding.

---

### Task 3: Motion, Animation, & Interactive Component Polish

**Files:**
- Create/Modify: `/Volumes/MicroSD/Projects/QuarkMade/src/app/motion.css`
- Modify: `/Volumes/MicroSD/Projects/QuarkMade/src/app/globals.css`
- Modify: `/Volumes/MicroSD/Projects/QuarkMade/src/app/components/Header.tsx` (or extracted Header component)
- Modify: `/Volumes/MicroSD/Projects/QuarkMade/src/app/components/` (Interactive cards, carousels, drawers)

**Interfaces:**
- Consumes: Raw captured transition styles and DOM classes
- Produces: Fully animated interactive React client components

- [ ] **Step 1: Audit and wire CSS keyframes & transitions**
Ensure keyframe animations for tickers/marquees, pulse effects, and hover transitions are defined in `src/app/motion.css` and imported in `src/app/globals.css`.

- [ ] **Step 2: Wire interactive client-side behaviors**
Add `'use client'` where needed for:
  - Mobile navigation drawer toggle with smooth slide/fade animation.
  - Header scroll detection (blur/background transition on scroll).
  - Image hover zooms, card elevations, and arrow translations.
  - Carousel / slider paging and transitions.

- [ ] **Step 3: Reconstruct scroll reveal animations**
Implement intersection observers or CSS scroll animation triggers for section fade-in and slide-up effects.

---

### Task 4: Compilation, Typechecking, & Visual Fidelity Verification

**Files:**
- Read: `/Volumes/MicroSD/Projects/QuarkMade/package.json`
- Test: Build output & Dev server logs

**Interfaces:**
- Consumes: Assembled Next.js codebase
- Produces: Validated, production-ready runnable application

- [ ] **Step 1: Run TypeScript typecheck**
```bash
cd /Volumes/MicroSD/Projects/QuarkMade && npm run typecheck || npx tsc --noEmit
```
Expected: PASS with 0 errors.

- [ ] **Step 2: Run Next.js production build**
```bash
cd /Volumes/MicroSD/Projects/QuarkMade && npm run build
```
Expected: PASS with compiled static/dynamic routes.

- [ ] **Step 3: Start dev server and verify interactions**
```bash
cd /Volumes/MicroSD/Projects/QuarkMade && npm run dev
```
Validate homepage layout, responsiveness, and all animations against `https://www.base31.ca/`.
