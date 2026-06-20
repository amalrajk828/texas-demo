"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Waves, Zap, Clock, Magnet, Camera, RadioTower, ShieldCheck, FlaskConical, Flame, Wrench, ArrowDown, Droplets, Wind, Pipette, Truck } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const SERVICES = [
  { Icon: Waves, title: "Phased Array Ultrasonic Testing", body: "PAUT detects image defects including cracks, voids, and pits caused by corrosion, and measures material and coating thickness with high-resolution beam-steering technology.", href: "/service/phased-array-ultrasonic-testing/" },
  { Icon: Zap, title: "Eddy Current Testing", body: "Electronic probes run through tubes or along material surfaces to find flaws using induced eddy currents that run opposite to the probe-introduced current.", href: "/service/eddy-current-testing/" },
  { Icon: Clock, title: "Time of Flight Diffraction", body: "TOFD uses ultrasonic pulse flight time to determine reflector position and size, automatically calculating crack tip depth via trigonometry.", href: "/service/time-of-flight-diffraction/" },
  { Icon: Magnet, title: "Magnetic Flux Leakage", body: "MFL detects corrosion and pitting in steel pipelines and storage tanks by magnetising the steel and measuring the magnetic field that leaks at areas of metal loss.", href: "/service/magnetic-flux-leakage/" },
  { Icon: Camera, title: "Videoscope", body: "Specialised visual inspection for areas accessible only through series of bends or turns, delivering excellent image quality and recording capability in a portable system.", href: "/service/videoscope/" },
  { Icon: RadioTower, title: "Gamma Ray Pipe Crawler", body: "Battery-powered remote-controlled mobile radiographic machine producing SWSI radiographs of circumferential welds in pipelines — equivalent to conventional radiography.", href: "/service/gamma-ray-pipe-crawler-inspection-systems/" },
  { Icon: ShieldCheck, title: "Corrosion Control Services", body: "Techniques and strategies to prevent, mitigate, and manage corrosion in metals across oil &amp; gas, construction, transportation, marine, and manufacturing industries.", href: "/service/corrosion-control-services-2/" },
  { Icon: FlaskConical, title: "Metallurgical Services", body: "Positive Material Identification (PMI) — fast, non-destructive verification of the chemical composition of metals and alloys against standards and specifications.", href: "/service/metallurgical-services-2/" },
  { Icon: Flame, title: "Heat Treatment Services", body: "Low, mid, and high range temperature heating using electrical and fuel-fired methods including high-velocity burners for excellent temperature distribution and uniformity.", href: "/service/heat-treatment-services-2/" },
  { Icon: Wrench, title: "Torque Tightening & Bolt Tensioning", body: "Assessment of tightness and preload of fasteners using calibrated torque sensors, ensuring proper installation and integrity of bolted connections.", href: "/service/torque-tightening-bolt-tensioning-2/" },
  { Icon: ArrowDown, title: "Pullout Test", body: "Mechanical test determining the strength and integrity of the bond between a bolt and embedded material (concrete or masonry), measuring force required to pull out a cast-in insert.", href: "/service/pullout-test/" },
  { Icon: Droplets, title: "Water Penetration Test", body: "Determines water penetration through window, door, and curtain wall assemblies from exterior to interior to identify leakage presence.", href: "/service/water-penetration-test-2/" },
  { Icon: Wind, title: "Air Permeability Test", body: "Measures air infiltration through windows, doors, and curtain walls per ASTM E783, with optional visualisation techniques to locate air leakage paths.", href: "/service/air-permeability-test-2/" },
  { Icon: Pipette, title: "Hose Test", body: "Quality assurance field water check for installed curtain walls, exterior windows, and doors by spraying water in a specified pattern to identify leakage vulnerabilities.", href: "/service/hose-test-2/" },
  { Icon: Truck, title: "Lifting Equipment Inspection", body: "Systematic inspection of cranes, hoists, forklifts, and elevators by certified inspectors to identify defects, wear, and deviations from safety standards — with written report.", href: "/service/lifting-equipment-inspection-2/" },
];

function ServiceCard({ item, index }: { item: (typeof SERVICES)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.04 + (index % 3) * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
    >
      <Link href={item.href} className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300 h-full p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
            <item.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
          </div>
          <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
        <h3 className="text-[15px] font-bold text-[#0B0D26] leading-snug mb-2.5">{item.title}</h3>
        <p className="text-gray-500 text-[13px] leading-[1.7] flex-1" dangerouslySetInnerHTML={{ __html: item.body }} />
        <div className="mt-4 pt-4 border-t border-[#e8eaf0] flex items-center gap-1.5 text-[#e7212b] text-[12px] font-semibold">
          <span>Learn more</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </Link>
    </motion.div>
  );
}

export default function SpecializedSubServices() {
  return (
    <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp delay={0} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">Our Services</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">
              Specialized Inspection Capabilities
            </h2>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15">
              Get More Information
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
