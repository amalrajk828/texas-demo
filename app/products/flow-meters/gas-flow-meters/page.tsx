import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Gas Flow Meters",
  description:
    "Ultrasonic gas flow meters from SICK — FLOWSIC600-XT, FLOWSIC600, FLOWSIC500, FLOWSIC600 DRU, and FLOWSIC30 for custody transfer and process gas measurement applications.",
  alternates: { canonical: "/products/flow-meters/gas-flow-meters/" },
  keywords: [
    "gas flow meters Kuwait",
    "SICK FLOWSIC600 ultrasonic",
    "custody transfer gas metering",
    "natural gas flow measurement",
  ],
  openGraph: {
    title: "Gas Flow Meters",
    description:
      "Ultrasonic gas flow meters from SICK — custody transfer and process gas flow measurement solutions.",
    url: "/products/flow-meters/gas-flow-meters/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Flow Meters",
    description:
      "Ultrasonic gas flow meters from SICK — custody transfer and process gas flow measurement solutions.",
  },
};

export default function GasFlowMetersPage() {
  const gasFlowMeterProducts = getProductsByPath(
    "/products/flow-meters/gas-flow-meters/"
  );
  return (
<div className="min-h-screen bg-[#0B0D26] font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Flow Meters", href: "/products/flow-meters/" },
        { name: "Gas Flow Meters", href: "/products/flow-meters/gas-flow-meters/" },
      ]} />
      <ProductPageHero
        breadcrumbLabel="Gas Flow Meters"
        eyebrow="SICK · Ultrasonic Gas Flow Measurement"
        title="Gas Flow Meters"
        subtitle="Ultrasonic Gas Flow Measurement for Custody Transfer & Process Applications"
        featured
        backgroundImage="/non_custody_transfer_gas_flow_meter.jpg"
        imagePosition="center top"
        stats={[
          { num: "In-Situ", label: "Technology" },
          { num: "SICK", label: "OEM Brand" },
          { num: "18+", label: "Years" },
        ]}
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-[#0B0D26] py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-[28px] font-bold">
            Gas Flow Meters
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-white/60 text-base leading-relaxed">
            Flow measurement technology finds applications across various industries, and SICK is
            well-equipped to address this diverse challenge. The company boasts a comprehensive
            product portfolio of cutting-edge sensor technology, catering to a wide range of needs.
            Whether it&apos;s custody transfer meters or devices for monitoring and control,
            SICK&apos;s flow measurement technology consistently operates with utmost safety and
            reliability. Even in challenging process and ambient conditions, the technology remains
            up-to-date and ensures accurate performance.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#0B0D26] py-14 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(231,33,43,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gasFlowMeterProducts.map((prod, index) => (
              <ProductCard
                key={prod.slug}
                product={prod}
                category="Gas Flow Meters"
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
                Looking for the right gas flow meter?
              </h3>
              <p className="text-white/60 text-sm">
                Our flow measurement specialists can help you select, size, and configure the right
                SICK ultrasonic gas flow meter for your custody transfer or process application.
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
