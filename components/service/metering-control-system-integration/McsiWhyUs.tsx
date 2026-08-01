"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Settings, ShieldCheck, Headphones, Zap } from "lucide-react";
import NeumorphicReasonCard from "@/components/service/common/NeumorphicReasonCard";

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

const REASONS = [
  {
    Icon: Settings,
    title: "Tailored Solutions",
    body: "Recognizing that each custody transfer scenario is unique, we customize our solutions to meet your specific needs — from bespoke control system architecture to site-specific integration requirements.",
  },
  {
    Icon: ShieldCheck,
    title: "Reliability",
    body: "Count on us for reliable systems that ensure seamless custody transfer operations. Our solutions are built to industry standards with proven technologies and rigorous testing protocols.",
  },
  {
    Icon: Headphones,
    title: "Ongoing Support",
    body: "Our commitment extends beyond installation. We provide continuous support and maintenance to keep your systems performing at their best — long after commissioning is complete.",
  },
  {
    Icon: Zap,
    title: "Cutting-Edge Technology",
    body: "We stay at the forefront of industry trends and technologies to offer you the best possible solutions — from the latest SCADA platforms to advanced cybersecurity for IT/OT infrastructure.",
  },
];

export default function McsiWhyUs() {
  return (
    <section className="relative bg-white py-24 lg:py-28 overflow-hidden">

      {/* Subtle top divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)",
        }}
      />

      {/* Subtle blob */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20 items-start">

          {/* Left — header + OEM note + CTA */}
          <div>
            <FadeUp delay={0}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">
                Your Trusted Partner for Custody Transfer Solutions
              </h2>
              <div className="inline-flex items-center gap-2.5 bg-[#e7212b]/8 border border-[#e7212b]/20 rounded-xl px-4 py-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#e7212b] shrink-0" />
                <span className="text-[#e7212b] text-[13px] font-semibold">
                  Authorised OEM Representative
                </span>
              </div>
              <p className="text-gray-500 text-[14.5px] leading-[1.85] mb-8">
                At TTS, we pride ourselves on being your go-to partner for Custody Transfer Flow
                Metering Control System Development and Integration. Contact us today to discuss
                your project and let&apos;s embark on a journey toward enhanced accuracy, compliance,
                and efficiency in your custody transfer operations.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/15"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/service/flow-measurement-solutions/"
                  className="inline-flex items-center gap-2 border border-[#0B0D26]/15 hover:border-[#0B0D26]/30 text-[#0B0D26]/60 hover:text-[#0B0D26] px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
                >
                  Flow Measurement Services
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right — reason cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
            {REASONS.map((reason, i) => (
              <FadeUp key={reason.title} delay={0.08 + i * 0.08}>
                <NeumorphicReasonCard item={reason} index={i} />
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
