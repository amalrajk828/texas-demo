"use client";
/* Kit D — Grey: CTA — V5 layout with V2 color tokens */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GreyCta() {
  return (
    <section
      className="relative py-24"
      style={{ background: "var(--g-section-b)", borderTop: "1px solid var(--g-border)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow label — V2 red instead of V5's teal */}
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-6 h-px" style={{ background: "var(--color-brand-red)" }} />
          <span
            className="text-[11px] font-bold tracking-[4px] uppercase"
            style={{ color: "var(--color-brand-red)" }}
          >
            GET IN TOUCH
          </span>
          <span className="w-6 h-px" style={{ background: "var(--color-brand-red)" }} />
        </div>

        <h2
          className="text-[2.6rem] sm:text-[3.2rem] font-black leading-[1.08] tracking-tight mb-5"
          style={{ color: "var(--g-heading)" }}
        >
          How can we solve your flow measurement challenge?
        </h2>

        <p
          className="text-[18px] leading-[1.85] mb-8 max-w-xl mx-auto"
          style={{ color: "var(--g-muted)" }}
        >
          From custody metering to full plant automation — our ISO 9001, ISO
          14001, ISO 45001, UASL &amp; Accurate certified team has delivered
          400+ projects across oil &amp; gas, power, and manufacturing since 2008.
        </p>

        {/* Cert logos row — matching V5 */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
          {[
            { src: "/about/cert-iso9001.png",       alt: "ISO 9001:2015" },
            { src: "/about/cert-iso14001.png",      alt: "ISO 14001:2015" },
            { src: "/about/cert-iso45001.png",      alt: "ISO 45001:2018" },
            { src: "/about/cert-uasl.png",          alt: "UASL Accredited" },
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

        {/* CTA buttons — V2 inline styles */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="hover:scale-105 transition-transform">
            <Link
              href="/contacts/"
              className="v2-btn-primary text-[13px] px-8 py-3.5 rounded-full tracking-[0.12em] uppercase font-bold"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="hover:scale-105 transition-transform">
            <Link
              href="/services/"
              className="v2-btn-primary text-[13px] px-8 py-3.5 rounded-full tracking-[0.12em] uppercase font-bold"
            >
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
