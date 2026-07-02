"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type Product = {
  id?: number;
  name: string;
  slug: string;
  tag?: string;
  image?: string;
  description?: string;
  variants?: string[];
  category?: string;
};

export default function ProductCard({
  product,
  category,
}: {
  product: Product;
  category?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const targetCategory = product.category || category || "";

  const tagMap: Record<string, string> = {
    "Industrial Sensors": "SICK Industrial Sensors",
    "PLC": "Mitsubishi Electric PLC",
    "ICONICS": "Mitsubishi Electric HMI / SCADA",
    "GOT": "Mitsubishi Electric HMI",
    "Frequency Inverters (VFD)": "Mitsubishi Electric VFD",
    "AC Servos": "Mitsubishi Electric AC Servo",
  };
  const displayTag = product.tag || tagMap[product.category || ""] || tagMap[category || ""] || "Texas Technical Services Product";
  const displayImage = product.image || "";

  return (
    <div className="product-card group relative bg-white border border-[#E8E8F0] border-l-4 border-l-transparent hover:border-l-[#F5821F] rounded-[12px] p-5 min-[480px]:p-[28px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1">
      {/* Absolute overlay link for card clickability */}
      <Link
        href={`/portfolio/${product.slug}`}
        className="absolute inset-0 z-10"
        aria-label={product.name}
      />

      <div className="grid grid-cols-1 min-[769px]:grid-cols-[300px_1fr] gap-8 items-start">
        {/* Image Area */}
        <div className="relative w-full h-[220px] min-[769px]:w-[300px] min-[769px]:h-[220px] bg-[#1a1d35] rounded-[8px] overflow-hidden shrink-0">
          {!imgError && displayImage ? (
            <Image
              src={displayImage}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 300px"
              onError={() => setImgError(true)}
            />
          ) : (
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
                background: "#F5821F22", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#F5821F" strokeWidth="1.5"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="#F5821F"/>
                  <path d="M21 15L16 10L5 21" stroke="#F5821F" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{ color: "#A0A8C0", fontSize: "12px", textAlign: "center", lineHeight: "1.4" }}>
                {product.name}
              </span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <span className="text-[#F5821F] text-[11px] font-bold tracking-wider uppercase">
              {displayTag}
            </span>
            <h3 className="text-[#1A1A2E] text-[20px] font-bold leading-tight mt-1">
              {product.name}
            </h3>
            {/* Thin orange underline (3px, 40px wide) */}
            <div className="w-10 h-[3px] bg-[#F5821F] mt-2 mb-4" />
            <p className="text-[#555770] text-[15px] leading-[1.7]">
              {product.description}
            </p>
            {product.variants && (
              <div className="flex flex-wrap gap-2 mt-3">
                {product.variants.map((v) => (
                  <span
                    key={v}
                    className="border border-[#F5821F] text-[#F5821F] rounded-[20px] px-2.5 py-0.5 text-[12px] font-semibold select-none"
                  >
                    {v}
                  </span>
                ))}
              </div>
            )}
          </div>
          <span className="text-[#F5821F] font-semibold text-[15px] group-hover:underline inline-flex items-center gap-1 mt-6 shrink-0">
            Read More &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
