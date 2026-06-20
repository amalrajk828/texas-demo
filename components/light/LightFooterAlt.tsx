"use client";
/* Alternate footer: white/light footer for themes with dark header.
   Inverts the typical dark footer — uses surface colours with red accents.
*/
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

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
];

export default function LightFooterAlt() {
  return (
    <footer style={{ background: "var(--color-footer-bg)", color: "var(--color-footer-text)" }}>

      {/* CTA strip */}
      <div style={{ background: "var(--color-brand-red)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-black text-xl tracking-tight">Ready to start your next project?</p>
            <p className="text-white/70 text-sm mt-1">Our teams in Kuwait and Dubai are ready to help.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contacts/"
              className="shrink-0 bg-white font-bold text-sm px-7 py-3 rounded-lg hover:bg-white/90 transition-colors shadow-md flex items-center gap-2"
              style={{ color: "var(--color-brand-red)" }}>
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/service/"
              className="shrink-0 border-2 border-white/30 hover:border-white/60 text-white font-semibold text-sm px-7 py-3 rounded-lg transition-colors flex items-center gap-2">
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit">
              <Image src="/logo.svg" alt="Texas Technical Services" width={80} height={80} />
              <div>
                <p className="font-black tracking-[5px] text-[15px] leading-none" style={{ color: "var(--color-footer-text)" }}>TEXAS</p>
                <p className="text-[8px] tracking-[2.5px] leading-none mt-1 font-semibold" style={{ color: "var(--color-footer-muted)" }}>TECHNICAL SERVICES</p>
              </div>
            </Link>
            <p className="text-[13px] leading-relaxed mb-5" style={{ color: "var(--color-footer-muted)" }}>
              ISO 9001:2015 certified company established in 2008. Flow measurement,
              automation &amp; inspection for oil &amp; gas and industrial sectors.
            </p>
            <a href="mailto:sales@texastechserv.com"
              className="flex items-center gap-2 text-[13px] transition-colors"
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
                { city: "Kuwait", address: "Munira Tower Office No. 30, 9th Floor – Fahaheel, Kuwait", phones: ["+965 97243755", "+965 66347267"] },
                { city: "Dubai",  address: "Amna Naseer Building, Al Marar Area, Deira, Dubai", phones: ["+971 569553747"] },
              ].map((office) => (
                <div key={office.city}>
                  <p className="text-sm font-bold mb-1.5 flex items-center gap-1.5" style={{ color: "var(--color-footer-text)" }}>
                    <MapPin className="w-3 h-3" style={{ color: "var(--color-brand-red)" }} /> {office.city}
                  </p>
                  <p className="text-[11px] leading-relaxed mb-1" style={{ color: "var(--color-footer-muted)" }}>{office.address}</p>
                  {office.phones.map(p => (
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
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[12px] transition-colors flex items-center gap-1.5"
                    style={{ color: "var(--color-footer-muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-brand-red)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-footer-muted)")}>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--color-brand-red)" }} />
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
              {industries.map(i => (
                <li key={i.href}>
                  <Link href={i.href} className="text-[12px] transition-colors flex items-center gap-1.5"
                    style={{ color: "var(--color-footer-muted)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-brand-red)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-footer-muted)")}>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--color-brand-red)", opacity: 0.6 }} />
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
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
