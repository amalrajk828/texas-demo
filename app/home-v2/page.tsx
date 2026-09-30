import type { Metadata } from "next";
import HomeV2Page from "@/demo/home-v2/HomeV2Page";

export const metadata: Metadata = {
  title: "Demo Variant: Home V2 (Original Navbar) | Texas Technical Services",
  description: "Preview of Home Screen Variant 2 featuring full V1 design paired with original top navbar",
  robots: { index: false, follow: false },
};

export default function HomeV2PageWrapper() {
  return <HomeV2Page />;
}
