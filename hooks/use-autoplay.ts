import { useEffect, useRef, useState } from "react";

export function useAutoplay<T extends HTMLElement = HTMLElement>({
  onNext,
  intervalMs = 5000,
  enabled = true,
  resetKey,
}: {
  onNext: () => void;
  intervalMs?: number;
  enabled?: boolean;
  resetKey?: unknown; // change this (e.g. the current index) to restart the countdown
}) {
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [inView, setInView] = useState(true);
  const rootRef = useRef<T | null>(null);
  const nextRef = useRef(onNext);
  nextRef.current = onNext;

  // Respect reduced motion
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Pause when the browser tab is hidden
  useEffect(() => {
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Pause when the slider is off-screen
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // The timer. It restarts whenever resetKey changes, so manual clicks reset the countdown.
  useEffect(() => {
    if (!enabled || paused || !visible || !inView || reduced) return;
    const t = setInterval(() => nextRef.current(), intervalMs);
    return () => clearInterval(t);
  }, [enabled, paused, visible, inView, reduced, intervalMs, resetKey]);

  return {
    rootRef,
    // spread these on the slider's root element
    handlers: {
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      onFocusCapture: () => setPaused(true),
      onBlurCapture: () => setPaused(false),
      onTouchStart: () => setPaused(true),
      onTouchEnd: () => setTimeout(() => setPaused(false), 4000), // resume 4s after touch
    },
    paused,
  };
}
