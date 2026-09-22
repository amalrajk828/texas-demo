"use client";

import { useRef } from "react";
import PortfolioGroupProductCard from "./PortfolioGroupProductCard";
import type { Product } from "@/lib/products";

export default function PortfolioGroupProductGrid({
  products,
}: {
  products: Product[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
    >
      {products.map((product, i) => (
        <div
          key={product.slug}
        >
          <PortfolioGroupProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
