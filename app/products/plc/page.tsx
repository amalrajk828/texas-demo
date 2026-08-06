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
  title: "PLC",
  description: "Mitsubishi Electric PLC solutions for industrial automation including MELSEC iQ-R, MELSEC-Q, FX5U, FX5UJ, and FX5S series.",
  alternates: { canonical: "/products/plc/" },
  keywords: [
    "Mitsubishi PLC Kuwait",
    "MELSEC iQ-R series",
    "MELSEC-Q PLC",
    "FX5U programmable controller",
    "industrial PLC solutions",
  ],
  openGraph: {
    title: "PLC",
    description: "Mitsubishi Electric PLC solutions for industrial automation including MELSEC iQ-R, MELSEC-Q, FX5U, FX5UJ, and FX5S series.",
    url: "/products/plc/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLC",
    description: "Mitsubishi Electric PLC solutions for industrial automation including MELSEC iQ-R, MELSEC-Q, FX5U, FX5UJ, and FX5S series.",
  },
};

export default function PlcPage() {
  const plcProducts = getProductsByPath("/products/plc/");
  return (
<div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "PLC", href: "/products/plc/" },
      ]} />
      <ItemListJsonLd
        name="PLC"
        items={plcProducts.map((product) => ({
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
          { label: "PLC" },
        ]}
        eyebrow="Mitsubishi Electric · PLC Systems"
        title="PLC"
        subtitle="Programmable Logic Controllers"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Programmable Logic Controllers
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            We offer Mitsubishi Electric&apos;s complete PLC lineup — from compact iQ-F series controllers to large-scale modular iQ-R platforms — engineered for reliability and performance in industrial automation and oil &amp; gas applications.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {plcProducts.map((plc, index) => (
              <React.Fragment key={plc.slug}>
                <ProductCard product={plc} category="plc" priority={index < 3} />
                
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <FaqPageJsonLd items={productsListingFaq} />
    </div>
  );
}
