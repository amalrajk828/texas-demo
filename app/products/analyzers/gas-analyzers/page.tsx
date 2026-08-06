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
  title: "Gas Analyzers",
  description:
    "SICK in-situ and extractive gas analyzers for real-time gas analysis directly within industrial processes — GM32 and GM35 for emissions monitoring and process control.",
  alternates: { canonical: "/products/analyzers/gas-analyzers/" },
  keywords: [
    "SICK gas analyzers Kuwait",
    "GM32 in-situ gas analyzer",
    "GM35 gas analyzer",
    "SO2 NO NO2 NH3 measurement",
    "Honeywell analytics gas detection",
    "gas detection system Kuwait",
    "portable multi gas monitor",
    "personal gas detection monitors",
    "hazardous gas detection system",
    "industrial gas detection systems",
  ],
  openGraph: {
    title: "Gas Analyzers",
    description:
      "SICK in-situ and extractive gas analyzers for real-time process gas analysis.",
    url: "/products/analyzers/gas-analyzers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Analyzers",
    description:
      "SICK in-situ and extractive gas analyzers for real-time process gas analysis.",
  },
};

export default function GasAnalyzersPage() {
  const products = getProductsByPath("/products/analyzers/gas-analyzers/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products/" }, { name: "Analyzers", href: "/products/analyzers/" }, { name: "Gas Analyzers", href: "/products/analyzers/gas-analyzers/" }]} />
      <ItemListJsonLd
        name="Gas Analyzers"
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
          { label: "Analyzers", href: "/products/analyzers/" },
          { label: "Gas Analyzers" },
        ]}
        eyebrow="SICK · In-Situ Gas Analysis"
        title="Gas Analyzers"
        subtitle="In-Situ & Extractive Gas Analysis for Process & Emissions Monitoring"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Gas Analysis Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Real-time gas analysis directly within the process. Reliable measurement
            technology that allows the devices to be mounted directly at the measurement
            site: In-situ gas analyzers take measurements directly within the process
            under system conditions. These analyzers are primarily characterized by their
            very minimal maintenance requirements and extremely short response times.
          </p>
          <p className="text-[#555770] text-base leading-relaxed mt-4">
            In-situ gas analyzers from SICK are available in two different versions:
          </p>
          <ul className="text-[#555770] text-base leading-relaxed mt-3 text-left max-w-xl mx-auto space-y-2">
            <li className="flex gap-2">
              <span className="text-[#e7212b] font-bold shrink-0">•</span>
              <span>
                <strong>The cross-duct version</strong> for representative measurement
                results across the entire duct diameter
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#e7212b] font-bold shrink-0">•</span>
              <span>
                <strong>The measuring probe version</strong>, optimized for single-sided
                gas duct installation
              </span>
            </li>
          </ul>
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
                category="Gas Analyzers"
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
