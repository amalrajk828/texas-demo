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
  title: "Flare Meters",
  description:
    "SICK ultrasonic flare gas and steam flow meters — FLOWSIC100 Flare and FLOWSIC100-Flare-XT for reliable, low-maintenance measurement on refinery and petrochemical flare stacks.",
  alternates: { canonical: "/products/flow-meters/flare-meters/" },
  keywords: [
    "flare gas flow meters",
    "SICK FLOWSIC100 Flare",
    "flare stack measurement",
    "steam flow meters refinery",
    "flare gas measurement Kuwait",
    "ultrasonic flare meter GCC",
    "refinery flare monitoring",
    "flare flow measurement Dubai",
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
  const products = getProductsByPath("/products/flow-meters/flare-meters/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Flow Meters", href: "/products/flow-meters/" },
        { name: "Flare Meters", href: "/products/flow-meters/flare-meters/" },
      ]} />
      <ItemListJsonLd
        name="Flare Meters"
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
          { label: "Flare Meters" },
        ]}
        eyebrow="SICK · Flare Gas & Steam Measurement"
        title="Flare Meters"
        subtitle="Ultrasonic Flare Gas & Steam Flow Measurement"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Flare Meters
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
                category="Flare Flow Meters"
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
