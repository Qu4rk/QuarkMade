# Base31 Website Clone Specification (with Full Animation Preservation)

## Overview
Clone the public website [https://www.base31.ca/](https://www.base31.ca/) into a self-contained, componentized Next.js App Router project located at `/Volumes/MicroSD/Projects/QuarkMade` using Ditto's deterministic capture-to-code pipeline (`ditto.site`). All CSS transitions, keyframes, scroll reveals, interactive micro-interactions, responsive layouts, web fonts, and static media assets will be preserved locally with high fidelity.

---

## Architecture & Technology Stack

### 1. Core Framework & Tooling
- **Framework**: Next.js (App Router, React 19 / 18, TypeScript)
- **Styling**: Tailwind CSS + Custom CSS Variables & CSS Modules for granular motion tokens
- **Compiler**: `ditto.site` deterministic compiler (Playwright headless Chromium)
- **Local Asset Hosting**: All fonts, SVGs, images, and brand assets localized under `public/assets/`

### 2. Output Codebase Structure
```text
/Volumes/MicroSD/Projects/QuarkMade/
├── public/
│   ├── assets/
│   │   ├── images/       # Downloaded & hashed site images
│   │   ├── fonts/        # Local web fonts & @font-face assets
│   │   └── icons/        # SVG icons and logos
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with fonts, metadata & smooth scroll provider
│   │   ├── page.tsx      # Main landing page assembling UI sections
│   │   ├── globals.css   # Tailwind directives & CSS design tokens
│   │   ├── motion.css    # Keyframe animations, marquees, and transition utilities
│   │   ├── content.ts    # Reusable structured content dictionary
│   │   └── components/   # Modular React components:
│   │       ├── Header.tsx       # Navigation bar, mobile drawer, scroll blur
│   │       ├── Hero.tsx         # Hero banner, typography, call-to-actions
│   │       ├── Events.tsx       # Event cards, grid layout & hover effects
│   │       ├── Destinations.tsx # Venue highlights & interactive cards
│   │       ├── Stories.tsx      # Editorial sections & photo galleries
│   │       ├── Newsletter.tsx   # Subscription signup section
│   │       └── Footer.tsx       # Footer links, social icons, legal notices
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Motion & Animation Preservation Strategy

1. **Micro-interactions & Hover States**:
   - Navigation links: Underline expand animations, color shifts, and dropdown menu reveals.
   - Interactive buttons: Scale transforms, background gradient shifts, and magnetic arrow transitions.
   - Card hovers: Image zoom, subtle elevation lift, and overlay opacity transitions on event cards and destination tiles.

2. **Keyframe Animations & Tickers**:
   - Scrolling marquees / announcement bars with infinite seamless loop timing.
   - Pulsing badges and glowing accents defined cleanly in `src/app/motion.css`.

3. **Scroll Entrance & Reveal Animations**:
   - Staggered fade-in and slide-up transitions on scroll using CSS or lightweight React IntersectionObserver hooks.
   - Header scroll effect: transitions from transparent to solid/blurred backdrop upon scrolling down.

4. **Interactive Controls & Drawers**:
   - Responsive mobile navigation drawer with smooth slide/fade in-and-out transitions.
   - Sliders / carousels for photo galleries and featured programming with smooth snap transitions.

---

## Asset & Typography Pipeline

- **Fonts**: Extraction and local hosting of primary display fonts (custom serif/sans-serif fonts used by Base31) with CSS `@font-face` definitions or `next/font/local`.
- **Media**: All raster images (WebP, JPG, PNG) and vector graphics (SVG) extracted from live render and referenced locally without external hotlinking dependencies.

---

## Verification & Quality Assurance

1. **Build & Typecheck**:
   - Execute `npm install` and `npm run typecheck` to guarantee clean TypeScript types.
   - Execute `npm run build` to confirm production build compilation with zero errors.
2. **Interactive Testing**:
   - Launch dev server (`npm run dev`) and test UI responsiveness across desktop and mobile viewports.
   - Validate that all animations (hover effects, mobile drawer, scroll animations, marquees) function identically to the live Base31 website.
