"use client";

/**
 * DarkStageSection — fullscreen dark wrapper for every section inside CrossFadeStage.
 *
 * Provides:
 *   - position: absolute; inset: 0  (fills the fixed stage)
 *   - Dark panel background + scrollable inner content area
 *   - Centred content with max-width cap and padding for navbar
 *   - Top/bottom fade masks so tall content doesn't clip harshly
 *
 * All children render inside an overflow-y: auto inner scroll, so content
 * taller than 100vh scrolls ONLY while this section is the active one.
 * (Outer scroll controls which section is visible; inner scroll reads
 * the content of a specific section.)
 *
 * NOTE: We intentionally do NOT use overflow-y: scroll on the wrapper —
 * the outer fixed stage catches pointer events only for the active section.
 */

import type { ReactNode, CSSProperties } from "react";

interface DarkStageSectionProps {
  children: ReactNode;
  /** Extra inline styles on the outer wrapper */
  style?: CSSProperties;
  /** aria-label for the section element */
  label?: string;
  id?: string;
}

const DARK_PANEL: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  background: "rgba(8,10,14,0.72)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  isolation: "isolate",
  contain: "paint layout",
};

const INNER: CSSProperties = {
  flex: 1,
  overflowY: "auto",
  overflowX: "hidden",
  // Shared spacing token: navbar height + 24-32px breathing room (~96-108px total)
  paddingTop: "var(--section-pt, calc(var(--navbar-height, 80px) + 26px))",
  paddingBottom: "var(--section-pb, clamp(1.5rem, 3.5vh, 2.5rem))",
  scrollbarWidth: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export function DarkStageSection({
  children,
  style,
  label,
  id,
}: DarkStageSectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className="dark-stage-section"
      style={{ ...DARK_PANEL, ...style }}
    >
      <div style={INNER} className="dark-stage-inner hide-scrollbar">
        {children}
      </div>
      {/* Bottom fade mask */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 60,
          background: "linear-gradient(to top, rgba(8,10,14,0.92) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
