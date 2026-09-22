"use client";

import React, { useRef, useEffect } from "react";

export interface RedIridescentGlassSphereProps {
  className?: string;
  overlayOpacity?: number;
}

const VERTEX_SHADER = `
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2  uResolution;
uniform float uTime;
uniform vec2  uMouse;

#define PI 3.14159265359

// Smooth soft noise squish for organic soap-bubble wobble
float bubbleNoise(vec3 p, float t) {
  float b1 = sin(p.x * 1.6 + t * 0.35) * cos(p.y * 1.4 - t * 0.28) * sin(p.z * 1.5 + t * 0.22);
  float b2 = sin(p.y * 2.4 + p.z * 1.8 + t * 0.45) * cos(p.x * 2.1 - t * 0.38) * 0.5;
  float b3 = sin(dot(p, vec3(0.577)) * 3.2 - t * 0.5) * 0.25;
  return (b1 + b2 + b3) * 0.078;
}

// Distance estimator for gently deforming iridescent glass sphere
float sdfSphere(vec3 p, float t) {
  float radius = 0.94;
  float breath = sin(t * 0.28) * 0.024;
  float disp = bubbleNoise(p, t);
  return length(p) - (radius + breath + disp);
}

// Normal calculation via tetrahedron / central differences
vec3 calcNormal(vec3 p, float t) {
  const float h = 0.0015;
  const vec2 k = vec2(1.0, -1.0);
  return normalize(
    k.xyy * sdfSphere(p + k.xyy * h, t) +
    k.yyx * sdfSphere(p + k.yyx * h, t) +
    k.yxy * sdfSphere(p + k.yxy * h, t) +
    k.xxx * sdfSphere(p + k.xxx * h, t)
  );
}

// Brand Red / Warm Orange / Soft White Thin-Film Optics
// Center: #fff5f0 | Mid: #ff6b35 | Outer: #e7212b
vec3 thinFilmColor(float cosTheta, vec3 p, float t) {
  float thickness = 0.52 + 0.38 * sin(p.x * 1.8 + p.y * 1.4 + p.z * 1.2 + t * 0.22);
  float opd = 2.0 * 1.38 * thickness * cosTheta;

  float phi = opd * 4.2 + t * 0.12;

  // Exact Brand Color Palette Tokens
  vec3 brandRed    = vec3(0.906, 0.129, 0.169); // #e7212b exact brand accent
  vec3 warmOrange  = vec3(1.000, 0.420, 0.208); // #ff6b35 warm orange transition
  vec3 darkCrimson = vec3(0.240, 0.040, 0.040); // #3d0a0a deep shadow base
  vec3 softPeach   = vec3(1.000, 0.760, 0.650); // Soft warm transition
  vec3 whiteHot    = vec3(1.000, 0.961, 0.941); // #fff5f0 white-hot center glow

  float w1 = sin(phi) * 0.5 + 0.5;
  float w2 = cos(phi * 0.85 + 1.4) * 0.5 + 0.5;
  float w3 = sin(phi * 1.6 + 2.8) * 0.5 + 0.5;

  vec3 col = mix(darkCrimson, brandRed, w1);
  col = mix(col, warmOrange, w2 * 0.88);
  col = mix(col, softPeach, w3 * 0.55);
  col = mix(col, whiteHot, pow(w3, 4.0) * 0.75);

  return col;
}

// Studio environment & dark background lighting
vec3 studioEnvironment(vec3 rayDir, float t) {
  // Near-black dark background (#0a0a0f)
  vec3 bgDark = vec3(0.039, 0.039, 0.059);
  vec3 bgRedGlow = vec3(0.22, 0.05, 0.06);

  float up = rayDir.y * 0.5 + 0.5;
  vec3 bg = mix(bgDark, bgRedGlow, pow(up, 2.5) * 0.4);

  // Soft brand red studio rim bounce
  float leftRim = smoothstep(0.2, -0.8, rayDir.x);
  vec3 rimTone = vec3(0.906, 0.129, 0.169) * leftRim * 0.35;

  return bg + rimTone;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / min(uResolution.x, uResolution.y);
  vec2 m = (uMouse - 0.5 * uResolution) / min(uResolution.x, uResolution.y);

  // Camera setup with slow ambient breathing & subtle mouse parallax
  float t = uTime * 0.9;
  vec3 ro = vec3(0.0, 0.0, 3.4);
  vec3 rd = normalize(vec3(uv, -1.8));

  // Subtle interactive 3D rotation
  float rotY = m.x * 0.22 + sin(t * 0.08) * 0.04;
  float rotX = -m.y * 0.18 + cos(t * 0.09) * 0.03;
  mat3 rY = mat3(cos(rotY), 0.0, sin(rotY), 0.0, 1.0, 0.0, -sin(rotY), 0.0, cos(rotY));
  mat3 rX = mat3(1.0, 0.0, 0.0, 0.0, cos(rotX), -sin(rotX), 0.0, sin(rotX), cos(rotX));
  ro = rX * rY * ro;
  rd = rX * rY * rd;

  // Background deep near-black (#0a0a0f) with subtle radial brand red atmospheric aura
  vec3 bgBase = vec3(0.039, 0.039, 0.059);
  float distToCenter = length(uv);
  float aura = exp(-distToCenter * 2.2);
  vec3 auraGlow = vec3(0.906, 0.129, 0.169) * aura * 0.32;
  vec3 col = bgBase + auraGlow;

  // Raymarching the organic bubble sphere
  float d = 0.0;
  float totalDist = 0.0;
  vec3 pos = ro;
  bool hit = false;

  for (int i = 0; i < 90; i++) {
    pos = ro + rd * totalDist;
    d = sdfSphere(pos, t);
    if (d < 0.0012) {
      hit = true;
      break;
    }
    totalDist += d * 0.65;
    if (totalDist > 7.0) break;
  }

  if (hit) {
    vec3 n = calcNormal(pos, t);
    vec3 viewDir = normalize(ro - pos);
    float cosTheta = clamp(dot(n, viewDir), 0.0, 1.0);

    // Fresnel reflectance factor (Schlick approximation)
    float f0 = 0.04;
    float fresnel = f0 + (1.0 - f0) * pow(1.0 - cosTheta, 3.2);

    // Dynamic brand red/orange thin-film iridescence
    vec3 filmIrid = thinFilmColor(cosTheta, pos, t);

    // Refraction and internal reflections
    vec3 refrR = refract(-viewDir, n, 1.0 / 1.48);
    vec3 refrG = refract(-viewDir, n, 1.0 / 1.50);
    vec3 refrB = refract(-viewDir, n, 1.0 / 1.52);

    vec3 reflDir = reflect(-viewDir, n);

    vec3 refrColR = studioEnvironment(length(refrR) > 0.001 ? refrR : reflDir, t);
    vec3 refrColG = studioEnvironment(length(refrG) > 0.001 ? refrG : reflDir, t);
    vec3 refrColB = studioEnvironment(length(refrB) > 0.001 ? refrB : reflDir, t);
    vec3 refrCol = vec3(refrColR.r, refrColG.g, refrColB.b);

    vec3 reflCol = studioEnvironment(reflDir, t) + filmIrid * 1.35;

    // Glass body composition with iridescent sheen
    vec3 glassBody = mix(refrCol * 0.4 + filmIrid * 0.35, reflCol, fresnel);

    // ── Studio Key Light (Warm Highlight Sweeping Across Surface) ──
    float sweepAngle = t * 0.22;
    vec3 warmKeyPos = normalize(vec3(cos(sweepAngle) * 1.4, 0.75 + sin(sweepAngle * 0.8) * 0.3, sin(sweepAngle) * 1.4 + 0.8));
    vec3 hWarm = normalize(warmKeyPos + viewDir);

    float specWarmSoft = pow(max(dot(n, hWarm), 0.0), 12.0);
    float specWarmSharp = pow(max(dot(n, hWarm), 0.0), 140.0);
    vec3 warmTone = vec3(1.0, 0.95, 0.90); // #fff5f0 soft white specular

    glassBody += warmTone * specWarmSoft * 0.50;
    glassBody += vec3(1.0, 0.98, 0.94) * specWarmSharp * 1.20;

    // Secondary Warm Orange/Red Key Light for vibrant rim punch
    vec3 rimLightDir = normalize(vec3(-1.2, -0.6, 0.9));
    vec3 hRim = normalize(rimLightDir + viewDir);
    float specRim = pow(max(dot(n, hRim), 0.0), 32.0);
    glassBody += vec3(1.000, 0.420, 0.208) * specRim * 0.75;

    // Glowing soap-bubble rim edge line
    float rimEdge = smoothstep(0.0, 0.08, 1.0 - cosTheta) - smoothstep(0.08, 0.22, 1.0 - cosTheta);
    glassBody += filmIrid * rimEdge * 0.95;

    // Inner core glow & dark pooling for 3D depth
    float innerGlow = pow(cosTheta, 2.0);
    glassBody += vec3(0.50, 0.08, 0.08) * innerGlow * 0.3;

    col = glassBody;
  } else {
    // Subtle outer atmospheric glow halo hugging the sphere contour
    float minD = sdfSphere(ro + rd * 3.4, t);
    float halo = exp(-max(0.0, minD) * 3.2);
    col += vec3(0.906, 0.129, 0.169) * halo * 0.24;
  }

  // Tone mapping and gamma correction
  col = col / (col + vec3(0.85));
  col = pow(col, vec3(1.0 / 1.15));

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function RedIridescentGlassSphere({
  className = "",
  overlayOpacity = 0.0,
}: RedIridescentGlassSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { antialias: true, alpha: false, powerPreference: "high-performance" }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      console.warn("WebGL not supported for RedIridescentGlassSphere.");
      return;
    }

    const compileShader = (type: number, source: string): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Fullscreen quad
    const quadVertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uMouse = gl.getUniformLocation(program, "uMouse");

    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const heroSection = containerRef.current?.closest("section") || containerRef.current?.parentElement || canvas;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
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

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroSection) return;
      const rect = heroSection.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = width / 2;
      targetMouseY = height / 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!heroSection || !e.touches.length) return;
      const rect = heroSection.getBoundingClientRect();
      targetMouseX = e.touches[0].clientX - rect.left;
      targetMouseY = e.touches[0].clientY - rect.top;
    };

    heroSection.addEventListener("mousemove", handleMouseMove as EventListener);
    heroSection.addEventListener("mouseleave", handleMouseLeave as EventListener);
    heroSection.addEventListener("touchmove", handleTouchMove as EventListener, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      resizeObserver = new ResizeObserver(() => resize());
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener("resize", resize);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = motionQuery.matches;

    let animId = 0;
    const startTime = performance.now();

    const render = (now: number) => {
      const t = isReducedMotion ? 0.0 : (now - startTime) * 0.001;

      if (!isReducedMotion) {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
      } else {
        mouseX = width / 2;
        mouseY = height / 2;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mouseX * dpr, canvas.height - mouseY * dpr);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!isReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    if (!isReducedMotion) {
      animId = requestAnimationFrame(render);
    } else {
      render(0);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      heroSection.removeEventListener("mousemove", handleMouseMove as EventListener);
      heroSection.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      heroSection.removeEventListener("touchmove", handleTouchMove as EventListener);
      window.removeEventListener("resize", resize);
      if (resizeObserver) resizeObserver.disconnect();

      if (buffer) gl.deleteBuffer(buffer);
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
      if (program) gl.deleteProgram(program);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: `rgba(10, 10, 15, ${overlayOpacity})`,
          }}
        />
      )}
    </div>
  );
}
