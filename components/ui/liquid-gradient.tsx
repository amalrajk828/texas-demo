"use client";

import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

export interface LiquidGradientProps {
  colors?: string[];
  speed?: number;
  scale?: number;
  seed?: number;
  turbAmp?: number;
  turbFreq?: number;
  turbIter?: number;
  waveFreq?: number;
  distBias?: number;
  jellify?: number;
  ditherMode?: "grain" | "bayer" | "none";
  dither?: number;
  exposure?: number;
  contrast?: number;
  saturation?: number;
  className?: string;
  style?: React.CSSProperties;
  interactive?: boolean;
}

export interface LiquidGradientHandle {
  canvas: HTMLCanvasElement | null;
}

export const LIQUID_GRADIENT_DEFAULTS = {
  colors: ["#ffd9a0", "#ff8fb8", "#e8449c", "#6b2fc9", "#2a1454"],
  speed: 0.35,
  scale: 0.6,
  seed: 21,
  turbAmp: 0.35,
  turbFreq: 0.5,
  turbIter: 6,
  waveFreq: 1.4,
  distBias: 0.15,
  jellify: 0.0,
  ditherMode: "grain" as const,
  dither: 0.08,
  exposure: 1.15,
  contrast: 1.1,
  saturation: 1.05,
};

export const LIQUID_GRADIENT_PRESETS = {
  sunset: {
    colors: ["#ffd9a0", "#ff8fb8", "#e8449c", "#6b2fc9", "#2a1454"],
    speed: 0.35,
    scale: 0.6,
    seed: 21,
    turbAmp: 0.35,
    turbFreq: 0.5,
    turbIter: 6,
    waveFreq: 1.4,
    distBias: 0.15,
    jellify: 0.0,
    ditherMode: "grain" as const,
    dither: 0.08,
    exposure: 1.15,
    contrast: 1.1,
    saturation: 1.05,
  },
  ocean: {
    colors: ["#0f2b48", "#1d6fa5", "#00b4d8", "#90e0ef", "#e0fbfc"],
    speed: 0.3,
    scale: 0.7,
    seed: 42,
    turbAmp: 0.4,
    turbFreq: 0.6,
    turbIter: 5,
    waveFreq: 1.2,
    distBias: 0.1,
    jellify: 0.0,
    ditherMode: "grain" as const,
    dither: 0.06,
    exposure: 1.1,
    contrast: 1.05,
    saturation: 1.1,
  },
  aurora: {
    colors: ["#051923", "#003554", "#006494", "#0582ca", "#00a6fb"],
    speed: 0.4,
    scale: 0.8,
    seed: 15,
    turbAmp: 0.5,
    turbFreq: 0.4,
    turbIter: 6,
    waveFreq: 1.6,
    distBias: 0.2,
    jellify: 0.0,
    ditherMode: "grain" as const,
    dither: 0.07,
    exposure: 1.2,
    contrast: 1.15,
    saturation: 1.1,
  },
};

function hexToRgb(hex: string): [number, number, number] {
  const sanitized = hex.replace("#", "").trim();
  let r = 0;
  let g = 0;
  let b = 0;
  if (sanitized.length === 3) {
    r = parseInt(sanitized[0] + sanitized[0], 16) / 255;
    g = parseInt(sanitized[1] + sanitized[1], 16) / 255;
    b = parseInt(sanitized[2] + sanitized[2], 16) / 255;
  } else if (sanitized.length === 6) {
    r = parseInt(sanitized.substring(0, 2), 16) / 255;
    g = parseInt(sanitized.substring(2, 4), 16) / 255;
    b = parseInt(sanitized.substring(4, 6), 16) / 255;
  }
  return [r, g, b];
}

