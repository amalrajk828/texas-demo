"use client";
import Link from "next/link";
import { ChevronRight,ArrowRight, Layers, Shield, Globe, Wrench, Clock } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Shield, text: "Quality Certified" },
  { icon: Globe, text: "Global Supply" },
  { icon: Wrench, text: "Custom Solutions" },
  { icon: Clock, text: "24/7 Support" },
];

const STATS = [
  { num: "65+", label: "Products" },
  { num: "8", label: "Industries" },
  { num: "18+", label: "Years" },
  { num: "200+", label: "Clients" },
];

export default function PortfolioGroupHero({
  breadcrumb,
  breadcrumbHref,
  eyebrow,
  titleHighlight,
  titleSuffix,
  description,
}: {
  breadcrumb: string;
  breadcrumbHref?: string;
  eyebrow: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
}) {
  return (
    <section className="relative bg-[#0B0D26] pt-28 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* Left: content */}
          <div className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 mb-8 text-[14px] text-white/50"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              {breadcrumbHref ? (
                <Link
                  href={breadcrumbHref}
                  className="hover:text-white transition-colors"
                >
                  {breadcrumb}
                </Link>
              ) : (
                <span className="text-white/60">{breadcrumb}</span>
              )}
            </nav>

            {/* Pill eyebrow */}
            <div
              className="flex items-center gap-2 mb-5"
            >
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[2.5px] uppercase">
                {eyebrow}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5"
            >
              {titleHighlight}
              <em className="not-italic text-current">{titleSuffix}</em>
            </h1>

            {/* Description */}
            <p
              className="text-white/70 text-base sm:text-[17px] leading-relaxed mb-3 max-w-xl"
            >
              {description}
            </p>

            {/* Extended description */}
            <p
              className="text-white/70 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-xl"
            >
              From industrial sensors and flow meters to PLCs, automation systems, and
              control room solutions — we partner with world-class manufacturers to deliver
              reliable, certified equipment across the Middle East and beyond.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#portfolio-grid"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/55 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                <Layers className="w-4 h-4" />
                View All Projects
              </a>
            </div>
          </div>

          {/* Right: mosaic stats */}
          <div
            className="hidden lg:block shrink-0 w-[320px] mt-8 lg:mt-16"
          >
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.12] backdrop-blur-xl border border-white/[0.15] rounded-2xl p-6 text-center"
                >
                  <p className="text-3xl font-bold text-[#e7212b] leading-none">
                    {s.num}
                  </p>
                  <p className="text-[12px] text-white/70 tracking-wide uppercase mt-2">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature highlight cards — full width */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pb-12"
        >
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.text}
              className="flex items-center gap-3 bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm rounded-xl px-4 py-3"
            >
              <h.icon className="w-5 h-5 text-[#e7212b] shrink-0" strokeWidth={1.5} />
              <span className="text-white/70 text-[13px] leading-snug">{h.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
