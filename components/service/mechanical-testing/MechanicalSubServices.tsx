"use client";
import Link from "next/link";
import { ArrowRight, Ruler, Shield, Zap, GitBranch, Cpu, Microscope } from "lucide-react";
import LightGradientBackground from "@/components/LightGradientBackground";
import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";

const TESTS = [
  {
    Icon: Ruler,
    title: "Tensile Test",
    body: "One of the most fundamental mechanical tests — determines tensile strength, yield strength, and ductility of metals, plastics, ceramics, and composites by measuring the force required to stretch a specimen until it breaks.",
    href: "/service/tensile-test/",
  },
  {
    Icon: Shield,
    title: "Hardness Test",
    body: "Measures a material's resistance to permanent deformation by penetration of a harder indenter under a specified load. Widely used for metals, plastics, and ceramics to determine surface hardness and material quality.",
    href: "/service/hardness-test/",
  },
  {
    Icon: Zap,
    title: "Impact Test",
    body: "Measures a material's resistance to sudden shock loading that causes immediate deformation, fracture, or rupture. Critical for construction, automotive, and aerospace applications where impact resistance is paramount.",
    href: "/service/impact-test/",
  },
  {
    Icon: GitBranch,
    title: "Bend Test",
    body: "Assesses a material's ability to withstand bending forces without breaking. A qualitative test evaluating both ductility and soundness — essential for structural applications in construction, aerospace, and engineering.",
    href: "/service/bend-test/",
  },
  {
    Icon: Cpu,
    title: "Fracture Test",
    body: "Fracture toughness tests measure a material's ability to resist growth or propagation of a pre-existing flaw — whether a fatigue crack, void, or any inconsistency present in the test material.",
    href: "/service/fracture-test/",
  },
  {
    Icon: Microscope,
    title: "Macro and Micro Test",
    body: "Two categories of experiments conducted to study mechanical properties at different length scales — providing insights into material behaviour under various loading conditions for characterisation, design optimisation, and quality control.",
    href: "/service/macro-and-micro-test/",
  },
];

export default function MechanicalSubServices() {
  return (
    <LightGradientBackground className="py-20 lg:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="fade-up mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Mechanical Testing</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">Our Mechanical Testing Services</h2>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15">
              Get More Information <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TESTS.map((item, i) => (
            <div key={item.title || i} className="fade-up">
              <Link href={item.href} className="block h-full">
                <NeumorphicDeliverCard item={item} index={i} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </LightGradientBackground>
  );
}
