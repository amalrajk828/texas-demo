"use client";
/* Kit D — Grey: team section, dark background with peach-orange gradient heading */
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  { Icon: Users,       label: "Expert Engineers" },
  { Icon: Award,       label: "ISO 9001:2015 Certified" },
  { Icon: ShieldCheck, label: "Industry Compliance" },
];

export default function GreyTeam() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#000000]">
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div className="absolute -top-48 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232, 147, 90, 0.08), transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div className="relative pb-10 lg:pb-0 fade-up">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-2xl" style={{ border: "1px solid var(--g-border)" }}>
              <Image src="/our-team/our_team.webp" alt="Our team" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" quality={80} loading="lazy" />
              <div className="absolute bottom-0 inset-x-0 h-28" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)" }} />
            </div>

            <div
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl px-6 py-5 flex items-center gap-4 fade-up d4"
              style={{ background: "var(--g-card-bg)", border: "1px solid var(--g-card-border)", boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(232, 147, 90, 0.12)", border: "1px solid rgba(232, 147, 90, 0.25)" }}>
                <Users className="w-5 h-5" strokeWidth={1.8} style={{ color: "#E8935A" }} />
              </div>
              <div>
                <p className="text-[1.5rem] font-black leading-none" style={{ color: "var(--g-heading)" }}>50+</p>
                <p className="text-[13px] font-medium mt-0.5" style={{ color: "var(--g-muted)" }}>Certified Engineers</p>
              </div>
            </div>

            <div
              className="absolute -top-5 -left-3 lg:-left-3 rounded-xl px-4 py-3 shadow-lg fade-up"
              style={{ background: "linear-gradient(to right, #F0A868, #E8935A)", boxShadow: "0 8px 24px rgba(232, 147, 90, 0.35)" }}>
              <p className="text-white text-[10px] font-bold tracking-[2px] uppercase leading-none">Our Team</p>
              <p className="text-white/80 text-[11px] mt-1 leading-none">Est. 2008</p>
            </div>
          </div>

          <div className="lg:pl-4">
            <div className="fade-up d1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] rounded-full" style={{ background: "#E8935A" }} />
                <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "#E8935A" }}>Our Team</span>
              </div>
            </div>
            <div className="fade-up d1">
              <h2
                className="heading-gradient-peach text-[clamp(2.2rem,4.5vw,3.2rem)] font-black leading-[1.08] mb-5 tracking-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Who are the specialists behind every project?
              </h2>
            </div>
            <p className="text-[16px] leading-relaxed mb-8 fade-up d2" style={{ color: "var(--g-muted)" }}>
              Our team consists of certified engineers, NDT technicians, and automation specialists with decades of combined experience across Middle East energy, refining, and manufacturing operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {HIGHLIGHTS.map((h, i) => {
                const { Icon } = h;
                return (
                  <div key={h.label} className={`fade-up d${i + 2} p-4 rounded-xl flex flex-col items-center text-center gap-2`}
                    style={{ background: "var(--g-card-bg)", border: "1px solid var(--g-card-border)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(232, 147, 90, 0.12)" }}>
                      <Icon className="w-4 h-4" style={{ color: "#E8935A" }} strokeWidth={1.8} />
                    </div>
                    <span className="text-[12.5px] font-bold" style={{ color: "var(--g-heading)" }}>{h.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="fade-up d3">
              <Link href="/about-us/"
                className="inline-flex items-center gap-2 font-bold text-[14.5px] px-6 py-3.5 rounded-xl text-white transition-all duration-200 hover:gap-3"
                style={{ background: "linear-gradient(to right, #F0A868, #E8935A)", boxShadow: "0 4px 20px rgba(232, 147, 90, 0.35)" }}>
                About Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
