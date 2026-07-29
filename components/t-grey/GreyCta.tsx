"use client";
/* Kit D — Grey: CTA — clean white section, red accent text */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeSection from "@/components/motion/FadeSection";

export default function GreyCta() {
  return (
    <section
      className="relative py-24"
      style={{ background: "var(--g-section-b)", borderTop: "1px solid var(--g-border)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeSection delay={0}>
          <p
            className="text-[11px] font-bold tracking-[4px] uppercase mb-5"
            style={{ color: "var(--g-muted)" }}
          >
            GET IN TOUCH
          </p>
        </FadeSection>

        <FadeSection delay={0.1}>
          <h2
            className="text-[2.6rem] sm:text-[3.2rem] font-black leading-[1.08] tracking-tight mb-5"
            style={{ color: "var(--color-brand-red)" }}
          >
            Let's Solve Your Flow Measurement Challenge
          </h2>
        </FadeSection>

        <FadeSection delay={0.18}>
          <p
            className="text-[18px] leading-[1.85] mb-10 max-w-xl mx-auto"
            style={{ color: "var(--g-muted)" }}
          >
            From custody metering to full plant automation — our ISO 9001:2015
            certified team has delivered 400+ projects across oil &amp; gas,
            power, and manufacturing since 2008.
          </p>
        </FadeSection>

        <FadeSection delay={0.26}>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-colors"
                style={{
                  background: "var(--color-brand-red)",
                  boxShadow: "0 4px 20px color-mix(in srgb, var(--color-brand-red) 30%, transparent)",
                }}
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-xl border transition-colors"
                style={{
                  color: "var(--g-heading)",
                  borderColor: "var(--g-border)",
                  background: "var(--g-card-bg)",
                }}
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
