"use client";
import React from "react";

export interface DarkGridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  showHairlineBorders?: boolean;
}

export default function DarkGridBackground({
  children,
  className = "",
  showHairlineBorders = true,
}: DarkGridBackgroundProps) {
  return (
    <section className={`relative overflow-hidden bg-[#000000] blueprint-grid blueprint-dot-grid ${className}`}>
      {showHairlineBorders && (
        <>
          <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />
        </>
      )}
      {children}
    </section>
  );
}
