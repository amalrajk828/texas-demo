"use client";

/**
 * SceneProgressRail — right-side dot navigation for pinned scenes.
 *
 * Replaces the IntersectionObserver-based dots in FixedVideoBackground.
 * Each dot corresponds to one PinnedScene. The active dot elongates in #8a302f.
 * Click a dot to scroll to that scene's outer wrapper.
 */

import { useEffect, useRef, useState, useCallback } from "react";
import type { SceneConfig } from "@/src/config/scenes";

interface SceneProgressRailProps {
  scenes: SceneConfig[];
}

export function SceneProgressRail({ scenes }: SceneProgressRailProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number>(0);

  /* Observe which scene's outer wrapper is most visible */
  useEffect(() => {
    const els = scenes.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          ratios.set(e.target.id, e.intersectionRatio);
        });
        let best = 0;
        let bestRatio = -1;
        scenes.forEach((s, i) => {
          const r = ratios.get(s.id) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            best = i;
          }
        });
        setActiveIndex(best);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [scenes]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: 0, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav
      className="scene-rail hidden lg:flex"
      aria-label="Page sections"
      style={{
        position: "fixed",
        top: "50%",
        right: 24,
        zIndex: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: "translateY(-50%)",
      }}
    >
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Continuous thin connecting rail */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 10,
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1,
            background: "rgba(255, 255, 255, 0.08)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {scenes.map((scene, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={scene.id}
              onClick={() => scrollTo(scene.id)}
              aria-label={`Go to ${scene.label} section`}
              aria-current={isActive ? "true" : undefined}
              className="group relative flex items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#c0483f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A0E]"
              style={{
                width: 20,
                height: 20,
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                position: "relative",
              }}
            >
              {/* Tooltip */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-[#0b0d12]/95 border border-white/10 text-[11px] font-medium tracking-wide text-white/90 whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 group-focus-visible:translate-x-0"
                style={{
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.6)",
                }}
              >
                {scene.label}
              </span>

              {/* Dot */}
              <span
                style={{
                  display: "block",
                  width: isActive ? 10 : 6,
                  height: isActive ? 10 : 6,
                  borderRadius: "50%",
                  background: isActive ? "#8a302f" : "rgba(255, 255, 255, 0.25)",
                  boxShadow: isActive ? "0 0 8px rgba(138, 48, 47, 0.6)" : "none",
                  zIndex: 2,
                  transition: "width 250ms ease, height 250ms ease, background-color 250ms ease, box-shadow 250ms ease",
                }}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
