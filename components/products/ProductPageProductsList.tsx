import React from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

export default function ProductPageProductsList({
  products,
  category,
  imageFit = "cover",
  resolveCardHref,
}: {
  products: Product[];
  category: string;
  imageFit?: "cover" | "contain";
  resolveCardHref?: (slug: string) => string | undefined;
}) {
  return (
    <section className="bg-[#0B0D26] relative overflow-hidden py-14 border-t border-b border-white/10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.05) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.05) 40px)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.08) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              category={category}
              imageFit={imageFit}
              dark
              href={resolveCardHref ? resolveCardHref(product.slug) : undefined}
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
