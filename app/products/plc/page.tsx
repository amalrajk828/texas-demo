import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard, { type Product } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Programmable Logic Controllers (PLC)",
  description:
    "Explore Mitsubishi Electric's complete PLC lineup — MELSEC iQ-R modular, MELSEC-Q series, and compact iQ-F series (FX5U, FX5UJ, FX5S) programmable controllers.",
  alternates: { canonical: "https://texastechserv.com/products/plc/" },
  openGraph: {
    title: "Mitsubishi Electric PLC | Texas Technical Services",
    description:
      "Mitsubishi Electric's high-reliability programmable logic controllers engineered for precision automation and process control.",
    url: "https://texastechserv.com/products/plc/",
  },
};

const plcProducts: Product[] = [
  {
    id: 1,
    name: "MELSEC iQ-R Series",
    slug: "melsec-iq-r-series",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/MELSEC-iQ-R-Series.png",
    description: "The MELSEC iQ-R Series is Mitsubishi Electric's next-generation modular PLC platform designed for advanced and large-scale industrial automation. It delivers high-speed, high-performance control while improving productivity, engineering efficiency, and system availability. With a scalable modular architecture and a wide range of compatible modules, the iQ-R Series supports logic, process, motion, and information control within a unified system. Ideally suited as a core controller for mission-critical industrial and oil & gas applications."
  },
  {
    id: 2,
    name: "MELSEC-Q Series",
    slug: "melsec-q-series",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/MELSEC-Q-Series-.webp",
    description: "The MELSEC-Q Series is a Mitsubishi Electric modular PLC platform designed for medium to large-scale industrial automation systems. It offers reliable and stable control performance with a flexible, expandable architecture to suit a wide range of applications. With its proven hardware design and extensive module lineup, the MELSEC-Q Series supports logic, process, and motion control, making it a dependable choice for long-term industrial and oil & gas operations."
  },
  {
    id: 3,
    name: "FX5U",
    slug: "fx5u-plc",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/FX5U.png",
    description: "The FX5U is a compact, high-performance PLC from the iQ-F Series by Mitsubishi Electric, designed for efficient control of machines, packages, and auxiliary systems. It combines high-speed processing, built-in I/O, and integrated motion and communication functions in a space-saving design. The FX5U supports system expansion and networking, making it suitable for factory automation and package-based applications within industrial and oil & gas facilities, typically interfaced to higher-level PLC or DCS systems."
  },
  {
    id: 4,
    name: "FX5UJ",
    slug: "fx5uj-plc",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/FX5UJ.png",
    description: "The FX5UJ is a compact PLC from the iQ-F Series by Mitsubishi Electric, equipped as standard with an SD memory card slot, built-in USB (Mini-B) connector, and built-in Ethernet port. It includes built-in functions such as positioning control and high-speed counters, allowing multiple control functions to be integrated into a single unit. By condensing these functions, the FX5UJ improves ease of use, system flexibility, and overall efficiency for machine and package automation applications."
  },
  {
    id: 5,
    name: "FX5S",
    slug: "fx5s-plc",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/FX5S.jpg",
    description: "The FX5S is a PLC from the iQ-F Series by Mitsubishi Electric, standard equipped with a built-in USB (Mini-B) connector and built-in Ethernet port. It features a compact design while condensing high basic performance, including positioning and IoT-related functions, along with ease of use. These features facilitate simple and efficient configuration of user systems, making the FX5S suitable for basic and compact automation applications."
  }
];

export default function PlcPage() {
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
            <span className="text-white">PLC</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              Mitsubishi Electric · PLC Systems
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            PLC
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            Programmable Logic Controllers
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Programmable Logic Controllers
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5821F] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            We offer Mitsubishi Electric&apos;s complete PLC lineup — from compact iQ-F series controllers to large-scale modular iQ-R platforms — engineered for reliability and performance in industrial automation and oil &amp; gas applications.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
          <div className="flex flex-col">
            {plcProducts.map((plc, index) => (
              <React.Fragment key={plc.id}>
                <ProductCard product={plc} category="plc" />
                {index < plcProducts.length - 1 && (
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
                Looking for the right PLC for your application?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our automation engineers can help you select and configure the ideal Mitsubishi Electric PLC for your system.
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
