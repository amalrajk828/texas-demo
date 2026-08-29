"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

export type MoltenMetalColorMode = "molten" | "ember" | "frost";

export interface MoltenMetalProps {
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
  scale?: number;
  detail?: number;
  glow?: number;
  coreSize?: number;
  swirl?: number;
  fold?: number;
  blackPoint?: number;
  brightness?: number;
  colorMode?: MoltenMetalColorMode;
  grain?: boolean;
  grainIntensity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
  containerRef?: React.RefObject<HTMLElement | null>;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 1, 1];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
};

const colorModeToFloat = (mode: MoltenMetalColorMode): number =>
  mode === "ember" ? 1 : mode === "frost" ? 2 : 0;

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uScale;
uniform float uDetail;
uniform float uGlow;
uniform float uCoreSize;
uniform float uSwirl;
uniform float uFold;
uniform float uBlackPoint;
uniform float uBrightness;
uniform float uColorMode;
uniform float uGrain;
uniform float uGrainIntensity;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform bool uEnableMouse;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  float time = iTime * uSpeed;
  vec2 p = uScale * ((gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y) - 0.5;

  vec2 drift = vec2(0.0);
  if (uEnableMouse) {
    drift = (uMouse - 0.5) * uMouseStrength * 2.0;
  }
  p += drift;

  vec2 i = p;
  float c = 0.0;
  float r = length(p + vec2(sin(time), sin(time * 0.3 + 5.0)) * 0.5);
  float d = length(p);
  float rot = d + time + p.x * uSwirl;

  float cosRot = cos(rot);
  mat2 warp = mat2(cos(rot - sin(time / 5.0)), sin(rot), -sin(cosRot - time), cosRot) * uFold;
  float glowCore = uGlow * uCoreSize;

  for (float n = 0.0; n < 8.0; n++) {
    if (n >= uDetail) break;
    p *= warp;
    float t = r - time / (n + 3.0);
    i -= p + vec2(cos(t - i.x - r) + sin(t + i.y), sin(t - i.y) + cos(t + i.x) + r);
    c += glowCore / length(vec2(sin(i.x + t), cos(i.y + t)));
  }

  c /= 6.0;

  float intensity = max(c - uBlackPoint, 0.0) * uBrightness;
  float g = clamp(intensity, 0.0, 1.0);

  float mid = 0.5;
  if (uColorMode > 1.5) {
    mid = 0.65;
  } else if (uColorMode > 0.5) {
    mid = 0.35;
  }

  vec3 col = mix(uColor1, uColor2, smoothstep(0.0, mid, g));
  col = mix(col, uColor3, smoothstep(mid, 1.0, g));

  float a = g;
  if (uGrain > 0.5) {
    float gr = hash(gl_FragCoord.xy + iTime);
    a += (gr - 0.5) * uGrainIntensity;
  }
  a = clamp(a, 0.0, 1.0) * uOpacity;
  fragColor = vec4(col, a);
}
`;

export default function MoltenMetal({
  color1 = "#5227FF",
  color2 = "#FF9FFC",
  color3 = "#FFFFFF",
  speed = 0.35,
  scale = 4,
  detail = 3,
  glow = 1.6,
  coreSize = 0.1,
  swirl = 1,
  fold = -0.2,
  blackPoint = 0.05,
  brightness = 1.3,
  colorMode = "molten",
  grain = true,
  grainIntensity = 0.05,
  mouseInteraction = true,
  mouseStrength = 0.3,
  opacity = 1.0,
  className = "",
  style = {},
  containerRef,
}: MoltenMetalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const internalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: Renderer | null = null;
    try {
      renderer = new Renderer({
        canvas,
        alpha: true,
        premultipliedAlpha: false,
        dpr: Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2),
      });
    } catch (e) {
      console.warn("WebGL 2 / OGL not supported on this device:", e);
      return;
    }

    const gl = renderer.gl;
    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iResolution: { value: new Float32Array([0, 0]) },
        iTime: { value: 0 },
        uSpeed: { value: speed },
        uScale: { value: scale },
        uDetail: { value: detail },
        uGlow: { value: glow },
        uCoreSize: { value: coreSize },
        uSwirl: { value: swirl },
        uFold: { value: fold },
        uBlackPoint: { value: blackPoint },
        uBrightness: { value: brightness },
        uColorMode: { value: colorModeToFloat(colorMode) },
        uGrain: { value: grain ? 1 : 0 },
        uGrainIntensity: { value: grainIntensity },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uMouseStrength: { value: mouseStrength },
        uEnableMouse: { value: mouseInteraction },
        uColor1: { value: hexToRgb(color1) },
        uColor2: { value: hexToRgb(color2) },
        uColor3: { value: hexToRgb(color3) },
      },
      transparent: true,
    });

    const mesh = new Mesh(gl, { geometry, program });

    const targetEl =
      containerRef?.current || internalContainerRef.current?.parentElement || canvas;

    const resize = () => {
      if (!renderer || !targetEl || !canvas) return;
      const rect = targetEl.getBoundingClientRect();
      const width = rect.width || window.innerWidth;
      const height = rect.height || window.innerHeight;

      renderer.setSize(width, height);
      program.uniforms.iResolution.value[0] = gl.canvas.width;
      program.uniforms.iResolution.value[1] = gl.canvas.height;
    };

    resize();

    let currentMouseX = 0.5;
    let currentMouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      if (!targetEl) return;
      const rect = targetEl.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) / (rect.width || 1);
      targetMouseY = 1.0 - (e.clientY - rect.top) / (rect.height || 1);
    };

    const handleMouseLeave = () => {
      targetMouseX = 0.5;
      targetMouseY = 0.5;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!targetEl || !e.touches.length) return;
      const rect = targetEl.getBoundingClientRect();
      targetMouseX = (e.touches[0].clientX - rect.left) / (rect.width || 1);
      targetMouseY = 1.0 - (e.touches[0].clientY - rect.top) / (rect.height || 1);
    };

    targetEl.addEventListener("mousemove", handleMouseMove as EventListener);
    targetEl.addEventListener("mouseleave", handleMouseLeave as EventListener);
    targetEl.addEventListener("touchmove", handleTouchMove as EventListener, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && targetEl) {
      resizeObserver = new ResizeObserver(() => resize());
      resizeObserver.observe(targetEl);
    }
    window.addEventListener("resize", resize);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = motionQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        program.uniforms.iTime.value = 0.0;
        renderer?.render({ scene: mesh });
      }
    };
    motionQuery.addEventListener("change", handleMotionChange);

    let animId = 0;
    const update = (time: number) => {
      if (!isReducedMotion) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;
        program.uniforms.uMouse.value[0] = currentMouseX;
        program.uniforms.uMouse.value[1] = currentMouseY;
        program.uniforms.iTime.value = time * 0.001;
      }

      renderer?.render({ scene: mesh });

      if (!isReducedMotion) {
        animId = requestAnimationFrame(update);
      }
    };

    if (!isReducedMotion) {
      animId = requestAnimationFrame(update);
    } else {
      update(0);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      targetEl.removeEventListener("mousemove", handleMouseMove as EventListener);
      targetEl.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      targetEl.removeEventListener("touchmove", handleTouchMove as EventListener);
      window.removeEventListener("resize", resize);
      if (resizeObserver) resizeObserver.disconnect();
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [
    color1,
    color2,
    color3,
    speed,
    scale,
    detail,
    glow,
    coreSize,
    swirl,
    fold,
    blackPoint,
    brightness,
    colorMode,
    grain,
    grainIntensity,
    mouseInteraction,
    mouseStrength,
    opacity,
    containerRef,
  ]);

  return (
    <div
      ref={internalContainerRef}
      className={`w-full h-full ${className}`}
      style={{ width: "100%", height: "100%", ...style }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
