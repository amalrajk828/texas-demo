import IconCardGrid from "./IconCardGrid";
import BadgeList from "./BadgeList";
import type { IconCardItem, BadgeItem, ProductPageStat } from "./types";

const STATS: ProductPageStat[] = [
  { num: "100+", label: "Years of Flow Experience" },
  { num: "0.1%", label: "Calibration Accuracy" },
  { num: "ISO 17025", label: "COFRAC / ILAC Accredited" },
];

const PILLARS: IconCardItem[] = [
  {
    title: "Accredited Metrology",
    body: "Real Fluid Testing, Master Meter certification & traceability, ISO/IEC 17025 accredited benches, wide range of viscosity/temperature/pipe dimensions reproduced.",
  },
  {
    title: "Engineering & Lifecycle",
    body: "Diagnostics & uncertainty analysis, viscosity & temperature profiling, overhaul & refurbishment, firmware updates & spare parts supply.",
  },
  {
    title: "Compliance & Consulting",
    body: "Custody transfer legal metrology consulting, meter sizing & application studies, prover loops calibration, and full digital certificates & test reports.",
  },
];

const ACCREDITATIONS: BadgeItem[] = [
  { name: "ISO/IEC 17025", desc: "COFRAC / ILAC Accredited" },
  { name: "ISO 9001:2015", desc: "Quality Management" },
  { name: "API Standards", desc: "MPMS Compliance" },
  { name: "MID / OIML", desc: "Legal Metrology" },
];

export default function FlowMetersFhLabSection() {
  return (
    <section className="bg-[#0B0D26] relative overflow-hidden py-16 border-t border-b border-white/10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.05) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.05) 40px)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.08) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
            Calibration Excellence · Faure Herman
          </span>
          <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
            FH Lab Services
          </h2>
          <p className="text-white/70 text-[15px] mt-2 max-w-2xl mx-auto">
            ISO 17025 Accredited Laboratory · Real Conditions Calibration ·
            Global Support
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/[0.12] bg-white/[0.06] p-5 text-center"
            >
              <p className="text-[#e7212b] text-2xl font-black leading-none">
                {s.num}
              </p>
              <p className="text-white text-[13px] mt-2 font-semibold tracking-wide uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <IconCardGrid items={PILLARS} cols={3} variant="dark" className="mb-8" />

        <BadgeList items={ACCREDITATIONS} variant="dark" />
      </div>
    </section>
  );
}
