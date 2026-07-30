"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "var(--g-section-a)" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in srgb, var(--color-brand-red) 3%, transparent), transparent)" }} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-5"
          >
            <span className="w-6 h-px" style={{ background: "var(--color-brand-red)" }} />
            <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "var(--color-brand-red)" }}>
              Solutions & Partners
            </span>
            <span className="w-6 h-px" style={{ background: "var(--color-brand-red)" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black leading-[1.15] max-w-2xl mx-auto tracking-tight"
            style={{ color: "var(--g-heading)" }}
          >
            Which proprietary platforms deliver{" "}
            <span style={{ color: "var(--color-brand-red)" }}>proven results?</span>
          </motion.h2>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={s.href}
                className="group block relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--g-card-bg)",
                  border: "1px solid var(--g-card-border)",
                  boxShadow: "var(--g-card-shadow)",
                }}
              >
                <div className="p-8 sm:p-10">
                  {/* Icon + Label */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "color-mix(in srgb, var(--color-brand-red) 8%, transparent)" }}
                    >
                      <s.icon className="w-5 h-5" style={{ color: "var(--color-brand-red)" }} strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-bold tracking-[3px] uppercase" style={{ color: "var(--color-brand-red)" }}>
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
                  <p className="text-[14px] leading-relaxed mb-8" style={{ color: "var(--g-muted)" }}>
                    {s.desc}
                  </p>

                  {/* CTA */}
                  <span
                    className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide group-hover:gap-3 transition-all"
                    style={{ color: "var(--color-brand-red)" }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom accent bar */}
                <div className="h-[2px] w-full" style={{ background: "var(--color-brand-red)", opacity: 0.15 }} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
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
        </motion.div>
      </div>
    </section>
  );
}
