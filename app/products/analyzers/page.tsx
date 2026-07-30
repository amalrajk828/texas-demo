import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import AnalyzersTypesSection from "@/components/products/AnalyzersTypesSection";
import AnalyzersEhSection from "@/components/products/AnalyzersEhSection";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Analyzers - Gas Analysis, CEMS & Process Analyzers",
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
    "Honeywell gas monitoring system GCC",
    "gas detection monitor Kuwait",
    "fixed gas detection system",
    "gas detection panel",
  ],
  openGraph: {
    title: "Analyzers - Gas Analysis, CEMS & Process",
    description:
      "7 categories of analyzers from SICK, Endress+Hauser, and Kurz — including gas chromatographs, CEMS, laser TDLAS, water analyzers, and environmental monitoring.",
    url: "/products/analyzers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analyzers",
    description:
      "Gas chromatographs, CEMS, laser gas analyzers, online process analyzers, water analyzers, and environmental monitoring.",
  },
};

export default function AnalyzersPage() {
  const products = getProductsByPath("/products/analyzers/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Analyzers", href: "/products/analyzers/" },
      ]} />
      <ItemListJsonLd
        name="Analyzers"
        items={products.map((product) => ({
          name: product.name,
          url: `/portfolio/${product.slug}/`,
          description: product.description || "",
        }))}
      />
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden border-b-4 border-[#e7212b]">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-[calc(var(--navbar-height,92px)+1.75rem)] pb-16 lg:pt-[calc(var(--navbar-height,92px)+2.5rem)] lg:pb-20">
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
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
            Analyzers
          </h1>
          <p className="text-white/60 text-base max-w-xl">
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
            Seven categories of process and emissions analyzers from world-class OEMs (SICK, Endress+Hauser, and Kurz Instruments) — covering compositional analysis, CEMS, laser TDLAS, water quality, and steam quality for the most demanding industrial applications.
          </p>
        </div>
      </section>

      <AnalyzersTypesSection />
      <AnalyzersEhSection />

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                category="Analyzers"
                imageFit="contain"
                priority={index < 3}
                href={
                  product.slug === "cems"
                    ? "/products/analyzers/cems/"
                    : product.slug === "dust-analyzers"
                      ? "/products/analyzers/dust-analyzers/"
                      : product.slug === "gas-analyzers"
                        ? "/products/analyzers/gas-analyzers/"
                        : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#e7212b] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-[22px] mb-1">
                Need help selecting the right gas analyzer?
              </p>
              <p className="text-[#A0A8C0] text-sm">
                Our gas analysis specialists can help you choose and configure the right CEMS, dust analyzer, or gas analyzer for your emissions monitoring and process control requirements.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-[#e7212b]/20 transition-all duration-200"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
