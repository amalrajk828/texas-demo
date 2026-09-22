"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export interface InteractiveNebulaShaderProps {
  hasActiveReminders?: boolean;
  hasUpcomingReminders?: boolean;
  disableCenterDimming?: boolean;
  className?: string;
  speed?: number;
  intensity?: number;
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_active_reminders;
  uniform float u_upcoming_reminders;
  uniform float u_disable_center_dimming;
  varying vec2 vUv;

  // Hash & Noise Functions
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Fractional Brownian Motion for Organic Nebula Clouds
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 6; i++) {
      v += a * noise(p);
      p = rot * p * 2.0 + vec2(0.12, 0.34);
      a *= 0.5;
    }
    return v;
  }

  // Star field generation
  float stars(vec2 uv, float t) {
    vec2 p = uv * 35.0;
    vec2 id = floor(p);
    vec2 gv = fract(p) - 0.5;
    float n = hash(id);
    float star = smoothstep(0.12, 0.0, length(gv - (vec2(n, fract(n * 34.2)) - 0.5) * 0.7));
    float twinkle = sin(t * 2.5 + n * 6.2831) * 0.5 + 0.5;
    return star * (0.3 + 0.7 * twinkle) * step(0.72, n);
  }

  void main() {
    vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 mouse = (u_mouse * 2.0 - 1.0) * vec2(u_resolution.x / min(u_resolution.x, u_resolution.y), u_resolution.y / min(u_resolution.x, u_resolution.y));
    
    float t = u_time * 0.18;
    
    // Mouse interactive distortion field
    float mouseDist = length(st - mouse);
    vec2 mouseForce = (st - mouse) / (mouseDist * mouseDist + 0.35) * 0.22;
    vec2 p = st + mouseForce * exp(-mouseDist * 1.8);
    
    // Multi-layered cosmic swirls
    vec2 q = vec2(
      fbm(p + vec2(0.0, 0.0) + t * 0.3),
      fbm(p + vec2(5.2, 1.3) - t * 0.2)
    );
    
    vec2 r = vec2(
      fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 0.45),
      fbm(p + 4.0 * q + vec2(8.3, 2.8) - t * 0.35)
    );
    
    float f = fbm(p + 4.0 * r + t * 0.2);
    
    // Dynamic Nebula Color Palette
    // Deep cosmic background
    vec3 colDeepSpace = vec3(0.035, 0.04, 0.065);
    // Crimson / Ruby Texas Brand energy
    vec3 colCrimson = vec3(0.92, 0.15, 0.18);
    // Amber / Molten cosmic core
    vec3 colAmber = vec3(1.0, 0.55, 0.18);
    // Ethereal Violet / Indigo dust
    vec3 colViolet = vec3(0.35, 0.08, 0.55);
    // Cyan electric filament highlights
    vec3 colCyan = vec3(0.12, 0.75, 0.95);

    // Active/Upcoming reminder tone modulation
    if (u_active_reminders > 0.5) {
      colCrimson = vec3(1.0, 0.2, 0.1);
      colAmber = vec3(1.0, 0.8, 0.2);
    } else if (u_upcoming_reminders > 0.5) {
      colViolet = vec3(0.15, 0.45, 0.95);
      colCyan = vec3(0.2, 0.9, 0.8);
    }
    
    // Blend layers based on turbulence
    vec3 color = mix(colDeepSpace, colViolet, clamp(f * f * 3.5, 0.0, 1.0));
    color = mix(color, colCrimson, clamp(length(q) * 1.1, 0.0, 1.0));
    color = mix(color, colAmber, clamp(r.x * r.x * 2.2, 0.0, 1.0));
    color += colCyan * pow(f * r.y, 3.2) * 2.2;
    
    // Core glow & highlight rim
    float coreGlow = smoothstep(1.8, 0.0, length(st));
    color += colCrimson * coreGlow * 0.25;
    
    // Add starfield
    float stardust = stars(st + q * 0.1, u_time);
    color += vec3(0.95, 0.96, 1.0) * stardust * 1.4;
    
    // Vignette / Center Dimming
    if (u_disable_center_dimming < 0.5) {
      float centerDim = smoothstep(0.0, 0.85, length(st));
      color *= mix(0.45, 1.0, centerDim);
    }
    
    // Subtle film grain
    float grain = (hash(gl_FragCoord.xy + fract(u_time)) - 0.5) * 0.035;
    color += grain;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function InteractiveNebulaShader({
  hasActiveReminders = false,
  hasUpcomingReminders = false,
  disableCenterDimming = true,
  className = "",
  speed = 1.0,
  intensity = 1.0,
}: InteractiveNebulaShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance",
      antialias: false,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Uniforms & Shader Material
    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_active_reminders: { value: hasActiveReminders ? 1.0 : 0.0 },
      u_upcoming_reminders: { value: hasUpcomingReminders ? 1.0 : 0.0 },
      u_disable_center_dimming: { value: disableCenterDimming ? 1.0 : 0.0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 3. Event Listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mouseRef.current.targetX = Math.max(0, Math.min(1, x));
      mouseRef.current.targetY = Math.max(0, Math.min(1, y));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = 1.0 - (touch.clientY - rect.top) / rect.height;
        mouseRef.current.targetX = Math.max(0, Math.min(1, x));
        mouseRef.current.targetY = Math.max(0, Math.min(1, y));
      }
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w, h);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // 4. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
      uniforms.u_mouse.value.set(mouseRef.current.x, mouseRef.current.y);

      uniforms.u_time.value = clock.getElapsedTime() * speed;
      uniforms.u_active_reminders.value = hasActiveReminders ? 1.0 : 0.0;
      uniforms.u_upcoming_reminders.value = hasUpcomingReminders ? 1.0 : 0.0;
      uniforms.u_disable_center_dimming.value = disableCenterDimming ? 1.0 : 0.0;

      renderer.render(scene, camera);
    };

    animate();

    // 5. Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);

      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [hasActiveReminders, hasUpcomingReminders, disableCenterDimming, speed, intensity]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
