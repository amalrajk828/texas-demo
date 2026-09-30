"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Download, Scale, Brain } from "lucide-react";

const OEMS = [
  { name: "MITSUBISHI ELECTRIC", href: "/solutions/mitsubishi-electric/" },
  { name: "ENDRESS+HAUSER", href: "/partners/" },
  { name: "SICK AG", href: "/partners/" },
  { name: "EMERSON", href: "/partners/" },
  { name: "KROHNE", href: "/partners/" },
  { name: "ABB", href: "/partners/" },
  { name: "SCHNEIDER ELECTRIC", href: "/partners/" },
];

export default function V3SolutionsStage() {
  return (
    <section className="relative w-full py-24 bg-surface-container-low overflow-hidden" id="solutions-stage">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl flex flex-col gap-3">
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary-container font-semibold">
              Proprietary Solutions &amp; OEM Alliances
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Turnkey Software Platforms &amp; Global Partners
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              Strategic OEM collaborations and proprietary software platforms engineered to eliminate custody transfer measurement disputes and optimize uptime across energy facilities.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-white font-label-lg text-label-lg hover:bg-accent-hover transition-colors shadow-md"
              href="/contacts/"
            >
              <Download className="w-4 h-4" />
              <span>Request Technical Catalog</span>
            </Link>
          </div>
        </div>

        {/* Fanned Dual Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
          {/* Showcase Card 1: Texaflow (Fanned slightly left) */}
          <div className="group relative transition-all duration-500 lg:-rotate-1 lg:hover:rotate-0 lg:hover:-translate-y-3">
            <div className="h-full bg-surface-container-lowest/85 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between overflow-hidden border border-white/80">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption uppercase tracking-wider text-primary-container font-bold flex items-center gap-1.5">
                    <Scale className="w-4 h-4" />
                    <span>TEXAFLOW</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-md text-label-md text-on-surface font-semibold">
                    Custody Metering SCADA
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Custody Metering Integrated Control System
                </h3>
                <p className="font-body-md text-body-md text-secondary">
                  Proprietary fiscal metering &amp; SCADA solution for oil &amp; gas terminals, refineries, pipeline stations, and loading facilities — automated meter proving, real-time flow computer integration, and regulatory compliance.
                </p>

                {/* Specs checklist */}
                <div className="space-y-3 p-4 rounded-2xl bg-surface-container-low font-body-sm text-body-sm text-on-surface">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">Meter Proving:</span>
                    <span className="font-semibold">Compact prover, pipe loop &amp; master meter</span>
                  </div>
                  <div className="w-full h-px bg-surface-container-high" />
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">Regulatory Standards:</span>
                    <span className="font-semibold">API MPMS, AGA-3, AGA-7, AGA-9, OIML R117</span>
                  </div>
                  <div className="w-full h-px bg-surface-container-high" />
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">Integration:</span>
                    <span className="font-semibold">FloBoss, Omni, Emerson &amp; Honeywell computers</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-surface-container-high mt-4">
                <span className="font-caption text-caption text-text-muted">Proprietary Technology</span>
                <Link
                  className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary-container font-semibold group-hover:text-accent-hover transition-colors"
                  href="/solutions/texaflow/"
                >
                  <span>Explore Texaflow</span>
                  <ExternalLink className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Showcase Card 2: Space AI (Fanned slightly right) */}
          <div className="group relative transition-all duration-500 lg:rotate-1 lg:hover:rotate-0 lg:hover:-translate-y-3">
            <div className="h-full bg-surface-container-lowest/85 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between overflow-hidden border border-white/80">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption uppercase tracking-wider text-primary-container font-bold flex items-center gap-1.5">
                    <Brain className="w-4 h-4" />
                    <span>SPACE AI</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-md text-label-md text-on-surface font-semibold">
                    Industrial AI Platform
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Industrial AI &amp; Machine Learning
                </h3>
                <p className="font-body-md text-body-md text-secondary">
                  Next-generation AI for industry — predictive maintenance, process optimization with virtual metrology &amp; digital twins, and smart monitoring with ESG &amp; carbon tracking. Reduce unplanned downtime by up to 50%.
                </p>

                {/* Specs checklist */}
                <div className="space-y-3 p-4 rounded-2xl bg-surface-container-low font-body-sm text-body-sm text-on-surface">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">Predictive Uptime:</span>
                    <span className="font-semibold">Reduces unplanned downtime by up to 50%</span>
                  </div>
                  <div className="w-full h-px bg-surface-container-high" />
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">Virtual Metrology:</span>
                    <span className="font-semibold">Sensor drift compensation &amp; digital twins</span>
                  </div>
                  <div className="w-full h-px bg-surface-container-high" />
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">ESG Monitoring:</span>
                    <span className="font-semibold">Continuous emissions &amp; carbon tracking</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-surface-container-high mt-4">
                <span className="font-caption text-caption text-text-muted">Next-Gen Industrial Intelligence</span>
                <Link
                  className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary-container font-semibold group-hover:text-accent-hover transition-colors"
                  href="/solutions/space-ai/"
                >
                  <span>Explore Space AI</span>
                  <ExternalLink className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* OEM Partner Technology Ribbon */}
        <div className="flex flex-col gap-6 pt-8">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">
              Tier-1 OEM Technology Collaborators
            </span>
            <Link
              href="/partners/"
              className="font-caption text-caption text-primary-container hover:text-accent-hover font-semibold transition-colors"
            >
              View All Partners →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {OEMS.map((oem) => (
              <Link
                key={oem.name}
                href={oem.href}
                className="bg-surface-container-lowest/80 backdrop-blur-md p-4 rounded-xl shadow-sm flex items-center justify-center text-center border border-white/60 hover:shadow-md hover:border-primary-container/30 transition-all block"
              >
                <span className="font-headline-sm text-label-md font-bold text-on-surface tracking-wider">
                  {oem.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
