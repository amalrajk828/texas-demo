"use client";

import React, { useRef, useEffect } from "react";

const NUM_POINTS = 12;
const BASE_RADIUS = 150; // Base SVG radius (viewBox -240 to 240)

// Harmonic parameters for 12 radial control points
// Calibrated for slow, elastic zero-gravity breathing motion
const HARMONIC_PARAMS = [
  { p1: 0.0, f1: 0.38, a1: 11, p2: 1.2, f2: 0.58, a2: 7, p3: 2.1, f3: 0.82, a3: 4 },
  { p1: 0.9, f1: 0.42, a1: 10, p2: 2.6, f2: 0.52, a2: 8, p3: 0.4, f3: 0.78, a3: 4 },
  { p1: 1.8, f1: 0.36, a1: 12, p2: 0.7, f2: 0.60, a2: 6, p3: 3.2, f3: 0.85, a3: 3 },
  { p1: 2.7, f1: 0.44, a1: 9,  p2: 3.9, f2: 0.48, a2: 9, p3: 1.8, f3: 0.74, a3: 4 },
  { p1: 3.6, f1: 0.40, a1: 11, p2: 1.8, f2: 0.55, a2: 7, p3: 4.1, f3: 0.80, a3: 3 },
  { p1: 4.5, f1: 0.46, a1: 10, p2: 4.8, f2: 0.50, a2: 8, p3: 5.3, f3: 0.76, a3: 4 },
  { p1: 5.4, f1: 0.37, a1: 12, p2: 2.3, f2: 0.62, a2: 6, p3: 0.9, f3: 0.84, a3: 3 },
  { p1: 0.5, f1: 0.43, a1: 9,  p2: 5.1, f2: 0.49, a2: 9, p3: 2.5, f3: 0.75, a3: 4 },
  { p1: 1.4, f1: 0.39, a1: 11, p2: 1.1, f2: 0.56, a2: 7, p3: 3.8, f3: 0.81, a3: 3 },
  { p1: 2.3, f1: 0.45, a1: 10, p2: 3.4, f2: 0.51, a2: 8, p3: 5.0, f3: 0.77, a3: 4 },
  { p1: 3.2, f1: 0.38, a1: 12, p2: 0.4, f2: 0.59, a2: 6, p3: 1.3, f3: 0.83, a3: 3 },
  { p1: 4.1, f1: 0.41, a1: 10, p2: 2.7, f2: 0.53, a2: 8, p3: 4.5, f3: 0.79, a3: 4 },
];

// Catmull-Rom to Cubic Bezier spline converter for seamless closed curve
function smoothClosedPath(points: { x: number; y: number }[]): string {
  const n = points.length;
  if (n < 3) return "";

  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;

  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }

  return d + " Z";
}

