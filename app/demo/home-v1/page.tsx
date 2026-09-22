import type { Metadata } from "next";
import HomeV5Page from "@/demo/home-v1/HomeV5Page";
import VersionSwitcherBar from "@/components/VersionSwitcherBar";

export const metadata: Metadata = {
  title: "Demo Variant: Home V1 (Finalized Design) | Texas Technical Services",
  description: "Finalized home screen design served as the Home V1 preview.",
  robots: { index: false, follow: false },
};

export default function DemoHomeV1Page() {
  return (
    <>
      <HomeV5Page />
      <VersionSwitcherBar />
    </>
  );
}
