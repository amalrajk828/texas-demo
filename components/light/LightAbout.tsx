"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function LightAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 lg:py-20" style={{ background: "var(--color-surface)" }}>
      <div className="absolute left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
              <span className="text-[11px] font-bold tracking-[3px] uppercase" style={{ color: "var(--color-brand-red)" }}>
                About Texas Technical Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4" style={{ color: "var(--color-text-primary)" }}>
              Established 2008. Built on precision.
            </h2>
            <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--color-text-muted)" }}>
              Texas Technical Service Company is an ISO 9001:2015 certified company established in 2008.
              We are primarily focused on Flow measurement solutions, Inspection and testing, and industrial
              automation requirements for the oil and gas, power plants, manufacturing and commercial sectors.
            </p>
            <Link href="/about-us/"
              className="inline-flex items-center gap-2 text-[16px] font-bold transition-colors"
              style={{ color: "var(--color-brand-red)" }}>
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row lg:flex-col gap-3"
          >
            {[
              { label: "ISO 9001:2015", sub: "Quality Management", accent: true },
              { label: "ISO 14001:2015", sub: "Environmental Management", accent: false },
              { label: "ISO 45001:2018", sub: "Occupational Health & Safety", accent: false },
            ].map((cert) => (
              <div key={cert.label} className="rounded-xl px-7 py-4 text-center"
                style={{
                  background: cert.accent ? "var(--color-brand-red)" : "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(8px)",
                  border: cert.accent ? "none" : "1px solid var(--color-border)",
                  boxShadow: cert.accent
                    ? "0 4px 16px color-mix(in srgb, var(--color-brand-red) 25%, transparent)"
                    : "0 1px 4px rgba(0,0,0,0.04)",
                }}>
                <p className="text-[15px] font-bold" style={{ color: cert.accent ? "white" : "var(--color-text-primary)" }}>{cert.label}</p>
                <p className="text-[12px] mt-1 font-medium" style={{ color: cert.accent ? "rgba(255,255,255,0.75)" : "var(--color-text-muted)" }}>{cert.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
