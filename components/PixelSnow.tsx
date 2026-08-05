"use client";

import React, { useEffect, useRef } from "react";
import "./PixelSnow.css";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });
}

const THREE_CDN = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";

interface PixelSnowProps {
  color?: string;
  flakeSize?: number;
  minFlakeSize?: number;
  pixelResolution?: number;
  speed?: number;
  density?: number;
  direction?: number;
  brightness?: number;
  variant?: "square" | "round" | "snowflake";
}

const PixelSnow: React.FC<PixelSnowProps> = ({
  color = "#ffffff",
  flakeSize = 0.01,
  minFlakeSize = 1.25,
  pixelResolution = 150,
  speed = 0.8,
  density = 0.25,
  direction = 125,
  brightness = 0.8,
  variant = "square"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isIntersectingRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) return;

    let animationFrameId: number;
    let renderer: any = null;
    let geometry: any = null;
    let material: any = null;
    let canvas: HTMLCanvasElement | null = null;

    loadScript(THREE_CDN).then(() => {
      const THREE = (window as any).THREE;
      if (!THREE) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          isIntersectingRef.current = entry.isIntersecting;
        },
        { threshold: 0.05 }
      );
      observer.observe(container);

      const width = container.clientWidth || 300;
      const height = container.clientHeight || 300;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
      camera.position.z = 10;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
      renderer.setPixelRatio(1);
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);

      canvas = renderer.domElement as HTMLCanvasElement;
      canvas.style.position = "absolute";
      canvas.style.inset = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none";
      container.appendChild(canvas);

      const count = Math.floor(density * 1500);
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      }

      geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uColor: { value: new THREE.Color(color) },
          uFlakeSize: { value: flakeSize },
          uMinFlakeSize: { value: minFlakeSize },
          uPixelResolution: { value: pixelResolution },
          uSpeed: { value: speed },
          uDirection: { value: (direction * Math.PI) / 180 },
          uBrightness: { value: brightness },
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(width, height) }
        },
        vertexShader: `
          uniform float uTime;
          uniform float uSpeed;
          uniform float uDirection;
          uniform float uFlakeSize;
          uniform float uMinFlakeSize;
          uniform float uPixelResolution;
          uniform vec2 uResolution;

          void main() {
            vec3 pos = position;

            float t = uTime * uSpeed * 0.5;

            pos.y = mod(pos.y - t + 10.0, 20.0) - 10.0;
            pos.x = mod(pos.x + cos(uDirection) * t + 10.0, 20.0) - 10.0;
            pos.z = mod(pos.z + sin(uDirection) * t + 10.0, 20.0) - 10.0;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            vec4 projected = projectionMatrix * mvPosition;

            vec2 grid = projected.xy / projected.w;
            grid = floor(grid * uPixelResolution) / uPixelResolution;
            gl_Position = vec4(grid * projected.w, projected.z, projected.w);

            gl_PointSize = max(uMinFlakeSize, uFlakeSize * (800.0 / -mvPosition.z));
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uBrightness;

          void main() {
            #if defined(VARIANT_ROUND)
              float dist = distance(gl_PointCoord, vec2(0.5));
              if (dist > 0.5) discard;
            #elif defined(VARIANT_SNOWFLAKE)
              vec2 p = floor(gl_PointCoord * 5.0);
              bool draw = (p.x == 2.0 || p.y == 2.0) ||
                          (p.x == 0.0 && p.y == 0.0) ||
                          (p.x == 4.0 && p.y == 0.0) ||
                          (p.x == 0.0 && p.y == 4.0) ||
                          (p.x == 4.0 && p.y == 4.0);
              if (!draw) discard;
            #endif

            gl_FragColor = vec4(uColor, uBrightness);
          }
        `
      });

      if (variant === "round") {
        material.defines = { VARIANT_ROUND: 1 };
      } else if (variant === "snowflake") {
        material.defines = { VARIANT_SNOWFLAKE: 1 };
      }

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const handleResize = () => {
        const w = container.clientWidth || 300;
        const h = container.clientHeight || 300;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        material.uniforms.uResolution.value.set(w, h);
      };

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);

      const startTime = performance.now();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if (!isIntersectingRef.current) return;
        const elapsed = (performance.now() - startTime) / 1000;
        material.uniforms.uTime.value = elapsed;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        observer.disconnect();
        resizeObserver.disconnect();
        if (canvas && canvas.parentElement === container) {
          container.removeChild(canvas);
        }
        if (geometry) geometry.dispose();
        if (material) material.dispose();
        if (renderer) renderer.dispose();
      };
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (canvas && canvas.parentElement === container) {
        container.removeChild(canvas);
      }
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (renderer) renderer.dispose();
    };
  }, [color, flakeSize, minFlakeSize, pixelResolution, speed, density, direction, brightness, variant]);

  return <div ref={containerRef} className="pixel-snow-container" />;
};

export default PixelSnow;
