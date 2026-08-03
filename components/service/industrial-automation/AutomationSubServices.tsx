"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import NeumorphicServiceCard from "@/components/service/common/NeumorphicServiceCard";

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

const AUTOMATION_SERVICES = [
  {
    title: "Process Plant Automation",
    category: "Industrial Automation",
    description:
      "Plant Automation Excellence: At TTS, we specialize in delivering top-tier Plant Automation solutions that streamline your industrial processes. Our cutting-edge automation systems are designed to boost efficiency, reduce operational costs, and enhance overall productivity — ensuring your plant operates at peak performance levels with full visibility and control.",
    href: "/service/plant-automation/",
  },
  {
    title: "Control System Integration and Upgradation",
    category: "Industrial Automation",
    description:
      "At TTS, we are your trusted partner for PLC (Programmable Logic Controller) and SCADA (Supervisory Control and Data Acquisition)-based automation and system integration. Our expertise in this field empowers industries to achieve higher levels of efficiency, reliability, and control — from legacy system migrations to full greenfield automation builds.",
    href: "/service/system-software-upgrade/",
  },
  {
    title: "Commissioning and Start-up Support",
    category: "Industrial Automation",
    description:
      "Commissioning for Industrial Process Automation involves the meticulous process of validating and fine-tuning automation systems to ensure they operate in strict accordance with predefined specifications. Our experienced team guides your project from pre-commissioning through hot commissioning, start-up, and post-commissioning handover — minimizing downtime and risk.",
    href: "/service/commissioning-and-start-up-support/",
  },
];

export default function AutomationSubServices() {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-gray-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        {/* ── Section Header ── */}
        <FadeUp delay={0} className="mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Industrial Automation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937]">
            Our Automation Services
          </h2>
        </FadeUp>

        {/* ── Banner Image ── */}
        <FadeUp delay={0.05} className="mb-14">
          <div className="relative rounded-3xl overflow-hidden aspect-[21/7] shadow-xl">
            <Image
              src="/images/services/automation_full.jpg"
              alt="Industrial automation control system — PLC SCADA integration by Texas Technical Services Kuwait"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26]/40 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />
          </div>
        </FadeUp>

        {/* ── Neumorphic Service Cards (3-Column Grid) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {AUTOMATION_SERVICES.map((card, i) => (
            <FadeUp key={card.title} delay={0.04 + i * 0.03}>
              <NeumorphicServiceCard card={card} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
