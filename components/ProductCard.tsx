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
    <div
      className={`group bg-white/[0.10] backdrop-blur-xl border border-white/[0.12] hover:border-[#e7212b]/40 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_4px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_40px_rgba(231,33,43,0.12)] flex flex-col fade-up ${className}`}
      style={{ "--tw-shadow-color": "rgba(231,33,43,0.10)" } as React.CSSProperties}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.16) 0%, transparent 70%)" }}
      />
      {/* Image Container */}
      <div className={`relative h-44 overflow-hidden shrink-0 ${imageFit === "contain" ? "bg-white border-b border-[#e8eaf0] p-4" : "bg-[#0B0D26]"}`}>
        {!imgError && displayImage ? (
          <Image
            src={displayImage}
            alt={`${product.name} — ${displayBrand}`}
            fill
            className={`transition-transform duration-700 ease-out group-hover:scale-[1.07] ${imageFit === "contain" ? "object-contain p-4" : "object-cover"}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1d35] to-[#0d1024] flex flex-col items-center justify-center p-4">
            <span className="text-[#A0A8C0] text-[12px] font-semibold text-center">{product.name}</span>
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
        <p className="text-[11px] text-white/60 mb-1.5 tracking-wide">{displayBrand}</p>
        <h3 className="text-[15px] font-medium text-white group-hover:text-[#e7212b] transition-colors duration-200 leading-snug mb-2">
          <Link href={finalHref}>{product.name}</Link>
        </h3>
        <p className="text-white/70 text-[13px] leading-relaxed line-clamp-3 mb-4 flex-1">
          {displayDesc}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/20 text-[12px] text-white/50">
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
            className="inline-flex items-center gap-1.5 text-[#e7212b] text-[12px] font-medium group-hover:gap-2.5 transition-all duration-200 shrink-0"
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
