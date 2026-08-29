"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gauge, FlaskConical, Cpu } from "lucide-react";
import { ThemePrimaryLink } from "@/components/ThemeButton";
import { SITE_URL } from "@/lib/site";

const SERVICES = [
  { Icon: Gauge,       title: "Flow Measurement & Control System Solutions", desc: "Comprehensive custody metering, flow computers, metering skids, and control system upgrades for liquid, gas, and water applications." },
  { Icon: FlaskConical, title: "Inspection & Testing",                        desc: "Specialized inspection, non-destructive testing (NDT), validation and maintenance of metering systems with full consultancy support." },
  { Icon: Cpu,         title: "Industrial Process Automation Solutions",      desc: "End-to-end plant automation, PLC/SCADA integration, HMI panels, VFDs, AC servos, and CEMS for oil & gas, power, and manufacturing." },
];

const BODY = [
  "We possess extensive expertise in liquid and gas custody metering systems, Industrial Automation, Inspection and Testing. Our services encompass metering control system upgrades, maintenance, validation, and specialized consultancy.",
  "Committed to end-to-end metering solutions through strategic OEM partnerships — custody transfer skids, flow meters, flow computers, CEMS analyzers, and field instruments across oil & gas, power plants, and commercial sectors.",
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">

      {/* Ambient blob */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-brand-red) 4%, transparent) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-16">
          <div className="fade-up">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px" style={{ background: "#0E7490" }} />
              <span className="text-[11px] font-semibold tracking-[3px] uppercase" style={{ color: "#0E7490" }}>
                Get to Know Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-[2.8rem] font-bold leading-[1.12]" style={{ color: "var(--color-brand-navy)" }}>
              What We Do
            </h2>
          </div>
          <div className="fade-up lg:text-right">
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg lg:ml-auto">
              Texas Technical Services delivers precision-engineered solutions across
              flow measurement, inspection, and industrial automation — trusted by
              leading operators since 2008.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {SERVICES.map((svc, i) => (
            <div className="fade-up">
              <div
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border"
                style={{
                  background: "var(--color-brand-navy)",
                  borderColor: "color-mix(in srgb, var(--color-brand-red) 20%, transparent)",
                  boxShadow: "0 8px 32px color-mix(in srgb, var(--color-brand-red) 8%, transparent)",
                }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom right, color-mix(in srgb, var(--color-brand-red) 15%, transparent), transparent)" }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: "linear-gradient(to right, var(--color-brand-red), color-mix(in srgb, var(--color-brand-red) 60%, transparent), transparent)" }}
                />

                <div className="relative z-10 p-7 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 ring-1 ring-white/5"
                    style={{ background: "color-mix(in srgb, var(--color-brand-red) 15%, transparent)" }}
                  >
                    <svc.Icon className="w-5 h-5" strokeWidth={1.8} style={{ color: "var(--color-brand-red)" }} />
                  </div>

                  <span className="text-[10px] font-bold text-white/20 tracking-[2px] mb-3">0{i + 1}</span>

                  <h3 className="text-[17px] font-semibold text-white leading-snug mb-4">{svc.title}</h3>

                  <div className="w-8 h-px mb-4" style={{ background: "color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }} />

                  <p className="text-white/70 text-[15px] leading-relaxed flex-1">{svc.desc}</p>

                  <div className="mt-6 pt-5 border-t border-white/[0.07]">
                    <Link
                      href="/services/"
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold tracking-wide hover:gap-2.5 transition-all duration-200"
                      style={{ color: "var(--color-brand-red)" }}
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two-column: images + copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — images */}
          <div className="fade-up relative pb-10 lg:pb-0">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[16/11] shadow-2xl shadow-black/20"
              style={{ background: "var(--color-brand-navy)" }}
            >
              <Image
                src="/our-team/Oil-Gas.jpg"
                alt="Oil and gas industrial facility — Texas Technical Services"
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" quality={100}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{ background: "linear-gradient(to top, color-mix(in srgb, var(--color-brand-navy) 50%, transparent), transparent)" }}
              />
            </div>

            {/* Secondary overlapping image */}
            <div
              className="absolute bottom-0 right-0 lg:-right-6 w-[48%] rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/30 border-[3px] border-white"
              style={{ background: "var(--color-brand-navy-mid)" }}
            >
              <Image
                src="/our-team/whatwedo.jpg"
                alt="What we do — Texas Technical Services industrial operations"
                fill sizes="30vw" className="object-cover" quality={100}
              />
            </div>

            {/* ISO badge */}
            <div
              className="absolute -top-4 -left-2 lg:-left-6 rounded-xl px-4 py-3"
              style={{
                background: "linear-gradient(to bottom right, var(--color-brand-red), var(--color-brand-red-dark))",
                boxShadow: "0 8px 24px color-mix(in srgb, var(--color-brand-red) 30%, transparent)",
              }}
            >
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">ISO 9001:2015</p>
              <p className="text-white/70 text-[11px] mt-1 leading-none font-medium tracking-wide">Certified · Est. 2008</p>
            </div>
          </div>

          {/* RIGHT — copy */}
          <div>
            <div className="fade-up d1">
              <div className="space-y-5 mb-10">
                {BODY.map((para, i) => (
                  <p key={i} className="text-[#4a4a4a] text-[15px] leading-[1.8]">{para}</p>
                ))}
              </div>
            </div>

            <div className="fade-up d2">
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { num: "18+",  label: "Years of Excellence" },
                  { num: "200+", label: "Clients Served" },
                  { num: "16+",  label: "Approved Vendors" },
                  { num: "24/7", label: "Technical Support" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl px-5 py-4 border border-gray-100" style={{ background: "var(--color-brand-gray, #f4f5f8)" }}>
                    <p className="text-[1.6rem] font-bold leading-none" style={{ color: "var(--color-brand-red)" }}>{stat.num}</p>
                    <p className="text-[13px] text-gray-500 mt-1.5 font-medium tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up d2">
              <div className="flex flex-wrap gap-3">
                <ThemePrimaryLink href={`${SITE_URL}/contacts/`} external>
                  Contact Us <ArrowRight className="w-4 h-4" />
                </ThemePrimaryLink>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-400 bg-white text-gray-600 hover:text-gray-900 text-[14px] font-medium px-7 py-3.5 rounded-lg transition-all duration-200"
                >
                  Our Services →
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
