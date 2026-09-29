"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import {
  motion,
  useAnimationControls,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import s from "./review.module.css";

export function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useMotionPreference();
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (reduced || !seen) {
      element.textContent = `${value}${suffix}`;
      return;
    }
    const control = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (number) => {
        element.textContent = `${Math.round(number)}${suffix}`;
      },
    });
    return () => control.stop();
  }, [seen, reduced, value, suffix]);
  return (
    <span className={s.numberShell}>
      <span className={s.srOnly}>
        {value}
        {suffix}
      </span>
      <span aria-hidden="true" className={s.numberReserve}>
        {value}
        {suffix}
      </span>
      <span aria-hidden="true" className={s.numberValue} ref={ref}>
        {value}
        {suffix}
      </span>
    </span>
  );
}

const preference = "(prefers-reduced-motion: reduce)";
function subscribePreference(callback: () => void) {
  const query = window.matchMedia(preference);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
// Framer Motion 12 captures its preference at mount. Subscribe to live changes
// as well, so switching the OS preference also stops slideshow autoplay.
export function useMotionPreference() {
  return useSyncExternalStore(
    subscribePreference,
    () => window.matchMedia(preference).matches,
    () => true,
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "-35px" });
  const reduced = useMotionPreference();
  const controls = useAnimationControls();
  useEffect(() => {
    if (seen && !reduced)
      void controls.start({
        y: [18, 0],
        opacity: [0.88, 1],
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      });
    else if (reduced) {
      controls.stop();
      controls.set({ y: 0, opacity: 1 });
    }
  }, [seen, reduced, controls, delay]);
  // No invisible initial state: content is visible in SSR and with JS disabled.
  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Card({
  children,
  className = "",
  glass = false,
}: {
  children: ReactNode;
  className?: string;
  glass?: boolean;
}) {
  const reduced = useMotionPreference();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 180, damping: 25 });
  const rotateY = useSpring(y, { stiffness: 180, damping: 25 });
  return (
    <motion.div
      initial={false}
      className={className}
      style={{
        rotateX: reduced ? 0 : rotateX,
        rotateY: reduced ? 0 : rotateY,
        transformPerspective: 1000,
      }}
      whileHover={reduced ? undefined : { y: glass ? -7 : -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
      onPointerMove={(event) => {
        if (!glass || reduced || event.pointerType !== "mouse") return;
        const box = event.currentTarget.getBoundingClientRect();
        x.set((0.5 - (event.clientY - box.top) / box.height) * 4);
        y.set(((event.clientX - box.left) / box.width - 0.5) * 4);
        event.currentTarget.style.setProperty(
          "--card-spot-x",
          `${event.clientX - box.left}px`,
        );
        event.currentTarget.style.setProperty(
          "--card-spot-y",
          `${event.clientY - box.top}px`,
        );
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
