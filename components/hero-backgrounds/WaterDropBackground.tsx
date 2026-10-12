"use client";

import ShaderCanvas from "./ShaderCanvas";
import { HEADER, FOOTER } from "./waterDropShader";

// Design 1 — a single large water drop under a spotlight, wobbling gently,
// with two small droplets that drift in and merge with it.
const SCENE = /* glsl */ `
#define EDGE_R 0.2
#define LIGHT_COL vec3(1.0, 0.86, 0.74)

vec2 gAnchor;
float gScale;
float gPullAngle;
float gPull;

void prepare() {
  gAnchor = mix(vec2(-0.04, 0.05), vec2(0.26, 0.62), gPortrait);
  gScale = mix(1.0, 0.72, gPortrait);
  // Drift toward the cursor, then bulge the surface toward it when close
  gAnchor += (gCursor - gAnchor) * 0.07 * gHover;
  vec2 toCursor = (gCursor - gAnchor) / gScale;
  gPullAngle = atan(toCursor.y, toCursor.x);
  gPull = gHover * smoothstep(1.1, 0.3, length(toCursor));
}

float sdScene(vec2 p) {
  vec2 q = (p - gAnchor) / gScale;
  float a = atan(q.y, q.x);
  float R = 0.27 * (1.0 + 0.03 * sin(3.0 * a + gTime * 0.6) + 0.018 * sin(5.0 * a - gTime * 0.45));
  R += 0.055 * gPull * pow(max(cos(a - gPullAngle), 0.0), 3.0);
  float d = length(q) - R;

  // Satellites mostly float free and only occasionally kiss the main drop
  float o1 = gTime * 0.17 + 3.6;
  vec2 s1 = vec2(cos(o1), sin(o1) * 0.85) * (0.46 + 0.1 * sin(gTime * 0.29));
  d = smin(d, length(q - s1) - 0.05, 0.035);

  float o2 = -gTime * 0.12 + 0.9;
  vec2 s2 = vec2(cos(o2), sin(o2)) * (0.52 + 0.06 * cos(gTime * 0.23));
  d = smin(d, length(q - s2) - 0.03, 0.025);

  return d * gScale;
}
`;

const FRAGMENT = HEADER + SCENE + FOOTER;

export default function WaterDropBackground() {
  return <ShaderCanvas fragment={FRAGMENT} renderScale={0.9} />;
}
