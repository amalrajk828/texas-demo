"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, FlaskConical, Cpu, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    Icon: Gauge,
    title: "Flow Measurement & Control System Solutions",
    body: "Metering control system upgrades, maintenance, and validation for custody metering systems. Ensuring your metering operates accurately to API, AGA, and ISO standards.",
    href: "/service/flow-measurement-solutions/",
    tag: "Metering",
  },
  {
    Icon: FlaskConical,
    title: "Inspection & Testing",
    body: "Comprehensive inspection, non-destructive testing, functional testing and certification across all industrial sectors. Full ISO 14001:2015 and 45001:2018 compliance.",
    href: "/service/inspection-testing/",
    tag: "NDT & QA",
  },
  {
    Icon: Cpu,
    title: "Industrial Process Automation Solutions",
    body: "Control system design, PLC programming, SCADA integration, and HMI development — optimising operations across oil & gas, power, and manufacturing plants.",
    href: "/service/industrial-automation/",
    tag: "Automation",
  },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function LightServices() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--color-section-alt)" }}>

      {/* Top / bottom rules */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />

      {/* Subtle diagonal stripe texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 12px)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <FadeUp delay={0} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
              <span className="text-[11px] font-bold tracking-[3px] uppercase" style={{ color: "var(--color-brand-red)" }}>Our Services</span>
            </div>
            <h2 className="text-[2.8rem] sm:text-[3.4rem] font-black leading-[1.08] tracking-tight" style={{ color: "var(--color-text-primary)" }}>
              What We Offer
            </h2>
          </div>
          <p className="max-w-md text-[17px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Extensive expertise in custody metering, industrial automation, and inspection & testing — since 2008.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.title} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl overflow-hidden flex flex-col h-full"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 0 0 1px var(--color-border)",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.12), 0 0 0 1.5px var(--color-brand-red)`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07), 0 0 0 1px var(--color-border)")}
              >
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "var(--color-brand-red)" }} />

                {/* Tag chip */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-full border"
                    style={{
                      color: "var(--color-brand-red)",
                      borderColor: "color-mix(in srgb, var(--color-brand-red) 20%, transparent)",
                      background: "color-mix(in srgb, var(--color-brand-red) 6%, white)",
                    }}>
                    {svc.tag}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                    style={{
                      background: "color-mix(in srgb, var(--color-brand-red) 8%, white)",
                      border: "1px solid color-mix(in srgb, var(--color-brand-red) 15%, transparent)",
                    }}>
                    <svc.Icon className="w-6 h-6" strokeWidth={1.7} style={{ color: "var(--color-brand-red)" }} />
                  </div>

                  <p className="text-[10px] font-bold tracking-[3px] mb-2" style={{ color: "color-mix(in srgb, var(--color-brand-red) 45%, transparent)" }}>
                    0{i + 1}
                  </p>

                  <h3 className="text-[22px] font-extrabold leading-snug mb-3 pr-8" style={{ color: "var(--color-text-primary)" }}>
                    {svc.title}
                  </h3>

                  <div className="w-10 h-[2px] rounded-full mb-4" style={{ background: "var(--color-border-accent)" }} />

                  <p className="text-[17px] leading-[1.9] flex-1" style={{ color: "var(--color-text-muted)" }}>
                    {svc.body}
                  </p>

                  <div className="mt-7 pt-5 border-t" style={{ borderColor: "var(--color-border)" }}>
                    <Link href={svc.href}
                      className="inline-flex items-center gap-1.5 text-[14px] font-bold hover:gap-3 transition-all duration-200"
                      style={{ color: "var(--color-brand-red)" }}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.4} className="text-center">
          <Link href="/services/"
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg text-[15px] transition-all border hover:-translate-y-0.5 shadow-sm"
            style={{
              color: "var(--color-text-primary)",
              borderColor: "var(--color-border-accent)",
              background: "white",
            }}>
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
