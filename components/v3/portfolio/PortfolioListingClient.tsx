"use client";

import React, { useState } from "react";
import { products, type Product } from "@/lib/products";
import { ImageCard, CardGrid } from "@/components/v3";

const categories = [
  "All",
  "Flow Meter",
  "Metering Skid",
  "CEMS",
  "Gas Analyzer",
  "Industrial Sensors",
  "PLC",
  "ICONICS",
  "GOT",
  "Frequency Inverters (VFD)",
  "AC Servos",
  "Field Instruments",
];

export default function PortfolioListingClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (p) =>
            p.category?.toLowerCase() === selectedCategory.toLowerCase() ||
            p.tag?.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <div>
      {/* ── Category Filter Pills ── */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-black/[0.06]">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-[#6b191b] text-white shadow-md shadow-[#6b191b]/20"
                  : "bg-white text-[#4b5563] hover:text-[#1a1c20] hover:bg-[#ece9e6]/70 border border-black/[0.06]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ── Products Count Bar ── */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-[12px] font-mono uppercase tracking-wider text-[#6b191b] font-bold">
          {selectedCategory === "All" ? "Complete Portfolio" : selectedCategory}
        </span>
        <span className="text-[13px] font-mono text-[#6b7280]">
          {filteredProducts.length} Equipment Systems
        </span>
      </div>

      {/* ── Products Grid ── */}
      <CardGrid max={3}>
        {filteredProducts.map((product) => (
          <ImageCard
            key={product.slug}
            variant="product"
            tone="grey"
            href={`/portfolio/${product.slug}/`}
            imageSrc={product.image}
            title={product.name}
            subtitle={product.description}
            meta={product.tag || product.category}
            tag={product.tag || product.category || "View Specs"}
            fit={product.fit}
          />
        ))}
      </CardGrid>
    </div>
  );
}
