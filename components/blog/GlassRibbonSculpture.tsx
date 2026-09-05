"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

// ── Custom Glass Ribbon Vertex Shader ───────────────────────────────────────
const VERTEX_SHADER = /* glsl */ `
varying vec3 vNormal;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;
varying vec2 vUv;

uniform float uTime;

void main() {
  vUv = uv;
  vec3 pos = position;

  // Gentle zero-gravity flexing & rippling along the ribbon
  float wave1 = sin(uv.x * 12.0 + uTime * 0.9) * 0.06;
  float wave2 = cos(uv.y * 16.0 - uTime * 0.7) * 0.04;
  float wave3 = sin((pos.x + pos.y + pos.z) * 1.8 + uTime * 0.5) * 0.05;

  pos += normal * (wave1 + wave2 + wave3);

  vec4 worldPos = modelMatrix * vec4(pos, 1.0);
  vWorldPosition = worldPos.xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  
  vec4 mvPosition = viewMatrix * worldPos;
  vViewPosition = -mvPosition.xyz;
  
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mvPosition;
}
`;

// ── Custom Glass Ribbon Fragment Shader ─────────────────────────────────────
const FRAGMENT_SHADER = /* glsl */ `
varying vec3 vNormal;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;
varying vec2 vUv;

uniform float uTime;

// Studio Environment Reflection in Soft Blue-to-Purple Palette
vec3 sampleStudioEnv(vec3 r) {
  vec3 deepNavy   = vec3(0.04, 0.06, 0.18);
  vec3 royalBlue  = vec3(0.18, 0.38, 0.88);
  vec3 softPurple = vec3(0.55, 0.22, 0.85);
  vec3 violetGlow = vec3(0.78, 0.45, 0.96);
  vec3 brightCyan = vec3(0.40, 0.85, 0.98);
  vec3 whiteHot   = vec3(0.96, 0.98, 1.00);

  float up = r.y * 0.5 + 0.5;
  float side = r.x * 0.5 + 0.5;
  float front = r.z * 0.5 + 0.5;

  vec3 col = mix(deepNavy, royalBlue, smoothstep(0.0, 0.45, up));
  col = mix(col, softPurple, smoothstep(0.35, 0.8, up));
  col = mix(col, violetGlow, smoothstep(0.65, 0.95, up * side));
  col = mix(col, brightCyan, smoothstep(0.7, 1.0, side * (1.0 - up)));
  col += whiteHot * pow(max(front, 0.0), 16.0) * 0.45;

  return col;
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vViewPosition);

  // 1. Fresnel term for translucent glass rim & depth
  float NdotV = max(dot(N, V), 0.0);
  float fresnel = pow(1.0 - NdotV, 3.2);

  // 2. Refraction & Reflection vectors
  vec3 worldN = normalize(vWorldNormal);
  vec3 worldV = normalize(vWorldPosition - cameraPosition);
  
  vec3 reflDir = reflect(worldV, worldN);
  vec3 refrDir = refract(worldV, worldN, 1.0 / 1.45); // Glass IOR

  // 3. Environment Sampling
  vec3 reflCol = sampleStudioEnv(reflDir);
  vec3 refrCol = sampleStudioEnv(refrDir);

  // 4. Soft Blue-to-Purple Translucent Body Color
  vec3 glassBlue   = vec3(0.22, 0.42, 0.92);
  vec3 glassPurple = vec3(0.68, 0.28, 0.88);
  vec3 glassCyan   = vec3(0.35, 0.82, 0.95);

  float colorShift = sin(vUv.x * 6.28 + uTime * 0.4) * 0.5 + 0.5;
  vec3 baseGlass = mix(glassBlue, glassPurple, colorShift);
  baseGlass = mix(baseGlass, glassCyan, pow(fresnel, 2.0) * 0.5);

  // 5. Internal Light Transmission & Caustics
  vec3 internalLight = refrCol * baseGlass * 1.4;
  vec3 surfaceReflection = reflCol * (0.3 + fresnel * 0.7);

  // 6. Sliding Studio Specular Glare (Primary + Secondary Key Lights)
  vec3 light1 = normalize(vec3(1.2, 1.8, 2.2));
  vec3 light2 = normalize(vec3(-1.8, -0.9, 1.5));
  vec3 H1 = normalize(light1 + V);
  vec3 H2 = normalize(light2 + V);

  float spec1 = pow(max(dot(N, H1), 0.0), 96.0);
  float spec2 = pow(max(dot(N, H2), 0.0), 48.0);

  vec3 specular = vec3(1.0, 0.98, 1.0) * spec1 * 1.6 + vec3(0.6, 0.8, 1.0) * spec2 * 0.8;

  // 7. Composite Color & Alpha
  vec3 finalColor = internalLight * 0.65 + surfaceReflection * 0.75 + specular;

  // Glass transparency: denser at grazing angles (Fresnel) and core
  float alpha = clamp(0.45 + fresnel * 0.5 + spec1 * 0.4, 0.0, 0.95);

  gl_FragColor = vec4(finalColor, alpha);
}
`;

