import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { Zap, ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Power Plant Industry Solutions | Texas Technical Services",
  description:
    "Texas Technical Services delivers CEMS, flow meters, flow computers, analyzers, and industrial process automation systems for power plants — optimising performance, emissions monitoring, and operational efficiency.",
  alternates: { canonical: "https://texastechserv.com/industries/power-plant/" },
  openGraph: {
    title: "Power Plant Industry Solutions | Texas Technical Services",
    description:
      "Comprehensive OEM solutions for power generation — CEMS, flow meters, analyzers, and automation systems backed by 15+ years of industrial expertise.",
    url: "https://texastechserv.com/industries/power-plant/",
  },
};

const products = [
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

const categoryColors: Record<string, string> = {
  "CEMS":          "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Metering Skid": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "Flow Meter":    "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Flow Computer": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "Gas Analyzer":  "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

export default function PowerPlantPage() {
  return (
    <>
      {/* ══ HERO — full-bleed image ════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[480px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/power_plant.jpg"
            alt="Power plant facility"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B0D26]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26] via-[#0B0D26]/40 to-transparent" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-28">
          <nav className="flex items-center gap-1.5 mb-8 text-[11px] text-white/35 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <Link href="/industries/" className="hover:text-white/70 transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-white/60">Power Plant</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#e7212b] rounded-lg flex items-center justify-center shadow-lg shrink-0">
                  <Zap className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
                  Industry Solutions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-medium text-white leading-[1.15] mb-5">
                Power Plant
                <br />
                <em className="not-italic text-[#e7212b]">Industry</em>
              </h1>

              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
                Comprehensive OEM solutions for power generation — CEMS, flow meters, flow
                computers, analyzers, and industrial process automation systems that optimise
                performance, emissions monitoring, and operational efficiency.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Generation", "Emissions Monitoring", "Fuel Metering", "CEMS", "Grid"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-white/55 tracking-wide border border-white/15 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-row lg:flex-col gap-3 shrink-0">
              {[
                { num: "11", label: "Products" },
                { num: "5+", label: "OEM Brands" },
                { num: "15+", label: "Years" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-5 py-4 text-center min-w-[88px]"
                >
                  <p className="text-2xl font-medium text-[#e7212b]">{s.num}</p>
                  <p className="text-[10px] text-white/30 mt-1 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS GRID ═════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-px bg-[#e7212b]/40" />
                <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                  Our Product Range
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#0B0D26]">
                Solutions for Power Plant
              </h2>
            </div>
            <span className="text-gray-400 text-[12px] shrink-0 pb-1">
              {products.length} products available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((prod, i) => (
              <ProductCard
                key={prod.slug}
                product={prod}
                badgeClassName={categoryColors[prod.category]}
                className={`d${(i % 3) + 1}`}
                theme="industry"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════ */}
      <section className="bg-[#0B0D26] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
              Get in touch
            </span>
            <span className="w-8 h-px bg-[#e7212b]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Have a power plant project?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Talk to our specialists about your CEMS, flow measurement, or process
            automation requirements. Kuwait and Dubai offices ready to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industries/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              All Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
