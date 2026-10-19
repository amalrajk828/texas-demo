"use client";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const mql = window.matchMedia("(pointer: coarse)");
  mql.addEventListener("change", callback);
  window.addEventListener("resize", callback);
  return () => {
    mql.removeEventListener("change", callback);
    window.removeEventListener("resize", callback);
  };
}

function getSnapshot() {
  return window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
}

function getServerSnapshot() {
  return false;
}

export function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