export default function GlassRibbonSculpture() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── 1. Renderer ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setClearColor(0x000000, 0); // Preserves transparent hero backdrop

    container.appendChild(renderer.domElement);

    // ── 2. Scene & Camera ───────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 4.4);

    // ── 3. Geometry: Dense Multi-loop Torus Knot Ribbon ─────────────────────
    const geometry = new THREE.TorusKnotGeometry(1.22, 0.36, 320, 48, 3, 5);

    // ── 4. Material ────────────────────────────────────────────────────────
    const uniforms = {
      uTime: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: uniforms,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const ribbonMesh = new THREE.Mesh(geometry, material);
    scene.add(ribbonMesh);

    // ── 5. Resize Handling ─────────────────────────────────────────────────
    const syncSize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    syncSize();

    const ro = new ResizeObserver(syncSize);
    ro.observe(container);

    // ── 6. Mouse Parallax Tracking ─────────────────────────────────────────
    const heroEl = container.closest("section") || container.parentElement;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!heroEl) return;
      const rect = heroEl.getBoundingClientRect();
      const nx = ((clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotY = nx * 0.45;
      targetRotX = ny * 0.35;
    };

    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    if (heroEl) {
      heroEl.addEventListener("mousemove", handleMouseMove as EventListener);
      heroEl.addEventListener("mouseleave", handleMouseLeave as EventListener);
      heroEl.addEventListener("touchmove", handleTouchMove as EventListener, { passive: true });
      heroEl.addEventListener("touchend", handleMouseLeave as EventListener);
    }

    // ── 7. Render Loop ──────────────────────────────────────────────────────
    let rafId = 0;
    const startTime = performance.now();

    const animate = (time: number) => {
      rafId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        const elapsed = (time - startTime) * 0.001;
        uniforms.uTime.value = elapsed;

        // Smooth zero-gravity rotation
        ribbonMesh.rotation.y = elapsed * 0.18 + currentRotY;
        ribbonMesh.rotation.x = Math.sin(elapsed * 0.12) * 0.22 + currentRotX;
        ribbonMesh.rotation.z = Math.cos(elapsed * 0.09) * 0.15;

        // Subtle breathing pulsation in scale
        const pulse = 1.0 + Math.sin(elapsed * 0.4) * 0.035;
        ribbonMesh.scale.set(pulse, pulse, pulse);

        // Smooth mouse lerp
        currentRotX += (targetRotX - currentRotX) * 0.06;
        currentRotY += (targetRotY - currentRotY) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate(performance.now());

    // ── 8. Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      if (heroEl) {
        heroEl.removeEventListener("mousemove", handleMouseMove as EventListener);
        heroEl.removeEventListener("mouseleave", handleMouseLeave as EventListener);
        heroEl.removeEventListener("touchmove", handleTouchMove as EventListener);
        heroEl.removeEventListener("touchend", handleMouseLeave as EventListener);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[560px] lg:h-[560px] flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    />
  );
}
