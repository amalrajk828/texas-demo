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
  title: "GOT (Graphic Operator Panels)",
  description: "Mitsubishi Electric GOT2000 Series graphic operation terminals for industrial automation systems.",
  alternates: { canonical: "/products/got/" },
  keywords: [
    "Mitsubishi GOT HMI",
    "GOT2000 graphic operator panel",
    "HMI touchscreen Kuwait",
    "industrial HMI solutions",
    "Mitsubishi HMI panel Dubai",
    "GOT1000 series Kuwait",
    "operator interface panel GCC",
    "SCADA HMI integration Kuwait",
    "industrial display panel",
    "HMI programming Kuwait",
  ],
  openGraph: {
    title: "GOT (Graphic Operator Panels)",
    description: "Mitsubishi Electric GOT2000 Series graphic operation terminals for industrial automation systems.",
    url: "/products/got/",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOT (Graphic Operator Panels)",
    description: "Mitsubishi Electric GOT2000 Series graphic operation terminals for industrial automation systems.",
  },
};

export default function GotPage() {
  const gotProducts = getProductsByPath("/products/got/");
  return (
<div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "GOT", href: "/products/got/" },
      ]} />
      <ItemListJsonLd
        name="GOT"
        items={gotProducts.map((product) => ({
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
          { label: "GOT" },
        ]}
        eyebrow="Mitsubishi Electric · HMI Systems"
        title="GOT"
        subtitle="Graphic Operator Panels (HMI)"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            GOT — Graphic Operator Panels
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            Mitsubishi Electric&apos;s GOT series delivers high-performance HMI terminals for industrial automation — combining high-resolution visualization, intuitive touch operation, and seamless PLC connectivity for efficient operator interaction across oil &amp; gas, manufacturing, and utility applications.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gotProducts.map((prod, index) => (
              <React.Fragment key={prod.slug}>
                <ProductCard product={prod} category="got" priority={index < 3} />
                
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <FaqPageJsonLd items={productsListingFaq} />
    </div>
  );
}
