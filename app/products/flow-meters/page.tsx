import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ChevronRight, Beaker, Scale, Activity, Waves, Flame, Cog, Droplet, Wind, Thermometer } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Flow Meters - Texas Technical Services",
  description:
    "Precision flow measurement instruments for liquids, gases, and flare applications from SICK, Faure Herman, KEM Küppers, Endress+Hauser, Tek-Trol, and more — custody transfer and process monitoring solutions.",
  alternates: { canonical: "/products/flow-meters/" },
  keywords: [
    "flow meters Kuwait",
    "ultrasonic flow meters",
    "SICK flow meters",
    "Faure Herman flow meters",
    "KEM Kuppers flow meter",
    "Endress Hauser flow meter",
    "Tek-Trol flow meter",
    "custody transfer flow measurement",
    "Coriolis flow meter Kuwait",
    "V-Cone flow element",
    "turbine flow meter",
    "flare gas meter",
    "thermal mass flow meter",
  ],
  openGraph: {
    title: "Flow Meters - Texas Technical Services",
    description:
      "Comprehensive flow technologies & applications — Coriolis, ultrasonic, turbine, electromagnetic, V-Cone, PD, thermal mass, and flare gas meters from 5 world-class OEMs.",
    url: "/products/flow-meters/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Meters - Texas Technical Services",
    description:
      "Comprehensive flow technologies & applications from 5 world-class OEMs — custody transfer and process measurement.",
  },
};

const CUSTODY_TRANSFER = [
  {
    Icon: Scale,
    title: "Custody Metering Skid",
    body: "Advanced flow computing and integrated metering systems for accurate fiscal measurement.",
  },
  {
    Icon: Beaker,
    title: "Provers & Accessories",
    body: "Large capacity SVP, bidirectional and unidirectional provers for pipeline applications.",
  },
  {
    Icon: Activity,
    title: "Integrated Metering Control System",
    body: "Comprehensive metering control systems proving and calibration solutions ensuring measurement integrity.",
  },
  {
    Icon: Beaker,
    title: "Automatic Sampling System",
    body: "Representative sampling systems for accurate product quality determination.",
  },
  {
    Icon: Cog,
    title: "Flow Computer",
    body: "Real-time flow computer integration with OMNI 4000/7000 and SICK Flow-X for batch tracking and reporting.",
  },
  {
    Icon: Scale,
    title: "Uncertainty Calculations & Audit",
    body: "We offer audits and inspections of your existing installations — on-site expert verification ensuring fiscal accuracy.",
  },
];

const FLOW_TECHNOLOGIES = [
  {
    Icon: Cog,
    title: "Turbine Flow Meters",
    body: "Volumetric flow measurement for clean liquids.",
  },
  {
    Icon: Cog,
    title: "PD (Positive Displacement)",
    body: "High precision volumetric measurement for viscous fluids.",
  },
  {
    Icon: Waves,
    title: "Ultrasonic Flow Meter",
    body: "Non-intrusive inline or clamp-on measurement technology.",
  },
  {
    Icon: Flame,
    title: "Flare Gas Meters",
    body: "Precise gas measurement for flare stacks & compliance.",
  },
  {
    Icon: Activity,
    title: "Coriolis Mass Flowmeters",
    body: "Direct mass flow density measurement with high accuracy.",
  },
  {
    Icon: Droplet,
    title: "Electromagnetic Flowmeters",
    body: "Reliable flow measurement for conductive liquids.",
  },
  {
    Icon: Thermometer,
    title: "V-Cone & Flow Elements",
    body: "Venturi, Annubar, Orifice & V-Cone for DP measurement.",
  },
  {
    Icon: Wind,
    title: "Thermal Mass Flowmeters",
    body: "Direct gas mass flow measurement without compensation.",
  },
];

const AUTHORIZED_SOLUTIONS = [
  "Faure Herman",
  "Rockwin",
  "Tek-Trol",
  "Endress+Hauser",
  "KEM Küppers",
];

const KEM_PRODUCTS = [
  {
    title: "TRICOR Coriolis",
    body: "Mass Flow Meters offering exceptional accuracy for critical process applications.",
  },
  {
    title: "Helical Flow Meters",
    body: "SRZ Series designed for high-viscosity fluids with low pressure drop.",
  },
  {
    title: "Gear Flow Meters",
    body: "ZHM Series offering high precision positive displacement measurement.",
  },
  {
    title: "Turbine Flow Meters",
    body: "HM F Series providing reliable flow measurement for low viscosity liquids.",
  },
  {
    title: "Variable Area",
    body: "Robust flow meters offering direct visual indication without power requirement.",
  },
  {
    title: "Chemical Injection",
    body: "VFF Meters specifically engineered for precise low-flow chemical injection.",
  },
];

