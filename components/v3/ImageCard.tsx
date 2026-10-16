"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Tag as TagIcon, Layers, Calendar, Clock } from "lucide-react";

export interface ImageCardProps {
  href: string;
  imageSrc?: string | null;
  imageUrl?: string | null;
  imageAlt?: string;
  title: string;
  subtitle?: string | null;
  description?: string | null;
  meta?: string | null;
  tag?: string | null;
  badge?: string | null;
  tagIcon?: React.ComponentType<{ className?: string }>;
  tone?: "light" | "grey";
  variant?: "default" | "product" | "logo" | "blog";
  elevation?: "raised" | "flat";
  specs?: string[];
  date?: string;
  readTime?: string;
  blogMeta?: {
    date?: string;
    readTime?: string;
    category?: string;
  };
  className?: string;
  priority?: boolean;
}

export default function ImageCard({
  href,
  imageSrc,
  imageUrl,
  imageAlt = "",
  title,
  subtitle,
  description,
  meta,
  tag,
  badge,
  tagIcon: TagIconComponent = TagIcon,
  tone = "grey",
  variant = "default",
  elevation = "raised",
  specs = [],
  date,
  readTime,
  blogMeta,
  className = "",
  priority = false,
}: ImageCardProps) {
  const resolvedImage = imageSrc || imageUrl;
  const resolvedSubtitle = subtitle || description;
  const resolvedTag = tag || badge;
  const resolvedBlogMeta = blogMeta || (date || readTime ? { date, readTime, category: badge || tag || undefined } : undefined);

  const isFlat = elevation === "flat";
  const isGreyBg = tone === "grey";
  const isProduct = variant === "product";
  const isLogo = variant === "logo";
  const isBlog = variant === "blog";

  const displayTag = resolvedTag || (isProduct ? "View Product" : isBlog ? "Read Article" : isLogo ? "View Partner" : "View Details");

  return (
    <Link
      href={href}
      className={`group block w-full h-full rounded-[30px] bg-white overflow-hidden transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b191b] focus-visible:ring-offset-2 hover:-translate-y-1.5 flex flex-col justify-between ${
        isFlat
          ? "border border-black/[0.07] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
          : isGreyBg
          ? "shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
          : "shadow-[0_20px_40px_rgba(0,0,0,0.10)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
      } ${className}`}
    >
      <div>
        {/* ── Top Image Container ── */}
        <div
          className={`relative w-full overflow-hidden rounded-t-[30px] ${
            isLogo
              ? "aspect-[3/2] bg-white p-6"
              : isProduct
              ? "aspect-[16/10] bg-[#f4f4f2] p-4 isolate"
              : "aspect-[16/10] bg-[#ece9e6]"
          }`}
        >
          {resolvedImage ? (
            <Image
              src={resolvedImage}
              alt={imageAlt || title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              priority={priority}
              className={`transition-all duration-500 ease-out ${
                isLogo
                  ? "object-contain p-4 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  : isProduct
                  ? "object-contain p-3 mix-blend-multiply group-hover:scale-105"
                  : "object-cover group-hover:scale-105"
              }`}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#ece9e6] text-[#6b7280]">
              <Layers className="w-8 h-8 stroke-[1.5] mb-2 text-[#9ca3af]" />
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                Texas Technical
              </span>
            </div>
          )}

          {/* Top-Right Badge (omitted on logo cards) */}
          {!isLogo && (
            <div className="absolute top-4 right-4 w-[34px] h-[34px] rounded-[10px] bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-[10deg] group-hover:bg-white z-10">
              <ArrowUpRight className="w-4 h-4 text-[#1a1c20] group-hover:text-[#6b191b] transition-colors" />
            </div>
          )}
        </div>

        {/* ── Text Block ── */}
        <div className="p-5 flex flex-col">
          {/* Blog Meta Row */}
          {isBlog && (resolvedBlogMeta?.date || resolvedBlogMeta?.readTime || resolvedBlogMeta?.category) && (
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-[#6b7280] mb-2">
              {resolvedBlogMeta.date && (
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#6b191b]" />
                  {resolvedBlogMeta.date}
                </span>
              )}
              {resolvedBlogMeta.readTime && (
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#6b191b]" />
                  {resolvedBlogMeta.readTime}
                </span>
              )}
              {resolvedBlogMeta.category && (
                <span className="px-1.5 py-0.5 rounded bg-black/[0.04] text-[#1a1c20] font-semibold">
                  {resolvedBlogMeta.category}
                </span>
              )}
            </div>
          )}

          {/* Regular Meta Tag */}
          {!isBlog && meta && (
            <span className="block text-[11px] font-mono uppercase tracking-wider text-[#6b7280] mb-1.5 font-semibold">
              {meta}
            </span>
          )}

          {/* Card Title */}
          <h3 className="font-heading text-[16px] sm:text-[17px] font-semibold text-[#1a1c20] leading-snug transition-colors duration-300 group-hover:text-[#6b191b] line-clamp-2">
            {title}
          </h3>

          {/* Subtitle */}
          {resolvedSubtitle && (
            <p className="mt-2 text-[13px] text-[#4b5563] leading-relaxed line-clamp-2">
              {resolvedSubtitle}
            </p>
          )}

          {/* Product Spec Chips */}
          {isProduct && specs.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {specs.slice(0, 3).map((spec, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-[#ece9e6] text-[#4b5563] text-[11px] font-mono font-medium truncate max-w-full"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Tag Box ── */}
      <div className="px-5 pb-5 pt-3 border-t border-black/[0.04]">
        <div className="inline-flex items-center gap-2 px-2.5 py-2 rounded-[10px] bg-[#6b191b]/[0.08] text-[#6b191b] text-[12px] font-semibold leading-tight group-hover:bg-[#6b191b]/[0.14] transition-colors">
          <TagIconComponent className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{displayTag}</span>
        </div>
      </div>
    </Link>
  );
}
