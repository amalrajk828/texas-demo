"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Eye, Droplets, Magnet, Radiation, Waves } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const NDT_METHODS = [
  {
    Icon: Eye,
    title: "Visual Inspection (VI)",
    body: "Visual inspection is a non-destructive testing method widely used to examine the surface and external characteristics of a component or material — identifying cracks, corrosion, surface irregularities, and dimensional discrepancies. Often the first step in NDT.",
    href: "/service/visual-inspection-vi/",
  },
  {
    Icon: Droplets,
    title: "Liquid / Dye Penetrant (PT)",
    body: "Liquid Penetrant Testing uses capillary forces to find surface cracks or pores and make them visible. Particularly effective for non-porous materials — detecting surface-breaking flaws such as cracks, laps, and porosity in metals, ceramics, and plastics.",
    href: "/service/liquid-penetrant-dye-penetrant-examination-pt/",
  },
  {
    Icon: Magnet,
    title: "Magnetic Particle Inspection (MT)",
    body: "Magnetic Particle Testing detects surface and near-surface defects in ferromagnetic materials such as iron, steel, nickel, and cobalt. Fast and easy to conduct — it does not require the degree of surface preparation required by other NDT methods.",
    href: "/service/magnetic-particle-inspection-mt/",
  },
  {
    Icon: Radiation,
    title: "Radiographic Testing (RT)",
    body: "Radiographic Testing uses X-rays or gamma rays to examine the internal structure of materials and detect flaws not visible on the surface. Particularly useful for inspecting thick sections, welds, and complex structures.",
    href: "/service/radiographic-testing-rt/",
  },
  {
    Icon: Waves,
    title: "Ultrasonic Testing (UT)",
    body: "Ultrasonic Testing uses high-frequency sound waves to inspect the internal structure of materials and detect defects and flaws. Particularly effective for inspecting welds, forgings, castings, and manufactured components in metals and non-metallic materials.",
    href: "/service/ultrasonic-testing-ut/",
  },
];

import LightGradientBackground from "@/components/LightGradientBackground";
import SubServiceCard from "@/components/service/common/SubServiceCard";

export default function NDTSubServices() {
  return (
    <LightGradientBackground className="py-20 lg:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <FadeUp delay={0} className="mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">NDT Services</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">Our NDT Inspection Methods</h2>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15">
              Get More Information <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[22px]">
          {NDT_METHODS.map((item, i) => (
            <SubServiceCard key={item.title} item={item} index={i} categoryTag="NDT Services" />
          ))}
        </div>
      </div>
    </LightGradientBackground>
  );
}
