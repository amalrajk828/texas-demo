import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { VideoObjectJsonLd } from "@/components/schema/VideoObjectJsonLd";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ControlRoomErgonomicSection from "@/components/products/ControlRoomErgonomicSection";
import ControlRoomServicesSection from "@/components/products/ControlRoomServicesSection";
import ControlRoomStandardsSection from "@/components/products/ControlRoomStandardsSection";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Control Room Interior & Console",
  description: "Pyrotech Workspace Solutions delivers turnkey Control Room Solutions and Ergonomic Command Centre Consoles designed for sustainable, safe and contemporary workspaces. ISO 11064 compliant.",
  alternates: { canonical: "/products/control-room-interior-and-console/" },
  keywords: [
    "control room solutions Kuwait",
    "command centre consoles",
    "Pyrotech workspace solutions",
    "ergonomic control room design",
    "ISO 11064 control room",
    "operator console Kuwait",
    "turnkey control room GCC",
    "control room interior design",
  ],
  openGraph: {
    title: "Control Room Interior & Console",
    description: "Pyrotech Workspace Solutions delivers turnkey Control Room Solutions and Ergonomic Command Centre Consoles designed for sustainable, safe and contemporary workspaces.",
    url: "/products/control-room-interior-and-console/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Control Room Interior & Console",
    description: "Pyrotech Workspace Solutions delivers turnkey Control Room Solutions and Ergonomic Command Centre Consoles designed for sustainable, safe and contemporary workspaces.",
  },
};

export default function ControlRoomPage() {
  const products = getProductsByPath("/products/control-room-interior-and-console/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Control Room Interior & Console", href: "/products/control-room-interior-and-console/" },
      ]} />
      <VideoObjectJsonLd
        name="Control Room Interior & Console Solutions"
        description="Pyrotech Workspace Solutions delivers turnkey Control Room Solutions and Ergonomic Command Centre Consoles designed for sustainable, safe and contemporary workspaces."
        thumbnailUrl="https://img.youtube.com/vi/t90rfWiViw8/maxresdefault.jpg"
        contentUrl="https://www.youtube.com/watch?v=t90rfWiViw8"
        embedUrl="https://www.youtube.com/embed/t90rfWiViw8"
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
            <span className="text-white">Control Room Interior & Console</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              Control Room Interior & Console
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
            Control Room Interior & Console
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            Ergonomic control room furniture and console systems for critical operations — from Pyrotech Workspace Solutions.
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Control Room Solutions by Pyrotech
          </h2>
          <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Pyrotech Workspace Solutions is a founder for delivering turnkey Control Room Solutions and Ergonomic Command Centre Console. Their idea of a command centre is based on sustainable, safe and contemporary workspace for both the operators and the equipment. They are looking further to provide ultra-modern designs with strict adherence to international standards of Control Rooms Solutions &amp; Control desks.
          </p>
        </div>
      </section>

      <ControlRoomErgonomicSection />

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <YouTubeEmbed url="https://youtu.be/t90rfWiViw8" />
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
                category="Control Room Interior & Console"
                imageFit="contain"
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      <ControlRoomServicesSection />
      <ControlRoomStandardsSection />

      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3px] uppercase">
                Complete the Package
              </span>
              <h3 className="mt-2 text-[#1A1A2E] text-xl font-bold">
                Pair Your Console with PWS Raised Access Flooring
              </h3>
              <p className="text-gray-500 text-[14px] mt-2 max-w-xl">
                India&apos;s most trusted raised access floor — high-density calcium
                sulphate panels purpose-built for control rooms, with vibration
                control, cable management, and GREENGUARD Gold certification.
              </p>
            </div>
            <Link
              href="/solutions/pws-floor-solutions/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#0B0D26] text-white font-semibold px-6 py-3.5 rounded-[6px] transition-colors text-[14px]"
            >
              Explore Access Flooring →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#e7212b] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-[22px] mb-1">
                Need a custom control room solution?
              </p>
              <p className="text-[#A0A8C0] text-sm">
                Our team can help you design and deploy the ideal command centre for your operations.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-[#e7212b]/20 transition-all duration-200"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