const METER_ENGINEERS_PROVERS = [
  {
    title: "High-Volume Bidirectional Sphere-Type Provers",
    body: "Industry standard for large volume liquid metering verification.",
  },
  {
    title: "High-Volume Unidirectional Sphere-Type Provers",
    body: "Continuous flow verification with zero flow interruption.",
  },
  {
    title: "Small-Volume Piston Meter Provers (MagnaProve)",
    body: "Compact, high-precision piston technology for space-constrained sites.",
  },
  {
    title: "Compact Prover Systems",
    body: "Portable or fixed solutions requiring minimal footprint.",
  },
  {
    title: "Mobile Prover Systems",
    body: "Truck-mounted units for multi-site calibration flexibility.",
  },
];

const METER_ENGINEERS_SERVICES = [
  "Meter Proving & Calibration Services",
  "Prover Accessories & Components (detector switches, spheres, seals, 4-way diverter valves)",
  "Prover Drive System Retrofit",
  "Automated Sampler Systems",
  "Calibration Certification Services",
];

const FH_LAB_STATS = [
  { num: "100+", label: "Years of Flow Experience" },
  { num: "0.1%", label: "Calibration Accuracy" },
  { num: "ISO 17025", label: "COFRAC / ILAC Accredited" },
];

const FH_LAB_PILLARS = [
  {
    title: "Accredited Metrology",
    body: "Real Fluid Testing, Master Meter certification & traceability, ISO/IEC 17025 accredited benches, wide range of viscosity/temperature/pipe dimensions reproduced.",
  },
  {
    title: "Engineering & Lifecycle",
    body: "Diagnostics & uncertainty analysis, viscosity & temperature profiling, overhaul & refurbishment, firmware updates & spare parts supply.",
  },
  {
    title: "Compliance & Consulting",
    body: "Custody transfer legal metrology consulting, meter sizing & application studies, prover loops calibration, and full digital certificates & test reports.",
  },
];

const FH_LAB_ACCREDITATIONS = [
  { name: "ISO/IEC 17025", desc: "COFRAC / ILAC Accredited" },
  { name: "ISO 9001:2015", desc: "Quality Management" },
  { name: "API Standards", desc: "MPMS Compliance" },
  { name: "MID / OIML", desc: "Legal Metrology" },
];

