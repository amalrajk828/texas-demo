import type { Metadata } from "next";
import HomeV3Page from "../../../demo/home-v3/HomeV3Page";
import VersionSwitcherBar from "@/components/VersionSwitcherBar";

export const metadata: Metadata = {
  title: "Demo Variant: Home V3 (Blog Hero with Liquid Gel Blob) | Texas Technical Services",
  description: "Independent self-contained preview of Home Screen Variant 3 with Blog Hero and SVG Liquid Gel Blob",
  robots: { index: false, follow: false },
};

export default function DemoHomeV3Page() {
  return (
    <>
      {/* Manrope font — loaded only on this route */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
      />
      <HomeV3Page />
      <VersionSwitcherBar />
    </>
  );
}
