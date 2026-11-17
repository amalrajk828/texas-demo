"use client";

import React from "react";

export interface AccentCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: "div" | "article" | "section";
  className?: string;
}

/**
 * AccentCard
 * Reusable wrapper providing the brand #8a302f 3px top accent strip
 * with corner-clipped geometry and hardware-accelerated Safari isolation.
 */
export function AccentCard({
  children,
  as = "div",
  className = "",
  ...props
}: AccentCardProps) {
  const Component = as as "div" | "article" | "section";
  return (
    <Component className={`card-accent ${className}`} {...(props as any)}>
      {children}
    </Component>
  );
}

export default AccentCard;
