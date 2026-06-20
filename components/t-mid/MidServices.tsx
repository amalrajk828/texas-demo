"use client";
/* Kit B — Mid: grey-tinted section, charcoal card borders, warm industrial feel */
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, FlaskConical, Cpu, ArrowRight } from "lucide-react";

const SERVICES = [
  { Icon: Gauge,        title: "Flow Measurement & Control System Solutions", body: "Metering control system upgrades, maintenance, and validation for custody metering systems. Ensuring your metering operates accurately to API, AGA, and ISO standards.", href: "/service/flow-measurement-solutions/", tag: "Metering" },
  { Icon: FlaskConical, title: "Inspection & Testing",                        body: "Comprehensive inspection, non-destructive testing, functional testing and certification across all industrial sectors. Full ISO 14001:2015 and 45001:2018 compliance.", href: "/service/inspection-testing/",          tag: "NDT & QA" },
  { Icon: Cpu,          title: "Industrial Process Automation Solutions",     body: "Control system design, PLC programming, SCADA integration, and HMI development — optimising operations across oil & gas, power, and manufacturing plants.", href: "/service/industrial-automation/",        tag: "Automation" },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function MidServices() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--t-section-b)" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--t-border)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "var(--t-border)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
              <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>Our Services</span>
            </div>
            <h2 className="text-[2.8rem] sm:text-[3.4rem] font-black leading-[1.05] tracking-tight" style={{ color: "var(--t-heading)" }}>
              What We Offer
            </h2>
          </div>
          <p className="max-w-md text-[17px] leading-[1.85]" style={{ color: "var(--t-muted)" }}>
            Extensive expertise in custody metering, industrial automation, and inspection & testing — since 2008.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.title} delay={0.1 + i * 0.1}>
              <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl overflow-hidden flex flex-col h-full"
                style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)", boxShadow: "var(--t-card-shadow)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.18), 0 0 0 1.5px var(--color-brand-red)`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "var(--t-card-shadow)")}
              >
                {/* Left accent bar on hover */}
                <div className="absolute top-0 left-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"
                  style={{ background: "var(--color-brand-red)" }} />

                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-full"
                    style={{ color: "var(--color-brand-red)", background: "color-mix(in srgb, var(--color-brand-red) 10%, var(--t-card-bg))", border: "1px solid color-mix(in srgb, var(--color-brand-red) 22%, transparent)" }}>
                    {svc.tag}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "color-mix(in srgb, var(--color-brand-red) 10%, var(--t-card-bg))", border: "1px solid color-mix(in srgb, var(--color-brand-red) 18%, transparent)" }}>
                    <svc.Icon className="w-6 h-6" strokeWidth={1.7} style={{ color: "var(--color-brand-red)" }} />
                  </div>
                  <p className="text-[10px] font-bold tracking-[3px] mb-2" style={{ color: "color-mix(in srgb, var(--color-brand-red) 45%, transparent)" }}>0{i + 1}</p>
                  <h3 className="text-[22px] font-extrabold leading-snug mb-3 pr-8" style={{ color: "var(--t-heading)" }}>{svc.title}</h3>
                  <div className="w-10 h-[2px] rounded-full mb-4" style={{ background: "color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }} />
                  <p className="text-[17px] leading-[1.9] flex-1" style={{ color: "var(--t-muted)" }}>{svc.body}</p>
                  <div className="mt-7 pt-5 border-t" style={{ borderColor: "var(--t-border)" }}>
                    <Link href={svc.href} className="inline-flex items-center gap-1.5 text-[14px] font-bold hover:gap-3 transition-all duration-200" style={{ color: "var(--color-brand-red)" }}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4} className="text-center">
          <Link href="/service/" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-[15px] border hover:-translate-y-0.5 transition-all"
            style={{ color: "var(--t-heading)", borderColor: "var(--t-border)", background: "var(--t-card-bg)", boxShadow: "var(--t-card-shadow)" }}>
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
