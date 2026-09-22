"use client";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  { name: "FLOWSIC600",          category: "Gas Flow Meters",  brand: "SICK",       slug: "flowsic600" },
  { name: "MELSEC iQ-R Series",  category: "PLC Systems",      brand: "Mitsubishi", slug: "melsec-iq-r-series" },
  { name: "Genesis64",           category: "ICONICS SCADA",    brand: "ICONICS",    slug: "genesis64" },
  { name: "MelSERVO-JET Series", category: "AC Servos",        brand: "Mitsubishi", slug: "melservo-jet-servo-drive" },
  { name: "GOT2000 Series",      category: "HMI Panels",       brand: "Mitsubishi", slug: "got2000series" },
  { name: "MCS200HW",            category: "CEMS Analyzers",   brand: "SICK",       slug: "mcs200hw" },
];

export default function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#f4f5f8] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          ref={ref}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-px bg-[#0891B2]/40" />
              <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
                Our Products
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0D26]">
              Trusted instrumentation
              <br className="hidden sm:block" /> &amp; automation
            </h2>
          </div>
          <Link
            href="/products/"
            className="inline-flex items-center gap-1.5 text-[#e7212b] hover:text-[#aa0b1b] text-[14px] font-semibold transition-colors shrink-0"
          >
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((prod, i) => (
            <div
              key={prod.slug}
            >
              <Link
                href={`/portfolio/${prod.slug}/`}
                className="group flex flex-col border border-[#e8eaf0] hover:border-[#e7212b]/50 rounded-xl overflow-hidden bg-white transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                {/* Image placeholder area */}
                <div className="h-44 bg-[#000000] blueprint-grid blueprint-dot-grid relative flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white/20 text-[11px] tracking-[2px] uppercase font-medium">
                      {prod.brand}
                    </p>
                    <p className="text-white/35 text-[13px] mt-1">{prod.category}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e7212b] to-transparent" />
                </div>
                {/* Body */}
                <div className="p-5 flex-1">
                  <p className="text-[11px] text-gray-400 mb-1 font-medium uppercase tracking-wide">{prod.category}</p>
                  <p className="text-[15px] font-semibold text-[#0B0D26] group-hover:text-[#e7212b] transition-colors leading-snug">
                    {prod.name}
                  </p>
                  <p className="text-[12px] text-gray-400 mt-1">{prod.brand}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
