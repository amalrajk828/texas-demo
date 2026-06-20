"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Users, Award, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  { Icon: Users,       label: "Expert Engineers"        },
  { Icon: Award,       label: "ISO 9001:2015 Certified" },
  { Icon: ShieldCheck, label: "Industry Compliance"     },
];

function FadeUp({ children, delay = 0, className = "", direction = "up" }: {
  children: React.ReactNode; delay?: number; className?: string; direction?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial = direction === "left" ? { opacity: 0, x: -40 } : direction === "right" ? { opacity: 0, x: 40 } : { opacity: 0, y: 28 };
  return (
    <motion.div ref={ref} initial={initial} animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function LightTeam() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--color-section-alt)" }}>

      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />

      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-brand-red) 6%, transparent) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — image */}
          <FadeUp delay={0} direction="left" className="relative pb-10 lg:pb-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-xl" style={{ background: "var(--color-border)" }}>
              <Image src="/our-team/our_team.png" alt="Our team" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" quality={100} />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: "linear-gradient(to top, color-mix(in srgb, var(--color-section-alt) 60%, transparent), transparent)" }} />
            </div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl px-6 py-5 flex items-center gap-4 shadow-xl"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.98)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 0 0 1px var(--color-border)",
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "color-mix(in srgb, var(--color-brand-red) 10%, white)", border: "1px solid color-mix(in srgb, var(--color-brand-red) 15%, transparent)" }}>
                <Users className="w-5 h-5" strokeWidth={1.8} style={{ color: "var(--color-brand-red)" }} />
              </div>
              <div>
                <p className="text-[1.4rem] font-black leading-none" style={{ color: "var(--color-text-primary)" }}>50+</p>
                <p className="text-[13px] font-medium mt-0.5 tracking-wide" style={{ color: "var(--color-text-muted)" }}>Certified Engineers</p>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: -12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-5 -left-3 lg:-left-6 rounded-xl px-4 py-3 shadow-lg"
              style={{
                background: "var(--color-brand-red)",
                boxShadow: "0 8px 24px color-mix(in srgb, var(--color-brand-red) 30%, transparent)",
              }}
            >
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">Our Team</p>
              <p className="text-white/70 text-[11px] mt-1 font-medium leading-none">Est. 2008</p>
            </motion.div>
          </FadeUp>

          {/* RIGHT — content */}
          <div className="lg:pl-4">
            <FadeUp delay={0.05}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
                <span className="text-[11px] font-bold tracking-[3px] uppercase" style={{ color: "var(--color-brand-red)" }}>Our Team</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-black leading-[1.08] mb-5 tracking-tight" style={{ color: "var(--color-text-primary)" }}>
                Meet the people{" "}
                <span style={{ color: "var(--color-brand-red)" }}>behind the scenes</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="text-[17px] leading-[1.85] mb-7" style={{ color: "var(--color-text-muted)" }}>
                Highly trained engineers with specialised knowledge in Custody Metering Systems, Industrial Automation,
                and Inspection & Testing — with deep understanding of industry standards and best practices.
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div className="flex flex-wrap gap-3 mb-9">
                {HIGHLIGHTS.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-lg px-4 py-2.5"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid var(--color-border)",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    }}>
                    <Icon className="w-3.5 h-3.5" strokeWidth={2} style={{ color: "var(--color-brand-red)" }} />
                    <span className="text-[14px] font-semibold tracking-wide" style={{ color: "var(--color-text-primary)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.28}>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/about-us/"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-lg text-[15px] transition-all hover:-translate-y-0.5 shadow-md"
                  style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 16px color-mix(in srgb, var(--color-brand-red) 30%, transparent)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}
                >
                  Know More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about-us/" className="text-[15px] font-semibold transition-colors" style={{ color: "var(--color-text-muted)" }}>
                  Learn more about us →
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
