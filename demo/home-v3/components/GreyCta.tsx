"use client";
/* Kit D — Grey: CTA Band — V5 layout with V3 Industrial Teal theme */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GreyCta() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "var(--g-section-a, #EAF3FB)",
      }}
    >
      {/* Hairline borders */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border, rgba(0,0,0,0.07))" }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "var(--g-border, rgba(0,0,0,0.07))" }} />

      {/* Ambient glow layers — matching Services section structure adapted to teal */}
      <div
        className="absolute top-1/4 left-10 w-[500px] h-[500px] pointer-events-none opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(23,112,126,0.18) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10%] right-10 w-[450px] h-[450px] pointer-events-none opacity-20 blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(23,112,126,0.14) 0%, transparent 70%)" }}
      />

      {/* Subtle central ambient light overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.45) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border backdrop-blur-sm" style={{ background: "rgba(23,112,126,0.08)", borderColor: "rgba(23,112,126,0.25)" }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary, #17707E)" }} />
          <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--primary, #17707E)" }}>
            GET IN TOUCH
          </span>
        </div>

        <h2 className="text-[2.4rem] sm:text-[3.2rem] font-bold leading-[1.08] tracking-tight mb-5" style={{ color: "var(--g-heading, #26303A)" }}>
          How can we solve your flow measurement challenge?
        </h2>

        <p className="text-[16px] sm:text-[17px] leading-[1.8] mb-8 max-w-xl mx-auto" style={{ color: "var(--g-muted, #5B6B72)" }}>
          From custody metering to full plant automation — our ISO 9001, ISO
          14001, ISO 45001, UASL & Accurate certified team has delivered
          400+ projects across oil & gas, power, and manufacturing since 2008.
        </p>

        {/* 5 Cert logos row */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
          {[
            { src: "/about/cert-iso9001.png", alt: "ISO 9001:2015" },
            { src: "/about/cert-iso14001.png", alt: "ISO 14001:2015" },
            { src: "/about/cert-iso45001.png", alt: "ISO 45001:2018" },
            { src: "/about/cert-uasl.png", alt: "UASL Accredited" },
            { src: "/about/cert-accurate-white.png", alt: "Accurate Certified" },
          ].map((cert) => (
            <Link
              key={cert.src}
              href="/certifications/"
              className="relative w-12 h-12 sm:w-14 sm:h-14 block hover:opacity-80 hover:scale-105 transition-all"
            >
              <Image src={cert.src} alt={cert.alt} fill className="object-contain" sizes="56px" />
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contacts/"
            className="inline-flex items-center gap-2 font-bold text-[14.5px] px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "var(--primary, #17707E)",
              color: "#FFFFFF",
              boxShadow: "0 4px 20px rgba(23,112,126,0.28)",
            }}
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 font-semibold text-[14.5px] px-8 py-3.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border, #D5DEDE)",
              color: "var(--g-heading, #26303A)",
              background: "rgba(255,255,255,0.75)",
            }}
          >
            <span>Our Services</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </Link>
        </div>
      </div>
    </section>
  );
}
