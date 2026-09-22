"use client";

import ShaderCanvas from "./ShaderCanvas";

// Design 3 — dark silky fabric folds with a glowing orange→pink→cyan crest,
// lifting toward the cursor on hover.
const FRAGMENT = /* glsl */ `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;

float crest(float x, float t, float base, float amp, float peakX, float width, vec2 cur, float hover) {
  float y = base + amp * exp(-pow((x - peakX) / width, 2.0));
  y += 0.025 * sin(x * 2.6 - t * 0.45) + 0.015 * sin(x * 5.1 + t * 0.3);
  y += 0.08 * hover * exp(-pow((x - cur.x) / 0.3, 2.0));
  return y;
}

vec3 rimColor(float x, float t) {
  float k = x * 0.9 + 0.12 * sin(t * 0.2);
  vec3 c = mix(vec3(1.0, 0.55, 0.28), vec3(0.95, 0.42, 0.62), smoothstep(-0.6, 0.1, k));
  return mix(c, vec3(0.45, 0.78, 1.0), smoothstep(0.1, 0.75, k));
}

vec3 fold(vec3 col, vec2 p, float cy, vec3 rim, float strength, float px) {
  float dy = cy - p.y;
  vec3 body = vec3(0.012, 0.04, 0.085);
  body += vec3(0.25, 0.5, 0.78) * exp(-max(dy, 0.0) * 9.0) * 0.32;
  body += rim * exp(-pow((dy - 0.055) / 0.032, 2.0)) * 0.9;
  body += vec3(0.3, 0.55, 0.85) * exp(-pow((dy - 0.15) / 0.07, 2.0)) * 0.12;
  body *= 1.0 - 0.65 * smoothstep(0.18, 0.7, dy);
  col = mix(col, body * strength, smoothstep(-px, px, dy));
  col += rim * exp(-max(-dy, 0.0) * 14.0) * 0.14 * strength * step(dy, 0.0);
  col += mix(rim, vec3(1.0), 0.35) * exp(-abs(dy) * 150.0) * 0.8 * strength;
  return col;
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  float t = uTime;
  float aspect = uResolution.x / uResolution.y;
  float portrait = step(aspect, 1.0);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  p.x *= mix(1.0, 3.2, portrait);
  float px = 1.5 / uResolution.y;

  vec2 cur = uMouse * 0.5 * vec2(aspect * mix(1.0, 3.2, portrait), 1.0);
  float hover = smoothstep(0.0, 0.08, length(uMouse));

  vec3 col = vec3(0.004, 0.008, 0.016);
  col += vec3(0.02, 0.05, 0.1) * exp(-length(p - vec2(0.5, 0.4)) * 1.5) * 0.6;

  float back = crest(p.x, t * 0.8 + 3.0, 0.0, 0.38, -0.1 + 0.06 * sin(t * 0.15), 0.7, cur, hover * 0.4);
  col = fold(col, p, back, rimColor(p.x + 0.6, t) * 0.6, 0.5, px);

  float front = crest(p.x, t, -0.5, 0.55, 0.35 + 0.05 * sin(t * 0.18), 0.6, cur, hover);
  col = fold(col, p, front, rimColor(p.x, t), 1.0, px);

  col *= mix(0.75 + 0.25 * smoothstep(-0.9, 0.0, p.x), 0.85, portrait);
  col = col * 1.1 / (1.0 + col * 0.4);
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function SilkWaveBackground() {
  return <ShaderCanvas fragment={FRAGMENT} renderScale={0.8} />;
}
