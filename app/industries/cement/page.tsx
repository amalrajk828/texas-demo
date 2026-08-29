import type { Metadata } from "next";
import { Building2, Flame, Shield, CheckCircle, ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { industryFaqData } from "@/lib/industryFaqData";
import IndustryHero from "@/components/industries/IndustryHero";
import IndustryProductsGrid from "@/components/industries/IndustryProductsGrid";
import type { CategoryColors, IndustryProduct } from "@/components/industries/types";

export const metadata: Metadata = {
  title: "Cement Industry Solutions",
  description:
    "Texas Technical Services delivers CEMS, gas analyzers, and extractive gas analyzers for the cement industry — optimising emissions monitoring, quality control, and operational excellence.",
  alternates: { canonical: "/industries/cement/" },
  keywords: [
    "cement industry CEMS",
    "cement gas analyzers Kuwait",
    "cement emissions monitoring",
    "extractive gas analyzer cement",
    "industrial automation cement manufacturing",
    "cement plant instrumentation GCC",
    "kiln process control Kuwait",
    "cement production automation Dubai",
    "raw mill emissions monitoring",
    "cement plant safety systems GCC",
  ],
  openGraph: {
    title: "Cement Industry Solutions",
    description:
      "Advanced OEM analyzer and CEMS solutions for cement manufacturing — backed by 18+ years of industrial expertise.",
    url: "/industries/cement/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cement Industry Solutions",
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
      <SpeakableJsonLd headline="Cement Industry Solutions" cssSelector={["h2", "p"]} />
      <IndustryHero
        name="Cement"
        breadcrumbLabel="Cement"
        image="/cement_industry.jpg"
        alt="Cement manufacturing plant"
        Icon={Building2}
        description="Advanced OEM analyzer and CEMS solutions for cement manufacturing — optimising emissions monitoring, quality control, and operational excellence from raw mill to kiln and clinker cooler."
        tags={["Emissions Monitoring", "Kiln Control", "Quality Control", "CEMS", "BAT Compliance"]}
        stats={[
          { num: "3", label: "Products" },
          { num: "1+", label: "OEM Brand" },
          { num: "18+", label: "Years" },
        ]}
        highlights={[
          { icon: Flame, text: "Kiln Control" },
          { icon: Shield, text: "BAT Compliance" },
          { icon: CheckCircle, text: "Emissions Monitoring" },
        ]}
      />
      <IndustryProductsGrid
        title="Solutions for Cement"
        products={products}
        categoryColors={categoryColors}
      />
      <FaqPageJsonLd items={industryFaqData["cement"]} />
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
            <em className="not-italic text-[#e7212b]">Cement</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {industryFaqData["cement"]?.map((item) => (
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
