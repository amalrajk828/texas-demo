"use client";
import { useEffect, useRef } from "react";

export default function TearDivider() {
  const tearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tear = tearRef.current;
    if (!tear) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Build a random jagged tear line shared by both halves
    const steps = 48;
    const line: { x: number; y: number }[] = Array.from({ length: steps + 1 }, (_, i) => ({
      x: (i / steps) * 100,
      y: 55 + Math.random() * 30, // roughly 55–85% down the top half
    }));

    const poly = (pts: string[]) => `polygon(${pts.join(",")})`;

    // Top half: fill = page bg, edge = white fibrous shadow
    const topPts = line
      .slice()
      .reverse()
      .map((p) => `${p.x}% ${p.y}%`);
    const topFill = poly(["0% 0%", "100% 0%", ...topPts]);
    const topEdgePts = line
      .slice()
      .reverse()
      .map((p) => `${p.x}% ${Math.min(p.y + 8, 100)}%`);
    const topEdge = poly(["0% 0%", "100% 0%", ...topEdgePts]);

    // Bottom half: mirror (100% - y)
    const botLine = line.map((p) => ({ x: p.x, y: 100 - p.y }));
    const botFill = poly([
      ...botLine.map((p) => `${p.x}% ${p.y}%`),
      "100% 100%",
      "0% 100%",
    ]);
    const botEdgePts = botLine.map((p) => `${p.x}% ${Math.max(p.y - 8, 0)}%`);
    const botEdge = poly([...botEdgePts, "100% 100%", "0% 100%"]);

    const qs = (sel: string) => tear.querySelector<HTMLElement>(sel)!;
    qs(".tear__half--top .tear__fill").style.clipPath = topFill;
    qs(".tear__half--top .tear__edge").style.clipPath = topEdge;
    qs(".tear__half--bottom .tear__fill").style.clipPath = botFill;
    qs(".tear__half--bottom .tear__edge").style.clipPath = botEdge;

    let ticking = false;
    const update = () => {
      const r = tear.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when centre is at bottom of viewport, 1 at top
      const progress = 1 - (r.top + r.height / 2) / vh;
      const clamped = Math.min(Math.max(progress, 0), 1);
      // sine curve so it opens smoothly and closes again
      tear.style.setProperty("--tear", Math.sin(clamped * Math.PI).toFixed(3));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="tear" aria-hidden="true" ref={tearRef}>
      {/* Dark gap revealed between the two halves */}
      <div className="tear__gap" />
      {/* Top torn half */}
      <div className="tear__half tear__half--top">
        <div className="tear__edge" />
        <div className="tear__fill" />
      </div>
      {/* Bottom torn half */}
      <div className="tear__half tear__half--bottom">
        <div className="tear__edge" />
        <div className="tear__fill" />
      </div>
    </div>
  );
}
