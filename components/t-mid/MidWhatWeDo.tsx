"use client";
/* Kit B — Mid Industrial: warm grey section backgrounds, charcoal-tinted glass cards */
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Gauge, FlaskConical, Cpu, ChevronRight } from "lucide-react";

const SERVICES = [
  { Icon: Gauge,        num: "01", title: "Flow Measurement & Control", desc: "Comprehensive custody metering, flow computers, metering skids, and control system upgrades for liquid, gas, and water applications." },
  { Icon: FlaskConical, num: "02", title: "Inspection & Testing",       desc: "Specialised NDT, validation and mechanical testing of metering systems with full ISO-certified consultancy support." },
  { Icon: Cpu,          num: "03", title: "Industrial Automation",      desc: "End-to-end plant automation — PLC, SCADA, HMI, VFDs and CEMS for oil & gas, power, and manufacturing sectors." },
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
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function MidWhatWeDo() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--t-section-a)" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--t-border)" }} />

      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "repeating-linear-gradient(-45deg,var(--t-stripe) 0px,var(--t-stripe) 1px,transparent 1px,transparent 14px)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
              <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>What We Do</span>
            </div>
            <h2 className="text-[2.8rem] sm:text-[3.4rem] font-black leading-[1.05] tracking-tight" style={{ color: "var(--t-heading)" }}>
              Precision Solutions for<br />
              <span style={{ color: "var(--color-brand-red)" }}>Critical Industries</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="max-w-md">
            <p className="text-[17px] leading-[1.85]" style={{ color: "var(--t-muted)" }}>
              Texas Technical Services delivers precision-engineered solutions across flow measurement,
              inspection, and industrial automation — trusted by leading operators since 2008.
            </p>
          </FadeUp>
        </div>

        {/* Cards — charcoal-tinted glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.title} delay={0.08 + i * 0.1}>
              <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl overflow-hidden flex flex-col h-full"
                style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)", boxShadow: "var(--t-card-shadow)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--color-brand-red)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--t-card-border)")}
              >
                {/* Top accent */}
                <div className="h-[3px]" style={{ background: `linear-gradient(90deg, var(--color-brand-red), color-mix(in srgb, var(--color-brand-red) 25%, transparent))` }} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 shrink-0"
                    style={{ background: "color-mix(in srgb, var(--color-brand-red) 12%, var(--t-card-bg))", border: "1px solid color-mix(in srgb, var(--color-brand-red) 20%, transparent)" }}>
                    <svc.Icon className="w-6 h-6" strokeWidth={1.7} style={{ color: "var(--color-brand-red)" }} />
                  </div>
                  <span className="text-[11px] font-bold tracking-[2.5px] mb-2 block" style={{ color: "color-mix(in srgb, var(--color-brand-red) 50%, transparent)" }}>{svc.num}</span>
                  <h3 className="text-[21px] font-extrabold leading-snug mb-3" style={{ color: "var(--t-heading)" }}>{svc.title}</h3>
                  <div className="w-8 h-[2px] rounded-full mb-4" style={{ background: "color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }} />
                  <p className="text-[16px] leading-[1.9] flex-1" style={{ color: "var(--t-muted)" }}>{svc.desc}</p>
                  <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--t-border)" }}>
                    <Link href="/service/" className="inline-flex items-center gap-1.5 text-[15px] font-bold hover:gap-3 transition-all duration-200" style={{ color: "var(--color-brand-red)" }}>
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <FadeUp className="relative pb-10 lg:pb-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] shadow-xl" style={{ border: "1px solid var(--t-border)" }}>
              <Image src="/our-team/Oil-Gas.jpg" alt="Oil & Gas" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" quality={90} />
              <div className="absolute bottom-0 inset-x-0 h-20" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
            </div>
            <div className="absolute bottom-0 right-0 lg:-right-6 w-[46%] rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl" style={{ border: "3px solid var(--t-section-a)" }}>
              <Image src="/our-team/whatwedo.jpg" alt="What we do" fill sizes="30vw" className="object-cover" quality={90} />
            </div>
            <div className="absolute -top-4 -left-4 rounded-xl px-4 py-3 shadow-lg" style={{ background: "var(--color-brand-red)", boxShadow: "0 8px 24px color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }}>
              <p className="text-white text-[10px] font-bold tracking-[2px] uppercase leading-none">ISO 9001:2015</p>
              <p className="text-white/70 text-[11px] mt-1 leading-none">Certified · Est. 2008</p>
            </div>
          </FadeUp>
          <div>
            <FadeUp delay={0.08}>
              <div className="space-y-4 mb-8">
                {BODY.map((p, i) => <p key={i} className="text-[17px] leading-[1.85]" style={{ color: "var(--t-muted)" }}>{p}</p>)}
              </div>
            </FadeUp>
            <FadeUp delay={0.14}>
              <div className="grid grid-cols-2 gap-3 mb-9">
                {[{ num: "15+", label: "Years" }, { num: "200+", label: "Clients" }, { num: "8", label: "Industries" }, { num: "100%", label: "ISO Quality" }].map(s => (
                  <div key={s.label} className="rounded-xl px-5 py-4" style={{ background: "var(--t-stat-bg)", border: "1px solid var(--t-border)" }}>
                    <p className="text-[1.7rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{s.num}</p>
                    <p className="text-[13px] mt-1.5 font-semibold" style={{ color: "var(--t-muted)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <Link href="/contacts/" className="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-xl text-[15px] hover:-translate-y-0.5 transition-all"
                  style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 20px color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}>
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/service/" className="inline-flex items-center gap-2 font-semibold px-7 py-4 rounded-xl text-[15px] border transition-all"
                  style={{ color: "var(--t-heading)", borderColor: "var(--t-border)", background: "var(--t-stat-bg)" }}>
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
