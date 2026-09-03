"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";

function IridescentGlassLoop() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = 0.55 + Math.sin(t * 0.25) * 0.15;
      meshRef.current.rotation.y = t * 0.28;
      meshRef.current.rotation.z = Math.cos(t * 0.2) * 0.12;
    }
  });

  return (
    <Float speed={2.0} rotationIntensity={0.35} floatIntensity={0.5}>
      <group scale={[0.42, 0.42, 0.42]}>
        {/* The Translucent Iridescent Glass Torus Loop */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <torusGeometry args={[2.2, 0.65, 48, 128]} />
          <MeshTransmissionMaterial
            samples={6}
            resolution={512}
            thickness={0.45}
            roughness={0.03}
            anisotropy={0.35}
            chromaticAberration={0.45}
            distortion={0.12}
            distortionScale={0.25}
            temporalDistortion={0.1}
            ior={1.42}
            transmission={1}
            color="#e8f4ff"
            attenuationColor="#ffffff"
            attenuationDistance={3.0}
            iridescence={0.75}
            iridescenceIOR={1.4}
            iridescenceThicknessRange={[100, 400]}
            clearcoat={0.5}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function GlassScene() {
  return (
    <div className="w-full h-full min-h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.75} />

        {/* Environment with Studio Lightformers */}
        <Environment preset="city" background={false}>
          <Lightformer
            form="rect"
            intensity={4.5}
            position={[-4, 3, 2]}
            scale={[5, 2, 1]}
            color="#00d4ff"
          />
          <Lightformer
            form="rect"
            intensity={5.0}
            position={[4, -2, 2]}
            scale={[5, 2, 1]}
            color="#ff6a2a"
          />
          <Lightformer
            form="ring"
            intensity={2}
            position={[0, 4, -3]}
            scale={4}
            color="#ffffff"
          />
        </Environment>

        {/* Electric Blue / Cyan Point Light */}
        <pointLight
          position={[-4.0, 2.5, 3.5]}
          color="#00d4ff"
          intensity={5.5}
          distance={14}
        />

        {/* Warm Vivid Orange Point Light */}
        <pointLight
          position={[4.0, -2.5, 3.0]}
          color="#ff6a2a"
          intensity={6.0}
          distance={14}
        />

        {/* Top white highlight */}
        <directionalLight position={[0, 5, 2]} color="#ffffff" intensity={1.5} />

        <IridescentGlassLoop />
      </Canvas>
    </div>
  );
}
