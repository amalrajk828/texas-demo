"use client";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign, Award, MinusCircle, TrendingUp, Headphones } from "lucide-react";
import NeumorphicReasonCard from "@/components/service/common/NeumorphicReasonCard";

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
            <div className="fade-up">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-5 h-px bg-[#0891B2]" />
                <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
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
            </div>

            <div className="fade-up d1">
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
            </div>
          </div>

          {/* Right — reason cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
            {REASONS.map((reason, i) => {
              const isLast = i === REASONS.length - 1;
              return (
                <div className="fade-up">
                  <NeumorphicReasonCard item={reason} index={i} />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
