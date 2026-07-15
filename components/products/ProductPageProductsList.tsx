import React from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";
import ProductPageProductsListItem from "./ProductPageProductsListItem";

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
    <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
      <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
        <div className="flex flex-col">
          {products.map((product, index) => (
            <React.Fragment key={product.slug}>
              <ProductPageProductsListItem delay={index}>
                <ProductCard
                  product={product}
                  category={category}
                  imageFit={imageFit}
                  href={resolveCardHref ? resolveCardHref(product.slug) : undefined}
                />
              </ProductPageProductsListItem>
              {index < products.length - 1 && (
                <div className="border-t border-[#E8E8F0] my-[10px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
