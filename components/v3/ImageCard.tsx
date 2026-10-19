"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Tag as TagIcon, Layers, Calendar, Clock } from "lucide-react";

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
  fit?: "contain" | "cover";
  imageFit?: "contain" | "cover";
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
  fit,
  imageFit,
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

  const requestedFit = fit || imageFit;
  const isCover = requestedFit === "cover" || (!requestedFit && isBlog);

  const displayTag = resolvedTag || (isProduct ? "View Specs" : isBlog ? "Read Article" : isLogo ? "View Partner" : "View Details");

  return (
    <Link
      href={href}
      className={`v3-image-card group relative flex flex-col w-full h-full flex-1 min-w-0 rounded-[22px] bg-white overflow-hidden transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] focus-visible:ring-offset-2 hover:-translate-y-1.5 border border-black/[0.07] ${
        isProduct ? "v3-image-card-product" : isBlog ? "v3-image-card-blog" : ""
      } ${
        isFlat
          ? "shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
          : isGreyBg
          ? "shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.09)]"
          : "shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
      } ${className}`}
    >
      {/* ── 1. Top Image Container ── */}
      <div className={`v3-card-image-area relative w-full flex-none overflow-hidden rounded-t-[22px] isolate ${
        isProduct ? "aspect-[4/3] bg-white is-product" : "aspect-[16/10] bg-[#efeeec]"
      }`}>
        {resolvedImage ? (
          <Image
            src={resolvedImage}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            priority={priority}
            className={`transition-transform duration-300 ease-out ${
              isCover
                ? "object-cover p-0 group-hover:scale-[1.02]"
                : isProduct
                ? "object-contain p-4 group-hover:scale-[1.02]"
                : isLogo
                ? "object-contain p-6 grayscale group-hover:grayscale-0 group-hover:scale-[1.02]"
                : "object-contain p-4 mix-blend-multiply group-hover:scale-[1.02]"
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#efeeec] text-[#6b7280]">
            <Layers className="w-8 h-8 stroke-[1.5] mb-2 text-[#9ca3af]" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
              Texas Technical
            </span>
          </div>
        )}

        {/* Top-Right Arrow Badge (fixed size, never stretched, no rotate on hover) */}
        {!isLogo && (
          <div className="v3-card-badge absolute top-3 right-3 w-[36px] h-[36px] min-w-[36px] min-h-[36px] max-w-[36px] max-h-[36px] rounded-[10px] bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center shrink-0 z-10 transition-colors duration-200 group-hover:bg-white pointer-events-none">
            <ArrowUpRight className="w-4 h-4 text-[#1a1c20] group-hover:text-[#8a302f] transition-colors" />
          </div>
        )}
      </div>

      {/* ── 2. Body Block ── */}
      <div className="v3-card-body p-5 sm:p-6 flex flex-col flex-1 min-w-0">
        {/* Eyebrow Label / Blog Meta */}
        <div className="v3-card-eyebrow text-[11px] font-mono uppercase tracking-wider text-[#6b7280] font-semibold truncate leading-[1.4] h-[1.4em] min-h-[1.4em] mb-2 flex items-center">
          {isBlog && (resolvedBlogMeta?.date || resolvedBlogMeta?.readTime || resolvedBlogMeta?.category) ? (
            <span className="inline-flex items-center gap-2 truncate">
              {resolvedBlogMeta.category && (
                <span className="px-2 py-0.5 rounded-full bg-[#8a302f]/[0.1] text-[#8a302f] font-semibold text-[10.5px]">
                  {resolvedBlogMeta.category}
                </span>
              )}
              {resolvedBlogMeta.date && (
                <span className="inline-flex items-center gap-1 text-[#6b7280]">
                  <Calendar className="w-3 h-3 text-[#8a302f]" />
                  {resolvedBlogMeta.date}
                </span>
              )}
              {resolvedBlogMeta.readTime && (
                <span className="inline-flex items-center gap-1 text-[#6b7280]">
                  <Clock className="w-3 h-3 text-[#8a302f]" />
                  {resolvedBlogMeta.readTime}
                </span>
              )}
            </span>
          ) : !isBlog && meta ? (
            <span className="truncate block">{meta}</span>
          ) : (
            <span className="invisible select-none" aria-hidden="true">&nbsp;</span>
          )}
        </div>

        {/* Card Title (2 lines clamp, balanced height) */}
        <h3 className="v3-card-title font-heading text-[16px] sm:text-[17px] font-bold text-[#1a1c20] leading-[1.3] transition-colors duration-300 group-hover:text-[#8a302f] line-clamp-2 min-h-[calc(2*1.3em)]">
          {title}
        </h3>

        {/* Subtitle / Description (3 lines clamp) */}
        <p className="v3-card-description mt-2.5 text-[13px] sm:text-[13.5px] text-[#595956] leading-[1.55] line-clamp-3 min-h-[calc(3*1.55em)]">
          {resolvedSubtitle || <span className="invisible select-none" aria-hidden="true">&nbsp;</span>}
        </p>

        {/* Product Spec Chips */}
        {isProduct && specs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {specs.slice(0, 3).map((spec, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-[#efeeec] text-[#4b5563] text-[11px] font-mono font-medium truncate max-w-full"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        {/* ── 3. Footer Block: pinned to bottom ── */}
        <div className="v3-card-footer mt-auto pt-4 border-t border-black/[0.06] w-full">
          {isBlog ? (
            <div className="inline-flex items-center justify-between w-full text-[13px] font-bold text-[#8a302f] group-hover:text-[#6b191b] transition-colors">
              <span className="uppercase tracking-wider">Read More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          ) : (
            <div className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-[#8a302f]/[0.08] text-[#8a302f] text-[12px] font-semibold uppercase tracking-wider group-hover:bg-[#8a302f] group-hover:text-white transition-all duration-200">
              <TagIconComponent className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{displayTag}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
