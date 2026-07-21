import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Flare Meters",
  description:
    "SICK ultrasonic flare gas and steam flow meters — FLOWSIC100 Flare and FLOWSIC100-Flare-XT for reliable, low-maintenance measurement on refinery and petrochemical flare stacks.",
  alternates: { canonical: "/products/flow-meters/flare-meters/" },
  keywords: [
    "flare gas flow meters",
    "SICK FLOWSIC100 Flare",
    "flare stack measurement",
    "steam flow meters refinery",
  ],
  openGraph: {
    title: "Flare Meters",
    description:
      "SICK ultrasonic flare gas and steam flow meters — FLOWSIC100 Flare and FLOWSIC100-Flare-XT for reliable, low-maintenance measurement on flare stacks.",
    url: "/products/flow-meters/flare-meters/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flare Meters",
    description:
      "SICK ultrasonic flare gas and steam flow meters — FLOWSIC100 Flare and FLOWSIC100-Flare-XT for reliable, low-maintenance measurement on flare stacks.",
  },
};

export default function FlareMetersPage() {
  const flareMeterProducts = getProductsByPath("/products/flow-meters/flare-meters/");
  return (
<div className="min-h-screen bg-[#0B0D26] font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Flow Meters", href: "/products/flow-meters/" },
        { name: "Flare Meters", href: "/products/flow-meters/flare-meters/" },
      ]} />
      <ProductPageHero
        breadcrumbLabel="Flare Meters"
        eyebrow="SICK · Flare Gas & Steam Measurement"
        title="Flare Meters"
        subtitle="Ultrasonic Flare Gas & Steam Flow Measurement"
        featured
        backgroundImage="/flare_meter.png"
        imagePosition="center center"
        stats={[
          { num: "24/7", label: "Monitoring" },
          { num: "SICK", label: "OEM Brand" },
          { num: "18+", label: "Years" },
        ]}
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-[#0B0D26] py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-[28px] font-bold">
            Flare Meters
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-white/60 text-base leading-relaxed">
            We take pride in being a premier provider of a wide range of liquid flow meters, including both
            non-custody and custody solutions from renowned brands like Faure Herman and Ultraflux. Our commitment
            to delivering accurate and reliable flow measurement solutions sets us apart as a trusted partner for
            various industries and applications.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#0B0D26] py-14 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(231,33,43,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {flareMeterProducts.map((prod) => (
              <ProductCard
                key={prod.slug}
                product={prod}
                category="Flare Flow Meters"
                imageFit="contain"
                dark
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
                Need a reliable flare gas measurement solution?
              </h3>
              <p className="text-white/60 text-sm">
                Our flow measurement specialists can help you select, size, and configure the right SICK ultrasonic
                flare meter for your refinery or petrochemical application.
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
