"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BadgeDollarSign, Award, MinusCircle, TrendingUp, Headphones } from "lucide-react";

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
    Icon: BadgeDollarSign,
    title: "Cost-Effective",
    body: "Upgrading your existing system can be a cost-effective alternative to a complete replacement, saving you time and resources without compromising on performance or compliance.",
  },
  {
    Icon: Award,
    title: "Expertise",
    body: "Our team possesses extensive experience and expertise in system upgradation, ensuring a seamless transition that meets the latest industry standards and your specific operational goals.",
  },
  {
    Icon: MinusCircle,
    title: "Minimal Disruption",
    body: "We strive to minimize operational disruptions during the upgradation process to keep your business running smoothly — with careful planning and phased implementation where required.",
  },
  {
    Icon: TrendingUp,
    title: "Improved Efficiency",
    body: "Our upgradation solutions are designed to enhance system efficiency, leading to increased productivity, better data accuracy, and improved operational control across your custody transfer systems.",
  },
  {
    Icon: Headphones,
    title: "Ongoing Support",
    body: "We provide continuous support and maintenance to ensure your upgraded system continues to perform at its best — long after the upgrade is complete and commissioned.",
  },
];

export default function UpgradeWhyUs() {
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

      {/* Blob */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-14 lg:gap-20 items-start">

          {/* Left — header + OEM badge + CTA */}
          <div>
            <FadeUp delay={0}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">
                The Smart Choice for System Upgrades
              </h2>

              {/* OEM badge */}
              <div className="inline-flex items-center gap-2.5 bg-[#e7212b]/8 border border-[#e7212b]/20 rounded-xl px-4 py-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#e7212b] shrink-0" />
                <span className="text-[#e7212b] text-[13px] font-semibold">
                  Authorised OEM Representative
                </span>
              </div>

              <p className="text-gray-500 text-[14.5px] leading-[1.85] mb-8">
                Choose TTS for cost-effective, efficient, and disruption-minimising upgrades that
                breathe new life into your existing systems — backed by deep OEM expertise and a
                commitment to long-term performance.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/15"
                >
                  Discuss Your Upgrade
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

          {/* Right — reason cards (2 col grid, last one spans) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {REASONS.map((reason, i) => {
              const isLast = i === REASONS.length - 1;
              return (
                <FadeUp
                  key={reason.title}
                  delay={0.08 + i * 0.07}
                  className={isLast ? "sm:col-span-2 lg:col-span-1" : ""}
                >
                  <motion.div
                    whileHover={{ y: -3, transition: { duration: 0.22 } }}
                    className="group rounded-2xl border border-[#e8eaf0] bg-[#f4f5f8] p-6 hover:border-[#e7212b]/25 hover:bg-white hover:shadow-xl hover:shadow-[#e7212b]/5 transition-all duration-300 cursor-default h-full"
                  >
                    <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[3px] mb-4 block">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="w-11 h-11 rounded-xl bg-white border border-[#e8eaf0] group-hover:border-[#e7212b]/20 group-hover:bg-[#e7212b]/5 flex items-center justify-center mb-4 transition-all duration-300 shadow-sm">
                      <reason.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                    </div>

                    <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />

                    <h3 className="text-[15px] font-bold text-[#0B0D26] leading-snug mb-2">
                      {reason.title}
                    </h3>

                    <p className="text-gray-500 text-[13px] leading-[1.75]">
                      {reason.body}
                    </p>
                  </motion.div>
                </FadeUp>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
