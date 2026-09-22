"use client";
/* Kit D — Grey: about/certs section with light glassmorphic ISO cards */
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function GreyAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)" }}>
      {/* Background depth blobs for frosted glass refraction */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none blur-[80px] opacity-80"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(235,240,248,0.5) 45%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10%] right-[15%] w-[450px] h-[450px] rounded-full pointer-events-none blur-[90px] opacity-70"
        style={{ background: "radial-gradient(circle, rgba(165,180,200,0.5) 0%, rgba(140,158,180,0.2) 50%, transparent 70%)" }}
      />
      <div
        className="absolute top-[20%] left-[-10%] w-[550px] h-[550px] rounded-full pointer-events-none blur-[100px] opacity-75"
        style={{ background: "radial-gradient(circle, rgba(150,168,190,0.4) 0%, transparent 70%)" }}
      />

      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "rgba(0,0,0,0.06)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div ref={ref} className="flex flex-col gap-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-px" style={{ background: "#8a302f" }} />
              <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "#8a302f" }}>About Texas Technical Services</span>
              <span className="w-6 h-px" style={{ background: "#8a302f" }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-[#111827]">
              Why was Texas Technical Services established in 2008?
            </h2>
            <p className="text-[17px] leading-relaxed mb-6 text-[#4B5563]">
              Texas Technical Service Company is an ISO 9001:2015 certified company established in 2008. Primarily focused
              on flow measurement, inspection & testing, and industrial automation for oil & gas, power plants, manufacturing and commercial sectors.
            </p>
            <Link href="/about-us/" className="inline-flex items-center gap-2 text-[16px] font-bold text-slate-600 hover:text-slate-900 hover:gap-3 transition-all duration-200 mx-auto">
              Learn more about Texas Technical Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mx-auto max-w-3xl justify-items-center">
            {[
              { label: "ISO 9001:2015",  sub: "Quality Management",            badge: "/about/cert-iso9001.png" },
              { label: "ISO 14001:2015", sub: "Environmental Management",      badge: "/about/cert-iso14001.png" },
              { label: "ISO 45001:2018", sub: "Occupational Health & Safety",  badge: "/about/cert-iso45001.png" },
              { label: "UASL Accredited", sub: "Independent Verification",     badge: "/about/cert-uasl.png" },
              { label: "Accurate Certified", sub: "International Accreditation", badge: "/about/cert-accurate.png" },
            ].map(cert => (
              <Link href="/certifications/" key={cert.label}
                className="relative rounded-xl px-7 py-4 text-center overflow-hidden transition-all duration-300 group block"
                style={{
                  background: "rgba(255, 255, 255, 0.35)",
                  backdropFilter: isMobile ? "none" : "blur(18px)",
                  WebkitBackdropFilter: isMobile ? "none" : "blur(18px)",
                  border: "1px solid rgba(255, 255, 255, 0.65)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
                }}
              >
                <>
                  {/* Top specular reflection sheen */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
                  {/* Subtle hover brightening */}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </>
                <div className="relative z-10 flex justify-center mb-2">
                  <div className="relative w-16 h-16">
                    <Image src={cert.badge} alt={cert.label} fill className="object-contain" sizes="64px" />
                  </div>
                </div>
                <p className="relative z-10 text-[15px] font-bold text-[#111827]">
                  {cert.label}
                </p>
                <p className="relative z-10 text-[12px] mt-1 font-medium text-[#4B5563]">
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