const vsSource = `#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
  v_uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fsSource = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_scale;
uniform float u_seed;
uniform float u_turbAmp;
uniform float u_turbFreq;
uniform int u_turbIter;
uniform float u_waveFreq;
uniform float u_distBias;
uniform float u_jellify;
uniform float u_dither;
uniform float u_exposure;
uniform float u_contrast;
uniform float u_saturation;

uniform vec3 u_colors[5];
uniform int u_colorCount;

// High quality Simplex / FBM noise for smooth organic bands
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
  + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
    dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p, int iters, float freq, float amp) {
  float v = 0.0;
  float a = amp;
  mat2 rot = mat2(cos(0.45), sin(0.45), -sin(0.45), cos(0.45));
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    v += a * snoise(p * freq);
    p = rot * p * 2.02 + vec2(0.13, 0.47);
    a *= 0.5;
  }
  return v;
}

// Pseudo-random hash for grainy film texture
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

// Multi-stop color blend based on normalized coordinate t [0.0, 1.0]
vec3 sampleGradient(float t) {
  t = clamp(t, 0.0, 1.0);
  if (u_colorCount == 1) return u_colors[0];
  if (u_colorCount == 2) return mix(u_colors[0], u_colors[1], t);
  if (u_colorCount == 3) {
    if (t < 0.5) return mix(u_colors[0], u_colors[1], t * 2.0);
    return mix(u_colors[1], u_colors[2], (t - 0.5) * 2.0);
  }
  if (u_colorCount == 4) {
    if (t < 0.333) return mix(u_colors[0], u_colors[1], t * 3.0);
    if (t < 0.666) return mix(u_colors[1], u_colors[2], (t - 0.333) * 3.0);
    return mix(u_colors[2], u_colors[3], (t - 0.666) * 3.0);
  }
  // 5 colors: peach -> pink -> magenta -> purple -> deep indigo
  if (t < 0.25) return mix(u_colors[0], u_colors[1], t * 4.0);
  if (t < 0.5) return mix(u_colors[1], u_colors[2], (t - 0.25) * 4.0);
  if (t < 0.75) return mix(u_colors[2], u_colors[3], (t - 0.5) * 4.0);
  return mix(u_colors[3], u_colors[4], (t - 0.75) * 4.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  
  float t = u_time * 0.4;
  
  // Diagonal base flow angle (warm top-left to cool bottom-right)
  vec2 dir = vec2(0.7071, -0.7071);
  float diagonalCoord = dot(uv - vec2(0.5), dir) + 0.5;
  
  // Interactive mouse deflection
  vec2 mouse = (u_mouse * 2.0 - 1.0);
  float mDist = length(st - mouse);
  vec2 mForce = (st - mouse) * exp(-mDist * 2.4) * 0.18;
  
  vec2 p = (st + mForce) * u_scale + vec2(u_seed * 0.17, u_seed * 0.31);
  
  // Smooth wide flowing turbulence
  vec2 q = vec2(
    fbm(p + t * 0.3, u_turbIter, u_turbFreq, u_turbAmp),
    fbm(p + vec2(4.3, 2.1) - t * 0.25, u_turbIter, u_turbFreq, u_turbAmp)
  );
  
  vec2 r = vec2(
    fbm(p + 2.8 * q + vec2(1.7, 9.2) + t * 0.2, u_turbIter, u_turbFreq * 1.2, u_turbAmp * 0.8),
    fbm(p + 2.8 * q + vec2(8.3, 2.8) - t * 0.15, u_turbIter, u_turbFreq * 1.2, u_turbAmp * 0.8)
  );
  
  float flowValue = diagonalCoord + (r.x + r.y * 0.5) * u_waveFreq * 0.28 + u_distBias;
  
  // Jellify effect (optional)
  if (u_jellify > 0.01) {
    flowValue += sin(flowValue * 6.28 + t * 2.0) * u_jellify * 0.1;
  }
  
  // Color lookup along flow
  vec3 col = sampleGradient(flowValue);
  
  // Post-processing: Exposure, Contrast, Saturation
  col *= u_exposure;
  col = (col - 0.5) * u_contrast + 0.5;
  
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(luma), col, u_saturation);
  
  // Soft Film Grain Texture (ditherMode = "grain")
  if (u_dither > 0.001) {
    float noiseVal = (hash12(gl_FragCoord.xy + fract(u_time * 1.7) * 100.0) - 0.5) * u_dither;
    col += vec3(noiseVal);
  }
  
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

export const LiquidGradientCanvas = forwardRef<
  LiquidGradientHandle,
  LiquidGradientProps
>(function LiquidGradientCanvas(props, ref) {
  const {
    colors = LIQUID_GRADIENT_DEFAULTS.colors,
    speed = LIQUID_GRADIENT_DEFAULTS.speed,
    scale = LIQUID_GRADIENT_DEFAULTS.scale,
    seed = LIQUID_GRADIENT_DEFAULTS.seed,
    turbAmp = LIQUID_GRADIENT_DEFAULTS.turbAmp,
    turbFreq = LIQUID_GRADIENT_DEFAULTS.turbFreq,
    turbIter = LIQUID_GRADIENT_DEFAULTS.turbIter,
    waveFreq = LIQUID_GRADIENT_DEFAULTS.waveFreq,
    distBias = LIQUID_GRADIENT_DEFAULTS.distBias,
    jellify = LIQUID_GRADIENT_DEFAULTS.jellify,
    ditherMode = LIQUID_GRADIENT_DEFAULTS.ditherMode,
    dither = LIQUID_GRADIENT_DEFAULTS.dither,
    exposure = LIQUID_GRADIENT_DEFAULTS.exposure,
    contrast = LIQUID_GRADIENT_DEFAULTS.contrast,
    saturation = LIQUID_GRADIENT_DEFAULTS.saturation,
    className = "",
    style = {},
    interactive = true,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; tx: number; ty: number }>({
    x: 0.5,
    y: 0.5,
    tx: 0.5,
    ty: 0.5,
  });

  useImperativeHandle(ref, () => ({
    canvas: canvasRef.current,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: false,
      powerPreference: "high-performance",
      antialias: false,
    });
    if (!gl) return;

    function compileShader(type: number, src: string): WebGLShader | null {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
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

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, "a_position");
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform Locations
    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uResLoc = gl.getUniformLocation(program, "u_resolution");
    const uMouseLoc = gl.getUniformLocation(program, "u_mouse");
    const uScaleLoc = gl.getUniformLocation(program, "u_scale");
    const uSeedLoc = gl.getUniformLocation(program, "u_seed");
    const uTurbAmpLoc = gl.getUniformLocation(program, "u_turbAmp");
    const uTurbFreqLoc = gl.getUniformLocation(program, "u_turbFreq");
    const uTurbIterLoc = gl.getUniformLocation(program, "u_turbIter");
    const uWaveFreqLoc = gl.getUniformLocation(program, "u_waveFreq");
    const uDistBiasLoc = gl.getUniformLocation(program, "u_distBias");
    const uJellifyLoc = gl.getUniformLocation(program, "u_jellify");
    const uDitherLoc = gl.getUniformLocation(program, "u_dither");
    const uExposureLoc = gl.getUniformLocation(program, "u_exposure");
    const uContrastLoc = gl.getUniformLocation(program, "u_contrast");
    const uSatLoc = gl.getUniformLocation(program, "u_saturation");

    const uColorsLoc = gl.getUniformLocation(program, "u_colors");
    const uColorCountLoc = gl.getUniformLocation(program, "u_colorCount");

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(rect.width * dpr) || 300;
      const height = Math.floor(rect.height * dpr) || 150;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas || !interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.tx = (e.clientX - rect.left) / rect.width;
      mouseRef.current.ty = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!canvas || !interactive || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.tx = (touch.clientX - rect.left) / rect.width;
      mouseRef.current.ty = 1.0 - (touch.clientY - rect.top) / rect.height;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    // Prepare color array uniforms (up to 5 colors)
    const colorArray = new Float32Array(15);
    const count = Math.min(colors.length, 5);
    for (let i = 0; i < count; i++) {
      const [r, g, b] = hexToRgb(colors[i]);
      colorArray[i * 3 + 0] = r;
      colorArray[i * 3 + 1] = g;
      colorArray[i * 3 + 2] = b;
    }

    let animationId: number;
    let startTime = performance.now();

    const render = (now: number) => {
      animationId = requestAnimationFrame(render);
      const elapsed = (now - startTime) * 0.001 * speed;

      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.04;

      gl.useProgram(program);
      gl.bindVertexArray(vao);

      gl.uniform1f(uTimeLoc, elapsed);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform2f(uMouseLoc, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(uScaleLoc, scale);
      gl.uniform1f(uSeedLoc, seed);
      gl.uniform1f(uTurbAmpLoc, turbAmp);
      gl.uniform1f(uTurbFreqLoc, turbFreq);
      gl.uniform1i(uTurbIterLoc, Math.floor(turbIter));
      gl.uniform1f(uWaveFreqLoc, waveFreq);
      gl.uniform1f(uDistBiasLoc, distBias);
      gl.uniform1f(uJellifyLoc, jellify);
      gl.uniform1f(uDitherLoc, ditherMode === "none" ? 0.0 : dither);
      gl.uniform1f(uExposureLoc, exposure);
      gl.uniform1f(uContrastLoc, contrast);
      gl.uniform1f(uSatLoc, saturation);

      gl.uniform3fv(uColorsLoc, colorArray);
      gl.uniform1i(uColorCountLoc, count);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
      gl.deleteVertexArray(vao);
    };
  }, [
    colors,
    speed,
    scale,
    seed,
    turbAmp,
    turbFreq,
    turbIter,
    waveFreq,
    distBias,
    jellify,
    ditherMode,
    dither,
    exposure,
    contrast,
    saturation,
    interactive,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      style={style}
    />
  );
});

export default LiquidGradientCanvas;
