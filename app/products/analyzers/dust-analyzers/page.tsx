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
  title: "Dust Analyzers",
  description:
    "SICK dust analyzers for continuous monitoring of dust concentration and opacity in stack emissions from power plants, waste incineration, and industrial facilities.",
  alternates: { canonical: "/products/analyzers/dust-analyzers/" },
  keywords: [
    "dust analyzers Kuwait",
    "SICK DUSTHUNTER",
    "stack emissions monitoring",
    "dust concentration measurement",
    "dust monitoring Kuwait power plant",
    "opacity measurement GCC",
    "particulate emissions analyzer",
    "industrial dust monitoring Dubai",
  ],
  openGraph: {
    title: "Dust Analyzers",
    description:
      "SICK dust analyzers for dust concentration and opacity monitoring in stack emissions.",
    url: "/products/analyzers/dust-analyzers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dust Analyzers",
    description:
      "SICK dust analyzers for dust concentration and opacity monitoring in stack emissions.",
  },
};

export default function DustAnalyzersPage() {
  const products = getProductsByPath("/products/analyzers/dust-analyzers/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products/" }, { name: "Analyzers", href: "/products/analyzers/" }, { name: "Dust Analyzers", href: "/products/analyzers/dust-analyzers/" }]} />
      <ItemListJsonLd
        name="Dust Analyzers"
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
          { label: "Dust Analyzers" },
        ]}
        eyebrow="SICK · Dust Measurement"
        title="Dust Analyzers"
        subtitle="Dust Concentration & Opacity Measurement for Stack Emissions"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Dust Measurement Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            Measuring the dust concentration or opacity in the stack of a power plant fired
            by liquid or gaseous fuels is a standard requirement. The exact measuring ranges
            and requirements depend on the applicable national and international regulations.
            Our dust analyzers provide accurate, reliable measurement for compliance and
            process control.
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
                category="Dust Analyzers"
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
