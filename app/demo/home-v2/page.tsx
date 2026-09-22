import type { Metadata } from "next";
import HomeV2Page from "../../../demo/home-v2/HomeV2Page";
import VersionSwitcherBar from "@/components/VersionSwitcherBar";

export const metadata: Metadata = {
  title: "Demo Variant: Home V2 (Flow Measurement Hero) | Texas Technical Services",
  description: "Independent self-contained preview of Home Screen Variant 2 with Flow Measurement Hero design",
  robots: { index: false, follow: false },
};

export default function DemoHomeV2Page() {
  return (
    <>
      <HomeV2Page />
      <VersionSwitcherBar />
    </>
  );
}
