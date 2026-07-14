import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Dust Analyzers - Texas Technical Services",
  description:
    "SICK dust analyzers for continuous monitoring of dust concentration and opacity in stack emissions from power plants, waste incineration, and industrial facilities.",
  alternates: { canonical: "/products/analyzers/dust-analyzers/" },
  keywords: [
    "dust analyzers Kuwait",
    "SICK DUSTHUNTER",
    "stack emissions monitoring",
    "dust concentration measurement",
  ],
  openGraph: {
    title: "Dust Analyzers - Texas Technical Services",
    description:
      "SICK dust analyzers for dust concentration and opacity monitoring in stack emissions.",
    url: "/products/analyzers/dust-analyzers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dust Analyzers - Texas Technical Services",
    description:
      "SICK dust analyzers for dust concentration and opacity monitoring in stack emissions.",
  },
};

export default function DustAnalyzersPage() {
  const dustAnalyzerProducts = getProductsByPath("/products/analyzers/dust-analyzers/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products/" }, { name: "Analyzers", href: "/products/analyzers/" }, { name: "Dust Analyzers", href: "/products/analyzers/dust-analyzers/" }]} />
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
            background: "radial-gradient(ellipse, rgba(245,130,31,0.06) 0%, transparent 70%)",
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
            <span className="text-white">Dust Analyzers</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              SICK · Dust Measurement
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            Dust Analyzers
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            Dust Concentration &amp; Opacity Measurement for Stack Emissions
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Dust Measurement Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5821F] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Measuring the dust concentration or opacity in the stack of a power plant fired
            by liquid or gaseous fuels is a standard requirement. The exact measuring ranges
            and requirements depend on the applicable national and international regulations.
            Our dust analyzers provide accurate, reliable measurement for compliance and
            process control.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
          <div className="flex flex-col">
            {dustAnalyzerProducts.map((prod, index) => (
              <React.Fragment key={prod.slug}>
                <ProductCard
                  product={prod}
                  category="Dust Analyzers"
                  imageFit="contain"
                />
                {index < dustAnalyzerProducts.length - 1 && (
                  <div className="border-t border-[#E8E8F0] my-[10px]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#F5821F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-[22px] mb-1">
                Need a dust analyzer for stack emissions?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our emissions monitoring specialists can help you select the right dust
                analyzer for your particulate matter compliance and process control
                requirements.
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
