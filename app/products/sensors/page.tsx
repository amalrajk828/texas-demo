import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Sensors - Texas Technical Services",
  description: "Texas Technical Services offers a wide range of sensors for precise data acquisition, enhancing the efficiency and control of industrial processes.",
  alternates: { canonical: "/products/sensors/" },
  keywords: [
    "industrial sensors Kuwait",
    "SICK photoelectric sensors",
    "proximity sensors",
    "safety light curtains",
    "industrial automation sensors",
  ],
  openGraph: {
    title: "Sensors - Texas Technical Services",
    description: "Texas Technical Services offers a wide range of sensors for precise data acquisition, enhancing the efficiency and control of industrial processes.",
    url: "/products/sensors/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensors - Texas Technical Services",
    description: "Texas Technical Services offers a wide range of sensors for precise data acquisition, enhancing the efficiency and control of industrial processes.",
  },
};

export default function SensorsPage() {
  const sensors = getProductsByPath("/products/sensors/");
  return (
<div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Industrial Sensors", href: "/products/sensors/" },
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
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Industrial Sensors</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              SICK · Industrial Sensors
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
            Industrial Sensors
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            SICK offers a comprehensive range of industrial sensors engineered for precision and performance in the most demanding environments.
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Our Industrial Sensor Range
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            We offer a comprehensive range of SICK industrial sensors engineered for precision and performance in the most demanding environments — from ports and mining to automation and manufacturing.
          </p>
        </div>
      </section>

      {/* ── Sensors List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sensors.map((sensor, index) => (
              <React.Fragment key={sensor.slug}>
                <ProductCard product={sensor} category="sensors" />
                
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
              <p className="text-white font-bold text-[22px] mb-1">
                Need help selecting the right sensor?
              </p>
              <p className="text-[#A0A8C0] text-sm">
                Our engineers are ready to assist with your application requirements.
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
