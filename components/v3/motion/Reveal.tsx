"use client";

import React, { useEffect, useRef } from "react";

export const ROOT_MARGIN = "0px 0px -8% 0px";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  yOffset = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("is-revealed");
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.transition = "none";
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top <= 0 || rect.top < window.innerHeight) {
      el.classList.add("is-revealed");
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    // Pending state for elements currently below viewport
    el.classList.add("is-pending");
    el.style.opacity = "0";
    el.style.transform = `translateY(${yOffset}px)`;
    el.style.transitionProperty = "opacity, transform";
    el.style.transitionDuration = `${duration}s`;
    el.style.transitionDelay = `${delay}s`;
    el.style.transitionTimingFunction = "cubic-bezier(0.16, 1, 0.3, 1)";

    // Safety timeout: 1.2s guarantee so nothing is ever stuck hidden
    const safetyTimer = setTimeout(() => {
      el.classList.remove("is-pending");
      el.classList.add("is-revealed");
      el.style.opacity = "1";
      el.style.transform = "none";
    }, 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          el.classList.remove("is-pending");
          el.classList.add("is-revealed");
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.disconnect();
          clearTimeout(safetyTimer);
        }
      },
      {
        threshold: 0,
        rootMargin: ROOT_MARGIN,
      }
    );

    observer.observe(el);

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [delay, duration, yOffset]);

  return (
    <div ref={ref} className={`v3-reveal flex flex-col flex-1 h-full min-w-0 ${className}`}>
      {children}
    </div>
  );
}

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  totalDurationCap?: number; // max 0.6s across all cards
  itemDuration?: number;
  yOffset?: number;
}

export function RevealGroup({
  children,
  className = "",
  totalDurationCap = 0.6,
  itemDuration = 0.5,
  yOffset = 24,
}: RevealGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>(".v3-reveal-item");
    if (!items.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      items.forEach((item) => {
        item.classList.add("is-revealed");
        item.style.opacity = "1";
        item.style.transform = "none";
        item.style.transition = "none";
      });
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top <= 0 || rect.top < window.innerHeight) {
      items.forEach((item) => {
        item.classList.add("is-revealed");
        item.style.opacity = "1";
        item.style.transform = "none";
      });
      return;
    }

    const count = items.length;
    const stepDelay = count > 1 ? Math.min(totalDurationCap / count, 0.08) : 0;

    items.forEach((item, idx) => {
      item.classList.add("is-pending");
      item.style.opacity = "0";
      item.style.transform = `translateY(${yOffset}px)`;
      item.style.transitionProperty = "opacity, transform";
      item.style.transitionDuration = `${itemDuration}s`;
      item.style.transitionDelay = `${idx * stepDelay}s`;
      item.style.transitionTimingFunction = "cubic-bezier(0.16, 1, 0.3, 1)";
    });

    const safetyTimer = setTimeout(() => {
      items.forEach((item) => {
        item.classList.remove("is-pending");
        item.classList.add("is-revealed");
        item.style.opacity = "1";
        item.style.transform = "none";
      });
    }, 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          items.forEach((item) => {
            item.classList.remove("is-pending");
            item.classList.add("is-revealed");
            item.style.opacity = "1";
            item.style.transform = "none";
          });
          observer.disconnect();
          clearTimeout(safetyTimer);
        }
      },
      {
        threshold: 0,
        rootMargin: ROOT_MARGIN,
      }
    );

    observer.observe(el);

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [totalDurationCap, itemDuration, yOffset]);

  const childArray = React.Children.toArray(children);

  return (
    <div ref={containerRef} className={`v3-reveal-group ${className}`}>
      {childArray.map((child, idx) => (
        <div key={idx} className="v3-reveal-item flex flex-col flex-1 h-full min-w-0">
          {child}
        </div>
      ))}
    </div>
  );
}

export default Reveal;
