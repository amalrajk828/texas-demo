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

function ServiceCard({
  item,
  index,
}: {
  item: (typeof SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 + (index % 3) * 0.08 }}
      whileHover={{ y: -3, transition: { duration: 0.22 } }}
      className="group relative rounded-2xl border border-white/[0.08] bg-[#12163A]/60 backdrop-blur-sm overflow-hidden flex flex-col cursor-default"
      style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.30)" }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Corner glow */}
      <div
        className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.16) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 p-7 flex flex-col flex-1">

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center mb-5 group-hover:bg-[#e7212b]/18 group-hover:border-[#e7212b]/35 transition-all duration-300">
          <item.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
        </div>

        {/* Number */}
        <span className="text-[10px] font-bold text-white/15 tracking-[3px] mb-2 block">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Divider */}
        <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-4 group-hover:w-12 transition-all duration-300" />

        {/* Title */}
        <h3 className="text-[16px] font-bold text-white leading-snug mb-3">
          {item.title}
        </h3>

        {/* Body */}
        <p className="text-white/45 text-[13.5px] leading-[1.8] flex-1 group-hover:text-white/60 transition-colors duration-300">
          {item.body}
        </p>

      </div>
    </motion.div>
  );
}

export default function McsiServices() {
  return (
    <section className="relative bg-[#0B0D26] py-24 lg:py-32 overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,0.02) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,0.02) 60px)",
        }}
      />

      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(231,33,43,0.09) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <FadeUp delay={0} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-white leading-[1.15] max-w-2xl">
            What We Deliver
          </h2>
        </FadeUp>

        {/* ── Image + intro row ── */}
        <FadeUp delay={0.06} className="mb-16">
          <div className="relative rounded-2xl overflow-hidden aspect-[21/7] bg-[#12163A]">
            <Image
              src="/images/services/metering-control-integration.png"
              alt="Metering control system integration"
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Top red line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0D26] to-transparent" />
          </div>
        </FadeUp>

        {/* ── Service cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
