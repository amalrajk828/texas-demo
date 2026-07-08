import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "AC Servos - Texas Technical Services",
  description: "Mitsubishi Electric MELSERVO AC servo drives and motors for precise motion control in industrial automation.",
  alternates: { canonical: "https://texastechserv.com/products/acservos/" },
  keywords: [
    "Mitsubishi AC servo drives",
    "MELSERVO servo motors",
    "MR-J5 servo amplifier",
    "motion control solutions Kuwait",
  ],
  openGraph: {
    title: "AC Servos - Texas Technical Services",
    description: "Mitsubishi Electric MELSERVO AC servo drives and motors for precise motion control in industrial automation.",
    url: "https://texastechserv.com/products/acservos/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Servos - Texas Technical Services",
    description: "Mitsubishi Electric MELSERVO AC servo drives and motors for precise motion control in industrial automation.",
  },
};

export default function AcServosPage() {
  const acServosData = getProductsByPath("/products/acservos/");
  // Group products by series using slug prefixes for compatibility
  const jeSeriesProducts = acServosData.filter((p) => p.slug.startsWith("melservo-je-"));
  const jetSeriesProducts = acServosData.filter((p) => p.slug.startsWith("melservo-jet-"));

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "AC Servos", href: "/products/acservos/" },
      ]} />
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
            <span className="text-white">AC Servos</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              Mitsubishi Electric · Motion Control
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            AC Servos
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            AC Servo Drives & Motors — Mitsubishi Electric
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            AC Servo Drives & Motors
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5821F] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Mitsubishi Electric&apos;s MELSERVO series delivers precise, high-performance AC servo solutions for OEM machines and industrial automation — from compact cost-effective MR-JE drives for basic positioning to advanced EtherCAT-based MR-JET systems for synchronized multi-axis motion control.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
          <div className="flex flex-col">
            
            {/* ── MELSERVO-JE Group ── */}
            <div className="bg-[#FFF8F3] border-l-4 border-[#F5821F] py-3 px-6 mt-8 mb-4 flex items-center gap-4 shadow-sm rounded-[4px]">
              <span className="text-[#1A1A2E] font-bold text-base font-sans leading-none uppercase tracking-wider">
                MELSERVO-JE Series
              </span>
              <div className="h-px bg-[#F5821F]/20 flex-1" />
            </div>
            
            <div className="flex flex-col gap-6">
              {jeSeriesProducts.map((servo) => (
                <ProductCard key={servo.slug} product={servo} category="acservos" />
              ))}
            </div>

            {/* ── MELSERVO-JET Group ── */}
            <div className="bg-[#FFF8F3] border-l-4 border-[#F5821F] py-3 px-6 mt-12 mb-4 flex items-center gap-4 shadow-sm rounded-[4px]">
              <span className="text-[#1A1A2E] font-bold text-base font-sans leading-none uppercase tracking-wider">
                MELSERVO-JET Series
              </span>
              <div className="h-px bg-[#F5821F]/20 flex-1" />
            </div>

            <div className="flex flex-col gap-6">
              {jetSeriesProducts.map((servo) => (
                <ProductCard key={servo.slug} product={servo} category="acservos" />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#F5821F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-[22px] mb-1">
                Need help selecting the right servo system?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our motion control specialists can help you select, size, and configure the right Mitsubishi Electric servo drive and motor combination for your machine.
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
