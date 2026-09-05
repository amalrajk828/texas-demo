"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ThumbnailCardData {
  title: string;
  category?: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
  number?: string;
}

export function NeumorphicThumbnailCard({ card }: { card: ThumbnailCardData }) {
  return (
    <div className="group relative bg-white border border-[#e8eaf0] hover:border-[#e7212b]/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full text-left">
      <Link href={card.href} className="absolute inset-0 z-10" aria-label={card.title} />

      {/* Top Image Header */}
      <div className="relative h-44 overflow-hidden bg-black shrink-0">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt || card.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {card.category && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center text-[9.5px] font-semibold text-white bg-[#e7212b] px-2.5 py-1 rounded-full tracking-[1.5px] uppercase shadow-md">
              {card.category}
            </span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-1">
        {card.number && (
          <p className="text-[10px] text-gray-400 mb-1.5 tracking-wide font-semibold uppercase">
            Step {card.number}
          </p>
        )}
        <h3 className="text-[15px] font-bold text-[#0B0D26] group-hover:text-[#e7212b] transition-colors duration-200 leading-snug mb-2">
          {card.title}
        </h3>
        <p className="text-gray-500 text-[12.5px] leading-relaxed line-clamp-3 mb-4 flex-1">
          {card.description}
        </p>

        {/* Read More Link Bar */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#f0f0f0]">
          <span className="inline-flex items-center gap-1.5 text-[#e7212b] text-[12px] font-semibold group-hover:gap-2.5 transition-all duration-200">
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <span className="w-4 h-px bg-[#0891B2]/20 group-hover:w-10 transition-all duration-300" />
        </div>
      </div>

      {/* Bottom Red Hover Bar */}
      <div className="h-[3px] bg-[#e7212b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}

export default NeumorphicThumbnailCard;
