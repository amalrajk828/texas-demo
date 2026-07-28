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
    <section className="bg-white py-14 border-t border-[#E8E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3px] uppercase">
            Authorized Agent · KEM Küppers Germany
          </span>
          <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
            Precision Flow Measurement Technology
          </h2>
        </div>
        <IconCardGrid items={ITEMS} cols={3} variant="light" />
        <KeyApplications applications={APPLICATIONS} variant="light" />
      </div>
    </section>
  );
}
