import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard, { type Product } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "ICONICS SCADA & HMI Software",
  description:
    "Explore ICONICS software solutions for real-time industrial visualization, alarm management, historical logging, and process control systems.",
  alternates: { canonical: "https://texastechserv.com/products/iconics/" },
  openGraph: {
    title: "ICONICS Software | Texas Technical Services",
    description:
      "ICONICS industry-leading SCADA, HMI, and analytics software for real-time operations visualization.",
    url: "https://texastechserv.com/products/iconics/",
  },
};

const iconicsProducts: Product[] = [
  {
    id: 1,
    name: "GENESIS64",
    slug: "genesis64",
    tag: "ICONICS SCADA & HMI",
    image: "/images/iconics/GENESIS64.webp",
    description: "GENESIS64 is a 64-bit, web-enabled SCADA and HMI software suite from ICONICS, designed for real-time visualization, monitoring, and control of industrial processes. Built on a modern, scalable architecture, GENESIS64 provides advanced graphics, alarm management, historical data logging, and analytics. It supports seamless integration with PLCs, DCS, and field devices, making it suitable for industrial, infrastructure, and energy applications."
  }
];

export default function IconicsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#F5821F]">
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
            background: "radial-gradient(ellipse, rgba(245,130,31,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">ICONICS</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              ICONICS · SCADA &amp; HMI Software
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            ICONICS
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            SCADA, HMI &amp; Industrial Software
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            ICONICS Software Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5821F] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            ICONICS delivers industry-leading SCADA, HMI, and analytics software for real-time visualization and control of industrial operations — from oil &amp; gas and power generation to manufacturing and smart infrastructure.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
          <div className="flex flex-col">
            {iconicsProducts.map((prod, index) => (
              <React.Fragment key={prod.id}>
                <ProductCard product={prod} category="iconics" />
                {index < iconicsProducts.length - 1 && (
                  <div className="border-t border-[#E8E8F0] my-[10px]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#F5821F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-[22px] mb-1">
                Ready to modernize your control room?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our engineers can help you evaluate, design, and deploy ICONICS SCADA solutions for your facility.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#F5821F] hover:bg-[#e07214] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#F5821F]/20 transition-all duration-200"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
