"use client";
import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(
      window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768
    );
  }, []);
  return isMobile;
}
