"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let obs: IntersectionObserver | null = null;

    // Small delay lets Next.js finish painting the new page's DOM
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".fade-up:not(.visible)");
      if (!els.length) return;

      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              obs?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      els.forEach((el) => obs!.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      obs?.disconnect();
    };
  }, [pathname]);

  return null;
}
