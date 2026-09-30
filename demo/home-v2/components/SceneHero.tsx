"use client";

/**
 * SceneHero — pinned Hero scene.
 *
 * Progress phases (driven by useSceneProgress from PinnedScene context):
 *   Phase A  0.00 → 0.25  stage settles, background pulls back
 *   Phase B  0.25 → 0.60  headline panel unfolds (rotateX 70→0, y 120→0)
 *   Phase C  0.50 → 0.85  stat cards + side panels fan out
 *   Phase D  0.85 → 1.00  cross-dissolve exit
 *
 * ALL motion values are derived at component top level (hooks rules).
 * No useTransform inside JSX / map callbacks.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useTransform } from "framer-motion";
import {
  useSceneProgress,
  useSceneIsMobile,
  useSceneReducedMotion,
} from "./PinnedScene";

/* ─── Static data ─────────────────────────────────────────────── */
const HEADING_WORDS = ["Flow", "Measurement", "&", "Control", "System", "Solutions"];

const STATS = [
  { prefix: "/01", num: "18+",  label: "Years Experience" },
  { prefix: "/02", num: "8",    label: "Industries Served" },
  { prefix: "/03", num: "200+", label: "Approved Clients" },
  { prefix: "/04", num: "16+",  label: "Global Vendors" },
];

/* ─── Sub-components ──────────────────────────────────────────── */

/** One word revealed via mask (clip overflow + translateY). */
function MaskedWord({
  word,
  yStart,
  yEnd,
  opStart,
  opEnd,
  progress,
}: {
  word: string;
  yStart: string;
  yEnd: string;
  opStart: number;
  opEnd: number;
  progress: ReturnType<typeof useSceneProgress>;
}) {
  const y   = useTransform(progress, [opStart, opEnd], [yStart, yEnd]);
  const op  = useTransform(progress, [opStart, opEnd], [0, 1]);
  return (
    <span style={{ display: "inline-block", overflow: "hidden", lineHeight: 1, verticalAlign: "bottom" }}>
      <motion.span aria-hidden="true" style={{ display: "inline-block", y, opacity: op }}>
        {word}
      </motion.span>
    </span>
  );
}

/** A floating side panel that slides in from one side during Phase C. */
function SidePanel({
  title,
  sub,
  icon,
  isLeft,
  xFrom,
  rotYFrom,
  rotYTo,
  xTo,
  cStart,
  cEnd,
  progress,
}: {
  title: string;
  sub: string;
  icon: string;
  isLeft: boolean;
  xFrom: number;
  rotYFrom: number;
  rotYTo: number;
  xTo: number;
  cStart: number;
  cEnd: number;
  progress: ReturnType<typeof useSceneProgress>;
}) {
  const x      = useTransform(progress, [cStart, cEnd], [xFrom, xTo]);
  const rotY   = useTransform(progress, [cStart, cEnd], [rotYFrom, rotYTo]);
  const opacity = useTransform(progress, [cStart, Math.min(cStart + 0.08, cEnd), 0.85, 1.0], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{
        x,
        rotateY: rotY,
        opacity,
        position: "absolute",
        top: "50%",
        [isLeft ? "left" : "right"]: "clamp(16px, 4vw, 80px)",
        translateY: "-50%",
        width: "clamp(180px, 20vw, 260px)",
        perspective: 1000,
        willChange: "transform, opacity",
      }}
    >
      <div
        style={{
          background: "rgba(20,22,27,0.82)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderTopColor: "rgba(138,48,47,0.25)",
          borderRadius: 20,
          padding: "24px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(138,48,47,0.5), transparent)" }} />
        <div style={{ fontSize: 28, color: "#8a302f", marginBottom: 12, lineHeight: 1 }}>{icon}</div>
        <p style={{ color: "#F9FAFB", fontWeight: 700, fontSize: "clamp(13px, 1.3vw, 16px)", marginBottom: 6, lineHeight: 1.3 }}>{title}</p>
        <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "clamp(10px, 1vw, 12px)", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{sub}</p>
      </div>
    </motion.div>
  );
}

/* ─── Stat item wrapper — hooks called at top level of this component ─── */
function StatItem({ stat, opStart, opEnd, yStart, progress }: {
  stat: typeof STATS[number];
  opStart: number;
  opEnd: number;
  yStart: number;
  progress: ReturnType<typeof useSceneProgress>;
}) {
  const opacity = useTransform(progress, [opStart, opEnd], [0, 1]);
  const y       = useTransform(progress, [opStart, opEnd], [yStart, 0]);
  return (
    <motion.div className="hero-v5-stat-item" style={{ opacity, y }}>
      <span className="hero-v5-stat-prefix">{stat.prefix}</span>
      <span className="hero-v5-stat-num">{stat.num}</span>
      <span className="hero-v5-stat-label">{stat.label}</span>
    </motion.div>
  );
}

