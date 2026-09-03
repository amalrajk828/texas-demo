import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";
"use client";
import { useRef } from "react";
import { Clock, ThumbsUp, ShieldCheck, HardHat } from "lucide-react";

const BENEFITS = [
  {
    Icon: Clock,
    title: "Timely Completion of All Works",
    body: "We plan and execute every project on schedule, ensuring minimal disruption to your operations and reliable on-time delivery across all service areas.",
  },
  {
    Icon: ThumbsUp,
    title: "Greater Customer Satisfaction",
    body: "We blend technology and quality workmanship with personal, one-on-one service — building long-term relationships and ensuring every client's requirements are fully met.",
  },
  {
    Icon: ShieldCheck,
    title: "No Concession in Quality",
    body: "Backed by ISO 9001:2015 certification, we maintain uncompromising quality standards across all services, from flow measurement to construction — every single time.",
  },
  {
    Icon: HardHat,
    title: "Safe Work Practices",
    body: "Safety is embedded in our culture. All works are executed under strict HSE guidelines, ensuring the wellbeing of our personnel and your assets throughout the project lifecycle.",
  },
];

export default function ServicesBenefits() {
  return (
    <section className="relative bg-white py-24 lg:py-28 overflow-hidden">

      {/* Subtle top divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(231,33,43,0.18) 50%, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="fade-up max-w-2xl mb-16">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Our Benefits
            </span>
          </div>
          <h2 className="text-4xl sm:text-[2.8rem] font-bold text-[#0B0D26] leading-[1.12] mb-4">
            Why We Are the Best to Do Your Next Job
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            We blend technology and quality workmanship with personal, one-on-one service.
            Our skilled team will provide high quality results — whatever the scale or complexity.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, i) => (
            <div key={benefit.title || i} className="fade-up">
              <BenefitCard benefit={benefit} index={i} />
            </div>
          ))}
        </div>

        {/* ── Bottom ISO strip ── */}
        <div className="fade-up d4">
          <div className="mt-16 rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden relative">
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
              className="absolute right-0 top-0 w-64 h-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at right, rgba(231,33,43,0.10) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div className="flex items-center gap-5">
                {/* ISO badge */}
                <div className="w-12 h-12 rounded-xl bg-[#e7212b] flex flex-col items-center justify-center shrink-0 shadow-lg shadow-[#e7212b]/30">
                  <span className="text-white text-[9px] font-bold tracking-[0.5px] leading-tight text-center">ISO<br/>9001</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-[15px]">ISO 9001:2015 &amp; ISO 14001:2015 Certified</p>
                  <p className="text-white/70 text-[13px] mt-0.5">Certified quality and environmental management · Est. 2008</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Quality Management",
                  "Environmental Compliance",
                  "HSE Standards",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] text-white/50 border border-white/10 px-3 py-1.5 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Benefit card ── */
function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof BENEFITS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="neumorphic-press-card p-7 flex flex-col justify-between h-full group block text-left"
    >
      {/* Number */}
      <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[3px] mb-4 block">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-white border border-[#e8eaf0] group-hover:border-[#e7212b]/20 group-hover:bg-[#e7212b]/5 flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
        <benefit.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
      </div>

      {/* Red divider */}
      <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-4 group-hover:w-12 transition-all duration-300" />

      {/* Title */}
      <h3 className="text-[16px] font-bold text-[#0B0D26] leading-snug mb-3">
        {benefit.title}
      </h3>

      {/* Body */}
      <p className="text-gray-500 text-[14px] leading-[1.75]">
        {benefit.body}
      </p>
    </div>
  );
}
