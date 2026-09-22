"use client";
/* Theme V5: GreyCta styled to Home V2 design system
   Tokens: --bg (#0F1117), --border-default, --accent (#E53935), --accent-hover (#dc2626)
*/
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GreyCta() {
  return (
    <section
      className="relative py-24 v5-grid-bg"
      style={{ 
        backgroundColor: "var(--bg, #0F1117)", 
        borderTop: "1px solid var(--border-default, rgba(255, 255, 255, 0.08))" 
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] mb-4 border border-white/[0.08] bg-white/[0.03]">
          <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)]" />
          <span
            className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-white/80"
          >
            GET IN TOUCH
          </span>
        </div>

        <h2
          className="text-[2.4rem] sm:text-[3.2rem] font-bold leading-[1.08] tracking-tight mb-5 text-white"
        >
          How can we solve your flow measurement challenge?
        </h2>

        <p
          className="text-[16px] sm:text-[17px] leading-[1.8] mb-8 max-w-xl mx-auto text-[#9CA3AF]"
        >
          From custody metering to full plant automation — our ISO 9001, ISO
          14001, ISO 45001, UASL &amp; Accurate certified team has delivered
          400+ projects across oil &amp; gas, power, and manufacturing since 2008.
        </p>

        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
          {[
            { src: "/about/cert-iso9001.png", alt: "ISO 9001:2015" },
            { src: "/about/cert-iso14001.png", alt: "ISO 14001:2015" },
            { src: "/about/cert-iso45001.png", alt: "ISO 45001:2018" },
            { src: "/about/cert-uasl.png", alt: "UASL Accredited" },
            { src: "/about/cert-accurate-white.png", alt: "Accurate Certified" },
          ].map((cert) => (
            <Link key={cert.src} href="/certifications/" className="relative w-12 h-12 sm:w-14 sm:h-14 block hover:opacity-80 hover:scale-105 transition-all">
              <Image src={cert.src} alt={cert.alt} fill className="object-contain" sizes="56px" />
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contacts/"
            className="v5-btn-primary"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services/"
            className="v5-btn-secondary"
          >
            <span>Our Services</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </Link>
        </div>
      </div>
    </section>
  );
}
