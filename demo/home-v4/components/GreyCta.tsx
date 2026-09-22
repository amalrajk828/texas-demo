"use client";
/* Kit D — Grey: CTA — clean white section with rich orange gradient heading */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeSection from "@/components/motion/FadeSection";

export default function GreyCta() {
  return (
    <section
      className="relative py-24"
      style={{ background: "#F9FAFB", borderTop: "1px solid var(--g-border)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeSection delay={0}>
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-6 h-px" style={{ background: "#C2410C" }} />
            <span
              className="text-[11px] font-bold tracking-[4px] uppercase"
              style={{ color: "#C2410C" }}
            >
              GET IN TOUCH
            </span>
            <span className="w-6 h-px" style={{ background: "#C2410C" }} />
          </div>
        </FadeSection>

        <FadeSection delay={0.1}>
          <h2
            className="heading-gradient-rich text-[2.6rem] sm:text-[3.2rem] font-black leading-[1.08] tracking-tight mb-5"
          >
            How can we solve your flow measurement challenge?
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
            <div className="hover:scale-105 transition-transform">
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-all"
                style={{
                  background: "linear-gradient(to right, #F0A868, #E8935A)",
                  boxShadow: "0 4px 20px rgba(232, 147, 90, 0.35)",
                }}
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="hover:scale-105 transition-transform">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-xl border transition-colors hover:border-[#C2410C] hover:text-[#C2410C]"
                style={{
                  borderColor: "var(--g-border)",
                  color: "var(--g-heading)",
                  background: "var(--g-card-bg)",
                }}
              >
                Our Services <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
