"use client";

import { useRef } from "react";
import PortfolioGroupCategoryCard from "./PortfolioGroupCategoryCard";
import type { CategoryLink } from "@/lib/portfolio-group";

export default function PortfolioGroupCategoryGrid({
  links,
}: {
  links: CategoryLink[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {links.map((link, i) => (
        <div
          key={link.href}
        >
          <PortfolioGroupCategoryCard link={link} />
        </div>
      ))}
    </div>
  );
}
