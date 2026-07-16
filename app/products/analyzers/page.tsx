import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ChevronRight, Beaker, Wind, Activity, Droplet, Leaf, Gauge, ShieldCheck, Waves } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Analyzers - Gas Analysis, CEMS & Process Analyzers | Texas Technical Services",
  description:
    "SICK, Endress+Hauser, and Kurz Instruments analyzers — gas chromatographs, CEMS, gas analyzers, laser TDLAS analyzers, water analyzers, environmental monitoring, and steam quality analyzers. QAL1 & MCERTS certified.",
  alternates: { canonical: "/products/analyzers/" },
  keywords: [
    "gas analyzers Kuwait",
    "CEMS emissions monitoring",
    "dust analyzers SICK",
    "in-situ gas analysis",
    "industrial process analyzers",
    "Endress Hauser CEMS Kuwait",
    "FLOWSIC ultrasonic gas meter",
    "QAL1 MCERTS certified",
    "laser gas analyzer TDLAS",
    "gas chromatograph Kuwait",
    "online process analyzer",
    "steam quality analyzer",
    "continuous water analyzer",
    "DUSTHUNTER",
  ],
  openGraph: {
    title: "Analyzers - Gas Analysis, CEMS & Process | Texas Technical Services",
    description:
      "7 categories of analyzers from SICK, Endress+Hauser, and Kurz — including gas chromatographs, CEMS, laser TDLAS, water analyzers, and environmental monitoring.",
    url: "/products/analyzers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analyzers - Texas Technical Services",
    description:
      "Gas chromatographs, CEMS, laser gas analyzers, online process analyzers, water analyzers, and environmental monitoring.",
  },
};

const ANALYZER_TYPES = [
  {
    Icon: Beaker,
    title: "Gas Chromatographs",
    body: "Precise separation and compositional analysis of complex gas mixtures.",
  },
  {
    Icon: Wind,
    title: "Gas Analyzers (CEMS)",
    body: "Continuous Emission Monitoring Systems for strict regulatory compliance.",
  },
  {
    Icon: Activity,
    title: "Online Process Analyzers",
    body: "Real-time chemical composition analysis for process optimization and control.",
  },
  {
    Icon: Gauge,
    title: "Laser Gas Analyzers",
    body: "High-precision TDLAS technology for fast and interference-free measurements.",
  },
  {
    Icon: Droplet,
    title: "Continuous Water Analyzers",
    body: "Monitoring water quality parameters for industrial efficiency and safety.",
  },
  {
    Icon: Leaf,
    title: "Environmental Monitoring",
    body: "Comprehensive solutions for ambient air, water, and soil quality assessment.",
  },
  {
    Icon: Waves,
    title: "Steam Quality Analyzers",
    body: "Critical measurement of dryness fraction for energy efficiency monitoring.",
  },
];

const EH_CATEGORIES = [
  {
    title: "Gas Flow Measurement",
    sub: "Ultrasonic & Custody Transfer",
    models: ["FLOWSIC600-XT", "FLOWSIC550", "FLOWSIC100-XT"],
    benefit:
      "Maintenance-free ultrasonic technology with high accuracy for fiscal metering and harsh environments.",
  },
  {
    title: "CEMS & Process Analysis",
    sub: "Emissions Monitoring Systems",
    models: [
      "MCS300P",
      "MCS100/200",
      "GHG-Control",
      "MEAC",
      "GMS800 FIDOR",
      "GM32 (In-situ)",
      "TRANSIC100LP",
      "ZIRKOR O2",
    ],
    benefit:
      "Complete solutions for regulatory compliance (QAL1/MCERTS) measuring NOx, SO2, CO, O2, and hydrocarbons.",
  },
  {
    title: "Dust & Opacity",
    sub: "Particulate Measurement",
    models: [
      "DUSTHUNTER T",
      "DUSTHUNTER S/SP",
      "DUSTHUNTER C200",
      "FW300 Ex",
      "GRAVIMAT",
      "Filter Monitors",
    ],
    benefit:
      "Reliable dust concentration measurement for emission control and filter monitoring in all industrial processes.",
  },
];

