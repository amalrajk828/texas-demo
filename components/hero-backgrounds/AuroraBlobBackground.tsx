"use client";

import ShaderCanvas from "./ShaderCanvas";

// Design 2 — "Our Services" liquid glass: a glossy blue→orange sheet that
// slowly folds, seen through a huge glass lens with a chromatic, specular rim.
const FRAGMENT = /* glsl */ `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;
#define PI 3.14159265

vec3 palette(float s) {
  s = clamp(s, 0.0, 1.0) * 5.0;
  vec3 c = mix(vec3(0.02, 0.14, 0.48), vec3(0.08, 0.42, 0.90), smoothstep(0.0, 1.0, s));
  c = mix(c, vec3(0.50, 0.70, 0.95), smoothstep(1.0, 2.0, s));
  c = mix(c, vec3(0.98, 0.70, 0.52), smoothstep(2.0, 3.0, s));
  c = mix(c, vec3(0.95, 0.42, 0.13), smoothstep(3.0, 4.0, s));
  c = mix(c, vec3(0.40, 0.09, 0.03), smoothstep(4.0, 5.0, s));
  return c;
}

float field(vec2 p, float t) {
  vec2 q = p;
  q += 0.30 * vec2(sin(q.y * 1.7 + t * 0.21), cos(q.x * 1.3 - t * 0.17));
  q += 0.18 * vec2(sin(q.y * 2.9 - t * 0.26 + 1.7), cos(q.x * 2.3 + t * 0.19 + 0.6));
  return q.x * 0.55 - q.y * 0.28 + 0.12 * sin(q.x * 3.1 + q.y * 2.2 + t * 0.3);
}

vec3 sheet(vec2 p, float t, vec2 m) {
  float h = field(p, t);
  vec2 e = vec2(0.004, 0.0);
  vec2 g = vec2(field(p + e.xy, t) - field(p - e.xy, t), field(p + e.yx, t) - field(p - e.yx, t)) / (2.0 * e.x);
  vec3 n = normalize(vec3(-g * 0.9, 1.0));
  vec3 L = normalize(vec3(-0.45 + m.x * 0.35, 0.6 + m.y * 0.25, 0.8));
  float diff = 0.4 + 0.6 * dot(n, L);
  float spec = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 48.0);
  vec3 col = palette(h * 0.9 + 0.45) * diff;
  col += vec3(1.0, 0.95, 0.9) * spec * 0.4;
  col *= 1.0 - 0.28 * smoothstep(0.8, 2.0, length(g));
  return col;
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

// Adds a glass lens (centre C, radius R) over the sheet. Returns the composited colour.
vec3 lens(vec3 base, vec2 uv, vec2 C, float R, float strength, float t, vec2 m) {
  vec2 dv = uv - C;
  float r = length(dv);
  float e = r - R;
  float ang = atan(dv.y, dv.x);
  vec3 col = base;
  if (e < 0.0) {
    float x = r / R;
    float k = 1.0 - sqrt(max(0.0, 1.0 - x * x));
    vec2 dir = dv / max(r, 1e-4);
    float off = strength * k * k;
    col = vec3(
      sheet(uv - dir * off * 0.92, t, m).r,
      sheet(uv - dir * off * 1.00, t, m).g,
      sheet(uv - dir * off * 1.10, t, m).b) * 1.06;
    col += vec3(0.08, 0.10, 0.14) * smoothstep(-0.25, 0.0, e);
  }
  float lit = 0.5 + 0.5 * cos(ang - 2.2);
  vec3 spectral = 0.5 + 0.5 * cos(2.0 * PI * (vec3(0.0, 0.33, 0.67) + e * 16.0 + ang * 0.25 + t * 0.05));
  col += spectral * exp(-abs(e) * 48.0) * 0.24;
  col += vec3(0.92, 0.9, 0.88) * exp(-abs(e + 0.018) * 130.0) * (0.25 + 0.75 * lit) * 0.4;
  col *= 1.0 - 0.32 * exp(-abs(e - 0.02) * 70.0) * (1.0 - lit);
  return col;
}

void main() {
  float t = uTime;
  vec2 m = uMouse;
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  float aspect = uResolution.x / uResolution.y;

  float wide = step(1.0, aspect);
  vec3 col = sheet(uv, t, m);
  vec2 C = mix(vec2(0.62, -1.12), vec2(0.82, -0.42), wide);
  C += vec2(0.03 * sin(t * 0.2) + m.x * 0.02, 0.03 * cos(t * 0.17) + m.y * 0.02);
  col = lens(col, uv, C, 1.0, 0.22, t, m);
  col = lens(col, uv, C + vec2(0.05, -0.03), 0.8, 0.10, t, m) * 0.5 + col * 0.5;

  // Keep the white hero copy legible: deepen the text side and the bottom seam.
  col *= mix(0.72, 0.7 + 0.4 * smoothstep(-0.95, 0.25, uv.x), wide);

  // Melt the edges into the site's near-black so it sits in the dark theme,
  // without crushing the overall brightness.
  vec2 suv = gl_FragCoord.xy / uResolution;
  col = mix(vec3(dot(col, vec3(0.3, 0.55, 0.15))), col, 0.92) * 0.78;
  col *= 1.0 - 0.5 * pow(length(suv - 0.5) * 1.3, 2.2);
  col = mix(vec3(0.03, 0.03, 0.045), col, smoothstep(0.0, 0.32, suv.y));

  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function AuroraBlobBackground() {
  return <ShaderCanvas fragment={FRAGMENT} renderScale={0.7} background="#0b1a3a" />;
}
