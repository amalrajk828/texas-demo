import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import { partnersFaq } from "@/lib/pageFaqData";
import { PARTNERS, STRATEGIC_PARTNERS } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Global Network — 15+ Authorized Partners",
  description:
    "Texas Technical Services Co. is the authorized partner and distributor for 15+ world-class OEMs in Kuwait, UAE, and the GCC — covering flow measurement, industrial automation, analyzers, sensors, and SCADA.",
  alternates: { canonical: "/partners/" },
  openGraph: {
    title: "Global Network | Texas Technical Services",
    description:
      "15+ authorized partnerships and dealerships — Endress+Hauser, SICK, Faure Herman, KEM Küppers, HMS Networks, NOVUS, OMNI, and more.",
    url: "/partners/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Network | Texas Technical Services",
    description:
      "15+ authorized partnerships — Endress+Hauser, SICK, Faure Herman, KEM Küppers, HMS Networks, NOVUS, OMNI, and more OEMs across Kuwait and the GCC.",
  },
  keywords: [
    "authorized partners Kuwait",
    "industrial OEM distributor Kuwait",
    "Endress Hauser distributor Kuwait",
    "Faure Herman distributor Kuwait",
    "KEM Kuppers distributor",
    "HMS Networks Kuwait",
    "SICK sensors Kuwait",
    "OMNI flow computer Kuwait",
    "global network industrial automation",
    "Texas Technical Services partners",
  ],
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Global Network", href: "/partners/" },
        ]}
      />
      <SpeakableJsonLd headline="Global Network | 15+ Authorized Partners & Vendors" />
      <ServiceJsonLd
        name="Global Network — Authorized Partnerships & Distribution"
        description="Texas Technical Services is the authorized partner and distributor for 15+ world-class OEMs across Kuwait, UAE, and the GCC — covering flow measurement, industrial automation, analyzers, sensors, and SCADA."
        url="/partners/"
        serviceType="OEM Partnership & Distribution"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
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
            background: "radial-gradient(ellipse, rgba(231,33,43,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Global Network</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#0891B2] text-[10px] font-medium tracking-[2.5px] uppercase">
              Global Network
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4 max-w-3xl">
            Authorized Partnerships &amp; Dealerships
          </h1>
          <p className="text-white/70 text-base max-w-2xl">
            16+ approved global vendors delivering world-class flow
            measurement, industrial automation, and instrumentation solutions
            across Kuwait, UAE, and the GCC. From field devices to enterprise
            analytics — a complete integrated ecosystem.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-white text-[1.5rem] font-black leading-none">
                16+
              </p>
              <p className="text-white/50 text-[10px] mt-1 font-semibold tracking-[1.5px] uppercase">
                Approved Vendors
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-white text-[1.5rem] font-black leading-none">
                9
              </p>
              <p className="text-white/50 text-[10px] mt-1 font-semibold tracking-[1.5px] uppercase">
                Countries Represented
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-white text-[1.5rem] font-black leading-none">
                100%
              </p>
              <p className="text-white/50 text-[10px] mt-1 font-semibold tracking-[1.5px] uppercase">
                Authorized Distribution
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-white text-[1.5rem] font-black leading-none">
                ISO
              </p>
              <p className="text-white/50 text-[10px] mt-1 font-semibold tracking-[1.5px] uppercase">
                Certified Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER GRID ──────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#0891B2]">
              Worldwide Partnerships
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#181D4E]">
              Our 15+ Authorized Partners
            </h2>
            <p className="mt-3 text-gray-500 text-[14px] max-w-2xl mx-auto">
              From precision flow meters to industrial AI — we connect the
              world&apos;s leading OEMs to your operations across Kuwait and the GCC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARTNERS.map((p) => (
              <Link
                key={p.name}
                href={p.href.startsWith("/solutions/") ? p.href : `/partners/${p.slug}/`}
                className="group relative flex flex-col gap-5 rounded-xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:border-[#e7212b]/30 hover:shadow-xl hover:shadow-[#e7212b]/5 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-3">
                  <div className="relative h-20 w-full">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      className="object-contain object-left"
                      sizes="(max-width: 640px) 50vw, 33vw"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold tracking-[1.5px] text-[#e7212b] bg-[#e7212b]/8 px-2.5 py-1 rounded">
                      {p.country}
                    </span>
                    <span className="text-[10px] font-medium tracking-[1px] uppercase text-gray-500 leading-tight">
                      {p.relationship}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#181D4E] text-[18px] font-bold leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-[12px] font-semibold tracking-wide text-[#0891B2] uppercase mt-1.5">
                    {p.product}
                  </p>
                </div>
                <p className="text-gray-600 text-[14.5px] leading-[1.7]">
                  {p.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#e7212b] group-hover:gap-2.5 transition-all">
                  Explore{" "}
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGIC TECHNOLOGY ──────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#0891B2]">
              Proprietary & Strategic
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#181D4E]">
              Our Proprietary &amp; Strategic Technology Solutions
            </h2>
            <p className="mt-3 text-gray-500 text-[14px] max-w-2xl mx-auto">
              Beyond distribution — our own proprietary solutions and strategic
              partnerships in custody metering, AI, and access flooring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {STRATEGIC_PARTNERS.map((p) => (
              <Link
                key={p.name}
                href={p.href.startsWith("/solutions/") ? p.href : `/partners/${p.slug}/`}
                className="group relative flex flex-col gap-4 rounded-xl border-2 border-[#e7212b]/20 bg-white p-7 transition-all duration-300 hover:border-[#e7212b]/50 hover:shadow-2xl hover:shadow-[#e7212b]/10 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-3">
                  <div className="relative h-24 w-full">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      className="object-contain object-left"
                      sizes="(max-width: 640px) 50vw, 33vw"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold tracking-[1.5px] text-white bg-[#e7212b] px-2.5 py-1 rounded">
                      {p.country}
                    </span>
                    <span className="text-[10px] font-medium tracking-[1px] uppercase text-[#181D4E] leading-tight">
                      {p.relationship}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#181D4E] text-[18px] font-bold leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-[11px] font-semibold tracking-wide text-[#0891B2] uppercase mt-1">
                    {p.product}
                  </p>
                </div>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  {p.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#e7212b] group-hover:gap-2.5 transition-all">
                  Learn more{" "}
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqPageJsonLd items={partnersFaq} />
      <PageFaqSection items={partnersFaq} title="Questions About" highlight="Our Partners" />

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid border-t-4 border-[#e7212b] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-[22px] mb-1">
                Need a partner-led solution?
              </p>
              <p className="text-gray-400 text-sm">
                Our team will match the right OEM technology to your
                application — across flow, automation, and beyond.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#e7212b]/20 transition-all duration-200"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
