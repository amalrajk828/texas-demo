"use client";

import { useState, useEffect } from "react";

export function useFolderWidth(): number {
  const [width, setWidth] = useState(340);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth < 640 ? 300 : 340);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}
