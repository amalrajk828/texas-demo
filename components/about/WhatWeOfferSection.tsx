"use client";

/**
 * WhatWeOfferSection
 *
 * Exact port of reference artifact (XZneH2pBiQHZRer6Kdd2mw / what-we-offer-cards.html):
 * - 460vh scroll track with 100svh sticky stage
 * - Head block: eyebrow, max-width 1100px h2, lead text
 * - Deck container: width min(1320px, 96vw), top clamp(270px, 36svh, 320px), height (100svh - deck top - 36px)
 * - Dealing phase: single big card (W1 = min(D*1.02, W*0.92, 640), height D, horizontally centered)
 * - Spread phase: smooth JS interpolation of left, top, width, height (no CSS scale text distortion)
 * - Final row: 3 equal cards, 20px gap, height min(D*0.9, cw*1.1)
 * - Desktop hover: cursor-following 240x150 video preview with velocity tilt and smooth lerp
 * - Touch / Mobile / Reduced Motion: clean stacked list with muted video strip on touch devices
 */

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    title: "Flow Measurement & Control System Solutions",
    href: "/service/flow-measurement-solutions/",
    video: "/videos/flow-measurement.mp4",
    image: "/videos/flow-measurement.jpg",
    alt: "Flow measurement and custody transfer metering system calibration",
  },
  {
    num: "02",
    title: "Inspection and Testing Solutions",
    href: "/service/inspection-testing/",
    video: "/videos/inspection-testing.mp4",
    image: "/videos/inspection-testing.jpg",
    alt: "Industrial non-destructive testing and inspection operations",
  },
  {
    num: "03",
    title: "Industrial Process Automation Solutions",
    href: "/service/industrial-automation/",
    video: "/videos/industrial-automation.mp4",
    image: "/videos/industrial-automation.jpg",
    alt: "Industrial automation PLC and SCADA control panels",
  },
];

