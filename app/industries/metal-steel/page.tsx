import type { Metadata } from "next";
import { Layers } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryProductsGrid from "@/components/industries/IndustryProductsGrid";
import IndustryCtaBanner from "@/components/industries/IndustryCtaBanner";
import type { CategoryColors, IndustryProduct } from "@/components/industries/types";

export const metadata: Metadata = {
  title: "Metal & Steel Industry Solutions | Texas Technical Services",
  description:
    "Texas Technical Services delivers CEMS, dust analyzers, gas analyzers, and extractive gas analyzers for the metal and steel industry — enhancing efficiency, quality control, and emissions monitoring.",
  alternates: { canonical: "/industries/metal-steel/" },
  keywords: [
    "metal and steel CEMS solutions",
    "metal industry dust analyzers",
    "steel plant gas analyzers Kuwait",
    "emissions monitoring metal production",
    "industrial automation steel manufacturing",
  ],
  openGraph: {
    title: "Metal & Steel Industry Solutions | Texas Technical Services",
    description:
      "Cutting-edge OEM analyzer and CEMS solutions for metal and steel production — backed by 18+ years of industrial expertise.",
    url: "/industries/metal-steel/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metal & Steel Industry Solutions | Texas Technical Services",
    description:
      "Cutting-edge OEM analyzer and CEMS solutions for metal and steel production — backed by 18+ years of industrial expertise.",
  },
};

const products: IndustryProduct[] = [
  {
    category: "CEMS",
    name: "CEMS Solutions",
    slug: "cems-solutions",
    image: "/cems.png",
    brand: "SICK",
    desc: "SICK CEMS solutions for continuous emissions monitoring at blast furnaces, electric arc furnaces, and sinter plants — measuring CO, NOₓ, SO₂, HCl, dust, and O₂ to meet stringent environmental regulations and IED permit conditions.",
  },
  {
    category: "Dust Analyzer",
    name: "Dust Analyzer",
    slug: "dust-analyzer",
    image: "/gas_analyzer.png",
    brand: "SICK",
    desc: "SICK sets new standards in dust measurement with rugged, low-maintenance devices for metal and steel facilities — detecting and monitoring dust concentrations at furnace exhausts, dedusting systems, and material handling points with minimal maintenance burden.",
  },
  {
    category: "Gas Analyzer",
    name: "Gas Analyzers",
    slug: "gas-analyzers",
    image: "/gas_analyzer.png",
    brand: "SICK",
    desc: "In-situ and extractive gas analyzers for metal and steel process control — monitoring blast furnace top gas, coke oven gas, and converter off-gas composition to optimise combustion, energy recovery, and product quality.",
  },
  {
    category: "Gas Analyzer",
    name: "Extractive Gas Analyzers",
    slug: "extractive-gas-analyzers",
    image: "/extractive_gas_analyzer.jpg",
    brand: "SICK",
    desc: "Reliable extractive gas analysis for metal and steel stacks and process ducts under extreme dust, temperature, and corrosion conditions — conditioning and analysing samples with consistent accuracy for regulatory reporting and process optimisation.",
  },
];

const categoryColors: CategoryColors = {
  "CEMS":          "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Dust Analyzer": "bg-sky-500/15 text-sky-400 border-sky-500/20",
  "Gas Analyzer":  "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

export default function MetalSteelPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries/" }, { name: "Metal & Steel", href: "/industries/metal-steel/" }]} />
      <IndustryHero
        name="Metal & Steel"
        breadcrumbLabel="Metal & Steel"
        image="/metal_and_steel.jpg"
        alt="Metal and steel production facility"
        Icon={Layers}
        description="Cutting-edge OEM solutions engineered for the metal and steel industry — delivering CEMS, dust monitoring, and gas analysis to enhance efficiency, quality control, and emissions compliance across the production chain."
        tags={["Emissions Monitoring", "Dust Control", "Process Gases", "CEMS", "Quality Control"]}
        stats={[
          { num: "4",   label: "Products" },
          { num: "1+",  label: "OEM Brand" },
          { num: "18+", label: "Years" },
        ]}
      />
      <IndustryProductsGrid
        title="Solutions for Metal & Steel"
        products={products}
        categoryColors={categoryColors}
        gridLayout="2col"
      />
      <IndustryCtaBanner
        heading="Have a metal & steel project?"
        subtext="Talk to our specialists about your CEMS, dust monitoring, or gas analysis requirements. Kuwait and Dubai offices ready to help."
      />
    </>
  );
}
