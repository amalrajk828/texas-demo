"use client";

import { useRef, useEffect } from "react";

/**
 * Vanta TRUNK hero background — canvas offset technique.
 *
 * The Trunk effect always radiates concentrically from the center of its
 * canvas element. To hide the dark center "hole" we make the canvas wider
 * than the visible hero area and shift it so its center sits off-screen
 * to the right. The rings that fan out from it still spread leftward and
 * fully cover the visible hero, creating a sweeping half-arc look.
 *
 * overflow-hidden on the outer wrapper clips everything to the hero boundary.
 */
export default function VantaTrunk() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null);

  const initVanta = () => {
    if (
      typeof window !== "undefined" &&
      (window as any).p5 &&
      (window as any).VANTA?.TRUNK &&
      vantaRef.current &&
      !vantaEffectRef.current
    ) {
      try {
        vantaEffectRef.current = (window as any).VANTA.TRUNK({
          el: vantaRef.current,
          mouseControls: false,  // mouse controls off — canvas is offset so mouse pos misaligns
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x000000,
          color: 0xe22119,
          spacing: 3.0,
          chaos: 6.0,
        });
      } catch (err) {
        console.error("Vanta Trunk init error:", err);
      }
    } else if (!vantaEffectRef.current) {
      setTimeout(initVanta, 100);
    }
  };

  useEffect(() => {
    initVanta();
    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    /* Clips the oversized canvas to the hero's visible boundary */
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/*
       * Canvas is 160% wide and shifted right by 40% so its center point
       * (where the dark "black hole" lives) sits outside the visible hero.
       * The rings that radiate outward still sweep left and cover the full
       * visible area — giving a half-arc effect with no empty center.
       */}
      <div
        ref={vantaRef}
        style={{
          position: "absolute",
          top: 0,
          right: "-40%",
          width: "160%",
          height: "100%",
        }}
      />
      {/* Darkening overlay — sits above canvas, below text content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.40)" }}
      />
    </div>
  );
}
