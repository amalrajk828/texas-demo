"use client";

import React, { useRef, useEffect } from "react";

const NUM_POINTS = 16;
const BASE_RADIUS = 160; // SVG coordinate units (viewBox -240 to 240)

// Harmonic multi-frequency parameters for zero-gravity soap-bubble elasticity
const HARMONIC_PARAMS = [
  { p1: 0.0, f1: 0.42, a1: 12, p2: 1.2, f2: 0.62, a2: 7, p3: 2.1, f3: 0.88, a3: 4 },
  { p1: 0.9, f1: 0.46, a1: 10, p2: 2.6, f2: 0.56, a2: 8, p3: 0.4, f3: 0.82, a3: 4 },
  { p1: 1.8, f1: 0.40, a1: 13, p2: 0.7, f2: 0.65, a2: 6, p3: 3.2, f3: 0.90, a3: 3 },
  { p1: 2.7, f1: 0.48, a1: 9,  p2: 3.9, f2: 0.52, a2: 9, p3: 1.8, f3: 0.78, a3: 4 },
  { p1: 3.6, f1: 0.44, a1: 11, p2: 1.8, f2: 0.60, a2: 7, p3: 4.1, f3: 0.85, a3: 3 },
  { p1: 4.5, f1: 0.50, a1: 10, p2: 4.8, f2: 0.54, a2: 8, p3: 5.3, f3: 0.80, a3: 4 },
  { p1: 5.4, f1: 0.41, a1: 12, p2: 2.3, f2: 0.66, a2: 6, p3: 0.9, f3: 0.89, a3: 3 },
  { p1: 0.5, f1: 0.47, a1: 9,  p2: 5.1, f2: 0.53, a2: 9, p3: 2.5, f3: 0.79, a3: 4 },
  { p1: 1.4, f1: 0.43, a1: 11, p2: 1.1, f2: 0.61, a2: 7, p3: 3.8, f3: 0.86, a3: 3 },
  { p1: 2.3, f1: 0.49, a1: 10, p2: 3.4, f2: 0.55, a2: 8, p3: 5.0, f3: 0.81, a3: 4 },
  { p1: 3.2, f1: 0.42, a1: 13, p2: 0.4, f2: 0.64, a2: 6, p3: 1.3, f3: 0.88, a3: 3 },
  { p1: 4.1, f1: 0.45, a1: 10, p2: 2.7, f2: 0.58, a2: 8, p3: 4.5, f3: 0.83, a3: 4 },
  { p1: 5.0, f1: 0.39, a1: 12, p2: 1.5, f2: 0.63, a2: 6, p3: 2.8, f3: 0.87, a3: 3 },
  { p1: 0.2, f1: 0.46, a1: 10, p2: 4.2, f2: 0.51, a2: 8, p3: 0.7, f3: 0.77, a3: 4 },
  { p1: 1.1, f1: 0.41, a1: 11, p2: 0.9, f2: 0.59, a2: 7, p3: 3.5, f3: 0.84, a3: 3 },
  { p1: 2.0, f1: 0.48, a1: 9,  p2: 3.1, f2: 0.54, a2: 9, p3: 4.9, f3: 0.80, a3: 4 },
];

// Catmull-Rom to Cubic Bezier closed spline algorithm
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

