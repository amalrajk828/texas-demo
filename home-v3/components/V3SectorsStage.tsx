"use client";

import Link from "next/link";
import { ArrowRight, Flame, Factory, Zap, Droplets, CheckCircle } from "lucide-react";

export default function V3SectorsStage() {
  return (
    <section className="relative w-full py-24 bg-surface overflow-hidden" id="sectors-stage">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary-container font-semibold">
            Industries Served
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
            Engineered for Critical Environments
          </h2>
          <p className="font-body-md text-body-md text-secondary max-w-2xl">
            Deploying instrumentation packages tailored to severe operating conditions, corrosive H2S sour gas, offshore saline atmospheres, and extreme desert heat across the Middle East.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Large Tile 1: Oil & Gas (Col span 7) */}
          <Link
            href="/industries/oil-gas/"
            className="md:col-span-7 bg-surface-container-lowest/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between group overflow-hidden relative border border-secondary-fixed/50 hover:shadow-2xl transition-all duration-300 block"
          >
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold">
                  Upstream &amp; Gathering
                </span>
                <Flame className="w-6 h-6 text-primary-container" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary-container transition-colors">
                Oil &amp; Gas Gathering Centers &amp; Pipeline Networks
              </h3>
              <p className="font-body-md text-body-md text-secondary max-w-xl">
                High-pressure multiphase flow testing, wet gas custody transfer skids, and automated manifold routing for North and South Kuwait fields. Built to withstand up to 25% H2S sour conditions.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-surface-container-low p-4 rounded-xl">
                  <span className="font-caption text-caption text-secondary block">Pressure Class</span>
                  <span className="font-title-md font-bold text-on-surface">ANSI 2500#</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl">
                  <span className="font-caption text-caption text-secondary block">Accuracy Rating</span>
                  <span className="font-title-md font-bold text-on-surface">±0.15%</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl">
                  <span className="font-caption text-caption text-secondary block">Compliance</span>
                  <span className="font-title-md font-bold text-on-surface">NACE MR0175</span>
                </div>
              </div>
            </div>
            <div className="pt-8 relative z-10 flex items-center justify-between border-t border-surface-container-high mt-4">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                KOC Approved Vendor Matrix #1449
              </span>
              <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* Tile 2: Refining & Petrochemical (Col span 5) */}
          <Link
            href="/industries/refinery/"
            className="md:col-span-5 bg-surface-container-lowest/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between group overflow-hidden relative border border-secondary-fixed/50 hover:shadow-2xl transition-all duration-300 block"
          >
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold">
                  Refining &amp; Petrochemicals
                </span>
                <Factory className="w-6 h-6 text-primary-container" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary-container transition-colors">
                Clean Fuels &amp; Chemical Blending
              </h3>
              <p className="font-body-md text-body-md text-secondary">
                Inline injection skid systems, additive dosers, and high-purity aromatics Coriolis metering packages for Al-Zour and Mina Al-Ahmadi complexes.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 font-caption text-caption text-secondary">
                  <CheckCircle className="w-4 h-4 text-primary-container shrink-0" />
                  <span>Cryogenic LNG metering support</span>
                </div>
                <div className="flex items-center gap-2 font-caption text-caption text-secondary">
                  <CheckCircle className="w-4 h-4 text-primary-container shrink-0" />
                  <span>High-temperature aromatics flow loops</span>
                </div>
              </div>
            </div>
            <div className="pt-8 relative z-10 flex items-center justify-between border-t border-surface-container-high mt-4">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                KNPC Certified
              </span>
              <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* Tile 3: Power & Cogeneration (Col span 5) */}
          <Link
            href="/industries/power-plant/"
            className="md:col-span-5 bg-surface-container-lowest/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between group overflow-hidden relative border border-secondary-fixed/50 hover:shadow-2xl transition-all duration-300 block"
          >
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold">
                  Power Generation
                </span>
                <Zap className="w-6 h-6 text-primary-container" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary-container transition-colors">
                Fuel Gas Conditioning Skids
              </h3>
              <p className="font-body-md text-body-md text-secondary">
                Automated superheating, dual filtration coalescers, and emergency shutdown valve trains feeding combined cycle gas turbines with zero liquid carryover.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <div className="bg-surface-container-low px-4 py-2 rounded-lg font-caption text-caption font-semibold text-on-surface">
                  Filtration: 0.3 Micron Absolute
                </div>
              </div>
            </div>
            <div className="pt-8 relative z-10 flex items-center justify-between border-t border-surface-container-high mt-4">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                MEW Kuwait Standards
              </span>
              <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* Tile 4: Water Desalination & Cross-Country Pipelines (Col span 7) */}
          <Link
            href="/industries/water-treatment/"
            className="md:col-span-7 bg-surface-container-lowest/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between group overflow-hidden relative border border-secondary-fixed/50 hover:shadow-2xl transition-all duration-300 block"
          >
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold">
                  Bulk Water &amp; Infrastructure
                </span>
                <Droplets className="w-6 h-6 text-primary-container" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary-container transition-colors">
                Desalination Bulk Transmission &amp; Leak Detection
              </h3>
              <p className="font-body-md text-body-md text-secondary max-w-xl">
                Non-intrusive clamp-on ultrasonic arrays, electromagnetic flowmeters up to 2400mm diameter, and SCADA-driven real-time pipeline volume balancing for municipal water transmission.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-surface-container-low p-3 rounded-xl">
                  <span className="font-caption text-caption text-secondary block">Max Line Size</span>
                  <span className="font-title-md font-bold text-on-surface">DN2400 (96&quot;)</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-xl">
                  <span className="font-caption text-caption text-secondary block">Leak Detect Latency</span>
                  <span className="font-title-md font-bold text-on-surface">&lt; 15 Seconds</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-xl">
                  <span className="font-caption text-caption text-secondary block">Sensor Protection</span>
                  <span className="font-title-md font-bold text-on-surface">IP68 Submersible</span>
                </div>
              </div>
            </div>
            <div className="pt-8 relative z-10 flex items-center justify-between border-t border-surface-container-high mt-4">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                GCC Municipal Frameworks
              </span>
              <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
