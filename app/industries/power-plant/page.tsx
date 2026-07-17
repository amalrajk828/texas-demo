import type { Metadata } from "next";
import { Zap, Activity, Shield, TrendingUp } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryProductsGrid from "@/components/industries/IndustryProductsGrid";
import IndustryCtaBanner from "@/components/industries/IndustryCtaBanner";
import type { CategoryColors, IndustryProduct } from "@/components/industries/types";

export const metadata: Metadata = {
  title: "Power Plant Industry Solutions | Texas Technical Services",
  description:
    "Texas Technical Services delivers CEMS, flow meters, flow computers, analyzers, and industrial process automation systems for power plants — optimising performance, emissions monitoring, and operational efficiency.",
  alternates: { canonical: "/industries/power-plant/" },
  keywords: [
    "power plant CEMS solutions",
    "power plant flow meters",
    "power plant industrial automation",
    "emissions monitoring power generation",
    "flow computer power plant Kuwait",
  ],
  openGraph: {
    title: "Power Plant Industry Solutions | Texas Technical Services",
    description:
      "Comprehensive OEM solutions for power generation — CEMS, flow meters, analyzers, and automation systems backed by 18+ years of industrial expertise.",
    url: "/industries/power-plant/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Plant Industry Solutions | Texas Technical Services",
    description:
      "Comprehensive OEM solutions for power generation — CEMS, flow meters, analyzers, and automation systems backed by 18+ years of industrial expertise.",
  },
};

const products: IndustryProduct[] = [
  {
    category: "CEMS",
    name: "CEMS Solutions",
    slug: "cems-solutions",
    image: "/cems.png",
    brand: "SICK",
    desc: "SICK CEMS solutions for continuous stack emissions monitoring at power plants — measuring NOₓ, SO₂, CO, CO₂, and particulates to demonstrate regulatory compliance and optimise combustion efficiency across all generation types.",
  },
  {
    category: "Metering Skid",
    name: "Flow Metering Skid",
    slug: "flow-metering-skid",
    image: "/flow_metering_skid.jpg",
    brand: "SICK · FLOWSKID",
    desc: "FLOWSKID turnkey gas metering packages for power plant fuel gas supply — factory-assembled and tested, providing accurate fiscal measurement of natural gas and other fuel streams at the plant gate.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Liquid Flow Meter",
    slug: "ultrasonic-liquid-flow-meter",
    image: "/ultrasonic_liquid_flow_meter.png",
    brand: "FH Sonic",
    desc: "Multi-path transit-time liquid flowmeter for power plant cooling water, condensate, and liquid fuel measurement — delivering reliable accuracy in high-temperature and high-flow applications across the generation cycle.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Gas Flow Meter",
    slug: "ultrasonic-gas-flow-meter",
    image: "/ultrasonic_gas_flow_meter.jpg",
    brand: "FH83NEO",
    desc: "Full-bore ultrasonic gas measurement for power plant fuel gas, steam, and process gas streams — no pressure drop, no moving parts, and robust accuracy for demanding turbine and boiler fuel monitoring applications.",
  },
  {
    category: "Flow Meter",
    name: "Flare Meter",
    slug: "flare-meter",
    image: "/flare_meter.png",
    brand: "SICK",
    desc: "Ultrasonic flare measurement for power plant safety relief and venting systems — handling wide flow rate swings from near-zero to over 120 m/s to support accurate environmental reporting and safety management.",
  },
  {
    category: "Flow Meter",
    name: "Custody Transfer Gas Flow Meter",
    slug: "custody-transfer-gas-flow-meter",
    image: "/custody_transfer_gas_flow_meter.png",
    brand: "SICK",
    desc: "Fiscal-grade gas measurement at power plant battery limits — providing the billing accuracy required where fuel ownership changes hands and where small measurement errors directly impact generation operating costs.",
  },
  {
    category: "Flow Meter",
    name: "Non-Custody Transfer Gas Flow Meter",
    slug: "non-custody-transfer-gas-flow-meter",
    image: "/non_custody_transfer_gas_flow_meter.jpg",
    brand: "SICK",
    desc: "Reliable internal gas flow measurement for power plant fuel distribution, burner management, and utility monitoring — covering volume, mass flow, and velocity across diverse gas types and operating conditions.",
  },
  {
    category: "Flow Meter",
    name: "Clamp ON Meter",
    slug: "clamp-on-meter",
    image: "/clamp_on_meter.png",
    brand: "Ultraflux · Minisonic P",
    desc: "Non-invasive portable flowmeter for power plant maintenance surveys and commissioning — clamp onto cooling water lines, fuel pipes, or process lines without shutdown for instant, accurate flow readings.",
  },
  {
    category: "Flow Computer",
    name: "Flow Computer",
    slug: "flow-computer",
    image: "/flow_computer.png",
    brand: "OMNI · 4000/7000 Series",
    desc: "OMNI flow computers for power plant fuel gas fiscal and allocation metering — multi-stream capable with built-in AGA and ISO calculation standards, reducing billing uncertainty and supporting heat rate analysis.",
  },
  {
    category: "Gas Analyzer",
    name: "Gas Analyzers",
    slug: "gas-analyzers",
    image: "/gas_analyzer.png",
    brand: "SICK",
    desc: "In-situ and extractive gas analyzers for power plant combustion control and emissions measurement — monitoring O₂, CO, NOₓ, and SO₂ to maximise boiler and turbine efficiency while minimising environmental impact.",
  },
  {
    category: "Gas Analyzer",
    name: "Extractive Gas Analyzers",
    slug: "extractive-gas-analyzers",
    image: "/extractive_gas_analyzer.jpg",
    brand: "SICK",
    desc: "Continuous extractive stack gas analysis for power plants — conditioning the flue gas sample for precise, repeatable measurement of pollutants and combustion parameters regardless of stack pressure or temperature.",
  },
];

const categoryColors: CategoryColors = {
  "CEMS":          "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Metering Skid": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "Flow Meter":    "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Flow Computer": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "Gas Analyzer":  "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

export default function PowerPlantPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries/" }, { name: "Power Plant", href: "/industries/power-plant/" }]} />
      <IndustryHero
        name="Power Plant"
        breadcrumbLabel="Power Plant"
        image="/power_plant.jpg"
        alt="Power plant facility"
        Icon={Zap}
        description="Comprehensive OEM solutions for power generation — CEMS, flow meters, flow computers, analyzers, and industrial process automation systems that optimise performance, emissions monitoring, and operational efficiency."
        tags={["Generation", "Emissions Monitoring", "Fuel Metering", "CEMS", "Grid"]}
        stats={[
          { num: "11", label: "Products" },
          { num: "5+", label: "OEM Brands" },
          { num: "18+", label: "Years" },
        ]}
        highlights={[
          { icon: Activity, text: "Fuel Metering" },
          { icon: Shield, text: "EPA Compliance" },
          { icon: TrendingUp, text: "Grid Integration" },
        ]}
      />
      <IndustryProductsGrid
        title="Solutions for Power Plant"
        products={products}
        categoryColors={categoryColors}
      />
      <IndustryCtaBanner
        heading="Have a power plant project?"
        subtext="Talk to our specialists about your CEMS, flow measurement, or process automation requirements. Kuwait and Dubai offices ready to help."
      />
    </>
  );
}
