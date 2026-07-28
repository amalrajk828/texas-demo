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
    <section className="bg-[#F8F9FA] py-14 border-t border-b border-[#E8E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3px] uppercase">
            Ergonomic Features
          </span>
          <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
            Built for 24/7 Mission-Critical Operators
          </h2>
          <p className="text-[#555770] text-[14px] mt-3 max-w-2xl mx-auto">
            Operator comfort and ergonomic excellence are at the core of every Pyrotech console design — reducing fatigue, sharpening alertness, and ensuring sustainable performance during long shifts.
          </p>
        </div>
        <IconCardGrid items={ITEMS} cols={5} variant="light" />
      </div>
    </section>
  );
}
