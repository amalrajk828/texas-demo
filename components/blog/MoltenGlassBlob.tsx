"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

// ── Noise helpers (simplex-style via sin/cos) ──────────────────────────────
function hash(n: number): number {
  return Math.sin(n) * 43758.5453123 % 1;
}

function noise3(x: number, y: number, z: number): number {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const uz = fz * fz * (3 - 2 * fz);
  const n000 = hash(ix + hash(iy + hash(iz)));
  const n100 = hash(ix + 1 + hash(iy + hash(iz)));
  const n010 = hash(ix + hash(iy + 1 + hash(iz)));
  const n110 = hash(ix + 1 + hash(iy + 1 + hash(iz)));
  const n001 = hash(ix + hash(iy + hash(iz + 1)));
  const n101 = hash(ix + 1 + hash(iy + hash(iz + 1)));
  const n011 = hash(ix + hash(iy + 1 + hash(iz + 1)));
  const n111 = hash(ix + 1 + hash(iy + 1 + hash(iz + 1)));
  return (
    n000 * (1 - ux) * (1 - uy) * (1 - uz) +
    n100 * ux * (1 - uy) * (1 - uz) +
    n010 * (1 - ux) * uy * (1 - uz) +
    n110 * ux * uy * (1 - uz) +
    n001 * (1 - ux) * (1 - uy) * uz +
    n101 * ux * (1 - uy) * uz +
    n011 * (1 - ux) * uy * uz +
    n111 * ux * uy * uz
  );
}

function fbm(x: number, y: number, z: number): number {
  let v = 0, amp = 0.5, freq = 1;
  for (let i = 0; i < 5; i++) {
    v += noise3(x * freq, y * freq, z * freq) * amp;
    amp *= 0.5;
    freq *= 2.0;
  }
  return v;
}

