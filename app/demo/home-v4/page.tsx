import type { Metadata } from "next";
import HomeV4Page from "../../../demo/home-v4/HomeV4Page";
import VersionSwitcherBar from "@/components/VersionSwitcherBar";

export const metadata: Metadata = {
  title: "Demo Variant: Home V4 (Full-Screen Interactive Nebula Shader) | Texas Technical Services",
  description: "Independent self-contained preview of Home Screen Variant 4 with Full-Screen Interactive WebGL Animated Nebula Shader",
  robots: { index: false, follow: false },
};

export default function DemoHomeV4Page() {
  return (
    <>
      <HomeV4Page />
      <VersionSwitcherBar />
    </>
  );
}
