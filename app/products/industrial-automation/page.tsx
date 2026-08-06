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
  title: "Industrial Automation",
  description: "End-to-end industrial automation solutions including PLC & I/O modules, control panels, industrial workstations, controllers, converters, Ethernet switches, and command centre consoles.",
  alternates: { canonical: "/products/industrial-automation/" },
  keywords: [
    "industrial automation solutions Kuwait",
    "PLC I/O modules",
    "industrial control panels",
    "Ethernet switches industrial",
    "Allen Bradley PanelView 7",
    "PanelView Plus 6",
    "FactoryTalk Linx Gateway",
    "CompactLogix 5000",
    "Allen Bradley PowerFlex 7000",
    "Rockwell Studio 5000 Logix Designer",
  ],
  openGraph: {
    title: "Industrial Automation",
    description: "End-to-end industrial automation solutions including PLC & I/O modules, control panels, industrial workstations, controllers, converters, Ethernet switches, and command centre consoles.",
    url: "/products/industrial-automation/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation",
    description: "End-to-end industrial automation solutions including PLC & I/O modules, control panels, industrial workstations, controllers, converters, Ethernet switches, and command centre consoles.",
  },
};

export default function IndustrialAutomationPage() {
  const products = getProductsByPath("/products/industrial-automation/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Industrial Automation", href: "/products/industrial-automation/" },
      ]} />
      <ItemListJsonLd
        name="Industrial Automation"
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
          { label: "Industrial Automation" },
        ]}
        eyebrow="Industrial Automation"
        title="Industrial Automation"
        subtitle="End-to-end automation solutions for process plants and manufacturing facilities — from PLCs and control panels to industrial networks and command centres."
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Comprehensive Industrial Automation Portfolio
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            We deliver a complete range of industrial automation solutions — from PLC &amp; I/O modules and control panels to industrial workstations, controllers, converters, Ethernet switches, and ergonomic command centre consoles — engineered for reliability, efficiency, and seamless integration.
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
                category="Industrial Automation"
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