/* ─── Main scene ─────────────────────────────────────────────── */
export default function SceneHero() {
  const progress = useSceneProgress();
  const isMobile = useSceneIsMobile();
  const reduced  = useSceneReducedMotion();

  /* Phase A: background stage scale pull-back */
  const stageScale = useTransform(progress, [0, 0.25], [1.08, 1.0]);

  /* Phase B: main panel unfold */
  const panelRotateX = useTransform(progress, [0.25, 0.60], [70, 0]);
  const panelYDesk   = useTransform(progress, [0.25, 0.60], [120, 0]);
  const panelYMob    = useTransform(progress, [0.25, 0.60], [60, 0]);
  const panelScale   = useTransform(progress, [0.25, 0.60], [0.7, 1]);
  const panelOpacity = useTransform(progress, [0.22, 0.50], [0, 1]);

  /* Phase B→D: radial glow */
  const glowOpacity  = useTransform(progress, [0.25, 0.60, 0.85, 1.0], [0, 0.6, 0.55, 0]);

  /* Phase D: overall fade */
  const sceneOpacity = useTransform(progress, [0.85, 1.0], [1, 0]);
  const sceneScale   = useTransform(progress, [0.85, 1.0], [1, 0.96]);

  /* Phase C: headline shrinks up */
  const headlineScale = useTransform(progress, [0.50, 0.85], [1, 0.92]);
  const headlineY     = useTransform(progress, [0.50, 0.85], [0, -28]);

  /* Badge reveal */
  const badgeOpacity = useTransform(progress, [0.30, 0.50], [0, 1]);
  const badgeY       = useTransform(progress, [0.30, 0.50], [10, 0]);

  /* Subtext reveal */
  const subOpacity   = useTransform(progress, [0.42, 0.62], [0, 1]);
  const subY         = useTransform(progress, [0.42, 0.62], [16, 0]);

  /* CTA reveal */
  const ctaOpacity   = useTransform(progress, [0.48, 0.66], [0, 1]);
  const ctaY         = useTransform(progress, [0.48, 0.66], [16, 0]);

  /* Stats container */
  const statContainerOpacity = useTransform(progress, [0.55, 0.75], [0, 1]);
  const statContainerY       = useTransform(progress, [0.55, 0.75], [20, 0]);

  /* Scroll indicator */
  const indicatorOpacity = useTransform(progress, [0, 0.18], [1, 0]);

  /* Section label (appears after phase A) */
  const labelOpacity = useTransform(progress, [0.06, 0.18], [0, 1]);
  const labelY       = useTransform(progress, [0.06, 0.18], [10, 0]);

  /* ── Reduced-motion: static layout ── */
  if (reduced) {
    return (
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "var(--navbar-height, 92px) clamp(16px, 4vw, 60px) 60px",
        }}
        aria-label="Hero"
      >
        <div style={{ maxWidth: 760 }}>
          <div className="hero-v5-badge">
            <span className="hero-v5-badge-dot" />
            <span>Flow Measurement &amp; Automation</span>
          </div>
          <h1 className="hero-v5-heading" style={{ opacity: 1, animation: "none" }}>
            {HEADING_WORDS.join(" ")}
          </h1>
          <p className="hero-v5-paragraph">
            Where flow measurement challenges meet solutions. Expert metering
            consultants with in-depth knowledge of API, AGA, and custody metering standards.
          </p>
          <div className="hero-v5-cta-group">
            <Link href="/service/flow-measurement-solutions/" className="hero-v5-btn-primary">
              <span>Know More</span><ArrowRight />
            </Link>
            <Link href="/products/" className="hero-v5-btn-secondary">Our Products</Link>
          </div>
          <div className="hero-v5-stats">
            {STATS.map((s) => (
              <div key={s.label} className="hero-v5-stat-item">
                <span className="hero-v5-stat-prefix">{s.prefix}</span>
                <span className="hero-v5-stat-num">{s.num}</span>
                <span className="hero-v5-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── Full pinned scene ── */
  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOpacity,
        scale: sceneScale,
        perspective: 1400,
        perspectiveOrigin: "50% 50%",
        overflow: "hidden",
      }}
    >
      {/* Phase A: stage pull-back */}
      <motion.div
        aria-hidden="true"
        style={{ position: "absolute", inset: "-10%", scale: stageScale, willChange: "transform" }}
      >
        {/* Perspective floor grid */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "45%",
            backgroundImage: `
              linear-gradient(to right, rgba(138,48,47,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(138,48,47,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "perspective(600px) rotateX(60deg)",
            transformOrigin: "50% 100%",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
          }}
        />
        {/* Edge vignette */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(8,10,14,0.45) 70%, rgba(8,10,14,0.75) 100%)",
          }}
        />
      </motion.div>

      {/* Radial glow behind active panel */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: 600, height: 600,
          translate: "-50% -50%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(138,48,47,0.35) 0%, transparent 70%)",
          opacity: glowOpacity,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Left side panel */}
      {!isMobile && (
        <SidePanel
          title="Flow Measurement"
          sub="API · AGA · ISO Standards"
          icon="◈"
          isLeft={true}
          xFrom={-280}
          rotYFrom={25}
          rotYTo={12}
          xTo={-40}
          cStart={0.50}
          cEnd={0.80}
          progress={progress}
        />
      )}

      {/* Main panel — Phase B unfold */}
      <motion.div
        style={{
          rotateX: isMobile ? 0 : panelRotateX,
          y: isMobile ? panelYMob : panelYDesk,
          scale: panelScale,
          opacity: panelOpacity,
          willChange: "transform, opacity",
          position: "relative",
          zIndex: 10,
          width: "min(100% - 32px, 820px)",
          transformOrigin: "50% 100%",
        }}
      >
        <div
          style={{
            background: "rgba(20,22,27,0.78)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderTopColor: "rgba(138,48,47,0.22)",
            borderRadius: 28,
            padding: isMobile ? "32px 24px" : "clamp(36px, 5vh, 56px) clamp(32px, 4vw, 52px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top edge glow */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(138,48,47,0.6) 40%, rgba(138,48,47,0.6) 60%, transparent 100%)" }} />
          {/* Floor reflection */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(138,48,47,0.04) 0%, transparent 100%)", pointerEvents: "none" }} />

          {/* Badge */}
          <motion.div style={{ opacity: badgeOpacity, y: badgeY }}>
            <div className="hero-v5-badge" style={{ marginBottom: 20 }}>
              <span className="hero-v5-badge-dot" />
              <span>Flow Measurement &amp; Automation</span>
            </div>
          </motion.div>

          {/* Headline — word-by-word mask reveal */}
          <motion.div style={{ scale: headlineScale, y: headlineY, transformOrigin: "left center" }}>
            <h1
              className="hero-v5-heading"
              aria-label={HEADING_WORDS.join(" ")}
              style={{ opacity: 1, animation: "none", display: "flex", flexWrap: "wrap", gap: "0 0.24em", marginBottom: 20 }}
            >
              {HEADING_WORDS.map((word, i) => (
                <MaskedWord
                  key={`${word}-${i}`}
                  word={word}
                  yStart="100%"
                  yEnd="0%"
                  opStart={0.28 + i * 0.018}
                  opEnd={0.56 + i * 0.018}
                  progress={progress}
                />
              ))}
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="hero-v5-paragraph"
            style={{ opacity: subOpacity, y: subY, animation: "none", marginBottom: 28 }}
          >
            Where flow measurement challenges meet solutions. Expert metering consultants
            with in-depth knowledge of API, AGA, and custody metering standards.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="hero-v5-cta-group"
            style={{ opacity: ctaOpacity, y: ctaY, animation: "none", marginBottom: 28 }}
          >
            <Link href="/service/flow-measurement-solutions/" className="hero-v5-btn-primary">
              <span>Know More</span>
              <ArrowRight />
            </Link>
            <Link href="/products/" className="hero-v5-btn-secondary">
              Our Products
            </Link>
          </motion.div>

          {/* Stats grid — Phase C stagger via StatItem sub-component */}
          <motion.div
            className="hero-v5-stats"
            style={{ opacity: statContainerOpacity, y: statContainerY, animation: "none" }}
          >
            {STATS.map((stat, i) => (
              <StatItem
                key={stat.label}
                stat={stat}
                opStart={0.52 + i * 0.04}
                opEnd={0.70 + i * 0.04}
                yStart={14}
                progress={progress}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Right side panel */}
      {!isMobile && (
        <SidePanel
          title="Industrial Automation"
          sub="PLC · SCADA · HMI"
          icon="◉"
          isLeft={false}
          xFrom={280}
          rotYFrom={-25}
          rotYTo={-12}
          xTo={40}
          cStart={0.53}
          cEnd={0.82}
          progress={progress}
        />
      )}

      {/* Scroll indicator — fades as scrolling starts */}
      <motion.div
        className="hero-v5-scroll-indicator"
        aria-hidden="true"
        style={{ position: "absolute", right: 32, bottom: 28, opacity: indicatorOpacity }}
      >
        <span>Scroll to explore</span>
        <ArrowRight style={{ transform: "rotate(90deg)" }} />
      </motion.div>
    </motion.div>
  );
}
