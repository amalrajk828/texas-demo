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
  title: "Frequency Inverters (VFD)",
  description: "Mitsubishi Electric FR Series frequency inverters for precise motor speed control across industrial applications.",
  alternates: { canonical: "/products/frequency-inverter-vfd/" },
  keywords: [
    "Mitsubishi frequency inverter",
    "FR Series VFD",
    "variable frequency drive Kuwait",
    "motor speed control solutions",
    "Allen Bradley VFD distributor Kuwait",
    "PowerFlex 753 AC drive",
    "PowerFlex 6000T",
    "PowerFlex VFD GCC",
    "variable speed drive system",
    "DC variable speed drive",
    "Allen Bradley motor controller",
  ],
  openGraph: {
    title: "Frequency Inverters (VFD)",
    description: "Mitsubishi Electric FR Series frequency inverters for precise motor speed control across industrial applications.",
    url: "/products/frequency-inverter-vfd/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequency Inverters (VFD)",
    description: "Mitsubishi Electric FR Series frequency inverters for precise motor speed control across industrial applications.",
  },
};

export default function VfdPage() {
  const vfdProducts = getProductsByPath("/products/frequency-inverter-vfd/");
  return (
<div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Frequency Inverters (VFD)", href: "/products/frequency-inverter-vfd/" },
      ]} />
      <ItemListJsonLd
        name="Frequency Inverters (VFD)"
        items={vfdProducts.map((product) => ({
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
          { label: "Frequency Inverters (VFD)" },
        ]}
        eyebrow="Mitsubishi Electric · Drive Solutions"
        title="Frequency Inverters (VFD)"
        subtitle="Variable Frequency Drives — Mitsubishi Electric"
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Frequency Inverters (VFD)
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            Mitsubishi Electric&apos;s FR Series frequency inverters deliver precise motor speed control, energy savings, and industrial reliability across a full range of applications — from compact utility drives to high-performance crane and hoist systems in oil &amp; gas, HVAC, water treatment, and heavy industry.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vfdProducts.map((vfd, index) => (
              <React.Fragment key={vfd.slug}>
                <ProductCard product={vfd} category="frequency-inverter-vfd" priority={index < 3} />
                
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <FaqPageJsonLd items={productsListingFaq} />
    </div>
  );
}
