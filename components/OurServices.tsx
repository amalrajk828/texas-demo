"use client";
import Link from "next/link";
import { useRef } from "react";
import { Gauge, FlaskConical, Cpu, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    Icon: Gauge,
    title: "Flow Measurement & Control System Solutions",
    body: "We provide metering control system upgrades, maintenance, and validation services for custody metering systems. Our experienced team ensures your metering systems operate efficiently and accurately, meeting industry standards and compliance requirements. Additionally, we offer specialized consultancy services to optimize your custody metering processes and enhance productivity.",
    href: "/service/flow-measurement-solutions/",
  },
  {
    Icon: FlaskConical,
    title: "Inspection & Testing",
    body: "We provide comprehensive inspection and testing services across various industries. Our team of experts conducts thorough equipment inspections, non-destructive testing, functional testing, and certification to ensure compliance with industry standards and regulations — maintaining the integrity and safety of your assets, giving you peace of mind and mitigating risks.",
    href: "/service/inspection-testing/",
  },
  {
    Icon: Cpu,
    title: "Industrial Process Automation Solutions",
    body: "Our Industrial Automation services focus on optimizing your industrial processes for improved efficiency and productivity. We specialize in control system design, implementation, and upgrades — offering expertise in PLC programming, SCADA integration, and HMI development to streamline operations, reduce downtime, and achieve better control over your production processes.",
    href: "/service/industrial-automation/",
  },
];

export default function OurServices() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--color-brand-navy)" }}
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, color-mix(in srgb, var(--color-brand-red) 10%, transparent) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, color-mix(in srgb, var(--color-brand-red) 6%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,0.02) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,0.02) 60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="fade-up text-center mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px" style={{ background: "#0891B2" }} />
            <span className="text-[10px] font-semibold tracking-[3.5px] uppercase" style={{ color: "#0891B2" }}>
              What We Offer
            </span>
            <span className="w-6 h-px" style={{ background: "#0891B2" }} />
          </div>
          <h2 className="text-4xl sm:text-[2.8rem] font-bold text-white leading-[1.12] mb-5">
            Our Services
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed max-w-2xl mx-auto">
            At Texas Technical Service Co., we have extensive expertise in a wide range of services
            related to Custody Metering systems, Industrial Automation, and Inspection &amp; Testing.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((svc, i) => (
            <div key={svc.title} className="fade-up d1 h-full">
              <ServiceCard svc={svc} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-up text-center mt-14">
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px] font-medium backdrop-blur-sm"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  index,
}: {
  svc: (typeof SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl border border-white/[0.08] backdrop-blur-sm overflow-hidden flex flex-col cursor-default h-full"
      style={{
        background: "color-mix(in srgb, var(--color-brand-navy-mid) 60%, transparent)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.35)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, transparent, var(--color-brand-red), transparent)` }}
      />

      {/* Corner glow */}
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-brand-red) 18%, transparent) 0%, transparent 70%)" }}
      />

      {/* Left border glow */}
      <div
        className="absolute top-8 bottom-8 left-0 w-[2px] opacity-0 group-hover:opacity-70 transition-opacity duration-300"
        style={{ background: `linear-gradient(to bottom, transparent, var(--color-brand-red), transparent)` }}
      />

      <div className="relative z-10 p-8 flex flex-col flex-1">
        {/* Icon box */}
        <div className="mb-7">
          <div
            className="relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: "color-mix(in srgb, var(--color-brand-red) 10%, transparent)",
              border: "1px solid color-mix(in srgb, var(--color-brand-red) 20%, transparent)",
            }}
          >
            <svc.Icon className="w-6 h-6" strokeWidth={1.8} style={{ color: "var(--color-brand-red)" }} />
          </div>
        </div>

        <span className="text-[10px] font-bold text-white/15 tracking-[3px] mb-3 block">
          0{index + 1}
        </span>

        <h3 className="text-[18px] font-bold text-white leading-snug mb-4">
          {svc.title}
        </h3>

        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
          <div className="w-2 h-[2px] rounded-full" style={{ background: "color-mix(in srgb, var(--color-brand-red) 30%, transparent)" }} />
        </div>

        <p className="text-white/70 text-[15px] leading-[1.85] flex-1 group-hover:text-white/60 transition-colors duration-300">
          {svc.body}
        </p>

        <div className="mt-8 pt-6 border-t border-white/[0.07]">
          <Link
            href={svc.href}
            className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-wide group/link"
            style={{ color: "var(--color-brand-red)" }}
          >
            <span className="group-hover/link:underline underline-offset-2 transition-all">Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}
