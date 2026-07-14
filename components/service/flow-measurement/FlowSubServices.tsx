"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Cpu,
  ArrowUpCircle,
  Settings2,
  Ruler,
  Wrench,
  ClipboardCheck,
  BarChart3,
  Rocket,
  Package,
  Users,
  GraduationCap,
  PenTool,
} from "lucide-react";

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

/* ─── Sub-service data ───────────────────────────────────────── */
const SUB_SERVICES = [
  {
    Icon: Cpu,
    title: "Metering Control System Integration",
    body: "Welcome to TTS, where we specialize in Custody Transfer Flow Metering Control System Development and Integration. With an unwavering commitment to precision, accuracy, and compliance, we are your trusted partner for all metering control system integration needs.",
    imageSrc: "/images/services/metering-control-integration.png",
    imagePlaceholder: "/images/services/metering-control-integration.png",
    href: "/service/metering-control-system-integration/",
  },
  {
    Icon: ArrowUpCircle,
    title: "Upgrade of Metering Control System",
    body: "Elevate your industrial operations with our expert Metering Control System Upgradation service. At TTS, we specialize in optimizing your existing control systems, ensuring they meet the latest industry standards and deliver peak performance for your custody metering applications.",
    imageSrc: "/images/services/metering-upgrade.png",
    imagePlaceholder: "/images/services/metering-upgrade.png",
    href: "/service/upgrade-of-metering-control-system/",
  },
  {
    Icon: Settings2,
    title: "Flow Computer Configuration",
    body: "Our dedicated team customizes solutions to your specific flow computational and configuration needs in compliance with global standards (API MPMS, AGA, ISO, NTEP & OIML), guaranteeing seamless integration into your existing systems.",
    imageSrc: "/images/services/flow-computer.png",
    imagePlaceholder: "/images/services/flow-computer.png",
    href: "/service/flow-computer-configuration/",
  },
  {
    Icon: Ruler,
    title: "Flow Meter Calibration",
    body: "Faure Herman offers calibration services in our world class ILAC/COFRAC ISO 17025 accredited facility located in France to handle your range of flowmeters, with service available for other brands as well — ensuring certified, traceable measurement accuracy.",
    imageSrc: "/images/services/calibration.jpg",
    imagePlaceholder: "/images/services/calibration.jpg",
    href: "/service/flow-meter-calibration/",
  },
  {
    Icon: Wrench,
    title: "Repair & Upgrades for Helical Flow Meters",
    body: "We offer flow meters preventive and corrective maintenance services, performance and failure analysis and provide suitable solutions to restore and enhance the reliability of your helical flow meter assets.",
    imageSrc: "/images/services/helical-repair.png",
    imagePlaceholder: "/images/services/helical-repair.png",
    href: "/service/repair-upgrades-helical-flow-meters/",
  },
  {
    Icon: ClipboardCheck,
    title: "Audits and Specialized Consultancy",
    body: "We offer comprehensive audits to ensure compliance with industry regulations and standards, minimizing risks and ensuring precise measurements within your custody metering skid system. Our team of expert consultants provides actionable guidance for process optimization.",
    imageSrc: "/images/services/audits.png",
    imagePlaceholder: "/images/services/audits.png",
    href: "/service/audits-specialized-consultancy/",
  },
  {
    Icon: BarChart3,
    title: "Validation and Uncertainty Calculations",
    body: "Our team of skilled experts employs advanced techniques and calculations to assess and minimize uncertainties, giving you confidence in the reliability of your measurement data. Whether you need validation services for new installations or existing systems, we deliver thorough, documented results.",
    imageSrc: "/images/services/validation.jpg",
    imagePlaceholder: "/images/services/validation.jpg",
    href: "/service/validation-uncertainty-calculations/",
  },
  {
    Icon: Rocket,
    title: "Commissioning and After Sales Support",
    body: "Elevate your industrial processes with our Commissioning and After Sales Support services. At TTS, we specialize in ensuring the seamless integration and performance of critical equipment, including flow meters, metering skids, flow computers, and control systems.",
    imageSrc: "/images/services/commissioning.png",
    imagePlaceholder: "/images/services/commissioning.png",
    href: "/service/commissioning-after-sales-support/",
  },
  {
    Icon: Package,
    title: "Genuine Spare Parts",
    body: "Being an Authorized OEM Representative — discover top-quality genuine spare parts for flow metering, flow meters, control systems, analyzers, CEMS, and industrial sensors at TTS. With a commitment to excellence, we ensure your systems maintain peak performance.",
    imageSrc: "/images/services/spare-parts.png",
    imagePlaceholder: "/images/services/spare-parts.png",
    href: "/service/genuine-spare-parts/",
  },
  {
    Icon: Users,
    title: "Metering Expert Services",
    body: "We take pride in offering an elite team of flow metering specialists, exclusively dedicated to enhancing your custody metering solutions. Our certified experts possess a profound understanding of custody metering systems and deliver measurable results.",
    imageSrc: "/images/services/metering-experts.jpg",
    imagePlaceholder: "/images/services/metering-experts.jpg",
    href: "/service/metering-expert-services/",
  },
  {
    Icon: GraduationCap,
    title: "Advanced Training",
    body: "On demand training courses at OEM premises, videoconferencing, or customer sites — covering metering installation, commissioning, and operation.",
    imageSrc: "/images/services/TRAINING.jpg",
    imagePlaceholder: "/images/services/TRAINING.jpg",
    href: "/service/advanced-training/",
  },
  {
    Icon: PenTool,
    title: "New Installation Design and Commissioning",
    body: "As authorized OEM Representative, we assist in specification, design, sizing and operation of future metering systems.",
    imageSrc: "/images/services/20220524_110650-scaled.jpg",
    imagePlaceholder: "/images/services/20220524_110650-scaled.jpg",
    href: "/service/new-installation-design-and-commissioning/",
  },
];

/* ─── Sub-service card ───────────────────────────────────────── */
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
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 + (index % 3) * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
      className="h-full"
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
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
          {/* Category tag */}
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-semibold text-white/60 bg-[#0B0D26]/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">
              Flow Measurement
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">

          {/* Icon + number row */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
              <item.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Red divider */}
          <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />

          {/* Title */}
          <h3 className="text-[16px] font-bold text-[#0B0D26] leading-snug mb-3">
            {item.title}
          </h3>

          {/* Body */}
          <p className="text-gray-500 text-[13.5px] leading-[1.75] flex-1">
            {item.body}
          </p>

          {/* Arrow */}
          <div className="mt-5 pt-4 border-t border-[#e8eaf0] flex items-center gap-1.5 text-[#e7212b] text-[13px] font-semibold">
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>

        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Main export ────────────────────────────────────────────── */
export default function FlowSubServices() {
  return (
    <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">

      {/* Subtle top border glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <FadeUp delay={0} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Flow Measurement Solutions
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">
              Our Flow Measurement Services
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

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUB_SERVICES.map((item, i) => (
            <SubServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
