import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import FlowMetersCustodyTransferSection from "@/components/products/FlowMetersCustodyTransferSection";
import FlowMetersTechnologiesSection from "@/components/products/FlowMetersTechnologiesSection";
import FlowMetersKemSection from "@/components/products/FlowMetersKemSection";
import FlowMetersProversSection from "@/components/products/FlowMetersProversSection";
import FlowMetersFhLabSection from "@/components/products/FlowMetersFhLabSection";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Flow Meters",
  description:
    "Precision flow measurement instruments for liquids, gases, and flare applications from SICK, Faure Herman, KEM Küppers, Endress+Hauser, Tek-Trol, and more — custody transfer and process monitoring solutions.",
  alternates: { canonical: "/products/flow-meters/" },
  keywords: [
    "flow meters Kuwait",
    "ultrasonic flow meters",
    "SICK flow meters",
    "Faure Herman flow meters",
    "KEM Kuppers flow meter",
    "Endress Hauser flow meter",
    "Tek-Trol flow meter",
    "custody transfer flow measurement",
    "Coriolis flow meter Kuwait",
    "V-Cone flow element",
    "turbine flow meter",
    "flare gas meter",
    "thermal mass flow meter",
    "ultrasonic pipe flow meter GCC",
    "insertion thermal mass flow meter",
    "clamp on liquid flow meter Kuwait",
    "sanitary magnetic flow meter",
    "high pressure gas flow meter",
    "natural gas flow meter Kuwait",
    "Coriolis flow meter manufacturers",
    "thermal mass flow meter manufacturer",
    "KROHNE flow meter Kuwait",
  ],
  openGraph: {
    title: "Flow Meters",
    description:
      "Comprehensive flow technologies & applications — Coriolis, ultrasonic, turbine, electromagnetic, V-Cone, PD, thermal mass, and flare gas meters from 5 world-class OEMs.",
    url: "/products/flow-meters/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Meters",
    description:
      "Comprehensive flow technologies & applications from 5 world-class OEMs — custody transfer and process measurement.",
  },
};

export default function FlowMetersPage() {
  const products = getProductsByPath("/products/flow-meters/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Flow Meters", href: "/products/flow-meters/" },
      ]} />
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
            <span className="text-white">Flow Meters</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              Flow Measurement
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
            Flow Meters
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            Liquid, Gas &amp; Flare Flow Measurement Solutions
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Flow Measurement Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Flow measurement technology finds applications across various industries, and our authorized principals — SICK, Faure Herman, KEM Küppers, Endress+Hauser, Tek-Trol, and Rockwin — are well equipped to address this diverse challenge. Whether it&apos;s custody transfer meters or devices for monitoring and control, our flow measurement technology consistently operates with utmost safety and reliability.
          </p>
        </div>
      </section>

      <FlowMetersCustodyTransferSection />
      <FlowMetersTechnologiesSection />
      <FlowMetersKemSection />
      <FlowMetersProversSection />
      <FlowMetersFhLabSection />

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                category="Flow Meters"
                imageFit="contain"
                priority={index < 3}
                href={
                  product.slug === "liquid-flow-meters"
                    ? "/products/flow-meters/liquid-flow-meters/"
                    : product.slug === "flare-meters"
                      ? "/products/flow-meters/flare-meters/"
                      : product.slug === "gas-flow-meters"
                        ? "/products/flow-meters/gas-flow-meters/"
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
                Need help selecting the right flow meter?
              </p>
              <p className="text-[#A0A8C0] text-sm">
                Our flow measurement specialists can help you choose and configure the right liquid, gas, or flare flow meter for your application.
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
