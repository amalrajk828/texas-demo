import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Scale, Brain, Cpu, Layers } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import { solutionsFaq } from "@/lib/pageFaqData";
import PageHero from "@/components/v3/PageHero";
import CardGrid from "@/components/v3/CardGrid";

export const metadata: Metadata = {
  title: "Solutions — Proprietary Platforms & Strategic Partnerships",
  description:
    "Texas Technical Services delivers end-to-end industrial solutions through proprietary platforms (Texaflow custody metering) and strategic partnerships (Space AI, Mitsubishi Electric, PWS Floor Solutions) across Kuwait, UAE, and the GCC.",
  alternates: { canonical: "/solutions/" },
  openGraph: {
    title: "Solutions — Proprietary Platforms & Strategic Partnerships",
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
    category: "Proprietary Platform",
    tagline: "Custody Metering Integrated Control System",
    description:
      "Our proprietary custody metering integrated control system — advanced fiscal metering & SCADA solution for oil & gas terminals, refineries, pipeline stations, loading facilities, power plants, and airports.",
    stats: [
      { label: "Compliance", val: "API MPMS Ch. 4 / OIML R117" },
      { label: "Deployment", val: "Greenfield & Brownfield" },
    ],
    href: "/solutions/texaflow/",
  },
  {
    slug: "space-ai",
    icon: Brain,
    name: "Space AI",
    category: "Strategic Partnership",
    tagline: "Industrial AI & Machine Learning",
    description:
      "Next-generation AI for industry — predictive maintenance, process optimization with virtual metrology & digital twins, and smart monitoring with ESG & carbon tracking. Reduce unplanned downtime by up to 50%.",
    stats: [
      { label: "Downtime Reduction", val: "Up to 50%" },
      { label: "Inference", val: "Edge & Cloud" },
    ],
    href: "/solutions/space-ai/",
  },
  {
    slug: "mitsubishi-electric",
    icon: Cpu,
    name: "Mitsubishi Electric",
    category: "Authorized Integrator",
    tagline: "Factory Automation Solutions",
    description:
      "Authorized Mitsubishi system integrator — PLC (MELSEC iQ-R/F), HMI (GOT), AC servo drives, frequency inverters, and ICONICS SCADA integration for industrial automation across Kuwait and the GCC.",
    stats: [
      { label: "PLC Series", val: "MELSEC iQ-R / iQ-F / Q" },
      { label: "SCADA", val: "ICONICS GENESIS64" },
    ],
    href: "/solutions/mitsubishi-electric/",
  },
  {
    slug: "pws-floor-solutions",
    icon: Layers,
    name: "PWS Floor Solutions",
    category: "Authorized Dealer",
    tagline: "Raised Access Flooring Systems",
    description:
      "India's most trusted raised access floor manufacturer — high-density calcium sulphate panels for data centers, control rooms, NOCs, and clean rooms with GREENGUARD Gold and EN 12825 certification.",
    stats: [
      { label: "Certification", val: "GREENGUARD Gold / EN 12825" },
      { label: "Core", val: "High-Density Calcium Sulphate" },
    ],
    href: "/solutions/pws-floor-solutions/",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0f172a]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions/" },
        ]}
      />
      <SpeakableJsonLd headline="Solutions — Proprietary Platforms & Strategic Partnerships" />

      {/* Hero */}
      <PageHero
        title="Proprietary Platforms & Strategic Partnerships"
        subtitle="From proprietary custody metering systems to industrial AI, factory automation, and specialized infrastructure — complete integrated solutions backed by world-class engineering."
        badge="Technology Platforms"
      />

      {/* Solutions Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
              Engineered for Enterprise Performance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a]">
              Integrated Industrial Solutions
            </h2>
            <p className="mt-4 text-[16px] text-[#64748b] leading-relaxed">
              Explore our proprietary systems and authorized partner platforms engineered for high reliability in mission-critical environments.
            </p>
          </div>

          <CardGrid max={2}>
            {SOLUTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.slug}
                  className="group relative flex flex-col justify-between rounded-[28px] border border-black/[0.06] bg-[#f8fafc] p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 hover:border-[#6b1a1f]/30"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center text-[#6b1a1f] shadow-sm group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7" strokeWidth={1.8} />
                      </div>
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#6b1a1f]/10 text-[#6b1a1f]">
                        {s.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#6b1a1f] transition-colors mb-1">
                      {s.name}
                    </h3>
                    <p className="text-[13px] font-semibold text-[#0891b2] uppercase tracking-wider mb-4">
                      {s.tagline}
                    </p>
                    <p className="text-[15px] text-[#475569] leading-relaxed mb-6">
                      {s.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8 pt-6 border-t border-black/[0.06]">
                      {s.stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-xl p-3 border border-black/[0.04]">
                          <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">{stat.label}</div>
                          <div className="text-[12px] font-bold text-[#0f172a] mt-0.5 truncate">{stat.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={s.href}
                    className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-white text-[#0f172a] font-semibold text-[14px] border border-black/[0.08] shadow-sm hover:bg-[#6b1a1f] hover:text-white hover:border-[#6b1a1f] transition-all duration-200 group-hover:border-[#6b1a1f]"
                  >
                    <span>Explore Platform Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </CardGrid>
        </div>
      </section>

      {/* Alternating grey section: FAQ */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FaqPageJsonLd items={solutionsFaq} />
          <PageFaqSection items={solutionsFaq} title="Frequently Asked Questions" highlight="Solutions Overview" />
        </div>
      </section>
    </div>
  );
}
