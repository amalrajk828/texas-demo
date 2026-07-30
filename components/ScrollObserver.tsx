"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>(".fade-up:not(.visible)")
        .forEach((el) => el.classList.add("visible"));
      return;
    }

    function observeElements() {
      const els = document.querySelectorAll<HTMLElement>(".fade-up:not(.visible)");
      if (!els.length) return;

      els.forEach((el) => {
        obsRef.current!.observe(el);
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

    requestAnimationFrame(() => {
      observeElements();

      const mutObs = new MutationObserver(() => {
        observeElements();
      });
      mutObs.observe(document.body, { childList: true, subtree: true });

      const cleanup = () => {
        mutObs.disconnect();
      };
      (obsRef.current as any)._cleanup = cleanup;
    });

    return () => {
      obsRef.current?.disconnect();
      (obsRef.current as any)?._cleanup?.();
    };
  }, [pathname]);

  return null;
}
