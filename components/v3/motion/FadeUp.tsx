"use client";

import React, { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";

const emptySubscribe = () => () => {};

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  className = "",
}: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (shouldReduceMotion || !mounted) {
    return <div className={`flex flex-col flex-1 h-full min-w-0 ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "120px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={`flex flex-col flex-1 h-full min-w-0 ${className}`}
    >
      {children}
    </motion.div>
  );
}
