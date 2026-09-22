"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useMemo } from "react";
import { flushSync } from "react-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ServiceItem {
  title: string;
  category: string;
  image: string;
  href: string;
  body: string;
  placeholderNumber?: string;
}

const ALL_SERVICES: ServiceItem[] = [
  // Page 1 Items
  { title: "Metering Control System Integration", category: "Flow Measurement Solutions", image: "/images/services/metering-control-integration.png", href: "/service/metering-control-system-integration/", body: "Custody Transfer Flow Metering Control System Development and Integration with unwavering commitment to precision, accuracy, and compliance." },
  { title: "Upgrade of Metering Control System", category: "Flow Measurement Solutions", image: "/images/services/metering-upgrade.png", href: "/service/upgrade-of-metering-control-system/", body: "Expert Metering Control System Upgradation — optimizing existing control systems to meet the latest industry standards." },
  { title: "Flow Computer Configuration", category: "Flow Measurement Solutions", image: "/images/services/flow-computer.png", href: "/service/flow-computer-configuration/", body: "Customized flow computational solutions in compliance with API MPMS, AGA, ISO, NTEP & OIML for seamless integration." },
  { title: "Flow Meter Calibration", category: "Flow Measurement Solutions", image: "/images/services/Banc-Calibr.jpg", href: "/service/flow-meter-calibration/", body: "Faure Herman offers calibration services in our world class ILAC/COFRAC ISO 17025 accredited facility located in France to handle your range of flowmeters, with services available for other brands as well." },
  { title: "Repair & Upgrades for Helical Flow Meters", category: "Flow Measurement Solutions", image: "/images/services/helical-repair.webp", href: "/service/repair-upgrades-for-helical-flow-meters/", body: "Preventive and corrective maintenance, performance and failure analysis for helical flow meter assets." },
  { title: "Audits and Specialized Consultancy", category: "Flow Measurement Solutions", image: "/images/services/audits-1500x750-1.jpeg", href: "/service/audits-and-specialized-consultancy/", body: "Comprehensive audits ensuring compliance with industry regulations and precise measurements within custody metering skid systems." },
  { title: "Validation and Uncertainty Calculations", category: "Flow Measurement Solutions", image: "/images/services/validation.jpg", href: "/service/validation-and-uncertainty-calculations/", body: "Advanced techniques to assess and minimize uncertainties — confidence in the reliability of your measurement data." },
  { title: "Commissioning and After Sales Support", category: "Flow Measurement Solutions", image: "/images/services/commissioning.png", href: "/service/commissioning-and-after-sales-support/", body: "Seamless integration and performance of critical equipment — flow meters, metering skids, flow computers, and control systems." },
  { title: "Genuine Spare Parts", category: "Flow Measurement Solutions", image: "/images/services/spare-parts.png", href: "/service/genuine-spare-parts/", body: "Authorized OEM Representative — genuine spare parts for flow metering, flow meters, control systems, analyzers, CEMS, and industrial sensors." },

  // Page 2 Items
  { title: "Metering Expert Services", category: "Flow Measurement Solutions", image: "/images/services/metering-experts.jpg", href: "/service/metering-expert-services/", body: "Elite team of flow metering specialists dedicated to enhancing your custody metering solutions with certified expertise." },
  { title: "Advanced Training", category: "Flow Measurement Solutions", image: "/images/services/TRAINING.jpg", href: "/service/flow-measurement-solutions/", body: "On demand training courses at OEM premises, videoconferencing, or customer sites — covering metering installation, commissioning, and operation." },
  { title: "New Installation Design and Commissioning", category: "Flow Measurement Solutions", image: "/images/services/20220524_110650-scaled.jpg", href: "/service/flow-measurement-solutions/", body: "As authorized OEM Representative, we assist in specification, design, sizing and operation of future metering systems." },

  { title: "Supply and Installation of Suspended Access Equipment", category: "Constructions", image: "/images/services/WINDOW-CLEANING-FACADE-CLEANING-BMU-CRADLE-ROOF-MACHINE-13-1-scaled.jpg", href: "/service/#construction", body: "Supply and installation of telescopic roof machines, twin track roof machines, powered cradles, recess cradles, monorails, and davit systems." },
  { title: "Lifting Equipment Inspection", category: "Specialized Inspection Services", image: "/images/services/lifting_equp.png", href: "/service/lifting-equipment-inspection-2/", body: "Systematic inspection of cranes, hoists, forklifts, and elevators — certified inspectors identify defects, wear, and safety standard deviations." },
  { title: "Hose Test", category: "Specialized Inspection Services", image: "/images/services/HOSE-TEST.jpg", href: "/service/hose-test-2/", body: "Quality assurance field water check for installed curtain walls, exterior windows and doors — identifies leakage vulnerabilities." },
  { title: "Air Permeability Test", category: "Specialized Inspection Services", image: "/images/services/AIR-PERMEABILITY-TEST.jpg", href: "/service/air-permeability-test-2/", body: "Measures air infiltration through windows, doors, and curtain walls per ASTM E783 — locates air leakage paths." },
  { title: "Water Penetration Test", category: "Specialized Inspection Services", image: "/images/services/WATER-PENETRATION-TEST.jpg", href: "/service/water-penetration-test-2/", body: "Determines whether leakage is present through windows, doors, and curtain wall systems from exterior to interior." },

  // Page 3 Items
  { title: "Pullout Test", category: "Specialized Inspection Services", image: "/images/services/ANCHORS-PULL-TESTING.jpg", href: "/service/pullout-test/", body: "Determines strength and integrity of the bond between a bond and embedded material — concrete or masonry structural anchorage testing." },
  { title: "Exterior Windows, Doors & Curtain Wall Testing", category: "Specialized Inspection Services", image: "/images/services/water-penetration.png", href: "/service/water-penetration-test-2/", body: "Performance testing of exterior windows, doors, and curtain walls for water penetration, air permeability, and structural soundness." },
  { title: "Torque Tightening & Bolt Tensioning", category: "Specialized Inspection Services", image: "/images/services/torque.png", href: "/service/torque-tightening-bolt-tensioning-2/", body: "Assesses tightness and preload of fasteners using calibrated torque sensors — proper installation and integrity of bolted connections." },
  { title: "Heat Treatment Services", category: "Specialized Inspection Services", image: "/images/services/Heat-Treatment-Services.jpeg", href: "/service/heat-treatment-services-2/", body: "Low, mid, and high range temperature heating using electrical and fuel-fired methods — specialized on-site heat treatment for oil and gas." },
  { title: "Metallurgical Services (PMI)", category: "Specialized Inspection Services", image: "/images/services/Metallurgical-Services.jpg", href: "/service/metallurgical-services-2/", body: "Positive Material Identification (PMI) — fast, non-destructive verification of chemical composition of metals and alloys." },
  { title: "Corrosion Control Services", category: "Specialized Inspection Services", image: "/images/services/maxresdefault.jpg", href: "/service/corrosion-control-services-2/", body: "Techniques and strategies to prevent, mitigate, and manage corrosion in metals across oil & gas, construction, and marine industries." },
  { title: "Gamma Ray Pipe Crawler", category: "Specialized Inspection Services", image: "/images/services/jme-her-pipeline-crawler-buggy-controller.webp", href: "/service/gamma-ray-pipe-crawler-inspection-systems/", body: "Battery-powered remote-controlled radiographic machine producing SWSI radiographs of circumferential welds in pipelines." },
  { title: "Videoscope", category: "Specialized Inspection Services", image: "/images/services/Videoscope.webp", href: "/service/videoscope/", body: "Specialized visual inspection for areas accessible only through bends or turns — excellent image quality and recording capability." },
  { title: "Magnetic Flux Leakage (MFL)", category: "Specialized Inspection Services", image: "/images/services/Magnetic-Flux-Leakage.jpg", href: "/service/magnetic-flux-leakage/", body: "Detects corrosion and pitting in steel pipelines and storage tanks by measuring magnetic field leakage at areas of metal loss." },

  // Page 4 Items
  { title: "Time of Flight Diffraction (TOFD)", category: "Specialized Inspection Services", image: "/images/services/time-of-flight-diffraction-tofd-ultrasonic-testing.jpg", href: "/service/time-of-flight-diffraction/", body: "Uses ultrasonic pulse flight time to determine reflector position and size — automatically calculating crack tip depth by trigonometry." },
  { title: "Eddy Current Testing", category: "Specialized Inspection Services", image: "/images/services/Eddy-Current-Testing.jpg", href: "/service/eddy-current-testing/", body: "Electronic probes find flaws in tubes and material surfaces using induced eddy currents running opposite to the probe-introduced current." },
  { title: "Phased Array Ultrasonic Testing", category: "Specialized Inspection Services", image: "/images/services/phased-array.jpg", href: "/service/phased-array-ultrasonic-testing/", body: "Detects cracks, voids, and pits caused by corrosion — high-resolution imaging far beyond conventional UT techniques." },
  { title: "Macro and Micro Test", category: "Mechanical Testing", image: "/images/services/Macro-and-Micro-Test.jpg", href: "/service/macro-and-micro-test/", body: "Macro and micro mechanical tests studying material properties at different length scales — characterization, design optimization, and quality control." },
  { title: "Fracture Test", category: "Mechanical Testing", image: "/images/services/fracture-testing.jpg", href: "/service/fracture-test/", body: "Fracture toughness tests measure a material's ability to resist growth of a pre-existing flaw — fatigue cracks, voids, or inconsistencies." },
  { title: "Bend Test", category: "Mechanical Testing", image: "/images/services/Three_point_flexural_test-scaled.jpg", href: "/service/bend-test/", body: "Assesses material ability to withstand bending forces — evaluating ductility and soundness for structural applications." },
  { title: "Impact Test", category: "Mechanical Testing", image: "/images/services/charpy_impact_test.jpg", href: "/service/impact-test/", body: "Measures resistance to sudden shock loading — Charpy and Izod impact testing critical for construction, automotive, and aerospace." },
  { title: "Hardness Test", category: "Mechanical Testing", image: "/images/services/Hardness-Test.jpg", href: "/service/hardness-test/", body: "Measures material resistance to permanent deformation — Rockwell, Brinell, and Vickers hardness testing to international standards." },
  { title: "Tensile Test", category: "Mechanical Testing", image: "/images/services/tensile-test2.jpg", href: "/service/tensile-test/", body: "Determines tensile strength, yield strength, and ductility of metals, plastics, ceramics, and composites under standardized loading conditions." },

  // Page 5 Items
  { title: "Electrical Instrumentation Works", category: "Constructions", image: "/images/services/electrical-inst.png", href: "/service/#construction", body: "Electrical and instrumentation works encompassing installation, maintenance, and optimization of electrical systems and instrumentation equipment." },
  { title: "Electrical Services", category: "Constructions", image: "/images/services/electrical.jpg", href: "/service/#construction", body: "Complete electrical services for industrial facilities — from design and installation to maintenance and commissioning support." },
  { title: "High and Low Voltage Cable Steel Structure Supports", category: "Constructions", image: "/images/services/Structural-Steel-Work.webp", href: "/service/#construction", body: "Design, fabrication, and erection of high and low voltage cable support structures, pathways, and steel structural supports." },
  { title: "Hand Rail Fabrication", category: "Constructions", image: "/images/services/Handrail.jpeg", href: "/service/#construction", body: "Skilled creation of safety handrails and support structures — steel, aluminum, and durable materials compliant with safety regulations." },
  { title: "Structural Steel Erection", category: "Constructions", image: "/images/services/Structural-Steel-Work.webp", href: "/service/#construction", body: "Pre-fabricated steel component assembly creating skeletal frameworks for buildings, bridges, and large industrial structures." },
  { title: "Steel Fabrication", category: "Constructions", image: "/images/services/Fabrication-Shop-Grinding.jpg", href: "/service/#construction", body: "Transforming raw steel into finished structures through cutting, bending, welding, and assembling — skids, pipework, and structural components." },
  { title: "Commissioning and Start-up Support", category: "Industrial Automation", image: "/images/services/DigitalOilAndGas-1 (1).webp", href: "/service/commissioning-and-start-up-support/", body: "Validating automation systems from pre-commissioning through hot commissioning, start-up, and post-commissioning handover." },
  { title: "Control System Integration and Upgradation", category: "Industrial Automation", image: "/images/services/Blank-Funky-Collage-Template.webp", href: "/service/system-software-upgrade/", body: "PLC and SCADA-based automation and system integration — from legacy system migrations to full greenfield automation builds." },
  { title: "Process Plant Automation", category: "Industrial Automation", image: "/images/services/automation.jpg", href: "/service/plant-automation/", body: "Top-tier Plant Automation solutions streamlining industrial processes — boosting efficiency, reducing costs, and enhancing productivity." },

  // Page 6 Items
  { title: "Inspection & Testing", category: "Main Services", image: "/images/services/Usinage-2.jpg", href: "/service/inspection-testing/", body: "Comprehensive inspection and testing — equipment inspections, NDT, functional testing, and certification to industry standards." },
  { title: "Flow Measurement & Control System Solutions", category: "Main Services", image: "/images/services/calibration.jpg", href: "/service/flow-measurement-solutions/", body: "Metering control system upgrades, maintenance, and validation for custody metering systems — precision and compliance." },
  { title: "Ultrasonic Testing (UT)", category: "Non Destructive Testing", image: "/images/services/Non-Destructive-Testing-NDT.jpg.webp", href: "/service/ultrasonic-testing-ut/", body: "High-frequency sound waves to inspect internal structure — defect detection, thickness measurement, and weld quality verification." },
  { title: "Radiographic Testing (RT)", category: "Non Destructive Testing", image: "/images/services/rgt.webp", href: "/service/radiographic-testing-rt/", body: "X-ray and gamma ray examination of internal material structure — voids, porosity, cracks, and weld discontinuities." },
  { title: "Magnetic Particle Inspection (MT)", category: "Non Destructive Testing", image: "/images/services/Magnetic-Particle-Inspection.jpg", href: "/service/magnetic-particle-inspection-mt/", body: "Detects surface and near-surface defects in ferromagnetic materials — fast and effective with minimal surface preparation." },
  { title: "Liquid / Dye Penetrant Examination (PT)", category: "Non Destructive Testing", image: "/images/services/PT.jpg", href: "/service/liquid-penetrant-dye-penetrant-examination-pt/", body: "Detects surface defects using capillary action — effective on metals, ceramics, plastics, and non-metallic materials." },
  { title: "Visual Inspection (VI)", category: "Non Destructive Testing", image: "/images/services/ndt.jpg", href: "/service/visual-inspection-vi/", body: "Systematic visual examination of surfaces, welds, and components — the first step in any NDT program." },
  { title: "Non Destructive Testing (NDT)", category: "Inspection & Testing", image: "/images/services/ndt.jpg", href: "/service/non-destructive-testing-ndt/", body: "Visual Inspection, Liquid/Dye Penetrant, Magnetic Particle, Radiographic Testing, and Ultrasonic Testing services." },
  { title: "Mechanical Testing", category: "Inspection & Testing", image: "/images/services/mechanical-testing.jpg", href: "/service/mechanical-testing/", body: "Tensile, hardness, impact, bend, fracture, and macro/micro testing — full material conformity to international standards." },
  { title: "Industrial Process Automation Solutions", category: "Main Services", image: "/images/services/automation_full.jpg", href: "/service/industrial-automation/", body: "Total industrial automation — PLC, SCADA, HMI, custom software for oil & gas and industrial sectors." },
  { title: "Constructions", category: "Main Services", image: "/images/services/SKYLIGHT-GANTRY-scaled.jpg", href: "/service/#construction", body: "Gantry & structural fabrication, industrial facility design, piping, civil & mechanical construction, turnkey EPC execution." },
];

