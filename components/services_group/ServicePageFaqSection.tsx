"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

export type FaqItem = { q: string; a: string };

export default function ServicePageFaqSection({
  faqItems,
  highlightWord,
}: {
  faqItems: FaqItem[];
  highlightWord: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f4f5f8] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-5 h-px bg-[#e7212b]" />
          <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
            FAQ
          </span>
        </div>
        <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
          Questions About <em className="not-italic text-[#e7212b]">{highlightWord}</em>
        </h2>
        <div ref={ref} className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <details className="group bg-white border border-[#e8eaf0] rounded-2xl overflow-hidden transition-all duration-200 open:border-[#e7212b]/25 open:shadow-lg">
                <summary className="flex items-center justify-between p-5 lg:p-6 cursor-pointer list-none">
                  <span className="text-[15px] font-semibold text-[#0B0D26] pr-4 leading-snug">
                    {item.q}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-open:bg-[#e7212b] group-open:border-[#e7212b] transition-all duration-200">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e7212b] group-open:text-white group-open:rotate-90 transition-all duration-200" />
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                  <p className="text-gray-500 text-[14px] leading-[1.8]">{item.a}</p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
