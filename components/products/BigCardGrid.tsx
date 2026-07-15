"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BigCard from "./BigCard";
import type { BigCardItem } from "./types";

export default function BigCardGrid({
  items,
  cols = 3,
  className = "",
}: {
  items: BigCardItem[];
  cols?: 2 | 3;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const colsClass = cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div ref={ref} className={`grid grid-cols-1 ${colsClass} gap-5 ${className}`}>
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          <BigCard item={item} />
        </motion.div>
      ))}
    </div>
  );
}
