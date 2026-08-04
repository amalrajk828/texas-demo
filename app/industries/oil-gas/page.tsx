import type { Metadata } from "next";
import { Flame, Gauge, Shield, Timer, ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { industryFaqData } from "@/lib/industryFaqData";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryProductsGrid from "@/components/industries/IndustryProductsGrid";
import type { CategoryColors, IndustryProduct } from "@/components/industries/types";

export const metadata: Metadata = {
  title: "Oil & Gas Industry Solutions",
  description:
    "Texas Technical Services delivers precision flow metering, CEMS, analyzers, and industrial automation solutions for the oil & gas industry — upstream, midstream, and downstream.",
  alternates: { canonical: "/industries/oil-gas/" },
  openGraph: {
    title: "Oil & Gas Industry Solutions",
    description:
      "Complete OEM flow metering, CEMS, gas analyzers, and industrial automation solutions for the oil & gas sector — upstream, midstream, and downstream — backed by 18+ years in Kuwait and the GCC.",
    url: "/industries/oil-gas/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oil & Gas Industry Solutions",
    description:
      "Flow metering, CEMS, analyzers, and automation solutions for upstream, midstream, and downstream oil & gas — serving Kuwait and the GCC since 2008.",
  },
  keywords: [
    "oil and gas flow metering Kuwait",
    "upstream flow measurement solutions",
    "midstream metering systems GCC",
    "downstream automation Kuwait",
    "CEMS oil and gas Kuwait",
    "gas analyzers for oil and gas",
    "industrial automation oil and gas Kuwait",
    "flow computers for oil and gas",
    "custody transfer metering oil and gas",
    "oil and gas instrumentation Kuwait",
    "production optimization oil gas GCC",
    "oil and gas support services Kuwait",
    "innovative solutions oil gas",
    "Coriolis meter oil and gas",
  ],
};

const products: IndustryProduct[] = [
  {
    category: "CEMS",
    name: "CEMS Solutions",
    slug: "cems-solutions",
    image: "/cems.png",
    brand: "SICK",
    desc: "SICK CEMS solutions are tailored for emission measurement in power plants, industrial facilities, and ships — measuring pollutants and reference quantities in compliance with national and international regulations.",
  },
  {
    category: "Metering Skid",
    name: "Flow Metering Skid",
    slug: "flow-metering-skid",
    image: "/flow_metering_skid.jpg",
    brand: "SICK · FLOWSKID",
    desc: "FLOWSKID flow metering systems are the full gas flow metering system offering from SICK — a reliable turnkey solution for fiscal metering of natural gas and process gases.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Liquid Flow Meter",
    slug: "ultrasonic-liquid-flow-meter",
    image: "/ultrasonic_liquid_flow_meter.png",
    brand: "FH Sonic",
    desc: "High-performance liquid volume flowmeter for custody transfer using the transit time measurement method. Integrates up to 5 parallel measuring paths for optimal flow profile evaluation.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Gas Flow Meter",
    slug: "ultrasonic-gas-flow-meter",
    image: "/ultrasonic_gas_flow_meter.jpg",
    brand: "FH83NEO",
    desc: "Ultrasonic flowmeter for full bore measuring element without pressure drop — engineered for precision gas flow measurement in demanding oil and gas environments.",
  },
  {
    category: "Flow Meter",
    name: "Helical Turbine Meter",
    slug: "helical-turbine-meter",
    image: "/helical_turbine_meter.png",
    brand: "Heliflu TZN",
    desc: "The leading meter for custody transfer. Designed for high accuracy liquid measurement from very light LPG products to heavy crude oils — securing your revenues while reducing operational costs.",
  },
  {
    category: "Flow Meter",
    name: "Flare Meter",
    slug: "flare-meter",
    image: "/flare_meter.png",
    brand: "SICK",
    desc: "Ultrasonic flow meters for flare stack management, accurately measuring gas velocities from near-zero to over 120 m/s — ensuring optimal combustion control and environmental compliance.",
  },
  {
    category: "Flow Meter",
    name: "Custody Transfer Gas Flow Meter",
    slug: "custody-transfer-gas-flow-meter",
    image: "/custody_transfer_gas_flow_meter.png",
    brand: "SICK",
    desc: "Exact gas quantity detection for precise billing. SICK gas flow meters are absolutely accurate and rugged — built specifically for custody transfer where even small errors cause substantial loss.",
  },
  {
    category: "Flow Meter",
    name: "Non-Custody Transfer Gas Flow Meter",
    slug: "non-custody-transfer-gas-flow-meter",
    image: "/non_custody_transfer_gas_flow_meter.jpg",
    brand: "SICK",
    desc: "Reliable measurement of gaseous media for volume flow, mass flow, or flow velocity — even in challenging environments like flare gas measurement, tunnel monitoring, and emission monitoring.",
  },
  {
    category: "Flow Meter",
    name: "Clamp ON Meter",
    slug: "clamp-on-meter",
    image: "/clamp_on_meter.png",
    brand: "Ultraflux · Minisonic P",
    desc: "Portable ultrasonic flowmeter on the transit time principle — measuring water, petroleum products, and chemical industry fluids with high performance signal processing adapted to each site.",
  },
  {
    category: "Flow Metering",
    name: "Master Meter",
    slug: "master-meter",
    image: "/master_meter.jpg",
    brand: "Faure Herman",
    desc: "A complete flow measurement solution combining a flow conditioner, upstream and downstream spools, and the Master Meter — a compact, efficient alternative to larger provers.",
  },
  {
    category: "Flow Computer",
    name: "Flow Computer",
    slug: "flow-computer",
    image: "/flow_computer.png",
    brand: "OMNI · 4000/7000 Series",
    desc: "The most recognized and trusted brand of custody flow computers for oil and gas measurement — reducing uncertainty and ensuring precise, compliant fiscal measurement.",
  },
  {
    category: "Gas Analyzer",
    name: "Gas Analyzers",
    slug: "gas-analyzers",
    image: "/gas_analyzer.png",
    brand: "SICK",
    desc: "A diverse selection of gas analyzers using powerful in-situ and extractive measurement principles — versatile enough to equip entire facilities and tackle complex measurement tasks.",
  },
  {
    category: "Gas Analyzer",
    name: "Extractive Gas Analyzers",
    slug: "extractive-gas-analyzers",
    image: "/extractive_gas_analyzer.jpg",
    brand: "SICK",
    desc: "Reliable gas analysis under harsh process conditions — extracting a partial gas flow, conditioning it, and feeding it to an analyzer module under constant, controlled conditions.",
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

export default function OilGasPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Industries", href: "/industries/" },
        { name: "Oil & Gas", href: "/industries/oil-gas/" },
      ]} />
      <SpeakableJsonLd headline="Oil & Gas Industry Solutions" cssSelector={["h2", "p"]} />
      <IndustryHero
        name="Oil & Gas"
        breadcrumbLabel="Oil & Gas"
        image="/oil_and_gas.jpg"
        alt="Oil & Gas industrial facility"
        Icon={Flame}
        description="Comprehensive OEM solutions tailored to the unique needs of the oil and gas industries — from advanced flow metering and precision analyzers to industrial automation for upstream, midstream, and downstream operations."
        tags={["Upstream", "Midstream", "Downstream", "Custody Transfer", "CEMS"]}
        stats={[
          { num: "13", label: "Products" },
          { num: "5+", label: "OEM Brands" },
          { num: "18+", label: "Years" },
        ]}
        highlights={[
          { icon: Gauge, text: "Custody Transfer Metering" },
          { icon: Shield, text: "CEMS Compliance" },
          { icon: Timer, text: "Upstream-to-Downstream" },
        ]}
      />
      <IndustryProductsGrid
        title="Solutions for Oil & Gas"
        products={products}
        categoryColors={categoryColors}
      />
      <FaqPageJsonLd items={industryFaqData["oil-gas"]} />
      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About{" "}
            <em className="not-italic text-[#e7212b]">Oil & Gas</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {industryFaqData["oil-gas"]?.map((item) => (
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
