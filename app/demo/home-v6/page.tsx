import type { Metadata } from "next";
import HomeV6Page from "../../../demo/home-v6/HomeV6Page";

export const metadata: Metadata = {
  title: "Demo Variant: Home V6 (Scroll Parallax & Zoom-Fade Hero Video) | Texas Technical Services",
  description: "Independent self-contained preview of Home Screen Variant 6 with scroll-linked parallax, scale, and fade-out dual-video background",
  robots: { index: false, follow: false },
};

export default function DemoHomeV6Page() {
  return <HomeV6Page />;
}
