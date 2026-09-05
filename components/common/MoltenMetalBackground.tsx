"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamic import with ssr: false so WebGL / OGL canvas initialization does not block SSR / LCP
const MoltenMetal = dynamic(
  () => import("@/components/MoltenMetal/MoltenMetal"),
  { ssr: false }
);

export interface MoltenMetalBackgroundProps {
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
  scale?: number;
  detail?: number;
  glow?: number;
  coreSize?: number;
  swirl?: number;
  fold?: number;
  blackPoint?: number;
  brightness?: number;
  colorMode?: "ember" | "molten" | "frost";
  grain?: boolean;
  grainIntensity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  opacity?: number;
  className?: string;
  showScrim?: boolean;
  scrimGradient?: string;
  showBorders?: boolean;
  showHeatGlow?: boolean;
}

/**
 * MoltenMetalBackground
 * 
 * Reusable hero background layer extracted from /service/flow-measurement-solutions/.
 * Renders the high-performance WebGL flowing molten metal shader, glowing heat highlights,
 * contrast-enhancing gradient scrim, and subtle top/bottom borders.
 */
export default function MoltenMetalBackground({
  color1 = "#3D0A0A",
  color2 = "#E63329",
  color3 = "#FFD9A0",
  speed = 0.3,
  scale = 3,
  detail = 4,
  glow = 1.8,
  coreSize = 0.09,
  swirl = 0.8,
  fold = -0.2,
  blackPoint = 0.08,
  brightness = 1.2,
  colorMode = "ember",
  grain = true,
  grainIntensity = 0.04,
  mouseInteraction = true,
  mouseStrength = 0.25,
  opacity = 0.9,
  className = "",
  showScrim = true,
  scrimGradient = "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.7) 100%)",
  showBorders = true,
  showHeatGlow = true,
}: MoltenMetalBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none ${className}`}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* WebGL Molten Metal Shader Canvas */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      >
        <MoltenMetal
          color1={color1}
          color2={color2}
          color3={color3}
          speed={speed}
          scale={scale}
          detail={detail}
          glow={glow}
          coreSize={coreSize}
          swirl={swirl}
          fold={fold}
          blackPoint={blackPoint}
          brightness={brightness}
          colorMode={colorMode}
          grain={grain}
          grainIntensity={grainIntensity}
          mouseInteraction={mouseInteraction}
          mouseStrength={mouseStrength}
          opacity={opacity}
        />
      </div>

      {/* Optional Heat Glow / Ambience Layer */}
      {showHeatGlow && (
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(230, 51, 41, 0.14) 0%, rgba(61, 10, 10, 0.08) 55%, transparent 100%)",
          }}
        />
      )}

      {/* Scrim for pristine text contrast & readability */}
      {showScrim && (
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background: scrimGradient,
          }}
        />
      )}

      {/* Hairline subtle top and bottom borders */}
      {showBorders && (
        <>
          <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[3]" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[3]" />
        </>
      )}
    </div>
  );
}
