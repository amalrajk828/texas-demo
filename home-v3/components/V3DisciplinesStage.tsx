"use client";

import Link from "next/link";
import { Gauge, FlaskConical, Cpu, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function V3DisciplinesStage() {
  return (
    <section className="relative w-full py-24 bg-surface-container-low overflow-hidden" id="disciplines-stage">
      {/* Ambient glowing chromatic nodes */}
      <div className="absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-blob-red blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-blob-blue blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col gap-14 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl flex flex-col gap-3">
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary-container font-semibold">
              What We Do
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Engineered Excellence in Custody Metering &amp; Automation
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              Extensive expertise in liquid and gas custody metering, Industrial Automation, and Inspection &amp; Testing. Our services cover metering control upgrades, maintenance, validation, and specialised consultancy.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface text-label-sm font-semibold shadow-sm border border-secondary-fixed/50">
            <ShieldCheck className="w-5 h-5 text-primary-container" />
            <span>Compliance: API MPMS • AGA • OIML R117 • ISO 9001</span>
          </div>
        </div>

        {/* Fanned Overlapping Glass Stack Layout */}
        <div className="relative py-8 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 relative items-stretch">
            {/* Card 1: Flow Measurement & Control (Fanned Left) */}
            <div className="group relative z-10 transition-all duration-500 lg:-rotate-2 lg:hover:rotate-0 lg:hover:scale-[1.04] lg:hover:z-30 lg:hover:-translate-y-4">
              <div className="h-full bg-surface-container-lowest/85 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between overflow-hidden border border-white/80">
                <div className="w-full h-1.5 bg-primary-container absolute top-0 left-0 right-0" />
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary-container">
                    <Gauge className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-caption text-caption text-primary-container font-semibold tracking-wider uppercase">
                      01 / Metering Systems
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Flow Measurement &amp; Control
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Comprehensive custody metering, flow computers, metering skids, and control system upgrades for liquid, gas, and water applications.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 font-caption text-caption text-on-surface">
                      <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                      <span>Liquid &amp; gas fiscal metering skids</span>
                    </div>
                    <div className="flex items-center gap-2 font-caption text-caption text-on-surface">
                      <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                      <span>Multipath ultrasonic &amp; Coriolis flowmeters</span>
                    </div>
                    <div className="flex items-center gap-2 font-caption text-caption text-on-surface">
                      <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                      <span>Dual redundant flow computers (FloBoss / Omni)</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <Link
                    className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary-container group-hover:text-accent-hover font-semibold transition-colors"
                    href="/service/flow-measurement-solutions/"
                  >
                    <span>Explore Metering Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Inspection & Testing (Center Anchor) */}
            <div className="group relative z-20 transition-all duration-500 lg:scale-[1.03] lg:hover:scale-[1.06] lg:hover:z-30 lg:hover:-translate-y-4">
              <div className="h-full bg-surface-container-lowest/95 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-2xl flex flex-col justify-between overflow-hidden border border-white/90">
                <div className="w-full h-1.5 bg-[#111c2c] absolute top-0 left-0 right-0" />
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface">
                    <FlaskConical className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-caption text-caption text-secondary font-semibold tracking-wider uppercase">
                      02 / Quality Verification
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Inspection &amp; Testing
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Specialised NDT, validation and mechanical testing of metering systems with full ISO-certified consultancy support and in-situ prover loops.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 font-caption text-caption text-on-surface">
                      <CheckCircle2 className="w-4 h-4 text-on-surface shrink-0" />
                      <span>Non-Destructive Testing (RT, UT, MT, PT, VT)</span>
                    </div>
                    <div className="flex items-center gap-2 font-caption text-caption text-on-surface">
                      <CheckCircle2 className="w-4 h-4 text-on-surface shrink-0" />
                      <span>Hydrostatic &amp; pneumatic pressure proof testing</span>
                    </div>
                    <div className="flex items-center gap-2 font-caption text-caption text-on-surface">
                      <CheckCircle2 className="w-4 h-4 text-on-surface shrink-0" />
                      <span>Dimensional laser metrology &amp; flange validation</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <Link
                    className="inline-flex items-center gap-2 font-label-lg text-label-lg text-on-surface group-hover:text-primary-container font-semibold transition-colors"
                    href="/service/inspection-testing/"
                  >
                    <span>View Inspection Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Industrial Automation (Fanned Right) */}
            <div className="group relative z-10 transition-all duration-500 lg:rotate-2 lg:hover:rotate-0 lg:hover:scale-[1.04] lg:hover:z-30 lg:hover:-translate-y-4">
              <div className="h-full bg-surface-container-lowest/85 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col justify-between overflow-hidden border border-white/80">
                <div className="w-full h-1.5 bg-primary-container absolute top-0 left-0 right-0" />
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary-container">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-caption text-caption text-primary-container font-semibold tracking-wider uppercase">
                      03 / Digital Automation
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Industrial Automation
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      End-to-end plant automation — PLC, SCADA, HMI, VFDs and CEMS for oil &amp; gas, power, and manufacturing sectors with full lifecycle integration.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 font-caption text-caption text-on-surface">
                      <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                      <span>PLC &amp; SCADA integration (Siemens, Rockwell, DeltaV)</span>
                    </div>
                    <div className="flex items-center gap-2 font-caption text-caption text-on-surface">
                      <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                      <span>Emergency Shutdown (ESD) &amp; F&amp;G SIL-3 systems</span>
                    </div>
                    <div className="flex items-center gap-2 font-caption text-caption text-on-surface">
                      <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                      <span>Continuous Emissions Monitoring Systems (CEMS)</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <Link
                    className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary-container group-hover:text-accent-hover font-semibold transition-colors"
                    href="/service/industrial-automation/"
                  >
                    <span>View Automation Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
