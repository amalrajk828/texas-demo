import type { Metadata } from "next";
import { Factory, Gauge, Shield, Thermometer, ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { industryFaqData } from "@/lib/industryFaqData";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryProductsGrid from "@/components/industries/IndustryProductsGrid";
import type { CategoryColors, IndustryProduct } from "@/components/industries/types";

export const metadata: Metadata = {
  title: "Refinery Industry Solutions",
  description:
    "Texas Technical Services provides cutting-edge flow metering, CEMS, analyzers, and industrial automation solutions tailored for the demanding world of refinery operations.",
  alternates: { canonical: "/industries/refinery/" },
  keywords: [
    "refinery flow metering Kuwait",
    "refinery CEMS solutions",
    "refinery gas analyzers",
    "industrial automation refinery",
    "flow meter calibration refinery",
    "emissions monitoring refinery GCC",
  ],
  openGraph: {
    title: "Refinery Industry Solutions",
    description:
      "Precision flow meters, flow computers, CEMS and analyzers for refinery process control — backed by 18+ years of industrial expertise.",
    url: "/industries/refinery/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refinery Industry Solutions",
    description:
      "Precision flow meters, flow computers, CEMS and analyzers for refinery process control — backed by 18+ years of industrial expertise.",
  },
};

const products: IndustryProduct[] = [
  {
    category: "CEMS",
    name: "CEMS Solutions",
    slug: "cems-solutions",
    image: "/cems.png",
    brand: "SICK",
    desc: "SICK CEMS solutions designed for refinery emission measurement — accurately monitoring stack emissions, flue gas, and process vents to ensure compliance with environmental regulations and permit requirements.",
  },
  {
    category: "Metering Skid",
    name: "Flow Metering Skid",
    slug: "flow-metering-skid",
    image: "/flow_metering_skid.jpg",
    brand: "SICK · FLOWSKID",
    desc: "FLOWSKID turnkey gas flow metering systems for refinery fiscal measurement — pre-engineered, factory-tested packages covering the full gas flow metering system from inlet to data output.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Liquid Flow Meter",
    slug: "ultrasonic-liquid-flow-meter",
    image: "/ultrasonic_liquid_flow_meter.png",
    brand: "FH Sonic",
    desc: "High-performance custody transfer flowmeter for refined liquid products — crude oil, distillates, and intermediate streams — using multi-path transit time technology for maximum accuracy at battery limits.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Gas Flow Meter",
    slug: "ultrasonic-gas-flow-meter",
    image: "/ultrasonic_gas_flow_meter.jpg",
    brand: "FH83NEO",
    desc: "Full-bore ultrasonic gas flow measurement without pressure drop — ideal for refinery fuel gas, hydrogen, and process gas streams where pressure loss impacts process efficiency.",
  },
  {
    category: "Flow Meter",
    name: "Helical Turbine Meter",
    slug: "helical-turbine-meter",
    image: "/helical_turbine_meter.png",
    brand: "Heliflu TZN",
    desc: "The leading custody transfer meter for refined petroleum products — from light LPG to heavy fuel oils. The Heliflu TZN's advanced design handles viscosity variations across the full refinery product slate.",
  },
  {
    category: "Flow Meter",
    name: "Flare Meter",
    slug: "flare-meter",
    image: "/flare_meter.png",
    brand: "SICK",
    desc: "Ultrasonic flare measurement for refinery flare headers and individual unit flares — measuring from near-zero to over 120 m/s, enabling accurate flare gas accounting and minimising uncontrolled emissions.",
  },
  {
    category: "Flow Meter",
    name: "Custody Transfer Gas Flow Meter",
    slug: "custody-transfer-gas-flow-meter",
    image: "/custody_transfer_gas_flow_meter.png",
    brand: "SICK",
    desc: "Accurate custody transfer gas measurement at refinery battery limits and product transfer points — where billing accuracy is critical and even small measurement errors result in significant financial loss.",
  },
  {
    category: "Flow Meter",
    name: "Non-Custody Transfer Gas Flow Meter",
    slug: "non-custody-transfer-gas-flow-meter",
    image: "/non_custody_transfer_gas_flow_meter.jpg",
    brand: "SICK",
    desc: "Reliable measurement of refinery fuel gas, hydrogen, and process gas streams for volume flow, mass flow, or flow velocity — built to handle the harsh ambient conditions and wide range of gas compositions found in refinery operations.",
  },
  {
    category: "Flow Meter",
    name: "Clamp ON Meter",
    slug: "clamp-on-meter",
    image: "/clamp_on_meter.png",
    brand: "Ultraflux · Minisonic P",
    desc: "Non-intrusive portable flowmeter for refinery maintenance and verification — clamp onto any pipe without process interruption to measure hydrocarbons, water, and process fluids across the unit.",
  },
  {
    category: "Flow Metering",
    name: "Master Meter",
    slug: "master-meter",
    image: "/master_meter.jpg",
    brand: "Faure Herman",
    desc: "Compact master meter solution combining flow conditioner, upstream and downstream spools in a single package — a space-efficient alternative to conventional provers for refinery product verification.",
  },
  {
    category: "Flow Computer",
    name: "Flow Computer",
    slug: "flow-computer",
    image: "/flow_computer.png",
    brand: "OMNI · 4000/7000 Series",
    desc: "The OMNI Flow Computer — the industry-standard for refinery custody measurement. Handles multi-stream, multi-product configurations with built-in AGA, API, and ISO calculation standards.",
  },
  {
    category: "Gas Analyzer",
    name: "Gas Analyzers",
    slug: "gas-analyzers",
    image: "/gas_analyzer.png",
    brand: "SICK",
    desc: "In-situ and extractive gas analyzers for refinery process streams — measuring H₂S, CO, SO₂, NOₓ, O₂ and combustibles for process optimisation, safety, and environmental compliance.",
  },
  {
    category: "Gas Analyzer",
    name: "Extractive Gas Analyzers",
    slug: "extractive-gas-analyzers",
    image: "/extractive_gas_analyzer.jpg",
    brand: "SICK",
    desc: "Reliable continuous gas analysis for refinery stacks and process ducts under harsh conditions — extractive measurement technology conditions the sample before analysis, ensuring consistent and accurate readings.",
  },
];

const categoryColors: CategoryColors = {
  "CEMS":          "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Metering Skid": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "Flow Meter":    "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Flow Metering": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Flow Computer": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "Gas Analyzer":  "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

export default function RefineryPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Industries", href: "/industries/" },
        { name: "Refinery", href: "/industries/refinery/" },
      ]} />
      <SpeakableJsonLd headline="Refinery Industry Solutions" cssSelector={["h2", "p"]} />
      <IndustryHero
        name="Refinery"
        breadcrumbLabel="Refinery"
        image="/refinery.webp"
        alt="Refinery industrial facility"
        Icon={Factory}
        description="Cutting-edge flow metering, CEMS, and industrial automation solutions for the demanding world of refinery operations — ensuring process control, emissions compliance, and precise custody transfer across the full product slate."
        tags={["Process Control", "Emissions Monitoring", "Custody Transfer", "CEMS", "Fiscal Metering"]}
        stats={[
          { num: "13", label: "Products" },
          { num: "5+", label: "OEM Brands" },
          { num: "18+", label: "Years" },
        ]}
        highlights={[
          { icon: Gauge, text: "Fiscal Metering" },
          { icon: Shield, text: "Emissions Monitoring" },
          { icon: Thermometer, text: "Process Control" },
        ]}
      />
      <IndustryProductsGrid
        title="Solutions for Refinery"
        products={products}
        categoryColors={categoryColors}
      />
      <FaqPageJsonLd items={industryFaqData["refinery"]} />
      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About{" "}
            <em className="not-italic text-current">Refinery</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {industryFaqData["refinery"]?.map((item) => (
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
