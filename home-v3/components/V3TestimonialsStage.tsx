"use client";

import { Star, CheckCircle } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Texas Technical Services executed the dual 16-inch gas ultrasonic metering packages for our export pipeline with remarkable precision. The FAT in Ahmadi was seamless, and the skid achieved fiscal verification on the first calibration pass without requiring loop re-tuning.",
    role: "Senior Instrumentation Specialist",
    company: "Kuwait Upstream Gathering Operations",
  },
  {
    quote:
      "Their mobile calibration units responded within 4 hours during a critical custody transfer dispute at our offshore terminal. Their ISO 17025 accredited proving report provided the exact metrological clarity needed to resolve billing variances instantly.",
    role: "Project Engineering Manager",
    company: "Major Regional EPC Contractor, Dubai",
  },
  {
    quote:
      "Upgrading our legacy SCADA architecture to SIL-3 with TTSC was completed without a single hour of pipeline interruption. Their engineering team in Ahmadi understands local oil & gas standards better than international consortiums.",
    role: "Chief Automation Engineer",
    company: "Petrochemical Refining Consortium",
  },
];

export default function V3TestimonialsStage() {
  return (
    <section className="relative w-full py-24 bg-surface-container-low overflow-hidden" id="testimonials-stage">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl flex flex-col gap-3">
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary-container font-semibold">
              Our Vision &amp; Field Proven Trust
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              What is our vision for industrial automation in the GCC?
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              Since 2008, Texas Technical Services has pioneered world-class industrial automation and flow measurement solutions for leading energy and process facilities across the Middle East.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-lowest px-5 py-3 rounded-2xl shadow-sm border border-secondary-fixed/40">
            <span className="font-title-md font-bold text-on-surface">99.98%</span>
            <span className="font-body-sm text-body-sm text-secondary">
              Fiscal Reliability Across 400+ Delivered Projects
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest/85 backdrop-blur-2xl rounded-3xl p-8 shadow-xl flex flex-col justify-between border border-white/80 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-primary-container">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-container text-primary-container" />
                  ))}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-surface-container flex items-center justify-between mt-4">
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg font-bold text-on-surface">
                    {item.role}
                  </span>
                  <span className="font-caption text-caption text-secondary">
                    {item.company}
                  </span>
                </div>
                <CheckCircle className="w-6 h-6 text-primary-container shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
