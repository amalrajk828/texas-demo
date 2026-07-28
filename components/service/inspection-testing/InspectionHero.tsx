"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";

export default function InspectionHero() {
  return (
    <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-20 lg:pb-28">
      {/* Hairline top and bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-8 text-[12px] text-white/30"
        >
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services/" className="hover:text-white/60 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white/60">Inspection &amp; Testing</span>
        </motion.div>

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 mb-5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">
              Inspection &amp; Testing
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6"
          >
            Inspection &amp;{" "}
            <em className="not-italic text-[#e7212b]">Testing</em>
          </motion.h1>

          {/* Body paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <p className="text-white/60 text-base sm:text-[16px] leading-relaxed max-w-3xl">
              Texas Technical Services Co. (TTS) is a highly diversified independent service provider in the industry mainly as a Third Party Inspection &amp; Testing Company. Since it was founded, TTS has participated in supporting our clients in ensuring quality and safety of their products and our inspectors are committed to providing objective, independent assessments of product compliance and conformity, contributing to production and distribution processes that safeguard consumer health and providing businesses that demonstrate good practices with the tools they need to promote their companies and products, thereby building long-lasting trust-based relationships with their clients.
            </p>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-3xl">
              TTS led by a strong management, technical expertise, engineers and well trained technicians are on a mission to deliver on-time top quality client focused service. We know that a successful company is the result of intelligent planning, capable leadership and active participation by all company members. TTS in that matter respects the talents and experiences of its employees and give the best training possible to keep them in touch with latest technologies.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
