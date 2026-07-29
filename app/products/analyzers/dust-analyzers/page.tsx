import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Dust Analyzers",
  description:
    "SICK dust analyzers for continuous monitoring of dust concentration and opacity in stack emissions from power plants, waste incineration, and industrial facilities.",
  alternates: { canonical: "/products/analyzers/dust-analyzers/" },
  keywords: [
    "dust analyzers Kuwait",
    "SICK DUSTHUNTER",
    "stack emissions monitoring",
    "dust concentration measurement",
    "dust monitoring Kuwait power plant",
    "opacity measurement GCC",
    "particulate emissions analyzer",
    "industrial dust monitoring Dubai",
  ],
  openGraph: {
    title: "Dust Analyzers",
    description:
      "SICK dust analyzers for dust concentration and opacity monitoring in stack emissions.",
    url: "/products/analyzers/dust-analyzers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dust Analyzers",
    description:
      "SICK dust analyzers for dust concentration and opacity monitoring in stack emissions.",
  },
};

export default function DustAnalyzersPage() {
  const dustAnalyzerProducts = getProductsByPath("/products/analyzers/dust-analyzers/");
  return (
    <div className="min-h-screen bg-[#0B0D26] font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products/" }, { name: "Analyzers", href: "/products/analyzers/" }, { name: "Dust Analyzers", href: "/products/analyzers/dust-analyzers/" }]} />
      <ProductPageHero
        breadcrumbLabel="Dust Analyzers"
        eyebrow="SICK · Dust Measurement"
        title="Dust Analyzers"
        subtitle="Dust Concentration & Opacity Measurement for Stack Emissions"
        featured
        backgroundImage="/dust_analyzer.png"
        imagePosition="center center"
        stats={[
          { num: "2", label: "Methods" },
          { num: "SICK", label: "OEM Brand" },
          { num: "18+", label: "Years" },
        ]}
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-[#0B0D26] py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-[28px] font-bold">
            Dust Measurement Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-white/60 text-base leading-relaxed">
            Measuring the dust concentration or opacity in the stack of a power plant fired
            by liquid or gaseous fuels is a standard requirement. The exact measuring ranges
            and requirements depend on the applicable national and international regulations.
            Our dust analyzers provide accurate, reliable measurement for compliance and
            process control.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#0B0D26] py-14 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(231,33,43,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dustAnalyzerProducts.map((prod, index) => (
              <ProductCard
                key={prod.slug}
                product={prod}
                category="Dust Analyzers"
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
                Need a dust analyzer for stack emissions?
              </h3>
              <p className="text-white/60 text-sm">
                Our emissions monitoring specialists can help you select the right dust
                analyzer for your particulate matter compliance and process control
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
