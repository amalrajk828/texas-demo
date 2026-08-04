"use client";

import { useRef, useEffect } from "react";

interface VantaTopologyProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

export default function VantaTopology({ targetRef }: VantaTopologyProps) {
  const vantaEffectRef = useRef<any>(null);

  const initVanta = () => {
    if (
      typeof window !== "undefined" &&
      (window as any).p5 &&
      (window as any).VANTA &&
      (window as any).VANTA.TOPOLOGY &&
      targetRef.current &&
      !vantaEffectRef.current
    ) {
      try {
        vantaEffectRef.current = (window as any).VANTA.TOPOLOGY({
          el: targetRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x000000,
          color: 0x7a0f0a,
        });
      } catch (err) {
        console.error("Vanta Topology init error:", err);
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
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }}
    />
  );
}
