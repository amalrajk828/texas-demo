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
      className={`relative overflow-hidden bg-white ${className}`}
    >
      {showTopBorder && (
        <div
          className="absolute top-0 inset-x-0 h-px bg-gray-100"
        />
      )}

      {children}
    </div>
  );
}
