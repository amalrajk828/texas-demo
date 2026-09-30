"use client";
/* Kit D — Grey: CTA — clean white section, red accent text */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeSection from "@/components/motion/FadeSection";

export default function GreyCta() {
  return (
    <section
      className="relative py-6 sm:py-12 lg:py-24"
      style={{ background: "var(--g-section-b)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeSection delay={0}>
          <div className="inline-flex items-center gap-3 mb-2 sm:mb-5">
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
            className="text-[clamp(1.5rem,4vw,3.2rem)] font-black leading-[1.12] tracking-tight mb-3 sm:mb-5"
            style={{ color: "var(--g-heading)" }}
          >
            How can we solve your flow measurement challenge?
          </h2>
        </FadeSection>

        <FadeSection delay={0.18}>
          <p
            className="text-xs sm:text-[17px] leading-relaxed sm:leading-[1.85] mb-5 sm:mb-10 max-w-xl mx-auto"
            style={{ color: "var(--g-muted)" }}
          >
            From custody metering to full plant automation — our ISO 9001, ISO
            14001, ISO 45001, UASL &amp; Accurate certified team has delivered
            400+ projects across oil &amp; gas, power, and manufacturing since 2008.
          </p>
        </FadeSection>

        <FadeSection delay={0.22}>
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-6 sm:mb-9 flex-wrap">
            {[
              { src: "/about/cert-iso9001.png", alt: "ISO 9001:2015" },
              { src: "/about/cert-iso14001.png", alt: "ISO 14001:2015" },
              { src: "/about/cert-iso45001.png", alt: "ISO 45001:2018" },
              { src: "/about/cert-uasl.png", alt: "UASL Accredited" },
              { src: "/about/cert-accurate.png", alt: "Accurate Certified" },
            ].map((cert) => (
              <Link
                key={cert.src}
                href="/certifications/"
                className="relative rounded-2xl p-2.5 sm:p-3 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.60)",
                  backdropFilter: "blur(20px) saturate(160%)",
                  WebkitBackdropFilter: "blur(20px) saturate(160%)",
                  border: "1px solid rgba(255, 255, 255, 0.90)",
                  boxShadow: "0 8px 24px -4px rgba(20, 45, 75, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.50) inset",
                }}
              >
                {/* Top specular reflection / edge highlight */}
                <div
                  className="absolute top-0 inset-x-0 h-[1.5px] pointer-events-none rounded-t-2xl"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.95), transparent)" }}
                />
                <div className="relative w-10 h-10 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_6px_rgba(20,40,65,0.12)]">
                  <Image src={cert.src} alt={cert.alt} fill className="object-contain" sizes="56px" />
                </div>
              </Link>
            ))}
          </div>
        </FadeSection>

        <FadeSection delay={0.26}>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <div className="hover:scale-105 transition-transform">
              <Link
                href="/contacts/"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 text-white font-bold text-[14px] sm:text-[15px] px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors"
                style={{
                  background: "var(--color-brand-red)",
                  boxShadow: "0 4px 20px color-mix(in srgb, var(--color-brand-red) 30%, transparent)",
                }}
              >
                <span>Contact Us</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="hover:scale-105 transition-transform">
              <Link
                href="/services/"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 font-semibold text-[14px] sm:text-[15px] px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-[rgba(58,110,165,0.20)] bg-white text-[#16202b] hover:bg-[#eef3f8] hover:border-[#8a302f] transition-all shadow-[0_2px_10px_rgba(20,50,90,0.04)]"
              >
                <span>Our Services</span>
              </Link>
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
