
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
