"use client";

import { Maximize2, Cable, Monitor, Wind, Layers } from "lucide-react";
import IconCardGrid from "./IconCardGrid";
import type { IconCardItem } from "./types";

const ITEMS: IconCardItem[] = [
  {
    Icon: Maximize2,
    title: "Motorized Height Adjustment",
    body: "Sit-stand capability ensuring operator wellness & alertness",
  },
  {
    Icon: Cable,
    title: "Advanced Cable Management",
    body: "Integrated concealed channels for clean, safe workspaces",
  },
  {
    Icon: Monitor,
    title: "Multi-Monitor Arrays",
    body: "Flexible heavy-duty mounting for expansive visualization",
  },
  {
    Icon: Wind,
    title: "Environmental Control",
    body: "Personalized ventilation and task lighting integration",
  },
  {
    Icon: Layers,
    title: "Modular Architecture",
    body: "Scalable configurations adaptable to any room layout",
  },
];

export default function ControlRoomErgonomicSection() {
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
            Ergonomic Features
          </span>
          <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
            Built for 24/7 Mission-Critical Operators
          </h2>
          <p className="text-white/70 text-[15px] mt-3 max-w-2xl mx-auto">
            Operator comfort and ergonomic excellence are at the core of every Pyrotech console design — reducing fatigue, sharpening alertness, and ensuring sustainable performance during long shifts.
          </p>
        </div>
        <IconCardGrid items={ITEMS} cols={5} variant="dark" />
      </div>
    </section>
  );
}
