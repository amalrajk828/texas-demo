import type { Metadata } from "next";
import Link from "next/link";
import {
  Flame,
  Factory,
  Zap,
  Droplets,
  FlaskConical,
  Snowflake,
  Building2,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Texas Technical Services | Flow Measurement & Industrial Automation",
  description:
    "Texas specializes in flow measurement, control systems, inspection, and industrial automation solutions for oil & gas, refinery, petrochemical, and power plant sectors.",
  alternates: { canonical: "https://texastechserv.com/" },
  openGraph: {
    title: "Texas Technical Services Company - Innovative Industrial Solutions",
    description: "In quality, we believe.",
    url: "https://texastechserv.com/",
  },
};

const industries = [
  { name: "Oil & Gas",       slug: "oil-gas",        Icon: Flame,        sub: "Upstream · Midstream" },
  { name: "Refinery",        slug: "refinery",        Icon: Factory,      sub: "Process control" },
  { name: "Power Plant",     slug: "power-plant",     Icon: Zap,          sub: "Generation · Grid" },
  { name: "Water Treatment", slug: "water-treatment", Icon: Droplets,     sub: "Municipal · Industrial" },
  { name: "Petrochemicals",  slug: "petrochemicals",  Icon: FlaskConical, sub: "Process automation" },
  { name: "LNG",             slug: "lng",             Icon: Snowflake,    sub: "Custody · Metering" },
  { name: "Cement",          slug: "cement",          Icon: Building2,    sub: "Production · Quality" },
  { name: "Metal & Steel",   slug: "metal-steel",     Icon: Layers,       sub: "Monitoring · Safety" },
];

const products = [
  { name: "FLOWSIC600",          category: "Gas Flow Meters",  brand: "SICK",       slug: "flowsic600" },
  { name: "MELSEC iQ-R Series",  category: "PLC Systems",      brand: "Mitsubishi", slug: "melsec-iq-r-series" },
  { name: "Genesis64",           category: "ICONICS SCADA",    brand: "ICONICS",    slug: "genesis64" },
  { name: "MelSERVO-JET Series", category: "AC Servos",        brand: "Mitsubishi", slug: "melservo-jet-servo-drive" },
  { name: "GOT2000 Series",      category: "HMI Panels",       brand: "Mitsubishi", slug: "got2000series" },
  { name: "MCS200HW",            category: "CEMS Analyzers",   brand: "SICK",       slug: "mcs200hw" },
];

