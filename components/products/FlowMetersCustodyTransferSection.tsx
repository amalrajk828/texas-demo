"use client";

import { Scale, Beaker, Activity, Cog } from "lucide-react";
import IconCardGrid from "./IconCardGrid";
import type { IconCardItem } from "./types";

const ITEMS: IconCardItem[] = [
  {
    Icon: Scale,
    title: "Custody Metering Skid",
    body: "Advanced flow computing and integrated metering systems for accurate fiscal measurement.",
  },
  {
    Icon: Beaker,
    title: "Provers & Accessories",
    body: "Large capacity SVP, bidirectional and unidirectional provers for pipeline applications.",
  },
  {
    Icon: Activity,
    title: "Integrated Metering Control System",
    body: "Comprehensive metering control systems proving and calibration solutions ensuring measurement integrity.",
  },
  {
    Icon: Beaker,
    title: "Automatic Sampling System",
    body: "Representative sampling systems for accurate product quality determination.",
  },
  {
    Icon: Cog,
    title: "Flow Computer",
    body: "Real-time flow computer integration with OMNI 4000/7000 and SICK Flow-X for batch tracking and reporting.",
  },
  {
    Icon: Scale,
    title: "Uncertainty Calculations & Audit",
    body: "We offer audits and inspections of your existing installations — on-site expert verification ensuring fiscal accuracy.",
  },
];

export default function FlowMetersCustodyTransferSection() {
  return (
    <section className="bg-[#0B0D26] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
            Precision Metering
          </span>
          <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
            Custody Transfer Metering
          </h2>
          <p className="text-white/70 text-[15px] mt-3 max-w-2xl mx-auto">
            Fiscal metering, calibration &amp; verification systems — built
            to API MPMS and OIML standards for oil &amp; gas, refinery, and
            pipeline applications.
          </p>
        </div>

        <IconCardGrid items={ITEMS} cols={3} variant="dark" />

        <div className="mt-10 text-center">
          <p className="text-white/40 text-[11px] font-semibold tracking-[3px] uppercase">
            ── Approved Vendors ──
          </p>
        </div>
      </div>
    </section>
  );
}
