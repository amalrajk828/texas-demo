import type { Metadata } from "next";
import { Droplets, Droplet, Shield, CheckCircle, ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { industryFaqData } from "@/lib/industryFaqData";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryProductsGrid from "@/components/industries/IndustryProductsGrid";
import type { CategoryColors, IndustryProduct } from "@/components/industries/types";

export const metadata: Metadata = {
  title: "Water Treatment Industry Solutions",
  description:
    "Texas Technical Services delivers CEMS, analyzers, flow meters, and industrial process automation systems for water treatment — ensuring precise monitoring, quality control, and operational efficiency.",
  alternates: { canonical: "/industries/water-treatment/" },
  keywords: [
    "water treatment flow meters",
    "water treatment CEMS solutions",
    "water treatment dust analyzers",
    "industrial water treatment automation",
    "water treatment monitoring systems Kuwait",
    "wastewater treatment instrumentation GCC",
    "desalination plant automation Dubai",
    "water quality monitoring Kuwait",
    "effluent treatment plant control",
    "water treatment SCADA systems GCC",
  ],
  openGraph: {
    title: "Water Treatment Industry Solutions",
    description:
      "Advanced OEM solutions for municipal and industrial water treatment — flow meters, CEMS, dust analyzers, and automation systems backed by 18+ years of expertise.",
    url: "/industries/water-treatment/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Treatment Industry Solutions",
    description:
      "Advanced OEM solutions for municipal and industrial water treatment — flow meters, CEMS, dust analyzers, and automation systems backed by 18+ years of expertise.",
  },
};

const products: IndustryProduct[] = [
  {
    category: "Metering Skid",
    name: "Flow Metering Skid",
    slug: "flow-metering-skid",
    image: "/flow_metering_skid.jpg",
    brand: "SICK · FLOWSKID",
    desc: "FLOWSKID turnkey flow metering systems for water treatment plant gas supply — factory-assembled, pre-tested packages delivering reliable fiscal measurement of fuel and process gas at the plant gate.",
  },
  {
    category: "Flow Meter",
    name: "Custody Transfer Gas Flow Meter",
    slug: "custody-transfer-gas-flow-meter",
    image: "/custody_transfer_gas_flow_meter.png",
    brand: "SICK",
    desc: "Exact gas quantity detection for precise billing at water treatment facilities — where accurate fuel gas measurement directly impacts operational cost control and energy management across the plant.",
  },
  {
    category: "Flow Computer",
    name: "Flow Computer",
    slug: "flow-computer",
    image: "/flow_computer.png",
    brand: "OMNI · 4000/7000 Series",
    desc: "OMNI flow computers — the most trusted brand for custody flow measurement — reducing uncertainty and supporting energy accounting across water treatment plant gas and liquid metering stations.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Gas Flow Meter",
    slug: "ultrasonic-gas-flow-meter",
    image: "/ultrasonic_gas_flow_meter.jpg",
    brand: "FH83NEO",
    desc: "Full-bore ultrasonic flowmeter for water treatment plant gas streams — no pressure drop, no moving parts, and zero maintenance burden across aeration gas, biogas, and fuel gas applications.",
  },
  {
    category: "Flow Meter",
    name: "Non-Custody Transfer Gas Flow Meter",
    slug: "non-custody-transfer-gas-flow-meter",
    image: "/non_custody_transfer_gas_flow_meter.jpg",
    brand: "SICK",
    desc: "Reliable gas flow measurement for internal water treatment plant operations — monitoring biogas, aeration air, and utility streams for volume, mass flow, and velocity across diverse process conditions.",
  },
  {
    category: "CEMS",
    name: "CEMS Solutions",
    slug: "cems-solutions",
    image: "/cems.png",
    brand: "SICK",
    desc: "SICK CEMS solutions for continuous emissions monitoring at water treatment plants — accurately measuring pollutants and reference quantities from incineration, biogas combustion, and process vents in compliance with regulations.",
  },
  {
    category: "Dust Analyzer",
    name: "Dust Analyzer",
    slug: "dust-analyzer",
    image: "/dust_analyzer.png",
    brand: "SICK",
    desc: "SICK sets new standards in dust measurement with rugged, low-maintenance devices for detecting and monitoring dust concentrations at water treatment facilities — easy to integrate, install, and commission with user-friendly operation.",
  },
  {
    category: "Flow Meter",
    name: "Clamp ON Meter",
    slug: "clamp-on-meter",
    image: "/clamp_on_meter.png",
    brand: "Ultraflux · Minisonic P",
    desc: "Portable transit-time ultrasonic flowmeter ideal for water treatment — measuring water of variable quality, process fluids, and chemical dosing lines without pipe penetration or process interruption.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Liquid Flow Meter",
    slug: "ultrasonic-liquid-flow-meter",
    image: "/ultrasonic_liquid_flow_meter.png",
    brand: "FH Sonic",
    desc: "High-performance multi-path liquid flowmeter for water treatment custody transfer — integrating up to 5 asymmetric measuring paths for accurate flow profile correction across raw water, treated water, and effluent streams.",
  },
];

const categoryColors: CategoryColors = {
  "CEMS":          "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Metering Skid": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "Flow Meter":    "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Flow Computer": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "Dust Analyzer": "bg-sky-500/15 text-sky-400 border-sky-500/20",
};

export default function WaterTreatmentPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries/" }, { name: "Water Treatment", href: "/industries/water-treatment/" }]} />
      <SpeakableJsonLd headline="Water Treatment Industry Solutions" cssSelector={["h2", "p"]} />
      <IndustryHero
        name="Water Treatment"
        breadcrumbLabel="Water Treatment"
        image="/water_treatment.webp"
        alt="Water treatment plant facility"
        Icon={Droplets}
        description="Advanced OEM solutions for municipal and industrial water treatment — delivering precise monitoring, quality control, and operational efficiency through flow meters, CEMS, dust analyzers, and process automation systems."
        tags={["Municipal", "Industrial", "Precise Monitoring", "Quality Control", "CEMS"]}
        stats={[
          { num: "9", label: "Products" },
          { num: "3+", label: "OEM Brands" },
          { num: "18+", label: "Years" },
        ]}
        highlights={[
          { icon: Droplet, text: "Precise Flow Control" },
          { icon: Shield, text: "Quality Monitoring" },
          { icon: CheckCircle, text: "Municipal & Industrial" },
        ]}
      />
      <IndustryProductsGrid
        title="Solutions for Water Treatment"
        products={products}
        categoryColors={categoryColors}
      />
      <FaqPageJsonLd items={industryFaqData["water-treatment"]} />
      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About{" "}
            <em className="not-italic text-current">Water Treatment</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {industryFaqData["water-treatment"]?.map((item) => (
              <details
                key={item.q}
                className="group bg-white border border-[#e8eaf0] rounded-2xl overflow-hidden transition-all duration-200 open:border-[#e7212b]/25 open:shadow-lg"
              >
                <summary className="flex items-center justify-between p-5 lg:p-6 cursor-pointer list-none">
                  <span className="text-[15px] font-semibold text-[#0B0D26] pr-4 leading-snug">
                    {item.q}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-open:bg-[#e7212b] group-open:border-[#e7212b] transition-all duration-200">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e7212b] group-open:text-white group-open:rotate-90 transition-all duration-200" />
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                  <p className="text-gray-500 text-[14px] leading-[1.8]">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
