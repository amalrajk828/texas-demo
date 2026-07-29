"use client";
import React from "react";

export interface LightGradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  showTopBorder?: boolean;
}

export default function LightGradientBackground({
  children,
  className = "",
  showTopBorder = false,
}: LightGradientBackgroundProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)",
      }}
    >
      {/* Background depth blobs for frosted glass refraction */}
      <div
        className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none blur-[80px] opacity-90"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(235,240,248,0.5) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[20%] left-[28%] w-[550px] h-[550px] rounded-full pointer-events-none blur-[90px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(165,180,200,0.5) 0%, rgba(140,158,180,0.2) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none blur-[100px] opacity-75"
        style={{
          background:
            "radial-gradient(circle, rgba(150,168,190,0.45) 0%, rgba(130,148,172,0.15) 55%, transparent 70%)",
        }}
      />

      {showTopBorder && (
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: "rgba(0,0,0,0.06)" }}
        />
      )}

      {children}
    </div>
  );
}
