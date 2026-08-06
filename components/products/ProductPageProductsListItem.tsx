"use client";

import { useRef, type ReactNode } from "react";

export default function ProductPageProductsListItem({
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
      className="h-full flex flex-col"
    >
      {children}
    </div>
  );
}
