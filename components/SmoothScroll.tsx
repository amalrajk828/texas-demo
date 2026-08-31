"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollReset() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);
  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(pointer: coarse)").matches
      || window.innerWidth < 768;

    if (prefersReduced || isMobile) {
      (window as any).lenis = null;
      return;
    }

    let rafId: number;
    let lenisInstance: any = null;

    import("lenis").then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      (window as any).lenis = lenisInstance;

      function raf(time: number) {
        lenisInstance.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      (window as any).lenis = null;
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <ScrollReset />
      {children}
    </>
  );
}
