import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Scale, Brain, Cpu, Layers } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Solutions — Proprietary Platforms & Strategic Partnerships",
  description:
    "Texas Technical Services delivers end-to-end industrial solutions through proprietary platforms (Texaflow custody metering) and strategic partnerships (Space AI, Mitsubishi Electric, PWS Floor Solutions) across Kuwait, UAE, and the GCC.",
  alternates: { canonical: "/solutions/" },
  openGraph: {
    title: "Solutions",
    description:
      "Proprietary platforms and strategic partnerships — Texaflow, Space AI, Mitsubishi Electric, PWS Floor Solutions.",
    url: "/solutions/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions",
    description:
      "Proprietary platforms and strategic partnerships — Texaflow custody metering, Space AI industrial AI, Mitsubishi Electric automation, PWS raised access flooring.",
  },
  keywords: [
    "industrial solutions Kuwait",
    "Texaflow custody metering",
    "Space AI industrial AI",
    "Mitsubishi Electric automation Kuwait",
    "PWS raised access flooring",
    "proprietary industrial solutions GCC",
    "strategic technology partnerships",
  ],
};

const SOLUTIONS = [
  {
    slug: "texaflow",
    icon: Scale,
    name: "Texaflow",
    tagline: "Custody Metering Integrated Control System",
    description:
      "Our proprietary custody metering integrated control system — advanced fiscal metering & SCADA solution for oil & gas terminals, refineries, pipeline stations, loading facilities, power plants, and airports.",
    href: "/solutions/texaflow/",
  },
  {
    slug: "space-ai",
    icon: Brain,
    name: "Space AI",
    tagline: "Industrial AI & Machine Learning",
    description:
      "Next-generation AI for industry — predictive maintenance, process optimization with virtual metrology & digital twins, and smart monitoring with ESG & carbon tracking. Reduce unplanned downtime by up to 50%.",
    href: "/solutions/space-ai/",
  },
  {
    slug: "mitsubishi-electric",
    icon: Cpu,
    name: "Mitsubishi Electric",
    tagline: "Factory Automation Solutions",
    description:
      "Authorized Mitsubishi system integrator — PLC (MELSEC), HMI (GOT), AC servo drives, frequency inverters, and ICONICS SCADA integration for industrial automation across Kuwait and the GCC.",
    href: "/solutions/mitsubishi-electric/",
  },
  {
    slug: "pws-floor-solutions",
    icon: Layers,
    name: "PWS Floor Solutions",
    tagline: "Raised Access Flooring Systems",
    description:
      "India's most trusted raised access floor manufacturer — high-density calcium sulphate panels for data centers, control rooms, NOCs, and clean rooms with GREENGUARD Gold certification.",
    href: "/solutions/pws-floor-solutions/",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions/" },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#e7212b]">
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
            background: "radial-gradient(ellipse, rgba(231,33,43,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Solutions</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              Our Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4 max-w-3xl">
            Proprietary Platforms &amp;{" "}
            <span className="text-[#e7212b]">Strategic Partnerships</span>
          </h1>
          <p className="text-white/60 text-base max-w-2xl">
            From proprietary custody metering systems to industrial AI and factory
            automation — we deliver complete, integrated solutions backed by
            world-class OEM partnerships.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-white text-[1.5rem] font-black leading-none">4</p>
              <p className="text-white/50 text-[10px] mt-1 font-semibold tracking-[1.5px] uppercase">
                Solution Platforms
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-white text-[1.5rem] font-black leading-none">6</p>
              <p className="text-white/50 text-[10px] mt-1 font-semibold tracking-[1.5px] uppercase">
                Countries Served
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION CARDS ───────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="group relative flex flex-col gap-5 rounded-xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:border-[#e7212b]/30 hover:shadow-xl hover:shadow-[#e7212b]/5 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-[#181D4E] text-[18px] font-bold leading-snug">
                      {s.name}
                    </h3>
                    <p className="text-[12px] font-semibold tracking-wide text-[#e7212b] uppercase mt-0.5">
                      {s.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-[14.5px] leading-[1.7]">
                  {s.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#e7212b] group-hover:gap-2.5 transition-all">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
