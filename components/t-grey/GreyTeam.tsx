"use client";
/* Kit D — Grey: team section, white cards on grey background */
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Users, Award, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  { Icon: Users,       label: "Expert Engineers" },
  { Icon: Award,       label: "ISO 9001:2015 Certified" },
  { Icon: ShieldCheck, label: "Industry Compliance" },
];

function FadeUp({ children, delay = 0, className = "", dir = "up" }: { children: React.ReactNode; delay?: number; className?: string; dir?: "up" | "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const init = dir === "left" ? { opacity: 0, x: -40 } : dir === "right" ? { opacity: 0, x: 40 } : { opacity: 0, y: 28 };
  return (
    <motion.div ref={ref} initial={init} animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function GreyTeam() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#000000]">

      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div className="absolute -top-48 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-brand-red) 4%, transparent), transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <FadeUp dir="left" className="relative pb-10 lg:pb-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-2xl" style={{ border: "1px solid var(--g-border)" }}>
              <Image src="/our-team/our_team.png" alt="Our team" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" quality={90} loading="eager" />
              <div className="absolute bottom-0 inset-x-0 h-28" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)" }} />
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl px-6 py-5 flex items-center gap-4"
              style={{ background: "var(--g-card-bg)", border: "1px solid var(--g-card-border)", boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "color-mix(in srgb, var(--color-brand-red) 8%, white)", border: "1px solid color-mix(in srgb, var(--color-brand-red) 16%, transparent)" }}>
                <Users className="w-5 h-5" strokeWidth={1.8} style={{ color: "var(--color-brand-red)" }} />
              </div>
              <div>
                <p className="text-[1.5rem] font-black leading-none" style={{ color: "var(--g-heading)" }}>50+</p>
                <p className="text-[13px] font-medium mt-0.5" style={{ color: "var(--g-muted)" }}>Certified Engineers</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.5 }}
              className="absolute -top-5 -left-3 lg:-left-3 rounded-xl px-4 py-3 shadow-lg"
              style={{ background: "var(--color-brand-red)", boxShadow: "0 8px 24px color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }}>
              <p className="text-white text-[10px] font-bold tracking-[2px] uppercase leading-none">Our Team</p>
              <p className="text-white/70 text-[11px] mt-1 leading-none">Est. 2008</p>
            </motion.div>
          </FadeUp>

          <div className="lg:pl-4">
            <FadeUp delay={0.05}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
                <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>Our Team</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-black leading-[1.08] mb-5 tracking-tight" style={{ color: "#F9FAFB" }}>
                Who are the specialists{" "}
                <span style={{ color: "var(--color-brand-red)" }}>behind every project?</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="text-[17px] leading-[1.85] mb-8" style={{ color: "var(--g-muted)" }}>
                Highly trained engineers with specialised knowledge in Custody Metering Systems, Industrial Automation,
                and Inspection & Testing — with deep understanding of industry standards and best practices.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <div className="flex flex-wrap gap-3 mb-9">
                {HIGHLIGHTS.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 rounded-lg px-4 py-2.5"
                    style={{ background: "var(--g-card-bg)", border: "1px solid var(--g-card-border)", boxShadow: "var(--g-card-shadow)" }}>
                    <Icon className="w-4 h-4" strokeWidth={2} style={{ color: "var(--color-brand-red)" }} />
                    <span className="text-[14px] font-semibold" style={{ color: "var(--g-heading)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.28}>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/about-us/" className="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-xl text-[15px] hover:-translate-y-0.5 transition-all"
                  style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 20px color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}>
                  Know More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about-us/" className="text-[15px] font-semibold" style={{ color: "var(--g-muted)" }}>
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
