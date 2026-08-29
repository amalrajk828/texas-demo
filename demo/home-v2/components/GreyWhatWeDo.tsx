"use client";
/* Kit D — Grey: light grey sections, white cards, dark charcoal text, red accents */
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Gauge, FlaskConical, Cpu } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";
import { useIsMobile } from "@/hooks/useIsMobile";

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

const STATS = [
  { value: 18,  suffix: "+", label: "Years" },
  { value: 200, suffix: "+", label: "Clients" },
  { value: 8,   suffix: "",  label: "Industries" },
  { value: 100, suffix: "%", label: "ISO Quality" },
];

function useLiquidCounter(target: number, started: boolean, delay: number) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 28, damping: 18, mass: 1.2 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => motionVal.set(target), delay);
    return () => clearTimeout(t);
  }, [started, target, delay, motionVal]);
  useEffect(() => display.on("change", (v) => setCount(v)), [display]);
  return count;
}

function StatCard({
  value, suffix, label, index, started,
}: { value: number; suffix: string; label: string; index: number; started: boolean }) {
  const count = useLiquidCounter(value, started, index * 160);
  const isMobile = useIsMobile();
  return (
    <div
      className="relative px-5 py-4 w-full h-full rounded-2xl overflow-hidden transition-all duration-300 group"
      style={{
        background: "rgba(255, 255, 255, 0.35)",
        backdropFilter: isMobile ? "none" : "blur(18px)",
        WebkitBackdropFilter: isMobile ? "none" : "blur(18px)",
        border: "1px solid rgba(255, 255, 255, 0.65)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
      }}
    >
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <p className="relative z-10 text-[1.7rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>
        {count}{suffix}
      </p>
      <p className="relative z-10 text-[13px] mt-1.5 font-semibold text-[#4B5563]">{label}</p>
    </div>
  );
}

export default function GreyWhatWeDo() {
  const statRef = useRef<HTMLDivElement>(null);
  const statInView = useInView(statRef, { once: true, margin: "-60px" });
  const isMobile = useIsMobile();
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)" }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div className="flex flex-col max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-10 h-[3px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
              <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>What We Do</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-[1.8rem] sm:text-[2.8rem] lg:text-[3.4rem] font-black leading-[1.05] tracking-tight"
              style={{ color: "#111827" }}
            >
              How do we engineer flow measurement and automation excellence?
            </motion.h2>
          </div>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 font-bold text-[14px] hover:gap-3 transition-all duration-200 shrink-0 mb-1"
            style={{ color: "var(--color-brand-red)" }}
          >
            Explore all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <FadeUp delay={0.1} className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              {BODY.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-[#4B5563] font-normal">{p}</p>
              ))}
            </div>

            <div ref={statRef} className="grid grid-cols-2 gap-3 pt-2">
              {STATS.map((s, i) => (
                <StatCard
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  index={i}
                  started={statInView}
                />
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="lg:col-span-4 flex flex-col justify-center">
            <div
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-red-900/10 group"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.9)",
              }}
            >
              <Image
                src="/our-team/our_team.webp"
                alt="Texas Technical Services operations"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                quality={85}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.1) 40%, transparent 70%)" }}
              />
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white z-10">
                <div>
                  <span className="text-[10px] font-bold tracking-[2px] uppercase text-white/80">Kuwait &amp; UAE</span>
                  <p className="text-[16px] font-bold leading-tight">Field Engineering &amp; Operations</p>
                </div>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-md"
                  style={{ background: "rgba(255, 255, 255, 0.2)", border: "1px solid rgba(255, 255, 255, 0.4)" }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.3} className="lg:col-span-4 flex flex-col justify-between gap-3">
            {SERVICES.map((s, i) => {
              const { Icon } = s;
              return (
                <BorderGlow
                  key={s.num}
                  borderRadius={24}
                  edgeSensitivity={30}
                  className="w-full h-full"
                >
                  <div
                    className="relative flex flex-col justify-between p-6 sm:p-7 rounded-[24px] overflow-hidden transition-all duration-300 group h-full cursor-pointer"
                    style={{
                      background: "rgba(255, 255, 255, 0.35)",
                      backdropFilter: isMobile ? "none" : "blur(18px)",
                      WebkitBackdropFilter: isMobile ? "none" : "blur(18px)",
                      border: "1px solid rgba(255, 255, 255, 0.65)",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative z-10 flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                          style={{
                            background: "rgba(255, 255, 255, 0.6)",
                            border: "1px solid rgba(255, 255, 255, 0.8)",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                          }}
                        >
                          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ color: "var(--color-brand-red)" }} />
                        </div>
                        <span className="text-[12px] font-bold tracking-widest text-[#4B5563]">{s.num}</span>
                      </div>
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        style={{ background: "rgba(255, 255, 255, 0.5)", border: "1px solid rgba(255, 255, 255, 0.7)" }}
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#4B5563]" />
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-[16px] font-bold leading-snug mb-1.5 transition-colors duration-200 group-hover:text-red-600 text-[#111827]">
                        {s.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-[#4B5563] font-normal">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </BorderGlow>
              );
            })}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
