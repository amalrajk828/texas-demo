"use client";
/* Kit D — Grey: Team — home-v2 layout with V3 Industrial Teal theme */
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Users, Award, ShieldCheck } from "lucide-react";

const PixelSnow = dynamic(() => import("@/components/PixelSnow"), { ssr: false });

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
    <section className="relative py-24 lg:py-32 overflow-hidden bg-black">
      {/* Animated pixel field reused from the main homepage Services section */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={150}
          speed={0.8}
          density={0.1}
          direction={125}
          brightness={0.8}
          variant="square"
        />
      </div>

      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border)" }} />
      <div
        className="absolute -top-48 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(23,112,126,0.25), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative pb-10 lg:pb-0 fade-up">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-2xl"
              style={{ border: "1px solid var(--g-border)" }}
            >
              <Image
                src="/our-team/our_team.webp"
                alt="Our team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                quality={80}
                loading="lazy"
              />
              <div
                className="absolute bottom-0 inset-x-0 h-28"
                style={{ background: "linear-gradient(to top, rgba(20,26,34,0.45), transparent)" }}
              />
            </div>

            {/* Bottom-right stat badge */}
            <div
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl px-6 py-5 flex items-center gap-4 fade-up d4"
              style={{
                background: "var(--g-card-bg, #232F3E)",
                border: "1px solid var(--g-card-border, rgba(255,255,255,0.09))",
                boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(23, 112, 126, 0.15)",
                  border: "1px solid rgba(23, 112, 126, 0.30)",
                }}
              >
                <Users className="w-5 h-5" style={{ color: "var(--primary, #17707E)" }} strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[1.5rem] font-black leading-none" style={{ color: "var(--g-heading)" }}>50+</p>
                <p className="text-[13px] font-medium mt-0.5" style={{ color: "var(--g-muted)" }}>Certified Engineers</p>
              </div>
            </div>

            {/* Top-left label badge */}
            <div
              className="absolute -top-5 -left-3 lg:-left-3 rounded-xl px-4 py-3 shadow-lg fade-up"
              style={{
                background: "var(--primary, #17707E)",
                boxShadow: "0 8px 24px rgba(23,112,126,0.35)",
              }}
            >
              <p className="text-white text-[10px] font-bold tracking-[2px] uppercase leading-none">OUR TEAM</p>
              <p className="text-white/70 text-[11px] mt-1 leading-none">EST. 2008</p>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:pl-4">
            <div className="fade-up d1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] rounded-full" style={{ background: "var(--primary, #17707E)" }} />
                <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--primary, #17707E)" }}>
                  OUR TEAM
                </span>
              </div>
            </div>

            <div className="fade-up d1">
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-black leading-[1.08] mb-5 tracking-tight"
                style={{ color: "var(--g-heading, #F4F9F9)" }}
              >
                Who are the specialists behind every project?
              </h2>
            </div>

            <p className="text-[16px] leading-relaxed mb-8 fade-up d2" style={{ color: "var(--g-muted, #B9C4C9)" }}>
              Highly trained engineers with specialised knowledge in Custody Metering Systems, Industrial Automation,
              and Inspection & Testing — with deep understanding of industry standards and best practices.
            </p>

            {/* 6-item highlights grid (2 cols × 3 rows) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {HIGHLIGHTS.map((h, i) => {
                const { Icon, badge } = h;
                const content = (
                  <div
                    className={`fade-up d${i + 2} p-4 rounded-xl flex flex-col items-center text-center gap-2`}
                    style={{
                      background: "var(--g-card-bg, #232F3E)",
                      border: "1px solid var(--g-card-border, rgba(255,255,255,0.09))",
                    }}
                  >
                    <span className="text-[10px] font-mono font-bold" style={{ color: "var(--primary, #17707E)" }}>
                      {h.prefix}
                    </span>
                    {badge ? (
                      <div className="relative w-7 h-7 shrink-0">
                        <Image src={badge} alt={h.label} fill className="object-contain" sizes="28px" />
                      </div>
                    ) : (
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(23,112,126,0.15)" }}
                      >
                        <Icon className="w-4 h-4" style={{ color: "var(--primary, #17707E)" }} strokeWidth={1.8} />
                      </div>
                    )}
                    <span className="text-[11px] font-bold leading-tight text-center" style={{ color: "var(--g-heading)" }}>
                      {h.label}
                    </span>
                  </div>
                );

                return badge ? (
                  <Link key={h.label} href="/certifications/" className="block hover:-translate-y-0.5 transition-transform">
                    {content}
                  </Link>
                ) : (
                  <div key={h.label}>{content}</div>
                );
              })}
            </div>

            <div className="fade-up d3">
              <Link
                href="/about-us/"
                className="v3-btn-primary px-6 py-3.5 rounded-xl text-[14.5px] font-bold"
              >
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
