"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

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
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const badge = categoryTag || item.categoryTag;
  const isLink = Boolean(item.href);

  const cardContent = (
    <>
      {/* Top sheen light reflection strip */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-80 pointer-events-none z-20" />

      {/* Image portion */}
      {item.imageSrc !== undefined && (
        <div className="relative h-[155px] w-full bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden shrink-0">
          {item.imageSrc ? (
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[64px] font-black text-white/10 select-none">
                {item.placeholderNumber || String(index + 1).padStart(2, "0")}
              </span>
            </div>
          )}
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
          {/* Category tag badge */}
          {badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[10px] font-semibold text-white/60 bg-[#000000] blueprint-grid blueprint-dot-grid/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">
                {badge}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content portion */}
      <div className="flex flex-col flex-1 p-[18px]">
        {/* Icon + Number row */}
        <div className="flex items-center justify-between mb-3">
          {item.Icon ? (
            <div className="w-[38px] h-[38px] rounded-full bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center group-hover:bg-[#e7212b]/20 group-hover:border-[#e7212b]/30 transition-all duration-300">
              <item.Icon className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
            </div>
          ) : (
            <div className="w-[38px] h-[38px]" />
          )}
          <span className="text-[9px] font-bold text-[#e7212b]/30 tracking-[2px]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Red accent line */}
        <div className="w-7 h-[2px] bg-[#e7212b] rounded-full mb-2.5 group-hover:w-11 transition-all duration-300" />

        {/* Title */}
        <h3 className="text-[16px] font-bold text-[#0B0D26] leading-snug mb-2">
          {item.title}
        </h3>

        {/* Body */}
        <p
          className="text-gray-500 text-[13px] leading-[1.65] flex-1 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: item.body }}
        />

        {/* Learn more link */}
        {isLink && (
          <div className="mt-3 pt-3 border-t border-[var(--g-border,rgba(0,0,0,0.06))] flex items-center gap-1 text-[#e7212b] text-[12.5px] font-semibold">
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.04 + (index % 3) * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
      className={`h-full ${className}`}
    >
      {isLink ? (
        <Link
          href={item.href!}
          className="group relative rounded-2xl overflow-hidden flex flex-col hover:border-white/95 hover:shadow-xl transition-all duration-300 h-full"
          style={{
            background: "var(--g-card-bg, rgba(255, 255, 255, 0.38))",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
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
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--g-border, rgba(255, 255, 255, 0.60))",
            boxShadow: "var(--g-card-shadow, 0 8px 24px rgba(0, 0, 0, 0.06)), inset 0 1px 1px rgba(255, 255, 255, 0.85)",
          }}
        >
          {cardContent}
        </div>
      )}
    </motion.div>
  );
}

export default SubServiceCard;
