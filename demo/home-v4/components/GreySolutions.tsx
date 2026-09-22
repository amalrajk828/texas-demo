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
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "#FFFFFF" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(234, 88, 12, 0.03), transparent)" }} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 mb-5"
          >
            <span className="w-6 h-px" style={{ background: "#C2410C" }} />
            <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "#C2410C" }}>
              Solutions &amp; Partners
            </span>
            <span className="w-6 h-px" style={{ background: "#C2410C" }} />
          </div>

          <h2
            className="heading-gradient-rich text-[clamp(2.2rem,4.5vw,3.4rem)] font-black leading-[1.15] max-w-2xl mx-auto tracking-tight fade-up"
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
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl overflow-hidden transition-all duration-300 h-full hover:shadow-2xl hover:-translate-y-1 block"
                style={{
                  background: "var(--g-card-bg)",
                  border: "1px solid var(--g-card-border)",
                  boxShadow: "var(--g-card-shadow)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md"
                      style={{
                        background: "rgba(234, 88, 12, 0.08)",
                        border: "1px solid rgba(234, 88, 12, 0.18)",
                      }}
                    >
                      <s.icon
                        className="w-7 h-7 transition-colors duration-300"
                        style={{ color: "#C2410C" }}
                        strokeWidth={1.75}
                      />
                    </div>

                    <span
                      className="text-[11px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full"
                      style={{
                        color: "#C2410C",
                        background: "rgba(234, 88, 12, 0.08)",
                        border: "1px solid rgba(234, 88, 12, 0.2)",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>

                  <h3
                    className="text-[1.35rem] font-bold leading-snug mb-3 transition-colors duration-200 group-hover:text-[#C2410C]"
                    style={{ color: "var(--g-heading)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[14.5px] leading-relaxed font-normal"
                    style={{ color: "var(--g-muted)" }}
                  >
                    {s.desc}
                  </p>
                </div>

                <div
                  className="inline-flex items-center gap-2 text-[14px] font-bold mt-8 pt-5 border-t group-hover:gap-3 transition-all duration-200"
                  style={{
                    color: "#C2410C",
                    borderColor: "var(--g-border)",
                  }}
                >
                  <span>Explore {s.label}</span> <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
