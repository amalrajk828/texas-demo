"use client";
/* Kit G4 — Minimal line-rule: borderless, typography-only, red rule separators */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gauge, FlaskConical, Cpu } from "lucide-react";

const SERVICES = [
  { Icon: Gauge,        num: "01", title: "Flow Measurement & Control", desc: "Comprehensive custody metering, flow computers, metering skids, and control system upgrades for liquid, gas, and water applications." },
  { Icon: FlaskConical, num: "02", title: "Inspection & Testing",       desc: "Specialised NDT, validation and mechanical testing of metering systems with full ISO-certified consultancy support." },
  { Icon: Cpu,          num: "03", title: "Industrial Automation",      desc: "End-to-end plant automation — PLC, SCADA, HMI, VFDs and CEMS for oil & gas, power, and manufacturing sectors." },
];

export default function G4WhatWeDo() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--g-section-a)" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 lg:gap-24">
          {/* Left column */}
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[3px] rounded-full" style={{ background: "#0E7490" }} />
              <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "#0E7490" }}>What We Do</span>
            </div>
            <h2 className="text-[2.8rem] sm:text-[3.4rem] font-black leading-[1.05] tracking-tight mb-6" style={{ color: "var(--g-heading)" }}>
              Precision Solutions
            </h2>
            <p className="text-[17px] leading-[1.9] mb-8" style={{ color: "var(--g-muted)" }}>
              Texas Technical Services delivers precision-engineered solutions across flow measurement, inspection, and industrial automation — trusted by leading operators since 2008.
            </p>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl mb-8" style={{ border: "1px solid var(--g-border)" }}>
              <Image src="/our-team/Oil-Gas.jpg" alt="Oil & Gas" fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover" quality={85} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)" }} />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-[10px] font-bold tracking-[3px] uppercase mb-1">ISO 9001 · 14001 · 45001 · UASL · Accurate Certified</p>
                <p className="text-white/60 text-[12px]">Established 2008 · Kuwait & Dubai</p>
              </div>
              <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: "var(--color-brand-red)" }} />
            </div>
            <Link href="/contacts/" className="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-xl text-[15px] hover:-translate-y-0.5 transition-all"
              style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 20px color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}>
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — typography-only service list */}
          <div className="flex flex-col justify-center">
            {SERVICES.map((svc, i) => (
              <div className="fade-up d1">
                <div className={`group py-10 ${i > 0 ? "border-t" : ""}`} style={{ borderColor: "var(--g-border)" }}>
                  <div className="flex items-start gap-8">
                    {/* Number + icon */}
                    <div className="shrink-0 flex flex-col items-center gap-3 pt-1">
                      <span className="text-[2.2rem] font-black leading-none" style={{ color: "color-mix(in srgb, var(--color-brand-red) 20%, transparent)" }}>{svc.num}</span>
                      <div className="w-[2px] h-8 rounded-full" style={{ background: "color-mix(in srgb, var(--color-brand-red) 25%, transparent)" }} />
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: "color-mix(in srgb, var(--color-brand-red) 8%, white)", border: "1px solid color-mix(in srgb, var(--color-brand-red) 14%, transparent)" }}>
                        <svc.Icon className="w-4 h-4" strokeWidth={1.8} style={{ color: "var(--color-brand-red)" }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1.7rem] lg:text-[2rem] font-black leading-snug mb-3" style={{ color: "var(--g-heading)" }}>{svc.title}</h3>
                      <p className="text-[16px] leading-[1.85] mb-5" style={{ color: "var(--g-muted)" }}>{svc.desc}</p>
                      <Link href="/services/" className="inline-flex items-center gap-1.5 text-[14px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-200"
                        style={{ color: "var(--color-brand-red)" }}>
                        Learn more <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="fade-up d4">
              <div className="mt-6 pt-8 border-t grid grid-cols-3 gap-6" style={{ borderColor: "var(--g-border)" }}>
                {[{ num: "18+", label: "Years" }, { num: "200+", label: "Clients" }, { num: "8", label: "Industries" }].map(s => (
                  <div key={s.label}>
                    <p className="text-[2rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{s.num}</p>
                    <p className="text-[12px] font-semibold uppercase tracking-wide mt-1" style={{ color: "var(--g-muted)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