const ticker = [
  "Flow Measurement", "Industrial Automation", "Inspection & Testing",
  "CEMS Solutions", "Metering Systems", "Custody Transfer", "Plant Automation", "NDT Services",
];

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="bg-[#0B0D26] relative overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        {/* Red glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(231,33,43,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">

            {/* Left — content */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
                  ISO 9001:2015 Certified · Est. 2008
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.15] mb-5">
                Industrial Solutions
                <br />
                for{" "}
                <em className="not-italic text-[#e7212b]">Oil &amp; Gas,</em>
                <br />
                Refinery &amp; Beyond
              </h1>

              {/* Subtext */}
              <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Flow measurement, industrial automation, inspection &amp; testing
                for the world&apos;s most demanding environments.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products/"
                  className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Our Services →
                </Link>
              </div>
            </div>

            {/* Right — stats */}
            <div className="flex lg:flex-col gap-3 justify-start lg:justify-center">
              {[
                { num: "15+",  label: "Years" },
                { num: "8",    label: "Industries" },
                { num: "200+", label: "Clients" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.04] border border-white/[0.08] hover:border-[#e7212b]/30 rounded-xl px-5 py-4 text-center min-w-[88px] transition-colors duration-200"
                >
                  <p className="text-2xl font-medium text-[#e7212b]">{s.num}</p>
                  <p className="text-[10px] text-white/30 mt-1 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TICKER ════════════════════════════════════════════ */}
      <div className="bg-[#12163A] border-y border-white/[0.06] py-3 overflow-hidden">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-5 text-[11px] text-white/40 tracking-wider whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b]/60 flex-shrink-0" />
              {item.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* ══ INDUSTRIES ════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#e7212b]/40" />
              <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                Industries we serve
              </span>
              <span className="w-8 h-px bg-[#e7212b]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0B0D26]">
              Built for the world&apos;s most demanding sectors
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5">
            {industries.map((ind, i) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}/`}
                className={`fade-up d${i + 1} group border border-[#e8eaf0] hover:border-[#e7212b] rounded-xl p-5 text-center transition-all duration-200 hover:shadow-lg bg-white`}
                style={{ "--tw-shadow-color": "rgba(231,33,43,0.08)" } as React.CSSProperties}
              >
                <div className="flex justify-center mb-3">
                  <ind.Icon className="w-7 h-7 text-[#e7212b]" strokeWidth={1.5} />
                </div>
                <p className="text-[13px] font-medium text-[#0B0D26] group-hover:text-[#e7212b] transition-colors leading-snug">
                  {ind.name}
                </p>
                <p className="text-[10px] text-gray-400 mt-1">{ind.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PRODUCTS ═════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-px bg-[#e7212b]/40" />
                <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                  Our Products
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#0B0D26]">
                Trusted instrumentation
                <br className="hidden sm:block" /> &amp; automation
              </h2>
            </div>
            <Link
              href="/products/"
              className="inline-flex items-center gap-1.5 text-[#e7212b] hover:text-[#aa0b1b] text-sm font-medium transition-colors shrink-0"
            >
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((prod, i) => (
              <Link
                key={prod.slug}
                href={`/portfolio/${prod.slug}/`}
                className={`fade-up d${i + 1} group border border-[#e8eaf0] hover:border-[#e7212b] rounded-xl overflow-hidden bg-white transition-all duration-200 hover:shadow-xl`}
              >
                {/* Image area */}
                <div className="h-44 bg-[#0B0D26] relative flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white/20 text-[10px] tracking-[2px] uppercase">
                      {prod.brand}
                    </p>
                    <p className="text-white/50 text-xs mt-1">{prod.category}</p>
                  </div>
                  {/* Red bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e7212b]" />
                </div>
                {/* Body */}
                <div className="p-4">
                  <p className="text-[10px] text-gray-400 mb-1">{prod.category}</p>
                  <p className="text-[14px] font-medium text-[#0B0D26] group-hover:text-[#e7212b] transition-colors">
                    {prod.name}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{prod.brand}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT STRIP ═══════════════════════════════════════ */}
      <section className="bg-[#12163A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                  About Texas Technical Services
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">
                Established 2008. Built on precision.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Texas Technical Service Company is an ISO 9001:2015 certified company established
                in 2008. We are primarily focused on Flow measurement solutions, Inspection and
                testing, and industrial automation requirements for the oil and gas, power plants,
                manufacturing and commercial sectors.
              </p>
              <Link
                href="/about-us/"
                className="inline-flex items-center gap-2 text-[#e7212b] hover:text-white text-sm font-medium transition-colors"
              >
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="bg-[#e7212b]/10 border border-[#e7212b]/25 rounded-xl px-8 py-5 text-center">
                <p className="text-[#e7212b] text-sm font-medium">ISO 9001:2015</p>
                <p className="text-white/30 text-[10px] mt-1">Certified</p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-8 py-5 text-center">
                <p className="text-white text-sm font-medium">ISO 14001:2015</p>
                <p className="text-white/30 text-[10px] mt-1">Environmental</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CLIENTS STRIP ═════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#e7212b]/40" />
              <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                Trusted by
              </span>
              <span className="w-8 h-px bg-[#e7212b]/40" />
            </div>
            <h2 className="text-3xl font-medium text-[#0B0D26] mb-2">
              Our clients across 8 industries
            </h2>
            <p className="text-gray-400 text-sm">
              Replace the placeholders below with actual client logo images
            </p>
          </div>
          {/* Logo grid — placeholders */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="border border-[#e8eaf0] rounded-xl h-16 flex items-center justify-center text-[10px] text-gray-300 hover:border-[#e7212b]/30 transition-colors"
              >
                Client {i + 1}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/clients/"
              className="inline-flex items-center gap-1.5 text-[#e7212b] hover:text-[#aa0b1b] text-sm font-medium transition-colors"
            >
              View all clients <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════ */}
      <section className="bg-[#0B0D26] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
              Get in touch
            </span>
            <span className="w-8 h-px bg-[#e7212b]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Have a project in mind?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Talk to our team about your requirements. Kuwait and Dubai offices ready to help.
          </p>
          <Link
            href="/contacts/"
            className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
