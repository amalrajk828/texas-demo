"use client";
/* Theme V5: GreyTeam styled to Home V2 design system
   Tokens: --bg (#0F1117), --border-default, --border-active (#E53935), --accent (#E53935)
*/
import Image from "next/image";
import Link from "next/link";
import { Users, Award, ShieldCheck, ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  { prefix: "/01", Icon: Users,       label: "Expert Engineers", badge: null },
  { prefix: "/02", Icon: Award,       label: "ISO 9001:2015 Certified", badge: "/about/cert-iso9001.png" },
  { prefix: "/03", Icon: ShieldCheck, label: "ISO 14001:2015", badge: "/about/cert-iso14001.png" },
  { prefix: "/04", Icon: ShieldCheck, label: "ISO 45001:2018", badge: "/about/cert-iso45001.png" },
  { prefix: "/05", Icon: ShieldCheck, label: "UASL Accredited", badge: "/about/cert-uasl.png" },
  { prefix: "/06", Icon: ShieldCheck, label: "Accurate Certified", badge: "/about/cert-accurate-white.png" },
];

export default function GreyTeam() {
  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden v5-grid-bg" 
      style={{ 
        backgroundColor: "var(--bg, #0F1117)",
        borderTop: "1px solid var(--border-default, rgba(255, 255, 255, 0.08))"
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div className="relative pb-10 lg:pb-0">
            <div className="relative rounded-[6px] overflow-hidden aspect-[4/5] lg:aspect-[3/4] border border-white/[0.12]">
              <Image 
                src="/our-team/our_team.webp" 
                alt="Our team" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw" 
                className="object-cover object-top" 
                quality={80} 
                loading="lazy" 
              />
              <div className="absolute bottom-0 inset-x-0 h-32" style={{ background: "linear-gradient(to top, rgba(15,17,23,0.9), transparent)" }} />
            </div>

            {/* Corner badge stat */}
            <div
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-[6px] px-6 py-5 flex items-center gap-4 border"
              style={{
                backgroundColor: "var(--card, #1E2330)",
                borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))",
              }}
            >
              <span className="v5-corner-indicator opacity-60" />
              <div
                className="w-12 h-12 rounded-[4px] flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(229, 57, 53, 0.12)",
                  border: "1px solid rgba(229, 57, 53, 0.35)",
                }}
              >
                <Users className="w-5 h-5 text-[var(--accent)]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[1.6rem] font-bold leading-none text-white flex items-baseline">
                  <span>50</span>
                  <span className="text-[var(--accent)] ml-0.5">+</span>
                </p>
                <p className="text-[12px] font-mono tracking-[0.1em] uppercase mt-1 text-[#9CA3AF]">Certified Engineers</p>
              </div>
            </div>

            {/* Top-left small badge */}
            <div
              className="absolute -top-4 -left-3 lg:-left-3 rounded-[4px] px-4 py-2.5 shadow-xl border border-[var(--border-active)]"
              style={{
                backgroundColor: "var(--accent, #E53935)",
              }}
            >
              <p className="text-white text-[10px] font-mono font-bold tracking-[0.15em] uppercase leading-none">OUR TEAM</p>
              <p className="text-white/90 text-[11px] font-mono mt-1 leading-none">EST. 2008</p>
            </div>
          </div>

          <div className="lg:pl-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] mb-4 border border-white/[0.08] bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)]" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-white/80">
                OUR TEAM
              </span>
            </div>

            <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold leading-[1.08] mb-5 tracking-tight text-white">
              Who are the{" "}
              <span style={{ color: "var(--accent, #E53935)" }}>
                specialists
              </span>{" "}
              behind every project?
            </h2>

            <p className="text-[16px] leading-relaxed mb-8 text-[#9CA3AF]">
              Highly trained engineers with specialised knowledge in Custody Metering Systems, Industrial Automation,
              and Inspection &amp; Testing — with deep understanding of industry standards and best practices.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {HIGHLIGHTS.map((h) => {
                const { Icon, badge } = h;
                const content = (
                  <div
                    className="p-3.5 rounded-[6px] flex flex-col items-center text-center gap-2 border relative group transition-all duration-200 h-full"
                    style={{ 
                      backgroundColor: "var(--card, #1E2330)",
                      borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))"
                    }}
                  >
                    <span className="font-mono text-[10px] font-bold text-[var(--accent)]">{h.prefix}</span>
                    {badge ? (
                      <div className="relative w-7 h-7 shrink-0">
                        <Image src={badge} alt={h.label} fill className="object-contain" sizes="28px" />
                      </div>
                    ) : (
                      <Icon className="w-5 h-5 text-[var(--accent)]" strokeWidth={1.8} />
                    )}
                    <p className="text-[11px] font-mono tracking-[0.05em] uppercase text-white/90 font-medium leading-tight">{h.label}</p>
                  </div>
                );

                return badge ? (
                  <Link key={h.label} href="/certifications/" className="block hover:-translate-y-0.5 transition-transform">
                    {content}
                  </Link>
                ) : (
                  <div key={h.label}>
                    {content}
                  </div>
                );
              })}
            </div>

            <Link
              href="/about-us/"
              className="v5-btn-primary"
            >
              <span>Know More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
