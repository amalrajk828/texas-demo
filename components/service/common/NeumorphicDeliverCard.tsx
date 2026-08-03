"use client";
import { LucideIcon } from "lucide-react";

export interface DeliverCardItem {
  title: string;
  body: string;
  Icon?: LucideIcon;
}

export function NeumorphicDeliverCard({
  item,
  index,
}: {
  item: DeliverCardItem;
  index: number;
}) {
  return (
    <div className="neumorphic-press-card p-5 sm:p-6 flex flex-col justify-between h-full group block text-left">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          {/* Neumorphic Icon Badge */}
          {item.Icon ? (
            <div className="neumorphic-press-btn w-9.5 h-9.5 sm:w-10 sm:h-10 flex items-center justify-center text-[#e7212b] rounded-xl shrink-0">
              <item.Icon className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
            </div>
          ) : (
            <div className="w-4 h-4" />
          )}
          {/* Step Number */}
          <span className="text-[11px] font-bold text-[#e7212b] tracking-[2.5px]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Red accent line */}
        <div className="w-7 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-10 transition-all duration-300" />

        {/* Title */}
        <h3 className="text-[#1f2937] text-[15px] sm:text-[15.5px] font-bold leading-tight mb-2.5 group-hover:text-[#e7212b] transition-colors duration-200">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-[#4b5563] text-[12.5px] sm:text-[13px] leading-[1.6]">
          {item.body}
        </p>
      </div>
    </div>
  );
}

export default NeumorphicDeliverCard;
