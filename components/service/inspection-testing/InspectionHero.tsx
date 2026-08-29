"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import VantaTopology from "@/components/service/common/VantaTopology";

export default function InspectionHero() {
  const vantaRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={vantaRef} className="relative bg-gradient-to-br from-black via-[#1a0505] to-black blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-16 lg:pb-20 min-h-[400px]">
      <VantaTopology targetRef={vantaRef} />
      {/* Hairline top and bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 mb-8 text-[12px] text-white/30"
        >
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services/" className="hover:text-white/60 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white/60">Inspection &amp; Testing</span>
        </div>

        <div className="max-w-full">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-2.5 mb-5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
              Inspection &amp; Testing
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6"
          >
            Inspection &amp;{" "}
            <em className="not-italic text-white">Testing</em>
          </h1>

          {/* Body paragraphs */}
          <div
            className="space-y-4 max-w-none"
          >
            <p className="text-white/70 text-base sm:text-[16px] leading-relaxed">
              Texas Technical Services Co. (TTS) is a highly diversified independent service provider in the industry mainly as a Third Party Inspection &amp; Testing Company. Since it was founded, TTS has participated in supporting our clients in ensuring quality and safety of their products and our inspectors are committed to providing objective, independent assessments of product compliance and conformity, contributing to production and distribution processes that safeguard consumer health and providing businesses that demonstrate good practices with the tools they need to promote their companies and products, thereby building long-lasting trust-based relationships with their clients.
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed">
              TTS led by a strong management, technical expertise, engineers and well trained technicians are on a mission to deliver on-time top quality client focused service. We know that a successful company is the result of intelligent planning, capable leadership and active participation by all company members. TTS in that matter respects the talents and experiences of its employees and give the best training possible to keep them in touch with latest technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
