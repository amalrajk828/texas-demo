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
  title: "CEMS",
  description:
    "Continuous emissions monitoring systems (CEMS) from SICK for compliance monitoring of all pollutant components in exhaust gases from waste incineration, power plants, and industrial facilities.",
  alternates: { canonical: "/products/analyzers/cems/" },
  keywords: [
    "CEMS solutions Kuwait",
    "continuous emissions monitoring",
    "SICK MCS100FT MCS200HW",
    "flue gas monitoring systems",
    "CEMS Kuwait power plant",
    "emissions monitoring Kuwait",
    "power plant CEMS GCC",
    "stack gas analysis Dubai",
  ],
  openGraph: {
    title: "CEMS",
    description:
      "Continuous emissions monitoring systems (CEMS) from SICK for emissions compliance.",
    url: "/products/analyzers/cems/",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEMS",
    description:
      "Continuous emissions monitoring systems (CEMS) from SICK for emissions compliance.",
  },
};

export default function CemsPage() {
  const products = getProductsByPath("/products/analyzers/cems/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products/" }, { name: "Analyzers", href: "/products/analyzers/" }, { name: "CEMS", href: "/products/analyzers/cems/" }]} />
      <ItemListJsonLd
        name="CEMS"
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
          { label: "CEMS" },
        ]}
        eyebrow="SICK · CEMS Monitoring"
        title="CEMS"
        subtitle="Continuous Emissions Monitoring Systems"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Continuous Emissions Monitoring
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            Continuous emissions monitoring of all pollutant components in exhaust gases.
            Environmental regulations stipulate that certain pollutants in the exhaust gas of
            waste incineration plants, as well as the reference parameters, must be monitored
            continuously. Our CEMS solutions provide reliable, accurate, and compliant monitoring
            of all regulated emissions components.
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
                category="CEMS"
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
