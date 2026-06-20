"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckSquare, Rocket, Play, Wrench } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const CARDS = [
  {
    Icon: CheckSquare,
    title: "Commissioning",
    body: "Meticulous validation and fine-tuning of automation systems — configuring and testing PLCs, DCS, and SCADA; calibrating sensors and instruments; testing control logic; and verifying safety systems against predefined specifications.",
  },
  {
    Icon: Play,
    title: "Start-Up Support",
    body: "Gradual activation of the automation system including initiating control sequences, testing process alarms and interlocks, transitioning from manual to automated control, operator training, and monitoring initial system performance.",
  },
  {
    Icon: Wrench,
    title: "Maintenance Services",
    body: "Ongoing maintenance to sustain peak performance — regular system backups, routine inspections, software updates, troubleshooting, and spare parts inventory management to maximise uptime and system reliability.",
  },
  {
    Icon: Rocket,
    title: "Post-Commissioning Handover",
    body: "Comprehensive handover documentation including as-built drawings, functional design specifications, test records, operator manuals, and maintenance schedules — ensuring your team has everything needed for long-term operation.",
  },
];

export default function CommissioningContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp delay={0} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">Service Phases</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            From Commissioning to Ongoing Maintenance
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CARDS.map((card, i) => (
            <FadeUp key={card.title} delay={0.08 * i}>
              <div className="group rounded-2xl border border-[#e8eaf0] bg-white p-6 hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center mb-4 group-hover:bg-[#e7212b]/15 transition-all duration-300">
                  <card.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                </div>
                <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-[15px] font-bold text-[#0B0D26] mb-2">{card.title}</h3>
                <p className="text-gray-500 text-[13px] leading-[1.7]">{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.1}>
          <div className="rounded-2xl bg-[#0B0D26] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white/40 text-[10px] tracking-[2px] uppercase mb-2">Industries Served</p>
              <p className="text-white font-semibold text-lg">Oil &amp; Gas · Chemical · Manufacturing · Power Generation</p>
              <p className="text-white/45 text-sm mt-1">Experienced commissioning engineers — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
