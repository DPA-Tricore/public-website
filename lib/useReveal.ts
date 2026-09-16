"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once the element is mostly in view, then stops observing. A low
 * threshold triggers mid-scroll, so with scroll-snap the transition finishes
 * before the section has landed.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.6) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, revealed };
}

/**
 * Tracks visibility continuously, unlike useReveal which latches on first sight.
 * For anything that keeps costing frames while it runs — an infinite animation,
 * a playing video — and should stop once it scrolls away.
 */
export function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Tailwind needs literal class names, so delays are passed in whole. */
export const revealClass = (revealed: boolean, delay = "") =>
  `transition-[opacity,translate] duration-700 ease-out ${delay} motion-reduce:transition-none ${
    revealed
      ? "translate-y-0 opacity-100"
      : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
  }`;

/**
 * Headings travel further than cards. 16px is imperceptible behind text this
 * large, and a wide card sliding the same distance reads as heavy.
 */
export const revealHeading = (revealed: boolean, delay = "") =>
  `transition-[opacity,translate] duration-[900ms] ease-out ${delay} motion-reduce:transition-none ${
    revealed
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
  }`;

export const STAGGER = ["", "delay-100", "delay-200", "delay-300"];
