import type { Metadata } from "next";
import VideoscopeHero from "@/components/service/videoscope/VideoscopeHero";
import VideoscopeContent from "@/components/service/videoscope/VideoscopeContent";

export const metadata: Metadata = {
  title: "Videoscope Remote Visual Inspection",
  description:
    "Videoscope remote visual inspection for confined and inaccessible areas — internal pipe, vessel, turbine, and engine inspection with HD image and video recording capability in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/videoscope/" },
  openGraph: {
    title: "Videoscope Remote Visual Inspection | Texas Technical Services",
    description: "Remote visual inspection for confined spaces — pipes, vessels, turbines. HD recording. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/videoscope/",
    images: [{ url: "https://texastechserv.com/og-videoscope.jpg", width: 1200, height: 630, alt: "Videoscope Inspection — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Videoscope Remote Visual Inspection | Texas Technical Services", description: "Remote visual inspection for confined spaces. Kuwait & Dubai." },
  keywords: ["videoscope inspection Kuwait", "remote visual inspection Kuwait", "borescope inspection Kuwait", "internal pipe inspection Kuwait", "confined space inspection Kuwait", "Texas Technical Services videoscope"],
};

export default function VideoscopePage() {
  return (
    <>
      <VideoscopeHero />
      <VideoscopeContent />
      {/* Contact section — to be added */}
    </>
  );
}
