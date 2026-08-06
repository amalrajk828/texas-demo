"use client";

import { useRef } from "react";
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

  const colsClass =
    cols === 5
      ? "lg:grid-cols-5"
      : cols === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 ${colsClass} gap-4 ${className}`}>
      {items.map((item, i) => (
        <div
          key={item.title}
        >
          <IconCard item={item} variant={variant} />
        </div>
      ))}
    </div>
  );
}
