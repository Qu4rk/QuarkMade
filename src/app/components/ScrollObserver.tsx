"use client";

import { useEffect } from "react";

/**
 * Global ScrollObserver for QuarkMade:
 * 1. Manages header glass scroll state.
 * 2. High-performance GPU parallax without layout thrashing.
 * 3. Native IntersectionObserver for entrance reveals.
 */
export default function ScrollObserver() {
  useEffect(() => {
    // 1. Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll("[data-reveal]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("revealed");
      } else {
        revealObserver.observe(el);
      }
    });

    // 2. High-Performance Parallax without synchronous layout reflows
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );

    // Cache element geometry on init and resize
    let elementOffsets: { el: HTMLElement; top: number; height: number; speed: number }[] = [];
    
    const computeOffsets = () => {
      const currentScroll = window.scrollY;
      elementOffsets = parallaxElements.map((el) => {
        const rect = el.getBoundingClientRect();
        return {
          el,
          top: rect.top + currentScroll,
          height: rect.height,
          speed: parseFloat(el.getAttribute("data-parallax-speed") || "0.2"),
        };
      });
    };

    computeOffsets();
    window.addEventListener("resize", computeOffsets, { passive: true });

    let ticking = false;
    let isHeaderScrolled = false;
    const header = document.getElementById("header");

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          // Parallax transform calculation: only update elements near the viewport
          for (let i = 0; i < elementOffsets.length; i++) {
            const item = elementOffsets[i];
            const inView =
              scrollY + windowHeight > item.top - 200 &&
              scrollY < item.top + item.height + 200;

            if (inView) {
              const relativeOffset =
                (scrollY + windowHeight / 2 - (item.top + item.height / 2)) * item.speed;
              item.el.style.transform = `translate3d(0, ${relativeOffset.toFixed(1)}px, 0)`;
            }
          }

          // Header Theme Switcher (only mutate DOM when state toggles)
          if (header) {
            const shouldBeScrolled = scrollY > 40;
            if (shouldBeScrolled !== isHeaderScrolled) {
              isHeaderScrolled = shouldBeScrolled;
              if (shouldBeScrolled) {
                header.classList.add("scrolled");
              } else {
                header.classList.remove("scrolled");
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", computeOffsets);
      revealObserver.disconnect();
    };
  }, []);

  return null;
}

