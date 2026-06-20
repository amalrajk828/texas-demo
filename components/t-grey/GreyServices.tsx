"use client";
/* Kit D — Grey: light section-b, white cards with grey border, red accent */
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

export default function GreyServices() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--g-section-b)" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
              <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>Our Services</span>
            </div>
            <h2 className="text-[2.8rem] sm:text-[3.4rem] font-black leading-[1.05] tracking-tight" style={{ color: "var(--g-heading)" }}>
              What We Offer
            </h2>
          </div>
          <p className="max-w-md text-[17px] leading-[1.85]" style={{ color: "var(--g-muted)" }}>
            Extensive expertise in custody metering, industrial automation, and inspection & testing — since 2008.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.title} delay={0.1 + i * 0.1}>
              <motion.div whileHover={{ y: -5, boxShadow: "0 16px 48px rgba(0,0,0,0.13)", transition: { duration: 0.2 } }}
                className="group relative rounded-2xl flex flex-col h-full"
                style={{
                  background: "var(--g-card-bg)",
                  border: "1px solid var(--g-card-border)",
                  boxShadow: "var(--g-card-shadow)",
                }}
              >
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-full"
                    style={{ color: "var(--g-muted)", background: "var(--g-stat-bg)", border: "1px solid var(--g-border)" }}>
                    {svc.tag}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "var(--g-stat-bg)", border: "1px solid var(--g-border)" }}>
                    <svc.Icon className="w-6 h-6" strokeWidth={1.6} style={{ color: "var(--g-muted)" }} />
                  </div>
                  <p className="text-[11px] font-bold tracking-[3px] mb-3" style={{ color: "var(--g-muted)" }}>0{i + 1}</p>
                  <h3 className="text-[23px] font-black leading-snug mb-3 pr-8 tracking-tight" style={{ color: "var(--g-heading)" }}>{svc.title}</h3>
                  <div className="w-10 h-[2px] rounded-full mb-4" style={{ background: "var(--g-border)" }} />
                  <p className="text-[16px] leading-[1.9] flex-1 font-medium" style={{ color: "var(--g-muted)" }}>{svc.body}</p>
                  <div className="mt-7 pt-5 border-t" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
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
            style={{ color: "var(--g-heading)", borderColor: "var(--g-border)", background: "var(--g-card-bg)", boxShadow: "var(--g-card-shadow)" }}>
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
