import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard, { type Product } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Frequency Inverters (VFD) | Variable Frequency Drives",
  description:
    "Explore Mitsubishi Electric's FR Series frequency inverters (VFD) for precise motor speed control, energy savings, and industrial reliability.",
  alternates: { canonical: "https://texastechserv.com/products/frequency-inverter-vfd/" },
  openGraph: {
    title: "Mitsubishi Electric Frequency Inverters (VFD) | Texas Technical Services",
    description:
      "Mitsubishi Electric's FR Series frequency inverters (VFD) delivering energy savings and motor speed control across industrial applications.",
    url: "https://texastechserv.com/products/frequency-inverter-vfd/",
  },
};

const vfdProducts: Product[] = [
  {
    id: 1,
    name: "FR-CS80 Series",
    slug: "fr-cs80-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/CS80.webp",
    description: "The FR-CS80 Series is a compact and smart frequency inverter (VFD) from Mitsubishi Electric, offering general-purpose magnetic flux vector motor control in one of the industry's smallest compact bodies. The design focuses on space-saving installation, ease of use, and reliable performance for a wide range of industrial applications."
  },
  {
    id: 2,
    name: "FR-D700 Series",
    slug: "fr-d700-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-E800.webp",
    description: "The FR-D700 Series from Mitsubishi Electric is a compact, general-purpose frequency inverter designed for simple, reliable, and cost-efficient motor speed control. Featuring a space-saving design, easy operation, and stable performance, the FR-D700 Series is well suited for basic industrial drive applications. It provides an economical solution for factories, utilities, and auxiliary systems where simplicity, reliability, and low total cost are key requirements."
  },
  {
    id: 3,
    name: "FR-E800 Series",
    slug: "fr-e800-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-E800-2.webp",
    description: "The FR-E800 Series is Mitsubishi Electric's advanced compact frequency inverter designed for high-efficiency motor control in general-purpose, pump, and fan applications. It delivers vector control performance, high-speed stability, built-in safety, and Ethernet connectivity in a space-saving design, making it ideal for modern HVAC systems, water treatment plants, and industrial utility drives."
  },
  {
    id: 4,
    name: "E800-E Series",
    slug: "e800-e-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-E800.webp",
    description: "The FR-E800-E Series is Mitsubishi Electric's advanced compact frequency inverter with dedicated Ethernet communication, designed for high-efficiency motor control in general-purpose, pump, and fan applications. It delivers vector control performance, high-speed stability, built-in safety, and seamless Ethernet network integration for modern industrial and HVAC utility drives."
  },
  {
    id: 5,
    name: "E800-SCE Series",
    slug: "e800-sce-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-E800-2.webp",
    description: "The FR-E800-SCE Series is Mitsubishi Electric's advanced compact frequency inverter with Ethernet Safety Communication, designed for applications requiring both high-efficiency motor control and integrated functional safety. It supports Safety over EtherNet/IP and delivers vector control performance, high-speed stability, and built-in safety functions in a space-saving design."
  },
  {
    id: 6,
    name: "FR-F800 Series",
    slug: "fr-f800-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-F800.webp",
    description: "The FR-F800 Series is Mitsubishi Electric's high-performance energy-saving inverter designed specifically for pump, fan, and HVAC applications. It combines advanced vector control, high efficiency, built-in energy optimization, and robust industrial design, making it ideal for large HVAC plants, water treatment facilities, and oil & gas utility systems. The FR-F800 is optimized for continuous-duty, high-reliability operation in demanding environments."
  },
  {
    id: 7,
    name: "FR-F800-E Series",
    slug: "fr-f800-e-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-F800.webp",
    description: "The FR-F800-E Series is an energy-optimized pump and fan inverter with built-in Ethernet and BACnet/IP, designed for direct integration into HVAC, BMS, and utility networks. It delivers high-efficiency pump and fan control with seamless connectivity to building management and industrial automation systems."
  },
  {
    id: 8,
    name: "FR-F846-E Series",
    slug: "fr-f846-e-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-F800.webp",
    description: "The FR-F846-E2 is the IP55 stand-alone version of the proven FR-F800 series, designed for installation outside control panels in demanding industrial and HVAC environments. Its IP55 enclosure rating allows direct field mounting, eliminating the need for an additional control panel enclosure in many applications."
  },
  {
    id: 9,
    name: "FR-A800-E Series",
    slug: "fr-a800-e-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-A800.webp",
    description: "The FR-A800-E Series is Mitsubishi Electric's high-performance industrial inverter with built-in 100 Mbit Ethernet TCP/IP, enabling advanced remote monitoring, parameter adjustment, and seamless integration into modern networked control systems. It delivers servo-like vector control, high torque, and fast dynamic response for demanding applications such as cranes, hoists, conveyors, and heavy industrial machinery."
  },
  {
    id: 10,
    name: "FR-A741 Regenerative Series",
    slug: "fr-a741-regenerative-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-A800.webp",
    description: "The FR-A741 Regenerative Inverter is a compact, high-performance frequency inverter designed for hoist drives and high-powered machines where motor torque is used for regenerative braking. It features a built-in regenerative converter that feeds braking energy back into the power supply instead of dissipating it as heat, providing an energy-efficient and low-heat solution for lifting, lowering, and overhauling load applications."
  }
];

export default function VfdPage() {
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
            <span className="text-white">Frequency Inverters (VFD)</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              Mitsubishi Electric · Drive Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            Frequency Inverters (VFD)
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            Variable Frequency Drives — Mitsubishi Electric
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Frequency Inverters (VFD)
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5821F] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Mitsubishi Electric&apos;s FR Series frequency inverters deliver precise motor speed control, energy savings, and industrial reliability across a full range of applications — from compact utility drives to high-performance crane and hoist systems in oil &amp; gas, HVAC, water treatment, and heavy industry.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
          <div className="flex flex-col">
            {vfdProducts.map((vfd, index) => (
              <React.Fragment key={vfd.id}>
                <ProductCard product={vfd} category="frequency-inverter-vfd" />
                {index < vfdProducts.length - 1 && (
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
                Need the right VFD for your application?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our drive specialists can help you select, size, and configure the ideal Mitsubishi Electric frequency inverter for your system.
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
