import type { Metadata } from "next";
import { Snowflake, Thermometer, Shield, Clock } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryProductsGrid from "@/components/industries/IndustryProductsGrid";
import IndustryCtaBanner from "@/components/industries/IndustryCtaBanner";
import type { CategoryColors, IndustryProduct } from "@/components/industries/types";

export const metadata: Metadata = {
  title: "LNG Industry Solutions | Texas Technical Services",
  description:
    "Texas Technical Services delivers precision flow metering, CEMS, analyzers, and industrial automation solutions for LNG plant operations — ensuring accurate measurement, efficiency, and safety.",
  alternates: { canonical: "/industries/lng/" },
  keywords: [
    "LNG flow metering Kuwait",
    "LNG custody transfer solutions",
    "LNG CEMS monitoring",
    "LNG gas analyzers",
    "industrial automation LNG plants",
  ],
  openGraph: {
    title: "LNG Industry Solutions | Texas Technical Services",
    description:
      "Cutting-edge flow metering, flow computers, and analyzers for LNG custody transfer and plant operations — backed by 18+ years of precision engineering.",
    url: "/industries/lng/",
  },
  twitter: {
    card: "summary_large_image",
    title: "LNG Industry Solutions | Texas Technical Services",
    description:
      "Cutting-edge flow metering, flow computers, and analyzers for LNG custody transfer and plant operations — backed by 18+ years of precision engineering.",
  },
};

const products: IndustryProduct[] = [
  {
    category: "CEMS",
    name: "CEMS Solutions",
    slug: "cems-solutions",
    image: "/cems.png",
    brand: "SICK",
    desc: "SICK CEMS solutions for LNG facility emissions monitoring — measuring combustion gases, BOG (boil-off gas) venting, and process emissions to meet stringent environmental regulations at LNG terminals and plants.",
  },
  {
    category: "Metering Skid",
    name: "Flow Metering Skid",
    slug: "flow-metering-skid",
    image: "/flow_metering_skid.jpg",
    brand: "SICK · FLOWSKID",
    desc: "FLOWSKID turnkey gas metering packages for LNG send-out and custody transfer — factory-assembled and tested skids that withstand the cryogenic and high-pressure conditions unique to LNG operations.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Liquid Flow Meter",
    slug: "ultrasonic-liquid-flow-meter",
    image: "/ultrasonic_liquid_flow_meter.png",
    brand: "FH Sonic",
    desc: "High-accuracy multi-path ultrasonic flowmeter for LNG custody transfer — engineered for cryogenic liquid service at temperatures as low as -162 °C, delivering the precision required at ship loading and unloading terminals.",
  },
  {
    category: "Flow Meter",
    name: "Ultrasonic Gas Flow Meter",
    slug: "ultrasonic-gas-flow-meter",
    image: "/ultrasonic_gas_flow_meter.jpg",
    brand: "FH83NEO",
    desc: "Full-bore ultrasonic gas measurement for LNG send-out, regasification, and distribution — no pressure drop, no moving parts, and proven accuracy for natural gas and BOG streams at LNG facilities.",
  },
  {
    category: "Flow Meter",
    name: "Flare Meter",
    slug: "flare-meter",
    image: "/flare_meter.png",
    brand: "SICK",
    desc: "Ultrasonic flare measurement for LNG plant safety and environmental reporting — handling the highly variable flow rates and gas compositions in LNG flare headers from near-zero to over 120 m/s.",
  },
  {
    category: "Flow Meter",
    name: "Custody Transfer Gas Flow Meter",
    slug: "custody-transfer-gas-flow-meter",
    image: "/custody_transfer_gas_flow_meter.png",
    brand: "SICK",
    desc: "Fiscal-grade gas flow measurement for LNG send-out and regas custody points — where billing accuracy is critical and the economic stakes of even small measurement errors are substantial.",
  },
  {
    category: "Flow Meter",
    name: "Non-Custody Transfer Gas Flow Meter",
    slug: "non-custody-transfer-gas-flow-meter",
    image: "/non_custody_transfer_gas_flow_meter.jpg",
    brand: "SICK",
    desc: "Reliable gas flow measurement for internal LNG plant use — monitoring fuel gas, BOG recycle, and utility streams to optimise plant performance and support energy balance calculations.",
  },
  {
    category: "Flow Meter",
    name: "Clamp ON Meter",
    slug: "clamp-on-meter",
    image: "/clamp_on_meter.png",
    brand: "Ultraflux · Minisonic P",
    desc: "Portable non-invasive flowmeter for LNG facility maintenance checks and commissioning verification — measure pipeline flows without process interruption across gas, liquid, and cryogenic service lines.",
  },
  {
    category: "Flow Computer",
    name: "Flow Computer",
    slug: "flow-computer",
    image: "/flow_computer.png",
    brand: "OMNI · 4000/7000 Series",
    desc: "OMNI flow computers for LNG custody and allocation metering — supporting ISO 6976 calorific value calculations and AGA standards to accurately determine energy content for billing in LNG trade.",
  },
  {
    category: "Gas Analyzer",
    name: "Gas Analyzers",
    slug: "gas-analyzers",
    image: "/gas_analyzer.png",
    brand: "SICK",
    desc: "In-situ and extractive gas analyzers for LNG plant process control — monitoring natural gas composition, BOG quality, and combustion efficiency to optimise liquefaction and regasification processes.",
  },
  {
    category: "Gas Analyzer",
    name: "Extractive Gas Analyzers",
    slug: "extractive-gas-analyzers",
    image: "/extractive_gas_analyzer.jpg",
    brand: "SICK",
    desc: "Continuous extractive gas analysis for LNG terminal stacks and process streams — reliable measurement under the demanding pressure and temperature conditions found in liquefaction and regasification trains.",
  },
];

const categoryColors: CategoryColors = {
  "CEMS":          "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Metering Skid": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "Flow Meter":    "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Flow Computer": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "Gas Analyzer":  "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

export default function LngPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Industries", href: "/industries/" },
        { name: "LNG", href: "/industries/lng/" },
      ]} />
      <IndustryHero
        name="LNG"
        breadcrumbLabel="LNG"
        image="/lng.jpg"
        alt="LNG plant facility"
        Icon={Snowflake}
        description="Cutting-edge flow metering, analyzers, and process automation solutions for LNG plant operations — ensuring precise measurement, efficiency, and safety across liquefaction, storage, and regasification processes."
        tags={["Custody Transfer", "Liquefaction", "Regasification", "BOG Metering", "CEMS"]}
        stats={[
          { num: "11", label: "Products" },
          { num: "5+", label: "OEM Brands" },
          { num: "18+", label: "Years" },
        ]}
        highlights={[
          { icon: Thermometer, text: "Cryogenic Metering" },
          { icon: Shield, text: "BOG Measurement" },
          { icon: Clock, text: "Safety Systems" },
        ]}
      />
      <IndustryProductsGrid
        title="Solutions for LNG"
        products={products}
        categoryColors={categoryColors}
      />
      <IndustryCtaBanner
        heading="Have an LNG project?"
        subtext="Talk to our specialists about your LNG flow measurement, custody transfer, or automation requirements. Kuwait and Dubai offices ready to help."
      />
    </>
  );
}
