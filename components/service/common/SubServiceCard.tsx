"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

export interface SubServiceItem {
  title: string;
  body: string;
  href?: string;
  Icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  imageSrc?: string;
  categoryTag?: string;
  placeholderNumber?: string;
}

export interface SubServiceCardProps {
  item: SubServiceItem;
  index?: number;
  categoryTag?: string;
  className?: string;
}

export function SubServiceCard({ item, index = 0, categoryTag, className = "" }: SubServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const badge = categoryTag || item.categoryTag;
  const isLink = Boolean(item.href);

  const cardContent = (
    <div className="group relative bg-white border border-[#e8eaf0] hover:border-[#e7212b]/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full text-left">
      {/* Top Thumbnail Image Header */}
      {item.imageSrc !== undefined && (
        <div className="relative h-44 overflow-hidden bg-black shrink-0">
          {item.imageSrc ? (
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
              <span className="text-[32px] font-black text-white/20 select-none">
                {item.placeholderNumber || String(index + 1).padStart(2, "0")}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {/* Category Tag Badge */}
          {badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center text-[9.5px] font-semibold text-white bg-[#e7212b] px-2.5 py-1 rounded-full tracking-[1.5px] uppercase shadow-md">
                {badge}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Step Number & Icon Row */}
        <div className="flex items-center justify-between mb-2">
          {item.Icon ? (
            <div className="w-8 h-8 rounded-lg bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center text-[#e7212b]">
              <item.Icon className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
            </div>
          ) : (
            <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
              {badge || `SERVICE ${String(index + 1).padStart(2, "0")}`}
            </span>
          )}
          <span className="text-[10px] font-bold text-[#e7212b] tracking-[2px]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-bold text-[#0B0D26] group-hover:text-[#e7212b] transition-colors duration-200 leading-snug mb-2">
          {item.title}
        </h3>

        {/* Body Description */}
        <p
          className="text-gray-500 text-[12.5px] leading-[1.65] line-clamp-3 mb-4 flex-1"
          dangerouslySetInnerHTML={{ __html: item.body }}
        />

        {/* Read More Link Bar */}
        {isLink && (
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#f0f0f0]">
            <span className="inline-flex items-center gap-1.5 text-[#e7212b] text-[12px] font-semibold group-hover:gap-2.5 transition-all duration-200">
              Read More <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="w-4 h-px bg-[#0891B2]/20 group-hover:w-10 transition-all duration-300" />
          </div>
        )}
      </div>

      {/* Bottom Red Hover Bar */}
      <div className="h-[3px] bg-[#e7212b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );

  return (
    <div
      ref={ref}
      className={`h-full ${className}`}
    >
      {isLink ? (
        <Link
          href={item.href!}
          className="group relative rounded-2xl overflow-hidden flex flex-col hover:border-white/95 hover:shadow-xl transition-all duration-300 h-full"
          style={{
            background: "var(--g-card-bg, rgba(255, 255, 255, 0.38))",
            backdropFilter: isMobile ? "none" : "blur(20px)",
            WebkitBackdropFilter: isMobile ? "none" : "blur(20px)",
            border: "1px solid var(--g-border, rgba(255, 255, 255, 0.60))",
            boxShadow: "var(--g-card-shadow, 0 8px 24px rgba(0, 0, 0, 0.06)), inset 0 1px 1px rgba(255, 255, 255, 0.85)",
          }}
        >
          {cardContent}
        </Link>
      ) : (
        <div
          className="group relative rounded-2xl overflow-hidden flex flex-col hover:border-white/95 hover:shadow-xl transition-all duration-300 h-full"
          style={{
            background: "var(--g-card-bg, rgba(255, 255, 255, 0.38))",
            backdropFilter: isMobile ? "none" : "blur(20px)",
            WebkitBackdropFilter: isMobile ? "none" : "blur(20px)",
            border: "1px solid var(--g-border, rgba(255, 255, 255, 0.60))",
            boxShadow: "var(--g-card-shadow, 0 8px 24px rgba(0, 0, 0, 0.06)), inset 0 1px 1px rgba(255, 255, 255, 0.85)",
          }}
        >
          {cardContent}
        </div>
      )}
    </div>
  );
}

export default SubServiceCard;
