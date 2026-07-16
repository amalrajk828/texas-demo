import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryProductsGrid from "@/components/industries/IndustryProductsGrid";
import IndustryCtaBanner from "@/components/industries/IndustryCtaBanner";
import type { CategoryColors, IndustryProduct } from "@/components/industries/types";

export const metadata: Metadata = {
  title: "Cement Industry Solutions | Texas Technical Services",
  description:
    "Texas Technical Services delivers CEMS, gas analyzers, and extractive gas analyzers for the cement industry — optimising emissions monitoring, quality control, and operational excellence.",
  alternates: { canonical: "/industries/cement/" },
  keywords: [
    "cement industry CEMS",
    "cement gas analyzers Kuwait",
    "cement emissions monitoring",
    "extractive gas analyzer cement",
    "industrial automation cement manufacturing",
  ],
  openGraph: {
    title: "Cement Industry Solutions | Texas Technical Services",
    description:
      "Advanced OEM analyzer and CEMS solutions for cement manufacturing — backed by 18+ years of industrial expertise.",
    url: "/industries/cement/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cement Industry Solutions | Texas Technical Services",
    description:
      "Advanced OEM analyzer and CEMS solutions for cement manufacturing — backed by 18+ years of industrial expertise.",
  },
};

const products: IndustryProduct[] = [
  {
    category: "CEMS",
    name: "CEMS Solutions",
    slug: "cems-solutions",
    image: "/cems.png",
    brand: "SICK",
    desc: "SICK CEMS solutions tailored for cement kiln and clinker cooler stack emissions — continuously measuring NOₓ, SO₂, CO, HCl, HF, NH₃, dust, and O₂ to ensure compliance with environmental permit limits and IED/BAT requirements.",
  },
  {
    category: "Gas Analyzer",
    name: "Gas Analyzers",
    slug: "gas-analyzers",
    image: "/gas_analyzer.png",
    brand: "SICK",
    desc: "SICK gas analyzers using powerful in-situ and extractive measurement principles for cement process optimisation — monitoring kiln atmosphere, combustion gases, and preheater exit conditions to maximise fuel efficiency and clinker quality.",
  },
  {
    category: "Gas Analyzer",
    name: "Extractive Gas Analyzers",
    slug: "extractive-gas-analyzers",
    image: "/extractive_gas_analyzer.jpg",
    brand: "SICK",
    desc: "Reliable continuous extractive gas analysis for cement kiln stacks and raw mill exhausts under the harshest dust-laden, high-temperature conditions — conditioning the sample for precise, repeatable pollutant measurement independent of process upsets.",
  },
];

const categoryColors: CategoryColors = {
  "CEMS":         "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Gas Analyzer": "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

export default function CementPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries/" }, { name: "Cement", href: "/industries/cement/" }]} />
      <IndustryHero
        name="Cement"
        breadcrumbLabel="Cement"
        image="/cement_industry.jpg"
        alt="Cement manufacturing plant"
        Icon={Building2}
        description="Advanced OEM analyzer and CEMS solutions for cement manufacturing — optimising emissions monitoring, quality control, and operational excellence from raw mill to kiln and clinker cooler."
        tags={["Emissions Monitoring", "Kiln Control", "Quality Control", "CEMS", "BAT Compliance"]}
        stats={[
          { num: "3",   label: "Products" },
          { num: "1+",  label: "OEM Brand" },
          { num: "18+", label: "Years" },
        ]}
      />
      <IndustryProductsGrid
        title="Solutions for Cement"
        products={products}
        categoryColors={categoryColors}
      />
      <IndustryCtaBanner
        heading="Have a cement industry project?"
        subtext="Talk to our specialists about your CEMS or gas analysis requirements. Kuwait and Dubai offices ready to help."
      />
    </>
  );
}