export default function WhatWeOfferSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const previewRef = useRef<HTMLDivElement>(null);
  const vidsRef = useRef<(HTMLVideoElement | null)[]>([]);

  const [isPlain, setIsPlain] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    const deck = deckRef.current;
    const preview = previewRef.current;
    const cardEls = deck
      ? Array.from(deck.querySelectorAll<HTMLAnchorElement>(".wwo-card"))
      : [];
    const vidEls = preview
      ? Array.from(preview.querySelectorAll<HTMLVideoElement>("video"))
      : [];

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const plain = reduce || window.innerWidth < 760;

    setIsPlain(plain);
    setIsTouch(!fine);

    if (!track || !deck || !preview || cardEls.length !== 3) return;

    if (plain) {
      return;
    }

    const GAP = 20;
    const ENTER = [
      [0, 0.16],
      [0.28, 0.44],
      [0.56, 0.72],
    ];
    const LEAVE = [
      [0.28, 0.44],
      [0.56, 0.72],
    ];
    const SPREAD = [0.8, 0.96];

    const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const easeOutBack = (t: number) => {
      const c1 = 1.1;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    };

    let cur = 0;
    let target = 0;
    let live = false;
    let rafId: number;

    function readTarget() {
      if (!track) return;
      const r = track.getBoundingClientRect();
      const total = track.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      target = clamp(-r.top / total);
    }

    function render(p: number) {
      if (!deck) return;
      const H = window.innerHeight;
      const W = deck.offsetWidth;
      const D = deck.offsetHeight;
      const cw = (W - 2 * GAP) / 3;
      const Df = Math.min(D * 0.9, cw * 1.1);
      const W1 = Math.min(D * 1.02, W * 0.92, 640);
      const rise = H - deck.offsetTop + 30;
      const s = easeInOut(seg(p, SPREAD[0], SPREAD[1]));
      const base = Math.min(36, Math.max(24, window.innerWidth * 0.026));

      cardEls.forEach((c, i) => {
        const e = seg(p, ENTER[i][0], ENTER[i][1]);
        let y = (1 - easeOutBack(e)) * rise;
        let op = clamp(e * 4);
        let l = 0;
        if (i < 2) l = easeInOut(seg(p, LEAVE[i][0], LEAVE[i][1]));
        const back = l * (1 - s);
        y -= D * 0.5 * back;
        if (i < 2) op = op * (1 - back);

        const w = W1 + (cw - W1) * s;
        const h = D + (Df - D) * s;
        const left = ((W - W1) / 2) * (1 - s) + i * (cw + GAP) * s;
        const tw = w - 56;
        const fs = cw > 56 ? (base * tw) / (cw - 56) : base;

        c.style.width = w.toFixed(1) + "px";
        c.style.height = h.toFixed(1) + "px";
        c.style.left = left.toFixed(1) + "px";
        c.style.top = (D - h).toFixed(1) + "px";
        c.style.setProperty("--tw", tw.toFixed(1) + "px");
        c.style.setProperty("--fs", fs.toFixed(2) + "px");
        c.style.transform = "translate3d(0," + y.toFixed(1) + "px,0)";
        c.style.opacity = op.toFixed(3);
      });

      const nowLive = p > 0.95 && fine;
      if (nowLive !== live) {
        live = nowLive;
        deck.classList.toggle("wwo-live", live);
        if (!live) leave();
      }
    }

    // Hover Preview State & Handlers
    let active = -1;
    let mx = 0;
    let my = 0;
    let px = 0;
    let py = 0;
    let lastTx = 0;
    let rot = 0;
    let pscale = 0.6;
    let pop = 0;
    let inside = false;

    function enter(i: number) {
      active = i;
      inside = true;
      cardEls.forEach((c, k) => {
        c.classList.toggle("wwo-on", k === i);
      });
      deck?.setAttribute("data-hover", "1");
      vidEls.forEach((v, k) => {
        v.classList.toggle("wwo-act", k === i);
        if (k === i) {
          const pr = v.play();
          if (pr && pr.catch) pr.catch(() => {});
        } else {
          v.pause();
        }
      });
    }

    function leave() {
      inside = false;
      active = -1;
      cardEls.forEach((c) => {
        c.classList.remove("wwo-on");
      });
      deck?.removeAttribute("data-hover");
      vidEls.forEach((v) => {
        v.pause();
      });
    }

    const mouseEnterHandlers: ((e: MouseEvent) => void)[] = [];
    const mouseMoveHandlers: ((e: MouseEvent) => void)[] = [];
    const mouseLeaveHandlers: (() => void)[] = [];

    cardEls.forEach((c, i) => {
      const onEnter = (e: MouseEvent) => {
        if (!live) return;
        mx = e.clientX;
        my = e.clientY;
        if (pop < 0.05) {
          px = mx;
          py = my;
        }
        enter(i);
      };
      const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
      };
      const onLeave = () => {
        leave();
      };

      mouseEnterHandlers[i] = onEnter;
      mouseMoveHandlers[i] = onMove;
      mouseLeaveHandlers[i] = onLeave;

      c.addEventListener("mouseenter", onEnter);
      c.addEventListener("mousemove", onMove);
      c.addEventListener("mouseleave", onLeave);
    });

    function previewFrame() {
      if (!preview) return;
      px += (mx - px) * 0.15;
      py += (my - py) * 0.15;
      const vx = px - lastTx;
      lastTx = px;
      rot += (clamp(vx * 0.35, -10, 10) - rot) * 0.15;
      pop += ((inside ? 1 : 0) - pop) * 0.18;
      pscale = 0.6 + 0.4 * pop;
      preview.style.opacity = pop.toFixed(3);
      preview.style.transform =
        "translate3d(" +
        (px + 18).toFixed(1) +
        "px," +
        (py - 150).toFixed(1) +
        "px,0) rotate(" +
        rot.toFixed(2) +
        "deg) scale(" +
        pscale.toFixed(3) +
        ")";
    }

    function loop() {
      if (!plain) {
        readTarget();
        cur += (target - cur) * 0.12;
        if (Math.abs(target - cur) < 0.00005) cur = target;
        render(cur);
      }
      if (fine) previewFrame();
      rafId = requestAnimationFrame(loop);
    }

    readTarget();
    cur = target;
    render(cur);

    rafId = requestAnimationFrame(loop);

    const onScroll = () => {
      if (!plain) {
        readTarget();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      const newPlain =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.innerWidth < 760;
      setIsPlain(newPlain);
      setIsTouch(!window.matchMedia("(hover: hover) and (pointer: fine)").matches);
      if (!newPlain) {
        readTarget();
        render(cur);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cardEls.forEach((c, i) => {
        c.removeEventListener("mouseenter", mouseEnterHandlers[i]);
        c.removeEventListener("mousemove", mouseMoveHandlers[i]);
        c.removeEventListener("mouseleave", mouseLeaveHandlers[i]);
      });
      vidEls.forEach((v) => v.pause());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`wwo-wrapper ${isPlain ? "wwo-plain" : ""}`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .wwo-wrapper {
          --wwo-bg: #ffffff;
          --wwo-ink: #1a1a1a;
          --wwo-sub: #5a5754;
          --wwo-maroon: #8b2e2e;
          --wwo-card: #DCDCD9;
          --wwo-tint: #f6ebea;
          position: relative;
        }
        .wwo-track {
          height: 460vh;
          position: relative;
        }
        .wwo-stage {
          position: sticky;
          top: 0;
          height: 100vh;
          height: 100svh;
          overflow: hidden;
          background: var(--wwo-bg);
        }
        .wwo-head {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          padding: 96px 24px 0;
          text-align: center;
          z-index: 10;
        }
        .wwo-eyebrow {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 13.5px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--wwo-maroon);
        }
        .wwo-head h2 {
          margin: 14px auto 14px;
          max-width: 1100px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 4.5vw, 56px);
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: var(--wwo-ink);
        }
        .wwo-lead {
          margin: 0 auto;
          max-width: 700px;
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.6;
          color: #5d5d5d;
        }
        .wwo-deck {
          position: absolute;
          left: 50%;
          top: clamp(270px, 36svh, 320px);
          width: min(1320px, 96vw);
          height: max(260px, calc(100svh - clamp(270px, 36svh, 320px) - 36px));
          transform: translateX(-50%);
          z-index: 20;
        }
        .wwo-card {
          position: absolute;
          top: 0;
          height: 100%;
          width: calc((100% - 40px) / 3);
          left: calc(var(--i) * ((100% - 40px) / 3 + 20px));
          background: var(--wwo-card);
          border-radius: 26px !important;
          box-shadow: 0 18px 40px rgba(0, 0, 0, .10);
          will-change: transform, opacity;
          pointer-events: none;
          transition: background-color .25s ease;
          overflow: hidden;
          text-decoration: none;
          display: block;
        }
        .wwo-deck.wwo-live .wwo-card {
          pointer-events: auto;
          cursor: pointer;
        }
        .wwo-card.wwo-on {
          background: var(--wwo-tint);
        }
        .thumb,
        .wwo-thumb {
          position: absolute;
          left: 12px;
          right: 12px;
          top: 12px;
          bottom: 156px;
          border-radius: 18px;
          overflow: hidden;
          background: linear-gradient(135deg, #dcd6d1, #c6b8b3);
          z-index: 1;
        }
        .thumb img,
        .wwo-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .wwo-card .num,
        .wwo-num {
          position: absolute;
          top: 26px;
          left: 26px;
          z-index: 2;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border-radius: 9999px;
          font-family: ui-monospace, Menlo, Consolas, monospace;
          font-weight: 700;
          font-size: 13px;
          line-height: 1.2;
          letter-spacing: 0.04em;
          color: var(--wwo-maroon);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          pointer-events: none;
        }
        .panelbg,
        .wwo-panelbg {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 184px;
          background: inherit;
          border-radius: 26px 26px 0 0;
          -webkit-mask-image: radial-gradient(circle 34px at calc(100% - 56px) 0, transparent 33.5px, #000 34px);
          mask-image: radial-gradient(circle 34px at calc(100% - 56px) 0, transparent 33.5px, #000 34px);
          -webkit-mask: radial-gradient(circle 34px at calc(100% - 56px) 0, transparent 33.5px, #000 34px);
          mask: radial-gradient(circle 34px at calc(100% - 56px) 0, transparent 33.5px, #000 34px);
          pointer-events: none;
          z-index: 2;
        }
        .go,
        .wwo-go {
          position: absolute;
          right: 30px;
          bottom: 158px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--wwo-maroon);
          z-index: 3;
          pointer-events: none;
          transition: transform 250ms ease;
        }
        .wwo-card:hover .go,
        .wwo-card.wwo-on .go,
        .wwo-card:hover .wwo-go,
        .wwo-card.wwo-on .wwo-go {
          transform: rotate(-45deg);
        }
        .wwo-card-content {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .wwo-mobile-num {
          display: none;
        }
        .wwo-card h3,
        .card h3 {
          position: absolute;
          left: 28px;
          width: var(--tw, 300px);
          bottom: 28px;
          margin: 0;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs, clamp(24px, 2.6vw, 32px));
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #171717;
          z-index: 3;
          pointer-events: auto;
        }
        .dim,
        .wwo-dim {
          position: absolute;
          inset: 0;
          background: var(--wwo-bg);
          opacity: 0;
          transition: opacity .25s ease;
          pointer-events: none;
          z-index: 4;
        }
        .wwo-deck.wwo-live[data-hover] .wwo-card:not(.wwo-on) .wwo-dim {
          opacity: .5;
        }
        .wwo-preview {
          position: fixed;
          left: 0;
          top: 0;
          width: 240px;
          height: 150px;
          border-radius: 14px;
          overflow: hidden;
          border: 2px solid #fff;
          box-shadow: 0 20px 44px rgba(0, 0, 0, .28);
          background: linear-gradient(135deg, #2e2323, #8b2e2e);
          pointer-events: none;
          opacity: 0;
          z-index: 9999;
          will-change: transform, opacity;
        }
        .wwo-preview video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity .2s;
        }
        .wwo-preview video.wwo-act {
          opacity: 1;
        }

        .wwo-card-video-strip {
          display: none;
        }
        @media (hover: hover) and (pointer: fine) {
          .wwo-card-video-strip {
            display: none !important;
          }
        }

        /* ── Plain / Reduced motion / Mobile ── */
        @media (max-width: 760px) {
          .wwo-track {
            height: auto !important;
          }
          .wwo-stage {
            position: static !important;
            height: auto !important;
            padding: 60px 16px 48px !important;
          }
          .wwo-head {
            position: static !important;
            padding: 0 0 28px !important;
          }
          .wwo-deck {
            position: static !important;
            transform: none !important;
            height: auto !important;
            width: 100% !important;
            max-width: 600px !important;
            display: grid !important;
            gap: 20px !important;
            margin: 0 auto !important;
          }
          .wwo-card {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            width: 100% !important;
            height: auto !important;
            min-height: 150px !important;
            transform: none !important;
            opacity: 1 !important;
            pointer-events: auto !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .wwo-card-video-strip {
            display: block !important;
          }
          .thumb,
          .wwo-thumb,
          .panelbg,
          .wwo-panelbg,
          .go,
          .wwo-go,
          .dim,
          .wwo-dim {
            display: none !important;
          }
          .wwo-card .num,
          .wwo-num {
            position: static !important;
            display: inline-flex !important;
            align-self: flex-start !important;
            margin: 20px 24px 8px !important;
            box-shadow: none !important;
            background: rgba(139, 46, 46, 0.08) !important;
          }
          .wwo-card h3 {
            position: static !important;
            width: auto !important;
            bottom: auto !important;
            left: auto !important;
            margin: 0 24px 24px !important;
            font-size: 20px !important;
            line-height: 1.25 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wwo-track {
            height: auto !important;
          }
          .wwo-stage {
            position: static !important;
            height: auto !important;
            padding: 80px 24px 48px !important;
          }
          .wwo-head {
            position: static !important;
            padding: 0 0 32px !important;
          }
          .wwo-deck {
            position: static !important;
            transform: none !important;
            height: auto !important;
            width: 100% !important;
            max-width: 680px !important;
            display: grid !important;
            gap: 20px !important;
            margin: 0 auto !important;
          }
          .wwo-card {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            width: 100% !important;
            height: auto !important;
            min-height: 150px !important;
            transform: none !important;
            opacity: 1 !important;
            pointer-events: auto !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .thumb,
          .wwo-thumb,
          .panelbg,
          .wwo-panelbg,
          .go,
          .wwo-go,
          .dim,
          .wwo-dim {
            display: none !important;
          }
          .wwo-card .num,
          .wwo-num {
            position: static !important;
            display: inline-flex !important;
            align-self: flex-start !important;
            margin: 20px 24px 8px !important;
            box-shadow: none !important;
            background: rgba(139, 46, 46, 0.08) !important;
          }
          .wwo-card h3 {
            position: static !important;
            width: auto !important;
            bottom: auto !important;
            left: auto !important;
            margin: 0 24px 24px !important;
            font-size: 20px !important;
            line-height: 1.25 !important;
          }
        }

        .wwo-plain .wwo-track {
          height: auto;
        }
        .wwo-plain .wwo-stage {
          position: static;
          height: auto;
          padding: 80px 24px 48px;
        }
        .wwo-plain .wwo-head {
          position: static;
          padding: 0 0 32px;
        }
        .wwo-plain .wwo-deck {
          position: static;
          transform: none;
          height: auto;
          width: 100%;
          max-width: 680px;
          display: grid;
          gap: 20px;
          margin: 0 auto;
        }
        .wwo-plain .wwo-card {
          position: relative;
          left: auto !important;
          top: auto !important;
          width: 100% !important;
          height: auto !important;
          min-height: 150px;
          transform: none !important;
          opacity: 1 !important;
          pointer-events: auto;
          display: flex;
          flex-direction: column;
        }
        .wwo-plain .thumb,
        .wwo-plain .wwo-thumb,
        .wwo-plain .panelbg,
        .wwo-plain .wwo-panelbg,
        .wwo-plain .go,
        .wwo-plain .wwo-go,
        .wwo-plain .dim,
        .wwo-plain .wwo-dim {
          display: none !important;
        }
        .wwo-plain .wwo-card-video-strip {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #1a1a1a;
        }
        .wwo-plain .wwo-card-video-strip video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .wwo-plain .num,
        .wwo-plain .wwo-num {
          position: static;
          display: inline-flex;
          align-self: flex-start;
          margin: 20px 24px 8px;
          box-shadow: none;
          background: rgba(139, 46, 46, 0.08);
        }
        .wwo-plain .wwo-card h3 {
          position: static;
          width: auto !important;
          bottom: auto;
          left: auto;
          margin: 0 24px 24px;
          font-size: 20px;
          line-height: 1.25;
        }
      `}} />

      <div className="wwo-track" id="track" ref={trackRef}>
        <div className="wwo-stage" id="stage" ref={stageRef}>
          <div className="wwo-head">
            <div className="wwo-eyebrow">What We Offer</div>
            <h2>Innovative Solutions for Industrial Excellence</h2>
            <p className="wwo-lead">
              Our multidisciplinary engineering teams provide turnkey design,
              specification, execution, and lifetime support across three core
              technical disciplines.
            </p>
          </div>

          <div className="wwo-deck" id="deck" ref={deckRef}>
            {SERVICES.map((s, i) => (
              <Link
                key={s.num}
                href={s.href}
                className="wwo-card"
                style={{ "--i": i } as React.CSSProperties}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
              >
                <div className="wwo-card-video-strip">
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    src={s.video}
                  />
                </div>
                <div className="thumb wwo-thumb">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <span className="num wwo-num">{s.num}</span>
                <div className="panelbg wwo-panelbg" />
                <div className="go wwo-go" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <div className="dim wwo-dim" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="wwo-preview" id="preview" ref={previewRef}>
        {SERVICES.map((s, i) => (
          <video
            key={s.video}
            ref={(el) => {
              vidsRef.current[i] = el;
            }}
            muted
            loop
            playsInline
            preload="metadata"
            src={s.video}
          />
        ))}
      </div>
    </div>
  );
}
