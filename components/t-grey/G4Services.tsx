"use client";
/* Kit G4 — Services: minimal, large headline cards with thin borders */
import Link from "next/link";
import { Gauge, FlaskConical, Cpu, ArrowRight } from "lucide-react";

const SERVICES = [
  { Icon: Gauge,        title: "Flow Measurement & Control", body: "Metering control system upgrades, maintenance, and validation for custody metering systems. Ensuring accuracy to API, AGA, and ISO standards.", href: "/service/flow-measurement-solutions/", tag: "Metering",   col: "color-mix(in srgb, var(--color-brand-red) 6%, white)" },
  { Icon: FlaskConical, title: "Inspection & Testing",       body: "Comprehensive inspection, NDT, functional testing and certification across all industrial sectors. ISO 9001, ISO 14001, ISO 45001, UASL and Accurate compliance.",           href: "/service/inspection-testing/",          tag: "NDT & QA",   col: "color-mix(in srgb, var(--color-brand-red) 4%, white)" },
  { Icon: Cpu,          title: "Industrial Automation",      body: "Control system design, PLC programming, SCADA integration and HMI engineering — optimising operations across oil & gas and manufacturing.",        href: "/service/industrial-automation/",        tag: "Automation", col: "color-mix(in srgb, var(--color-brand-red) 5%, white)" },
];

export default function G4Services() {
  return (
    <section className="relative py-24 lg:py-32" style={{ background: "var(--g-section-b)" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] rounded-full" style={{ background: "#0E7490" }} />
              <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "#0E7490" }}>Our Services</span>
            </div>
            <h2 className="text-[2.8rem] sm:text-[3.4rem] font-black leading-[1.05] tracking-tight" style={{ color: "var(--g-heading)" }}>What We Offer</h2>
          </div>
          <p className="max-w-md text-[17px] leading-[1.85]" style={{ color: "var(--g-muted)" }}>ISO-certified expertise since 2008.</p>
        </div>

        {/* Large bold cards — minimal style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <div className="fade-up d1">
              <div
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
                style={{ background: "var(--g-card-bg)", border: "1px solid var(--g-card-border)", boxShadow: "var(--g-card-shadow)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.09), 0 0 0 1.5px var(--color-brand-red)`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "var(--g-card-shadow)")}
              >
                {/* Top colour band */}
                <div className="h-[4px]" style={{ background: `linear-gradient(90deg, var(--color-brand-red), color-mix(in srgb, var(--color-brand-red) 20%, transparent))` }} />

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon row */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: svc.col, border: "1px solid color-mix(in srgb, var(--color-brand-red) 14%, transparent)" }}>
                      <svc.Icon className="w-6 h-6" strokeWidth={1.6} style={{ color: "var(--color-brand-red)" }} />
                    </div>
                    <span className="text-[10px] font-bold tracking-[2.5px] uppercase px-2.5 py-1 rounded-full"
                      style={{ color: "var(--color-brand-red)", background: svc.col, border: "1px solid color-mix(in srgb, var(--color-brand-red) 14%, transparent)" }}>
                      {svc.tag}
                    </span>
                  </div>

                  {/* Oversized heading */}
                  <h3 className="text-[1.6rem] font-black leading-snug mb-3" style={{ color: "var(--g-heading)" }}>{svc.title}</h3>
                  <div className="w-8 h-[2px] rounded-full mb-4" style={{ background: "var(--color-brand-red)" }} />
                  <p className="text-[16px] leading-[1.9] flex-1" style={{ color: "var(--g-muted)" }}>{svc.body}</p>

                  <div className="mt-8 pt-5 border-t flex items-center justify-between" style={{ borderColor: "var(--g-border)" }}>
                    <Link href={svc.href} className="inline-flex items-center gap-1.5 text-[14px] font-bold hover:gap-3 transition-all" style={{ color: "var(--color-brand-red)" }}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {/* Hover arrow box */}
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                      style={{ background: "var(--color-brand-red)" }}>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center mt-10">
          <Link href="/services/" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-[15px] border hover:-translate-y-0.5 transition-all"
            style={{ color: "var(--g-heading)", borderColor: "var(--g-border)", background: "var(--g-card-bg)", boxShadow: "var(--g-card-shadow)" }}>
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
