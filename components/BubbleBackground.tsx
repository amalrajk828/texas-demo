"use client";

import React, { useMemo } from "react";
import "./BubbleBackground.css";

export interface BubbleBackgroundProps {
  /**
   * 4-color palette representing brand & service colors.
   * Default: Texas Technical Red (#e7212b), Deep Crimson (#991b1b), Flow Blue (#2563eb), Thermal Amber (#ea580c)
   */
  colors?: string[];
  /**
   * Total number of bubbles to render (8 to 14 recommended). Default: 12
   */
  bubbleCount?: number;
  /**
   * Additional wrapper class name
   */
  className?: string;
  /**
   * Whether to include the subtle engineering blueprint dot-grid texture
   */
  showGrid?: boolean;
  /**
   * Opacity of the background contrast overlay / text scrim (0 to 1). Default: 0.35
   */
  overlayOpacity?: number;
  /**
   * Children content if used as a container wrapper
   */
  children?: React.ReactNode;
}

interface BubbleConfig {
  id: number;
  sizeDesktop: number; // in px (100 - 400px)
  sizeMobile: number; // in px (80 - 220px)
  left: string; // percentage or calc
  top: string; // percentage or calc
  colorIndex: number;
  blur: number; // in px (40 - 80px)
  opacity: number; // (0.4 - 0.8)
  duration: number; // in seconds (15 - 40s)
  delay: number; // in seconds (staggered negative values)
  animVariant: number; // 1 to 6
  hideOnMobile: boolean;
}

const DEFAULT_COLORS = [
  "#e7212b", // [color1]: Texas Tech Signature Brand Red
  "#991b1b", // [color2]: Deep Flow Crimson / Burgundy
  "#2563eb", // [color3]: Precision Hydro Blue / Custody Transfer
  "#ea580c", // [color4]: Thermal Amber / Gas Flow Flare
];

// Curated bubble distribution for organic, non-overlapping natural fluid flow
const BASE_BUBBLE_PRESETS: Omit<BubbleConfig, "id">[] = [
  {
    sizeDesktop: 380,
    sizeMobile: 210,
    left: "5%",
    top: "-10%",
    colorIndex: 0, // Brand Red
    blur: 75,
    opacity: 0.75,
    duration: 22,
    delay: -4,
    animVariant: 1,
    hideOnMobile: false,
  },
  {
    sizeDesktop: 310,
    sizeMobile: 170,
    left: "68%",
    top: "5%",
    colorIndex: 2, // Flow Blue
    blur: 65,
    opacity: 0.65,
    duration: 28,
    delay: -12,
    animVariant: 2,
    hideOnMobile: false,
  },
  {
    sizeDesktop: 240,
    sizeMobile: 140,
    left: "38%",
    top: "20%",
    colorIndex: 1, // Deep Crimson
    blur: 55,
    opacity: 0.55,
    duration: 18,
    delay: -7,
    animVariant: 3,
    hideOnMobile: false,
  },
  {
    sizeDesktop: 340,
    sizeMobile: 190,
    left: "82%",
    top: "35%",
    colorIndex: 3, // Thermal Amber
    blur: 80,
    opacity: 0.7,
    duration: 34,
    delay: -19,
    animVariant: 4,
    hideOnMobile: false,
  },
  {
    sizeDesktop: 200,
    sizeMobile: 120,
    left: "15%",
    top: "48%",
    colorIndex: 2, // Flow Blue
    blur: 45,
    opacity: 0.45,
    duration: 25,
    delay: -15,
    animVariant: 5,
    hideOnMobile: true, // streamlined on mobile
  },
  {
    sizeDesktop: 290,
    sizeMobile: 160,
    left: "52%",
    top: "55%",
    colorIndex: 0, // Brand Red
    blur: 70,
    opacity: 0.68,
    duration: 31,
    delay: -8,
    animVariant: 6,
    hideOnMobile: false,
  },
  {
    sizeDesktop: 160,
    sizeMobile: 100,
    left: "-3%",
    top: "70%",
    colorIndex: 3, // Thermal Amber
    blur: 50,
    opacity: 0.5,
    duration: 17,
    delay: -3,
    animVariant: 1,
    hideOnMobile: true,
  },
  {
    sizeDesktop: 360,
    sizeMobile: 200,
    left: "28%",
    top: "75%",
    colorIndex: 1, // Deep Crimson
    blur: 75,
    opacity: 0.78,
    duration: 38,
    delay: -23,
    animVariant: 2,
    hideOnMobile: false,
  },
  {
    sizeDesktop: 220,
    sizeMobile: 130,
    left: "75%",
    top: "80%",
    colorIndex: 0, // Brand Red
    blur: 60,
    opacity: 0.58,
    duration: 21,
    delay: -11,
    animVariant: 3,
    hideOnMobile: false,
  },
  {
    sizeDesktop: 180,
    sizeMobile: 110,
    left: "90%",
    top: "-5%",
    colorIndex: 1, // Deep Crimson
    blur: 45,
    opacity: 0.42,
    duration: 19,
    delay: -14,
    animVariant: 4,
    hideOnMobile: true,
  },
  {
    sizeDesktop: 260,
    sizeMobile: 150,
    left: "20%",
    top: "15%",
    colorIndex: 3, // Thermal Amber
    blur: 65,
    opacity: 0.6,
    duration: 29,
    delay: -17,
    animVariant: 5,
    hideOnMobile: true,
  },
  {
    sizeDesktop: 320,
    sizeMobile: 180,
    left: "45%",
    top: "-15%",
    colorIndex: 2, // Flow Blue
    blur: 70,
    opacity: 0.72,
    duration: 36,
    delay: -9,
    animVariant: 6,
    hideOnMobile: false,
  },
];

