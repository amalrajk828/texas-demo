"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  { title: "Phased Array Ultrasonic Testing", body: "PAUT detects image defects including cracks, voids, and pits caused by corrosion, and measures material and coating thickness with high-resolution beam-steering technology.", href: "/service/phased-array-ultrasonic-testing/" },
  { title: "Eddy Current Testing", body: "Electronic probes run through tubes or along material surfaces to find flaws using induced eddy currents that run opposite to the probe-introduced current.", href: "/service/eddy-current-testing/" },
  { title: "Time of Flight Diffraction", body: "TOFD uses ultrasonic pulse flight time to determine reflector position and size, automatically calculating crack tip depth via trigonometry.", href: "/service/time-of-flight-diffraction/" },
  { title: "Magnetic Flux Leakage", body: "MFL detects corrosion and pitting in steel pipelines and storage tanks by magnetising the steel and measuring the magnetic field that leaks at areas of metal loss.", href: "/service/magnetic-flux-leakage/" },
  { title: "Videoscope", body: "Specialised visual inspection for areas accessible only through series of bends or turns, delivering excellent image quality and recording capability in a portable system.", href: "/service/videoscope/" },
  { title: "Gamma Ray Pipe Crawler", body: "Battery-powered remote-controlled mobile radiographic machine producing SWSI radiographs of circumferential welds in pipelines — equivalent to conventional radiography.", href: "/service/gamma-ray-pipe-crawler-inspection-systems/" },
  { title: "Corrosion Control Services", body: "Techniques and strategies to prevent, mitigate, and manage corrosion in metals across oil &amp; gas, construction, transportation, marine, and manufacturing industries.", href: "/service/corrosion-control-services-2/" },
  { title: "Metallurgical Services", body: "Positive Material Identification (PMI) — fast, non-destructive verification of the chemical composition of metals and alloys against standards and specifications.", href: "/service/metallurgical-services/" },
  { title: "Heat Treatment Services", body: "Low, mid, and high range temperature heating using electrical and fuel-fired methods including high-velocity burners for excellent temperature distribution and uniformity.", href: "/service/heat-treatment-services/" },
  { title: "Torque Tightening & Bolt Tensioning", body: "Assessment of tightness and preload of fasteners using calibrated torque sensors, ensuring proper installation and integrity of bolted connections.", href: "/service/torque-tightening-bolt-tensioning/" },
  { title: "Pullout Test", body: "Mechanical test determining the strength and integrity of the bond between a bolt and embedded material (concrete or masonry), measuring force required to pull out a cast-in insert.", href: "/service/pullout-test/" },
  { title: "Water Penetration Test", body: "Determines water penetration through window, door, and curtain wall assemblies from exterior to interior to identify leakage presence.", href: "/service/water-penetration-test/" },
  { title: "Air Permeability Test", body: "Measures air infiltration through windows, doors, and curtain walls per ASTM E783, with optional visualisation techniques to locate air leakage paths.", href: "/service/air-permeability-test/" },
  { title: "Hose Test", body: "Quality assurance field water check for installed curtain walls, exterior windows, and doors by spraying water in a specified pattern to identify leakage vulnerabilities.", href: "/service/hose-test/" },
  { title: "Lifting Equipment Inspection", body: "Systematic inspection of cranes, hoists, forklifts, and elevators by certified inspectors to identify defects, wear, and deviations from safety standards — with written report.", href: "/service/lifting-equipment-inspection/" },
];

import LightGradientBackground from "@/components/LightGradientBackground";
import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";

export default function SpecializedSubServices() {
  return (
    <LightGradientBackground className="py-20 lg:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="fade-up mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Our Services</span>
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((item, i) => (
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
