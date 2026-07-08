"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { products, type Product } from "@/lib/products";

const categories = [
  "All",
  "Industrial Sensors",
  "PLC",
  "ICONICS",
  "GOT",
  "Frequency Inverters (VFD)",
  "AC Servos",
];

export default function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const groupedProducts = filteredProducts.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {} as Record<string, Product[]>,
  );

  const orderedCategories = [
    "Industrial Sensors",
    "PLC",
    "ICONICS",
    "GOT",
    "Frequency Inverters (VFD)",
    "AC Servos",
  ].filter((cat) => groupedProducts[cat] && groupedProducts[cat].length > 0);

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#F5821F]">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(245,130,31,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Portfolio</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              Texas Technical Services · Product Showcase
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            Product Portfolio
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            Explore our complete lineup of industrial automation hardware,
            software, and sensors.
          </p>
        </div>
      </section>

      {/* ── Category Filter Bar ───────────────────────────────── */}
      <section className="bg-[#F8F9FA] border-b border-[#E8E8F0] py-6 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 text-sm font-semibold rounded-[30px] border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#F5821F] border-[#F5821F] text-white shadow-md shadow-[#F5821F]/10"
                      : "bg-white border-[#E8E8F0] text-[#1A1A2E] hover:border-[#F5821F] hover:text-[#F5821F]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Portfolio Items Grid ─────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-12">
            {orderedCategories.map((category) => (
              <div key={category} className="flex flex-col gap-6">
                {/* Visual Category Header */}
                <div className="bg-[#FFF8F3] border-l-4 border-[#F5821F] py-3 px-6 flex items-center gap-4 shadow-sm rounded-[4px]">
                  <h2 className="text-[#1A1A2E] font-bold text-base font-sans leading-none uppercase tracking-wider">
                    {category}
                  </h2>
                  <div className="h-px bg-[#F5821F]/20 flex-1" />
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedProducts[category].map((product) => (
                    <PortfolioCard key={product.slug} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PortfolioCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/portfolio/${product.slug}/`}
      className="group relative bg-white border border-[#E8E8F0] hover:border-[#F5821F]/30 rounded-[12px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(245,130,31,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-4">
        {/* Image Container Area */}
        <div className="relative w-full h-[200px] bg-[#1a1d35] rounded-[8px] overflow-hidden flex items-center justify-center shrink-0">
          {product.image && !imgError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 350px"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="text-[#A0A8C0] text-[13px] font-semibold uppercase tracking-wider text-center p-4">
              {product.name}
            </div>
          )}
        </div>

        {/* Content Area */}
        <div>
          <span className="text-[#F5821F] text-[10px] font-bold tracking-wider uppercase">
            {product.category}
          </span>
          <h3 className="text-[#1A1A2E] text-[16px] font-bold leading-snug mt-1 group-hover:text-[#F5821F] transition-colors duration-200">
            {product.name}
          </h3>
        </div>
      </div>

      <span className="text-[#F5821F] font-semibold text-[13px] group-hover:underline inline-flex items-center gap-1 mt-4">
        View Details &rarr;
      </span>
    </Link>
  );
}
