"use client";
/* Kit D — Grey: team section, white cards on grey background */
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  { Icon: Users,       label: "Expert Engineers", badge: null },
  { Icon: Award,       label: "ISO 9001:2015 Certified", badge: "/about/cert-iso9001.png" },
  { Icon: ShieldCheck, label: "ISO 14001:2015", badge: "/about/cert-iso14001.png" },
  { Icon: ShieldCheck, label: "ISO 45001:2018", badge: "/about/cert-iso45001.png" },
  { Icon: ShieldCheck, label: "UASL Accredited", badge: "/about/cert-uasl.png" },
  { Icon: ShieldCheck, label: "Accurate Certified", badge: "/about/cert-accurate-white.png" },
];

export default function GreyTeam() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#000000]">

      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div className="absolute -top-48 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--color-brand-red) 4%, transparent), transparent 70%)" }} />

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
                style={{ background: "color-mix(in srgb, var(--color-brand-red) 8%, white)", border: "1px solid color-mix(in srgb, var(--color-brand-red) 16%, transparent)" }}>
                <Users className="w-5 h-5" strokeWidth={1.8} style={{ color: "var(--color-brand-red)" }} />
              </div>
              <div>
                <p className="text-[1.5rem] font-black leading-none" style={{ color: "var(--g-heading)" }}>50+</p>
                <p className="text-[13px] font-medium mt-0.5" style={{ color: "var(--g-muted)" }}>Certified Engineers</p>
              </div>
            </div>

            <div
              className="absolute -top-5 -left-3 lg:-left-3 rounded-xl px-4 py-3 shadow-lg fade-up"
              style={{ background: "#8a302f", boxShadow: "0 8px 24px rgba(138, 48, 47, 0.35)" }}>
              <p className="text-white text-[10px] font-bold tracking-[2px] uppercase leading-none">Our Team</p>
              <p className="text-white/70 text-[11px] mt-1 leading-none">Est. 2008</p>
            </div>
          </div>

          <div className="lg:pl-4">
            <div className="fade-up d1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] rounded-full" style={{ background: "#8a302f" }} />
                <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "#8a302f" }}>Our Team</span>
              </div>
            </div>
            <div className="fade-up d1">
              <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-black leading-[1.08] mb-5 tracking-tight" style={{ color: "#F9FAFB" }}>
                Who are the specialists behind every project?
              </h2>
            </div>
            <div className="fade-up d2">
              <p className="text-[17px] leading-[1.85] mb-8" style={{ color: "var(--g-muted)" }}>
                Highly trained engineers with specialised knowledge in Custody Metering Systems, Industrial Automation,
                and Inspection & Testing — with deep understanding of industry standards and best practices.
              </p>
            </div>
            <div className="fade-up d2">
              <div className="flex flex-wrap gap-3 mb-9">
                {HIGHLIGHTS.map(({ Icon, label, badge }) => {
                  const pill = (
                    <>
                      {badge ? (
                        <div className="relative w-8 h-8 shrink-0">
                          <Image src={badge} alt={label} fill className="object-contain" sizes="32px" />
                        </div>
                      ) : (
                        <Icon className="w-4 h-4" strokeWidth={2} style={{ color: "var(--color-brand-red)" }} />
                      )}
                      <span className="text-[14px] font-semibold" style={{ color: "var(--g-heading)" }}>{label}</span>
                    </>
                  );
                  const wrapperClass = "flex items-center gap-2.5 rounded-lg px-4 py-2.5";
                  const wrapperStyle = { background: "var(--g-card-bg)", border: "1px solid var(--g-card-border)", boxShadow: "var(--g-card-shadow)" };
                  return badge ? (
                    <Link key={label} href="/certifications/" className={wrapperClass} style={wrapperStyle}>
                      {pill}
                    </Link>
                  ) : (
                    <div key={label} className={wrapperClass} style={wrapperStyle}>
                      {pill}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="fade-up d3">
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/about-us/" className="inline-flex items-center gap-2 text-white font-bold px-7 py-4 rounded-xl text-[15px] hover:-translate-y-0.5 transition-all"
                  style={{ background: "#8a302f", boxShadow: "0 4px 20px rgba(138, 48, 47, 0.35)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#6e2624")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#8a302f")}>
                  Know More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
