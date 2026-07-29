import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

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
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#e7212b]">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
          }}
        />
        {/* Orange radial glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(231,33,43,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">GOT</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              Mitsubishi Electric · HMI Systems
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            GOT
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            Graphic Operator Panels (HMI)
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            GOT — Graphic Operator Panels
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
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

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#e7212b] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-[22px] mb-1">
                Looking for the right HMI for your application?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our engineers can help you select and configure the ideal GOT HMI panel for your control system.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#e7212b]/20 transition-all duration-200"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
