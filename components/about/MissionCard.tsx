"use client";

import React, { useRef, useEffect } from "react";

const H = 220;
const SW = 440;
const SH = 660;
const rad = Math.PI / 180;

const clamp = (x: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, x));
const seg = (p: number, s: number, e: number) => clamp((p - s) / (e - s));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeIn = (t: number) => t * t * t;
const back = (t: number) => {
  const c1 = 1.0;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

function MissionContent() {
  return (
    <div className="mission-c select-none">
      {/* Panel 1: Heading & Eyebrow */}
      <div className="mission-sec sec-1">
        <div className="mission-eyebrow">Our Mission</div>
        <h2 className="mission-heading">Driving Efficiency &amp; Sustainable Growth</h2>
      </div>

      {/* Panel 2: Quote & Divider Rule */}
      <div className="mission-sec sec-2">
        <p className="mission-q select-text">
          &ldquo;We deliver innovative solutions that exceed customer
          expectations, empowering industries through certified expertise in flow
          measurement, control systems, and automation &mdash; driving operational
          efficiency and sustainable regional growth.&rdquo;
        </p>
        <div className="mission-rule" />
      </div>

      {/* Panel 3: Stats Grid */}
      <div className="mission-sec sec-3">
        <div
          className="mission-stats"
          aria-label="18+ Years Experience, 16+ Global OEM Alliances, ISO Certified Operations, 24/7 Technical Support"
        >
          <div>
            <div className="mission-n">
              <span data-count="18">0</span>+
            </div>
            <div className="mission-l">Years Experience</div>
          </div>
          <div>
            <div className="mission-n">
              <span data-count="16">0</span>+
            </div>
            <div className="mission-l">Global OEM Alliances</div>
          </div>
          <div>
            <div className="mission-n">ISO</div>
            <div className="mission-l">Certified Operations</div>
          </div>
          <div>
            <div className="mission-n">24/7</div>
            <div className="mission-l">Technical Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MissionCard() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const p3Ref = useRef<HTMLDivElement>(null);
  const b2ShadeRef = useRef<HTMLDivElement>(null);
  const b3ShadeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !trackRef.current ||
      !wordsRef.current ||
      !hintRef.current ||
      !sheetRef.current ||
      !shadowRef.current ||
      !p2Ref.current ||
      !p3Ref.current ||
      !b2ShadeRef.current ||
      !b3ShadeRef.current
    ) {
      return;
    }

    const track = trackRef.current;
    const words = wordsRef.current;
    const hint = hintRef.current;
    const sheet = sheetRef.current;
    const shadow = shadowRef.current;
    const p2 = p2Ref.current;
    const p3 = p3Ref.current;
    const b2Shade = b2ShadeRef.current;
    const b3Shade = b3ShadeRef.current;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cur = 0;
    let target = 0;
    let counted = false;
    let rafId: number;

    const countElements = track.querySelectorAll<HTMLElement>("[data-count]");

    function countUp() {
      if (counted) return;
      counted = true;
      const t0 = performance.now();
      function tick(now: number) {
        const k = clamp((now - t0) / 1100);
        countElements.forEach((e) => {
          e.textContent = String(Math.round(Number(e.dataset.count) * easeOut(k)));
        });
        if (k < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    function resetCount() {
      if (!counted) return;
      counted = false;
      countElements.forEach((e) => {
        e.textContent = "0";
      });
    }

    function readTarget() {
      if (reduce) {
        target = 0.7;
        return;
      }
      const r = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      target = scrollable > 0 ? clamp(-r.top / scrollable) : 0;
    }

    function render(p: number) {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const availableH = Math.max(300, vh - 110);
      const scale = Math.min(1, (vw * 0.9) / SW, (availableH * 0.92) / SH);

      let th2 = 180 * (1 - back(seg(p, 0.20, 0.42)));
      let th3 = 180 * (1 - back(seg(p, 0.48, 0.70)));
      if (reduce) {
        th2 = 0;
        th3 = 0;
      }

      // Open class toggles when rotation drops below 90deg (removes back face completely)
      const open2 = th2 < 90;
      const open3 = th3 < 90;
      p2.classList.toggle("open", open2);
      p3.classList.toggle("open", open3);

      // Once within +/-0.3deg, transform is 'none' so joints sit flat in one plane
      if (Math.abs(th2) <= 0.3) {
        p2.style.transform = "none";
      } else {
        p2.style.transform = `translateZ(1px) rotateX(${th2.toFixed(2)}deg)`;
      }

      if (Math.abs(th3) <= 0.3) {
        p3.style.transform = "none";
      } else {
        p3.style.transform = `translateZ(1px) rotateX(${th3.toFixed(2)}deg)`;
      }

      p3.style.visibility = th2 > 100 ? "hidden" : "visible";

      const s2 = clamp(Math.abs(Math.sin(th2 * rad)));
      const s3 = clamp(Math.abs(Math.sin((th2 + th3) * rad)));
      b2Shade.style.opacity = (s2 * 0.18).toFixed(3);
      b3Shade.style.opacity = (s3 * 0.18).toFixed(3);

      const yb2 = H + H * Math.cos(th2 * rad);
      let bottom = Math.max(H, yb2);
      if (th2 <= 100) {
        const ext3 = H * Math.cos((th2 + th3) * rad);
        bottom = Math.max(bottom, yb2 + Math.max(0, ext3));
      }
      bottom = Math.min(bottom, SH);
      shadow.style.height = `${bottom.toFixed(1)}px`;

      const navOffset = 28 * scale;
      const enter = (1 - easeOut(seg(p, 0, 0.16))) * (vh / 2 + H * scale);
      const exit = easeIn(seg(p, 0.82, 1)) * (vh / 2 + (SH * scale) / 2 + 40);
      const shift = -((bottom - H) / 2) * scale + navOffset;
      const rx = 8 * (1 - seg(p, 0, 0.5)) - 8 * seg(p, 0.82, 1);

      sheet.style.transform = `translate3d(0,${(enter - exit + shift).toFixed(1)}px,0) scale(${scale.toFixed(4)}) rotateX(${rx.toFixed(2)}deg)`;

      words.style.transform = `translateY(${((0.5 - p) * 140).toFixed(1)}px)`;
      hint.style.opacity = String(1 - seg(p, 0, 0.08));

      if (p > 0.66) {
        countUp();
      } else if (p < 0.3) {
        resetCount();
      }
    }

    if (reduce) {
      countElements.forEach((e) => {
        e.textContent = e.dataset.count || "0";
      });
      render(0.7);
      return;
    }

    readTarget();
    cur = target;
    render(cur);

    function loop() {
      readTarget();
      cur += (target - cur) * 0.11;
      if (Math.abs(target - cur) < 0.00005) cur = target;
      render(cur);
      rafId = requestAnimationFrame(loop);
    }
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="mission-track relative w-full z-10"
      id="our-mission"
    >
      <div className="sr-only">
        <h2>Our Mission</h2>
        <h3>Driving Efficiency &amp; Sustainable Growth</h3>
        <p>
          &ldquo;We deliver innovative solutions that exceed customer
          expectations, empowering industries through certified expertise in flow
          measurement, control systems, and automation &mdash; driving operational
          efficiency and sustainable regional growth.&rdquo;
        </p>
        <p>
          18+ Years Experience, 16+ Global OEM Alliances, ISO Certified Operations,
          24/7 Technical Support
        </p>
      </div>

      <div className="mission-stage">
        <div ref={wordsRef} className="mission-words">
          Our<br />Mission
        </div>

        <div ref={sheetRef} className="mission-sheet">
          <div ref={shadowRef} className="mission-shadow" />

          <div className="mission-panel p1">
            <div className="mission-face front">
              <div className="mission-in" style={{ top: 0 }}>
                <MissionContent />
              </div>
              <div className="mission-shade" />
            </div>

            <div ref={p2Ref} className="mission-panel p2">
              <div className="mission-face front">
                <div className="mission-in" style={{ top: -220 }}>
                  <MissionContent />
                </div>
                <div className="mission-shade" />
              </div>
              <div className="mission-face back">
                <div ref={b2ShadeRef} className="mission-shade" />
              </div>

              <div ref={p3Ref} className="mission-panel p3">
                <div className="mission-face front">
                  <div className="mission-in" style={{ top: -440 }}>
                    <MissionContent />
                  </div>
                  <div className="mission-shade" />
                </div>
                <div className="mission-face back">
                  <div ref={b3ShadeRef} className="mission-shade" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={hintRef} className="mission-hint">
          Scroll to Explore
        </div>
      </div>
    </div>
  );
}
