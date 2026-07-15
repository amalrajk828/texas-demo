import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Maximize2, Cable, Monitor, Wind, Layers, Wrench, RefreshCw, Move, Hammer, Award, Shield } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { getProductsByPath } from "@/lib/products";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Control Room Interior & Console - Texas Technical Services",
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
    title: "Control Room Interior & Console - Texas Technical Services",
    description: "Pyrotech Workspace Solutions delivers turnkey Control Room Solutions and Ergonomic Command Centre Consoles designed for sustainable, safe and contemporary workspaces.",
    url: "/products/control-room-interior-and-console/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Control Room Interior & Console - Texas Technical Services",
    description: "Pyrotech Workspace Solutions delivers turnkey Control Room Solutions and Ergonomic Command Centre Consoles designed for sustainable, safe and contemporary workspaces.",
  },
};

const ERGONOMIC_FEATURES = [
  {
    Icon: Maximize2,
    title: "Motorized Height Adjustment",
    body: "Sit-stand capability ensuring operator wellness & alertness",
  },
  {
    Icon: Cable,
    title: "Advanced Cable Management",
    body: "Integrated concealed channels for clean, safe workspaces",
  },
  {
    Icon: Monitor,
    title: "Multi-Monitor Arrays",
    body: "Flexible heavy-duty mounting for expansive visualization",
  },
  {
    Icon: Wind,
    title: "Environmental Control",
    body: "Personalized ventilation and task lighting integration",
  },
  {
    Icon: Layers,
    title: "Modular Architecture",
    body: "Scalable configurations adaptable to any room layout",
  },
];

const STANDARDS = [
  { name: "ISO 11064", desc: "Ergonomics" },
  { name: "GREENGUARD", desc: "Certified" },
  { name: "GREENGUARD", desc: "Gold" },
  { name: "ISO 9001", desc: "Quality" },
  { name: "BIFMA / SEFA / ASTM", desc: "Compliance" },
];

const TURNKEY_EXECUTION = [
  "Site Survey & Planning: Detailed room layout & workflow optimization",
  "Environmental Design: HVAC, acoustics, lighting & ESD flooring",
  "Console Design: 3D visualization, VR walkthroughs & mock-ups",
  "Technical Integration: Electrical, network, AV, KVM & Video Walls",
  "Installation: Factory acceptance (FAT) & site commissioning (SAT)",
];

const ERGONOMIC_STUDIES = [
  "ISO 11064 Compliance: Ergonomic design of control centers",
  "Sightline Analysis: Optimal viewing angles for video walls",
  "Reach Envelopes: Operator workspace efficiency zones",
  "Human Factors: Fatigue reduction & alertness engineering",
  "Design Exclusivity: Certified unique designs for every client",
];

const LIFECYCLE_SUPPORT = [
  { Icon: Wrench, label: "Maintenance Support", desc: "Upon Request" },
  { Icon: Shield, label: "Warranty Support", desc: "10 Years" },
  { Icon: RefreshCw, label: "Technology Refresh", desc: "Hardware & furniture upgrades" },
  { Icon: Move, label: "MAC Services", desc: "Moves, Adds & Changes support" },
  { Icon: Hammer, label: "Expansion Studies", desc: "Scalability planning for future growth" },
];

const CREST_STATS = [
  { num: "18+", label: "Years Experience" },
  { num: "60,000+", label: "Installations" },
  { num: "30+", label: "Countries" },
];

