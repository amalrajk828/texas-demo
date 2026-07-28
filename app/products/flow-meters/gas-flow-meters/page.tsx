import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Gas Flow Meters - Texas Technical Services",
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
    title: "Gas Flow Meters - Texas Technical Services",
    description:
      "Ultrasonic gas flow meters from SICK — custody transfer and process gas flow measurement solutions.",
    url: "/products/flow-meters/gas-flow-meters/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Flow Meters - Texas Technical Services",
    description:
      "Ultrasonic gas flow meters from SICK — custody transfer and process gas flow measurement solutions.",
  },
};

export default function GasFlowMetersPage() {
  const gasFlowMeterProducts = getProductsByPath(
    "/products/flow-meters/gas-flow-meters/"
  );
  return (
<div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Flow Meters", href: "/products/flow-meters/" },
        { name: "Gas Flow Meters", href: "/products/flow-meters/gas-flow-meters/" },
      ]} />
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden border-b-4 border-[#e7212b]">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-[calc(var(--navbar-height,92px)+1.75rem)] pb-16 lg:pt-[calc(var(--navbar-height,92px)+2.5rem)] lg:pb-20">
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
            <span className="text-white">Gas Flow Meters</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              SICK · Ultrasonic Gas Flow Measurement
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            Gas Flow Meters
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            Ultrasonic Gas Flow Measurement for Custody Transfer &amp; Process Applications
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Gas Flow Meters
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
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
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gasFlowMeterProducts.map((prod, index) => (
              <React.Fragment key={prod.slug}>
                <ProductCard
                  product={prod}
                  category="Gas Flow Meters"
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
                Looking for the right gas flow meter?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
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
