# Design Specification: Editorial Haute Horlogerie Scroll Animations

## Overview
Elevate QuarkMade into an award-winning, Awwwards-caliber digital flagship with a cohesive, fluid suite of scroll-driven animations across all page sections. The motion profile is **Editorial Haute Horlogerie (Velvety & Fluid)**: momentum-based smooth scrolling, kinetic word-by-word typography illumination, multi-layer optical depth parallax, scroll-synchronized horological dial mechanics, and dynamic luminous border beams.

---

## 1. Global Inertial Smooth Scrolling (`lenis`)
- **Package**: `lenis`
- **Component**: `src/app/components/SmoothScroll.tsx`
- **Behavior**:
  - Initializes Lenis smooth scrolling for buttery momentum scrolling across desktop/tablet viewports.
  - Integrates seamlessly with Next.js 15 App Router, React 19, and `motion/react` / `gsap` scroll triggers.
  - Respects `prefers-reduced-motion` by disabling inertial smoothing automatically.

---

## 2. Studio Manifesto: Kinetic Word-by-Word Scroll Illuminator
- **Component**: `src/app/components/ui/ScrollWordReveal.tsx`
- **Section File**: `src/app/sections/place-worth-belonging-section.tsx`
- **Behavior**:
  - Tracks scroll progress across the `#philosophy` section (`scrollYProgress: [0, 1]`).
  - Renders paragraph words as individual tokens whose opacity transitions from `0.15` (dimmed) to `1.0` (pure luminous white) as the reader scrolls.
  - Applies Imperial Gold (`#D4AF37`) and Chillax accents to key brand names (*Chronotomi*, *Lumina Living*, *QuieTide*).

---

## 3. Featured Project Showcases: Optical Depth & Horological Mechanics

### A. QuieTide (`src/app/sections/rooted-in-history-section.tsx`)
- **Multi-Speed Vertical Parallax**:
  - Architectural showcase images, ambient mist, and badges move at calibrated differential speeds (`y: [40, -40]` vs `y: [15, -15]`) to create 3D spatial depth.

### B. Lumina Living (`src/app/sections/building-place-to-section.tsx`)
- **Luminous Light Drift & Exposure Shift**:
  - Ambient gold/amber light leak reacts to scroll progress, smoothly brightening as the architectural features come into view.

### C. Chronotomi (`src/app/sections/partner-with-us-section.tsx`)
- **Horological Dial & Gear Rotation**:
  - An intricate horological dial vector in the background rotates smoothly in direct proportion to the user's scroll speed and progress (`rotate: [0, 360]`), echoing the precision watchmaking theme.

---

## 4. Ingress & Inquiry Form: Luminous Border Beam
- **Component**: `src/app/components/ui/BorderBeam.tsx`
- **Section File**: `src/app/sections/stay-in-the-section.tsx`
- **Behavior**:
  - When the contact card scrolls into view, an animated light ray (`#4442DB` electric purple to `#D4AF37` imperial gold) orbits along the perimeter of the container.

---

## 5. Verification Plan
- **TypeScript Typecheck**: `npx tsc --noEmit` must pass with 0 errors.
- **Visual & Motion Verification**: Test in headless browser (Playwright) by scrolling through each section to verify smooth momentum, word illumination scrub, parallax separation, dial rotation, and border beam glow.
- **Git Backup**: Commit and push to GitHub repository.
