"use client";
/* Kit D — Grey: About — V5 layout with V3 Industrial Teal theme */
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CERTS = [
  { prefix: "/01", label: "ISO 9001:2015",  sub: "Quality Management",            badge: "/about/cert-iso9001.png",         accent: true },
  { prefix: "/02", label: "ISO 14001:2015", sub: "Environmental Management",      badge: "/about/cert-iso14001.png",        accent: false },
  { prefix: "/03", label: "ISO 45001:2018", sub: "Occupational Health & Safety",  badge: "/about/cert-iso45001.png",        accent: false },
  { prefix: "/04", label: "UASL Accredited", sub: "Independent Verification",     badge: "/about/cert-uasl.png",            accent: false },
  { prefix: "/05", label: "Accurate Certified", sub: "International Accreditation", badge: "/about/cert-accurate-white.png", accent: false },
];

export default function GreyAbout() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: "var(--g-section-a, #1D2531)",
        borderTop: "1px solid var(--g-border, rgba(255, 255, 255, 0.10))",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border"
              style={{
                background: "rgba(23, 112, 126, 0.12)",
                borderColor: "rgba(23, 112, 126, 0.35)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary, #17707E)" }} />
              <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--primary, #17707E)" }}>
                ABOUT TEXAS TECHNICAL SERVICES
              </span>
            </div>

            {/* Heading — uniform color, no accent-colored word */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--g-heading, #F4F9F9)" }}>
              Why was Texas Technical Services established in 2008?
            </h2>

            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: "var(--g-muted, #B9C4C9)" }}>
              Texas Technical Service Company is an ISO 9001:2015 certified company established in 2008. Primarily focused
              on flow measurement, inspection & testing, and industrial automation for oil & gas, power plants, manufacturing and commercial sectors.
            </p>

            <Link
              href="/about-us/"
              className="inline-flex items-center gap-2 font-mono text-[13px] font-bold uppercase tracking-[0.12em] transition-all duration-200 hover:gap-3"
              style={{ color: "var(--primary, #17707E)" }}
            >
              <span>Learn more about Texas Technical Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 min-w-[280px]">
            {CERTS.map((cert) => (
              <Link
                href="/certifications/"
                key={cert.label}
                className="relative rounded-xl px-5 py-3.5 text-left overflow-hidden transition-all duration-200 border group block hover:-translate-y-0.5"
                style={{
                  backgroundColor: cert.accent ? "rgba(23, 112, 126, 0.18)" : "var(--g-card-bg, #232F3E)",
                  borderColor: cert.accent ? "var(--primary, #17707E)" : "var(--g-card-border, rgba(255, 255, 255, 0.09))",
                }}
              >
                <span className="v3-corner-indicator opacity-60 group-hover:opacity-100" />
                <div className="flex items-center justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold" style={{ color: "var(--primary, #17707E)" }}>
                      {cert.prefix}
                    </span>
                    <p className="font-mono text-sm font-bold tracking-wider" style={{ color: "var(--g-heading, #F4F9F9)" }}>
                      {cert.label}
                    </p>
                  </div>
                  <div className="relative w-7 h-7 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image src={cert.badge} alt={cert.label} fill className="object-contain" sizes="28px" />
                  </div>
                </div>
                <p className="text-xs pl-6" style={{ color: "var(--g-muted, #B9C4C9)" }}>
                  {cert.sub}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
