"use client";

import { useRef, type ReactNode } from "react";

export default function IndustryProductCardMotion({
  delay = 0,
  children,
}: {
  delay?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
    >
      {children}
    </div>
  );
}
