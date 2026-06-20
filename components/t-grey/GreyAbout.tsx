"use client";
/* Kit D — Grey: about/certs section, white cert cards on grey */
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function GreyAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-16 lg:py-20" style={{ background: "var(--g-section-a)" }}>
      <div className="absolute inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
              <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>About Texas Technical Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4" style={{ color: "var(--g-heading)" }}>
              Established 2008. Built on precision.
            </h2>
            <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--g-muted)" }}>
              Texas Technical Service Company is an ISO 9001:2015 certified company established in 2008. Primarily focused
              on flow measurement, inspection & testing, and industrial automation for oil & gas, power plants, manufacturing and commercial sectors.
            </p>
            <Link href="/about-us/" className="inline-flex items-center gap-2 text-[16px] font-bold" style={{ color: "var(--color-brand-red)" }}>
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col sm:flex-row lg:flex-col gap-3">
            {[
              { label: "ISO 9001:2015",  sub: "Quality Management",            accent: true  },
              { label: "ISO 14001:2015", sub: "Environmental Management",      accent: false },
              { label: "ISO 45001:2018", sub: "Occupational Health & Safety",  accent: false },
            ].map(cert => (
              <div key={cert.label} className="rounded-xl px-7 py-4 text-center"
                style={{
                  background:   cert.accent ? "var(--color-brand-red)" : "var(--g-card-bg)",
                  border:       cert.accent ? "none" : "1px solid var(--g-card-border)",
                  boxShadow:    cert.accent ? "0 4px 20px color-mix(in srgb, var(--color-brand-red) 28%, transparent)" : "var(--g-card-shadow)",
                }}>
                <p className="text-[15px] font-bold" style={{ color: cert.accent ? "white" : "var(--g-heading)" }}>{cert.label}</p>
                <p className="text-[12px] mt-1 font-medium" style={{ color: cert.accent ? "rgba(255,255,255,0.75)" : "var(--g-muted)" }}>{cert.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
