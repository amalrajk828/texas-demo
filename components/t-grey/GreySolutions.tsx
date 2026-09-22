"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Scale, Brain } from "lucide-react";

const SOLUTIONS = [
  {
    icon: Scale,
    label: "Texaflow",
    title: "Custody Metering Integrated Control System",
    desc: "Proprietary fiscal metering & SCADA solution for oil & gas terminals, refineries, pipeline stations, and loading facilities — automated meter proving, real-time flow computer integration, and regulatory compliance.",
    href: "/solutions/texaflow/",
  },
  {
    icon: Brain,
    label: "Space AI",
    title: "Industrial AI & Machine Learning",
    desc: "Next-generation AI for industry — predictive maintenance, process optimization with virtual metrology & digital twins, and smart monitoring with ESG & carbon tracking. Reduce unplanned downtime by up to 50%.",
    href: "/solutions/space-ai/",
  },
];

export default function GreySolutions() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "var(--g-section-a)" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in srgb, var(--color-brand-red) 3%, transparent), transparent)" }} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 mb-5"
          >
            <span className="w-6 h-px" style={{ background: "#8a302f" }} />
            <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "#8a302f" }}>
              Solutions & Partners
            </span>
            <span className="w-6 h-px" style={{ background: "#8a302f" }} />
          </div>

          <h2
            className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black leading-[1.15] max-w-2xl mx-auto tracking-tight fade-up"
            style={{ color: "var(--g-heading)" }}
          >
            Which proprietary platforms deliver proven results?
          </h2>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {SOLUTIONS.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col h-full"
            >
              <Link
                href={s.href}
                className="group flex flex-col h-full relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--g-card-bg)",
                  border: "1px solid var(--g-card-border)",
                  boxShadow: "var(--g-card-shadow)",
                }}
              >
                <div className="p-8 sm:p-10 flex flex-col flex-1">
                  {/* Icon + Label */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "color-mix(in srgb, var(--color-brand-red) 8%, transparent)" }}
                    >
                      <s.icon className="w-5 h-5" style={{ color: "var(--color-brand-red)" }} strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-bold tracking-[3px] uppercase" style={{ color: "#B71C1C" }}>
                      {s.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[clamp(1.3rem,2.5vw,1.7rem)] font-black leading-[1.2] mb-4 tracking-tight"
                    style={{ color: "var(--g-heading)" }}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] leading-relaxed mb-8 flex-grow" style={{ color: "var(--g-muted)" }}>
                    {s.desc}
                  </p>

                  {/* CTA */}
                  <span
                    className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-slate-600 hover:text-slate-900 group-hover:gap-3 transition-all mt-auto whitespace-nowrap"
                  >
                    Learn more about {s.label}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom accent bar */}
                <div className="h-[2px] w-full mt-auto" style={{ background: "var(--color-brand-red)", opacity: 0.15 }} />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-14 pt-10 border-t"
          style={{ borderColor: "var(--g-border)" }}
        >
          <Link
            href="/partners/"
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-[15px] border hover:-translate-y-0.5 transition-all"
            style={{ color: "var(--g-heading)", borderColor: "var(--g-border)", background: "var(--g-card-bg)", boxShadow: "var(--g-card-shadow)" }}
          >
            Explore all partners
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
