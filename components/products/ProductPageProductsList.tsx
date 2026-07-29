import React from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";
import ProductPageProductsListItem from "./ProductPageProductsListItem";

export default function ProductPageProductsList({
  products,
  category,
  imageFit = "contain",
  resolveCardHref,
}: {
  products: Product[];
  category: string;
  imageFit?: "cover" | "contain";
  resolveCardHref?: (slug: string) => string | undefined;
}) {
  return (
    <section className="bg-[#F8F9FA] py-14 lg:py-20 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductPageProductsListItem key={product.slug} delay={index}>
              <ProductCard
                product={product}
                category={category}
                imageFit={imageFit}
                href={resolveCardHref ? resolveCardHref(product.slug) : undefined}
                className="h-full"
              />
            </ProductPageProductsListItem>
          ))}
        </div>
      </div>
    </section>
  );
}
