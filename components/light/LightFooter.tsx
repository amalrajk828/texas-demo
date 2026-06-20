"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { label: "Flow Measurement Solutions", href: "/service/flow-measurement-solutions/" },
  { label: "Industrial Automation",      href: "/service/industrial-automation/" },
  { label: "Inspection & Testing",       href: "/service/inspection-testing/" },
  { label: "Flow Meter Calibration",     href: "/service/flow-meter-calibration/" },
  { label: "CEMS Solutions",             href: "/service/cems-solutions/" },
  { label: "Plant Automation",           href: "/service/plant-automation/" },
];

const industries = [
  { label: "Oil & Gas",       href: "/industries/oil-gas/" },
  { label: "Refinery",        href: "/industries/refinery/" },
  { label: "Petrochemicals",  href: "/industries/petrochemicals/" },
  { label: "LNG",             href: "/industries/lng/" },
  { label: "Power Plant",     href: "/industries/power-plant/" },
  { label: "Water Treatment", href: "/industries/water-treatment/" },
  { label: "Cement",          href: "/industries/cement/" },
  { label: "Metal & Steel",   href: "/industries/metal-steel/" },
];

export default function LightFooter() {
  return (
    <footer style={{ background: "var(--color-footer-bg)", borderTop: "1px solid var(--color-border)" }}>

      {/* CTA strip */}
      <div style={{ background: "var(--color-brand-red)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Have a project in mind?</p>
            <p className="text-white/75 text-sm mt-0.5">Talk to our team about your requirements.</p>
          </div>
          <Link href="/contacts/"
            className="shrink-0 bg-white font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors shadow-md"
            style={{ color: "var(--color-brand-red)" }}>
            Get in Touch →
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col items-center gap-3 mb-6 w-fit">
              <Image src="/logo.svg" alt="Texas Technical Services" width={90} height={90} />
              <div className="text-center">
                <p className="font-black tracking-[6px] text-[17px] leading-none" style={{ color: "var(--color-footer-text)" }}>TEXAS</p>
                <p className="text-[9px] tracking-[3px] leading-none mt-1 font-semibold" style={{ color: "var(--color-footer-muted)" }}>TECHNICAL SERVICES</p>
              </div>
            </Link>
            <p className="text-[13px] leading-relaxed mb-4" style={{ color: "var(--color-footer-muted)" }}>
              ISO 9001:2015 certified company established in 2008. Flow measurement,
              automation &amp; inspection for oil &amp; gas and industrial sectors.
            </p>
            <a href="mailto:sales@texastechserv.com"
              className="flex items-center gap-2 text-[13px] transition-colors mb-4"
              style={{ color: "var(--color-footer-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-brand-red)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-footer-muted)")}>
              <Mail className="w-3.5 h-3.5 shrink-0" />
              sales@texastechserv.com
            </a>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-[9px] font-bold tracking-[2px] uppercase mb-5" style={{ color: "var(--color-footer-muted)" }}>Our Locations</h3>
            <div className="space-y-5">
              {[
                { city: "Kuwait", address: "Munira Tower Office No. 30, 9th Floor – Building No.6702, Block 7 – Makkah Street Fahaheel, Kuwait", phones: ["+965 97243755", "+965 66347267"] },
                { city: "Dubai",  address: "Amna Naseer Building, Al Marar Area 20th Street #529 Plot #302 Office #201-19, Deira, Dubai", phones: ["+971 569553747"] },
              ].map((office) => (
                <div key={office.city}>
                  <p className="text-sm font-bold mb-1.5 flex items-center gap-1.5" style={{ color: "var(--color-footer-text)" }}>
                    <MapPin className="w-3 h-3" style={{ color: "var(--color-brand-red)" }} /> {office.city}
                  </p>
                  <p className="text-[11px] leading-relaxed mb-1.5" style={{ color: "var(--color-footer-muted)" }}>{office.address}</p>
                  {office.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`}
                      className="flex items-center gap-1.5 text-[11px] transition-colors"
                      style={{ color: "var(--color-footer-muted)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--color-brand-red)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--color-footer-muted)")}>
                      <Phone className="w-3 h-3" /> {p}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[9px] font-bold tracking-[2px] uppercase mb-5" style={{ color: "var(--color-footer-muted)" }}>Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[12px] transition-colors" style={{ color: "var(--color-footer-muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-brand-red)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-footer-muted)")}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[9px] font-bold tracking-[2px] uppercase mb-5" style={{ color: "var(--color-footer-muted)" }}>Industries</h3>
            <ul className="space-y-2">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-[12px] transition-colors flex items-center gap-1.5 group" style={{ color: "var(--color-footer-muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-brand-red)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-footer-muted)")}>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--color-brand-red)", opacity: 0.5 }} />
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px]" style={{ color: "var(--color-footer-muted)" }}>
            TEXAS TECHNICAL SERVICE COMPANY W.L.L. © 2026. All Rights Reserved.
          </p>
          <span className="text-[11px] font-bold" style={{ color: "var(--color-brand-red)" }}>ISO 9001:2015 Certified</span>
        </div>
      </div>
    </footer>
  );
}
