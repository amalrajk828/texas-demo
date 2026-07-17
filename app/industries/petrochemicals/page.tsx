import type { Metadata } from "next";
import { FlaskConical, Atom, Shield, TrendingUp } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryProductsGrid from "@/components/industries/IndustryProductsGrid";
import IndustryCtaBanner from "@/components/industries/IndustryCtaBanner";
import type { CategoryColors, IndustryProduct } from "@/components/industries/types";

export const metadata: Metadata = {
  title: "Petrochemicals Industry Solutions | Texas Technical Services",
  description:
    "Texas Technical Services delivers state-of-the-art flow metering, CEMS, analyzers, and industrial automation solutions for the petrochemical industry.",
  alternates: { canonical: "/industries/petrochemicals/" },
  keywords: [
    "petrochemical flow metering Kuwait",
    "petrochemical CEMS solutions",
    "petrochemical gas analyzers",
    "industrial automation petrochemicals",
    "flow computer petrochemical industry",
  ],
  openGraph: {
    title: "Petrochemicals Industry Solutions | Texas Technical Services",
    description:
      "From flow meters and flow computers to gas analyzers and CEMS — precision OEM solutions for the petrochemical industry.",
    url: "/industries/petrochemicals/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petrochemicals Industry Solutions | Texas Technical Services",
    description:
      "From flow meters and flow computers to gas analyzers and CEMS — precision OEM solutions for the petrochemical industry.",
  },
};

