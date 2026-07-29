"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Wrench,
  Droplets,
  Wind,
  Anchor,
  Building2,
  Thermometer,
  ShieldCheck,
  Radio,
  Eye,
  Magnet,
  Waves,
  Zap,
  ScanLine,
  Search,
  Hammer,
  FlaskConical,
  Swords,
  Gauge,
  StretchHorizontal,
  TestTube,
  Scan,
  Monitor,
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
  { Icon: Wrench, title: "Lifting Equipment Inspection", body: "Systematic inspection of cranes, hoists, forklifts, and elevators — certified inspectors identify defects, wear, and safety standard deviations.", imageSrc: "/images/services/lifting_equp.png", href: "/service/lifting-equipment-inspection/" },
  { Icon: Droplets, title: "Hose Test", body: "Quality assurance field water check for installed curtain walls, exterior windows and doors — identifies leakage vulnerabilities.", imageSrc: "/images/services/HOSE-TEST.jpg", href: "/service/hose-test/" },
  { Icon: Wind, title: "Air Permeability Test", body: "Measures air infiltration through windows, doors, and curtain walls per ASTM E783 — locates air leakage paths.", imageSrc: "/images/services/AIR-PERMEABILITY-TEST-800x664.jpg", href: "/service/air-permeability-test/" },
  { Icon: Droplets, title: "Water Penetration Test", body: "Determines whether leakage is present through windows, doors, and curtain wall systems from exterior to interior.", imageSrc: "/images/services/WATER-PENETRATION-TEST.jpg", href: "/service/water-penetration-test/" },
  { Icon: Search, title: "Exterior Windows, Doors & Curtain Wall Testing", body: "Performance testing of exterior windows, doors, and curtain walls for water penetration, air permeability, and structural soundness.", imageSrc: "/images/services/water-penetration.png", href: "/service/water-penetration-test/" },
  { Icon: Anchor, title: "Pullout Test", body: "Determines strength and integrity of the bond between a bolt and embedded material — concrete or masonry structural anchorage testing.", imageSrc: "/images/services/ANCHORS-PULL-TESTING.jpg", href: "/service/pullout-test/" },
  { Icon: Wrench, title: "Torque Tightening & Bolt Tensioning", body: "Assesses tightness and preload of fasteners using calibrated torque sensors — proper installation and integrity of bolted connections.", imageSrc: "/images/services/torque.png", href: "/service/torque-tightening-bolt-tensioning/" },
  { Icon: Thermometer, title: "Heat Treatment Services", body: "Low, mid, and high range temperature heating using electrical and fuel-fired methods — specialized on-site heat treatment for oil and gas.", imageSrc: "/images/services/Heat-Treatment-Services.jpeg", href: "/service/heat-treatment-services/" },
  { Icon: ShieldCheck, title: "Metallurgical Services (PMI)", body: "Positive Material Identification (PMI) — fast, non-destructive verification of chemical composition of metals and alloys.", imageSrc: "/images/services/Metallurgical-Services.jpg", href: "/service/metallurgical-services/" },
  { Icon: ShieldCheck, title: "Corrosion Control Services", body: "Techniques and strategies to prevent, mitigate, and manage corrosion in metals across oil & gas, construction, and marine industries.", imageSrc: "/images/services/maxresdefault.jpg", href: "/service/corrosion-control-services-2/" },
  { Icon: Radio, title: "Gamma Ray Pipe Crawler", body: "Battery-powered remote-controlled radiographic machine producing SWSI radiographs of circumferential welds in pipelines.", imageSrc: "/images/services/jme-her-pipeline-crawler-buggy-controller.webp", href: "/service/gamma-ray-pipe-crawler-inspection-systems/" },
  { Icon: Monitor, title: "Videoscope", body: "Specialized visual inspection for areas accessible only through bends or turns — excellent image quality and recording capability.", imageSrc: "/images/services/Videoscope.webp", href: "/service/videoscope/" },
  { Icon: Magnet, title: "Magnetic Flux Leakage (MFL)", body: "Detects corrosion and pitting in steel pipelines and storage tanks by measuring magnetic field leakage at areas of metal loss.", imageSrc: "/images/services/Magnetic-Flux-Leakage.jpg", href: "/service/magnetic-flux-leakage/" },
  { Icon: Waves, title: "Time of Flight Diffraction (TOFD)", body: "Uses ultrasonic pulse flight time to determine reflector position and size — automatically calculating crack tip depth by trigonometry.", imageSrc: "/images/services/time-of-flight-diffraction-tofd-ultrasonic-testing.jpg", href: "/service/time-of-flight-diffraction/" },
  { Icon: Zap, title: "Eddy Current Testing", body: "Electronic probes find flaws in tubes and material surfaces using induced eddy currents running opposite to the probe-introduced current.", imageSrc: "/images/services/Eddy-Current-Testing.jpg", href: "/service/eddy-current-testing/" },
  { Icon: ScanLine, title: "Phased Array Ultrasonic Testing", body: "Detects cracks, voids, and pits caused by corrosion — high-resolution imaging far beyond conventional UT techniques.", imageSrc: "/images/services/phased-array.jpg", href: "/service/phased-array-ultrasonic-testing/" },
  { Icon: Search, title: "Macro and Micro Test", body: "Macro and micro mechanical tests studying material properties at different length scales — characterization, design optimization, and quality control.", imageSrc: "/images/services/Macro-and-Micro-Test.jpg", href: "/service/macro-and-micro-test/" },
  { Icon: Swords, title: "Fracture Test", body: "Fracture toughness tests measure a material's ability to resist growth of a pre-existing flaw — fatigue cracks, voids, or inconsistencies.", imageSrc: "/images/services/fracture-testing.jpg", href: "/service/fracture-test/" },
  { Icon: TestTube, title: "Bend Test", body: "Assesses material ability to withstand bending forces — evaluating ductility and soundness for structural applications.", imageSrc: "/images/services/Three_point_flexural_test-scaled.jpg", href: "/service/bend-test/" },
  { Icon: Swords, title: "Impact Test", body: "Measures resistance to sudden shock loading — Charpy and Izod impact testing critical for construction, automotive, and aerospace.", imageSrc: "/images/services/charpy_impact_test.jpg", href: "/service/impact-test/" },
  { Icon: Gauge, title: "Hardness Test", body: "Measures material resistance to permanent deformation — Rockwell, Brinell, and Vickers hardness testing to international standards.", imageSrc: "/images/services/Hardness-Test.jpg", href: "/service/hardness-test/" },
  { Icon: StretchHorizontal, title: "Tensile Test", body: "Determines tensile strength, yield strength, and ductility of metals, plastics, ceramics, and composites under standardized loading conditions.", imageSrc: "/images/services/tensile-test2.jpg", href: "/service/tensile-test/" },
  { Icon: Waves, title: "Ultrasonic Testing (UT)", body: "High-frequency sound waves to inspect internal structure — defect detection, thickness measurement, and weld quality verification.", imageSrc: "/images/services/Non-Destructive-Testing-NDT.jpg.webp", href: "/service/ultrasonic-testing-ut/" },
  { Icon: Scan, title: "Radiographic Testing (RT)", body: "X-ray and gamma ray examination of internal material structure — voids, porosity, cracks, and weld discontinuities.", imageSrc: "/images/services/rgt.webp", href: "/service/radiographic-testing-rt/" },
  { Icon: Magnet, title: "Magnetic Particle Inspection (MT)", body: "Detects surface and near-surface defects in ferromagnetic materials — fast and effective with minimal surface preparation.", imageSrc: "/images/services/Magnetic-Particle-Inspection.jpg", href: "/service/magnetic-particle-inspection-mt/" },
  { Icon: Droplets, title: "Liquid / Dye Penetrant Examination (PT)", body: "Detects surface defects using capillary action — effective on metals, ceramics, plastics, and non-metallic materials.", imageSrc: "/images/services/PT.jpg", href: "/service/liquid-penetrant-dye-penetrant-examination-pt/" },
  { Icon: Eye, title: "Visual Inspection (VI)", body: "Systematic visual examination of surfaces, welds, and components — the first step in any NDT program.", imageSrc: "/images/services/ndt.jpg", href: "/service/visual-inspection-vi/" },
  { Icon: ScanLine, title: "Non Destructive Testing (NDT)", body: "Visual Inspection, Liquid/Dye Penetrant, Magnetic Particle, Radiographic Testing, and Ultrasonic Testing services.", imageSrc: "", href: "/service/non-destructive-testing-ndt/" },
  { Icon: Hammer, title: "Mechanical Testing", body: "Tensile, hardness, impact, bend, fracture, and macro/micro testing — full material conformity to international standards.", imageSrc: "/images/services/mechanical-testing.jpg", href: "/service/mechanical-testing/" },
];

import LightGradientBackground from "@/components/LightGradientBackground";
import SubServiceCard from "@/components/service/common/SubServiceCard";

export default function InspectionSubServices({ slices: inSlices }: { slices?: [number, number][] }) {
  return (
    <LightGradientBackground className="py-20 lg:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <FadeUp delay={0} className="mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">Inspection &amp; Testing</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">Our Inspection &amp; Testing Services</h2>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15">
              Get More Information <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[22px]">
          {(inSlices ? inSlices.flatMap(([s, e]) => SUB_SERVICES.slice(s, e)) : SUB_SERVICES).map((item, i) => (
            <SubServiceCard
              key={item.title}
              item={item}
              index={i}
              categoryTag={item.title.includes("NDT") || item.title.includes("Testing") ? "Inspection & Testing" : "Specialized Services"}
            />
          ))}
        </div>
      </div>
    </LightGradientBackground>
  );
}