export default function PurpleHeroBubble() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltWrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const glazePathRef = useRef<SVGPathElement>(null);
  const highlightSoftRef = useRef<SVGEllipseElement>(null);
  const highlightSharpRef = useRef<SVGEllipseElement>(null);
  const rafId = useRef<number | null>(null);

  // Tilt and cursor targets
  const tiltTarget = useRef({ rx: 0, ry: 0, sx: 0, sy: 0 });
  const tiltCurrent = useRef({ rx: 0, ry: 0, sx: 0, sy: 0 });
  const mouseState = useRef({
    angle: 0,
    reachIntensity: 0,
  });

  const currentRadii = useRef<number[]>(new Array(NUM_POINTS).fill(BASE_RADIUS));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const heroEl = containerRef.current?.closest("section") || containerRef.current?.parentElement;
    if (!heroEl) return;

    const handlePointerMove = (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = clientX - cx;
      const dy = clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      mouseState.current.angle = Math.atan2(dy, dx);
      const maxDistance = 600;
      const proximity = Math.max(0, Math.min(1, 1 - dist / maxDistance));
      mouseState.current.reachIntensity = Math.pow(proximity, 1.25);

      const heroRect = heroEl.getBoundingClientRect();
      const nx = Math.max(-1, Math.min(1, dx / (heroRect.width / 2)));
      const ny = Math.max(-1, Math.min(1, dy / (heroRect.height / 2)));

      tiltTarget.current.rx = -ny * 10;
      tiltTarget.current.ry = nx * 10;
      tiltTarget.current.sx = nx * 28;
      tiltTarget.current.sy = ny * 28;
    };

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const onMouseLeave = () => {
      tiltTarget.current = { rx: 0, ry: 0, sx: 0, sy: 0 };
      mouseState.current.reachIntensity = 0;
    };

    heroEl.addEventListener("mousemove", onMouseMove as EventListener);
    heroEl.addEventListener("touchmove", onTouchMove as EventListener, { passive: true });
    heroEl.addEventListener("mouseleave", onMouseLeave as EventListener);
    heroEl.addEventListener("touchend", onMouseLeave as EventListener);

    let startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = (now - startTime) * 0.001;
      const t = prefersReducedMotion ? 0 : elapsed;

      // Smooth lerp 3D tilt
      const tiltEase = 0.08;
      tiltCurrent.current.rx += (tiltTarget.current.rx - tiltCurrent.current.rx) * tiltEase;
      tiltCurrent.current.ry += (tiltTarget.current.ry - tiltCurrent.current.ry) * tiltEase;
      tiltCurrent.current.sx += (tiltTarget.current.sx - tiltCurrent.current.sx) * tiltEase;
      tiltCurrent.current.sy += (tiltTarget.current.sy - tiltCurrent.current.sy) * tiltEase;

      if (tiltWrapperRef.current) {
        tiltWrapperRef.current.style.transform = `perspective(800px) rotateX(${tiltCurrent.current.rx.toFixed(
          2
        )}deg) rotateY(${tiltCurrent.current.ry.toFixed(2)}deg)`;
      }

      // Compute morphing perimeter points
      const points: { x: number; y: number }[] = [];
      const cursorAngle = mouseState.current.angle;
      const reachIntensity = mouseState.current.reachIntensity;

      for (let i = 0; i < NUM_POINTS; i++) {
        const p = HARMONIC_PARAMS[i];
        const theta = (i / NUM_POINTS) * Math.PI * 2;

        const wobble =
          Math.sin(t * p.f1 + p.p1) * p.a1 +
          Math.cos(t * p.f2 + p.p2) * p.a2 +
          Math.sin(t * p.f3 + p.p3) * p.a3;

        let angleDiff = theta - cursorAngle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

        const sigma = 0.55;
        const directionalInfluence = Math.exp(-(angleDiff * angleDiff) / (2 * sigma * sigma));
        const maxReachDistance = 50;
        const reachOffset = directionalInfluence * reachIntensity * maxReachDistance;

        const targetRadius = BASE_RADIUS + wobble + reachOffset;
        const radiusEase = 0.12;
        currentRadii.current[i] += (targetRadius - currentRadii.current[i]) * radiusEase;

        const r = currentRadii.current[i];
        points.push({
          x: Math.cos(theta) * r,
          y: Math.sin(theta) * r,
        });
      }

      const d = smoothClosedPath(points);
      if (pathRef.current) pathRef.current.setAttribute("d", d);
      if (glowPathRef.current) glowPathRef.current.setAttribute("d", d);
      if (glazePathRef.current) glazePathRef.current.setAttribute("d", d);

      // Move specular highlights with tilt & sweeping ambient light
      if (highlightSoftRef.current) {
        const sweepX = Math.sin(t * 0.35) * 16;
        const sweepY = Math.cos(t * 0.28) * 12;
        highlightSoftRef.current.setAttribute("cx", (-48 + tiltCurrent.current.sx + sweepX).toFixed(1));
        highlightSoftRef.current.setAttribute("cy", (-56 + tiltCurrent.current.sy + sweepY).toFixed(1));
      }

      if (highlightSharpRef.current) {
        const sweepX = Math.sin(t * 0.35) * 14;
        const sweepY = Math.cos(t * 0.28) * 10;
        highlightSharpRef.current.setAttribute("cx", (-44 + tiltCurrent.current.sx * 1.1 + sweepX).toFixed(1));
        highlightSharpRef.current.setAttribute("cy", (-52 + tiltCurrent.current.sy * 1.1 + sweepY).toFixed(1));
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      heroEl.removeEventListener("mousemove", onMouseMove as EventListener);
      heroEl.removeEventListener("touchmove", onTouchMove as EventListener);
      heroEl.removeEventListener("mouseleave", onMouseLeave as EventListener);
      heroEl.removeEventListener("touchend", onMouseLeave as EventListener);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Outer Deep Violet Atmospheric Glow Aura */}
      <div
        className="absolute w-[440px] h-[440px] sm:w-[580px] sm:h-[580px] lg:w-[720px] lg:h-[720px] rounded-full blur-[90px] pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.55) 0%, rgba(192, 38, 211, 0.32) 40%, rgba(88, 28, 135, 0.18) 65%, rgba(10, 10, 15, 0) 80%)",
        }}
      />

      {/* 2. Secondary Magenta Core Aura */}
      <div
        className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full blur-[55px] pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(217, 70, 239, 0.65) 0%, rgba(168, 85, 247, 0.35) 50%, rgba(10, 10, 15, 0) 75%)",
        }}
      />

      {/* 3. 3D Tilt & Parallax Floating Bubble Wrapper */}
      <div
        ref={tiltWrapperRef}
        className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] flex items-center justify-center pointer-events-none will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          filter:
            "drop-shadow(0 0 50px rgba(168, 85, 247, 0.65)) drop-shadow(0 0 95px rgba(217, 70, 239, 0.35))",
        }}
      >
        <svg
          viewBox="-240 -240 480 480"
          className="w-full h-full overflow-visible"
          style={{ willChange: "transform" }}
        >
          <defs>
            {/* Photorealistic Violet-Magenta Iridescent Radial Gradient */}
            <radialGradient
              id="purpleBubbleGradient"
              cx="38%"
              cy="32%"
              r="68%"
              fx="36%"
              fy="30%"
            >
              <stop offset="0%" stopColor="#faf5ff" />
              <stop offset="8%" stopColor="#f3e8ff" />
              <stop offset="22%" stopColor="#e879f9" />
              <stop offset="42%" stopColor="#c026d3" />
              <stop offset="68%" stopColor="#7e22ce" />
              <stop offset="88%" stopColor="#3b0764" />
              <stop offset="100%" stopColor="#140224" />
            </radialGradient>

            {/* Soft Sliding Specular Glare (Wet Glass Sheen) */}
            <radialGradient
              id="purpleSpecularSoft"
              cx="40%"
              cy="35%"
              r="65%"
              fx="38%"
              fy="32%"
            >
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.98)" />
              <stop offset="25%" stopColor="rgba(250, 232, 255, 0.75)" />
              <stop offset="55%" stopColor="rgba(232, 121, 249, 0.28)" />
              <stop offset="85%" stopColor="rgba(192, 38, 211, 0.05)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </radialGradient>

            {/* Sharp Specular Hotspot Glare */}
            <radialGradient
              id="purpleSpecularSharp"
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="rgba(255, 255, 255, 0.95)" />
              <stop offset="70%" stopColor="rgba(245, 208, 254, 0.45)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>

            {/* Inner Glaze & 3D Fresnel Shadows */}
            <radialGradient
              id="purpleInnerGlaze"
              cx="48%"
              cy="46%"
              r="52%"
            >
              <stop offset="0%" stopColor="transparent" />
              <stop offset="68%" stopColor="transparent" />
              <stop offset="88%" stopColor="rgba(232, 121, 249, 0.45)" />
              <stop offset="96%" stopColor="rgba(59, 7, 100, 0.85)" />
              <stop offset="100%" stopColor="rgba(20, 2, 36, 0.95)" />
            </radialGradient>

            {/* Bottom-Right Ambient Bounce Light (Cyan/Violet bounce) */}
            <radialGradient
              id="purpleAmbientBounce"
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop offset="0%" stopColor="rgba(216, 180, 254, 0.65)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.28)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            {/* Studio Atmosphere Glow Blur */}
            <filter id="purpleAtmosphereGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
            </filter>

            {/* Sheen Blur */}
            <filter id="purpleSheenBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" />
            </filter>
          </defs>

          {/* 1. Volumetric Atmosphere Back-Glow */}
          <path
            ref={glowPathRef}
            fill="rgba(192, 38, 211, 0.6)"
            filter="url(#purpleAtmosphereGlow)"
            opacity="0.95"
          />

          {/* 2. Main Liquid Gel Purple Bubble Body */}
          <path
            ref={pathRef}
            fill="url(#purpleBubbleGradient)"
          />

          {/* 3. Deep Fresnel Inner Shadows & Volume Glaze */}
          <path
            ref={glazePathRef}
            fill="url(#purpleInnerGlaze)"
          />

          {/* 4. Bottom-Right Ambient Bounce Light */}
          <ellipse
            cx="48"
            cy="68"
            rx="58"
            ry="32"
            fill="url(#purpleAmbientBounce)"
            transform="rotate(18 48 68)"
            filter="url(#purpleSheenBlur)"
            opacity="0.75"
          />

          {/* 5. Primary Sliding Wet Glass Sheen Highlight */}
          <ellipse
            ref={highlightSoftRef}
            cx="-48"
            cy="-56"
            rx="58"
            ry="38"
            fill="url(#purpleSpecularSoft)"
            transform="rotate(-16 -48 -56)"
            filter="url(#purpleSheenBlur)"
          />

          {/* 6. Crisp Hotspot Glare (Pinpoint studio key light) */}
          <ellipse
            ref={highlightSharpRef}
            cx="-44"
            cy="-52"
            rx="18"
            ry="11"
            fill="url(#purpleSpecularSharp)"
            transform="rotate(-16 -44 -52)"
          />
        </svg>
      </div>
    </div>
  );
}
