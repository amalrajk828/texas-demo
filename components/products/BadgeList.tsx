"use client";

import { useRef } from "react";
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

  const justifyClass = justify === "center" ? "justify-center" : "justify-start";

  return (
    <div
      ref={ref}
      className={`flex flex-wrap items-center gap-3 ${justifyClass} ${className}`}
    >
      {items.map((item, i) => (
        <div
          key={item.name}
        >
          <BadgeCard item={item} variant={variant} />
        </div>
      ))}
    </div>
  );
}
