import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Liquid Flow Meters - Texas Technical Services",
  description:
    "Wide range of liquid flow meters from Faure Herman, Ultraflux, and SICK — custody and non-custody solutions including helical turbine, ultrasonic, and portable flowmeters.",
  alternates: { canonical: "/products/flow-meters/liquid-flow-meters/" },
  keywords: [
    "liquid flow meters Kuwait",
    "Faure Herman helical turbine",
    "Ultraflux ultrasonic flowmeter",
    "custody transfer liquid metering",
  ],
  openGraph: {
    title: "Liquid Flow Meters - Texas Technical Services",
    description:
      "Wide range of liquid flow meters from Faure Herman, Ultraflux, and SICK — custody and non-custody solutions.",
    url: "/products/flow-meters/liquid-flow-meters/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid Flow Meters - Texas Technical Services",
    description:
      "Wide range of liquid flow meters from Faure Herman, Ultraflux, and SICK — custody and non-custody solutions.",
  },
};

export default function LiquidFlowMetersPage() {
  const liquidFlowMeterProducts = getProductsByPath(
    "/products/flow-meters/liquid-flow-meters/"
  );
  return (
<div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Flow Meters", href: "/products/flow-meters/" },
        { name: "Liquid Flow Meters", href: "/products/flow-meters/liquid-flow-meters/" },
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
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
            <Link href="/products/flow-meters/" className="hover:text-white transition-colors">
              Flow Meters
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
            <span className="text-white">Liquid Flow Meters</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              Faure Herman · Ultraflux · SICK
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            Liquid Flow Meters
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            Custody &amp; Non-Custody Liquid Flow Measurement
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Liquid Flow Meters
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            We take pride in being a premier provider of a wide range of liquid flow meters, including both
            non-custody and custody solutions from renowned brands like Faure Herman and Ultraflux. Our commitment
            to delivering accurate and reliable flow measurement solutions sets us apart as a trusted partner for
            various industries and applications.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {liquidFlowMeterProducts.map((prod, index) => (
              <React.Fragment key={prod.slug}>
                <ProductCard
                  product={prod}
                  category="Liquid Flow Meters"
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
                Looking for the right liquid flow meter?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our flow measurement specialists can help you select, size, and configure the right custody or
                non-custody liquid flow meter for your application.
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
