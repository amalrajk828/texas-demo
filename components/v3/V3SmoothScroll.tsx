"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export const LENIS_LERP = 0.1;

export type LenisWindow = Window & {
  __lenis?: Lenis | null;
};

export default function V3SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      if (prefersReduced) {
        return;
      }
    } catch {
      // ignore matchMedia error on older/restricted mobile browsers
    }

    let lenis: Lenis | null = null;
    let win: LenisWindow | null = null;
    let rafId: number | null = null;

    function handleAnchorClick(e: MouseEvent) {
      try {
        const target = (e.target as HTMLElement)?.closest("a");
        if (!target) return;
        const href = target.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const id = href.slice(1);
          const el = document.getElementById(id);
          if (el && lenis) {
            e.preventDefault();
            lenis.scrollTo(el, { offset: -90 });
          }
        }
      } catch {
        // ignore anchor click error
      }
    }

    try {
      lenis = new Lenis({
        lerp: LENIS_LERP,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.0,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: false,
      });

      win = window as LenisWindow;
      win.__lenis = lenis;

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      }
      rafId = requestAnimationFrame(raf);

      document.addEventListener("click", handleAnchorClick);
    } catch (err) {
      console.warn("Smooth scroll skipped:", err);
    }

    return () => {
      try {
        if (rafId !== null) cancelAnimationFrame(rafId);
        document.removeEventListener("click", handleAnchorClick);
        if (lenis) lenis.destroy();
        if (win) win.__lenis = null;
      } catch {}
    };
  }, []);

  return <>{children}</>;
}
