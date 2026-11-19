"use client";
import { useEffect, useRef } from "react";

export default function TearDivider() {
  const tearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tear = tearRef.current;
    if (!tear) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stage = tear.querySelector<HTMLElement>(".tear__stage")!;
    const rim = tear.querySelector<HTMLElement>(".tear__rim")!;
    const gap = tear.querySelector<HTMLElement>(".tear__gap")!;

    const N = 360;
    let builtFor = 0;

    /**
     * Generate one ripped edge as an array of N+1 y-values in [0,1].
     * Layers: slow wave + medium bumps + fine jitter + rare spikes.
     */
    const ripped = (): number[] => {
      const ph = [0, 1, 2].map(() => Math.random() * 6.283);
      return Array.from({ length: N + 1 }, (_, i) => {
        const x = i / N;
        let v =
          0.5 +
          0.26 * Math.sin(x * 6.283 * 1.4 + ph[0]) +
          0.14 * Math.sin(x * 6.283 * 4.1 + ph[1]) +
          0.07 * Math.sin(x * 6.283 * 11 + ph[2]) +
          (Math.random() - 0.5) * 0.22;
        if (Math.random() < 0.04) v += (Math.random() - 0.5) * 0.5;
        return Math.min(Math.max(v, 0), 1);
      });
    };

    const build = () => {
      const H = stage.offsetHeight;
      if (!H || H === builtFor) return;
      builtFor = H;

      const amp = H * 0.17;
      const margin = H * 0.07;

      // Two independent edges — top and bottom don't mirror each other
      const topVals = ripped().map((v) => margin + v * amp);
      const botVals = ripped().map((v) => H - margin - v * amp);

      /**
       * Build a polygon string.
       * rimMode = true → nudge edge outward by a random 3-8px fibrous thickness
       */
      const poly = (
        topPts: number[],
        botPts: number[],
        rimMode: boolean
      ): string => {
        const pts: string[] = [];
        // Top edge — left to right
        topPts.forEach((y, i) => {
          const yy = rimMode ? Math.max(y - (3 + Math.random() * 5), 0) : y;
          pts.push(`${((i / N) * 100).toFixed(2)}% ${yy.toFixed(1)}px`);
        });
        // Bottom edge — right to left
        for (let i = N; i >= 0; i--) {
          const y = botPts[i];
          const yy = rimMode ? Math.min(y + (3 + Math.random() * 5), H) : y;
          pts.push(`${((i / N) * 100).toFixed(2)}% ${yy.toFixed(1)}px`);
        }
        return `polygon(${pts.join(",")})`;
      };

      gap.style.clipPath = poly(topVals, botVals, false);
      rim.style.clipPath = poly(topVals, botVals, true);
    };

    let ticking = false;
    const update = () => {
      build();
      const r = tear.getBoundingClientRect();
      // progress: 0 at bottom of viewport, 1 at top
      const p = 1 - r.top / window.innerHeight;
      const c = Math.min(Math.max(p, 0), 1);
      // sine curve → open in the middle, closed at both ends
      tear.style.setProperty("--tear", Math.sin(c * Math.PI).toFixed(3));
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
      <div className="tear__stage">
        {/* White fibrous paper-edge rim — slightly wider than the gap */}
        <div className="tear__rim" />
        {/* The coloured interior of the crack with inner shadow */}
        <div className="tear__gap" />
      </div>
    </div>
  );
}