const COMPLIANCE = [
  { Icon: ShieldCheck, label: "QAL1 & MCERTS Certified" },
  { Icon: ShieldCheck, label: "Ex / Hazardous Area Versions" },
  { Icon: ShieldCheck, label: "Complete System Solutions" },
];

export default function AnalyzersPage() {
  const analyzersProducts = getProductsByPath("/products/analyzers/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Analyzers", href: "/products/analyzers/" },
      ]} />
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#e7212b]">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
          }}
        />
        {/* Orange radial glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(231,33,43,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Analyzers</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              SICK · Gas Analysis
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            Analyzers
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            Emissions Monitoring, Dust &amp; Gas Analysis Solutions
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Analytical Instrumentation
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Seven categories of process and emissions analyzers from world-class
            OEMs (SICK, Endress+Hauser, and Kurz Instruments) — covering
            compositional analysis, CEMS, laser TDLAS, water quality, and steam
            quality for the most demanding industrial applications.
          </p>
        </div>
      </section>

      {/* ── 7 Analyzer Types Grid ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
              Our Solutions
            </span>
            <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
              Seven Analyzer Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ANALYZER_TYPES.map((a) => (
              <div
                key={a.title}
                className="rounded-xl bg-white border border-[#E8E8F0] p-5 hover:border-[#F5821F]/30 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5821F]/10 flex items-center justify-center mb-3">
                  <a.Icon className="w-5 h-5 text-[#F5821F]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[#1A1A2E] text-[14px] font-bold leading-tight mb-1.5">
                  {a.title}
                </h3>
                <p className="text-[#555770] text-[12.5px] leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Endress+Hauser CEMS Subsection ─────────────────────── */}
      <section className="bg-[#0B0D26] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
              Authorized Agent · Endress+Hauser
            </span>
            <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
              Gas Flow Meter, Analyzers &amp; CEMS
            </h2>
            <p className="text-white/55 text-[14px] mt-3 max-w-2xl mx-auto">
              Precision measurement for process &amp; environmental compliance —
              with QAL1/MCERTS certified solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {EH_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 flex flex-col"
              >
                <div className="mb-3">
                  <h3 className="text-white text-[16px] font-bold">{cat.title}</h3>
                  <p className="text-white/55 text-[11px] mt-1 font-semibold tracking-wide uppercase">
                    {cat.sub}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cat.models.map((m) => (
                    <span
                      key={m}
                      className="rounded bg-white/5 border border-white/10 px-2 py-1 text-white/80 text-[10.5px] font-mono"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-[10px] font-semibold tracking-[2px] uppercase text-[#F5821F]">
                    Key Benefit
                  </p>
                  <p className="text-white/65 text-[12.5px] mt-1.5 leading-relaxed">
                    {cat.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {COMPLIANCE.map((c) => (
              <div
                key={c.label}
                className="rounded-lg border border-[#F5821F]/30 bg-[#F5821F]/8 px-4 py-2.5 flex items-center gap-2.5"
              >
                <c.Icon className="w-4 h-4 text-[#F5821F]" strokeWidth={2} />
                <span className="text-white text-[12.5px] font-semibold">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {analyzersProducts.map((prod, index) => {
              const cardHref =
                prod.slug === "cems"
                  ? "/products/analyzers/cems/"
                  : prod.slug === "dust-analyzers"
                    ? "/products/analyzers/dust-analyzers/"
                    : prod.slug === "gas-analyzers"
                      ? "/products/analyzers/gas-analyzers/"
                      : undefined;
              return (
                <React.Fragment key={prod.slug}>
                  <ProductCard
                    product={prod}
                    category="Analyzers"
                    href={cardHref}
                  />
                  
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#e7212b] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-[22px] mb-1">
                Need help selecting the right gas analyzer?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our gas analysis specialists can help you choose and configure the right
                CEMS, dust analyzer, or gas analyzer for your emissions monitoring and
                process control requirements.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#e7212b]/20 transition-all duration-200"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
