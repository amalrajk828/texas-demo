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
  ChevronRight,
  Globe,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import { industriesListingFaq } from "@/lib/pageFaqData";
import IndustryFeatureCard from "@/components/industries/IndustryFeatureCard";

export const metadata: Metadata = {
  title: "Industries We Serve — Oil & Gas, Power & Petrochemicals",
  description:
    "Flow measurement, automation, and inspection for oil & gas, refinery, power plant, LNG, petrochemicals, water treatment, cement, and metal & steel.",
  alternates: { canonical: "/industries/" },
  openGraph: {
    title: "Industries We Serve",
    description:
      "Flow measurement, automation, and inspection solutions for oil & gas, refinery, power plant, LNG, petrochemicals, water treatment, cement, and metal & steel.",
    url: "/industries/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve",
    description:
      "Flow measurement, automation, and inspection solutions for oil & gas, refinery, power plant, LNG, petrochemicals, water treatment, cement, and metal & steel.",
    images: ["/og-default.png"],
  },
  keywords: [
    "oil and gas industry solutions Kuwait",
    "refinery automation and metering",
    "power plant instrumentation Kuwait",
    "LNG metering solutions GCC",
    "petrochemical automation solutions",
    "water treatment flow measurement",
    "cement industry automation",
    "metal and steel inspection services",
    "industrial automation for oil and gas",
    "flow measurement for refineries",
  ],
};

const industries = [
  {
    name: "Oil & Gas",
    slug: "oil-gas",
    Icon: Flame,
    sub: "Upstream · Midstream · Downstream",
    image: "/oil_and_gas.jpg",
    desc: "Comprehensive solutions tailored to the unique needs of the oil and gas industries. From advanced flow metering solutions to precision flow meters, flow computers, and analyzers — our industrial automation empowers these sectors to optimize operations and ensure accurate data analysis.",
  },
  {
    name: "Refinery",
    slug: "refinery",
    Icon: Factory,
    sub: "Process Control · CEMS",
    image: "/refinery.webp",
    desc: "Cutting-edge offerings for the demanding world of refinery operations — including precision flow meters, flow computers, CEMS and analyzers — providing the refinery industry with essential industrial automation solutions.",
  },
  {
    name: "Petrochemicals",
    slug: "petrochemicals",
    Icon: FlaskConical,
    sub: "Process Automation · Flow Solutions",
    image: "/petrochemical.webp",
    desc: "State-of-the-art flow metering solutions, precise flow meters, flow computers, and analyzers catering to the ever-evolving needs of the petrochemical industry's complex production environments.",
  },
  {
    name: "LNG",
    slug: "lng",
    Icon: Snowflake,
    sub: "Custody Transfer · Metering · Safety",
    image: "/lng.jpg",
    desc: "Products designed to enhance LNG plant operations, providing cutting-edge flow metering solutions, precision flow meters, flow computers, and analyzers that ensure precise measurement, efficiency, and safety in liquefied natural gas processes.",
  },
  {
    name: "Power Plant",
    slug: "power-plant",
    Icon: Zap,
    sub: "Generation · Emissions · Grid",
    image: "/power_plant.jpg",
    desc: "OEM products tailored for power plants, including CEMS, flow meters, flow computers, analyzers, and industrial process automation systems — comprehensive solutions to optimize performance and emissions monitoring.",
  },
  {
    name: "Water Treatment",
    slug: "water-treatment",
    Icon: Droplets,
    sub: "Municipal · Industrial",
    image: "/water_treatment.webp",
    desc: "Products designed for water treatment applications, including CEMS, analyzers, and industrial process automation systems, delivering advanced solutions to ensure precise monitoring, quality control, and operational efficiency.",
  },
  {
    name: "Cement",
    slug: "cement",
    Icon: Building2,
    sub: "Production · Quality · CEMS",
    image: "/cement_industry.jpg",
    desc: "OEM products tailored for the cement industry, encompassing CEMS, analyzers, and industrial process automation systems — offering advanced solutions to optimize emissions monitoring, quality control, and operational excellence.",
  },
  {
    name: "Metal & Steel",
    slug: "metal-steel",
    Icon: Layers,
    sub: "Monitoring · Safety · Efficiency",
    image: "/metal_and_steel.jpg",
    desc: "OEM products engineered for the metal and steel industry, featuring CEMS, analyzers, and industrial process automation systems — providing cutting-edge solutions to enhance efficiency, quality control, and emissions monitoring.",
  },
];

const stats = [
  { num: "18+", label: "Years" },
  { num: "8", label: "Industries" },
  { num: "200+", label: "Clients" },
];

const highlights = [
  { icon: Building2, text: "OEM Partnerships" },
  { icon: Globe, text: "Global Reach" },
  { icon: Layers, text: "End-to-End Solutions" },
];

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries/" },
        ]}
      />
      <SpeakableJsonLd headline="Industries We Serve — Oil & Gas, Refinery, Power Plant & More" />

      {/* HERO */}
      <section className="bg-[#0B0D26] relative overflow-hidden min-h-[480px] flex flex-col justify-end">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(231,33,43,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8 w-full">
          <nav className="flex items-center gap-1.5 mb-6 text-[11px] text-white/35 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-white/60">Industries</span>
          </nav>

          <div className="flex items-start gap-8 lg:gap-10 mb-8">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-5 h-px bg-[#0891B2]" />
                <span className="text-[#0891B2] text-[10px] font-medium tracking-[2.5px] uppercase">
                  ISO 9001:2015 Certified · Est. 2008
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-white leading-[1.15] mb-5">
                Industries
                <br />
                <em className="not-italic text-current">We Serve</em>
              </h1>

              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl">
                Precision OEM solutions across the world&apos;s most demanding
                industrial sectors — from oil &amp; gas to water treatment.
              </p>
            </div>

            <div className="hidden lg:flex flex-col gap-3 shrink-0 w-[240px] ml-auto">
              {highlights.map((h) => (
                <div
                  key={h.text}
                  className="flex items-center gap-3 bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm rounded-xl px-4 py-3"
                >
                  <h.icon
                    className="w-5 h-5 text-[#e7212b] shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-white/70 text-[13px] leading-snug">
                    {h.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-white/[0.06] backdrop-blur-xl border-t border-white/[0.10]">
          <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-white/[0.08]">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-5 text-center">
                <p className="text-2xl font-medium text-[#e7212b]">{s.num}</p>
                <p className="text-[11px] text-white/40 tracking-wide mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="bg-[#0B0D26] relative overflow-hidden py-20 lg:py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.05) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.05) 40px)",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(231,33,43,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[11px] font-medium tracking-[2.5px] uppercase">
                Our Coverage
              </span>
            </div>
            <span className="text-white/50 text-[12px]">8 Industries</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind, i) => (
              <IndustryFeatureCard
                key={ind.slug}
                name={ind.name}
                slug={ind.slug}
                Icon={ind.Icon}
                image={ind.image}
                sub={ind.sub}
                desc={ind.desc}
                animationDelay={i}
              />
            ))}
          </div>
        </div>
      </section>

      <FaqPageJsonLd items={industriesListingFaq} />
      <PageFaqSection items={industriesListingFaq} title="Questions About" highlight="The Industries We Serve" />

    </>
  );
}
