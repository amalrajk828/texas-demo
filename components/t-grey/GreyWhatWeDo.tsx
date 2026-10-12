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

// Stat definitions: value = numeric target, suffix = trailing string
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
        <div className="flex flex-col text-center items-center gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-6 h-px" style={{ background: "#8a302f" }} />
              <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "#8a302f" }}>What We Do</span>
              <span className="w-6 h-px" style={{ background: "#8a302f" }} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="text-[1.6rem] sm:text-[2.2rem] lg:text-[2.8rem] xl:text-[3.4rem] font-black leading-[1.08] tracking-tight block text-[#111827]"
            >
              What precision solutions do we deliver for critical industries?
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="lg:pb-1 mx-auto"
          >
            <p className="text-[16px] sm:text-[17px] leading-[1.85] text-[#4B5563]">
              Texas Technical Services delivers precision-engineered solutions across flow measurement,
              inspection, and industrial automation — trusted by leading operators since 2008.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.title} delay={0.08 + i * 0.1}>
              <div className="relative group h-full">
                {/* Soft card-level ambient glow */}
                <div
                  className={`absolute w-52 h-52 rounded-full pointer-events-none blur-[45px] transition-opacity duration-500 opacity-50 group-hover:opacity-80 ${
                    i % 2 === 0 ? "-top-6 -right-6" : "-bottom-6 -left-6"
                  }`}
                  style={{
                    background:
                      i % 2 === 0
                        ? "radial-gradient(circle, rgba(138,48,47,0.12) 0%, rgba(255,255,255,0.4) 50%, transparent 70%)"
                        : "radial-gradient(circle, rgba(138,48,47,0.10) 0%, rgba(255,255,255,0.4) 50%, transparent 70%)",
                  }}
                />

                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-[24px] flex flex-col h-full overflow-hidden cursor-pointer transition-all duration-300 group-hover:border-white/95"
                  style={{
                    background: "rgba(255, 255, 255, 0.28)",
                    backdropFilter: isMobile ? "none" : "blur(22px)",
                    WebkitBackdropFilter: isMobile ? "none" : "blur(22px)",
                    border: "1px solid rgba(255, 255, 255, 0.65)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.85)",
                  }}
                >
                  {/* Subtle top edge light reflection strip */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
                  
                  {/* Hover background brightening overlay */}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10 p-8 flex flex-col flex-1">
                    {/* Top Header Row: Glassy Icon box top-left, Monospace Number top-right */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#8a302f]/[0.08] border border-[#8a302f]/20 shadow-xs backdrop-blur-md transition-colors group-hover:bg-[#8a302f]/[0.14] group-hover:border-[#8a302f]/35">
                        <svc.Icon className="w-6 h-6 text-[#8a302f]" strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-[13px] font-bold tracking-[3px] text-[#8a302f] bg-[#8a302f]/[0.08] px-2.5 py-1 rounded-xl border border-[#8a302f]/20 shadow-xs">
                        {svc.num}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111827] leading-tight mb-3 tracking-tight">
                      {svc.title}
                    </h3>

                    {/* Body text */}
                    <p className="text-[15px] leading-[1.75] flex-1 font-normal text-[#4B5563] mb-8">
                      {svc.desc}
                    </p>

                    {/* Learn More Link */}
                    <div className="mt-auto pt-4 border-t border-black/[0.06]">
                      <Link
                        href="/services/"
                        className="inline-flex items-center gap-2 text-[14px] font-semibold text-slate-600 hover:text-[#8a302f] no-underline whitespace-nowrap transition-all duration-200"
                      >
                        Learn more about our services{" "}
                        <ArrowRight className="w-4 h-4 text-[#8a302f] transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <FadeUp className="relative pb-12 pr-12 lg:pb-16 lg:pr-16">
            <div className="relative w-full max-w-[540px] mx-auto lg:max-w-none">
              
              {/* Large Image Frame (Refinery) */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-black/[0.05]" 
                style={{ aspectRatio: "16/11" }}
              >
                <Image 
                  src="/our-team/Oil-Gas.jpg" 
                  alt="Oil & Gas" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                  className="object-cover" 
                  quality={90} 
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" 
                />
                
                {/* Red corner accent matching the hero image panel */}
                <div className="absolute top-0 left-0 w-12 h-[2px]" style={{ background: "var(--color-brand-red)" }} />
                <div className="absolute top-0 left-0 w-[2px] h-12" style={{ background: "var(--color-brand-red)" }} />
              </div>

              {/* Smaller Overlapping Image Frame (Worker in PPE) */}
              <div 
                className="absolute bottom-[-10%] right-[-10%] w-[44%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                style={{ aspectRatio: "4/3" }}
              >
                <Image 
                  src="/our-team/whatwedo.jpg" 
                  alt="What we do" 
                  fill 
                  sizes="(max-width: 1024px) 30vw, 15vw" 
                  className="object-cover" 
                  quality={90} 
                />
              </div>

              {/* Frosted Glass Badge - ISO 9001:2015 */}
              <div 
                className="absolute top-4 left-4 rounded-xl px-4 py-3 shadow-lg z-10 flex items-center gap-3" 
                style={{ 
                  background: "rgba(138, 48, 47, 0.35)", 
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
                }}
              >
                <Link href="/certifications/" className="relative w-16 h-16 shrink-0 block">
                  <Image src="/about/cert-iso9001.png" alt="ISO 9001:2015" fill className="object-contain" sizes="64px" />
                </Link>
                <div>
                  <p className="text-white text-[10px] font-bold tracking-[2px] uppercase leading-none">5 Certifications</p>
                  <p className="text-white/70 text-[11px] mt-1 leading-none">ISO · UASL · Accurate</p>
                </div>
              </div>

            </div>
          </FadeUp>
          <div>
            <FadeUp delay={0.08}>
              <div className="space-y-4 mb-8" style={{ color: "#5C6270" }}>
                {BODY.map((p, i) => <p key={i} className="text-[17px] leading-[1.85]" style={{ color: "#5C6270" }}>{p}</p>)}
              </div>
            </FadeUp>
            <FadeUp delay={0.14}>
              {/* Stats with scroll-triggered count-up */}
              <div ref={statRef} className="grid grid-cols-2 gap-3 mb-9">
                {STATS.map((s, i) => (
                  <StatCard key={s.label} {...s} index={i} started={statInView} />
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contacts/" className="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-xl text-[15px] transition-colors"
                    style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 20px color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}>
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/services/" className="inline-flex items-center gap-2 font-semibold px-7 py-4 rounded-xl text-[15px] border transition-colors"
                    style={{ color: "#111827", borderColor: "rgba(255,255,255,0.65)", background: "rgba(255,255,255,0.35)", backdropFilter: isMobile ? "none" : "blur(18px)", WebkitBackdropFilter: isMobile ? "none" : "blur(18px)" }}>
                    Our Services <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
