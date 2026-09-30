import type { Metadata } from "next";
import HomeV3Page from "../../../demo/home-v3/HomeV3Page";

export const metadata: Metadata = {
  title: "Precision Industrial Engineering | Texas Technical Services Company",
  description:
    "Turnkey engineering architectures spanning Fiscal Metering Packages, Modular Process Skids, In-Situ Calibration, and SIL-3 Safety Systems across Kuwait, UAE, and the wider Arabian Gulf since 2008.",
  robots: { index: false, follow: false },
};

export default function DemoHomeV3Page() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
        rel="stylesheet"
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />
      <HomeV3Page />
    </>
  );
}
