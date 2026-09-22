"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

export type FaqItem = { q: string; a: string };

/** Single animated accordion item */
function FaqRow({ item, delay }: { item: FaqItem; delay: number }) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
          open
            ? "border-[#e7212b]/40 shadow-2xl"
            : "border-white/[0.08] hover:border-white/[0.18]"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: isMobile ? "none" : "blur(16px)",
          WebkitBackdropFilter: isMobile ? "none" : "blur(16px)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.40)",
        }}
      >
        {/* Trigger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
          aria-expanded={open}
        >
          <span className="text-[15px] font-semibold text-white pr-4 leading-snug">
            {item.q}
          </span>
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
              open
                ? "bg-[#e7212b] border-[#e7212b]"
                : "bg-[#e7212b]/10 border border-[#e7212b]/25"
            }`}
          >
            <ChevronRight
              className={`w-3.5 h-3.5 transition-colors duration-200 ${
                open ? "text-white" : "text-[#e7212b]"
              }`}
            />
          </motion.span>
        </button>

        {/* Animated body */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                <p className="text-gray-300 text-[14px] leading-[1.8]">{item.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ServicePageFaqSection({
  faqItems,
  highlightWord,
}: {
  faqItems: FaqItem[];
  highlightWord: ReactNode;
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-[#000000] blueprint-grid blueprint-dot-grid">
      {/* Layer 3: Soft colored glow blob 1 (red) */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none opacity-20 z-0"
        style={{ background: "radial-gradient(circle, rgba(229,57,53,0.12) 0%, transparent 70%)" }}
      />
      {/* Layer 3: Soft colored glow blob 2 (purple/blue) */}
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] pointer-events-none opacity-25 z-0"
        style={{ background: "radial-gradient(circle, rgba(95,90,246,0.1) 0%, transparent 70%)" }}
      />
      {/* Hairline borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header — scroll-reveal */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-white leading-[1.15] mb-12">
            Questions About <em className="not-italic text-current">{highlightWord}</em>
          </h2>
        </motion.div>

        {/* FAQ rows — each self-contained with its own open/close state */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <FaqRow key={item.q} item={item} delay={0.06 + i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
