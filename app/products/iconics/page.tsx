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
  title: "ICONICS",
  description: "ICONICS GENESIS64 SCADA and HMI software for real-time visualization and control of industrial processes.",
  alternates: { canonical: "/products/iconics/" },
  keywords: [
    "ICONICS SCADA software",
    "GENESIS64 HMI",
    "SCADA visualization Kuwait",
    "industrial SCADA solutions",
    "ICONICS Hyper Historian Kuwait",
    "building automation SCADA GCC",
    "Energy AnalytiX Dubai",
    "factory automation software Kuwait",
    "real-time industrial monitoring",
    "ICONICS partner Kuwait",
  ],
  openGraph: {
    title: "ICONICS",
    description: "ICONICS GENESIS64 SCADA and HMI software for real-time visualization and control of industrial processes.",
    url: "/products/iconics/",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICONICS",
    description: "ICONICS GENESIS64 SCADA and HMI software for real-time visualization and control of industrial processes.",
  },
};

export default function IconicsPage() {
  const iconicsProducts = getProductsByPath("/products/iconics/");
  return (
<div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "ICONICS", href: "/products/iconics/" },
      ]} />
      <ItemListJsonLd
        name="Iconics"
        items={iconicsProducts.map((product) => ({
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
          { label: "ICONICS" },
        ]}
        eyebrow="ICONICS · SCADA & HMI Software"
        title="ICONICS"
        subtitle="SCADA, HMI & Industrial Software"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            ICONICS Software Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            ICONICS delivers industry-leading SCADA, HMI, and analytics software for real-time visualization and control of industrial operations — from oil &amp; gas and power generation to manufacturing and smart infrastructure.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {iconicsProducts.map((prod, index) => (
              <React.Fragment key={prod.slug}>
                <ProductCard product={prod} category="iconics" priority={index < 3} />
                
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <FaqPageJsonLd items={productsListingFaq} />
    </div>
  );
}
