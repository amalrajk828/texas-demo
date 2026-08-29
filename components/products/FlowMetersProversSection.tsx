import BigCard from "./BigCard";
import KeyApplications from "./KeyApplications";
import type { BigCardItem } from "./types";

const PROVERS: BigCardItem = {
  title: "",
  variant: "ghost",
  items: [
    {
      label: "High-Volume Bidirectional Sphere-Type Provers",
      desc: "Industry standard for large volume liquid metering verification.",
    },
    {
      label: "High-Volume Unidirectional Sphere-Type Provers",
      desc: "Continuous flow verification with zero flow interruption.",
    },
    {
      label: "Small-Volume Piston Meter Provers (MagnaProve)",
      desc: "Compact, high-precision piston technology for space-constrained sites.",
    },
    {
      label: "Compact Prover Systems",
      desc: "Portable or fixed solutions requiring minimal footprint.",
    },
    {
      label: "Mobile Prover Systems",
      desc: "Truck-mounted units for multi-site calibration flexibility.",
    },
  ],
};

const SERVICES: BigCardItem = {
  title: "",
  variant: "ghost",
  items: [
    "Meter Proving & Calibration Services",
    "Prover Accessories & Components (detector switches, spheres, seals, 4-way diverter valves)",
    "Prover Drive System Retrofit",
    "Automated Sampler Systems",
    "Calibration Certification Services",
  ],
};

const APPLICATIONS = [
  "Custody Transfer",
  "Fiscal Metering",
  "Pipeline Accuracy",
  "Refinery Proving",
  "Terminal Operations",
];

export default function FlowMetersProversSection() {
  return (
    <section className="bg-[#0B0D26] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
            Authorized Agent · Meter Engineers USA
          </span>
          <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
            Meter Proving &amp; Calibration Solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[#0891B2] text-[15px] font-bold tracking-wide uppercase mb-4">
              Proving Systems — High Accuracy Verification
            </h3>
            <BigCard item={PROVERS} />
          </div>
          <div>
            <h3 className="text-[#0891B2] text-[15px] font-bold tracking-wide uppercase mb-4">
              Services &amp; Equipment
            </h3>
            <BigCard item={SERVICES} />
            <KeyApplications applications={APPLICATIONS} variant="dark" className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
