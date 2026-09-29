"use client";

/**
 * SceneCoreServices — pinned Services scene.
 *
 * One stage, three service panels that swap in place as scroll progresses.
 * The counter dots 01/02/03 update with each swap.
 *
 * Progress map (sceneLength = 450vh):
 *   0.00 → 0.12   Phase A  stage settles
 *   0.12 → 0.40   Phase B  Service 01 pops up
 *   0.40 → 0.58   Service 01 holds + side preview cards
 *   0.58 → 0.70   Dissolve 01 → 02
 *   0.70 → 0.80   Service 02 holds
 *   0.80 → 0.88   Dissolve 02 → 03
 *   0.88 → 0.96   Service 03 holds
 *   0.96 → 1.00   Phase D exit
 *
 * All hooks are called at component / sub-component top level (no hooks in map).
 */

import Link from "next/link";
import { Gauge, FlaskConical, Cpu, ArrowRight } from "lucide-react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import {
  useSceneProgress,
  useSceneIsMobile,
  useSceneReducedMotion,
} from "./PinnedScene";

/* ─── Data ─────────────────────────────────────────────────────── */
const SERVICES = [
  {
    Icon: Gauge,
    num: "01",
    tag: "Metering",
    title: "Flow Measurement & Control System Solutions",
    body: "Metering control system upgrades, maintenance, and validation for custody metering systems. Ensuring your metering operates accurately to API, AGA, and ISO standards.",
    href: "/service/flow-measurement-solutions/",
    inStart: 0.12,
    inEnd:   0.40,
    holdEnd: 0.58,
    outEnd:  0.70,
  },
  {
    Icon: FlaskConical,
    num: "02",
    tag: "NDT & QA",
    title: "Inspection & Testing",
    body: "Comprehensive inspection, non-destructive testing, functional testing and certification across all industrial sectors. Full ISO 9001, ISO 14001, ISO 45001, UASL and Accurate compliance.",
    href: "/service/inspection-testing/",
    inStart: 0.60,
    inEnd:   0.72,
    holdEnd: 0.80,
    outEnd:  0.88,
  },
  {
    Icon: Cpu,
    num: "03",
    tag: "Automation",
    title: "Industrial Process Automation Solutions",
    body: "Control system design, PLC programming, SCADA integration, and HMI development — optimising operations across oil & gas, power, and manufacturing plants.",
    href: "/service/industrial-automation/",
    inStart: 0.82,
    inEnd:   0.92,
    holdEnd: 0.96,
    outEnd:  1.00,
  },
] as const;

type Svc = typeof SERVICES[number];
type Progress = MotionValue<number>;

/* ─── ServicePanel ──────────────────────────────────────────────── */
function ServicePanel({
  svc,
  progress,
  isMobile,
}: {
  svc: Svc;
  progress: Progress;
  isMobile: boolean;
}) {
  const { Icon, inStart, inEnd, holdEnd, outEnd } = svc;

  /* Entrance transform */
  const rotateX  = useTransform(progress, [inStart, inEnd], [isMobile ? 0 : 65, 0]);
  const y        = useTransform(progress, [inStart, inEnd], [isMobile ? 60 : 120, 0]);
  const panScale = useTransform(progress, [inStart, inEnd], [0.72, 1]);
  const opIn     = useTransform(progress, [inStart, Math.min(inStart + 0.12, inEnd)], [0, 1]);

  /* Exit transform */
  const opOut    = useTransform(progress, [holdEnd, outEnd], [1, 0]);
  const scaleOut = useTransform(progress, [holdEnd, outEnd], [1, 0.96]);

  return (
    /* Outer: exit fade/shrink */
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: opOut,
        scale: scaleOut,
        willChange: "transform, opacity",
      }}
    >
      {/* Inner: entrance unfold */}
      <motion.div
        style={{
          rotateX,
          y,
          scale: panScale,
          opacity: opIn,
          width: "min(100% - 32px, 860px)",
          transformOrigin: "50% 100%",
          willChange: "transform, opacity",
        }}
      >
        <div
          style={{
            background: "rgba(20,22,27,0.78)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderTopColor: "rgba(138,48,47,0.22)",
            borderRadius: 28,
            padding: isMobile ? "28px 20px" : "clamp(36px,5vh,56px) clamp(32px,4vw,56px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top edge glow */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(138,48,47,0.6) 40%, rgba(138,48,47,0.6) 60%, transparent 100%)" }} />
          {/* Floor reflection */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, rgba(138,48,47,0.05) 0%, transparent 100%)", pointerEvents: "none" }} />

          {/* Header row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24, position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#8a302f", border: "1px solid rgba(138,48,47,0.35)", background: "rgba(138,48,47,0.10)", borderRadius: 999, padding: "3px 10px" }}>
              {svc.tag}
            </span>
            <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, fontWeight: 700, letterSpacing: "3px", color: "rgba(255,255,255,0.40)" }}>
              {svc.num}
            </span>
          </div>

          {/* Icon */}
          <div style={{ width: 48, height: 48, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", marginBottom: 20, position: "relative", zIndex: 1 }}>
            <Icon size={22} color="rgba(255,255,255,0.88)" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h2 style={{ color: "#F9FAFB", fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16, position: "relative", zIndex: 1, maxWidth: 560 }}>
            {svc.title}
          </h2>

          {/* Body */}
          <p style={{ color: "rgba(255,255,255,0.64)", fontSize: "clamp(14px, 1.4vw, 17px)", lineHeight: 1.75, marginBottom: 32, maxWidth: 600, position: "relative", zIndex: 1 }}>
            {svc.body}
          </p>

          {/* CTA */}
          <Link
            href={svc.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#F9FAFB",
              textDecoration: "none",
              borderBottom: "1px solid rgba(138,48,47,0.5)",
              paddingBottom: 2,
              position: "relative",
              zIndex: 1,
            }}
          >
            Learn more <ArrowRight size={15} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── CounterDot — hooks at component top level ─────────────────── */
function CounterDot({ svc, progress }: { svc: Svc; progress: Progress }) {
  const opacity = useTransform(
    progress,
    [svc.inStart, Math.min(svc.inStart + 0.06, 0.99), svc.holdEnd, svc.outEnd],
    [0.25, 1, 1, 0.25]
  );
  const scale = useTransform(
    progress,
    [svc.inStart, Math.min(svc.inStart + 0.06, 0.99), svc.holdEnd, svc.outEnd],
    [0.7, 1, 1, 0.7]
  );
  return (
    <motion.div style={{ display: "flex", alignItems: "center", gap: 8, opacity, scale }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8a302f" }} />
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: "rgba(255,255,255,0.5)" }}>
        {svc.num}
      </span>
    </motion.div>
  );
}