// ── Gradient environment map (ember/dark-red palette) ─────────────────────
function buildEnvMap(renderer: THREE.WebGLRenderer): THREE.WebGLCubeRenderTarget {
  const size = 256;
  const cubeRT = new THREE.WebGLCubeRenderTarget(size, {
    type: THREE.HalfFloatType,
    colorSpace: THREE.SRGBColorSpace,
  });

  const emberDeep = new THREE.Color("#1a0505");
  const emberRed = new THREE.Color("#8a1f16");
  const emberBright = new THREE.Color("#e6432f");
  const emberHighlight = new THREE.Color("#ffd9a0");

  const faces = cubeRT.texture.image as ImageData[];
  // Build each cube face into a DataTexture
  const faceData: Uint8Array[] = [];
  for (let face = 0; face < 6; face++) {
    const data = new Uint8Array(size * size * 4);
    for (let py = 0; py < size; py++) {
      for (let px = 0; px < size; px++) {
        const u = px / (size - 1);
        const v = py / (size - 1);
        // Map face to direction
        let dx = 0, dy = 0, dz = 0;
        if (face === 0) { dx = 1; dy = (v * 2 - 1); dz = -(u * 2 - 1); }
        else if (face === 1) { dx = -1; dy = (v * 2 - 1); dz = (u * 2 - 1); }
        else if (face === 2) { dx = (u * 2 - 1); dy = 1; dz = -(v * 2 - 1); }
        else if (face === 3) { dx = (u * 2 - 1); dy = -1; dz = (v * 2 - 1); }
        else if (face === 4) { dx = (u * 2 - 1); dy = (v * 2 - 1); dz = 1; }
        else { dx = -(u * 2 - 1); dy = (v * 2 - 1); dz = -1; }

        // Normalize direction
        const len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
        dx /= len; dy /= len; dz /= len;

        // t = elevation
        const t = dy * 0.5 + 0.5;
        // x = lateral position
        const x = dx * 0.5 + 0.5;

        const col = new THREE.Color();
        if (t > 0.7) {
          col.copy(emberHighlight).lerp(emberBright, (1 - (t - 0.7) / 0.3) * 0.5);
        } else if (t > 0.4) {
          col.copy(emberBright).lerp(emberRed, 1 - (t - 0.4) / 0.3);
        } else {
          col.copy(emberRed).lerp(emberDeep, 1 - t / 0.4);
        }
        if (x > 0.3) col.lerp(emberHighlight, 0.15);

        const idx = (py * size + px) * 4;
        data[idx + 0] = Math.round(col.r * 255);
        data[idx + 1] = Math.round(col.g * 255);
        data[idx + 2] = Math.round(col.b * 255);
        data[idx + 3] = 255;
      }
    }
    faceData.push(data);
  }

  // Write the env-map via a pmrem generator approach — build a sphere scene
  // Use equirectangular canvas as a simpler approach
  const canvas = document.createElement("canvas");
  canvas.width = size * 4;
  canvas.height = size * 2;
  const ctx = canvas.getContext("2d")!;

  for (let py = 0; py < canvas.height; py++) {
    for (let px = 0; px < canvas.width; px++) {
      const theta = (px / canvas.width) * Math.PI * 2 - Math.PI; // -π to π
      const phi = (py / canvas.height) * Math.PI; // 0 to π
      const dy = Math.cos(phi);
      const dx = Math.sin(phi) * Math.cos(theta);
      const t = dy * 0.5 + 0.5;
      const x = dx * 0.5 + 0.5;

      const col = new THREE.Color();
      if (t > 0.7) {
        col.copy(emberHighlight).lerp(emberBright, (1 - (t - 0.7) / 0.3) * 0.5);
      } else if (t > 0.4) {
        col.copy(emberBright).lerp(emberRed, 1 - (t - 0.4) / 0.3);
      } else {
        col.copy(emberRed).lerp(emberDeep, 1 - t / 0.4);
      }
      if (x > 0.3) col.lerp(emberHighlight, 0.15);

      ctx.fillStyle = `rgb(${Math.round(col.r * 255)},${Math.round(col.g * 255)},${Math.round(col.b * 255)})`;
      ctx.fillRect(px, py, 1, 1);
    }
  }

  const equiTexture = new THREE.CanvasTexture(canvas);
  equiTexture.colorSpace = THREE.SRGBColorSpace;
  equiTexture.mapping = THREE.EquirectangularReflectionMapping;

  const pmremGen = new THREE.PMREMGenerator(renderer);
  pmremGen.compileEquirectangularShader();
  const envRT = pmremGen.fromEquirectangular(equiTexture);
  equiTexture.dispose();
  pmremGen.dispose();

  return envRT as unknown as THREE.WebGLCubeRenderTarget;
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function MoltenGlassBlob() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ── Renderer ─────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setClearColor(0x000000, 0); // transparent background
    container.appendChild(renderer.domElement);

    // ── Scene / Camera ────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    // ── Environment map ────────────────────────────────────────────────────
    const envRT = buildEnvMap(renderer);
    scene.environment = envRT.texture;

    // ── Lights ────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x331111, 0.35));
    const keyLight = new THREE.PointLight(0xffffff, 3, 20);
    keyLight.position.set(1.8, 2.4, 3);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0xe6432f, 2, 20);
    rimLight.position.set(-2.6, -1.2, 1.6);
    scene.add(rimLight);

    // ── Geometry: Icosahedron with noise displacement ─────────────────────
    const geo = new THREE.IcosahedronGeometry(1.5, 64);
    const basePositions = new Float32Array(geo.attributes.position.array);

    // ── Material: Physical glass ──────────────────────────────────────────
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x8a1f16,
      metalness: 0,
      roughness: 0.04,
      transmission: 0.5,
      thickness: 1.4,
      ior: 1.4,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
      envMapIntensity: 1.6,
    });

    const mesh = new THREE.Mesh(geo, material);
    scene.add(mesh);

    // ── Resize handling ───────────────────────────────────────────────────
    function syncSize() {
      const w = container!.clientWidth;
      const h = container!.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    syncSize();

    const ro = new ResizeObserver(syncSize);
    ro.observe(container);

    // ── Animation loop ────────────────────────────────────────────────────
    let rafId = 0;
    let t = 0;
    const pos = geo.attributes.position;
    const v3 = new THREE.Vector3();

    function tick() {
      rafId = requestAnimationFrame(tick);
      if (!prefersReducedMotion) {
        t += 0.004;
        // Noise-displace each vertex
        for (let i = 0; i < pos.count; i++) {
          v3.set(
            basePositions[i * 3],
            basePositions[i * 3 + 1],
            basePositions[i * 3 + 2]
          );
          const n = fbm(v3.x * 0.8 + t, v3.y * 0.8 + t * 0.7, v3.z * 0.8);
          const disp = 1 + n * 0.38;
          (pos.array as Float32Array)[i * 3] = v3.x * disp;
          (pos.array as Float32Array)[i * 3 + 1] = v3.y * disp;
          (pos.array as Float32Array)[i * 3 + 2] = v3.z * disp;
        }
        pos.needsUpdate = true;
        geo.computeVertexNormals();

        mesh.rotation.y += 0.003;
        mesh.rotation.x += 0.001;
      }
      renderer.render(scene, camera);
    }
    tick();

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      geo.dispose();
      material.dispose();
      envRT.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
