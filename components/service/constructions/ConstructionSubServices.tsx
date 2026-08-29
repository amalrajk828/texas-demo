"use client";
import Image from "next/image";
import Link from "next/link";
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

function SubServiceCard({ item, index }: { item: SubServiceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="h-full">
      <Link href={item.href} className="group relative rounded-2xl border border-white/40 bg-white/25 backdrop-blur-xl overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-2xl hover:shadow-[#e7212b]/8 transition-all duration-300 h-full">
        <div className="relative aspect-[16/9] bg-[#0B0D26] overflow-hidden">
          <Image src={item.imageSrc} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-semibold text-white/60 bg-[#0B0D26]/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">Constructions</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
              <item.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
          <h3 className="text-[16px] font-bold text-white leading-snug mb-3">{item.title}</h3>
          <p className="text-white/80 text-[13.5px] leading-[1.75] flex-1">{item.body}</p>
          <div className="mt-5 pt-4 border-t border-white/40 flex items-center gap-1.5 text-[#e7212b] text-[13px] font-semibold">
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ConstructionSubServices() {
  return (
    <section className="relative bg-[#0B0D26] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Constructions</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-white leading-[1.15]">Our Construction Services</h2>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15">
              Get More Information <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUB_SERVICES.map((item, i) => (
            <SubServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
