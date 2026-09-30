"use client";

import Link from "next/link";
import Image from "next/image";
import { Building2, ShieldCheck, ArrowRight } from "lucide-react";

const CERTS = [
  { label: "ISO 9001:2015", sub: "Quality Management", badge: "/about/cert-iso9001.png" },
  { label: "ISO 14001:2015", sub: "Environmental Management", badge: "/about/cert-iso14001.png" },
  { label: "ISO 45001:2018", sub: "Occupational Health & Safety", badge: "/about/cert-iso45001.png" },
  { label: "UASL Accredited", sub: "Independent Verification", badge: "/about/cert-uasl.png" },
  { label: "Accurate Certified", sub: "Calibration Verification", badge: "/about/cert-accurate.png" },
];

export default function V3ProfileStage() {
  return (
    <section className="relative w-full py-24 bg-surface overflow-hidden" id="profile-stage">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Corporate Narrative & Credentials */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary-container w-fit border border-secondary-fixed/50">
              <Building2 className="w-4 h-4 text-primary-container" />
              <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                About Texas Technical Services
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Why was Texas Technical Services established in 2008?
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              Texas Technical Service Company is an ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, UASL &amp; Accurate certified company established in 2008. Primarily focused on flow measurement, inspection &amp; testing, and industrial automation for oil &amp; gas, power plants, manufacturing, and commercial sectors across Kuwait and the UAE.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 border border-secondary-fixed/40">
                <span className="font-title-md font-bold text-on-surface">18+ Years</span>
                <span className="font-label-md text-label-md text-secondary font-medium">Industry Excellence</span>
                <p className="font-caption text-caption text-text-muted">Pioneering precision engineering across Kuwait &amp; Dubai since 2008.</p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 border border-secondary-fixed/40">
                <span className="font-title-md font-bold text-on-surface">400+ Projects</span>
                <span className="font-label-md text-label-md text-secondary font-medium">Successfully Delivered</span>
                <p className="font-caption text-caption text-text-muted">Across oil &amp; gas, refinery, power, and commercial infrastructure.</p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 border border-secondary-fixed/40">
                <span className="font-title-md font-bold text-on-surface">100% Certified</span>
                <span className="font-label-md text-label-md text-secondary font-medium">Specialist Engineers</span>
                <p className="font-caption text-caption text-text-muted">In-depth knowledge of API, AGA, and custody metering standards.</p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 border border-secondary-fixed/40">
                <span className="font-title-md font-bold text-on-surface">5 Accreditations</span>
                <span className="font-label-md text-label-md text-secondary font-medium">Global Standards</span>
                <p className="font-caption text-caption text-text-muted">ISO 9001, ISO 14001, ISO 45001, UASL, and Accurate calibration certified.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-colors shadow-sm border border-secondary-fixed/50"
                href="/about-us/"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-primary-container" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-white font-label-lg text-label-lg hover:bg-accent-hover transition-colors shadow-sm"
                href="/certifications/"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>View Certifications</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Interactive Tilt & Fanned Photography Collage from V2 */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-8">
            <div className="relative w-full max-w-[480px] h-[520px]">
              {/* Photo 1: Back fanned card (Oil & Gas facility) */}
              <div className="absolute top-0 right-4 w-72 h-80 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-0 rotate-6 hover:scale-105 hover:z-30 border border-white/50 bg-white">
                <Image
                  src="/our-team/Oil-Gas.jpg"
                  alt="Oil & Gas Refinery Facility"
                  fill
                  className="object-cover"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-footer-dark/20" />
                <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-md text-caption font-semibold text-on-surface shadow-sm">
                  Oil &amp; Gas Refinery
                </div>
              </div>

              {/* Photo 2: Mid fanned card (Technician inspection) */}
              <div className="absolute bottom-4 left-2 w-72 h-84 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-0 -rotate-3 hover:scale-105 hover:z-30 border border-white/50 bg-white">
                <Image
                  src="/our-team/whatwedo.jpg"
                  alt="Plant technician conducting inspection"
                  fill
                  className="object-cover"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-footer-dark/20" />
                <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-md text-caption font-semibold text-on-surface shadow-sm">
                  Field Inspection &amp; Testing
                </div>
              </div>

              {/* Photo 3: Foreground Main card (Our Team with Est. 2008 badge) */}
              <div className="absolute top-14 left-8 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.03] z-20 border border-white/80 bg-white">
                <Image
                  src="/our-team/our_team.webp"
                  alt="Specialist engineering team"
                  fill
                  className="object-cover object-top"
                  sizes="320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-footer-dark/85 via-transparent to-transparent" />

                {/* Overlapping Est. 2008 Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md bg-white/95 border border-primary-container">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                  <span className="text-[#16202b] text-[11px] font-bold tracking-[1.5px] uppercase font-mono leading-none">
                    Est. 2008
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-surface-bright flex flex-col gap-1">
                  <span className="font-label-md text-label-md font-semibold text-primary-fixed-dim">
                    Expert Team
                  </span>
                  <span className="font-body-sm text-body-sm font-medium">
                    Specialists behind every flow measurement &amp; automation project
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official ISO & Accreditation Badges Strip from V2 */}
        <div className="mt-16 pt-10 border-t border-secondary-fixed/50 flex flex-col items-center gap-6">
          <p className="text-[12px] font-mono font-bold tracking-[2.5px] uppercase text-text-muted text-center">
            ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified · Est. 2008 · Kuwait &amp; Dubai
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-3xl w-full">
            {CERTS.map((cert) => (
              <Link
                key={cert.label}
                href="/certifications/"
                className="bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-secondary-fixed/40 flex flex-col items-center text-center hover:shadow-md hover:border-primary-container/30 transition-all group"
              >
                <div className="relative w-12 h-12 mb-2">
                  <Image
                    src={cert.badge}
                    alt={cert.label}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform"
                    sizes="48px"
                  />
                </div>
                <span className="font-label-md text-[11px] font-bold text-on-surface">
                  {cert.label}
                </span>
                <span className="font-caption text-[10px] text-text-muted mt-0.5">
                  {cert.sub}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