function ServiceCounter({ progress }: { progress: Progress }) {
  return (
    <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 16, zIndex: 20 }}>
      {SERVICES.map((svc) => (
        <CounterDot key={svc.num} svc={svc} progress={progress} />
      ))}
    </div>
  );
}

/* ─── Main export ────────────────────────────────────────────────── */
export default function SceneCoreServices() {
  const progress = useSceneProgress();
  const isMobile = useSceneIsMobile();
  const reduced  = useSceneReducedMotion();

  /* Phase A: stage pull-back */
  const stageScale = useTransform(progress, [0, 0.12], [1.08, 1.0]);

  /* Global glow follows active service */
  const glowOpacity = useTransform(progress, [0.12, 0.40, 0.92, 1.0], [0, 0.55, 0.55, 0]);

  /* Scene label entrance */
  const labelOpacity = useTransform(progress, [0.06, 0.18], [0, 1]);
  const labelY       = useTransform(progress, [0.06, 0.18], [10, 0]);

  /* Phase D: overall fade */
  const sceneOpacity = useTransform(progress, [0.94, 1.0], [1, 0]);

  /* ── Reduced-motion: stacked cards ── */
  if (reduced) {
    return (
      <section style={{ padding: "80px clamp(16px, 4vw, 60px)", maxWidth: 900, margin: "0 auto" }} aria-label="Core Services">
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32, alignItems: "center", textAlign: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#8a302f" }}>Our Services</span>
          <h2 style={{ color: "#F9FAFB", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800 }}>
            What services do we offer?
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {SERVICES.map((svc) => (
            <div key={svc.num} style={{ background: "rgba(20,22,27,0.78)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px 24px" }}>
              <svc.Icon size={24} color="rgba(255,255,255,0.8)" />
              <h3 style={{ color: "#F9FAFB", fontWeight: 700, margin: "12px 0 8px", fontSize: 18 }}>{svc.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.64)", fontSize: 14, lineHeight: 1.7 }}>{svc.body}</p>
              <Link href={svc.href} style={{ color: "#8a302f", fontWeight: 700, fontSize: 13, display: "inline-block", marginTop: 16 }}>
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <motion.div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: sceneOpacity, willChange: "opacity" }}>
      {/* Phase A: stage scale layer */}
      <motion.div
        aria-hidden="true"
        style={{ position: "absolute", inset: "-8%", scale: stageScale, willChange: "transform" }}
      >
        {/* Perspective floor grid */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
            backgroundImage: `
              linear-gradient(to right, rgba(138,48,47,0.10) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(138,48,47,0.10) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            transform: "perspective(600px) rotateX(62deg)",
            transformOrigin: "50% 100%",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Section label */}
      <motion.div
        style={{
          position: "absolute",
          top: "clamp(20px, 12vh, 52px)",
          left: "50%",
          translateX: "-50%",
          textAlign: "center",
          zIndex: 20,
          opacity: labelOpacity,
          y: labelY,
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 24, height: 1, background: "#8a302f", display: "block" }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#8a302f" }}>
            Our Services
          </span>
          <span style={{ width: 24, height: 1, background: "#8a302f", display: "block" }} />
        </div>
      </motion.div>

      {/* Radial glow */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: 700, height: 700,
          translate: "-50% -50%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(138,48,47,0.30) 0%, transparent 65%)",
          opacity: glowOpacity,
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Service panels — perspective wrapper */}
      <div
        style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          perspective: 1400, perspectiveOrigin: "50% 52%",
        }}
      >
        {SERVICES.map((svc) => (
          <ServicePanel key={svc.num} svc={svc} progress={progress} isMobile={isMobile} />
        ))}
      </div>

      {/* Counter dots */}
      <ServiceCounter progress={progress} />
    </motion.div>
  );
}
