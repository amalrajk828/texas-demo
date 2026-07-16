"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BadgeCard from "./BadgeCard";
import type { BadgeItem } from "./types";

export default function BadgeList({
  items,
  variant = "light",
  className = "",
  justify = "center",
}: {
  items: BadgeItem[];
  variant?: "light" | "dark";
  className?: string;
  justify?: "center" | "start";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const justifyClass = justify === "center" ? "justify-center" : "justify-start";

  return (
    <div
      ref={ref}
      className={`flex flex-wrap items-center gap-3 ${justifyClass} ${className}`}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          <BadgeCard item={item} variant={variant} />
        </motion.div>
      ))}
    </div>
  );
}
