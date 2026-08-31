import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, LayoutGrid } from "lucide-react";
import { SITE_EMAIL } from "@/lib/site";

const services = [
  { label: "Flow Measurement Solutions", href: "/service/flow-measurement-solutions/" },
  { label: "Industrial Automation", href: "/service/industrial-automation/" },
  { label: "Inspection & Testing", href: "/service/inspection-testing/" },
  { label: "Flow Meter Calibration", href: "/service/flow-meter-calibration/" },
  { label: "CEMS Solutions", href: "/service/cems-solutions/" },
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

const blogLinks = [
  { label: "Technical Resource Hub", href: "/blog/" },
];

const socials = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/texas-technical-service-company",  path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { label: "Facebook",  href: "https://www.facebook.com/texastechserv",  path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Instagram", href: "https://www.instagram.com/texas_technical_services", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z" },
];

export default function ThemedFooter() {
  return (
    <footer style={{ background: "var(--color-brand-navy)", borderTop: "1px solid color-mix(in srgb, var(--color-brand-red) 20%, transparent)" }}>

      {/* CTA strip */}
      <div style={{ background: "var(--color-brand-red)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-medium text-lg">Have a project in mind?</p>
            <p className="text-white/75 text-sm mt-0.5">Talk to our team about your requirements.</p>
          </div>
          <Link
            href="/contacts/"
            className="shrink-0 bg-white font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
            style={{ color: "var(--color-brand-red)" }}
          >
            Get in Touch →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col items-center gap-3 mb-6 w-fit">
              <Image src="/logo.svg" alt="Texas Technical Services" width={100} height={100} />
              <div className="text-center">
                <p className="text-white font-semibold tracking-[6px] text-[18px] leading-none">TEXAS</p>
                <p className="text-white/50 text-[10px] tracking-[3px] leading-none mt-1 font-medium">TECHNICAL SERVICES</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              ISO 9001, ISO 14001, ISO 45001, UASL &amp; Accurate certified company established in 2008. Flow measurement,
              automation &amp; inspection for oil &amp; gas and industrial sectors.
            </p>
            <a href={`mailto:${SITE_EMAIL}`}
              className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-4">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              {SITE_EMAIL}
            </a>
            <div className="flex gap-2">
              {socials.map(({ href, label, path }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
              <Link
                href="/social-media/"
                className="text-white/30 text-[11px] hover:text-white transition-colors flex items-center gap-1.5 mt-3"
              >
                <LayoutGrid className="w-3 h-3" />
                View all platforms
              </Link>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white/40 text-[9px] font-medium tracking-[2px] uppercase mb-5">Our Locations</h3>
            <div className="space-y-5">
              {[
                { city: "Kuwait", address: "Munira Tower Office No. 30, 9th Floor – Building No.6702, Block 7 – Makkah Street Fahaheel, Kuwait", phones: ["+965 97243755", "+965 66347267"] },
                { city: "Dubai",  address: "Amna Naseer Building, Al Marar Area 20th Street #529 Plot #302 Office #201-19, Deira, Dubai", phones: ["+971 569553747", "+971 567793973"] },
              ].map((office) => (
                <div key={office.city}>
                  <p className="text-white text-sm font-medium mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" style={{ color: "var(--color-brand-red)" }} /> {office.city}
                  </p>
                  <p className="text-white/35 text-[11px] leading-relaxed mb-1.5">{office.address}</p>
                  {office.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`}
                      className="flex items-center gap-1.5 text-white/35 text-[11px] hover:text-white transition-colors">
                      <Phone className="w-3 h-3" /> {p}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white/40 text-[9px] font-medium tracking-[2px] uppercase mb-5">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/40 text-[12px] hover:text-white transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white/40 text-[9px] font-medium tracking-[2px] uppercase mb-5">Industries</h3>
            <ul className="space-y-2">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-white/40 text-[12px] hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full shrink-0 transition-colors group-hover:bg-white"
                      style={{ background: "color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }} />
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-white/40 text-[9px] font-medium tracking-[2px] uppercase mb-5">Blog</h3>
            <ul className="space-y-2">
              {blogLinks.map((b, idx) => (
                <li key={`${b.label}-${idx}`}>
                  <Link href={b.href} className="text-white/40 text-[12px] hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full shrink-0 transition-colors group-hover:bg-white"
                      style={{ background: "color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }} />
                    {b.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-[11px]">TEXAS TECHNICAL SERVICE COMPANY W.L.L. © 2026. All Rights Reserved.</p>
          <span className="text-[11px] font-medium" style={{ color: "var(--color-brand-red)" }}>ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified</span>
        </div>
      </div>
    </footer>
  );
}
