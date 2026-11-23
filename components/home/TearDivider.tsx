'use client';
import { useEffect, useRef } from 'react';

export default function TearDivider() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const gapRef = useRef<HTMLDivElement>(null);
  const rimTRef = useRef<HTMLDivElement>(null);
  const rimBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const gap = gapRef.current;
    const rimT = rimTRef.current;
    const rimB = rimBRef.current;

    if (!root || !stage || !gap || !rimT || !rimB) return;
    if (typeof root.getBoundingClientRect !== 'function') return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const N = 220;

    // One ripped edge: slow wave + medium bumps + fine jitter + rare spikes (0..1)
    const ripped = (): number[] => {
      const ph = [0, 0, 0].map(() => Math.random() * 6.283);
      return Array.from({ length: N + 1 }, (_, i) => {
        const x = i / N;
        let v =
          0.5 +
          0.26 * Math.sin(x * 6.283 * 1.4 + ph[0]) +
          0.14 * Math.sin(x * 6.283 * 4.1 + ph[1]) +
          0.07 * Math.sin(x * 6.283 * 11 + ph[2]) +
          (Math.random() - 0.5) * 0.25;
        if (Math.random() < 0.05) v += (Math.random() - 0.5) * 0.5;
        return Math.min(Math.max(v, 0), 1);
      });
    };

    // Shapes are created once; scrolling only changes the height
    const topShape = ripped();
    const botShape = ripped();
    const rimTh = Array.from({ length: N + 1 }, () => 2 + Math.random() * 5);

    const clamp = (v: number) => Math.min(Math.max(v, 0), 1);
    const smooth = (a: number, b: number, x: number) => {
      const t = clamp((x - a) / (b - a));
      return t * t * (3 - 2 * t);
    };
    const X = (i: number) => `${((i / N) * 100).toFixed(2)}%`;
    const rev = <T,>(a: T[]) => a.slice().reverse();

    const draw = (H: number) => {
      const m = Math.min(6, H * 0.12); // margin for rim
      const amp = Math.min(30, H * 0.2); // roughness

      const t = topShape.map((v) => m + v * amp);
      const b = botShape.map((v) => H - m - v * amp);

      const line = (arr: number[]) => arr.map((y, i) => `${X(i)} ${y.toFixed(1)}px`);
      const above = (arr: number[]) =>
        arr.map((y, i) => `${X(i)} ${Math.max(y - rimTh[i], 0).toFixed(1)}px`);
      const below = (arr: number[]) =>
        arr.map((y, i) => `${X(i)} ${Math.min(y + rimTh[i], H).toFixed(1)}px`);

      gap.style.clipPath = `polygon(${[...line(t), ...rev(line(b))].join(',')})`;
      rimT.style.clipPath = `polygon(${[...above(t), ...rev(line(t))].join(',')})`;
      rimB.style.clipPath = `polygon(${[...line(b), ...rev(below(b))].join(',')})`;
    };

    let ticking = false;
    let lastH = -1;

    const update = () => {
      ticking = false;
      const rect = root.getBoundingClientRect();
      const MAX = window.innerWidth <= 640 ? 150 : 260;
      // p: 0 when divider top is at the bottom of the viewport, 1 at the top
      const p = 1 - rect.top / window.innerHeight;
      // Opens while scrolling down, stays open, closes only on scroll up
      const o = smooth(0.1, 0.4, p);
      const H = Math.round(o * MAX);
      if (H === lastH) return;
      lastH = H;

      // Animate real layout height — pushes the next section down
      root.style.height = `${H}px`;

      if (H < 24) {
        stage.style.display = 'none';
        return;
      }
      stage.style.display = 'block';
      draw(H);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    const onResize = () => {
      lastH = -1;
      update();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="tear" ref={rootRef} aria-hidden="true">
      <div className="tear__stage" ref={stageRef}>
        <div className="tear__gap" ref={gapRef} />
        <div className="tear__shadow tear__shadow--t">
          <div className="tear__rim" ref={rimTRef} />
        </div>
        <div className="tear__shadow tear__shadow--b">
          <div className="tear__rim" ref={rimBRef} />
        </div>
      </div>
    </div>
  );
}
