"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";

/* ──────────────────────────────────────────────────────────────────────────
   1. Shared Single IntersectionObserver & Document Setup
────────────────────────────────────────────────────────────────────────── */

let sharedObserver: IntersectionObserver | null = null;
const revealCallbacks = new Map<Element, () => void>();

function getSharedObserver() {
  if (typeof window === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = revealCallbacks.get(entry.target);
            if (cb) {
              cb();
              revealCallbacks.delete(entry.target);
              sharedObserver?.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );
  }
  return sharedObserver;
}

/* ──────────────────────────────────────────────────────────────────────────
   2. useReveal Hook
────────────────────────────────────────────────────────────────────────── */
export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    if (typeof document !== "undefined" && !document.documentElement.classList.contains("js")) {
      document.documentElement.classList.add("js");
    }

    const el = ref.current;
    if (!el) return;

    // Prefers reduced motion -> reveal immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (isMountedRef.current) setIsRevealed(true);
      el.setAttribute("data-revealed", "true");
      return;
    }

    // Anchor hash check: if page loaded at a hash, reveal all elements above it
    if (window.location.hash) {
      try {
        const hashEl = document.querySelector(window.location.hash);
        if (hashEl) {
          const hashTop = hashEl.getBoundingClientRect().top + window.scrollY;
          const elTop = el.getBoundingClientRect().top + window.scrollY;
          if (elTop <= hashTop + 100) {
            if (isMountedRef.current) setIsRevealed(true);
            el.setAttribute("data-revealed", "true");
            return;
          }
        }
      } catch {
        // Invalid selector fallback
      }
    }

    // If element is already in the viewport on first paint, reveal promptly
    const rect = el.getBoundingClientRect();
    let timer: NodeJS.Timeout | null = null;
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      timer = setTimeout(() => {
        if (isMountedRef.current) {
          setIsRevealed(true);
          el.setAttribute("data-revealed", "true");
        }
      }, 100);
      return () => {
        if (timer) clearTimeout(timer);
      };
    }

    const obs = getSharedObserver();
    if (!obs) {
      if (isMountedRef.current) setIsRevealed(true);
      el.setAttribute("data-revealed", "true");
      return;
    }

    const onReveal = () => {
      // Set will-change just before animating
      el.classList.add("will-reveal");
      if (isMountedRef.current) setIsRevealed(true);
      el.setAttribute("data-revealed", "true");

      // Clean up will-change on transitionend
      const handleTransitionEnd = () => {
        el.classList.remove("will-reveal");
        el.removeEventListener("transitionend", handleTransitionEnd);
      };
      el.addEventListener("transitionend", handleTransitionEnd);
    };

    revealCallbacks.set(el, onReveal);
    obs.observe(el);

    return () => {
      isMountedRef.current = false;
      if (timer) clearTimeout(timer);
      revealCallbacks.delete(el);
      obs.unobserve(el);
    };
  }, []);

  return { ref, isRevealed };
}

/* ──────────────────────────────────────────────────────────────────────────
   3. <Reveal> Component (Polymorphic container)
────────────────────────────────────────────────────────────────────────── */
export type RevealVariant =
  | "up"
  | "eyebrow"
  | "heading"
  | "paragraph"
  | "card"
  | "image"
  | "button"
  | "divider";

type RevealOwnProps<T extends ElementType = "div"> = {
  as?: T;
  variant?: RevealVariant;
  delay?: number; // Base delay in ms
  stagger?: number; // Stagger in s or ms (e.g. 0.08 or 90)
  index?: number; // List index (--i)
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export type RevealComponentProps<T extends ElementType = "div"> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

export function Reveal<T extends ElementType = "div">({
  as,
  variant = "up",
  delay = 0,
  stagger = 0.09,
  index = 0,
  className = "",
  children,
  style,
  ...restProps
}: RevealComponentProps<T>) {
  const Component = (as || "div") as any;
  const { ref, isRevealed } = useReveal();

  const staggerSec = stagger > 1 ? `${stagger}ms` : `${stagger}s`;

  // Custom styling attributes for choreography
  const inlineStyles: React.CSSProperties = {
    "--base": `${delay}ms`,
    "--stagger": staggerSec,
    "--i": index,
    ...style,
  } as React.CSSProperties;

  if (variant === "eyebrow") {
    return (
      <Component
        ref={ref}
        data-reveal="eyebrow"
        data-revealed={isRevealed ? "true" : undefined}
        className={`reveal-eyebrow-wrap ${className}`}
        style={inlineStyles}
        {...restProps}
      >
        <span className="reveal-eyebrow-line" aria-hidden="true" />
        <span className="reveal-eyebrow-mask">
          <span className="reveal-eyebrow-inner">{children}</span>
        </span>
      </Component>
    );
  }

  return (
    <Component
      ref={ref}
      data-reveal={variant}
      data-revealed={isRevealed ? "true" : undefined}
      className={`reveal-elem reveal-${variant} ${className}`}
      style={inlineStyles}
      {...restProps}
    >
      {children}
    </Component>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   4. <RevealText> Component (Split lines / words with accessible text)
────────────────────────────────────────────────────────────────────────── */
type RevealTextOwnProps<T extends ElementType = "h2"> = {
  as?: T;
  variant?: "lines" | "words" | "eyebrow";
  delay?: number;
  stagger?: number;
  className?: string;
  children: string; // Plain string or text with \n
  style?: React.CSSProperties;
};

export type RevealTextProps<T extends ElementType = "h2"> = RevealTextOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealTextOwnProps<T>>;

export function RevealText<T extends ElementType = "h2">({
  as,
  variant = "lines",
  delay = 0,
  stagger,
  className = "",
  children,
  style,
  ...restProps
}: RevealTextProps<T>) {
  const Component = (as || "h2") as any;
  const { ref, isRevealed } = useReveal();

  const rawText = typeof children === "string" ? children : String(children);

  // If text contains newline \n or <br>, split into lines; otherwise split into lines or words
  const hasNewlines = rawText.includes("\n");
  const isLines = variant === "lines" || hasNewlines;

  const parts = isLines
    ? hasNewlines
      ? rawText.split("\n")
      : [rawText]
    : rawText.split(" ");

  const defaultStagger = isLines ? 0.09 : 0.045;
  const activeStagger = stagger ?? defaultStagger;
  const staggerSec = activeStagger > 1 ? `${activeStagger}ms` : `${activeStagger}s`;

  const inlineStyles: React.CSSProperties = {
    "--base": `${delay}ms`,
    "--stagger": staggerSec,
    ...style,
  } as React.CSSProperties;

  return (
    <Component
      ref={ref}
      data-reveal="heading"
      data-revealed={isRevealed ? "true" : undefined}
      aria-label={rawText.replace(/\n/g, " ")}
      className={`reveal-heading-wrap ${className}`}
      style={inlineStyles}
      {...restProps}
    >
      {parts.map((item, idx) => (
        <span
          key={idx}
          className="reveal-heading-mask"
          style={{ "--i": idx } as React.CSSProperties}
          aria-hidden="true"
        >
          <span className="reveal-heading-inner">
            {item}
            {!isLines && idx < parts.length - 1 && "\u00A0"}
          </span>
          {isLines && idx < parts.length - 1 && <br />}
        </span>
      ))}
    </Component>
  );
}

export default Reveal;
