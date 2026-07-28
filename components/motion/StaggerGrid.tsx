"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer, staggerItem } from "./FadeSection";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  /** Additional delay before first child animates */
  delay?: number;
  /** Stagger interval between children in seconds. Default: 0.09 */
  stagger?: number;
}

/**
 * StaggerGrid — wraps a card grid so each child fades+slides up
 * sequentially on scroll-into-view. Use <StaggerGrid.Item> for each card.
 */
export function StaggerGrid({ children, className = "", delay = 0.05, stagger = 0.09 }: StaggerGridProps) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

/** Individual item inside a StaggerGrid */
export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
