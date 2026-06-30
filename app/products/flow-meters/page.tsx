import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Flow Meters - Texas Technical Services",
  description:
    "Precision flow measurement instruments for liquids, gases, and flare applications from SICK and Faure Herman — custody transfer and process monitoring solutions.",
  alternates: { canonical: "https://texastechserv.com/products/flow-meters/" },
  openGraph: {
    title: "Flow Meters - Texas Technical Services",
    description:
      "Precision flow measurement instruments for liquids, gases, and flare applications from SICK and Faure Herman.",
    url: "https://texastechserv.com/products/flow-meters/",
  },
};

export default function FlowMetersPage() {
  const flowMetersProducts = getProductsByPath("/products/flow-meters/");
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
            background:
              "radial-gradient(ellipse, rgba(245,130,31,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link
              href="/products"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Flow Meters</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              SICK · Flow Measurement
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            Flow Meters
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            Liquid, Gas &amp; Flare Flow Measurement Solutions
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Flow Measurement Solutions
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5821F] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Flow measurement technology finds applications across various
            industries, and SICK is well-equipped to address this diverse
            challenge. The company boasts a comprehensive product portfolio of
            cutting-edge sensor technology, catering to a wide range of needs.
            Whether it&apos;s custody transfer meters or devices for monitoring
            and control, SICK&apos;s flow measurement technology consistently
            operates with utmost safety and reliability. Even in challenging
            process and ambient conditions, the technology remains up-to-date
            and ensures accurate performance.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
          <div className="flex flex-col">
            {flowMetersProducts.map((prod, index) => {
              const cardHref =
                prod.slug === "liquid-flow-meters"
                  ? "/products/flow-meters/liquid-flow-meters/"
                  : prod.slug === "flare-meters"
                    ? "/products/flow-meters/flare-meters/"
                    : prod.slug === "gas-flow-meters"
                      ? "/products/flow-meters/gas-flow-meters/"
                      : undefined;
              return (
                <React.Fragment key={prod.slug}>
                  <ProductCard
                    product={prod}
                    category="Flow Meters"
                    href={cardHref}
                  />
                  {index < flowMetersProducts.length - 1 && (
                    <div className="border-t border-[#E8E8F0] my-[10px]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#F5821F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-[22px] mb-1">
                Need help selecting the right flow meter?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our flow measurement specialists can help you choose and
                configure the right liquid, gas, or flare flow meter for your
                application.
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
