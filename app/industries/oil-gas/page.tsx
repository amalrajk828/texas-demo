import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { Flame, ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Oil & Gas Industry Solutions | Texas Technical Services",
  description:
    "Texas Technical Services delivers precision flow metering, CEMS, analyzers, and industrial automation solutions for the oil & gas industry — upstream, midstream, and downstream.",
  alternates: { canonical: "https://texastechserv.com/industries/oil-gas/" },
  openGraph: {
    title: "Oil & Gas Industry Solutions | Texas Technical Services",
    description:
      "From flow computers to ultrasonic meters and gas analyzers — complete OEM solutions for the oil & gas sector.",
    url: "https://texastechserv.com/industries/oil-gas/",
  },
};

const products = [
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

const categoryColors: Record<string, string> = {
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
      {/* ══ HERO — full-bleed image ════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[480px] flex items-end">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/oil_and_gas.jpg"
            alt="Oil & Gas industrial facility"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* layered overlays for depth */}
          <div className="absolute inset-0 bg-[#0B0D26]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26] via-[#0B0D26]/40 to-transparent" />
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-8 text-[11px] text-white/35 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <Link href="/industries/" className="hover:text-white/70 transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-white/60">Oil &amp; Gas</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
            {/* Left */}
            <div className="flex-1 max-w-2xl">
              {/* Icon + eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#e7212b] rounded-lg flex items-center justify-center shadow-lg shrink-0">
                  <Flame className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
                  Industry Solutions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-medium text-white leading-[1.15] mb-5">
                Oil &amp; Gas
                <br />
                <em className="not-italic text-[#e7212b]">Industry</em>
              </h1>

              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
                Comprehensive OEM solutions tailored to the unique needs of the oil and gas
                industries — from advanced flow metering and precision analyzers to industrial
                automation for upstream, midstream, and downstream operations.
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2">
                {["Upstream", "Midstream", "Downstream", "Custody Transfer", "CEMS"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-white/55 tracking-wide border border-white/15 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — quick stats */}
            <div className="flex flex-row lg:flex-col gap-3 shrink-0">
              {[
                { num: "13", label: "Products" },
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

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-px bg-[#e7212b]/40" />
                <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                  Our Product Range
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#0B0D26]">
                Solutions for Oil &amp; Gas
              </h2>
            </div>
            <span className="text-gray-400 text-[12px] shrink-0 pb-1">
              {products.length} products available
            </span>
          </div>

          {/* Grid */}
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
            Have an oil &amp; gas project?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Talk to our specialists about your flow measurement, CEMS, or automation
            requirements. Kuwait and Dubai offices ready to help.
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
