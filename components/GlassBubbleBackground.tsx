"use client";

import React, { useRef, useEffect } from "react";

export interface GlassBubbleBackgroundProps {
  /**
   * Optional ref to the hero container to scope mouse and touch interactions
   */
  containerRef?: React.RefObject<HTMLElement | null>;
  /**
   * Additional CSS classes for the canvas wrapper container
   */
  className?: string;
  /**
   * Optional overlay/scrim opacity for enhanced contrast (0 to 1)
   */
  overlayOpacity?: number;
}

const VERT_SRC = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG_SRC = `
precision highp float;

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;

#define PI 3.14159265

float squish(vec3 dir, float t) {
  vec3 axis1 = normalize(vec3(sin(t * 0.20), cos(t * 0.17), 0.4));
  vec3 axis2 = normalize(vec3(cos(t * 0.15 + 1.7), sin(t * 0.19 + 0.6), -0.3));
  float s = 0.0;
  s += 0.035 * (dot(dir, axis1) * dot(dir, axis1) - 0.33);
  s += 0.022 * (dot(dir, axis2) * dot(dir, axis2) - 0.33);
  return s;
}

float sdBlob(vec3 p, vec3 r, float n, float t) {
  vec3 dir = normalize(p);
  float mod_ = 1.0 + squish(dir, t);
  vec3 rr = r * mod_;
  vec3 q = abs(p) / rr;
  float f = pow(q.x, n) + pow(q.y, n) + pow(q.z, n);
  float rad = pow(f, 1.0 / n);
  return (rad - 1.0) * min(min(rr.x, rr.y), rr.z);
}

// analytic gradient of the (unsquished) superellipsoid -- smooth and
// artifact-free, unlike finite-difference normals on this pseudo-SDF
vec3 getNormal(vec3 p, vec3 r, float n) {
  vec3 q = p / r;
  vec3 aq = abs(q) + 1e-5;
  vec3 g = sign(q) * pow(aq, vec3(n - 1.0)) / r;
  return normalize(g);
}

vec3 studio(vec3 dir) {
  vec3 navy    = vec3(0.03, 0.06, 0.24);
  vec3 violet  = vec3(0.38, 0.16, 0.66);
  vec3 magenta = vec3(0.56, 0.22, 0.75);
  vec3 midBlue = vec3(0.24, 0.54, 0.90);
  vec3 core    = vec3(0.83, 0.95, 0.99);

  float front = smoothstep(-0.5, 0.9, dir.z);

  float leftness  = smoothstep(0.3, -0.9, dir.x);
  float lowerness = smoothstep(0.3, -0.8, dir.y);

  vec3 rim = mix(navy, violet, clamp(leftness * 0.75 + lowerness * 0.4, 0.0, 1.0));
  rim = mix(rim, magenta, clamp(lowerness * leftness * 1.2, 0.0, 1.0));

  vec3 col = mix(rim, midBlue, front);
  col = mix(col, core, pow(front, 2.0));

  return col;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
  vec2 m = (uMouse - 0.5 * uRes) / min(uRes.x, uRes.y);

  vec3 ro = vec3(0.0, 0.0, 3.4);
  vec3 rd = normalize(vec3(uv, -1.7));

  float idle = uTime * 0.045;
  float ay = m.x * 0.35 + idle;
  float ax = -m.y * 0.25 + sin(uTime * 0.13) * 0.03;
  mat3 rotY = mat3(cos(ay), 0, sin(ay), 0, 1, 0, -sin(ay), 0, cos(ay));
  mat3 rotX = mat3(1, 0, 0, 0, cos(ax), -sin(ax), 0, sin(ax), cos(ax));
  ro = rotX * rotY * ro;
  rd = rotX * rotY * rd;

  vec3 radii = vec3(1.03, 1.0, 0.95);
  float nExp = 3.2;
  float t = uTime;

  float dist = 0.0;
  vec3 pos;
  bool hit = false;
  for (int i = 0; i < 100; i++) {
    pos = ro + rd * dist;
    float d = sdBlob(pos, radii, nExp, t);
    if (d < 0.0012) { hit = true; break; }
    dist += d * 0.6;
    if (dist > 9.0) break;
  }

  vec3 white = vec3(1.0);
  vec3 col = white;

  if (hit) {
    vec3 nrm = getNormal(pos, radii, nExp);
    vec3 viewDir = normalize(ro - pos);
    float cosTheta = clamp(dot(nrm, viewDir), 0.0, 1.0);
    float fres = pow(1.0 - cosTheta, 2.6);

    vec3 reflDir = reflect(-viewDir, nrm);
    vec3 refrDir = refract(-viewDir, nrm, 1.0 / 1.5);
    if (length(refrDir) < 0.001) refrDir = reflDir;

    vec3 refrDir2 = refract(refrDir, -nrm, 1.5);
    if (length(refrDir2) < 0.001) refrDir2 = refrDir;

    vec3 reflCol = studio(reflDir);
    vec3 refrCol = mix(studio(refrDir), studio(refrDir2), 0.4);

    vec3 glass = mix(refrCol, reflCol, fres);

    vec3 light1 = normalize(vec3(-0.3, 0.5, 0.8));
    vec3 light2 = normalize(vec3(0.5, 0.35, 0.75));
    vec3 h1 = normalize(light1 + viewDir);
    vec3 h2 = normalize(light2 + viewDir);
    float spec1 = pow(max(dot(nrm, h1), 0.0), 3.5);
    float spec2 = pow(max(dot(nrm, h2), 0.0), 90.0);
    glass += white * spec1 * 0.45;
    glass += white * spec2 * 1.0;

    float rimLine = smoothstep(0.0, 0.04, 1.0 - cosTheta) - smoothstep(0.04, 0.13, 1.0 - cosTheta);
    glass += vec3(0.9, 0.97, 1.0) * rimLine * 0.5;

    col = glass;
  }

  col = pow(col, vec3(0.95));

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function GlassBubbleBackground({
  containerRef,
  className = "",
  overlayOpacity = 0.0,
}: GlassBubbleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const internalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      console.warn("WebGL not supported for GlassBubbleBackground.");
      return;
    }

    const compile = (type: number, src: string): WebGLShader | null => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
      }
      return s;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT_SRC);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG_SRC);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
    }
    gl.useProgram(prog);

    const quad = new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    // Dimensions and interaction tracking
    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const targetEl = containerRef?.current || internalContainerRef.current?.parentElement || canvas;

    const resize = () => {
      if (!canvas || !targetEl) return;
      const rect = targetEl.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);

      if (mouseX === 0 && mouseY === 0) {
        mouseX = width / 2;
        mouseY = height / 2;
        targetMouseX = mouseX;
        targetMouseY = mouseY;
      }
    };

    resize();

    // Mouse and Touch listeners scoped to hero container
    const handleMouseMove = (e: MouseEvent) => {
      if (!targetEl) return;
      const rect = targetEl.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      // Smoothly return toward center when cursor leaves the hero
      targetMouseX = width / 2;
      targetMouseY = height / 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!targetEl || !e.touches.length) return;
      const rect = targetEl.getBoundingClientRect();
      targetMouseX = e.touches[0].clientX - rect.left;
      targetMouseY = e.touches[0].clientY - rect.top;
    };

    targetEl.addEventListener("mousemove", handleMouseMove as EventListener);
    targetEl.addEventListener("mouseleave", handleMouseLeave as EventListener);
    targetEl.addEventListener("touchmove", handleTouchMove as EventListener, { passive: true });

    // ResizeObserver for reliable container sizing
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && targetEl) {
      resizeObserver = new ResizeObserver(() => resize());
      resizeObserver.observe(targetEl);
    }
    window.addEventListener("resize", resize);

    // Prefers-reduced-motion check
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = motionQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        // Render a single frozen frame
        renderFrame(0);
      }
    };
    motionQuery.addEventListener("change", handleMotionChange);

    let animId = 0;
    const start = performance.now();

    const renderFrame = (now: number) => {
      const t = isReducedMotion ? 0.0 : (now - start) / 1000;

      if (!isReducedMotion) {
        mouseX += (targetMouseX - mouseX) * 0.06;
        mouseY += (targetMouseY - mouseY) * 0.06;
      } else {
        mouseX = width / 2;
        mouseY = height / 2;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mouseX * dpr, canvas.height - mouseY * dpr);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const frame = (now: number) => {
      renderFrame(now);
      if (!isReducedMotion) {
        animId = requestAnimationFrame(frame);
      }
    };

    if (!isReducedMotion) {
      animId = requestAnimationFrame(frame);
    } else {
      renderFrame(0);
    }

    // Comprehensive cleanup on unmount
    return () => {
      if (animId) {
        cancelAnimationFrame(animId);
      }
      targetEl.removeEventListener("mousemove", handleMouseMove as EventListener);
      targetEl.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      targetEl.removeEventListener("touchmove", handleTouchMove as EventListener);
      window.removeEventListener("resize", resize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      motionQuery.removeEventListener("change", handleMotionChange);

      if (buf) gl.deleteBuffer(buf);
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
      if (prog) gl.deleteProgram(prog);
    };
  }, [containerRef]);

  return (
    <div
      ref={internalContainerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover"
        style={{ width: "100%", height: "100%" }}
      />
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${overlayOpacity})`,
          }}
        />
      )}
    </div>
  );
}
