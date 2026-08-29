"use client";

import { Hammer, Award, Wrench, Shield, RefreshCw, Move } from "lucide-react";
import BigCardGrid from "./BigCardGrid";
import type { BigCardItem } from "./types";

const TURNKEY: BigCardItem = {
  Icon: Hammer,
  title: "Turnkey Execution",
  subtitle: "Concept to Commissioning",
  variant: "bordered",
  items: [
    "Site Survey & Planning: Detailed room layout & workflow optimization",
    "Environmental Design: HVAC, acoustics, lighting & ESD flooring",
    "Console Design: 3D visualization, VR walkthroughs & mock-ups",
    "Technical Integration: Electrical, network, AV, KVM & Video Walls",
    "Installation: Factory acceptance (FAT) & site commissioning (SAT)",
  ],
};

const STUDIES: BigCardItem = {
  Icon: Award,
  title: "Ergonomic Studies",
  subtitle: "Human Factors Engineering",
  variant: "bordered",
  items: [
    "ISO 11064 Compliance: Ergonomic design of control centers",
    "Sightline Analysis: Optimal viewing angles for video walls",
    "Reach Envelopes: Operator workspace efficiency zones",
    "Human Factors: Fatigue reduction & alertness engineering",
    "Design Exclusivity: Certified unique designs for every client",
  ],
};

const LIFECYCLE: BigCardItem = {
  Icon: Wrench,
  title: "Lifecycle Support",
  subtitle: "Ongoing Maintenance & Upgrades",
  variant: "bordered",
  items: [
    { Icon: Wrench, label: "Maintenance Support", desc: "Upon Request" },
    { Icon: Shield, label: "Warranty Support", desc: "10 Years" },
    { Icon: RefreshCw, label: "Technology Refresh", desc: "Hardware & furniture upgrades" },
    { Icon: Move, label: "MAC Services", desc: "Moves, Adds & Changes support" },
    { Icon: Hammer, label: "Expansion Studies", desc: "Scalability planning for future growth" },
  ],
};

export default function ControlRoomServicesSection() {
  return (
    <section className="bg-[#0B0D26] relative overflow-hidden py-16">
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
            End-to-End Solutions
          </span>
          <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
            Turnkey Control Room Services
          </h2>
          <p className="text-white/70 text-[15px] mt-3 max-w-2xl mx-auto">
            Design, build, and maintain your mission-critical control room — from concept to commissioning and beyond.
          </p>
        </div>

        <BigCardGrid items={[TURNKEY, STUDIES, LIFECYCLE]} cols={3} />
      </div>
    </section>
  );
}
