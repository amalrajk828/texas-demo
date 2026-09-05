"use client";

import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Settings2,
  ShieldCheck,
  Zap,
  Wrench,
} from "lucide-react";

const CAPABILITIES = [
  "Custom flow computer programming for liquid & gas applications",
  "Configuration to API MPMS, AGA, ISO, NTEP & OIML standards",
  "Multi-stream, multi-phase & custody transfer flow computer setup",
  "Integration with existing SCADA, DCS, and metering skid systems",
  "Flow calculation verification, testing & documentation",
  "Support for Emerson FloBoss, ABB, Honeywell, OMNI & other brands",
  "On-site commissioning and parameter validation",
  "Uncertainty analysis and calibration factor configuration",
];

const WHAT_WE_DELIVER = [
  {
    Icon: Settings2,
    title: "Custom Configuration",
    body: "Every flow computer configuration is tailored to your specific application — liquid, gas, or multiphase — ensuring your measurement chain delivers accurate, compliant custody data.",
  },
  {
    Icon: ShieldCheck,
    title: "Standards Compliance",
    body: "All configurations are built in strict compliance with global standards including API MPMS, AGA, ISO, NTEP & OIML — giving you full traceability and regulatory confidence.",
  },
  {
    Icon: Zap,
    title: "Seamless Integration",
    body: "We guarantee seamless integration into your existing metering systems, SCADA infrastructure, and communication networks with minimal disruption to your operations.",
  },
  {
    Icon: Wrench,
    title: "Commissioning & Support",
    body: "Our team handles on-site commissioning, parameter validation, and post-installation support — ensuring your flow computer performs reliably from day one.",
  },
];

export default function FlowComputerContent() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">

      {/* Subtle blob */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-24">

        {/* ── Two-column: image + body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <div className="fade-up relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#000000] blueprint-grid blueprint-dot-grid shadow-2xl shadow-black/15">
              <Image
                src="/images/services/flow-computer.png"
                alt="Flow computer configuration for custody transfer metering — Texas Technical Services"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D26]/40 to-transparent" />
            </div>

            {/* Standards badge */}
            <div className="absolute -bottom-5 -right-4 lg:-right-6 bg-gradient-to-br from-[#e7212b] to-[#aa0b1b] rounded-xl px-5 py-3.5 shadow-lg shadow-[#e7212b]/30">
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">
                Multi-Standard
              </p>
              <p className="text-white/75 text-[11px] mt-1 leading-none font-medium">
                API · AGA · ISO · NTEP · OIML
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="fade-up d1">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-5 h-px bg-[#0891B2]" />
                <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  What We Do
                </span>
              </div>
              <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">
                Precision Configuration for Every Application
              </h2>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-6">
                Our dedicated team customizes solutions to your specific flow computational and
                configuration needs. Whether you operate a liquid custody transfer skid, gas
                measurement station, or a multi-stream allocation system — we ensure your flow
                computer is configured correctly, tested thoroughly, and integrated seamlessly.
              </p>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">
                As an Authorised OEM Representative, we work with all major flow computer
                platforms and ensure full compliance with the standards that matter most to your
                operations and regulators.
              </p>
            </div>

            {/* Capabilities checklist */}
            <div className="fade-up d2">
              <div className="grid grid-cols-1 gap-2.5 mb-8">
                {CAPABILITIES.map((cap) => (
                  <div key={cap} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e7212b] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[#555] text-[13.5px] leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up d2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/15"
              >
                Get More Information
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* ── What we deliver cards ── */}
        <div>
          <div className="fade-up mb-12">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15]">
              What We Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHAT_WE_DELIVER.map((item, i) => (
              <div key={item.title || i} className="fade-up">
                <div
                  className="neumorphic-press-card p-7 flex flex-col justify-between h-full group block text-left"
                >
                  <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[3px] mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="neumorphic-press-btn w-11 h-11 flex items-center justify-center text-[#e7212b] mb-4">
                    <item.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                  </div>

                  <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />

                  <h3 className="text-[15px] font-bold text-[#0B0D26] leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-[13px] leading-[1.75]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="fade-up d4">
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid px-8 py-6 relative overflow-hidden">
              <div
                className="absolute right-0 top-0 w-64 h-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse at right, rgba(231,33,43,0.10) 0%, transparent 70%)" }}
              />
              <div className="relative z-10">
                <p className="text-white font-semibold text-[15px]">Ready to configure your flow computer?</p>
                <p className="text-white/70 text-[13px] mt-0.5">Talk to our specialists about your application and standards requirements.</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-3 shrink-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shadow-lg shadow-[#e7212b]/20"
                >
                  Contact Us <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/service/flow-measurement-solutions/"
                  className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 text-[13px]"
                >
                  Flow Measurement Services
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
