"use client";
/* Kit D — Dark: about/certs section — dark glass ISO cards, no white backgrounds */
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CERTS = [
  { label: "ISO 9001:2015",     sub: "Quality Management",           badge: "/about/cert-iso9001.png" },
  { label: "ISO 14001:2015",    sub: "Environmental Management",     badge: "/about/cert-iso14001.png" },
  { label: "ISO 45001:2018",    sub: "Occupational Health & Safety", badge: "/about/cert-iso45001.png" },
  { label: "UASL Accredited",   sub: "Independent Verification",     badge: "/about/cert-uasl.png" },
  { label: "Accurate Certified",sub: "International Accreditation",  badge: "/about/cert-accurate.png" },
];

export default function GreyAbout() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Subtle brand glow blob */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none blur-[80px] opacity-30"
        style={{ background: "radial-gradient(circle, rgba(138,48,47,0.4) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div ref={ref} className="flex flex-col gap-10">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-2 sm:mb-4">
              <span className="w-6 h-px" style={{ background: "#8a302f" }} />
              <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "#8a302f" }}>About Texas Technical Services</span>
              <span className="w-6 h-px" style={{ background: "#8a302f" }} />
            </div>
            <h2 className="text-[clamp(1.5rem,3.8vw,2.5rem)] font-black tracking-tight mb-3 sm:mb-4" style={{ color: "#16202b" }}>
              Why was Texas Technical Services established in 2008?
            </h2>
            <p className="text-xs sm:text-[16px] leading-relaxed mb-4 sm:mb-6" style={{ color: "#4a5568" }}>
              Texas Technical Service Company is an ISO 9001:2015 certified company established in 2008. Primarily focused
              on flow measurement, inspection &amp; testing, and industrial automation for oil &amp; gas, power plants, manufacturing and commercial sectors.
            </p>
            <Link
              href="/about-us/"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 text-sm sm:text-[16px] font-bold hover:gap-3 transition-all duration-200 mx-auto"
              style={{ color: "#8a302f" }}
            >
              <span>Learn more about Texas Technical Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Certification badge grid — light cards with soft blue border */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mx-auto max-w-3xl justify-items-center w-full">
            {CERTS.map((cert, idx) => (
              <Link
                href="/certifications/"
                key={cert.label}
                className={`relative rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-center overflow-hidden transition-all duration-300 group block w-full min-h-[44px] ${
                  idx === 4 ? "col-span-2 sm:col-span-1 max-w-[200px] sm:max-w-none" : ""
                }`}
                style={{
                  background: "#5a86ad",
                  border: "1px solid rgba(255, 255, 255, 0.22)",
                  boxShadow: "0 8px 24px rgba(20, 40, 60, 0.18)",
                }}
              >
                {/* Top edge glow */}
                <div className="absolute top-0 inset-x-0 h-[1px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)" }} />
                {/* Hover tint */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "rgba(255, 255, 255, 0.08)" }} />

                <div className="relative z-10 flex justify-center mb-1.5 sm:mb-2">
                  <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                    <Image src={cert.badge} alt={cert.label} fill className="object-contain" sizes="56px" />
                  </div>
                </div>
                <p className="relative z-10 text-[11px] sm:text-[12px] font-bold leading-tight text-white">
                  {cert.label}
                </p>
                <p className="relative z-10 text-[9px] sm:text-[10px] mt-0.5 sm:mt-1 font-medium text-[#dce6f0]">
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
