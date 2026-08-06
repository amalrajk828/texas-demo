"use client";

import { useRef } from "react";
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

  const colsClass = cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div ref={ref} className={`grid grid-cols-1 ${colsClass} gap-5 ${className}`}>
      {items.map((item, i) => (
        <div
          key={item.title}
        >
          <BigCard item={item} />
        </div>
      ))}
    </div>
  );
}
