"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-xl border transition-colors duration-200 ${
              isOpen
                ? "border-[#e7212b]/25 bg-white shadow-sm"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span
                className={`text-[16px] font-semibold leading-snug transition-colors duration-200 ${
                  isOpen ? "text-[#e7212b]" : "text-[#0B0D26]"
                }`}
              >
                {item.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 text-[#e7212b]"
                    : "text-gray-400"
                }`}
              />
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "500px" : "0px" }}
            >
              <div className="px-5 pb-5 text-[15px] text-gray-600 leading-relaxed">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