export default function ControlRoomPage() {
  const products = getProductsByPath("/products/control-room-interior-and-console/");
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Control Room Interior & Console", href: "/products/control-room-interior-and-console/" },
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
            <span className="text-white">Control Room Interior &amp; Console</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              Control Room Interior &amp; Console
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
            Control Room Interior &amp; Console
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            Ergonomic control room furniture and console systems for critical operations — from Pyrotech Workspace Solutions.
          </p>

          {/* Stats strip */}
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-2xl">
            {CREST_STATS.map((s) => (
              <div key={s.label} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
                <p className="text-white text-[1.4rem] font-black leading-none">{s.num}</p>
                <p className="text-white/50 text-[10px] mt-1.5 font-semibold tracking-[1.5px] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Control Room Solutions by Pyrotech
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5821F] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Pyrotech Workspace Solutions is a founder for delivering turnkey Control Room Solutions and Ergonomic Command Centre Console. Their idea of a command centre is based on sustainable, safe and contemporary workspace for both the operators and the equipment. They are looking further to provide ultra-modern designs with strict adherence to international standards of Control Rooms Solutions &amp; Control desks.
          </p>
        </div>
      </section>

      {/* ── Ergonomic Features ───────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
              Ergonomic Features
            </span>
            <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
              Built for 24/7 Mission-Critical Operators
            </h2>
            <p className="text-[#555770] text-[14px] mt-3 max-w-2xl mx-auto">
              Operator comfort and ergonomic excellence are at the core of every Pyrotech console design — reducing fatigue, sharpening alertness, and ensuring sustainable performance during long shifts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {ERGONOMIC_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl bg-white border border-[#E8E8F0] p-5 hover:border-[#F5821F]/30 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5821F]/10 flex items-center justify-center mb-3">
                  <f.Icon className="w-5 h-5 text-[#F5821F]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[#1A1A2E] text-[14px] font-bold leading-tight mb-1.5">
                  {f.title}
                </h3>
                <p className="text-[#555770] text-[12.5px] leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YouTube Embed ──────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <YouTubeEmbed url="https://youtu.be/t90rfWiViw8" />
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
          <div className="flex flex-col">
            {products.map((product, index) => (
              <React.Fragment key={product.slug}>
                <ProductCard
                  product={product}
                  category="Control Room Interior & Console"
                  imageFit="contain"
                />
                {index < products.length - 1 && (
                  <div className="border-t border-[#E8E8F0] my-[10px]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Turnkey Control Room Services ──────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
              End-to-End Solutions
            </span>
            <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
              Turnkey Control Room Services
            </h2>
            <p className="text-[#555770] text-[14px] mt-3 max-w-2xl mx-auto">
              Design, build, and maintain your mission-critical control room — from concept to commissioning and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Turnkey Execution */}
            <div className="rounded-2xl border-2 border-[#1A1A2E] p-7 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Hammer className="w-5 h-5 text-[#F5821F]" strokeWidth={1.8} />
                <h3 className="text-[#1A1A2E] text-[18px] font-bold">Turnkey Execution</h3>
              </div>
              <p className="text-[#F5821F] text-[11px] font-semibold tracking-wide uppercase mb-4">
                Concept to Commissioning
              </p>
              <ul className="space-y-2.5 text-[13px] text-[#555770] leading-relaxed">
                {TURNKEY_EXECUTION.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5821F] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ergonomic Studies */}
            <div className="rounded-2xl border-2 border-[#1A1A2E] p-7 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-[#F5821F]" strokeWidth={1.8} />
                <h3 className="text-[#1A1A2E] text-[18px] font-bold">Ergonomic Studies</h3>
              </div>
              <p className="text-[#F5821F] text-[11px] font-semibold tracking-wide uppercase mb-4">
                Human Factors Engineering
              </p>
              <ul className="space-y-2.5 text-[13px] text-[#555770] leading-relaxed">
                {ERGONOMIC_STUDIES.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5821F] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifecycle Support */}
            <div className="rounded-2xl border-2 border-[#1A1A2E] p-7 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5 text-[#F5821F]" strokeWidth={1.8} />
                <h3 className="text-[#1A1A2E] text-[18px] font-bold">Lifecycle Support</h3>
              </div>
              <p className="text-[#F5821F] text-[11px] font-semibold tracking-wide uppercase mb-4">
                Ongoing Maintenance &amp; Upgrades
              </p>
              <ul className="space-y-3 text-[13px] text-[#555770] leading-relaxed">
                {LIFECYCLE_SUPPORT.map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <item.Icon className="w-4 h-4 text-[#F5821F] shrink-0 mt-0.5" strokeWidth={1.8} />
                    <div>
                      <p className="font-semibold text-[#1A1A2E]">{item.label}</p>
                      <p className="text-[#555770] text-[12.5px]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── International Quality Standards ────────────────────── */}
      <section className="bg-[#1A1A2E] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase mb-2">
                International Quality Standards
              </p>
              <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                Globally Certified — Built to the World&apos;s Strictest Standards
              </h3>
              <p className="text-white/55 text-[13px] mt-2">
                Compliance with BIFMA, SEFA, and ASTM standards
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {STANDARDS.map((s) => (
                <div
                  key={s.name + s.desc}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-center min-w-[100px]"
                >
                  <p className="text-white text-[12px] font-bold leading-tight">
                    {s.name}
                  </p>
                  <p className="text-white/50 text-[10px] mt-0.5">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-sell: Access Flooring ────────────────────────── */}
      <section className="bg-white py-12 border-t border-[#E8E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-[#E8E8F0] bg-gradient-to-br from-[#F8F9FA] to-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
                Complete the Package
              </span>
              <h3 className="mt-2 text-[#1A1A2E] text-xl font-bold">
                Pair Your Console with PWS Raised Access Flooring
              </h3>
              <p className="text-[#555770] text-[14px] mt-2 max-w-xl">
                India&apos;s most trusted raised access floor — high-density calcium
                sulphate panels purpose-built for control rooms, with vibration
                control, cable management, and GREENGUARD Gold certification.
              </p>
            </div>
            <Link
              href="/products/access-flooring/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#0B0D26] text-white font-semibold px-6 py-3.5 rounded-[6px] transition-colors text-[14px]"
            >
              Explore Access Flooring →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#F5821F] py-16">
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
