"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, GripHorizontal, Shield, Paintbrush, Ruler } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const CARDS = [
  { Icon: GripHorizontal, title: "Steel Handrails", body: "Heavy-duty steel handrails and guardrails fabricated to specification — ideal for industrial platforms, stairways, and walkways." },
  { Icon: Shield, title: "Aluminum Handrails", body: "Lightweight, corrosion-resistant aluminum handrail systems for commercial and residential applications — durable and low maintenance." },
  { Icon: Paintbrush, title: "Custom Fabrication", body: "Bespoke handrail designs tailored to architectural requirements — curved, angled, and specialty configurations available." },
  { Icon: Ruler, title: "Safety Compliance", body: "All handrails fabricated and installed in compliance with relevant safety regulations and building codes for maximum protection." },
];

export default function HandRailContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp delay={0} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">Fabrication Services</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Hand Rail Fabrication Capabilities
          </h2>
        </FadeUp>
        <FadeUp delay={0.06} className="mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#e7212b]" /><span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Custom Handrail Fabrication for Safety and Accessibility</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Handrails and guardrails are critical safety elements for industrial platforms, stairways, walkways, mezzanines, and loading areas. TTS fabricates handrail systems in mild steel, stainless steel, and aluminium — designed to meet the structural loading requirements and safety regulations applicable to your facility and jurisdiction.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Our fabrication workshop produces standard straight sections, curved configurations, and bespoke architectural designs with a range of finish options including hot-dip galvanising, powder coating, and industrial paint systems. All handrails are manufactured to relevant safety standards including OSHA 1910.23, BS 6180, and local building codes — with installation services available for complete turnkey delivery across Kuwait and the GCC.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">From initial site survey and design consultation through fabrication, surface treatment, and installation, TTS manages the complete handrail project. Our teams work closely with structural engineers, architects, and main contractors to ensure handrail systems integrate seamlessly with the overall building design while meeting all safety and accessibility requirements.</p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CARDS.map((card, i) => (
            <FadeUp key={card.title} delay={0.08 * i}>
              <div className="group rounded-2xl border border-[#e8eaf0] bg-white p-6 hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center mb-4 group-hover:bg-[#e7212b]/15 transition-all duration-300">
                  <card.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                </div>
                <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-[15px] font-bold text-[#0B0D26] mb-2">{card.title}</h3>
                <p className="text-gray-500 text-[13px] leading-[1.7]">{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.1}>
          <div className="rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white/40 text-[10px] tracking-[2px] uppercase mb-2">Safety First</p>
              <p className="text-white font-semibold text-lg">Quality Handrail Solutions</p>
              <p className="text-white/45 text-sm mt-1">Steel · Aluminum · Custom Design — Kuwait &amp; Dubai</p>
            </div>
            <Link href="/contacts/" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
