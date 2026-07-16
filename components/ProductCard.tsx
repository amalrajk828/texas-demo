"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Activity, Cpu, Gauge } from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Activity,
  Cpu,
  Gauge,
};

export type Product = {
  id?: number;
  name: string;
  slug: string;
  tag?: string;
  image?: string;
  description?: string;
  desc?: string; // fallback for industries
  variants?: string[];
  category?: string;
  brand?: string;
  // Blog specific fields
  date?: string;
  readTime?: string;
  author?: string;
};

export default function ProductCard({
  product,
  category,
  href,
  imageFit = "cover",
  theme = "red",
  badgeClassName,
  className = "",
  iconName,
  readMoreText = "Read More",
}: {
  product: Product;
  category?: string;
  href?: string;
  imageFit?: "cover" | "contain";
  theme?: "red" | "industry";
  badgeClassName?: string;
  className?: string;
  iconName?: string;
  readMoreText?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const targetCategory = product.category || category || "";
  const displayBrand = product.brand || product.tag || "Texas Technical Services";
  const displayImage = product.image || "";
  const displayDesc = product.description || product.desc || "";
  const finalHref = href || `/portfolio/${product.slug}/`;
  const Icon = iconName ? iconMap[iconName] : undefined;

  // Default badge styling for red theme vs custom badge styling
  const defaultBadgeClass = theme === "industry"
    ? "bg-white/10 text-white/60 border-white/15 px-2.5 py-1 rounded-full border backdrop-blur-sm"
    : "bg-[#e7212b]/15 text-[#e7212b] border-[#e7212b]/20 px-2.5 py-1 rounded-full border";
  const finalBadgeClass = badgeClassName || defaultBadgeClass;

  return (
    <div className="product-card group relative bg-white border border-[#E8E8F0] border-l-4 border-l-transparent hover:border-l-[#e7212b] rounded-[12px] p-5 min-[480px]:p-[28px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1">
      {/* Absolute overlay link for card clickability */}
      <Link
        href={href ?? `/portfolio/${product.slug}`}
        className="absolute inset-0 z-10"
        aria-label={product.name}
      />

      <div className="grid grid-cols-1 min-[769px]:grid-cols-[300px_1fr] gap-8 items-start">
        {/* Image Area */}
        <div
          className={
            imageFit === "contain"
              ? "relative w-full h-[220px] min-[769px]:w-[300px] min-[769px]:h-[220px] bg-white border border-[#E8E8F0] rounded-[8px] overflow-hidden shrink-0"
              : "relative w-full h-[220px] min-[769px]:w-[300px] min-[769px]:h-[220px] bg-[#1a1d35] rounded-[8px] overflow-hidden shrink-0"
          }
        >
          {!imgError && displayImage ? (
            <Image
              src={displayImage}
              alt={product.name}
              fill
              className={
                imageFit === "contain"
                  ? "object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  : "object-cover transition-transform duration-500 group-hover:scale-105"
              }
              sizes="(max-width: 768px) 100vw, 300px"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #1a1d35 0%, #0d1024 100%)",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "16px",
                border: "1px solid #2A2D4A",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "#e7212b22",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#e7212b"
                    strokeWidth="1.5"
                  />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="#e7212b" />
                  <path
                    d="M21 15L16 10L5 21"
                    stroke="#e7212b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  color: "#A0A8C0",
                  fontSize: "12px",
                  textAlign: "center",
                  lineHeight: "1.4",
                }}
              >
                {product.name}
              </span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <span className="text-[#e7212b] text-[11px] font-bold tracking-wider uppercase">
              {displayTag}
            </span>
            <h3 className="text-[#1A1A2E] text-[20px] font-bold leading-tight mt-1">
              {product.name}
            </h3>
            {/* Thin orange underline (3px, 40px wide) */}
            <div className="w-10 h-[3px] bg-[#e7212b] mt-2 mb-4" />
            <p className="text-[#555770] text-[15px] leading-[1.7]">
              {product.description && product.description.length > 200
                ? `${product.description.slice(0, 200).trimEnd()}…`
                : product.description}
            </p>
            {product.variants && (
              <div className="flex flex-wrap gap-2 mt-3">
                {product.variants.map((v) => (
                  <span
                    key={v}
                    className="border border-[#e7212b] text-[#e7212b] rounded-[20px] px-2.5 py-0.5 text-[12px] font-semibold select-none"
                  >
                    {v}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Category badge */}
        {targetCategory && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-flex items-center text-[9px] font-medium tracking-[1.5px] uppercase ${finalBadgeClass}`}
            >
              {targetCategory}
            </span>
          </div>
        )}

        {/* Icon overlay */}
        {Icon && (
          <div className="absolute top-3 right-3 z-10">
            <div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-sm group-hover:bg-[#e7212b] group-hover:text-white transition-all duration-300">
              <Icon className="w-4 h-4 text-[#0B0D26] group-hover:text-white transition-colors" />
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] text-gray-400 mb-1.5 tracking-wide">{displayBrand}</p>
        <h3 className="text-[14px] font-medium text-[#0B0D26] group-hover:text-[#e7212b] transition-colors duration-200 leading-snug mb-2">
          <Link href={finalHref}>{product.name}</Link>
        </h3>
        <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-3 mb-4 flex-1">
          {displayDesc}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#f0f0f0] text-[11.5px] text-gray-400">
          {product.date || product.readTime ? (
            <div className="flex items-center gap-2.5">
              {product.date && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {product.date}
                </span>
              )}
              {product.date && product.readTime && <span className="w-1 h-1 rounded-full bg-gray-300" />}
              {product.readTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {product.readTime}
                </span>
              )}
            </div>
          ) : (
            <span className="w-4 h-px bg-[#e7212b]/20 group-hover:w-10 transition-all duration-300" />
          )}

          <Link
            href={finalHref}
            className="inline-flex items-center gap-1.5 text-[#e7212b] text-[11px] font-medium group-hover:gap-2.5 transition-all duration-200 shrink-0"
          >
            {readMoreText} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Red reveal bar */}
      <div className="h-[3px] bg-[#e7212b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}