export default function SvgHeroBlob() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const glazePathRef = useRef<SVGPathElement>(null);
  const highlightSoftRef = useRef<SVGEllipseElement>(null);
  const highlightSharpRef = useRef<SVGEllipseElement>(null);
  const gradientRef = useRef<SVGRadialGradientElement>(null);
  const rafId = useRef<number | null>(null);

  // Mouse & reach state
  const mouseState = useRef({
    angle: 0,
    reachIntensityTarget: 0,
    reachIntensityCurrent: 0,
    hlTargetX: 0,
    hlTargetY: 0,
    hlCurrentX: 0,
    hlCurrentY: 0,
  });

  // Current smoothed radii for all 12 control points
  const currentRadii = useRef<number[]>(new Array(NUM_POINTS).fill(BASE_RADIUS));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const heroEl = containerRef.current?.closest("section") || containerRef.current?.parentElement;
    if (!heroEl) return;

    const handlePointerMove = (clientX: number, clientY: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = clientX - centerX;
      const dy = clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      mouseState.current.angle = Math.atan2(dy, dx);

      // Proximity range up to 550px for liquid surface tension pull
      const maxDistance = 550;
      const proximity = Math.max(0, Math.min(1, 1 - dist / maxDistance));
      mouseState.current.reachIntensityTarget = Math.pow(proximity, 1.25);

      // Specular highlight subtle glide toward cursor
      const nx = Math.max(-1, Math.min(1, dx / 300));
      const ny = Math.max(-1, Math.min(1, dy / 300));
      mouseState.current.hlTargetX = nx * 22;
      mouseState.current.hlTargetY = ny * 22;
    };

    const handleMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handlePointerLeave = () => {
      mouseState.current.reachIntensityTarget = 0;
      mouseState.current.hlTargetX = 0;
      mouseState.current.hlTargetY = 0;
    };

    heroEl.addEventListener("mousemove", handleMouseMove as EventListener);
    heroEl.addEventListener("mouseleave", handlePointerLeave as EventListener);
    heroEl.addEventListener("touchmove", handleTouchMove as EventListener, { passive: true });
    heroEl.addEventListener("touchend", handlePointerLeave as EventListener);

    if (prefersReducedMotion) {
      const staticPoints: { x: number; y: number }[] = [];
      for (let i = 0; i < NUM_POINTS; i++) {
        const angle = (i / NUM_POINTS) * Math.PI * 2;
        staticPoints.push({
          x: Math.cos(angle) * BASE_RADIUS,
          y: Math.sin(angle) * BASE_RADIUS,
        });
      }
      const staticPath = smoothClosedPath(staticPoints);
      if (pathRef.current) pathRef.current.setAttribute("d", staticPath);
      if (glowPathRef.current) glowPathRef.current.setAttribute("d", staticPath);
      if (glazePathRef.current) glazePathRef.current.setAttribute("d", staticPath);
      return () => {
        heroEl.removeEventListener("mousemove", handleMouseMove as EventListener);
        heroEl.removeEventListener("mouseleave", handlePointerLeave as EventListener);
        heroEl.removeEventListener("touchmove", handleTouchMove as EventListener);
        heroEl.removeEventListener("touchend", handlePointerLeave as EventListener);
      };
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const t = (now - startTime) * 0.001; // Elapsed seconds

      // 1. Smooth reach intensity (elastic easing)
      mouseState.current.reachIntensityCurrent +=
        (mouseState.current.reachIntensityTarget - mouseState.current.reachIntensityCurrent) * 0.07;

      // 2. Smooth highlight drift
      mouseState.current.hlCurrentX +=
        (mouseState.current.hlTargetX - mouseState.current.hlCurrentX) * 0.06;
      mouseState.current.hlCurrentY +=
        (mouseState.current.hlTargetY - mouseState.current.hlCurrentY) * 0.06;

      // 3. Dynamic specular highlight sliding across surface
      // Combines ambient zero-gravity drift + cursor interaction
      const ambientHlX = Math.sin(t * 0.42) * 8 + Math.cos(t * 0.65) * 4;
      const ambientHlY = Math.cos(t * 0.38) * 7 + Math.sin(t * 0.55) * 3;

      const baseHx = -48 + mouseState.current.hlCurrentX + ambientHlX;
      const baseHy = -56 + mouseState.current.hlCurrentY + ambientHlY;

      if (highlightSoftRef.current) {
        highlightSoftRef.current.setAttribute("cx", baseHx.toFixed(2));
        highlightSoftRef.current.setAttribute("cy", baseHy.toFixed(2));
      }
      if (highlightSharpRef.current) {
        highlightSharpRef.current.setAttribute("cx", (baseHx + 4).toFixed(2));
        highlightSharpRef.current.setAttribute("cy", (baseHy + 3).toFixed(2));
      }

      // 4. Volumetric gradient focal point subtle shift
      if (gradientRef.current) {
        const fx = (36 + Math.sin(t * 0.35) * 4).toFixed(1);
        const fy = (30 + Math.cos(t * 0.40) * 4).toFixed(1);
        gradientRef.current.setAttribute("fx", `${fx}%`);
        gradientRef.current.setAttribute("fy", `${fy}%`);
      }

      // 5. Zero-gravity liquid breathing deformation calculation
      const points: { x: number; y: number }[] = [];
      const cursorAngle = mouseState.current.angle;
      const reachIntensity = mouseState.current.reachIntensityCurrent;

      // Global breathing wave (whole volume subtly expands/contracts like a living drop)
      const globalBreath = Math.sin(t * 0.32) * 5;

      for (let i = 0; i < NUM_POINTS; i++) {
        const angle = (i / NUM_POINTS) * Math.PI * 2;
        const p = HARMONIC_PARAMS[i];

        // Multi-frequency harmonic wave: slow, thick, organic fluid motion
        const harmonicWobble =
          Math.sin(t * p.f1 + p.p1) * p.a1 +
          Math.sin(t * p.f2 + p.p2) * p.a2 +
          Math.cos(t * p.f3 + p.p3) * p.a3;

        // Directional cursor reach pull with Gaussian falloff
        let diff = angle - cursorAngle;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;

        const sigma = 0.58;
        const gaussian = Math.exp(-(diff * diff) / (2 * sigma * sigma));
        const maxReach = BASE_RADIUS * 0.52;
        const reachOffset = gaussian * reachIntensity * maxReach;

        // Target radius combining base + global breathing + harmonic wobble + reach
        const targetRadius = BASE_RADIUS + globalBreath + harmonicWobble + reachOffset;

        // Smooth interpolation per point (fluid inertia)
        currentRadii.current[i] += (targetRadius - currentRadii.current[i]) * 0.085;

        const r = currentRadii.current[i];
        points.push({
          x: Math.cos(angle) * r,
          y: Math.sin(angle) * r,
        });
      }

      // 6. Generate smooth Catmull-Rom Bezier closed path
      const pathD = smoothClosedPath(points);

      if (pathRef.current) pathRef.current.setAttribute("d", pathD);
      if (glowPathRef.current) glowPathRef.current.setAttribute("d", pathD);
      if (glazePathRef.current) glazePathRef.current.setAttribute("d", pathD);

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      heroEl.removeEventListener("mousemove", handleMouseMove as EventListener);
      heroEl.removeEventListener("mouseleave", handlePointerLeave as EventListener);
      heroEl.removeEventListener("touchmove", handleTouchMove as EventListener);
      heroEl.removeEventListener("touchend", handlePointerLeave as EventListener);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] flex items-center justify-center pointer-events-none select-none"
      style={{
        filter: "drop-shadow(0 0 55px rgba(231,33,43,0.65)) drop-shadow(0 0 95px rgba(255,160,50,0.4))",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="-240 -240 480 480"
        className="w-full h-full overflow-visible"
        style={{ willChange: "transform" }}
      >
        <defs>
          {/* Photorealistic Volumetric Ember Radial Gradient */}
          <radialGradient
            ref={gradientRef}
            id="liquidGelGradient"
            cx="38%"
            cy="32%"
            r="68%"
            fx="36%"
            fy="30%"
          >
            <stop offset="0%" stopColor="#fff8ee" />
            <stop offset="7%" stopColor="#ffe2b8" />
            <stop offset="18%" stopColor="#fa781a" />
            <stop offset="38%" stopColor="#e7212b" />
            <stop offset="64%" stopColor="#941517" />
            <stop offset="84%" stopColor="#350606" />
            <stop offset="100%" stopColor="#140202" />
          </radialGradient>

          {/* Soft Sliding Specular Glare (Wet glass sheen) */}
          <radialGradient
            id="specularSoftGradient"
            cx="40%"
            cy="35%"
            r="65%"
            fx="38%"
            fy="32%"
          >
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.98)" />
            <stop offset="25%" stopColor="rgba(255, 242, 215, 0.75)" />
            <stop offset="55%" stopColor="rgba(255, 150, 55, 0.28)" />
            <stop offset="85%" stopColor="rgba(255, 100, 30, 0.05)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>

          {/* Crisp Hotspot Glare (Mirror point reflection) */}
          <radialGradient
            id="specularSharpGradient"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="rgba(255, 250, 235, 0.95)" />
            <stop offset="70%" stopColor="rgba(255, 210, 150, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>

          {/* Deep Fresnel Glaze & Inner Shadow Pooling for 3D Volume */}
          <radialGradient
            id="innerShadowGlaze"
            cx="48%"
            cy="46%"
            r="52%"
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="68%" stopColor="transparent" />
            <stop offset="88%" stopColor="rgba(255, 140, 50, 0.45)" />
            <stop offset="96%" stopColor="rgba(50, 5, 5, 0.85)" />
            <stop offset="100%" stopColor="rgba(15, 0, 0, 0.95)" />
          </radialGradient>

          {/* Bottom Ambient Bounce Light */}
          <radialGradient
            id="ambientBounceGrad"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="rgba(255, 150, 60, 0.65)" />
            <stop offset="50%" stopColor="rgba(231, 33, 43, 0.28)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Soft Studio Rim Glow Filter */}
          <filter id="studioAtmosphereGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="45" />
          </filter>

          {/* Highlight Soft Blur */}
          <filter id="sheenBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" />
          </filter>
        </defs>

        {/* 1. Volumetric Atmosphere Back-Glow */}
        <path
          ref={glowPathRef}
          fill="rgba(231, 33, 43, 0.55)"
          filter="url(#studioAtmosphereGlow)"
          opacity="0.95"
        />

        {/* 2. Main Liquid Gel Droplet Body */}
        <path
          ref={pathRef}
          fill="url(#liquidGelGradient)"
        />

        {/* 3. Deep Fresnel Inner Shadows & Volume Glaze */}
        <path
          ref={glazePathRef}
          fill="url(#innerShadowGlaze)"
        />

        {/* 4. Bottom-Right Ambient Bounce Light (Zero-g ground reflection) */}
        <ellipse
          cx="48"
          cy="68"
          rx="58"
          ry="32"
          fill="url(#ambientBounceGrad)"
          transform="rotate(18 48 68)"
          filter="url(#sheenBlur)"
          opacity="0.75"
        />

        {/* 5. Primary Sliding Wet Glass Sheen Highlight */}
        <ellipse
          ref={highlightSoftRef}
          cx="-48"
          cy="-56"
          rx="58"
          ry="38"
          fill="url(#specularSoftGradient)"
          transform="rotate(-16 -48 -56)"
          filter="url(#sheenBlur)"
        />

        {/* 6. Crisp Hotspot Glare (Pinpoint studio key light) */}
        <ellipse
          ref={highlightSharpRef}
          cx="-44"
          cy="-53"
          rx="18"
          ry="11"
          fill="url(#specularSharpGradient)"
          transform="rotate(-14 -44 -53)"
          opacity="0.96"
        />
      </svg>
    </div>
  );
}
