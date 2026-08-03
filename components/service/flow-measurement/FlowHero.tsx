"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gauge } from "lucide-react";

export default function FlowHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden bg-[#000000] blueprint-grid blueprint-dot-grid">

      {/* Layer 4: Hairline top and bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-8 text-[12px] text-white/40"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-white/20">/</span>
          <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
          <span className="text-white/20">/</span>
          <span className="text-white/70 font-medium">Flow Measurement</span>
        </motion.div>

        <div className="max-w-full">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 mb-5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
              <Gauge className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">
              Flow Measurement Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6"
          >
            Flow Measurement &amp;{" "}
            <br className="hidden sm:block" />
            <em className="not-italic text-[#e7212b]">Control System</em>{" "}
            Solutions
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 text-base sm:text-[17px] leading-relaxed max-w-none"
          >
            We provide metering control system upgrades, maintenance, and validation services for custody metering systems. Our experienced team ensures that your metering systems operate efficiently and accurately, meeting industry standards and compliance requirements. Additionally, we offer specialized consultancy services to optimize your custody metering processes and enhance productivity.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
