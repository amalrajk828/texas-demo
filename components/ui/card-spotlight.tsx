"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { ReactNode } from "react";

// Lightweight adaptation of the supplied spotlight; the glow stays behind copy.
export function CardSpotlight({
  children,
  className,
  reduced = false,
}: {
  children: ReactNode;
  className?: string;
  reduced?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, var(--navbar-spotlight, rgba(138,48,47,.22)), transparent 75%)`;
  return (
    <div
      className={className}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - bounds.left);
        y.set(event.clientY - bounds.top);
      }}
    >
      <motion.span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          background: reduced ? "none" : background,
          zIndex: -1,
        }}
      />
      {children}
    </div>
  );
}
