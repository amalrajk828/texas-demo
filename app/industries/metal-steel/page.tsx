import type { Metadata } from "next";
import { Layers, Shield, CheckCircle, Gauge, ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { industryFaqData } from "@/lib/industryFaqData";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryProductsGrid from "@/components/industries/IndustryProductsGrid";
import type { CategoryColors, IndustryProduct } from "@/components/industries/types";

export const metadata: Metadata = {
  title: "Metal & Steel Industry Solutions",
  description:
    "Texas Technical Services delivers CEMS, dust analyzers, gas analyzers, and extractive gas analyzers for the metal and steel industry — enhancing efficiency, quality control, and emissions monitoring.",
  alternates: { canonical: "/industries/metal-steel/" },
  keywords: [
    "metal and steel CEMS solutions",
    "metal industry dust analyzers",
    "steel plant gas analyzers Kuwait",
    "emissions monitoring metal production",
    "industrial automation steel manufacturing",
    "steel mill instrumentation GCC",
    "furnace process control Kuwait",
    "metal fabrication automation Dubai",
    "rolling mill control systems",
    "foundry emissions monitoring GCC",
  ],
  openGraph: {
    title: "Metal & Steel Industry Solutions",
    description:
      "Cutting-edge OEM analyzer and CEMS solutions for metal and steel production — backed by 18+ years of industrial expertise.",
    url: "/industries/metal-steel/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metal & Steel Industry Solutions",
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
      <SpeakableJsonLd headline="Metal & Steel Industry Solutions" cssSelector={["h2", "p"]} />
      <IndustryHero
        name="Metal & Steel"
        breadcrumbLabel="Metal & Steel"
        image="/metal_and_steel.jpg"
        alt="Metal and steel production facility"
        Icon={Layers}
        description="Cutting-edge OEM solutions engineered for the metal and steel industry — delivering CEMS, dust monitoring, and gas analysis to enhance efficiency, quality control, and emissions compliance across the production chain."
        tags={["Emissions Monitoring", "Dust Control", "Process Gases", "CEMS", "Quality Control"]}
        stats={[
          { num: "4", label: "Products" },
          { num: "1+", label: "OEM Brand" },
          { num: "18+", label: "Years" },
        ]}
        highlights={[
          { icon: Gauge, text: "Dust Control" },
          { icon: Shield, text: "Process Gas Analysis" },
          { icon: CheckCircle, text: "Quality Assurance" },
        ]}
      />
      <IndustryProductsGrid
        title="Solutions for Metal & Steel"
        products={products}
        categoryColors={categoryColors}
        gridLayout="2col"
      />
      <FaqPageJsonLd items={industryFaqData["metal-steel"]} />
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
            <em className="not-italic text-current">Metal & Steel</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {industryFaqData["metal-steel"]?.map((item) => (
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
