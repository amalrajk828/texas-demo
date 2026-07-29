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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3px] uppercase">
            End-to-End Solutions
          </span>
          <h2 className="mt-3 text-[#1A1A2E] text-2xl sm:text-3xl font-bold">
            Turnkey Control Room Services
          </h2>
          <p className="text-[#555770] text-[14px] mt-3 max-w-2xl mx-auto">
            Design, build, and maintain your mission-critical control room — from concept to commissioning and beyond.
          </p>
        </div>

        <BigCardGrid items={[TURNKEY, STUDIES, LIFECYCLE]} cols={3} />
      </div>
    </section>
  );
}
