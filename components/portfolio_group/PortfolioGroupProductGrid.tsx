"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PortfolioGroupProductCard from "./PortfolioGroupProductCard";
import type { Product } from "@/lib/products";

export default function PortfolioGroupProductGrid({
  products,
}: {
  products: Product[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
    >
      {products.map((product, i) => (
        <motion.div
          key={product.slug}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.08 + (i % 3) * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <PortfolioGroupProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}
