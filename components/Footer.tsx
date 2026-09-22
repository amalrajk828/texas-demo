"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, LayoutGrid, ArrowRight } from "lucide-react";
import { SITE_EMAIL } from "@/lib/site";
import { ALL_PARTNERS } from "@/lib/partners";

const services = [
  { label: "Flow Measurement Solutions", href: "/service/flow-measurement-solutions/" },
  { label: "Industrial Automation", href: "/service/industrial-automation/" },
  { label: "Inspection & Testing", href: "/service/inspection-testing/" },
  { label: "PLC & SCADA Integration", href: "/plc-scada-systems-integration/" },
  { label: "Flow Meter Calibration", href: "/service/flow-meter-calibration/" },
  { label: "Plant Automation", href: "/service/plant-automation/" },
];

const industries = [
  { label: "Oil & Gas", href: "/industries/oil-gas/" },
  { label: "Refinery", href: "/industries/refinery/" },
  { label: "Petrochemicals", href: "/industries/petrochemicals/" },
  { label: "LNG", href: "/industries/lng/" },
  { label: "Power Plant", href: "/industries/power-plant/" },
  { label: "Water Treatment", href: "/industries/water-treatment/" },
  { label: "Cement", href: "/industries/cement/" },
  { label: "Metal & Steel", href: "/industries/metal-steel/" },
];

const solutions = [
  { label: "Global Network", href: "/partners/" },
  { label: "Texaflow Custody Metering", href: "/solutions/texaflow/" },
  { label: "Space AI Industrial AI", href: "/solutions/space-ai/" },
  { label: "Mitsubishi Electric", href: "/solutions/mitsubishi-electric/" },
  { label: "PWS Floor Solutions", href: "/solutions/pws-floor-solutions/" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/texas-technical-service-company",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/texastechserv",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/texas_technical_services",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
  },
];

