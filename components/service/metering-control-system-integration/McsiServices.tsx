"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Gauge,
  Network,
  BarChart3,
  Cpu,
  Server,
  Link2,
} from "lucide-react";

import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";

/* ─── Fade-up helper ─────────────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const SERVICES = [
  {
    Icon: Link2,
    title: "Custody Transfer Flow Metering Control System Development",
    body: "Our team of expert engineers and developers excels in crafting bespoke Custody Transfer Flow Metering Control Systems. These systems are meticulously designed to meet the stringent requirements of custody transfer applications, ensuring absolute accuracy in measurement and compliance with industry standards.",
  },
  {
    Icon: Network,
    title: "Integration Mastery",
    body: "Seamless integration is the cornerstone of efficient custody transfer operations. We bring together various components — including Flow Metering Systems, SCADA, PLCs, servers, workstations, and HMI interfaces — to create a unified system. Our integration solutions streamline data flow, increase accountability, and enhance operational transparency.",
  },
  {
    Icon: Gauge,
    title: "Flow Metering Expertise",
    body: "Precise flow measurement is paramount in custody transfer. We specialize in configuring and optimizing Flow Metering Systems, ensuring they deliver real-time, accurate data. Our team selects and implements the most suitable flow metering technology for your specific application.",
  },
  {
    Icon: BarChart3,
    title: "SCADA Solutions",
    body: "Supervisory Control and Data Acquisition (SCADA) systems provide vital insights into custody transfer operations. We design, deploy, and maintain SCADA systems that offer real-time visibility, data analysis, and remote control capabilities — enabling you to make informed decisions swiftly and confidently.",
  },
  {
    Icon: Cpu,
    title: "PLC Proficiency",
    body: "Our Programmable Logic Controller (PLC) solutions automate custody transfer processes, ensuring accuracy and reliability while reducing human error. We optimize PLCs to minimize downtime and maximize productivity across your custody metering operations.",
  },
  {
    Icon: Server,
    title: "Server, Workstation & HMI Configuration",
    body: "A robust IT infrastructure with Cyber Security is essential for custody transfer operations. We configure servers, workstations, and HMI interfaces to manage data securely and efficiently — enhancing workflow optimization and providing a user-friendly operational experience.",
  },
];

export default function McsiServices() {
  return (
    <section className="relative bg-white py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── Section header ── */}
        <FadeUp delay={0} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#1f2937] leading-[1.15] max-w-2xl">
            What We Deliver
          </h2>
        </FadeUp>

        {/* ── Service cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {SERVICES.map((item, i) => (
            <FadeUp key={item.title} delay={0.04 + i * 0.03}>
              <NeumorphicDeliverCard item={item} index={i} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
