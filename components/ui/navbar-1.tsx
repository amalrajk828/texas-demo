"use client";

import type { ReactNode } from "react";
import { CardSpotlight } from "./card-spotlight";

// The supplied pill layout accepts the site's real logo, links and native menu.
export function Navbar1({
  children,
  className,
  reduced,
}: {
  children: ReactNode;
  className?: string;
  reduced?: boolean;
}) {
  return (
    <CardSpotlight className={className} reduced={reduced}>
      {children}
    </CardSpotlight>
  );
}
