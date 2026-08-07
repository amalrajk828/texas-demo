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
      <ItemListJsonLd
        name="Flow Meters"
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
          { label: "Flow Meters" },
        ]}
        eyebrow="Flow Measurement"
        title="Flow Meters"
        subtitle="Liquid, Gas & Flare Flow Measurement Solutions"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Flow Measurement Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            Flow measurement technology finds applications across various industries, and our authorized principals — SICK, Faure Herman, KEM Küppers, Endress+Hauser, Tek-Trol, and Rockwin — are well equipped to address this diverse challenge. Whether it&apos;s custody transfer meters or devices for monitoring and control, our flow measurement technology consistently operates with utmost safety and reliability.
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

      <FaqPageJsonLd items={productsListingFaq} />
    </div>
  );
}
