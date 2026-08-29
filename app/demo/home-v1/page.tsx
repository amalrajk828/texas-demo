import type { Metadata } from "next";
import HomeV1Page from "../../../demo/home-v1/HomeV1Page";

export const metadata: Metadata = {
  title: "Demo Variant: Home V1 | Texas Technical Services",
  description: "Independent self-contained preview of Home Screen Variant 1",
  robots: { index: false, follow: false },
};

export default function DemoHomeV1Page() {
  return <HomeV1Page />;
}
