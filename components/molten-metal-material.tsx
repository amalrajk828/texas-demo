"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 4; i++) {
      v += amp * noise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv * 1.4;
    float t = uTime * 0.03;

    // Large, slow, soft blobs — no sharp cracks, just broad smooth noise
    float n = fbm(uv + vec2(t, t * 0.5));
    n = fbm(uv + n * 0.6 + vec2(-t * 0.4, t * 0.2));

    // Very soft, wide smoothstep so nothing has a hard edge
    float glow = smoothstep(0.35, 0.85, n);
    glow = pow(glow, 1.8);

    // Push most of the glow toward the right side, like the reference
    float sideBias = smoothstep(0.0, 1.0, vUv.x);
    glow *= mix(0.4, 1.2, sideBias);

    vec3 black = vec3(0.01, 0.005, 0.005);
    vec3 emberRed = vec3(0.55, 0.1, 0.05);
    vec3 emberOrange = vec3(0.9, 0.35, 0.1);

    vec3 col = black;
    col = mix(col, emberRed, glow * 0.8);
    col = mix(col, emberOrange, pow(glow, 2.5) * 0.5);

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function MoltenMetalPlane({
  position = [0, 0, 0] as [number, number, number],
}: {
  position?: [number, number, number];
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh position={position} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}
