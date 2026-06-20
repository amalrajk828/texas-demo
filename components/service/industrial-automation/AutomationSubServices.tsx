"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Factory, Network, Rocket } from "lucide-react";

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
    imageSrc: "/services/industrial-automation/plant-automation.jpg",
    imagePlaceholder: "/services/industrial-automation/plant-automation.jpg",
    href: "/service/plant-automation/",
  },
  {
    Icon: Network,
    title: "Control System Integration and Upgradation",
    body: "At TTS, we are your trusted partner for PLC (Programmable Logic Controller) and SCADA (Supervisory Control and Data Acquisition)-based automation and system integration. Our expertise in this field empowers industries to achieve higher levels of efficiency, reliability, and control — from legacy system migrations to full greenfield automation builds.",
    imageSrc: "/services/industrial-automation/control-system.jpg",
    imagePlaceholder: "/services/industrial-automation/control-system.jpg",
    href: "/service/system-software-upgrade/",
  },
  {
    Icon: Rocket,
    title: "Commissioning and Start-up Support",
    body: "Commissioning for Industrial Process Automation involves the meticulous process of validating and fine-tuning automation systems to ensure they operate in strict accordance with predefined specifications. Our experienced team guides your project from pre-commissioning through hot commissioning, start-up, and post-commissioning handover — minimizing downtime and risk.",
    imageSrc: "/services/industrial-automation/commissioning.jpg",
    imagePlaceholder: "/services/industrial-automation/commissioning.jpg",
    href: "/service/commissioning-and-start-up-support/",
  },
];

function SubServiceCard({
  item,
  index,
}: {
  item: (typeof SUB_SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 + index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
    >
    <Link
      href={item.href}
      className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300 h-full"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] bg-[#0B0D26] overflow-hidden">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Placeholder overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0D26]/92 gap-2">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#e7212b]/30 transition-colors duration-300">
            <item.Icon className="w-4.5 h-4.5 text-white/20 group-hover:text-[#e7212b]/50 transition-colors duration-300" strokeWidth={1.6} />
          </div>
          <p className="text-white/15 text-[9px] tracking-[1.5px] uppercase text-center px-4 leading-relaxed">
            {item.imagePlaceholder}
          </p>
        </div>
        {/* Hover top accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold text-white/60 bg-[#0B0D26]/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">
            Industrial Automation
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
            <item.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
          </div>
          <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />

        <h3 className="text-[17px] font-bold text-[#0B0D26] leading-snug mb-3">
          {item.title}
        </h3>

        <p className="text-gray-500 text-[13.5px] leading-[1.75] flex-1">
          {item.body}
        </p>
        <div className="mt-5 pt-4 border-t border-[#e8eaf0] flex items-center gap-1.5 text-[#e7212b] text-[13px] font-semibold">
          <span>Learn more</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
    </motion.div>
  );
}

/* ── Capabilities strip ── */
const CAPABILITIES = [
  "Multi-brand PLC programming (Siemens, Allen-Bradley, Schneider, Mitsubishi)",
  "SCADA development, integration & legacy migration",
  "HMI panel design, engineering & programming",
  "Variable frequency drives (VFD) & AC servo systems",
  "CEMS — Continuous Emissions Monitoring Systems",
  "Control panel design, fabrication & FAT",
  "Customized reporting & MIS software development",
  "Plant-wide DCS migration & brownfield upgrades",
];

export default function AutomationSubServices() {
  return (
    <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-20">

        {/* ── Header + cards ── */}
        <div>
          <FadeUp delay={0} className="mb-14">
            <div className="flex items-center gap-2.5 mb-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUB_SERVICES.map((item, i) => (
              <SubServiceCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* ── Capabilities dark strip ── */}
        <FadeUp delay={0}>
          <div className="rounded-2xl bg-[#0B0D26] overflow-hidden relative">
            {/* Grid texture */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
              }}
            />
            {/* Red glow */}
            <div
              className="absolute top-0 right-0 w-[400px] h-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at right, rgba(231,33,43,0.09) 0%, transparent 70%)",
              }}
            />
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />

            <div className="relative z-10 p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">

                {/* Left */}
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-5 h-px bg-[#e7212b]" />
                    <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                      Capabilities
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-[22px] leading-snug mb-3">
                    What We Integrate &amp; Deliver
                  </h3>
                  <p className="text-white/40 text-[14px] leading-[1.8]">
                    From multi-brand PLC programming to plant-wide SCADA migration —
                    our automation team covers every layer of the industrial control stack.
                  </p>
                </div>

                {/* Right — capability list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CAPABILITIES.map((cap, i) => (
                    <motion.div
                      key={cap}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 + i * 0.05 }}
                      className="flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0 mt-1.5" />
                      <span className="text-white/55 text-[13px] leading-snug">{cap}</span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