const PER_PAGE = 9;

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  return (
    <div
      ref={ref}
      className="h-full"
    >
      <Link
        href={service.href}
        className="group relative rounded-2xl border border-white/60 bg-transparent overflow-hidden flex flex-col hover:border-white/95 transition-all duration-300 h-full"
        style={{
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* Image header portion */}
        <div className="relative h-[155px] w-full bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden flex items-center justify-center shrink-0">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <span className="text-[64px] font-black text-white/10 group-hover:text-[#e7212b]/20 group-hover:scale-110 transition-all duration-500 select-none">
              {service.placeholderNumber || "01"}
            </span>
          )}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-semibold text-white/90 bg-[#000000] blueprint-grid blueprint-dot-grid/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">
              {service.category}
            </span>
          </div>
        </div>

        {/* Text portion below image — Pronounced Light Glassmorphic Style */}
        <div
          className="relative flex flex-col flex-1 p-[18px] overflow-hidden rounded-b-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.20)",
            backdropFilter: isMobile ? "none" : "blur(28px)",
            WebkitBackdropFilter: isMobile ? "none" : "blur(28px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.60)",
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.8)",
          }}
        >
          {/* Distinct diagonal light streak sheen overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)",
            }}
          />

          {/* Top specular edge highlight */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

          <div className="relative z-10 w-7 h-[2px] bg-[#e7212b] rounded-full mb-2.5 group-hover:w-11 transition-all duration-300" />
          <h3 className="relative z-10 text-[16px] font-bold text-[#0B0D26] leading-snug mb-2 drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">
            {service.title}
          </h3>
          <p className="relative z-10 text-[#2D3748] text-[13px] font-medium leading-[1.65] flex-1 line-clamp-3">
            {service.body}
          </p>
          <div className="relative z-10 mt-3 pt-3 border-t border-black/[0.06] text-[#e7212b] text-[12.5px] font-bold flex items-center gap-1">
            Read more
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ServicesAllGrid({ initialPage = 1 }: { initialPage?: number }) {
  const [page, setPage] = useState(initialPage);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Sync page with initialPage after mount / props change to avoid render side-effects
  useEffect(() => {
    setPage(initialPage);
  }, [initialPage]);

  const filteredServices = useMemo(() => ALL_SERVICES.filter((svc) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      svc.title.toLowerCase().includes(query) ||
      svc.body.toLowerCase().includes(query) ||
      svc.category.toLowerCase().includes(query)
    );
  }), [searchQuery]);

  const totalPages = Math.ceil(filteredServices.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const currentServices = filteredServices.slice(start, start + PER_PAGE);

  const goTo = (p: number) => {
    flushSync(() => {
      setPage(p);
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const lenis = typeof window !== "undefined" ? (window as any).lenis : null;

        if (lenis && searchRef.current) {
          lenis.scrollTo(searchRef.current, { offset: -88 });
        } else {
          searchRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
        }
      });
    });
  };

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)" }}
    >
      {/* Background depth blobs for frosted glass refraction */}
      <div
        className="absolute top-[-5%] left-[-5%] w-[650px] h-[650px] rounded-full pointer-events-none blur-[90px] opacity-90"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(235,240,248,0.55) 45%, transparent 70%)" }}
      />
      <div
        className="absolute top-[35%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none blur-[100px] opacity-75"
        style={{ background: "radial-gradient(circle, rgba(165,180,200,0.55) 0%, rgba(140,158,180,0.25) 50%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-5%] left-[-8%] w-[650px] h-[650px] rounded-full pointer-events-none blur-[90px] opacity-80"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(230,238,248,0.45) 50%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Search Bar */}
        <div ref={searchRef} className="relative max-w-md mx-auto mb-12">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search services..."
              className="w-full pl-12 pr-10 py-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl text-[14px] text-[#0B0D26] placeholder-gray-500 focus:outline-none focus:border-[#e7212b]/40 focus:ring-1 focus:ring-[#e7212b]/20 transition-all duration-200 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setPage(1);
                }}
                className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Empty State vs Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-8 mb-14 shadow-sm">
            <Search className="w-10 h-10 text-gray-400 mx-auto mb-4" />
            <h3 className="text-[16px] font-bold text-[#0B0D26] mb-1">No services found</h3>
            <p className="text-[13px] text-gray-500">
              We couldn't find any services matching &ldquo;{searchQuery}&rdquo;.
            </p>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[22px] mb-14 scroll-mt-[88px]"
          >
            {currentServices.map((svc, i) => (
              <ServiceCard key={`${svc.title}-${i}`} service={svc} index={i} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredServices.length > 0 && (
          <>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <button onClick={() => goTo(Math.max(1, page - 1))} disabled={page === 1} className="min-w-[44px] min-h-[44px] rounded-lg border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center text-[#0B0D26] hover:border-[#e7212b]/40 hover:text-[#e7212b] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-sm">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} onClick={() => goTo(p)} className={`min-w-[44px] min-h-[44px] rounded-lg border text-[13px] font-semibold transition-all duration-200 ${p === page ? "bg-[#e7212b] border-[#e7212b] text-white shadow-lg shadow-[#e7212b]/20" : "bg-white/40 backdrop-blur-md border-white/60 text-[#0B0D26] hover:border-[#e7212b]/40 hover:text-[#e7212b] shadow-sm"}`}>
                  {p}
                </button>
              ))}
              <button onClick={() => goTo(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="min-w-[44px] min-h-[44px] rounded-lg border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center text-[#0B0D26] hover:border-[#e7212b]/40 hover:text-[#e7212b] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-sm">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-center text-[12px] text-gray-500 mt-4">Page {page} of {totalPages}</p>
          </>
        )}
      </div>
    </section>
  );
}
