"use client";

import { useMediaQuery } from "./useMediaQuery";

export function useReducedMotion(initialValue = false) {
  return useMediaQuery("(prefers-reduced-motion: reduce)", initialValue);
}
