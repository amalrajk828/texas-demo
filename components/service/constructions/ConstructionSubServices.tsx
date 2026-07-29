"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Wrench,
  Cpu,
  Cable,
  Hand,
  Building2,
  Ruler,
  Zap,
} from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

interface SubServiceItem {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
  imageSrc: string;
  href: string;
}

const SUB_SERVICES: SubServiceItem[] = [
  { Icon: Building2, title: "Supply and Installation of Suspended Access Equipment", body: "Supply and installation of telescopic roof machines, twin track roof machines, powered cradles, recess cradles, monorails, and davit systems.", imageSrc: "/images/services/WINDOW-CLEANING-FACADE-CLEANING-BMU-CRADLE-ROOF-MACHINE-13-1-scaled.jpg", href: "/service/supply-and-installation-of-suspended-access-equipments/" },
  { Icon: Zap, title: "Electrical & Instrumentation Works", body: "Electrical and instrumentation works encompassing installation, maintenance, and optimization of electrical systems and instrumentation equipment.", imageSrc: "/images/services/electrical-inst.png", href: "/service/electrical-instrumentation-works/" },
  { Icon: Cpu, title: "Electrical Services", body: "Complete electrical services for industrial facilities — from design and installation to maintenance and commissioning support.", imageSrc: "/images/services/electrical.jpg", href: "/service/constructions/" },
  { Icon: Cable, title: "High and Low Voltage Cable Steel Structure Supports", body: "Design, fabrication, and erection of high and low voltage cable support structures, pathways, and steel structural supports.", imageSrc: "/images/services/Structural-Steel-Work.webp", href: "/service/high-and-low-voltage-cable-steel-structure-supports/" },
  { Icon: Hand, title: "Hand Rail Fabrication", body: "Skilled creation of safety handrails and support structures — steel, aluminum, and durable materials compliant with safety regulations.", imageSrc: "/images/services/Handrail.jpeg", href: "/service/hand-rail-fabrication/" },
  { Icon: Ruler, title: "Structural Steel Erection", body: "Pre-fabricated steel component assembly creating skeletal frameworks for buildings, bridges, and large industrial structures.", imageSrc: "/images/services/Structural-Steel-Work.webp", href: "/service/structural-steel-erection/" },
  { Icon: Wrench, title: "Steel Fabrication", body: "Transforming raw steel into finished structures through cutting, bending, welding, and assembling — skids, pipework, and structural components.", imageSrc: "/images/services/Fabrication-Shop-Grinding.jpg", href: "/service/steel-fabrication/" },
];

import LightGradientBackground from "@/components/LightGradientBackground";
import SubServiceCard from "@/components/service/common/SubServiceCard";

export default function ConstructionSubServices() {
  return (
    <LightGradientBackground className="py-20 lg:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <FadeUp delay={0} className="mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">Constructions</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">Our Construction Services</h2>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15">
              Get More Information <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[22px]">
          {SUB_SERVICES.map((item, i) => (
            <SubServiceCard key={item.title} item={item} index={i} categoryTag="Constructions" />
          ))}
        </div>
      </div>
    </LightGradientBackground>
  );
}
