"use client";

import { Beaker, Wind, Activity, Gauge, Droplet, Leaf, Waves } from "lucide-react";
import IconCardGrid from "./IconCardGrid";
import type { IconCardItem } from "./types";

const ITEMS: IconCardItem[] = [
  {
    Icon: Beaker,
    title: "Gas Chromatographs",
    body: "Precise separation and compositional analysis of complex gas mixtures.",
  },
  {
    Icon: Wind,
    title: "Gas Analyzers (CEMS)",
    body: "Continuous Emission Monitoring Systems for strict regulatory compliance.",
  },
  {
    Icon: Activity,
    title: "Online Process Analyzers",
    body: "Real-time chemical composition analysis for process optimization and control.",
  },
  {
    Icon: Gauge,
    title: "Laser Gas Analyzers",
    body: "High-precision TDLAS technology for fast and interference-free measurements.",
  },
  {
    Icon: Droplet,
    title: "Continuous Water Analyzers",
    body: "Monitoring water quality parameters for industrial efficiency and safety.",
  },
  {
    Icon: Leaf,
    title: "Environmental Monitoring",
    body: "Comprehensive solutions for ambient air, water, and soil quality assessment.",
  },
  {
    Icon: Waves,
    title: "Steam Quality Analyzers",
    body: "Critical measurement of dryness fraction for energy efficiency monitoring.",
  },
];

export default function AnalyzersTypesSection() {
  return (
    <section className="bg-[#0B0D26] relative overflow-hidden py-14 border-t border-b border-white/10">
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
            Our Solutions
          </span>
          <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
            Seven Analyzer Categories
          </h2>
        </div>
        <IconCardGrid items={ITEMS} cols={4} variant="dark" />
      </div>
    </section>
  );
}
