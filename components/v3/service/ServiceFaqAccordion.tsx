"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ServiceFaqItem } from "./types";

interface ServiceFaqAccordionProps {
  items: ServiceFaqItem[];
}

export default function ServiceFaqAccordion({ items }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-3.5 max-w-[880px] mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const buttonId = `faq-btn-${idx}`;

        return (
          <div
            key={idx}
            className={`rounded-[18px] transition-all duration-200 border ${
              isOpen
                ? "bg-[#DCDCD9] border-[#6b191b]/35 shadow-[0_12px_32px_-12px_rgba(107,25,27,0.12)]"
                : "bg-[#DCDCD9] hover:bg-[#d4d4d1] border-[#C8C8C5] shadow-[0_6px_20px_-8px_rgba(0,0,0,0.04)]"
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6b191b] rounded-[18px]"
              >
                <span className="font-heading text-[15px] sm:text-[16px] font-bold text-[#1a1a1a] pr-4 leading-snug">
                  {item.q}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen
                      ? "bg-[#6b191b] text-white rotate-180"
                      : "bg-[rgba(107,25,27,0.08)] text-[#6b191b]"
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-[14px] sm:text-[15px] leading-[1.75] text-[#595956] border-t border-black/[0.04]"
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
