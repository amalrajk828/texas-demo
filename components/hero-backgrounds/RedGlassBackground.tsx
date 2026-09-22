"use client";

import ShaderCanvas from "./ShaderCanvas";

// Design 4 — deep red "horizon" glow with a tilted glass panel whose edges
// catch the light; parallax and a cursor-following glow on hover.
const FRAGMENT = /* glsl */ `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

float sdRoundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  float t = uTime;
  float aspect = uResolution.x / uResolution.y;
  float portrait = step(aspect, 1.0);
  float sx = mix(1.0, 3.2, portrait);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  p.x *= sx;
  vec2 cur = uMouse * 0.5 * vec2(aspect * sx, 1.0);
  float hover = smoothstep(0.0, 0.08, length(uMouse));
  vec3 red = vec3(1.0, 0.1, 0.04);
  vec3 ember = vec3(1.0, 0.36, 0.1);

  // Maroon sky, deepening toward the top-right
  vec3 col = mix(vec3(0.025, 0.004, 0.003), vec3(0.2, 0.018, 0.01), smoothstep(-0.3, 0.9, p.y * 0.6 + p.x * 0.45));

  // Horizon: the lit edge of a huge dark disc
  vec2 C = vec2(0.0, -0.95) + uMouse * vec2(0.03, 0.02);
  vec2 R = vec2(1.2, 0.95);
  float e = (length((p - C) / R) - 1.0) * R.y;
  float along = exp(-pow((p.x - cur.x * 0.25 * hover) / 0.85, 2.0));
  float breathe = 0.9 + 0.1 * sin(t * 0.5);
  col += mix(red, ember, 0.4) * exp(-max(e, 0.0) * 5.0) * 0.35 * along * breathe;
  col += ember * exp(-max(e, 0.0) * 28.0) * 0.9 * along * breathe;
  col = mix(col, vec3(0.006, 0.0, 0.0) + red * exp(e * 30.0) * 0.25 * along, smoothstep(0.0, -0.004, e));

  // Tilted glass panel rising from the bottom-right
  vec2 q = rot(0.5) * (p - vec2(0.72, -0.86) + uMouse * vec2(-0.02, -0.015));
  float d = sdRoundBox(q, vec2(0.72, 0.62), 0.2);
  float inside = smoothstep(0.003, -0.003, d);
  vec3 glass = col * 0.45 + vec3(0.16, 0.012, 0.006) * smoothstep(-0.6, 0.0, d) + ember * exp(d * 10.0) * 0.12;
  col = mix(col, glass, inside);
  float edgeLit = 0.55 + 0.45 * smoothstep(-0.3, 0.3, q.y);
  col += red * exp(-abs(d) * 160.0) * 0.95 * edgeLit;
  col += red * exp(-abs(d) * 16.0) * 0.12 * edgeLit;

  // Soft light that follows the cursor
  col += red * exp(-length(p - cur) * 3.2) * 0.1 * hover;

  col *= mix(0.6 + 0.4 * smoothstep(-0.9, 0.1, p.x), 0.8, portrait);
  col = col * 1.1 / (1.0 + col * 0.35);
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function RedGlassBackground() {
  return <ShaderCanvas fragment={FRAGMENT} renderScale={0.8} background="#0a0202" />;
}
