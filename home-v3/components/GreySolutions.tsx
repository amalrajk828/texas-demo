"use client";
/* Kit D — Grey: Solutions & Partners — V5 layout with V3 Industrial Teal theme */
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Scale, Brain } from "lucide-react";

const SOLUTIONS = [
  {
    prefix: "/01",
    icon: Scale,
    label: "Texaflow",
    title: "Custody Metering Integrated Control System",
    desc: "Proprietary fiscal metering & SCADA solution for oil & gas terminals, refineries, pipeline stations, and loading facilities — automated meter proving, real-time flow computer integration, and regulatory compliance.",
    href: "/solutions/texaflow/",
  },
  {
    prefix: "/02",
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
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "var(--g-section-a, #EAF3FB)",
        borderTop: "1px solid var(--g-border, rgba(0,0,0,0.07))",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(23,112,126,0.05), transparent)" }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 border"
            style={{
              background: "rgba(23, 112, 126, 0.08)",
              borderColor: "rgba(23, 112, 126, 0.25)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary, #17707E)" }} />
            <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--primary, #17707E)" }}>
              SOLUTIONS & PARTNERS
            </span>
          </div>

          <h2
            className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-bold leading-[1.08] max-w-2xl mx-auto tracking-tight"
            style={{ color: "var(--g-heading, #26303A)" }}
          >
            Which proprietary platforms deliver proven results?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {SOLUTIONS.map((s) => (
            <div key={s.label} className="flex flex-col h-full">
              <Link
                href={s.href}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl overflow-hidden transition-all duration-300 h-full block border"
                style={{
                  backgroundColor: "var(--g-card-bg, #FFFFFF)",
                  borderColor: "var(--g-card-border, rgba(0, 0, 0, 0.08))",
                  boxShadow: "var(--g-card-shadow, 0 4px 20px rgba(0, 0, 0, 0.05))",
                }}
              >
                {/* Corner teal dot indicator */}
                <span className="v3-corner-indicator opacity-60 group-hover:opacity-100 group-hover:scale-125" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: "rgba(23, 112, 126, 0.10)",
                        border: "1px solid rgba(23, 112, 126, 0.25)",
                      }}
                    >
                      <s.icon
                        className="w-7 h-7"
                        style={{ color: "var(--primary, #17707E)" }}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[12px] font-bold" style={{ color: "var(--primary, #17707E)" }}>
                        {s.prefix}
                      </span>
                      <span
                        className="text-[11px] font-mono font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full"
                        style={{
                          color: "var(--primary, #17707E)",
                          background: "rgba(23, 112, 126, 0.08)",
                          border: "1px solid rgba(23, 112, 126, 0.20)",
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="text-[1.35rem] font-bold leading-snug mb-3 transition-colors duration-200"
                    style={{ color: "var(--g-heading, #26303A)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed font-normal"
                    style={{ color: "var(--g-muted, #5B6B72)" }}
                  >
                    {s.desc}
                  </p>
                </div>

                <div
                  className="inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.12em] mt-8 pt-5 border-t group-hover:gap-3 transition-all duration-200"
                  style={{
                    color: "var(--primary, #17707E)",
                    borderColor: "var(--g-border, rgba(0, 0, 0, 0.07))",
                  }}
                >
                  <span>Learn more about {s.label}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA to explore all partners */}
        <div className="text-center mt-12 pt-8 border-t" style={{ borderColor: "var(--g-border, rgba(0,0,0,0.07))" }}>
          <Link
            href="/partners/"
            className="inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.12em] px-8 py-3.5 rounded-md border transition-all duration-200 hover:gap-3 hover:scale-105"
            style={{
              borderColor: "var(--border, #D5DEDE)",
              color: "var(--g-heading, #26303A)",
              background: "rgba(255, 255, 255, 0.85)",
            }}
          >
            <span>Explore all partners</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
