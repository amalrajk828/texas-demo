"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Gauge, FlaskConical, Cpu, ChevronRight } from "lucide-react";

const SERVICES = [
  { Icon: Gauge,        title: "Flow Measurement & Control",  desc: "Comprehensive custody metering, flow computers, metering skids, and control system upgrades for liquid, gas, and water applications." },
  { Icon: FlaskConical, title: "Inspection & Testing",        desc: "Specialised NDT, validation and mechanical testing of metering systems with full ISO-certified consultancy support." },
  { Icon: Cpu,          title: "Industrial Automation",       desc: "End-to-end plant automation — PLC, SCADA, HMI, VFDs and CEMS for oil & gas, power, and manufacturing sectors." },
];

const BODY = [
  "Extensive expertise in liquid and gas custody metering, Industrial Automation, and Inspection & Testing. Our services cover metering control upgrades, maintenance, validation, and specialised consultancy.",
  "Committed to end-to-end metering solutions through strategic OEM partnerships — metering skids, flow computers, CEMS analysers, and field instruments across oil & gas, power, and commercial sectors.",
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function LightWhatWeDo() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--color-surface)" }}>

      {/* Subtle top rule */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />

      {/* Decorative background shape */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-brand-red) 5%, transparent) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <FadeUp delay={0}>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
              <span className="text-[11px] font-bold tracking-[3px] uppercase" style={{ color: "var(--color-brand-red)" }}>What We Do</span>
            </div>
            <h2 className="text-[2.8rem] sm:text-[3.4rem] font-black leading-[1.08] tracking-tight" style={{ color: "var(--color-text-primary)" }}>
              Precision Solutions for<br />
              <span style={{ color: "var(--color-brand-red)" }}>Critical Industries</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="max-w-md">
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Texas Technical Services delivers precision-engineered solutions across flow measurement,
              inspection, and industrial automation — trusted by leading operators since 2008.
            </p>
          </FadeUp>
        </div>

        {/* Glass service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.title} delay={0.08 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl overflow-hidden flex flex-col h-full transition-shadow duration-300"
                style={{
                  background: "rgba(255,255,255,0.70)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px var(--color-border)",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.10), 0 0 0 1.5px var(--color-brand-red)`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px var(--color-border)")}
              >
                {/* Top accent */}
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(to right, var(--color-brand-red), color-mix(in srgb, var(--color-brand-red) 30%, transparent))` }} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border"
                    style={{
                      background: "color-mix(in srgb, var(--color-brand-red) 8%, white)",
                      borderColor: "color-mix(in srgb, var(--color-brand-red) 15%, transparent)",
                    }}
                  >
                    <svc.Icon className="w-5 h-5" strokeWidth={1.8} style={{ color: "var(--color-brand-red)" }} />
                  </div>

                  <span className="text-[10px] font-bold tracking-[2.5px] mb-2 block" style={{ color: "color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }}>
                    0{i + 1}
                  </span>

                  <h3 className="text-[21px] font-extrabold leading-snug mb-3" style={{ color: "var(--color-text-primary)" }}>
                    {svc.title}
                  </h3>

                  <div className="w-8 h-[2px] rounded-full mb-4" style={{ background: "var(--color-border-accent)" }} />

                  <p className="text-[16px] leading-[1.9] flex-1" style={{ color: "var(--color-text-muted)" }}>
                    {svc.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--color-border)" }}>
                    <Link href="/service/" className="inline-flex items-center gap-1.5 text-[15px] font-bold hover:gap-2.5 transition-all duration-200"
                      style={{ color: "var(--color-brand-red)" }}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Two-column: images + copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — images */}
          <FadeUp delay={0} className="relative pb-10 lg:pb-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] shadow-xl" style={{ background: "var(--color-border)" }}>
              <Image src="/our-team/Oil-Gas.jpg" alt="Oil and gas — Texas Technical Services"
                fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" quality={100} />
              <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)" }} />
            </div>

            <div className="absolute bottom-0 right-0 lg:-right-6 w-[46%] rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
              style={{ border: "3px solid var(--color-surface)", background: "var(--color-border)" }}>
              <Image src="/our-team/whatwedo.jpg" alt="What we do" fill sizes="30vw" className="object-cover" quality={100} />
            </div>

            {/* ISO badge */}
            <div className="absolute -top-4 -left-2 lg:-left-6 rounded-xl px-4 py-3 shadow-lg"
              style={{ background: "var(--color-brand-red)", boxShadow: "0 8px 24px color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }}>
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">ISO 9001:2015</p>
              <p className="text-white/70 text-[11px] mt-1 leading-none font-medium">Certified · Est. 2008</p>
            </div>
          </FadeUp>

          {/* RIGHT — copy */}
          <div>
            <FadeUp delay={0.08}>
              <div className="space-y-4 mb-8">
                {BODY.map((para, i) => (
                  <p key={i} className="text-[17px] leading-[1.85]" style={{ color: "var(--color-text-muted)" }}>{para}</p>
                ))}
              </div>
            </FadeUp>

            {/* Stats grid */}
            <FadeUp delay={0.14}>
              <div className="grid grid-cols-2 gap-3 mb-9">
                {[
                  { num: "15+",  label: "Years" },
                  { num: "200+", label: "Clients" },
                  { num: "8",    label: "Industries" },
                  { num: "100%", label: "ISO Quality" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl px-5 py-4"
                    style={{
                      background: "rgba(255,255,255,0.80)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid var(--color-border)",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    }}
                  >
                    <p className="text-[1.6rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{stat.num}</p>
                    <p className="text-[13px] mt-1.5 font-semibold tracking-wide" style={{ color: "var(--color-text-muted)" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <Link href="/contacts/"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-lg text-[15px] transition-all hover:-translate-y-0.5 shadow-md"
                  style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 16px color-mix(in srgb, var(--color-brand-red) 30%, transparent)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/service/"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg text-[15px] transition-all border"
                  style={{ color: "var(--color-text-primary)", borderColor: "var(--color-border-accent)", background: "white" }}
                >
                  Our Services <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
