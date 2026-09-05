"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, ShieldCheck } from "lucide-react";
import { ThemePrimaryLink } from "@/components/ThemeButton";

const HIGHLIGHTS = [
  { Icon: Users,       label: "Expert Engineers"        },
  { Icon: Award,       label: "ISO 9001 · 14001 · 45001 Certified" },
  { Icon: ShieldCheck, label: "UASL & Accurate Certified" },
];

export default function OurTeam() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--color-brand-navy)" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-brand-red) 30%, transparent), transparent)" }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, color-mix(in srgb, var(--color-brand-red) 6%, transparent) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — image */}
          <div className="relative fade-up">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/15"
              style={{ background: "var(--color-brand-navy)" }}
            >
              <Image
                src="/our-team/our_team.webp"
                alt="Texas Technical Services team of certified engineers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                quality={100}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: "linear-gradient(to top, color-mix(in srgb, var(--color-brand-navy) 40%, transparent), transparent)" }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl px-6 py-5 shadow-xl flex items-center gap-4 border fade-up d4"
              style={{
                background: "var(--color-brand-navy-mid)",
                borderColor: "color-mix(in srgb, var(--color-brand-red) 20%, transparent)",
                boxShadow: "0 8px 32px color-mix(in srgb, var(--color-brand-navy) 60%, transparent)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "color-mix(in srgb, var(--color-brand-red) 15%, transparent)" }}
              >
                <Users className="w-5 h-5" strokeWidth={1.8} style={{ color: "var(--color-brand-red)" }} />
              </div>
              <div>
                <p className="text-[1.4rem] font-black leading-none text-white">50+</p>
                <p className="text-[13px] text-white/70 font-medium mt-0.5 tracking-wide">Certified Engineers</p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-5 -left-3 lg:-left-6 rounded-xl px-4 py-3 shadow-lg fade-up d3"
              style={{
                background: "linear-gradient(to bottom right, var(--color-brand-red), var(--color-brand-red-dark))",
                boxShadow: "0 8px 24px color-mix(in srgb, var(--color-brand-red) 25%, transparent)",
              }}
            >
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">Our Team</p>
              <p className="text-white/70 text-[11px] mt-1 font-medium tracking-wide leading-none">Est. 2008</p>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="lg:pl-4 pb-6 lg:pb-0">
            <div className="fade-up d1">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-6 h-px" style={{ background: "#0891B2" }} />
                <span className="text-[10px] font-bold tracking-[3.5px] uppercase" style={{ color: "#0891B2" }}>
                  Our Team
                </span>
              </div>
            </div>

            <div className="fade-up d1">
              <h2
                className="text-[clamp(2rem,4vw,2.8rem)] font-bold leading-[1.12] mb-6 text-white"
              >
                Meet the people behind the scenes
              </h2>
            </div>

            <div className="fade-up d2">
              <p className="text-white/70 text-[15px] leading-[1.85] mb-8">
                Our team comprises highly trained engineers with specialized knowledge in
                Custody Metering Systems, Industrial Automation, and Inspection &amp; Testing.
                They possess deep understanding of industry standards, regulations, and best
                practices, enabling them to design, implement, and maintain sophisticated
                systems tailored to our clients&apos; unique requirements.
              </p>
            </div>

            <div className="fade-up d2">
              <div className="flex flex-wrap gap-3 mb-10">
                {HIGHLIGHTS.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-lg px-4 py-2.5 border"
                    style={{
                      background: "color-mix(in srgb, var(--color-brand-red) 8%, transparent)",
                      borderColor: "color-mix(in srgb, var(--color-brand-red) 20%, transparent)",
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" strokeWidth={2} style={{ color: "var(--color-brand-red)" }} />
                    <span className="text-[13px] font-semibold tracking-wide text-white/80">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up d3">
              <div className="flex flex-wrap items-center gap-4">
                <ThemePrimaryLink href="/about-us/">
                  Know More <ArrowRight className="w-4 h-4" />
                </ThemePrimaryLink>
                <span className="text-[14px] text-white/35 font-medium">Learn more about us →</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