const products: IndustryProduct[] = [
  {
    category: "CEMS",
    name: "CEMS Solutions",
    slug: "cems-solutions",
    image: "/cems.png",
    brand: "SICK",
    desc: "SICK CEMS solutions for continuous emissions monitoring in petrochemical facilities — measuring NOₓ, SO₂, CO, VOCs, and particulates at stacks and process vents to maintain environmental permit compliance.",
  },
  {
    category: "Metering Skid",
    name: "Flow Metering Skid",
    slug: "flow-metering-skid",
    image: "/flow_metering_skid.jpg",
    brand: "SICK · FLOWSKID",
    desc: "FLOWSKID turnkey metering packages for petrochemical feedstock and product gas streams — factory-assembled and tested, minimising site installation time and ensuring measurement accuracy from day one.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Liquid Flow Meter",
    slug: "ultrasonic-liquid-flow-meter",
    image: "/ultrasonic_liquid_flow_meter.png",
    brand: "FH Sonic",
    desc: "Multi-path transit-time liquid flow meter for custody transfer of petrochemical products — handling aromatics, olefins, and other chemical liquids with high accuracy across wide viscosity ranges.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Gas Flow Meter",
    slug: "ultrasonic-gas-flow-meter",
    image: "/ultrasonic_gas_flow_meter.jpg",
    brand: "FH83NEO",
    desc: "Full-bore ultrasonic measurement of petrochemical process gas streams — ethylene, propylene, natural gas liquids, and synthesis gas — with zero pressure drop and no moving parts to maintain.",
  },
  {
    category: "Flow Meter",
    name: "Helical Turbine Meter",
    slug: "helical-turbine-meter",
    image: "/helical_turbine_meter.png",
    brand: "Heliflu TZN",
    desc: "The industry's leading custody transfer meter for liquid petrochemical products — from light LPG to heavy aromatics. Robust construction handles the wide product range and varying flow rates in petrochemical plants.",
  },
  {
    category: "Flow Meter",
    name: "Flare Meter",
    slug: "flare-meter",
    image: "/flare_meter.png",
    brand: "SICK",
    desc: "Ultrasonic flare measurement for petrochemical plant relief and disposal systems — accurately quantifying combustible gas from near-zero to over 120 m/s to support environmental reporting and process safety.",
  },
  {
    category: "Flow Meter",
    name: "Custody Transfer Gas Flow Meter",
    slug: "custody-transfer-gas-flow-meter",
    image: "/custody_transfer_gas_flow_meter.png",
    brand: "SICK",
    desc: "Fiscal-grade gas measurement at petrochemical plant battery limits and transfer points — delivering the precision required where feedstock and product ownership changes hands and billing accuracy is paramount.",
  },
  {
    category: "Flow Meter",
    name: "Non-Custody Transfer Gas Flow Meter",
    slug: "non-custody-transfer-gas-flow-meter",
    image: "/non_custody_transfer_gas_flow_meter.jpg",
    brand: "SICK",
    desc: "Process gas flow measurement for internal petrochemical plant use — monitoring fuel gas, utility streams, and intermediate process flows to optimise unit performance and energy consumption.",
  },
  {
    category: "Flow Meter",
    name: "Clamp ON Meter",
    slug: "clamp-on-meter",
    image: "/clamp_on_meter.png",
    brand: "Ultraflux · Minisonic P",
    desc: "Non-invasive portable flowmeter for petrochemical plant surveys and commissioning verification — clamp onto existing pipework without shutdown to measure chemicals, solvents, and process fluids on demand.",
  },
  {
    category: "Flow Metering",
    name: "Master Meter",
    slug: "master-meter",
    image: "/master_meter.jpg",
    brand: "Faure Herman",
    desc: "Compact, self-contained master meter package for petrochemical product proving and verification — combining conditioner, spools, and meter in one unit for efficient calibration of field meters.",
  },
  {
    category: "Flow Computer",
    name: "Flow Computer",
    slug: "flow-computer",
    image: "/flow_computer.png",
    brand: "OMNI · 4000/7000 Series",
    desc: "OMNI flow computers for petrochemical custody and allocation metering — supporting complex multi-stream configurations with built-in AGA, API, GPA, and ISO calculation standards for all product types.",
  },
  {
    category: "Gas Analyzer",
    name: "Gas Analyzers",
    slug: "gas-analyzers",
    image: "/gas_analyzer.png",
    brand: "SICK",
    desc: "In-situ and extractive gas analyzers for petrochemical process streams — measuring product quality, catalyst performance, and emission parameters to optimise yield and ensure regulatory compliance.",
  },
  {
    category: "Gas Analyzer",
    name: "Extractive Gas Analyzers",
    slug: "extractive-gas-analyzers",
    image: "/extractive_gas_analyzer.jpg",
    brand: "SICK",
    desc: "Continuous extractive gas analysis for petrochemical stacks and reactors under aggressive conditions — conditioning the sample for precise, repeatable analysis independent of process pressure and temperature swings.",
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

export default function PetrochemicalsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Industries", href: "/industries/" },
        { name: "Petrochemicals", href: "/industries/petrochemicals/" },
      ]} />
      <IndustryHero
        name="Petrochemicals"
        breadcrumbLabel="Petrochemicals"
        image="/petrochemical.png"
        alt="Petrochemical plant"
        Icon={FlaskConical}
        description="State-of-the-art flow metering, gas analyzers, and process automation solutions for the petrochemical industry — from feedstock measurement to product custody transfer and continuous emissions monitoring."
        tags={["Process Automation", "Flow Solutions", "CEMS", "Quality Control", "Custody Transfer"]}
        stats={[
          { num: "13", label: "Products" },
          { num: "5+", label: "OEM Brands" },
          { num: "18+", label: "Years" },
        ]}
        highlights={[
          { icon: Atom, text: "Process Automation" },
          { icon: Shield, text: "CEMS Compliance" },
          { icon: TrendingUp, text: "Flow Solutions" },
        ]}
      />
      <IndustryProductsGrid
        title="Solutions for Petrochemicals"
        products={products}
        categoryColors={categoryColors}
      />
      <IndustryCtaBanner
        heading="Have a petrochemical project?"
        subtext="Talk to our specialists about your flow measurement, CEMS, or process automation requirements. Kuwait and Dubai offices ready to help."
      />
    </>
  );
}
