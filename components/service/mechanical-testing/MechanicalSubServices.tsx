"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MoveHorizontal, Shield, Zap, Rotate3D, Scissors, Microscope } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const TESTS = [
  {
    Icon: MoveHorizontal,
    title: "Tensile Test",
    body: "One of the most fundamental mechanical tests — determines tensile strength, yield strength, and ductility of metals, plastics, ceramics, and composites by measuring the force required to stretch a specimen until it breaks.",
    imageSrc: "/images/services/tensile-test2.jpg",
    href: "/service/tensile-test/",
  },
  {
    Icon: Shield,
    title: "Hardness Test",
    body: "Measures a material's resistance to permanent deformation by penetration of a harder indenter under a specified load. Widely used for metals, plastics, and ceramics to determine surface hardness and material quality.",
    imageSrc: "/images/services/Hardness-Test.jpg",
    href: "/service/hardness-test/",
  },
  {
    Icon: Zap,
    title: "Impact Test",
    body: "Measures a material's resistance to sudden shock loading that causes immediate deformation, fracture, or rupture. Critical for construction, automotive, and aerospace applications where impact resistance is paramount.",
    imageSrc: "/images/services/charpy_impact_test.jpg",
    href: "/service/impact-test/",
  },
  {
    Icon: Rotate3D,
    title: "Bend Test",
    body: "Assesses a material's ability to withstand bending forces without breaking. A qualitative test evaluating both ductility and soundness — essential for structural applications in construction, aerospace, and engineering.",
    imageSrc: "/images/services/Three_point_flexural_test-scaled.jpg",
    href: "/service/bend-test/",
  },
  {
    Icon: Scissors,
    title: "Fracture Test",
    body: "Fracture toughness tests measure a material's ability to resist growth or propagation of a pre-existing flaw — whether a fatigue crack, void, or any inconsistency present in the test material.",
    imageSrc: "/images/services/fracture-testing.jpg",
    href: "/service/fracture-test/",
  },
  {
    Icon: Microscope,
    title: "Macro and Micro Test",
    body: "Two categories of experiments conducted to study mechanical properties at different length scales — providing insights into material behaviour under various loading conditions for characterisation, design optimisation, and quality control.",
    imageSrc: "/images/services/Macro-and-Micro-Test.jpg",
    href: "/service/macro-and-micro-test/",
  },
];

export default function MechanicalSubServices() {
  return (
    <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp delay={0} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">Mechanical Testing</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">Our Mechanical Testing Services</h2>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15">
              Get More Information <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTS.map((item, i) => (
            <FadeUp key={item.title} delay={0.06 + i * 0.08}>
              <motion.div whileHover={{ y: -4, transition: { duration: 0.22 } }}>
                <Link href={item.href} className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300 h-full">
                  <div className="relative aspect-[16/9] bg-[#0B0D26] overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold text-white/60 bg-[#0B0D26]/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">Mechanical Testing</span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
                        <item.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                      </div>
                      <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                    <h3 className="text-[17px] font-bold text-[#0B0D26] leading-snug mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-[13.5px] leading-[1.75] flex-1">{item.body}</p>
                    <div className="mt-5 pt-4 border-t border-[#e8eaf0] flex items-center gap-1.5 text-[#e7212b] text-[13px] font-semibold">
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
