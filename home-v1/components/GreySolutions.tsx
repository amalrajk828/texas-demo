"use client";

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
      className="relative overflow-hidden py-24 lg:py-32 v5-grid-bg" 
      style={{ 
        backgroundColor: "var(--bg, #0F1117)",
        borderTop: "1px solid var(--border-default, rgba(255, 255, 255, 0.08))"
      }}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] mb-4 border border-white/[0.08] bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-white/80">
              SOLUTIONS &amp; PARTNERS
            </span>
          </div>

          <h2
            className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-bold leading-[1.08] max-w-2xl mx-auto tracking-tight"
            style={{ color: "var(--text-heading, #ffffff)" }}
          >
            Which proprietary platforms deliver proven results?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {SOLUTIONS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col h-full"
            >
              <Link
                href={s.href}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-[6px] overflow-hidden transition-all duration-200 h-full block border"
                style={{
                  backgroundColor: "var(--card, #1E2330)",
                  borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))",
                }}
              >
                {/* Corner square red indicator */}
                <span className="v5-corner-indicator opacity-60 group-hover:opacity-100 group-hover:scale-125" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-14 h-14 rounded-[5px] flex items-center justify-center transition-all duration-200"
                      style={{
                        background: "rgba(229, 57, 53, 0.12)",
                        border: "1px solid rgba(229, 57, 53, 0.35)",
                      }}
                    >
                      <s.icon
                        className="w-7 h-7 text-[var(--accent)]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[12px] font-bold text-[var(--accent)]">
                        {s.prefix}
                      </span>
                      <span
                        className="text-[11px] font-mono font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-[4px]"
                        style={{
                          color: "var(--text-heading, #ffffff)",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid var(--border-default, rgba(255, 255, 255, 0.08))",
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="text-[1.35rem] font-bold leading-snug mb-3 transition-colors duration-200 group-hover:text-white"
                    style={{ color: "var(--text-heading, #ffffff)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed font-normal"
                    style={{ color: "var(--text-body, #F9FAFB)" }}
                  >
                    {s.desc}
                  </p>
                </div>

                <div
                  className="inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.12em] mt-8 pt-5 border-t group-hover:gap-3 transition-all duration-200"
                  style={{
                    color: "var(--accent, #E53935)",
                    borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))",
                  }}
                >
                  <span>Learn more about {s.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA to explore all partners */}
        <div className="text-center mt-12 pt-8 border-t border-white/[0.08]">
          <Link
            href="/partners/"
            className="v5-btn-secondary"
          >
            <span>Explore all partners</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <style jsx>{`
        .group:hover {
          border-color: var(--border-active, #E53935) !important;
        }
      `}</style>
    </section>
  );
}
