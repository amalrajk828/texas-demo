"use client";

import React, { useRef, useCallback, useEffect } from 'react';
import './BorderGlow.css';

function parseGlowColor(colorStr: string, intensity: number) {
  const trimmed = colorStr.trim();
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10'];
  const vars: Record<string, string> = {};

  // 1. Check if hex format (#8a302f or 8a302f)
  if (trimmed.startsWith('#') || /^[0-9a-fA-F]{6}$/.test(trimmed)) {
    const hex = trimmed.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    for (let i = 0; i < opacities.length; i++) {
      const alpha = Math.min((opacities[i] * intensity) / 100, 1);
      vars[`--glow-color${keys[i]}`] = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
    }
    return vars;
  }

  // 2. Check if RGB space or comma separated: e.g. "138 48 47"
  const parts = trimmed.split(/[\s,]+/);
  if (parts.length >= 3) {
    const p0 = parseFloat(parts[0]);
    const p1 = parseFloat(parts[1]);
    const p2 = parseFloat(parts[2]);

    // Check if it represents RGB (values up to 255, e.g. "138 48 47")
    const isRGB = p0 > 1 || p1 > 100 || p2 > 100 || parts.some(p => !p.includes('%'));
    if (isRGB) {
      for (let i = 0; i < opacities.length; i++) {
        const alpha = Math.min((opacities[i] * intensity) / 100, 1);
        vars[`--glow-color${keys[i]}`] = `rgba(${p0}, ${p1}, ${p2}, ${alpha.toFixed(3)})`;
      }
      return vars;
    }

    // Otherwise HSL
    const base = `${p0}deg ${p1}% ${p2}%`;
    for (let i = 0; i < opacities.length; i++) {
      vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`;
    }
    return vars;
  }

  // Fallback to #8a302f (Texas brand red)
  for (let i = 0; i < opacities.length; i++) {
    const alpha = Math.min((opacities[i] * intensity) / 100, 1);
    vars[`--glow-color${keys[i]}`] = `rgba(138, 48, 47, ${alpha.toFixed(3)})`;
  }
  return vars;
}

const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const GRADIENT_KEYS = ['--gradient-one', '--gradient-two', '--gradient-three', '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven'];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildGradientVars(colors: string[]) {
  const vars: Record<string, string> = {};
  for (let i = 0; i < 7; i++) {
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    vars[GRADIENT_KEYS[i]] = `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`;
  }
  vars['--gradient-base'] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

function easeOutCubic(x: number) { return 1 - Math.pow(1 - x, 3); }
function easeInCubic(x: number) { return x * x * x; }

interface AnimateProps {
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;
  ease?: (x: number) => number;
  onUpdate: (v: number) => void;
  onEnd?: () => void;
}

function animateValue({ start = 0, end = 100, duration = 1000, delay = 0, ease = easeOutCubic, onUpdate, onEnd }: AnimateProps) {
  const t0 = performance.now() + delay;
  function tick() {
    const elapsed = performance.now() - t0;
    const t = Math.min(elapsed / duration, 1);
    onUpdate(start + (end - start) * ease(t));
    if (t < 1) requestAnimationFrame(tick);
    else if (onEnd) onEnd();
  }
  setTimeout(() => requestAnimationFrame(tick), delay);
}

export interface BorderGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
}

const BorderGlow = React.forwardRef<HTMLDivElement, BorderGlowProps>(({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '138 48 47',
  backgroundColor = 'transparent',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1.0,
  coneSpread = 25,
  animated = false,
  colors = ['#8a302f'],
  fillOpacity = 0.5,
  style,
  ...rest
}, forwardedRef) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const cardRef = (forwardedRef as React.RefObject<HTMLDivElement>) || internalRef;
  const rafId = useRef<number | null>(null);

  const getCenterOfElement = useCallback((el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2];
  }, []);

  const getEdgeProximity = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    let kx = Infinity;
    let ky = Infinity;
    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);
    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  }, [getCenterOfElement]);

  const getCursorAngle = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    if (dx === 0 && dy === 0) return 0;
    const radians = Math.atan2(dy, dx);
    let degrees = radians * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;
    return degrees;
  }, [getCenterOfElement]);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    const card = cardRef.current;
    if (!card) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafId.current !== null) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const edge = getEdgeProximity(card, x, y);
      const angle = getCursorAngle(card, x, y);

      card.style.setProperty('--edge-proximity', `${(edge * 100).toFixed(2)}`);
      card.style.setProperty('--cursor-angle', `${angle.toFixed(2)}deg`);
    });
  }, [cardRef, getEdgeProximity, getCursorAngle]);

  const handlePointerLeave = useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--edge-proximity', '0');
  }, [cardRef]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches && cardRef.current) {
      cardRef.current.style.setProperty('--edge-proximity', '35');
      cardRef.current.style.setProperty('--cursor-angle', '45deg');
    }
  }, [cardRef]);

  useEffect(() => {
    if (!animated || !cardRef.current) return;
    const card = cardRef.current;
    const angleStart = 110;
    const angleEnd = 465;
    card.classList.add('sweep-active');
    card.style.setProperty('--cursor-angle', `${angleStart}deg`);

    animateValue({ duration: 500, onUpdate: v => card.style.setProperty('--edge-proximity', `${v}`) });
    animateValue({ ease: easeInCubic, duration: 1500, end: 50, onUpdate: v => {
      card.style.setProperty('--cursor-angle', `${(angleEnd - angleStart) * (v / 100) + angleStart}deg`);
    }});
    animateValue({ ease: easeOutCubic, delay: 1500, duration: 2250, start: 50, end: 100, onUpdate: v => {
      card.style.setProperty('--cursor-angle', `${(angleEnd - angleStart) * (v / 100) + angleStart}deg`);
    }});
    animateValue({ ease: easeInCubic, delay: 2500, duration: 1500, start: 100, end: 0,
      onUpdate: v => card.style.setProperty('--edge-proximity', `${v}`),
      onEnd: () => card.classList.remove('sweep-active'),
    });
  }, [animated, cardRef]);

  const glowVars = parseGlowColor(glowColor, glowIntensity);
  const isTransparent = backgroundColor === 'transparent' || !backgroundColor;

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`border-glow-card${isTransparent ? ' border-glow-card--transparent' : ''} ${className}`}
      style={{
        '--card-bg': backgroundColor,
        '--edge-sensitivity': edgeSensitivity,
        '--border-radius': `${borderRadius}px`,
        '--glow-padding': `${glowRadius}px`,
        '--cone-spread': coneSpread,
        '--fill-opacity': fillOpacity,
        ...glowVars,
        ...buildGradientVars(colors),
        ...style,
      } as React.CSSProperties}
      {...rest}
    >
      <span className="edge-light" aria-hidden="true" />
      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  );
});

BorderGlow.displayName = 'BorderGlow';

export default BorderGlow;
