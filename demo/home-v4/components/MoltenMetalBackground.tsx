"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { MoltenMetalPlane } from "@/components/molten-metal-material";

export default function MoltenMetalBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas
        orthographic
        camera={{ zoom: 1, position: [0, 0, 5] }}
        gl={{ antialias: true, alpha: false }}
        className="w-full h-full"
      >
        <MoltenMetalPlane position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
