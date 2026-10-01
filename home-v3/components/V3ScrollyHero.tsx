"use client";

/**
 * V3ScrollyHero
 *
 * Wraps ScrollFrameSequence (canvas) and overlays scroll-synced content callouts.
 *
 * KEY FIX: Content is expressed as `renderContent: () => JSX` (render functions),
 * NOT as module-level JSX literals. Module-level JSX in "use client" files can
 * crash Turbopack's SSR evaluation. Render functions are called only in the
 * browser, inside React's render cycle, which is safe.
 *
 * Milestone mapping (scroll progress 0-1):
 *   0.00-0.18  Intro headline + tagline
 *   0.22-0.42  18+ Years / 400+ Projects stats
 *   0.46-0.65  Four Core Engineering Disciplines
 *   0.68-0.84  Certifications & Standards
 *   0.87-1.00  Closing CTA
 */

import React, { useState, useCallback, useRef } from "react";
import Link from "next/link";
import ScrollFrameSequence from "./ScrollFrameSequence";
import { ArrowDown, ArrowRight, ShieldCheck, TrendingUp, Gauge } from "lucide-react";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface Milestone {
  id: string;
  range: [number, number];
  renderContent: () => React.ReactNode;
  position: "left" | "right" | "center";
}

// ─────────────────────────────────────────────
// Milestone definitions (render functions, NOT module-level JSX)
// ─────────────────────────────────────────────
const MILESTONES: Milestone[] = [
  {
    id: "intro",
    range: [0, 0.18],
    position: "left",
    renderContent: () => (
      <div className="flex flex-col gap-4 max-w-[560px]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
          <span className="w-2 h-2 rounded-full bg-[#ffb3af] animate-pulse" />
          <span
            style={{ fontFamily: "Sora,sans-serif", fontSize: 11, letterSpacing: "0.1em", fontWeight: 600 }}
            className="text-[#ffdad7] uppercase"
          >
            ISO 9001 · 14001 · 45001 · UASL
          </span>
        </div>
        <h1
          style={{ fontFamily: "Sora,sans-serif", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em" }}
          className="text-white text-4xl md:text-6xl lg:text-7xl"
        >
          Precision
          <br />
          <span className="text-[#ffb3af]">Industrial</span>
          <br />
          Engineering
        </h1>
        <p
          style={{ fontFamily: "Inter,sans-serif", fontWeight: 400, lineHeight: 1.6 }}
          className="text-white/70 text-base md:text-lg max-w-md"
        >
          Flow measurement, automation &amp; custody metering solutions across
          Kuwait, UAE and the Arabian Gulf since 2008.
        </p>
      </div>
    ),
  },
  {
    id: "stats",
    range: [0.22, 0.42],
    position: "right",
    renderContent: () => (
      <div className="flex flex-col gap-4 max-w-[340px]">
        <div
          className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "rgba(10,11,14,0.72)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <div className="flex items-center gap-2.5">
            <TrendingUp className="w-5 h-5 text-[#ffb3af]" />
            <span style={{ fontFamily: "Sora,sans-serif", fontSize: 11, letterSpacing: "0.1em", fontWeight: 700 }} className="text-white/60 uppercase">
              Track Record
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { val: "18+",  label: "Years Experience",   sub: "Since 2008" },
              { val: "400+", label: "Projects Completed", sub: "Kuwait · UAE · Gulf" },
              { val: "200+", label: "Approved Clients",   sub: "KOC, KNPC, Aramco" },
              { val: "8",    label: "Industries Served",  sub: "Oil → Water → Power" },
            ].map((s) => (
              <div key={s.val} className="flex flex-col gap-0.5 p-2.5 rounded-xl bg-white/[0.06]">
                <span
                  style={{ fontFamily: "Sora,sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em" }}
                  className="text-white leading-none"
                >
                  {s.val}
                </span>
                <span style={{ fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 500 }} className="text-white/70 leading-tight">
                  {s.label}
                </span>
                <span style={{ fontFamily: "Inter,sans-serif", fontSize: 10 }} className="text-white/40">
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "services",
    range: [0.46, 0.65],
    position: "left",
    renderContent: () => (
      <div className="flex flex-col gap-4 max-w-[460px]">
        <h2
          style={{ fontFamily: "Sora,sans-serif", fontWeight: 700, fontSize: "clamp(22px,3vw,36px)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          className="text-white"
        >
          Four Core
          <br />
          <span className="text-[#ffb3af]">Engineering</span> Disciplines
        </h2>
        <div className="flex flex-col gap-2">
          {[
            { Icon: Gauge,      title: "Flow Measurement & Control",    desc: "Custody metering, skids, flow computers" },
            { Icon: ShieldCheck,title: "Inspection, Testing & Calibration", desc: "ISO-certified NDT & metrological verification" },
            { Icon: TrendingUp, title: "Industrial Process Automation", desc: "PLC, SCADA, HMI, CEMS integration" },
            { Icon: ArrowRight, title: "Environmental Monitoring (CEMS)", desc: "Continuous emissions & dust measurement" },
          ].map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 p-3 rounded-xl"
              style={{ background: "rgba(10,11,14,0.60)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <span className="w-7 h-7 rounded-full bg-[#6b191b]/50 flex items-center justify-center text-[#ffb3af] shrink-0 mt-0.5">
                <Icon className="w-4 h-4" />
              </span>
              <div>
                <p style={{ fontFamily: "Sora,sans-serif", fontWeight: 600, fontSize: 13 }} className="text-white leading-tight">{title}</p>
                <p style={{ fontFamily: "Inter,sans-serif", fontSize: 12 }} className="text-white/55 leading-tight mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "certifications",
    range: [0.68, 0.84],
    position: "right",
    renderContent: () => (
      <div className="flex flex-col gap-4 max-w-[380px]">
        <div
          className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "rgba(10,11,14,0.72)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#ffb3af]" />
            <span style={{ fontFamily: "Sora,sans-serif", fontSize: 11, letterSpacing: "0.1em", fontWeight: 700 }} className="text-white/60 uppercase">
              Certifications &amp; Standards
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { cert: "ISO 9001:2015",  desc: "Quality Management System" },
              { cert: "ISO 14001:2015", desc: "Environmental Management" },
              { cert: "ISO 45001:2018", desc: "Occupational Health & Safety" },
              { cert: "UASL Licensed",  desc: "Kuwait Ministry of Commerce" },
              { cert: "API / AGA / OIML", desc: "Flow & Metering Standards" },
              { cert: "OQNET / BSI",    desc: "Accredited Calibration Body" },
            ].map((c) => (
              <div key={c.cert} className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg bg-white/[0.05]">
                <span style={{ fontFamily: "Sora,sans-serif", fontWeight: 600, fontSize: 12 }} className="text-[#ffb3af]">{c.cert}</span>
                <span style={{ fontFamily: "Inter,sans-serif", fontSize: 11 }} className="text-white/55">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "cta",
    range: [0.87, 1.0],
    position: "center",
    renderContent: () => (
      <div className="flex flex-col items-center gap-6 text-center max-w-[600px]">
        <h2
          style={{ fontFamily: "Sora,sans-serif", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em" }}
          className="text-white text-3xl md:text-5xl"
        >
          Ready to engineer
          <br />
          <span className="text-[#ffb3af]">precision solutions?</span>
        </h2>
        <p
          style={{ fontFamily: "Inter,sans-serif", fontSize: 17, lineHeight: 1.6 }}
          className="text-white/70"
        >
          Our engineers are available for site visits, metering consultations,
          and turnkey project delivery across Kuwait, UAE &amp; the wider Gulf region.
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link
            href="#rfq-stage"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white transition-all"
            style={{ background: "#6b191b", fontSize: 15, fontFamily: "Sora,sans-serif", boxShadow: "0 8px 32px rgba(107,25,27,0.4)" }}
          >
            Request Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/service/flow-measurement-solutions/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white/90 hover:bg-white/10 transition-all"
            style={{ fontSize: 15, fontFamily: "Sora,sans-serif", backdropFilter: "blur(8px)" }}
          >
            Explore Services
          </Link>
        </div>
      </div>
    ),
  },
];

// ─────────────────────────────────────────────
// Milestone overlay
// ─────────────────────────────────────────────
function MilestoneOverlay({
  milestone,
  progress,
}: {
  milestone: Milestone;
  progress: number;
}) {
  const [enter, exit] = milestone.range;
  const isVisible = progress >= enter && progress <= exit;

  const fadeW   = 0.025;
  const fadeIn  = Math.min(1, Math.max(0, (progress - enter) / fadeW));
  const fadeOut = Math.min(1, Math.max(0, (exit - progress)  / fadeW));
  const opacity = isVisible ? Math.min(fadeIn, fadeOut) : 0;
  const ty      = isVisible ? (1 - opacity) * 16 : 20;

  const posStyle: React.CSSProperties =
    milestone.position === "left"
      ? { left: "clamp(20px, 5vw, 80px)",  top: "50%", transform: `translateY(calc(-50% + ${ty}px))` }
      : milestone.position === "right"
      ? { right: "clamp(20px, 5vw, 80px)", top: "50%", transform: `translateY(calc(-50% + ${ty}px))` }
      : { left: "50%",                      top: "50%", transform: `translate(-50%, calc(-50% + ${ty}px))` };

  return (
    <div
      aria-hidden={!isVisible}
      style={{
        position:      "absolute",
        pointerEvents: isVisible && opacity > 0.5 ? "auto" : "none",
        opacity,
        transition:    "opacity 0.1s linear",
        zIndex:        20,
        ...posStyle,
      }}
    >
      {milestone.renderContent()}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main hero component
// ─────────────────────────────────────────────
export default function V3ScrollyHero() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  const handleProgress = useCallback((p: number) => {
    // Throttle setState: 0.5% resolution to avoid flooding React reconciler
    const rounded = Math.round(p * 200) / 200;
    if (Math.abs(rounded - progressRef.current) >= 0.004) {
      progressRef.current = rounded;
      setProgress(rounded);
    }
  }, []);

  const scrollArrowOpacity = Math.max(0, 1 - progress * 20);

  return (
    <section
      id="v3-scrolly-hero"
      aria-label="Texas Technical Services — Scrollytelling Hero"
      style={{ position: "relative" }}
    >
      {/* Canvas scroll-driven frame sequence */}
      <ScrollFrameSequence onProgress={handleProgress} />

      {/*
       * Sticky overlay: position:sticky + marginTop:-100vh
       * This div re-pins to viewport top exactly like the canvas,
       * without generating extra scroll distance.
       */}
      <div
        aria-live="polite"
        style={{
          position:    "sticky",
          top:         0,
          height:      "100vh",
          width:       "100%",
          pointerEvents: "none",
          zIndex:      10,
          marginTop:   "-100vh",
        }}
      >
        {MILESTONES.map((m) => (
          <MilestoneOverlay key={m.id} milestone={m} progress={progress} />
        ))}

        {/* Scroll-to-explore arrow */}
        <div
          style={{
            position:      "absolute",
            bottom:        32,
            left:          "50%",
            transform:     "translateX(-50%)",
            opacity:       scrollArrowOpacity,
            transition:    "opacity 0.3s",
            zIndex:        30,
            pointerEvents: "none",
          }}
        >
          <div style={{ animation: "v3-bounce 2s ease-in-out infinite" }} className="flex flex-col items-center gap-2">
            <span
              style={{ fontFamily: "Inter,sans-serif", fontSize: 11, letterSpacing: "0.12em", fontWeight: 600 }}
              className="text-white/50 uppercase"
            >
              Scroll to explore
            </span>
            <ArrowDown className="w-5 h-5 text-white/40" />
          </div>
        </div>

        {/* Thin progress bar at bottom of viewport */}
        <div
          style={{
            position:   "absolute",
            bottom:     0,
            left:       0,
            height:     2,
            width:      `${progress * 100}%`,
            background: "linear-gradient(90deg, #6b191b, #ffb3af)",
            transition: "width 0.05s linear",
            zIndex:     30,
          }}
        />
      </div>

      <style>{`
        @keyframes v3-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}
