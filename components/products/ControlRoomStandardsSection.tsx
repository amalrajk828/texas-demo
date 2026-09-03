import type { BadgeItem } from "./types";

const STANDARDS: BadgeItem[] = [
  { name: "ISO 11064", desc: "Ergonomics" },
  { name: "GREENGUARD", desc: "Certified" },
  { name: "GREENGUARD", desc: "Gold" },
  { name: "ISO 9001", desc: "Quality" },
  { name: "BIFMA / SEFA / ASTM", desc: "Compliance" },
];

export default function ControlRoomStandardsSection() {
  return (
    <section className="bg-[#1A1A2E] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase mb-2">
              International Quality Standards
            </p>
            <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
              Globally Certified — Built to the World&apos;s Strictest Standards
            </h3>
            <p className="text-white/70 text-[14px] mt-2">
              Compliance with BIFMA, SEFA, and ASTM standards
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {STANDARDS.map((s) => (
              <div
                key={s.name + s.desc}
                className="rounded-lg border border-white/[0.12] bg-white/[0.06] px-4 py-3 text-center min-w-[100px]"
              >
                <p className="text-white text-[12px] font-bold leading-tight">
                  {s.name}
                </p>
                <p className="text-white/50 text-[10px] mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
