import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { productsListingFaq } from "@/lib/pageFaqData";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

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
      <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden border-b-4 border-[#e7212b]">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(231,33,43,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-[calc(var(--navbar-height,92px)+1.75rem)] pb-16 lg:pt-[calc(var(--navbar-height,92px)+2.5rem)] lg:pb-20">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Custody Metering Solutions</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              SICK · OMNI · Custody Transfer
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
            Custody Metering Solutions
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            Flow Metering Skids, Flow Computers & Control Systems
          </p>
        </div>
      </section>

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
