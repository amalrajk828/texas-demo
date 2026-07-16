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
    <section className="bg-[#F8F9FA] py-16 border-t border-b border-[#E8E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
            Calibration Excellence · Faure Herman
          </span>
          <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
            FH Lab Services
          </h2>
          <p className="text-[#555770] text-[14px] mt-2 max-w-2xl mx-auto">
            ISO 17025 Accredited Laboratory · Real Conditions Calibration ·
            Global Support
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-[#E8E8F0] bg-white p-5 text-center"
            >
              <p className="text-[#F5821F] text-2xl font-black leading-none">
                {s.num}
              </p>
              <p className="text-[#1A1A2E] text-[12px] mt-2 font-semibold tracking-wide uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <IconCardGrid items={PILLARS} cols={3} variant="light" className="mb-8" />

        <BadgeList items={ACCREDITATIONS} variant="light" />
      </div>
    </section>
  );
}
