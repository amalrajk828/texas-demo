'use client';
import { useEffect, useRef, type ReactNode } from 'react';

export default function PeelButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; // stays visible

    let ticking = false;
    const clamp = (v: number) => Math.min(Math.max(v, 0), 1);

    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const centre = (r.top + r.height / 2) / window.innerHeight; // 1 = bottom of screen
      const p = clamp((1.0 - centre) / (1.0 - 0.82)); // 0 at 100%, 1 at 82%
      el.style.setProperty('--peel', p.toFixed(3));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="peel" ref={ref}>
      {children}
      <span className="peel__cover" aria-hidden="true" />
      <span className="peel__flap" aria-hidden="true" />
    </div>
  );
}
