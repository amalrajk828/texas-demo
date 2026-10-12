"use client";

import { Suspense, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import LegacyLoading from "@/components/LegacyLoading";

const Header = dynamic(() => import("@/components/Header"));
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"));
const ScrollObserver = dynamic(() => import("@/components/ScrollObserver"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

function isReviewRoute(pathname: string) {
  return /^\/(light1|light2)\/?$/.test(pathname);
}

// Keep the review route independent of the existing site's chrome and effects.
export default function SiteFrame({ children, footer }: { children: ReactNode; footer: ReactNode }) {
  const pathname = usePathname();
  if (isReviewRoute(pathname)) return children;

  return <>
    <ScrollObserver />
    <SmoothScroll>
      <Header />
      <main id="main-content"><Suspense key={pathname} fallback={<LegacyLoading />}>{children}</Suspense></main>
      {footer}
    </SmoothScroll>
    <WhatsAppButton />
  </>;
}

export function ProductionOnly({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return isReviewRoute(pathname) ? null : children;
}

export function LegacyStyles() {
  const pathname = usePathname();
  if (isReviewRoute(pathname)) return null;
  // Create the link after the route check: React hoists server-created stylesheets
  // even when their parent is passed to a client component that returns null.
  return (
    // eslint-disable-next-line @next/next/no-page-custom-font -- Preserve the existing site's shared fonts; review pages use next/font.
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap" />
  );
}
