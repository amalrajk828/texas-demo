import IconCardGrid from "./IconCardGrid";
import KeyApplications from "./KeyApplications";
import type { IconCardItem } from "./types";

const ITEMS: IconCardItem[] = [
  {
    title: "TRICOR Coriolis",
    body: "Mass Flow Meters offering exceptional accuracy for critical process applications.",
  },
  {
    title: "Helical Flow Meters",
    body: "SRZ Series designed for high-viscosity fluids with low pressure drop.",
  },
  {
    title: "Gear Flow Meters",
    body: "ZHM Series offering high precision positive displacement measurement.",
  },
  {
    title: "Turbine Flow Meters",
    body: "HM F Series providing reliable flow measurement for low viscosity liquids.",
  },
  {
    title: "Variable Area",
    body: "Robust flow meters offering direct visual indication without power requirement.",
  },
  {
    title: "Chemical Injection",
    body: "VFF Meters specifically engineered for precise low-flow chemical injection.",
  },
];

const APPLICATIONS = ["Custody Transfer", "Process Control", "Chemical Injection"];

export default function FlowMetersKemSection() {
  return (
    <section className="bg-[#0B0D26] relative overflow-hidden py-14 border-t border-white/10">
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
            Authorized Agent · KEM Küppers Germany
          </span>
          <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
            Precision Flow Measurement Technology
          </h2>
        </div>
        <IconCardGrid items={ITEMS} cols={3} variant="dark" />
        <KeyApplications applications={APPLICATIONS} variant="dark" />
      </div>
    </section>
  );
}
