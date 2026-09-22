"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Dir = "up" | "left" | "right" | "down";

const getInitial = (dir: Dir, distance = 30) => {
  switch (dir) {
    case "left":  return { opacity: 0, x: -distance };
    case "right": return { opacity: 0, x:  distance };
    case "down":  return { opacity: 0, y: -distance };
    default:      return { opacity: 0, y:  distance };
  }
};

interface FadeSectionProps {
  children: ReactNode;
  /** Extra entrance delay in seconds */
  delay?: number;
  /** Slide direction. Default: "up" */
  dir?: Dir;
  /** Travel distance in px. Default: 30 */
  distance?: number;
  /** Viewport margin before triggering. Default: "-80px" */
  margin?: string;
  /** Framer Motion transition duration in s. Default: 0.5 */
  duration?: number;
  className?: string;
  /** Render as a different element tag via motion[tag] */
  as?: "div" | "section" | "article" | "span" | "li";
}

/**
 * FadeSection — reusable scroll-triggered reveal wrapper.
 * Wraps children with a whileInView fade + slide animation.
 * Only triggers once (once: true). Keeps GPU-friendly transforms only.
 */
export default function FadeSection({
  children,
  delay = 0,
  dir = "up",
  distance = 30,
  margin = "-80px",
  duration = 0.5,
  className = "",
  as = "div",
}: FadeSectionProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial={getInitial(dir, distance)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/** Pre-built variants for staggered grid children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
