"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function V1InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Wait for the DOM and critical hero assets to settle
    const settle = () => {
      // Small buffer to guarantee first paint of styled hero is complete
      const timer = setTimeout(() => {
        setFading(true);
      }, 160);
      return timer;
    };

    let timer: NodeJS.Timeout;
    if (document.readyState === "complete") {
      timer = settle();
    } else {
      const handleLoad = () => {
        timer = settle();
      };
      window.addEventListener("load", handleLoad, { once: true });
      // Fallback timeout in case window.load takes unusually long
      const fallback = setTimeout(() => {
        setFading(true);
      }, 700);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
        if (timer) clearTimeout(timer);
      };
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Remove completely from DOM after fade-out transition completes (350ms)
  useEffect(() => {
    if (fading) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 380);
      return () => clearTimeout(timer);
    }
  }, [fading]);

  if (!visible) return null;

  return (
    <div
      id="v1-initial-curtain"
      aria-hidden="true"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none select-none transition-opacity duration-[360ms] ease-out"
      style={{
        backgroundColor: "#faf9f8",
        opacity: fading ? 0 : 1,
        transition: "opacity 360ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Brand mark & subtle loader */}
      <div className="flex flex-col items-center gap-4">
        {/* Animated Brand Logo Icon */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Texas Technical Services"
            width={48}
            height={48}
            priority
            className="animate-pulse"
            style={{ animationDuration: "1.4s" }}
          />
        </div>

        {/* Brand Text */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[#16181c] font-black tracking-[4px] text-[13px] leading-none uppercase">
            TEXAS
          </span>
          <span className="text-[#737373] text-[9px] tracking-[2.5px] uppercase font-mono mt-1">
            TECHNICAL SERVICES
          </span>
        </div>

        {/* Minimal progress shimmer track */}
        <div className="w-28 h-[2px] bg-black/[0.08] rounded-full overflow-hidden mt-2 relative">
          <div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#8a302f] rounded-full"
            style={{
              animation: "v1-loader-shimmer 1.1s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes v1-loader-shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(250%);
          }
        }
      `}</style>
    </div>
  );
}
