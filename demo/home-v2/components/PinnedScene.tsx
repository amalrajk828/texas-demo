"use client";

/**
 * PinnedScene — reusable scroll-pinned stage.
 *
 * The outer div occupies `heightVh` of scroll space.
 * The inner div is `position: sticky; top: 0; height: 100vh` so it stays
 * fixed while the user scrolls. All child animations are driven by the
 * `scrollYProgress` MotionValue exposed via SceneProgressContext.
 *
 * prefers-reduced-motion: sticky is disabled; sections stack normally
 * with a simple fade via the reducedMotion CSS class on the wrapper.
 */

import {
  createContext,
  useContext,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useScroll, useSpring, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { SceneConfig } from "@/src/config/scenes";

/* ─── Context ──────────────────────────────────────────────────── */

/** Raw 0→1 progress of the scene's scroll range, smoothed with a spring. */
const SceneProgressCtx = createContext<MotionValue<number>>(null!);
/** Whether the device prefers reduced motion. */
const ReducedMotionCtx = createContext<boolean>(false);
/** Whether the viewport is mobile (<768 px). */
const IsMobileCtx = createContext<boolean>(false);

export function useSceneProgress() {
  return useContext(SceneProgressCtx);
}
export function useSceneReducedMotion() {
  return useContext(ReducedMotionCtx);
}
export function useSceneIsMobile() {
  return useContext(IsMobileCtx);
}

/* ─── Component ────────────────────────────────────────────────── */

interface PinnedSceneProps {
  config: SceneConfig;
  children: ReactNode;
}

export function PinnedScene({ config, children }: PinnedSceneProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const heightVh = isMobile
    ? config.sceneLength * config.mobileScale
    : config.sceneLength;

  /* Raw scroll progress 0→1 across the outer wrapper */
  const { scrollYProgress: rawProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  /* Spring-smooth the raw value so motion feels weighty. */
  const progress = useSpring(rawProgress, {
    stiffness: config.spring.stiffness,
    damping: config.spring.damping,
    mass: config.spring.mass,
    restDelta: 0.001,
  });

  /* ── Reduced-motion: just a normal stacked section ── */
  if (reduced) {
    return (
      <ReducedMotionCtx.Provider value={true}>
        <IsMobileCtx.Provider value={isMobile}>
          <SceneProgressCtx.Provider value={progress}>
            <section
              id={config.id}
              className="pinned-scene pinned-scene--reduced"
              aria-label={config.label}
            >
              {children}
            </section>
          </SceneProgressCtx.Provider>
        </IsMobileCtx.Provider>
      </ReducedMotionCtx.Provider>
    );
  }

  /* ── Normal pinned layout ── */
  const outerStyle: CSSProperties = {
    position: "relative",
    height: `${heightVh}vh`,
  };

  const stickyStyle: CSSProperties = {
    position: "sticky",
    top: 0,
    height: "100vh",
    overflow: "hidden",
    willChange: "transform",
  };

  return (
    <ReducedMotionCtx.Provider value={false}>
      <IsMobileCtx.Provider value={isMobile}>
        <SceneProgressCtx.Provider value={progress}>
          <div
            ref={outerRef}
            id={config.id}
            className="pinned-scene"
            style={outerStyle}
            aria-label={config.label}
          >
            <div className="pinned-scene__stage" style={stickyStyle}>
              {children}
            </div>
          </div>
        </SceneProgressCtx.Provider>
      </IsMobileCtx.Provider>
    </ReducedMotionCtx.Provider>
  );
}
