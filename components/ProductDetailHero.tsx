"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export type ProductDetail = {
  name: string;
  tag: string;
  image: string;
  description: string;
  externalLink: string;
  downloadLink: string | null;
  series?: string;
};

export default function ProductDetailHero({
  product,
  category,
  categoryLabel,
  seriesBadge,
}: {
  product: ProductDetail;
  category: string;
  categoryLabel: string;
  seriesBadge?: string;
}) {
  const [imgError, setImgError] = useState(false);
  // Extract the first sentence of the description as the subtitle
  const subtitle = product.description.split(".")[0] + ".";

  return (
    <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden border-b-4 border-[#e7212b] pt-[calc(var(--navbar-height,92px)+1.5rem)] pb-12 md:pt-[calc(var(--navbar-height,92px)+2.25rem)] md:pb-16">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
        }}
      />
      {/* Red radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(231,33,43,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href={`/products/${category}`} className="hover:text-white transition-colors">
            {categoryLabel}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white">{product.name}</span>
        </nav>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 min-[769px]:grid-cols-2 gap-10 items-center">
          {/* Left Text Column */}
          <div className="flex flex-col items-start">
            <span className="text-[#0891B2] text-[14px] font-bold tracking-wider uppercase mb-2">
              {product.tag}
            </span>
            {seriesBadge && (
              <span className="inline-block bg-[#e7212b] text-white text-[12px] font-semibold px-[10px] py-[3px] rounded-[4px] mb-3 select-none">
                {seriesBadge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              {subtitle}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={product.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-[#e7212b] text-[#e7212b] hover:bg-[#e7212b] hover:text-white font-semibold rounded-[6px] px-[28px] py-[12px] transition-colors duration-200 text-sm"
              >
                For More Detail
              </a>
              {product.downloadLink && (
                <a
                  href={product.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#e7212b] text-white hover:bg-[#aa0b1b] font-semibold rounded-[6px] px-[28px] py-[12px] transition-colors duration-200 text-sm shadow-md shadow-[#e7212b]/10"
                >
                  Download Datasheet
                </a>
              )}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden bg-[#1a1d35] shadow-2xl border border-white/5 flex items-center justify-center">
            {imgError ? (
              <div style={{
                width: "100%", height: "100%",
                background: "linear-gradient(135deg, #1a1d35 0%, #0d1024 100%)",
                borderRadius: "8px",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: "8px", padding: "16px",
                border: "1px solid #2A2D4A"
              }}>
                <div style={{
                  width: "48px", height: "48px",
                  background: "#e7212b22", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#e7212b" strokeWidth="1.5"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="#e7212b"/>
                    <path d="M21 15L16 10L5 21" stroke="#e7212b" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span style={{ color: "#A0A8C0", fontSize: "12px", textAlign: "center", lineHeight: "1.4" }}>
                  {product.name}
                </span>
              </div>
            ) : (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
