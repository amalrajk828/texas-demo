"use client";
/* Kit D — Grey: CTA — clean white section, red accent text */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeSection from "@/components/motion/FadeSection";

export default function GreyCta() {
  return (
    <section
      className="relative py-24"
      style={{ background: "var(--g-section-b)", borderTop: "1px solid var(--g-border)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeSection delay={0}>
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-6 h-px" style={{ background: "#8a302f" }} />
            <span
              className="text-[11px] font-bold tracking-[4px] uppercase"
              style={{ color: "#8a302f" }}
            >
              GET IN TOUCH
            </span>
            <span className="w-6 h-px" style={{ background: "#8a302f" }} />
          </div>
        </FadeSection>

        <FadeSection delay={0.1}>
          <h2
            className="text-[2.6rem] sm:text-[3.2rem] font-black leading-[1.08] tracking-tight mb-5"
            style={{ color: "var(--g-heading)" }}
          >
            How can we solve your flow measurement challenge?
          </h2>
        </FadeSection>

        <FadeSection delay={0.18}>
          <p
            className="text-[18px] leading-[1.85] mb-10 max-w-xl mx-auto"
            style={{ color: "var(--g-muted)" }}
          >
            From custody metering to full plant automation — our ISO 9001, ISO
            14001, ISO 45001, UASL &amp; Accurate certified team has delivered
            400+ projects across oil &amp; gas, power, and manufacturing since 2008.
          </p>
        </FadeSection>

        <FadeSection delay={0.22}>
          <div className="flex items-center justify-center gap-5 mb-8">
            {["/about/cert-iso9001.png", "/about/cert-iso14001.png", "/about/cert-iso45001.png", "/about/cert-uasl.png", "/about/cert-accurate.png"].map((src) => (
              <Link key={src} href="/certifications/" className="relative w-16 h-16 block">
                <Image src={src} alt="" fill className="object-contain" sizes="64px" />
              </Link>
            ))}
          </div>
        </FadeSection>

        <FadeSection delay={0.26}>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="hover:scale-105 transition-transform">
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
            </div>
            <div className="hover:scale-105 transition-transform">
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
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
