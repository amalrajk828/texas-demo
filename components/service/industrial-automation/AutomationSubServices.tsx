"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Factory, Network, Rocket } from "lucide-react";
import SubServiceCard from "@/components/service/common/SubServiceCard";

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

const SUB_SERVICES = [
  {
    Icon: Factory,
    title: "Process Plant Automation",
    body: "Plant Automation Excellence: At TTS, we specialize in delivering top-tier Plant Automation solutions that streamline your industrial processes. Our cutting-edge automation systems are designed to boost efficiency, reduce operational costs, and enhance overall productivity — ensuring your plant operates at peak performance levels with full visibility and control.",
    href: "/service/plant-automation/",
  },
  {
    Icon: Network,
    title: "Control System Integration and Upgradation",
    body: "At TTS, we are your trusted partner for PLC (Programmable Logic Controller) and SCADA (Supervisory Control and Data Acquisition)-based automation and system integration. Our expertise in this field empowers industries to achieve higher levels of efficiency, reliability, and control — from legacy system migrations to full greenfield automation builds.",
    href: "/service/system-software-upgrade/",
  },
  {
    Icon: Rocket,
    title: "Commissioning and Start-up Support",
    body: "Commissioning for Industrial Process Automation involves the meticulous process of validating and fine-tuning automation systems to ensure they operate in strict accordance with predefined specifications. Our experienced team guides your project from pre-commissioning through hot commissioning, start-up, and post-commissioning handover — minimizing downtime and risk.",
    href: "/service/commissioning-and-start-up-support/",
  },
];

export default function AutomationSubServices() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
      {/* ── Header + cards ── */}
      <div>
        <FadeUp delay={0} className="mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Industrial Automation
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">
              Our Automation Services
            </h2>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15"
            >
              Get More Information
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="mb-16">
          <div className="relative rounded-2xl overflow-hidden aspect-[21/7] shadow-2xl shadow-black/20">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[22px]">
          {SUB_SERVICES.map((item, i) => (
            <SubServiceCard key={item.title} item={item} index={i} categoryTag="Industrial Automation" />
          ))}
        </div>
      </div>
    </div>
  );
}
