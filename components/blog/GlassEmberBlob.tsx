"use client";

import { useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Vertex shader — fullscreen quad passthrough
───────────────────────────────────────────────────────────────────────────── */
const VERT = /* glsl */ `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

/* ─────────────────────────────────────────────────────────────────────────────
   Fragment shader
   ─ Signed-distance blob (ellipsoid + squish deformation, NOT a perfect sphere)
   ─ Raymarching for entry and exit with per-frame SDF evaluation
   ─ Snell's law refraction, Fresnel (Schlick) at both surfaces
   ─ Ember studio() environment — sole color source
───────────────────────────────────────────────────────────────────────────── */
const FRAG = /* glsl */ `
#ifdef GL_ES
precision highp float;
#endif

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;

const float IOR   = 1.48;
const float BOUND = 1.45;   /* bounding sphere — max possible blob radius     */
const float CAM   = 1.7;    /* closer camera = larger apparent bubble         */

/* ── Ember studio environment ──────────────────────────────────────────── */
vec3 studio(vec3 dir) {
  vec3 deepBlack = vec3(0.02, 0.01, 0.01);
  vec3 maroon    = vec3(0.35, 0.08, 0.06);
  vec3 emberRed  = vec3(0.62, 0.14, 0.08);
  vec3 amber     = vec3(0.85, 0.45, 0.18);
  vec3 core      = vec3(0.98, 0.85, 0.65);

  float front    = smoothstep(-0.5,  0.9, dir.z);
  float leftness = smoothstep( 0.3, -0.9, dir.x);
  float lowerness= smoothstep( 0.3, -0.8, dir.y);

  vec3 rim = mix(deepBlack, maroon,
                 clamp(leftness * 0.75 + lowerness * 0.4, 0.0, 1.0));
  rim = mix(rim, emberRed,
            clamp(lowerness * leftness * 1.2, 0.0, 1.0));

  vec3 col = mix(rim, amber, front);
  col = mix(col, core, pow(front, 2.0));
  return col;
}

/* ── Rotation helpers ────────────────────────────────────────────────── */
vec3 rotX(vec3 v, float a) {
  float c = cos(a), s = sin(a);
  return vec3(v.x, v.y * c - v.z * s, v.y * s + v.z * c);
}
vec3 rotY(vec3 v, float a) {
  float c = cos(a), s = sin(a);
  return vec3(v.x * c + v.z * s, v.y, -v.x * s + v.z * c);
}

/* ── Squish deformation — slow organic base + fast jiggle layer
   Base: three de-synced axes, long non-repeating period (organic drift)
   Jiggle: beat pattern (two mismatched fast sines) drives squash/stretch like
           a liquid bubble responding to surface tension and momentum.       ── */
float squish(vec3 dir, float t) {
  /* ── Slow organic base (keep as-is) ────────────────────────────────── */
  vec3 axis1 = normalize(vec3(sin(t * 0.17), cos(t * 0.13),  0.40 + sin(t * 0.05) * 0.15));
  vec3 axis2 = normalize(vec3(cos(t * 0.11 + 1.7), sin(t * 0.15 + 0.6), -0.30 + cos(t * 0.07) * 0.10));
  vec3 axis3 = normalize(vec3(sin(t * 0.08 + 3.1), sin(t * 0.06 - 1.2),  cos(t * 0.09)));
  float s = 0.0;
  s += 0.080 * (dot(dir, axis1) * dot(dir, axis1) - 0.33);
  s += 0.055 * (dot(dir, axis2) * dot(dir, axis2) - 0.33);
  s += 0.030 * (dot(dir, axis3) * dot(dir, axis3) - 0.33);

  /* ── Fast jiggle layer ─────────────────────────────────────────────── */
  /* Jiggle axis itself drifts slowly so the squash direction wanders         */
  vec3 jiggleAxis = normalize(vec3(sin(t * 0.90), cos(t * 0.73), sin(t * 0.61 + 1.0)));
  /* Beat pattern: two mismatched fast frequencies — avoids metronome feel   */
  float jiggle = sin(t * 1.4) * 0.5 + sin(t * 2.3 + 1.7) * 0.3;
  s += 0.055 * jiggle * (dot(dir, jiggleAxis) * dot(dir, jiggleAxis) - 0.33);

  return s;
}

/* ── Blob SDF — ellipsoid radii give baseline asymmetry,
   squish() adds time-varying directional deformation.
   Scale factor 0.6 keeps Lipschitz safe for sphere-tracing.   ─────── */
float sdBlob(vec3 p, float t) {
  vec3 radii = vec3(1.03, 1.0, 0.95);   /* NOT (1,1,1) — baseline asymmetry */
  vec3 q = p / radii;
  float r = length(q);
  if (r < 0.001) return -0.8;
  vec3 dir    = q / r;
  float mod_  = 1.0 + squish(dir, t);   /* squish applied per the spec       */
  return (r - mod_) * 0.6;              /* conservative Lipschitz scaling     */
}

/* ── Gradient-based normal (finite differences of SDF) ─────────────── */
vec3 blobNormal(vec3 p, float t) {
  const float e = 0.003;
  return normalize(vec3(
    sdBlob(p + vec3(e, 0, 0), t) - sdBlob(p - vec3(e, 0, 0), t),
    sdBlob(p + vec3(0, e, 0), t) - sdBlob(p - vec3(0, e, 0), t),
    sdBlob(p + vec3(0, 0, e), t) - sdBlob(p - vec3(0, 0, e), t)
  ));
}

/* ── Sphere-march entry (outside → surface) ─────────────────────────── */
float marchEntry(vec3 ro, vec3 rd, float tNear, float tFar, float t) {
  float tm = tNear;
  for (int i = 0; i < 140; i++) {          /* 128 → 140: compensates larger canvas */
    float d = sdBlob(ro + rd * tm, t);
    if (d < 0.0006) return tm;
    tm += d * 0.55;
    if (tm > tFar) return -1.0;
  }
  return -1.0;
}

/* ── Sphere-march exit (inside → opposite surface) ──────────────────── */
float marchExit(vec3 ro, vec3 rd, float tMax, float t) {
  float tm = 0.012;
  for (int i = 0; i < 140; i++) {          /* match entry count */
    float d = sdBlob(ro + rd * tm, t);
    if (d > -0.0006) return tm;
    tm += max(-d * 0.55, 0.005);
    if (tm > tMax) return tMax;
  }
  return tMax;
}

/* ── Fresnel (Schlick) ──────────────────────────────────────────────── */
float schlick(float cosT, float n1, float n2) {
  float r0 = pow((n1 - n2) / (n1 + n2), 2.0);
  return r0 + (1.0 - r0) * pow(1.0 - cosT, 5.0);
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / min(uRes.x, uRes.y);

  /* Camera orbit — mouse parallax + idle rotation */
  float yaw   = uMouse.x * 1.2 + uTime * 0.045;
  float pitch = uMouse.y * 0.65;

  vec3 camPos = vec3(0.0, 0.0, CAM);
  camPos = rotX(camPos, pitch);
  camPos = rotY(camPos, yaw);

  vec3 fwd   = normalize(-camPos);
  vec3 right = normalize(cross(fwd, vec3(0.0, 1.0, 0.0)));
  vec3 up    = cross(right, fwd);

  vec3 ro = camPos;
  vec3 rd = normalize(fwd + uv.x * right + uv.y * up);

  /* ── Bounding sphere cull — skip empty space ── */
  float bb    = dot(ro, rd);
  float bDisc = bb * bb - (dot(ro, ro) - BOUND * BOUND);
  if (bDisc < 0.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    return;
  }
  float bh    = sqrt(bDisc);
  float tNear = max(-bb - bh, 0.0);
  float tFar  = -bb + bh;

  /* ── Raymarch entry ── */
  float tHit = marchEntry(ro, rd, tNear, tFar, uTime);
  if (tHit < 0.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    return;
  }

  vec3 pA = ro + rd * tHit;
  /* Blend FD normal slightly toward sphere normal — suppresses any faceting
     at deformation extremes without visibly softening the shape.            */
  vec3 nA = normalize(mix(blobNormal(pA, uTime), normalize(pA), 0.06));

  /* ── Fresnel at entry: air → glass ── */
  float cosA      = abs(dot(rd, nA));
  float frA       = schlick(cosA, 1.0, IOR);
  vec3  reflExt   = reflect(rd, nA);
  vec3  refrInDir = refract(rd, nA, 1.0 / IOR);

  /* ── Raymarch exit from inside the blob ── */
  float tOut = marchExit(pA, refrInDir, BOUND * 3.0, uTime);
  vec3 pB    = pA + refrInDir * tOut;
  vec3 nB    = normalize(mix(blobNormal(pB, uTime), normalize(pB), 0.06));

  /* ── Fresnel at exit: glass → air ── */
  float cosB = abs(dot(refrInDir, nB));
  float frB  = schlick(cosB, IOR, 1.0);

  /* GLSL refract() returns vec3(0) on total internal reflection */
  vec3 refrOut = refract(refrInDir, -nB, IOR);   /* -nB opposes interior ray */
  vec3 interior;
  if (dot(refrOut, refrOut) < 0.1) {
    /* Total internal reflection */
    interior = studio(reflect(refrInDir, nB));
  } else {
    interior = mix(studio(refrOut), studio(reflect(refrInDir, nB)), frB);
  }

  /* ── Combine entry Fresnel ── */
  vec3 col = mix(interior, studio(reflExt), frA);

  /* ── Specular highlights ── */
  vec3  lKey = normalize(vec3(0.55, 1.0, 1.3));
  float spec = pow(max(dot(reflExt, lKey), 0.0), 128.0);
  col += vec3(1.0, 0.88, 0.72) * spec * 1.1;

  vec3  lRim = normalize(vec3(-1.2, -0.6, 0.5));
  float rim  = pow(max(dot(reflExt, lRim), 0.0), 32.0);
  col += vec3(0.62, 0.14, 0.08) * rim * 0.35;

  gl_FragColor = vec4(col, 1.0);
}
`;

/* ─────────────────────────────────────────────────────────────────────────────
   React component
───────────────────────────────────────────────────────────────────────────── */
export default function GlassEmberBlob() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ── Canvas ── */
    const canvas = document.createElement("canvas");
    Object.assign(canvas.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      display: "block",
    });
    container.appendChild(canvas);

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    }) as WebGLRenderingContext | null;

    if (!gl) { canvas.remove(); return; }

    /* ── Compile helpers ── */
    function compile(src: string, type: number): WebGLShader | null {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error("[GlassEmberBlob] shader error:", gl!.getShaderInfoLog(s));
        return null;
      }
      return s;
    }

    const vs = compile(VERT, gl.VERTEX_SHADER);
    const fs = compile(FRAG, gl.FRAGMENT_SHADER);
    if (!vs || !fs) { canvas.remove(); return; }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("[GlassEmberBlob] link error:", gl.getProgramInfoLog(prog));
      canvas.remove();
      return;
    }
    gl.useProgram(prog);

    /* ── Fullscreen quad ── */
    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    /* ── Uniform locations ── */
    const uRes   = gl.getUniformLocation(prog, "uRes");
    const uTime  = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    /* ── Resize (DPR-aware) ── */
    let W = 0, H = 0;
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.round(container!.clientWidth  * dpr);
      H = Math.round(container!.clientHeight * dpr);
      canvas.width  = W;
      canvas.height = H;
      gl!.viewport(0, 0, W, H);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    /* ── Mouse/touch parallax (scoped to hero container) ── */
    let mx = 0, my = 0;
    function onMouseMove(e: MouseEvent) {
      const r = container!.getBoundingClientRect();
      mx =  ((e.clientX - r.left) / r.width  - 0.5) * 2;
      my = -((e.clientY - r.top)  / r.height - 0.5) * 2;
    }
    function onTouchMove(e: TouchEvent) {
      const r = container!.getBoundingClientRect();
      const t = e.touches[0];
      mx =  ((t.clientX - r.left) / r.width  - 0.5) * 2;
      my = -((t.clientY - r.top)  / r.height - 0.5) * 2;
    }
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchmove", onTouchMove, { passive: true });

    /* ── Render loop — uTime increments every frame ── */
    let rafId = 0;
    const t0  = performance.now();

    function tick() {
      rafId = requestAnimationFrame(tick);

      /* uTime drives both the idle rotation AND the squish() animation.
         Frozen to 0 for prefers-reduced-motion users.                    */
      const elapsed  = prefersReducedMotion ? 0 : (performance.now() - t0) / 1000;
      const mouseX   = prefersReducedMotion ? 0 : mx;
      const mouseY   = prefersReducedMotion ? 0 : my;

      gl!.uniform2f(uRes,   W, H);
      gl!.uniform1f(uTime,  elapsed);           /* ← updated every frame  */
      gl!.uniform2f(uMouse, mouseX, mouseY);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
    }
    tick();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchmove", onTouchMove);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
      const ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
