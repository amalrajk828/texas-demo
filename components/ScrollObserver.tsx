"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: NodeJS.Timeout | null = null;
    let mutObs: MutationObserver | null = null;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      timeoutId = setTimeout(() => {
        document
          .querySelectorAll<HTMLElement>(".fade-up:not(.visible)")
          .forEach((el) => el.classList.add("visible"));
      }, 50);
      return () => {
        if (timeoutId) clearTimeout(timeoutId);
      };
    }

    function observeElements() {
      const els = document.querySelectorAll<HTMLElement>(".fade-up:not(.visible)");
      if (!els.length) return;

      els.forEach((el) => {
        obsRef.current?.observe(el);
      });
    }

    if (obsRef.current) {
      obsRef.current.disconnect();
    }

    obsRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obsRef.current?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Defer initial scan after React finishes initial mount & hydration
    timeoutId = setTimeout(() => {
      observeElements();

      mutObs = new MutationObserver(() => {
        observeElements();
      });
      mutObs.observe(document.body, { childList: true, subtree: true });
    }, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      obsRef.current?.disconnect();
      mutObs?.disconnect();
    };
  }, [pathname]);

  return null;
}
