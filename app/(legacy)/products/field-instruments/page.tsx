import React from "react";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { productsListingFaq } from "@/lib/pageFaqData";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";
import ProductHeroWithTrunk from "@/components/products/common/ProductHeroWithTrunk";

export const metadata: Metadata = {
  title: "Field Instruments",
  description: "Pressure, temperature, level, and flow field instruments for industrial processes. SICK provides top-notch solutions for contact temperature measurement, level sensing, pressure measurement, condition monitoring, and flow metering.",
  alternates: { canonical: "/products/field-instruments/" },
  keywords: [
    "field instruments Kuwait",
    "SICK temperature sensors",
    "pressure level flow sensors",
    "condition monitoring sensors",
    "industrial field instrumentation",
    "ABB vibration monitoring Kuwait",
    "ABB condition monitoring GCC",
    "ABB vibration sensor",
    "Rockwell vibration monitoring",
    "Rockwell condition monitoring",
    "Allen Bradley vibration monitoring",
    "temperature dataloggers",
    "wireless temperature logger",
    "temperature data acquisition system",
  ],
  openGraph: {
    title: "Field Instruments",
    description: "Pressure, temperature, level, and flow field instruments for industrial processes. SICK provides top-notch solutions for contact temperature measurement, level sensing, pressure measurement, condition monitoring, and flow metering.",
    url: "/products/field-instruments/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Instruments",
    description: "Pressure, temperature, level, and flow field instruments for industrial processes. SICK provides top-notch solutions for contact temperature measurement, level sensing, pressure measurement, condition monitoring, and flow metering.",
  },
};

export default function FieldInstrumentsPage() {
  const products = getProductsByPath("/products/field-instruments/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Field Instruments", href: "/products/field-instruments/" },
      ]} />
      <ItemListJsonLd
        name="Field Instruments"
        items={products.map((product) => ({
          name: product.name,
          url: `/portfolio/${product.slug}/`,
          description: product.description || "",
        }))}
      />
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <ProductHeroWithTrunk
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products/" },
          { label: "Field Instruments" },
        ]}
        eyebrow="SICK · Field Instruments"
        title="Field Instruments"
        subtitle="Pressure, temperature, level, and flow field instruments for industrial processes — engineered for precision and reliability."
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            SICK Field Instruments Range
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            We offer a comprehensive range of SICK field instruments for precise measurement and monitoring of critical process variables — including temperature, level, pressure, condition monitoring, and flow — engineered for accuracy and reliability in the most demanding industrial environments.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                category="Field Instruments"
                imageFit="contain"
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      <FaqPageJsonLd items={productsListingFaq} />
    </div>
  );
}
