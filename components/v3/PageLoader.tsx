"use client";

import React, { useEffect, useState } from "react";

interface PageLoaderProps {
  isRouteTransition?: boolean;
}

export default function PageLoader({ isRouteTransition = false }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    let unmountTimer: ReturnType<typeof setTimeout> | null = null;
    let safetyTimer: ReturnType<typeof setTimeout> | null = null;

    const hideLoader = () => {
      setVisible(false);
      unmountTimer = setTimeout(() => {
        setMounted(false);
      }, 350);
    };

    const startTime = Date.now();
    const minDisplayTime = isRouteTransition ? 200 : 400;
    const maxDisplayTime = 3000;

    const handleReady = () => {
      try {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minDisplayTime - elapsed);

        hideTimer = setTimeout(hideLoader, remaining);
      } catch {
        hideLoader();
      }
    };

    // 1. Check if document is already interactive or complete
    try {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        handleReady();
      } else {
        window.addEventListener("DOMContentLoaded", handleReady, { once: true });
        window.addEventListener("load", handleReady, { once: true });
      }
    } catch {
      handleReady();
    }

    // 2. Ironclad safety fallback timeout (force hide after 3 seconds)
    safetyTimer = setTimeout(hideLoader, maxDisplayTime);

    return () => {
      try {
        window.removeEventListener("DOMContentLoaded", handleReady);
        window.removeEventListener("load", handleReady);
      } catch {}
      if (hideTimer) clearTimeout(hideTimer);
      if (unmountTimer) clearTimeout(unmountTimer);
      if (safetyTimer) clearTimeout(safetyTimer);
    };
  }, [isRouteTransition]);

  if (!mounted && !isRouteTransition) return null;

  return (
    <>
      <noscript>
        <style>{`.page-loader-overlay { display: none !important; }`}</style>
      </noscript>
      <div
        id="page-loader-root"
        role="status"
        aria-label="Loading"
        suppressHydrationWarning
        className={`page-loader-overlay ${!visible ? "is-hidden" : ""}`}
      >
        <div className="loader">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </>
  );
}
