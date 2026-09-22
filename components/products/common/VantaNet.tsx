"use client";

import { useRef, useEffect } from "react";

interface VantaNetProps {
  targetRef: React.RefObject<HTMLElement | null>;
}

/**
 * Vanta NET effect — uses Three.js (not p5.js).
 * Produces connected-node network lines that flow organically across the
 * whole hero surface, without the radial/circular symmetry of Trunk.
 */
export default function VantaNet({ targetRef }: VantaNetProps) {
  const vantaEffectRef = useRef<any>(null);

  const initVanta = () => {
    if (
      typeof window !== "undefined" &&
      (window as any).THREE &&
      (window as any).VANTA?.NET &&
      targetRef.current &&
      !vantaEffectRef.current
    ) {
      try {
        vantaEffectRef.current = (window as any).VANTA.NET({
          el: targetRef.current,
          THREE: (window as any).THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x000000,
          color: 0xe22119,
          // Network density / spread
          points: 10.0,
          maxDistance: 22.0,
          spacing: 18.0,
          showDots: false,
        });
      } catch (err) {
        console.error("Vanta Net init error:", err);
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
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "rgba(0,0,0,0.50)", zIndex: 1 }}
    />
  );
}
