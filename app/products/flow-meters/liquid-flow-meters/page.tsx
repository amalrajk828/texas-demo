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
  title: "Liquid Flow Meters",
  description:
    "Wide range of liquid flow meters from Faure Herman, Ultraflux, and SICK — custody and non-custody solutions including helical turbine, ultrasonic, and portable flowmeters.",
  alternates: { canonical: "/products/flow-meters/liquid-flow-meters/" },
  keywords: [
    "liquid flow meters Kuwait",
    "Faure Herman helical turbine",
    "Ultraflux ultrasonic flowmeter",
    "custody transfer liquid metering",
    "helical turbine meter Kuwait",
    "liquid custody transfer GCC",
    "petroleum flow measurement",
    "refinery liquid flow meters Dubai",
  ],
  openGraph: {
    title: "Liquid Flow Meters",
    description:
      "Wide range of liquid flow meters from Faure Herman, Ultraflux, and SICK — custody and non-custody solutions.",
    url: "/products/flow-meters/liquid-flow-meters/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid Flow Meters",
    description:
      "Wide range of liquid flow meters from Faure Herman, Ultraflux, and SICK — custody and non-custody solutions.",
  },
};

export default function LiquidFlowMetersPage() {
  const products = getProductsByPath("/products/flow-meters/liquid-flow-meters/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Flow Meters", href: "/products/flow-meters/" },
        { name: "Liquid Flow Meters", href: "/products/flow-meters/liquid-flow-meters/" },
      ]} />
      <ItemListJsonLd
        name="Liquid Flow Meters"
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
          { label: "Flow Meters", href: "/products/flow-meters/" },
          { label: "Liquid Flow Meters" },
        ]}
        eyebrow="Faure Herman · Ultraflux · SICK"
        title="Liquid Flow Meters"
        subtitle="Custody & Non-Custody Liquid Flow Measurement"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Liquid Flow Meters
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
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
            {products.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                category="Liquid Flow Meters"
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
