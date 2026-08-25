# Site QA Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the keyboard, modal, touch-target, reduced-motion, and link defects reproduced during the desktop/mobile audit without redesigning the site.

**Architecture:** Keep the generated Ditto runtime untouched. Apply interaction fixes in the owning client components, shared control/focus rules in `globals.css`, and motion fallbacks at the existing root and media-effect boundaries.

**Tech Stack:** Next.js 15 App Router, React 19, Motion, Lenis, OGL, Tailwind CSS 4.

**Spec:** User goal in this task plus `AGENTS.md` safe-edit constraints.

## Global Constraints

- Preserve the incumbent QuarkMade visual identity and copy.
- Do not edit `src/app/ditto/` or generated anchor metadata.
- Preserve the existing `tsconfig.tsbuildinfo` worktree change.
- Verify at 320px, 390px, 768px, 1024px, 1280px, and 1440px widths.

---

### Task 1: Mobile drawer keyboard containment

**Files:**
- Modify: `src/app/sections/navbar.tsx`
- Test: Browser interaction at 390×844

**Interfaces:**
- Consumes: `isMobileMenuOpen` state.
- Produces: Escape dismissal, dialog semantics, focus entry/return, and Tab containment.

- [x] **Step 1: Re-run the failing browser check**

Open the mobile drawer, press Escape, and confirm it remains open. Confirm background `main` and footer controls are still tabbable.

- [x] **Step 2: Implement the minimal keyboard model**

Add drawer/toggle refs, `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, Escape handling, first-control focus, focus return, and a two-ended Tab trap over the drawer's focusable controls.

- [x] **Step 3: Verify the behavior**

Confirm Escape closes the drawer, focus returns to the toggle, Tab/Shift+Tab stay inside, link selection closes the drawer, and scroll locking is restored.

### Task 2: Snapshot modal semantics and focus

**Files:**
- Modify: `src/app/components/ui/apple-cards-carousel.tsx`
- Test: Browser interaction on the first gallery card

**Interfaces:**
- Consumes: `openIndex`, `closeSnapshotModal`, and active card data.
- Produces: Named modal dialog, focused close control, focus containment, and opener focus restoration.

- [x] **Step 1: Re-run the failing browser check**

Open a gallery card and confirm there is no `[role="dialog"]`, no `aria-modal="true"`, and focus remains on the obscured opener.

- [x] **Step 2: Implement the minimal dialog contract**

Record the opener, focus the close button after mount, add `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and keep Tab navigation within the dialog while preserving Escape/arrow controls.

- [x] **Step 3: Verify the behavior**

Confirm the dialog has an accessible name, focus begins inside it, Tab cannot reach the page, ArrowLeft/ArrowRight still change cards, Escape closes, and focus returns to the opener.

### Task 3: Control states, touch targets, focus, and link redirects

**Files:**
- Modify: `src/app/components/Button.tsx`
- Modify: `src/app/sections/navbar.tsx`
- Modify: `src/app/sections/stay-in-the-section.tsx`
- Modify: `src/app/components/ui/apple-cards-carousel.tsx`
- Modify: `src/app/sections/partner-with-us-section.tsx`
- Modify: `src/app/sections/building-place-to-section.tsx`
- Modify: `src/app/sections/base-section.tsx`
- Modify: `src/app/globals.css`
- Test: Browser geometry/state checks at 390×844 and 1280×800

**Interfaces:**
- Consumes: shared control classes and `formData.projectType`.
- Produces: visible focus, 44px primary touch targets, exposed pressed state, and direct HTTPS portfolio links.

- [x] **Step 1: Re-run failing checks**

Confirm project-type buttons have no `aria-pressed`, shared CTA height is 36px, the mobile header CTA is 27px, and Chronotomi/Lumina links use HTTP redirects.

- [x] **Step 2: Apply the smallest shared fixes**

Use `min-h-11` for shared CTAs and mobile controls, add `aria-pressed={isSelected}`, add a palette-aligned global `:focus-visible` outline, enlarge modal/carousel mobile controls, and change the two live-site origins to HTTPS.

- [x] **Step 3: Verify responsive behavior**

Confirm no horizontal overflow, selected state is announced, focus outline is visible, and the affected touch controls meet 44px without changing desktop hierarchy.

### Task 4: Reduced-motion and rendering cleanup

**Files:**
- Create: `src/app/components/MotionProvider.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/components/SeamlessVideo.tsx`
- Modify: `src/app/components/ui/Ferrofluid.tsx`
- Modify: `src/app/components/ScrollObserver.tsx`
- Modify: `src/app/components/SmoothScroll.tsx`
- Modify: `src/app/motion.css`
- Test: Production build plus source/browser motion checks

**Interfaces:**
- Consumes: system `prefers-reduced-motion` media query.
- Produces: Motion-wide user preference handling, static video/WebGL alternatives, immediate reveal content, and correctly cancelled animation frames.

- [x] **Step 1: Re-run the failing check**

Confirm only Lenis and `TextLoop` currently honor reduced motion while the video, WebGL loop, reveal transitions, and Motion components continue animating.

- [x] **Step 2: Add intentional reduced-motion behavior**

Wrap the app in `<MotionConfig reducedMotion="user">`, pause the hero video and WebGL loop for reduced motion, reveal content immediately, disable decorative CSS loops, and retain a static visual state.

- [x] **Step 3: Fix animation-frame lifecycle cleanup**

Store the latest Lenis animation-frame id on every frame and clear `window.__lenis` during teardown.

- [x] **Step 4: Run final verification**

Run `npx tsc --noEmit --incremental false`, `npm run build`, the Impeccable detector once, desktop/mobile browser smoke tests, console checks, and review the final diff.
