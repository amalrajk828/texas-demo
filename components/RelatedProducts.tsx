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
    <section className="bg-[#F8F9FA] py-16 border-t border-[#E8E8F0]">
      <div className="max-w-[1100px] mx-auto px-10">
        <h2 className="text-[#1A1A2E] text-2xl font-bold mb-8 text-center sm:text-left font-display">
          {title}
        </h2>
        <div className="flex flex-col gap-5">
          {related.map((prod) => (
            <ProductCard key={prod.slug} product={prod} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
