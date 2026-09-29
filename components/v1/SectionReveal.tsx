"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionRevealProps {
  children: ReactNode;
  index: number;
  tone: "dark" | "light";
}

export default function SectionReveal({ children, index, tone }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-v1-section
      data-section-index={index}
      className={`v1-section-reveal v1-section-${tone} ${visible ? "is-visible" : ""} ${reducedMotion ? "is-reduced" : ""}`}
    >
      {children}
    </div>
  );
}
