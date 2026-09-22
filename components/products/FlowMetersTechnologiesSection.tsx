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
    <section className="bg-[#0B0D26] relative overflow-hidden py-16 lg:py-20 border-t border-b border-white/10">
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
        <div className="text-center mb-12">
          <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
            Our Solutions
          </span>
          <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
            Flow Measurement Technologies
          </h2>
          <p className="text-white/70 text-[15px] mt-3 max-w-2xl mx-auto">
            Comprehensive flow technologies &amp; applications — eight
            measurement principles covering every custody transfer and
            process application.
          </p>
        </div>

        <IconCardGrid items={ITEMS} cols={4} variant="dark" />

        <div className="mt-14">
          <div className="text-center mb-6">
            <p className="text-white/50 text-[11px] font-semibold tracking-[3px] uppercase">
              ── Authorized Solutions ──
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {AUTHORIZED_SOLUTIONS.map((s) => (
              <span
                key={s}
                className="rounded-lg bg-white/[0.06] border border-white/10 px-5 py-2.5 text-white text-[14px] font-semibold tracking-wide"
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
