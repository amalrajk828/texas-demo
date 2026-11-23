"use client";

import React, { useRef, useCallback, useEffect } from "react";

export interface LiquidGlassNavProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  scrolled?: boolean;
  as?: "nav" | "div";
}

/**
 * LiquidGlassNav
 * Reusable liquid frosted glass navbar pill wrapper with 8 decorative optical layers:
 * 1. Surface (backdrop blur & white gradient - single backdrop-filter source)
 * 2. Tint (warm / subtle neutral wash)
 * 3. Shoulder (smooth multi-stop upper highlight curve)
 * 4. Reflection (angled sheen driven purely by integer translate3d on X)
 * 5. Pointer Light (cursor-tracking radial glow throttled via requestAnimationFrame)
 * 6. Rim (bright gradient edge with specular inset highlight)
 * 7. Caustic (bottom edge refraction spot with normal blending)
 * 8. Bottom (smooth multi-stop grounding gradient without hard inset lines)
 */
export function LiquidGlassNav({
  children,
  className = "",
  scrolled = false,
  as = "nav",
  ...props
}: LiquidGlassNavProps) {
  const containerRef = useRef<HTMLElement>(null);
  const rafId = useRef<number | null>(null);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafId.current !== null) return;

    rafId.current = window.requestAnimationFrame(() => {
      rafId.current = null;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = Math.round(clientX - rect.left);
      const y = Math.round(clientY - rect.top);
      // Sheen offset: -30px to +30px depending on horizontal cursor position (rounded integer)
      const normX = Math.round(((x / rect.width) - 0.5) * 60);

      el.style.setProperty("--glass-x", `${x}px`);
      el.style.setProperty("--glass-y", `${y}px`);
      el.style.setProperty("--glass-sheen-x", `${normX}px`);
      el.style.setProperty("--glass-pointer-opacity", "1");
    });
  }, []);

  const handlePointerEnter = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--glass-pointer-opacity", "1");
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (rafId.current !== null) {
      window.cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--glass-pointer-opacity", "0");
  }, []);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const Component = as as "nav" | "div";

  return (
    <Component
      ref={containerRef as any}
      data-scrolled={scrolled ? "true" : "false"}
      className={`liquid-nav ${scrolled ? "is-scrolled" : ""} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {/* Clipped Decorative Backdrop (preserves rounded-full contour without clipping external dropdown flyouts) */}
      <div className="liquid-nav-backdrop" aria-hidden="true">
        <span className="liquid-nav-surface" />
        <span className="liquid-nav-tint" />
        <span className="liquid-nav-shoulder" />
        <span className="liquid-nav-reflection" />
        <span className="liquid-nav-pointer-light" />
        <span className="liquid-nav-rim" />
        <span className="liquid-nav-caustic" />
        <span className="liquid-nav-bottom" />
      </div>

      {/* Foreground Content Flex Row */}
      <div className="liquid-nav-content">
        {children}
      </div>
    </Component>
  );
}

export default LiquidGlassNav;
