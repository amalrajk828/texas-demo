"use client";
import Image from "next/image";
import {
  ClipboardList,
  PenTool,
  Layers,
  Gauge,
  BarChart3,
  Cpu,
  Database,
} from "lucide-react";

import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";

/* ─── Fade-up helper ─────────────────────────────────────────── */

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "Comprehensive System Assessment",
    body: "We begin by conducting a thorough assessment of your existing Metering Control System. Our experts identify areas that require improvement and evaluate the compatibility of your current infrastructure with modern technologies.",
  },
  {
    Icon: PenTool,
    title: "Tailored Upgradation Plans",
    body: "Based on our assessment, we create a customized upgradation plan. This plan outlines the specific enhancements required to align your system with industry standards and your operational goals.",
  },
  {
    Icon: Layers,
    title: "State-of-the-Art Technology Integration",
    body: "We seamlessly integrate the latest technologies — including Flow Computers, SCADA systems, PLCs, servers, workstations, and HMI interfaces — into your existing system. This ensures you benefit from advanced features, real-time data analysis, and enhanced control.",
  },
  {
    Icon: Gauge,
    title: "Flow Metering Expertise",
    body: "Our team specializes in optimizing Flow Metering Systems. We select and implement the most suitable flow metering technology, ensuring accurate and reliable data measurement throughout your custody transfer operations.",
  },
  {
    Icon: BarChart3,
    title: "Efficient SCADA Integration",
    body: "Supervisory Control and Data Acquisition (SCADA) systems are essential for monitoring and control. We integrate SCADA solutions that provide real-time visibility and data analysis, empowering you to make informed decisions.",
  },
  {
    Icon: Cpu,
    title: "PLC Enhancements",
    body: "Programmable Logic Controllers (PLCs) play a vital role in automation. We upgrade your PLC systems to improve efficiency, reduce downtime, and enhance overall system performance.",
  },
  {
    Icon: Database,
    title: "Seamless Data Management",
    body: "We configure servers, workstations, and HMI interfaces to optimize data management, security, and accessibility. Our solutions ensure a smooth workflow and user-friendly experience across your entire operation.",
  },
];

export default function UpgradeServices() {
  return (
    <section className="relative bg-white py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── Section header ── */}
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#1f2937] leading-[1.15] max-w-2xl">
            Our Upgrade Process
          </h2>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {SERVICES.map((item, i) => (
            <div key={item.title || i} className="fade-up">
              <NeumorphicDeliverCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
