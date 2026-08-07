"use client";

import { useRef, useEffect, useState } from "react";

interface VantaTopologyProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

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

export default function VantaTopology({ targetRef }: VantaTopologyProps) {
  const vantaEffectRef = useRef<any>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    Promise.all([
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"),
      loadScript("/vendor/vanta.topology.min.js"),
    ]).then(() => setScriptsLoaded(true));
  }, []);

  useEffect(() => {
    if (!scriptsLoaded) return;

    let lastWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    const initVanta = () => {
      if (
        (window as any).p5 &&
        (window as any).VANTA &&
        (window as any).VANTA.TOPOLOGY &&
        targetRef.current &&
        !vantaEffectRef.current
      ) {
        try {
          const vantaInstance = (window as any).VANTA.TOPOLOGY({
            el: targetRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x000000,
            color: 0x7a0f0a,
          });

          // Prevent mobile address bar height toggles from clearing p5 canvas
          if (vantaInstance && typeof vantaInstance.resize === "function") {
            const origResize = vantaInstance.resize.bind(vantaInstance);
            vantaInstance.resize = function () {
              if (typeof window !== "undefined" && window.innerWidth === lastWidth) {
                // Ignore height-only resize (address bar show/hide) to preserve p5 drawing buffer
                return;
              }
              if (typeof window !== "undefined") {
                lastWidth = window.innerWidth;
              }
              origResize();
            };
          }

          vantaEffectRef.current = vantaInstance;
        } catch (err) {
          console.error("Vanta Topology init error:", err);
        }
      } else if (!vantaEffectRef.current) {
        setTimeout(initVanta, 100);
      }
    };

    initVanta();

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, [scriptsLoaded]);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }}
    />
  );
}
