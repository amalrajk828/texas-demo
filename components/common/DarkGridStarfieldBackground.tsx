"use client";

import React, { useEffect, useState, useMemo } from "react";

interface Star {
  id: number;
  cx: number; // Percentage 0 - 100
  cy: number; // Percentage 0 - 100
  r: number;  // Radius in px (0.5 to 1.0 = 1px to 2px size)
  opacity: number; // Opacity 0.2 to 0.8
  glow: boolean;
}

export default function DarkGridStarfieldBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate 120 stars scattered across the viewport
  const stars: Star[] = useMemo(() => {
    const list: Star[] = [];
    for (let i = 0; i < 120; i++) {
      // Deterministic pseudorandom values based on index to ensure stable SSR hydration
      const pseudoX = (i * 37 + 13) % 100;
      const pseudoY = (i * 59 + 29) % 100;
      const pseudoSize = 0.5 + ((i * 17) % 5) / 10; // 0.5px to 0.9px radius (1px to 1.8px diameter)
      const pseudoOpacity = 0.2 + ((i * 23) % 61) / 100; // 0.20 to 0.81
      const pseudoGlow = i % 4 === 0;

      list.push({
        id: i,
        cx: pseudoX,
        cy: pseudoY,
        r: pseudoSize,
        opacity: pseudoOpacity,
        glow: pseudoGlow,
      });
    }
    return list;
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#0a0a0e]"
      style={{
        backgroundColor: "#0a0a0e",
      }}
    >
      {/* Layer 1: Solid Dark Navy-Black Base (#0a0a0e) */}
      <div className="absolute inset-0 bg-[#0a0a0e] pointer-events-none" />

      {/* Layer 2: Graph-Paper Grid Overlay (40px x 40px, thin 1px lines, rgba(255,255,255,0.035)) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Layer 4: Soft Reddish Radial Gradient Glows (rgba(200,30,30,0.08), heavily blurred) */}
      {/* Top-center / Left ambient warmth bloom */}
      <div
        className="absolute top-[-10%] left-[15%] w-[650px] h-[650px] rounded-full pointer-events-none blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 30, 30, 0.08) 0%, rgba(200, 30, 30, 0.02) 50%, transparent 70%)",
        }}
      />

      {/* Center-right subtle ambient warmth bloom */}
      <div
        className="absolute top-[40%] right-[10%] w-[550px] h-[550px] rounded-full pointer-events-none blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 30, 30, 0.06) 0%, rgba(200, 30, 30, 0.01) 50%, transparent 70%)",
        }}
      />

      {/* Bottom-left ambient warmth bloom */}
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 30, 30, 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Layer 3: Star Field (120 small dots 1-2px, opacity 0.2-0.8, subtle blur/glow) */}
      {mounted && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {stars.map((star) => (
            <circle
              key={star.id}
              cx={`${star.cx}%`}
              cy={`${star.cy}%`}
              r={star.r}
              fill="#FFFFFF"
              opacity={star.opacity}
              style={
                star.glow
                  ? {
                      filter: "drop-shadow(0px 0px 2.5px rgba(255, 255, 255, 0.75))",
                    }
                  : undefined
              }
            />
          ))}
        </svg>
      )}
    </div>
  );
}