export default function FlowMetersPage() {
  const flowMetersProducts = getProductsByPath("/products/flow-meters/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Flow Meters", href: "/products/flow-meters/" },
      ]} />
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#F5821F]">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(245,130,31,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link
              href="/products"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Flow Meters</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              Flow Measurement
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            Flow Meters
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            Liquid, Gas &amp; Flare Flow Measurement Solutions
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Flow Measurement Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5821F] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Flow measurement technology finds applications across various
            industries, and our authorized principals — SICK, Faure Herman,
            KEM Küppers, Endress+Hauser, Tek-Trol, and Rockwin — are well
            equipped to address this diverse challenge. Whether it&apos;s
            custody transfer meters or devices for monitoring and control,
            our flow measurement technology consistently operates with utmost
            safety and reliability.
          </p>
        </div>
      </section>

      {/* ── Custody Transfer Metering Section ─────────────────── */}
      <section className="bg-[#0B0D26] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
              Precision Metering
            </span>
            <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
              Custody Transfer Metering
            </h2>
            <p className="text-white/55 text-[14px] mt-3 max-w-2xl mx-auto">
              Fiscal metering, calibration &amp; verification systems — built
              to API MPMS and OIML standards for oil &amp; gas, refinery, and
              pipeline applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CUSTODY_TRANSFER.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#F5821F]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5821F]/10 flex items-center justify-center mb-3">
                  <c.Icon className="w-5 h-5 text-[#F5821F]" strokeWidth={1.8} />
                </div>
                <h3 className="text-white text-[15px] font-bold leading-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-white/55 text-[12.5px] leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/40 text-[10px] font-semibold tracking-[3px] uppercase">
              ── Approved Vendors ──
            </p>
          </div>
        </div>
      </section>

      {/* ── Flow Technologies Section ──────────────────────────── */}
      <section className="bg-[#F8F9FA] py-16 lg:py-20 border-t border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
              Our Solutions
            </span>
            <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
              Flow Measurement Technologies
            </h2>
            <p className="text-[#555770] text-[14px] mt-3 max-w-2xl mx-auto">
              Comprehensive flow technologies &amp; applications — eight
              measurement principles covering every custody transfer and
              process application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FLOW_TECHNOLOGIES.map((t) => (
              <div
                key={t.title}
                className="rounded-xl bg-white border border-[#E8E8F0] p-5 hover:border-[#F5821F]/30 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5821F]/10 flex items-center justify-center mb-3">
                  <t.Icon className="w-5 h-5 text-[#F5821F]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[#1A1A2E] text-[14px] font-bold leading-tight mb-1.5">
                  {t.title}
                </h3>
                <p className="text-[#555770] text-[12.5px] leading-relaxed">
                  {t.body}
                </p>
              </div>
            ))}
          </div>

          {/* Authorized Solutions */}
          <div className="mt-14">
            <div className="text-center mb-6">
              <p className="text-[#555770] text-[10px] font-semibold tracking-[3px] uppercase">
                ── Authorized Solutions ──
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {AUTHORIZED_SOLUTIONS.map((s) => (
                <span
                  key={s}
                  className="rounded-lg bg-white border border-[#E8E8F0] px-5 py-2.5 text-[#1A1A2E] text-[13px] font-semibold tracking-wide"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KEM Küppers Section ─────────────────────────────── */}
      <section className="bg-white py-14 border-t border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
              Authorized Agent · KEM Küppers Germany
            </span>
            <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
              Precision Flow Measurement Technology
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {KEM_PRODUCTS.map((p) => (
              <div
                key={p.title}
                className="rounded-xl bg-[#F8F9FA] border border-[#E8E8F0] p-5"
              >
                <h3 className="text-[#1A1A2E] text-[15px] font-bold leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-[#555770] text-[12.5px] leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] font-semibold text-[#F5821F] tracking-[2px] uppercase mr-2">
              Key Applications:
            </span>
            {["Custody Transfer", "Process Control", "Chemical Injection"].map((a) => (
              <span
                key={a}
                className="rounded-full bg-[#F8F9FA] border border-[#E8E8F0] px-3 py-1 text-[12px] text-[#555770] font-medium"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meter Engineers Proving Systems ─────────────────────── */}
      <section className="bg-[#0B0D26] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
              Authorized Agent · Meter Engineers USA
            </span>
            <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
              Meter Proving &amp; Calibration Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#F5821F] text-[14px] font-bold tracking-wide uppercase mb-4">
                Proving Systems — High Accuracy Verification
              </h3>
              <ul className="space-y-3">
                {METER_ENGINEERS_PROVERS.map((p) => (
                  <li
                    key={p.title}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-white text-[14px] font-bold">{p.title}</p>
                    <p className="text-white/55 text-[12.5px] mt-1">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#F5821F] text-[14px] font-bold tracking-wide uppercase mb-4">
                Services &amp; Equipment
              </h3>
              <ul className="space-y-3">
                {METER_ENGINEERS_SERVICES.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-4"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5821F] shrink-0 mt-2" />
                    <span className="text-white/80 text-[13.5px] leading-snug">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-semibold text-[#F5821F] tracking-[2px] uppercase">
                  Key Applications:
                </span>
                {[
                  "Custody Transfer",
                  "Fiscal Metering",
                  "Pipeline Accuracy",
                  "Refinery Proving",
                  "Terminal Operations",
                ].map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/70 text-[11.5px] font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FH Lab Services Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-16 border-t border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
              Calibration Excellence · Faure Herman
            </span>
            <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
              FH Lab Services
            </h2>
            <p className="text-[#555770] text-[14px] mt-2 max-w-2xl mx-auto">
              ISO 17025 Accredited Laboratory · Real Conditions Calibration ·
              Global Support
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
            {FH_LAB_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[#E8E8F0] bg-white p-5 text-center"
              >
                <p className="text-[#F5821F] text-2xl font-black leading-none">
                  {s.num}
                </p>
                <p className="text-[#1A1A2E] text-[12px] mt-2 font-semibold tracking-wide uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {FH_LAB_PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-xl bg-white border border-[#E8E8F0] p-5"
              >
                <h3 className="text-[#1A1A2E] text-[15px] font-bold leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-[#555770] text-[12.5px] leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {FH_LAB_ACCREDITATIONS.map((a) => (
              <div
                key={a.name}
                className="rounded-lg border border-[#E8E8F0] bg-white px-4 py-2.5 text-center"
              >
                <p className="text-[#1A1A2E] text-[12px] font-bold">{a.name}</p>
                <p className="text-[#555770] text-[10px] mt-0.5">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
          <div className="flex flex-col">
            {flowMetersProducts.map((prod, index) => {
              const cardHref =
                prod.slug === "liquid-flow-meters"
                  ? "/products/flow-meters/liquid-flow-meters/"
                  : prod.slug === "flare-meters"
                    ? "/products/flow-meters/flare-meters/"
                    : prod.slug === "gas-flow-meters"
                      ? "/products/flow-meters/gas-flow-meters/"
                      : undefined;
              return (
                <React.Fragment key={prod.slug}>
                  <ProductCard
                    product={prod}
                    category="Flow Meters"
                    href={cardHref}
                  />
                  {index < flowMetersProducts.length - 1 && (
                    <div className="border-t border-[#E8E8F0] my-[10px]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#F5821F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-[22px] mb-1">
                Need help selecting the right flow meter?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our flow measurement specialists can help you choose and
                configure the right liquid, gas, or flare flow meter for your
                application.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#F5821F] hover:bg-[#e07214] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#F5821F]/20 transition-all duration-200"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
