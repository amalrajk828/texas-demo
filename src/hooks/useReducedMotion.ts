"use client";

import { useMediaQuery } from "@/src/hooks/useMediaQuery";

export function useReducedMotion(initialValue = false) {
  return useMediaQuery("(prefers-reduced-motion: reduce)", initialValue);
}
