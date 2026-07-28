import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "CEMS",
  description:
    "Continuous emissions monitoring systems (CEMS) from SICK for compliance monitoring of all pollutant components in exhaust gases from waste incineration, power plants, and industrial facilities.",
  alternates: { canonical: "/products/analyzers/cems/" },
  keywords: [
    "CEMS solutions Kuwait",
    "continuous emissions monitoring",
    "SICK MCS100FT MCS200HW",
    "flue gas monitoring systems",
  ],
  openGraph: {
    title: "CEMS",
    description:
      "Continuous emissions monitoring systems (CEMS) from SICK for emissions compliance.",
    url: "/products/analyzers/cems/",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEMS",
    description:
      "Continuous emissions monitoring systems (CEMS) from SICK for emissions compliance.",
  },
};

export default function CemsPage() {
  const cemsProducts = getProductsByPath("/products/analyzers/cems/");
  return (
    <div className="min-h-screen bg-[#0B0D26] font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products/" }, { name: "Analyzers", href: "/products/analyzers/" }, { name: "CEMS", href: "/products/analyzers/cems/" }]} />
      <ProductPageHero
        breadcrumbLabel="CEMS"
        eyebrow="SICK · CEMS Monitoring"
        title="CEMS"
        subtitle="Continuous Emissions Monitoring Systems"
        featured
        backgroundImage="/cems.png"
        imagePosition="center center"
        stats={[
          { num: "Multi-Gas", label: "Coverage" },
          { num: "SICK", label: "OEM Brand" },
          { num: "18+", label: "Years" },
        ]}
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-[#0B0D26] py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-[28px] font-bold">
            Continuous Emissions Monitoring
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-white/60 text-base leading-relaxed">
            Continuous emissions monitoring of all pollutant components in exhaust gases.
            Environmental regulations stipulate that certain pollutants in the exhaust gas of
            waste incineration plants, as well as the reference parameters, must be monitored
            continuously. Our CEMS solutions provide reliable, accurate, and compliant monitoring
            of all regulated emissions components.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#0B0D26] py-14 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(231,33,43,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cemsProducts.map((prod, index) => (
              <ProductCard
                key={prod.slug}
                product={prod}
                category="CEMS"
                imageFit="contain"
                dark
                priority={index < 3}
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
                Need a CEMS solution for your facility?
              </h3>
              <p className="text-white/60 text-sm">
                Our emissions monitoring specialists can help you select and configure the
                right continuous emissions monitoring system for your regulatory compliance
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
