"use client";

import { Cog, Waves, Flame, Activity, Droplet, Thermometer, Wind } from "lucide-react";
import IconCardGrid from "./IconCardGrid";
import type { IconCardItem } from "./types";

const ITEMS: IconCardItem[] = [
  {
    Icon: Cog,
    title: "Turbine Flow Meters",
    body: "Volumetric flow measurement for clean liquids.",
  },
  {
    Icon: Cog,
    title: "PD (Positive Displacement)",
    body: "High precision volumetric measurement for viscous fluids.",
  },
  {
    Icon: Waves,
    title: "Ultrasonic Flow Meter",
    body: "Non-intrusive inline or clamp-on measurement technology.",
  },
  {
    Icon: Flame,
    title: "Flare Gas Meters",
    body: "Precise gas measurement for flare stacks & compliance.",
  },
  {
    Icon: Activity,
    title: "Coriolis Mass Flowmeters",
    body: "Direct mass flow density measurement with high accuracy.",
  },
  {
    Icon: Droplet,
    title: "Electromagnetic Flowmeters",
    body: "Reliable flow measurement for conductive liquids.",
  },
  {
    Icon: Thermometer,
    title: "V-Cone & Flow Elements",
    body: "Venturi, Annubar, Orifice & V-Cone for DP measurement.",
  },
  {
    Icon: Wind,
    title: "Thermal Mass Flowmeters",
    body: "Direct gas mass flow measurement without compensation.",
  },
];

const AUTHORIZED_SOLUTIONS = [
  "Faure Herman",
  "Rockwin",
  "Tek-Trol",
  "Endress+Hauser",
  "KEM Küppers",
];

export default function FlowMetersTechnologiesSection() {
  return (
    <section className="bg-[#F8F9FA] py-16 lg:py-20 border-t border-b border-[#E8E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
            Our Solutions
          </span>
          <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
            Flow Measurement Technologies
          </h2>
          <p className="text-[#555770] text-[14px] mt-3 max-w-2xl mx-auto">
            Comprehensive flow technologies &amp; applications — eight
            measurement principles covering every custody transfer and
            process application.
          </p>
        </div>

        <IconCardGrid items={ITEMS} cols={4} variant="light" />

        <div className="mt-14">
          <div className="text-center mb-6">
            <p className="text-[#555770] text-[10px] font-semibold tracking-[3px] uppercase">
              ── Authorized Solutions ──
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {AUTHORIZED_SOLUTIONS.map((s) => (
              <span
                key={s}
                className="rounded-lg bg-white border border-[#E8E8F0] px-5 py-2.5 text-[#1A1A2E] text-[13px] font-semibold tracking-wide"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
