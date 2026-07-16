import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products/" }, { name: "Analyzers", href: "/products/analyzers/" }, { name: "Gas Analyzers", href: "/products/analyzers/gas-analyzers/" }]} />
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#e7212b]">
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
            background: "radial-gradient(ellipse, rgba(231,33,43,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
            <Link href="/products/analyzers/" className="hover:text-white transition-colors">
              Analyzers
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
            <span className="text-white">Gas Analyzers</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              SICK · In-Situ Gas Analysis
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            Gas Analyzers
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            In-Situ &amp; Extractive Gas Analysis for Process &amp; Emissions Monitoring
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Gas Analysis Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Real-time gas analysis directly within the process. Reliable measurement
            technology that allows the devices to be mounted directly at the measurement
            site: In-situ gas analyzers take measurements directly within the process
            under system conditions. These analyzers are primarily characterized by their
            very minimal maintenance requirements and extremely short response times.
          </p>
          <p className="text-[#555770] text-base leading-relaxed mt-4">
            In-situ gas analyzers from SICK are available in two different versions:
          </p>
          <ul className="text-[#555770] text-base leading-relaxed mt-3 text-left max-w-xl mx-auto space-y-2">
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
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gasAnalyzerProducts.map((prod, index) => (
              <React.Fragment key={prod.slug}>
                <ProductCard
                  product={prod}
                  category="Gas Analyzers"
                  imageFit="contain"
                />
                
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#e7212b] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-[22px] mb-1">
                Need a gas analyzer for your process?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
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