function FooterTrack() {
  return (
    <div className="flex shrink-0 items-center footer-marquee-mask">
      {ALL_PARTNERS.map((p) => (
        <div key={p.slug} className="shrink-0 flex items-center justify-center mx-4 sm:mx-6">
          <Link
            href={p.href.startsWith("/solutions/") ? p.href : `/partners/${p.slug}/`}
            className="block"
            aria-label={p.name}
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={240}
              height={96}
              className="object-contain h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const isHomeV5 = pathname?.startsWith("/demo/home-v1");

  return (
    <footer style={{ background: isHomeV5 ? "#0a0a08" : "#0A0C11" }}>

      {/* CTA strip — gradient red or v5 theme */}
      <div
        className="relative overflow-hidden"
        style={{
          background: isHomeV5
            ? "linear-gradient(135deg, #832429 0%, #9c2b31 100%)"
            : "linear-gradient(135deg, #B71C1C 0%, #E53935 50%, #C62828 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-xl sm:text-2xl">
              Have a project in mind?
            </p>
            <p className="text-white/75 text-[15px] mt-1 font-medium">
              Talk to our team about your requirements.
            </p>
          </div>
          <Link
            href="/contacts/"
            className={`shrink-0 inline-flex items-center gap-2 bg-white font-bold text-[14px] px-8 py-3.5 transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20 ${
              isHomeV5
                ? "rounded-[5px] uppercase tracking-[0.12em] font-mono text-[#832429] hover:bg-white/95"
                : "rounded-xl text-[#E53935] hover:bg-white/90"
            }`}
          >
            <span>Get in Touch</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        {/* ── Brand Row (Top) ──────────────── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 mb-12 border-b border-white/[0.08]">
          <Link href="/" className="shrink-0 flex flex-col items-center gap-3">
            <Image src="/logo.svg" alt="Texas Technical Services" width={90} height={90} loading="lazy" />
            <div className="text-center">
              <p className="text-white font-black tracking-[7px] text-[20px] leading-none">
                TEXAS
              </p>
              <p className="text-white/60 text-[11px] tracking-[3px] leading-none mt-1.5 font-semibold">
                TECHNICAL SERVICES
              </p>
            </div>
          </Link>
          <div className="flex-1 min-w-0">
            <p className="text-white/70 text-[14px] leading-[1.8] mb-5 font-medium">
              ISO 9001, ISO 14001, ISO 45001, UASL &amp; Accurate certified company
              established in 2008. Flow measurement, automation &amp; inspection
              for oil &amp; gas and industrial sectors.
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="flex items-start gap-2 text-white/70 text-sm hover:text-brand-red transition-colors mb-3"
            >
              <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span className="min-w-0 break-all">{SITE_EMAIL}</span>
            </a>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4">
              <a href="tel:+96597243755" className="flex items-center gap-2 text-white/70 text-sm hover:text-brand-red transition-colors">
                <Phone className="w-3.5 h-3.5" /> +965 97243755
              </a>
              <a href="tel:+96566347267" className="flex items-center gap-2 text-white/70 text-sm hover:text-brand-red transition-colors">
                <Phone className="w-3.5 h-3.5" /> +965 66347267
              </a>
              <a href="tel:+971569553747" className="flex items-center gap-2 text-white/70 text-sm hover:text-brand-red transition-colors">
                <Phone className="w-3.5 h-3.5" /> +971 569553747
              </a>
              <a href="tel:+971567793973" className="flex items-center gap-2 text-white/70 text-sm hover:text-brand-red transition-colors">
                <Phone className="w-3.5 h-3.5" /> +971 567793973
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#E53935]/40 hover:bg-[#E53935]/10 transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
            <Link
              href="/social-media/"
              className="text-white/70 text-[13px] font-medium hover:text-white transition-colors flex items-center gap-2 mt-3"
            >
              <LayoutGrid className="w-4 h-4" />
              View all platforms
            </Link>
          </div>
        </div>

        {/* ── Columns row ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Locations Column ───────────── */}
          <div>
            <h3 className="flex items-center gap-2 text-white/70 text-[12px] font-bold tracking-[2.5px] uppercase mb-6">
              <span className="w-[2px] h-4 rounded-full bg-[#E53935]" />
              Our Locations
            </h3>
            <div className="space-y-6">
              {[
                {
                  city: "Kuwait",
                  address:
                    "Munira Tower Office No. 30, 9th Floor – Building No.6702, Block 7 – Makkah Street Fahaheel, Kuwait",
                },
                {
                  city: "Dubai",
                  address:
                    "Amna Naseer Building, Al Marar Area 20th Street #529 Plot #302 Office #201-19, Deira, Dubai",
                },
              ].map((office) => (
                <div key={office.city}>
                  <p className="text-white text-[15px] font-bold mb-2 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E53935]" /> {office.city}
                  </p>
                  <p className="text-white/70 text-[13px] leading-relaxed font-medium">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Services Column ────────────── */}
          <div>
            <h3 className="flex items-center gap-2 text-white/70 text-[12px] font-bold tracking-[2.5px] uppercase mb-6">
              <span className="w-[2px] h-4 rounded-full bg-[#E53935]" />
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/70 text-[14px] font-medium hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Industries Column ──────────── */}
          <div>
            <h3 className="flex items-center gap-2 text-white/70 text-[12px] font-bold tracking-[2.5px] uppercase mb-6">
              <span className="w-[2px] h-4 rounded-full bg-[#E53935]" />
              Industries
            </h3>
            <ul className="space-y-2.5">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-white/70 text-[14px] font-medium hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]/30 group-hover:bg-[#E53935] transition-colors shrink-0" />
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="flex items-center gap-2 text-white/70 text-[12px] font-bold tracking-[2.5px] uppercase mb-6">
              <span className="w-[2px] h-4 rounded-full bg-[#E53935]" />
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/70 text-[14px] font-medium hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]/30 group-hover:bg-[#E53935] transition-colors shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Partners — sliding marquee */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-[2px] h-4 rounded-full bg-[#E53935]" />
            <h3 className="text-white/70 text-[12px] font-bold tracking-[2.5px] uppercase">
              Our Partners
            </h3>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden select-none bg-white py-6">
          <div className="footer-partners-wrapper flex w-full" style={{ willChange: "transform" }}>
            <FooterTrack />
            <FooterTrack />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2">
          <div className="flex items-center gap-4">
            <Link
              href="/partners/"
              className="inline-flex items-center gap-2 text-white/70 text-[13px] font-medium hover:text-white transition-colors"
            >
              View all partners <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-white/20">·</span>
            <Link
              href="/videos/"
              className="inline-flex items-center gap-2 text-white/70 text-[13px] font-medium hover:text-white transition-colors"
            >
              Watch our videos <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <style>{`
          .footer-partners-wrapper {
            animation: footer-marquee 30s linear infinite;
          }
          .footer-partners-wrapper:hover {
            animation-play-state: paused;
          }
          @keyframes footer-marquee {
            0%   { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .footer-marquee-mask {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
          }
        `}</style>
      </div>

      {/* Certifications */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <Link href="/certifications/" className="block max-w-7xl mx-auto px-4 sm:px-6 py-8 hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { src: "/about/cert-iso9001.png", alt: "ISO 9001:2015 Quality Management" },
              { src: "/about/cert-iso14001.png", alt: "ISO 14001 Environmental Management" },
              { src: "/about/cert-iso45001.png", alt: "ISO 45001 Occupational Health & Safety" },
              { src: "/about/cert-uasl.png", alt: "UASL Certification" },
              { src: "/about/cert-accurate-white.png", alt: "International Accurate Certification" },
            ].map((cert) => (
              <div key={cert.src} className="relative h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-300 hover:scale-105">
                <Image src={cert.src} alt={cert.alt} fill className="object-contain" sizes="(max-width: 640px) 80px, 96px" />
              </div>
            ))}
          </div>
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-[12px] font-medium">
            TEXAS TECHNICAL SERVICE COMPANY W.L.L. © {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-medium" style={{ color: isHomeV5 ? "#832429" : "#FF5252" }}>ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
