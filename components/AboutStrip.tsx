"use client";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function AboutStrip() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 lg:py-20" style={{ background: "var(--color-brand-navy-mid)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">

          {/* Left — copy */}
          <div
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-px" style={{ background: "#0891B2" }} />
              <span
                className="text-[11px] font-semibold tracking-[3px] uppercase"
                style={{ color: "#0891B2" }}
              >
                About Texas Technical Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Established 2008. Built on precision.
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-6">
              Texas Technical Service Company is an ISO 9001, ISO 14001, ISO 45001, UASL &amp; Accurate certified company established
              in 2008. We are primarily focused on Flow measurement solutions, Inspection and
              testing, and industrial automation requirements for the oil and gas, power plants,
              manufacturing and commercial sectors.
            </p>
            <Link
              href="/about-us/"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — ISO badges */}
          <div
            className="flex flex-col sm:flex-row lg:flex-col gap-3"
          >
            <div
              className="rounded-xl px-8 py-5 text-center border"
              style={{
                background: "color-mix(in srgb, var(--color-brand-red) 10%, transparent)",
                borderColor: "color-mix(in srgb, var(--color-brand-red) 25%, transparent)",
              }}
            >
              <p className="text-[15px] font-bold" style={{ color: "var(--color-brand-red)" }}>ISO 9001</p>
              <p className="text-white/40 text-[12px] mt-1 font-medium">Certified</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-8 py-5 text-center">
              <p className="text-white text-[15px] font-bold">ISO 14001</p>
              <p className="text-white/40 text-[12px] mt-1 font-medium">Environmental</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-8 py-5 text-center">
              <p className="text-white text-[15px] font-bold">ISO 45001</p>
              <p className="text-white/40 text-[12px] mt-1 font-medium">Safety</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-8 py-5 text-center">
              <p className="text-white text-[15px] font-bold">UASL</p>
              <p className="text-white/40 text-[12px] mt-1 font-medium">Accredited</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-8 py-5 text-center">
              <p className="text-white text-[15px] font-bold">Accurate</p>
              <p className="text-white/40 text-[12px] mt-1 font-medium">Certified</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