/**
 * Helper to convert hex color to rgba for soft radial gradients
 */
function hexToRgba(hex: string, alpha: number): string {
  const cleanHex = hex.replace("#", "");
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return hex;
}

export default function BubbleBackground({
  colors = DEFAULT_COLORS,
  bubbleCount = 12,
  className = "",
  showGrid = true,
  overlayOpacity = 0.35,
  children,
}: BubbleBackgroundProps) {
  const activeColors = colors && colors.length >= 4 ? colors : DEFAULT_COLORS;
  const count = Math.min(Math.max(bubbleCount, 8), 14);

  const bubbles = useMemo(() => {
    return BASE_BUBBLE_PRESETS.slice(0, count).map((preset, index) => {
      const color = activeColors[preset.colorIndex % activeColors.length];
      return {
        ...preset,
        id: index + 1,
        color,
        // Soft radial gradient fill with smooth alpha falloff
        gradient: `radial-gradient(circle at 35% 35%, ${hexToRgba(color, 0.95)} 0%, ${hexToRgba(
          color,
          0.6
        )} 38%, ${hexToRgba(color, 0.15)} 70%, transparent 88%)`,
      };
    });
  }, [activeColors, count]);

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-0 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Layer 1: Dark base background with subtle depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06070a] via-[#100608] to-[#08090e]" />

      {/* Layer 2: Optional blueprint / dot grid overlay for technical texture */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-40 blueprint-grid blueprint-dot-grid"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      )}

      {/* Layer 3: Floating Animated Bubbles Container */}
      <div className="absolute inset-0 w-full h-full">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`bubble-item bubble-anim-${bubble.animVariant} ${
              bubble.hideOnMobile ? "hidden sm:block" : "block"
            }`}
            style={
              {
                left: bubble.left,
                top: bubble.top,
                background: bubble.gradient,
                filter: `blur(${bubble.blur}px)`,
                opacity: bubble.opacity,
                "--bubble-size": `${bubble.sizeDesktop}px`,
                "--bubble-size-sm": `${bubble.sizeMobile}px`,
                "--bubble-duration": `${bubble.duration}s`,
                "--bubble-delay": `${bubble.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Layer 4: Contrast Scrim / Readability Overlay for Text and CTAs */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"
        style={{ opacity: overlayOpacity + 0.2 }}
      />
      <div
        className="absolute inset-0 backdrop-blur-[1px] bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Layer 5: Children content (if rendered as wrapper) */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
