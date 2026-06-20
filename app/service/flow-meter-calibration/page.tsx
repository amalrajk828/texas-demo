import type { Metadata } from "next";
import CalibrationHero from "@/components/service/flow-meter-calibration/CalibrationHero";
import CalibrationContent from "@/components/service/flow-meter-calibration/CalibrationContent";

export const metadata: Metadata = {
  title: "Flow Meter Calibration",
  description:
    "Faure Herman ILAC/COFRAC ISO 17025 accredited flow meter calibration services — initial & periodic verification to OIML R117 class 0.3 and API MPMS, as found calibration, real target fluid calibration, and 2-week emergency service for custody transfer flowmeters in Kuwait and Dubai.",
  alternates: {
    canonical: "https://texastechserv.com/service/flow-meter-calibration/",
  },
  openGraph: {
    title: "Flow Meter Calibration | Texas Technical Services",
    description:
      "ILAC/COFRAC ISO 17025 accredited flow meter calibration — OIML R117, API MPMS, MID compliance, as found calibration, real fluid calibration, and 2-week emergency service.",
    url: "https://texastechserv.com/service/flow-meter-calibration/",
    images: [
      {
        url: "https://texastechserv.com/og-flow-meter-calibration.jpg",
        width: 1200,
        height: 630,
        alt: "Flow Meter Calibration — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Meter Calibration | Texas Technical Services",
    description:
      "ILAC/COFRAC ISO 17025 accredited calibration — OIML R117, API MPMS, MID compliance. Emergency 2-week service available. Kuwait & Dubai.",
  },
  keywords: [
    "flow meter calibration Kuwait",
    "Faure Herman calibration Kuwait",
    "ILAC COFRAC ISO 17025 calibration",
    "OIML R117 calibration Kuwait",
    "API MPMS calibration Kuwait",
    "custody transfer meter calibration",
    "flow meter calibration Dubai",
    "MID calibration compliance Kuwait",
    "Texas Technical Services calibration",
  ],
};

export default function FlowMeterCalibrationPage() {
  return (
    <>
      <CalibrationHero />
      <CalibrationContent />
      {/* Contact section — to be added */}
    </>
  );
}
