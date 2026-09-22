"use client";

import { useRef, useEffect } from "react";

// Number of radial control points around the blob perimeter
const NUM_POINTS = 16;
const BASE_RADIUS = 150; // SVG coordinate units (viewBox -220 to 220)

// Catmull-Rom to Cubic Bezier spline generator for smooth closed SVG path
function getSmoothBlobPath(points: { x: number; y: number }[]): string {
  const n = points.length;
  if (n === 0) return "";

  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;

  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];

    // Standard Catmull-Rom to cubic Bezier conversion
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }

  return d + " Z";
}

export default function GlossyHeroSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltWrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const specularRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  // 3D Tilt targets and currents
  const tiltTarget = useRef({ rx: 0, ry: 0, sx: 0, sy: 0 });
  const tiltCurrent = useRef({ rx: 0, ry: 0, sx: 0, sy: 0 });

  // Cursor reach state (angle in radians, stretch magnitude 0 to 1)
  const cursorState = useRef({
    angle: 0,
    reachIntensity: 0, // 0 = resting, 1 = maximum stretch
    isHovered: false,
  });

  // Current interpolated radii for each of the 16 control points
  const currentRadii = useRef<number[]>(new Array(NUM_POINTS).fill(BASE_RADIUS));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    // Find the parent hero section container for scoped mouse tracking
    const heroEl = containerRef.current?.closest("section") || containerRef.current?.parentElement;
    if (!heroEl) return;

    const handlePointerMove = (clientX: number, clientY: number) => {
      cursorState.current.isHovered = true;
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = clientX - centerX;
      const dy = clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Angle from center of blob to cursor
      cursorState.current.angle = Math.atan2(dy, dx);

      // Stretch intensity increases as cursor gets closer (active within 550px)
      const maxDistance = 550;
      const proximity = Math.max(0, Math.min(1, 1 - dist / maxDistance));
      cursorState.current.reachIntensity = Math.pow(proximity, 1.2);

      // Normalized coordinates relative to hero container for 3D tilt
      const heroRect = heroEl.getBoundingClientRect();
      const nx = Math.max(-1, Math.min(1, dx / (heroRect.width / 2)));
      const ny = Math.max(-1, Math.min(1, dy / (heroRect.height / 2)));

      // 3D Tilt: rotateX/rotateY clamped to ±12deg
      tiltTarget.current.rx = -ny * 12;
      tiltTarget.current.ry = nx * 12;

      // Specular highlight shift (±30px)
      tiltTarget.current.sx = nx * 30;
      tiltTarget.current.sy = ny * 30;
    };

    const handleMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handlePointerLeave = () => {
      cursorState.current.isHovered = false;
      cursorState.current.reachIntensity = 0;
      tiltTarget.current = { rx: 0, ry: 0, sx: 0, sy: 0 };
    };

    heroEl.addEventListener("mousemove", handleMouseMove as EventListener);
    heroEl.addEventListener("mouseleave", handlePointerLeave as EventListener);
    heroEl.addEventListener("touchmove", handleTouchMove as EventListener, { passive: true });
    heroEl.addEventListener("touchend", handlePointerLeave as EventListener);

    let startTime = performance.now();

    // Unified animation frame loop
    const animate = (time: number) => {
      const t = (time - startTime) * 0.001; // elapsed seconds

      // 1. Lerp 3D Tilt & Specular Highlight
      const tiltEase = cursorState.current.isHovered ? 0.09 : 0.05;
      tiltCurrent.current.rx += (tiltTarget.current.rx - tiltCurrent.current.rx) * tiltEase;
      tiltCurrent.current.ry += (tiltTarget.current.ry - tiltCurrent.current.ry) * tiltEase;
      tiltCurrent.current.sx += (tiltTarget.current.sx - tiltCurrent.current.sx) * tiltEase;
      tiltCurrent.current.sy += (tiltTarget.current.sy - tiltCurrent.current.sy) * tiltEase;

      if (tiltWrapperRef.current) {
        tiltWrapperRef.current.style.transform = `perspective(800px) rotateX(${tiltCurrent.current.rx.toFixed(2)}deg) rotateY(${tiltCurrent.current.ry.toFixed(2)}deg)`;
      }

      if (specularRef.current) {
        specularRef.current.style.transform = `translate3d(${tiltCurrent.current.sx.toFixed(1)}px, ${tiltCurrent.current.sy.toFixed(1)}px, 0)`;
      }

      // 2. Compute Ambient Morph + Directional Point-Reach for each SVG control point
      const points: { x: number; y: number }[] = [];
      const cursorAngle = cursorState.current.angle;
      const reachIntensity = cursorState.current.reachIntensity;

      for (let i = 0; i < NUM_POINTS; i++) {
        const angle = (i / NUM_POINTS) * Math.PI * 2;

        // Multi-frequency smooth organic ambient wobble
        const ambientNoise =
          Math.sin(t * 0.7 + i * 1.1) * 14 +
          Math.cos(t * 0.9 - i * 0.8) * 10 +
          Math.sin(t * 1.6 + i * 2.2) * 6;

        // Angular distance from this control point to cursor direction (-PI to PI)
        let angleDiff = angle - cursorAngle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

        // Gaussian curve for directional reach pull (pulls the points closest to cursor)
        const sigma = 0.55; // width of the point tip
        const directionalInfluence = Math.exp(-(angleDiff * angleDiff) / (2 * sigma * sigma));
        const maxReachDistance = 55; // pixels in SVG coordinates
        const reachOffset = directionalInfluence * reachIntensity * maxReachDistance;

        // Target radius for this point
        const targetRadius = BASE_RADIUS + ambientNoise + reachOffset;

        // Lerp radius for silky smooth easing in and out
        const radiusEase = 0.12;
        currentRadii.current[i] += (targetRadius - currentRadii.current[i]) * radiusEase;

        const r = currentRadii.current[i];
        points.push({
          x: Math.cos(angle) * r,
          y: Math.sin(angle) * r,
        });
      }

      // 3. Update SVG Path
      if (pathRef.current) {
        pathRef.current.setAttribute("d", getSmoothBlobPath(points));
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

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
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Outer ambient diffuse glow */}
      <div
        className="glossy-aura absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full blur-[75px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(231,33,43,0.42) 0%, rgba(185,28,28,0.2) 45%, rgba(0,0,0,0) 75%)",
        }}
      />

      {/* 3D Tilt & Parallax Wrapper */}
      <div
        ref={tiltWrapperRef}
        className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] transition-transform duration-75 will-change-transform flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Dynamic SVG Liquid Reaching Blob with Radial Gradient & Drop Shadow */}
        <svg
          viewBox="-220 -220 440 440"
          className="w-full h-full overflow-visible drop-shadow-[0_0_45px_rgba(231,33,43,0.45)] drop-shadow-[0_0_90px_rgba(185,28,28,0.25)]"
        >
          <defs>
            {/* Rich Ember Radial Gradient */}
            <radialGradient
              id="liquidEmberGrad"
              cx="38%"
              cy="32%"
              r="68%"
              fx="40%"
              fy="30%"
            >
              <stop offset="0%" stopColor="#ffeedd" />
              <stop offset="9%" stopColor="#ffd099" />
              <stop offset="22%" stopColor="#f97316" />
              <stop offset="42%" stopColor="#e7212b" />
              <stop offset="68%" stopColor="#991b1b" />
              <stop offset="88%" stopColor="#360707" />
              <stop offset="100%" stopColor="#140202" />
            </radialGradient>

            {/* Inner Glaze Filter */}
            <radialGradient id="glazeRim" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="transparent" />
              <stop offset="92%" stopColor="rgba(255, 140, 50, 0.4)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.85)" />
            </radialGradient>
          </defs>

          {/* Main Morphing + Reaching SVG Blob Path */}
          <path
            ref={pathRef}
            d="M 150 0 C 150 82.8 82.8 150 0 150 C -82.8 150 -150 82.8 -150 0 C -150 -82.8 -82.8 -150 0 -150 C 82.8 -150 150 -82.8 150 0 Z"
            fill="url(#liquidEmberGrad)"
          />

          {/* Secondary Glaze Layer for Depth */}
          <path
            d="M 150 0 C 150 82.8 82.8 150 0 150 C -82.8 150 -150 82.8 -150 0 C -150 -82.8 -82.8 -150 0 -150 C 82.8 -150 150 -82.8 150 0 Z"
            fill="url(#glazeRim)"
            opacity="0.75"
            style={{ mixBlendMode: "overlay" }}
          />
        </svg>

        {/* Dynamic Specular Glass Reflection (Moves with 3D Tilt) */}
        <div
          ref={specularRef}
          className="absolute top-[16%] left-[22%] w-[42%] h-[32%] rounded-[50%] pointer-events-none will-change-transform"
          style={{
            background:
              "radial-gradient(ellipse at 42% 38%, rgba(255,255,255,0.95) 0%, rgba(255,242,210,0.65) 28%, rgba(255,160,60,0.2) 60%, transparent 80%)",
            filter: "blur(2.5px)",
          }}
        />

        {/* Secondary Bottom Ambient Reflectance */}
        <div
          className="absolute bottom-[14%] right-[20%] w-[28%] h-[20%] rounded-[50%] pointer-events-none opacity-40 blur-[5px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,140,50,0.7) 0%, rgba(231,33,43,0.25) 55%, transparent 85%)",
          }}
        />
      </div>
    </div>
  );
}
