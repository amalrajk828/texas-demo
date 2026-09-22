// Shared 2.5D water-droplet renderer. A scene supplies `prepare()` and
// `sdScene(p)` (2D signed distance, negative inside the water) and defines
// EDGE_R (radius of the rounded drop edge) and LIGHT_COL.

export const HEADER = /* glsl */ `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;
#define PI 3.14159265
float gTime;
vec2 gMouse;
float gPortrait;
vec3 gLight;
vec2 gCursor;
float gHover;
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}
`;

export const FOOTER = /* glsl */ `
float heightAt(vec2 p) {
  float x = clamp(-sdScene(p) / EDGE_R, 0.0, 1.0);
  return EDGE_R * sqrt(1.0 - (1.0 - x) * (1.0 - x));
}

// Dark studio floor lit by a soft spotlight pool
vec3 backdrop(vec2 p, vec2 pool) {
  vec3 c = vec3(0.012, 0.013, 0.02);
  vec2 q = (p - pool) / vec2(0.7, 0.5);
  c += LIGHT_COL * exp(-dot(q, q) * 1.8) * 0.075;
  // Colour accents the drop picks up and bends: warm ember low, cool blue high
  c += vec3(1.0, 0.22, 0.28) * exp(-length(p - vec2(-0.1, -0.75)) * 2.6) * 0.14;
  c += vec3(0.15, 0.42, 1.0) * exp(-length(p - vec2(0.6, 0.5)) * 2.0) * 0.22;
  c += vec3(0.75, 0.2, 0.7) * exp(-length(p - vec2(-0.85, 0.45)) * 2.4) * 0.1;
  return c;
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  gTime = uTime;
  gMouse = uMouse;
  gPortrait = step(uResolution.x, uResolution.y);
  gCursor = uMouse * 0.5 * uResolution / min(uResolution.x, uResolution.y);
  gHover = smoothstep(0.0, 0.08, length(uMouse));
  gLight = normalize(vec3(-0.55 + 0.18 * sin(gTime * 0.23) + gMouse.x * 0.35,
                          0.62 + 0.10 * cos(gTime * 0.19) + gMouse.y * 0.25, 0.62));
  prepare();

  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / min(uResolution.x, uResolution.y);
  float px = 1.5 / min(uResolution.x, uResolution.y);
  vec2 L2 = normalize(gLight.xy);
  vec2 pool = -L2 * 0.05;

  float d = sdScene(uv);
  vec3 col = backdrop(uv, pool);

  // Outside the water: soft contact shadow with light focused through the drop
  float dShadow = sdScene(uv + L2 * 0.035);
  float dCaustic = sdScene(uv + L2 * 0.06);
  col *= 1.0 - 0.55 * exp(-max(dShadow, 0.0) * 26.0) * step(0.0, d);
  col += LIGHT_COL * exp(-max(dCaustic + 0.02, 0.0) * 34.0) * 0.28 * step(0.0, d) * smoothstep(0.0, 0.03, d);

  if (d < px) {
    vec2 e = vec2(0.0025, 0.0);
    float hx = (heightAt(uv + e.xy) - heightAt(uv - e.xy)) / (2.0 * e.x);
    float hy = (heightAt(uv + e.yx) - heightAt(uv - e.yx)) / (2.0 * e.x);
    vec3 n = normalize(vec3(-hx, -hy, 1.0));
    float h = heightAt(uv);
    float edge = 1.0 - n.z;

    // Refract (magnify + invert) the lit floor through the dome
    vec2 off = n.xy * (0.18 + h * 1.6);
    vec3 body = vec3(
      backdrop(uv - off * 0.96, pool).r,
      backdrop(uv - off * 1.00, pool).g,
      backdrop(uv - off * 1.06, pool).b) * 1.1;
    body += vec3(0.004, 0.007, 0.016);

    // Dark total-internal-reflection band just inside the rim
    body *= 1.0 - 0.85 * smoothstep(0.2, 0.8, edge);

    // Caustic crescent on the far side from the light
    vec2 nd = normalize(n.xy + 1e-5);
    float farSide = pow(max(dot(nd, -L2), 0.0), 2.5);
    float crescent = farSide * smoothstep(0.12, 0.55, edge) * (1.0 - smoothstep(0.8, 1.0, edge));
    body += LIGHT_COL * crescent * 1.9;
    body += vec3(0.35, 0.65, 1.0) * farSide * smoothstep(0.55, 0.95, edge) * 0.5;
    // Faint glow of light pooled in the lower body of the drop
    body += LIGHT_COL * farSide * smoothstep(0.02, 0.3, edge) * 0.12;

    // Specular: sharp key highlight + soft sheen + cool counter-light
    vec3 V = vec3(0.0, 0.0, 1.0);
    float key = max(dot(n, normalize(gLight + V)), 0.0);
    body += vec3(1.0) * pow(key, 220.0) * 2.6;
    body += LIGHT_COL * pow(key, 28.0) * 0.22;
    vec3 L3 = normalize(vec3(0.6, -0.55, 0.55));
    body += vec3(0.55, 0.75, 1.0) * pow(max(dot(n, normalize(L3 + V)), 0.0), 90.0) * 0.55;

    // Thin iridescent fresnel rim
    float ang = atan(nd.y, nd.x);
    vec3 irid = 0.5 + 0.5 * cos(2.0 * PI * (vec3(0.0, 0.33, 0.67) + ang * 0.25 + edge * 1.5 + gTime * 0.04));
    body += mix(vec3(0.6, 0.75, 1.0), irid, 0.7) * pow(edge, 4.0) * 0.45;

    col = mix(col, body, smoothstep(px, -px, d));
  }

  vec2 suv = gl_FragCoord.xy / uResolution;
  col *= 1.0 - 0.5 * pow(length(suv - 0.5), 1.8);
  col = col * 1.08 / (1.0 + col * 0.35);
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`;
