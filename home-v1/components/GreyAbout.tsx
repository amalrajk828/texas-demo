"use client";
/* Theme V5: GreyAbout styled to Home V2 design system
   Tokens: --bg-alt (#141820), --border-default, --border-active (#E53935), --accent (#E53935)
*/
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
        backgroundColor: "var(--bg-alt, #141820)",
        borderTop: "1px solid var(--border-default, rgba(255, 255, 255, 0.08))"
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] mb-4 border border-white/[0.08] bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)]" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-white/80">
                ABOUT TEXAS TECHNICAL SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
              Why was Texas Technical Services{" "}
              <span style={{ color: "var(--accent, #E53935)" }}>
                established in 2008?
              </span>
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6 text-[#9CA3AF]">
              Texas Technical Service Company is an ISO 9001:2015 certified company established in 2008. Primarily focused
              on flow measurement, inspection &amp; testing, and industrial automation for oil &amp; gas, power plants, manufacturing and commercial sectors.
            </p>
            <Link
              href="/about-us/"
              className="inline-flex items-center gap-2 font-mono text-[13px] font-bold uppercase tracking-[0.12em] transition-all duration-200"
              style={{ color: "var(--accent, #E53935)" }}
            >
              <span>Learn more about Texas Technical Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 min-w-[280px]">
            {CERTS.map(cert => (
              <Link 
                href="/certifications/"
                key={cert.label} 
                className="relative rounded-[6px] px-5 py-3.5 text-left overflow-hidden transition-all duration-200 border group block hover:-translate-y-0.5"
                style={{
                  backgroundColor: cert.accent ? "rgba(229, 57, 53, 0.12)" : "var(--card, #1E2330)",
                  borderColor: cert.accent ? "var(--accent, #E53935)" : "var(--border-default, rgba(255, 255, 255, 0.08))",
                }}
              >
                <span className="v5-corner-indicator opacity-60 group-hover:opacity-100" />
                <div className="flex items-center justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-[var(--accent)]">{cert.prefix}</span>
                    <p className="font-mono text-sm font-bold text-white tracking-wider">{cert.label}</p>
                  </div>
                  <div className="relative w-7 h-7 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image src={cert.badge} alt={cert.label} fill className="object-contain" sizes="28px" />
                  </div>
                </div>
                <p className="text-xs text-[#9CA3AF] pl-6">{cert.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .group:hover {
          border-color: var(--border-active, #E53935) !important;
        }
      `}</style>
    </section>
  );
}
