"use client";

import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ServiceCardData {
  title: string;
  category: string;
  description: string;
  href: string;
}

export function NeumorphicServiceCard({ card }: { card: ServiceCardData }) {
  return (
    <Link
      href={card.href}
      className="neumorphic-press-card p-5 sm:p-6 flex flex-col justify-between h-full group block text-left"
    >
      <div>
        <p className="text-[#0891B2] text-[10.5px] font-bold uppercase tracking-wider mb-2">
          {card.category}
        </p>
        <h3 className="text-[#1f2937] text-[16px] font-bold leading-tight mb-2.5 group-hover:text-[#e7212b] transition-colors duration-200">
          {card.title}
        </h3>
        <p className="text-[#4b5563] text-[12.5px] sm:text-[13px] leading-[1.6] mb-5 line-clamp-3">
          {card.description}
        </p>
      </div>

      <div>
        <div
          aria-hidden="true"
          className="neumorphic-press-btn w-9.5 h-9.5 sm:w-10 sm:h-10 flex items-center justify-center text-[#e7212b] rounded-xl shrink-0"
        >
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
export default NeumorphicServiceCard;
