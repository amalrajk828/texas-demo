"use client";
/* Kit D — Grey: about/certs section with light glassmorphic ISO cards & high-contrast orange gradient heading */
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function GreyAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)" }}>
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
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] rounded-full" style={{ background: "#C2410C" }} />
              <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "#C2410C" }}>
                About Texas Technical Services
              </span>
            </div>
            <h2 className="heading-gradient-rich text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Why was Texas Technical Services established in 2008?
            </h2>
            <p className="text-[17px] leading-relaxed mb-6 text-[#4B5563]">
              Texas Technical Service Company is an ISO 9001:2015 certified company established in 2008. Primarily focused
              on flow measurement, inspection &amp; testing, and industrial automation for oil &amp; gas, power plants, manufacturing and commercial sectors.
            </p>
            <Link
              href="/about-us/"
              className="inline-flex items-center gap-2 text-[16px] font-bold hover:gap-3 transition-all duration-200"
              style={{ color: "#C2410C" }}
            >
              Learn more about Texas Technical Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            {[
              { label: "ISO 9001:2015",  sub: "Quality Management",            accent: true  },
              { label: "ISO 14001:2015", sub: "Environmental Management",      accent: false },
              { label: "ISO 45001:2018", sub: "Occupational Health & Safety",  accent: false },
            ].map(cert => (
              <div 
                key={cert.label} 
                className="relative rounded-xl px-7 py-4 text-center overflow-hidden transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-lg"
                style={
                  cert.accent
                    ? {
                        background: "linear-gradient(135deg, #F0A868, #E8935A)",
                        border: "1px solid rgba(232, 147, 90, 0.4)",
                        boxShadow: "0 8px 24px rgba(232, 147, 90, 0.3)",
                      }
                    : {
                        background: "rgba(255, 255, 255, 0.45)",
                        backdropFilter: isMobile ? "none" : "blur(20px)",
                        WebkitBackdropFilter: isMobile ? "none" : "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.75)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
                      }
                }
              >
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <p 
                  className="text-[17px] font-black tracking-tight" 
                  style={{ color: cert.accent ? "#FFFFFF" : "#111827" }}
                >
                  {cert.label}
                </p>
                <p 
                  className="text-[13px] font-semibold mt-0.5" 
                  style={{ color: cert.accent ? "rgba(255,255,255,0.95)" : "#4B5563" }}
                >
                  {cert.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
