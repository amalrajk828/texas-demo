import type { Metadata } from "next";
import ValidationHero from "@/components/service/validation-uncertainty-calculations/ValidationHero";
import ValidationContent from "@/components/service/validation-uncertainty-calculations/ValidationContent";

export const metadata: Metadata = {
  title: "Validation and Uncertainty Calculations",
  description:
    "GUM-compliant measurement uncertainty calculations and comprehensive validation services for custody metering skids, flow computers, and metering systems. API MPMS Chapter 21, ISO, OIML compliant — Kuwait and Dubai.",
  alternates: {
    canonical: "https://texastechserv.com/service/validation-uncertainty-calculations/",
  },
  openGraph: {
    title: "Validation and Uncertainty Calculations | Texas Technical Services",
    description:
      "Advanced GUM-methodology uncertainty calculations and custody metering system validation — API MPMS, ISO, OIML compliant. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/validation-uncertainty-calculations/",
    images: [
      {
        url: "https://texastechserv.com/og-validation-uncertainty.jpg",
        width: 1200,
        height: 630,
        alt: "Validation and Uncertainty Calculations — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Validation and Uncertainty Calculations | Texas Technical Services",
    description:
      "GUM-compliant uncertainty calculations and custody metering validation. API MPMS Chapter 21, ISO, OIML. Kuwait & Dubai.",
  },
  keywords: [
    "measurement uncertainty calculations Kuwait",
    "GUM uncertainty analysis Kuwait",
    "custody metering validation Kuwait",
    "API MPMS Chapter 21 Kuwait",
    "flow computer validation Kuwait",
    "metering skid uncertainty budget",
    "uncertainty analysis Dubai",
    "Texas Technical Services uncertainty calculations",
  ],
};

export default function ValidationUncertaintyPage() {
  return (
    <>
      <ValidationHero />
      <ValidationContent />
      {/* Contact section — to be added */}
    </>
  );
}
