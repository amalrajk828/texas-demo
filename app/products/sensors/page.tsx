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
  title: "Sensors",
  description: "Texas Technical Services offers a wide range of sensors for precise data acquisition, enhancing the efficiency and control of industrial processes.",
  alternates: { canonical: "/products/sensors/" },
  keywords: [
    "industrial sensors Kuwait",
    "SICK photoelectric sensors",
    "proximity sensors",
    "safety light curtains",
    "industrial automation sensors",
    "ABB vibration sensor Kuwait",
    "ABB condition monitoring sensors",
    "temperature data acquisition system",
    "level logger",
  ],
  openGraph: {
    title: "Sensors",
    description: "Texas Technical Services offers a wide range of sensors for precise data acquisition, enhancing the efficiency and control of industrial processes.",
    url: "/products/sensors/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensors",
    description: "Texas Technical Services offers a wide range of sensors for precise data acquisition, enhancing the efficiency and control of industrial processes.",
  },
};

export default function SensorsPage() {
  const sensors = getProductsByPath("/products/sensors/");
  return (
<div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Industrial Sensors", href: "/products/sensors/" },
      ]} />
      <ItemListJsonLd
        name="Sensors"
        items={sensors.map((product) => ({
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
          { label: "Industrial Sensors" },
        ]}
        eyebrow="SICK · Industrial Sensors"
        title="Industrial Sensors"
        subtitle="SICK offers a comprehensive range of industrial sensors engineered for precision and performance in the most demanding environments."
      />

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Our Industrial Sensor Range
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mt-3 mb-4" />
          <p className="text-[#555770] text-base sm:text-lg leading-relaxed w-full">
            We offer a comprehensive range of SICK industrial sensors engineered for precision and performance in the most demanding environments — from ports and mining to automation and manufacturing.
          </p>
        </div>
      </section>

      {/* ── Sensors List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sensors.map((sensor, index) => (
              <React.Fragment key={sensor.slug}>
                <ProductCard product={sensor} category="sensors" priority={index < 3} />
                
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <FaqPageJsonLd items={productsListingFaq} />
    </div>
  );
}
