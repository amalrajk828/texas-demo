"use client";
import Image from "next/image";
import Link from "next/link";
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
  { Icon: Wind, title: "Air Permeability Test", body: "Measures air infiltration through windows, doors, and curtain walls per ASTM E783 — locates air leakage paths.", imageSrc: "/images/services/AIR-PERMEABILITY-TEST.jpg", href: "/service/air-permeability-test/" },
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

function SubServiceCard({ item, index }: { item: SubServiceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="h-full">
      <Link href={item.href} className="group relative rounded-2xl border border-white/40 bg-white/25 backdrop-blur-xl overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-2xl hover:shadow-[#e7212b]/8 transition-all duration-300 h-full">
        <div className="relative aspect-[16/9] bg-[#0B0D26] overflow-hidden">
          {item.imageSrc ? (
            <Image src={item.imageSrc} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[72px] font-black text-white/10">01</span>
            </div>
          )}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-semibold text-white/60 bg-[#0B0D26]/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">{item.title.includes("NDT") || item.title.includes("Testing") ? "Inspection & Testing" : "Specialized Services"}</span>
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

export default function InspectionSubServices({ slices: inSlices }: { slices?: [number, number][] }) {
  return (
    <section className="relative bg-[#0B0D26] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Inspection &amp; Testing</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-white leading-[1.15]">Our Inspection &amp; Testing Services</h2>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15">
              Get More Information <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(inSlices ? inSlices.flatMap(([s, e]) => SUB_SERVICES.slice(s, e)) : SUB_SERVICES).map((item, i) => (
            <SubServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
