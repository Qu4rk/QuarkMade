"use client";

import { useEffect } from "react";

/**
 * Global ScrollObserver:
 * 1. Manages header color switching based on current active section.
 * 2. Manages parallax translation on [data-parallax] elements.
 * 3. Triggers entrance reveals on [data-reveal] elements.
 */
export default function ScrollObserver() {
  useEffect(() => {
    // 1. Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll("[data-reveal]");
    
    // Immediately reveal elements that are already visible in viewport on initial load
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.1) {
        el.classList.add("revealed");
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 100px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // 2. Parallax Scroll Effect on [data-parallax]
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          parallaxElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const speed = parseFloat(el.getAttribute("data-parallax-speed") || "0.2");
            
            // Calculate distance from viewport center
            const relativeOffset = (scrollY + windowHeight / 2 - (elementTop + rect.height / 2)) * speed;
            el.style.transform = `translate3d(0, ${relativeOffset.toFixed(2)}px, 0)`;
          });

          // Header Theme Switcher
          const header = document.getElementById("header");
          if (header) {
            if (scrollY > 50) {
              header.classList.add("scrolled");
            } else {
              header.classList.remove("scrolled");
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
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
