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
  title: "Custody Metering Solutions",
  description:
    "Custody metering solutions for oil and gas — flow metering skids, flow computers, and flow metering control systems for accurate, auditable custody transfer measurement.",
  alternates: {
    canonical: "/products/custody-metering-solutions/",
  },
  keywords: [
    "custody metering solutions Kuwait",
    "flow metering skids",
    "OMNI flow computers",
    "custody transfer measurement",
    "fiscal metering Kuwait",
    "metering skid design GCC",
    "flow computer integration Dubai",
    "oil and gas custody transfer",
    "pipeline metering systems",
    "custody transfer skid fabrication",
  ],
  openGraph: {
    title: "Custody Metering Solutions",
    description:
      "Custody metering solutions for oil and gas — flow metering skids, flow computers, and flow metering control systems for accurate, auditable custody transfer measurement.",
    url: "/products/custody-metering-solutions/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custody Metering Solutions",
    description:
      "Custody metering solutions for oil and gas — flow metering skids, flow computers, and flow metering control systems for accurate, auditable custody transfer measurement.",
  },
};

export default function CustodyMeteringSolutionsPage() {
  const products = getProductsByPath("/products/custody-metering-solutions/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Custody Metering Solutions", href: "/products/custody-metering-solutions/" },
      ]} />
      <ItemListJsonLd
        name="Custody Metering Solutions"
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
          { label: "Custody Metering Solutions" },
        ]}
        eyebrow="SICK · OMNI · Custody Transfer"
        title="Custody Metering Solutions"
        subtitle="Flow Metering Skids, Flow Computers & Control Systems"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Custody Metering Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            At Texas Technical Service Co., we take pride in offering top-of-the-line custody metering solutions that cater to a wide range of industries and applications. Our comprehensive product range, backed by cutting-edge technology, ensures accurate and reliable measurements for all your custody transfer needs.
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
                category="Custody Metering Solutions"
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
