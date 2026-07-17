import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Gas Analyzers - Texas Technical Services",
  description:
    "SICK in-situ and extractive gas analyzers for real-time gas analysis directly within industrial processes — GM32 and GM35 for emissions monitoring and process control.",
  alternates: { canonical: "/products/analyzers/gas-analyzers/" },
  keywords: [
    "SICK gas analyzers Kuwait",
    "GM32 in-situ gas analyzer",
    "GM35 gas analyzer",
    "SO2 NO NO2 NH3 measurement",
  ],
  openGraph: {
    title: "Gas Analyzers - Texas Technical Services",
    description:
      "SICK in-situ and extractive gas analyzers for real-time process gas analysis.",
    url: "/products/analyzers/gas-analyzers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Analyzers - Texas Technical Services",
    description:
      "SICK in-situ and extractive gas analyzers for real-time process gas analysis.",
  },
};

export default function GasAnalyzersPage() {
  const gasAnalyzerProducts = getProductsByPath("/products/analyzers/gas-analyzers/");
  return (
    <div className="min-h-screen bg-[#0B0D26] font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products/" }, { name: "Analyzers", href: "/products/analyzers/" }, { name: "Gas Analyzers", href: "/products/analyzers/gas-analyzers/" }]} />
      <ProductPageHero
        breadcrumbLabel="Gas Analyzers"
        eyebrow="SICK · In-Situ Gas Analysis"
        title="Gas Analyzers"
        subtitle="In-Situ & Extractive Gas Analysis for Process & Emissions Monitoring"
        featured
        backgroundImage="/gas_analyzer.png"
        imagePosition="center center"
        stats={[
          { num: "2", label: "Types" },
          { num: "SICK", label: "OEM Brand" },
          { num: "18+", label: "Years" },
        ]}
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-[#0B0D26] py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-[28px] font-bold">
            Gas Analysis Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-white/60 text-base leading-relaxed">
            Real-time gas analysis directly within the process. Reliable measurement
            technology that allows the devices to be mounted directly at the measurement
            site: In-situ gas analyzers take measurements directly within the process
            under system conditions. These analyzers are primarily characterized by their
            very minimal maintenance requirements and extremely short response times.
          </p>
          <p className="text-white/60 text-base leading-relaxed mt-4">
            In-situ gas analyzers from SICK are available in two different versions:
          </p>
          <ul className="text-white/60 text-base leading-relaxed mt-3 text-left max-w-xl mx-auto space-y-2">
            <li className="flex gap-2">
              <span className="text-[#e7212b] font-bold shrink-0">•</span>
              <span>
                <strong>The cross-duct version</strong> for representative measurement
                results across the entire duct diameter
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#e7212b] font-bold shrink-0">•</span>
              <span>
                <strong>The measuring probe version</strong>, optimized for single-sided
                gas duct installation
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#0B0D26] py-14 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(231,33,43,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gasAnalyzerProducts.map((prod) => (
              <ProductCard
                key={prod.slug}
                product={prod}
                category="Gas Analyzers"
                imageFit="contain"
                dark
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] border-t-4 border-[#e7212b] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-[22px] mb-1">
                Need a gas analyzer for your process?
              </h3>
              <p className="text-white/60 text-sm">
                Our gas analysis specialists can help you select the right in-situ or
                extractive gas analyzer for your process monitoring and emissions compliance
                requirements.
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
