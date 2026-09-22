import React from "react";
import ProductCard, { type Product } from "./ProductCard";

export default function RelatedProducts({
  currentSlug,
  products,
  category,
  title,
}: {
  currentSlug: string;
  products: Product[];
  category: string;
  title: string;
}) {
  // Filter out the current product and show up to 3 related products
  const related = products
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="bg-[#0B0D26] py-16 border-t border-b border-white/10 relative">
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
        <h2 className="text-white text-2xl font-bold mb-8 text-center sm:text-left font-display">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((prod) => (
            <ProductCard key={prod.slug} product={prod} category={category} dark />
          ))}
        </div>
      </div>
    </section>
  );
}
