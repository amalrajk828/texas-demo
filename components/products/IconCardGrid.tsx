"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import IconCard from "./IconCard";
import type { IconCardGridCols, IconCardItem, IconCardVariant } from "./types";

export default function IconCardGrid({
  items,
  cols = 3,
  variant = "light",
  className = "",
}: {
  items: IconCardItem[];
  cols?: IconCardGridCols;
  variant?: IconCardVariant;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const colsClass =
    cols === 5
      ? "lg:grid-cols-5"
      : cols === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 ${colsClass} gap-4 ${className}`}>
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          <IconCard item={item} variant={variant} />
        </motion.div>
      ))}
    </div>
  );
}
