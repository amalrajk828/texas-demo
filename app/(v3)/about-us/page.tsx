import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ReviewJsonLd } from "@/components/schema/ReviewJsonLd";
import { OrganizationJsonLd } from "@/components/schema/OrganizationJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { aboutUsFaq } from "@/lib/pageFaqData";
import AboutUsView from "@/components/about/AboutUsView";

export const metadata: Metadata = {
  title: "About Us — Industrial Automation Company",
  description:
    "Texas Technical Services — industrial automation company in Kuwait, UAE & GCC since 2008. PLC SCADA, flow measurement, and inspection services.",
  alternates: { canonical: "/about-us/" },
  openGraph: {
    title: "About Us | Industrial Automation Company in Kuwait & GCC",
    description:
      "Industrial automation company in Kuwait, UAE & GCC since 2008 — PLC SCADA, flow measurement, inspection & testing.",
    url: "/about-us/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  keywords: [
    "industrial automation companies in Kuwait",
    "automation companies in Dubai",
    "industrial automation companies in UAE",
    "automation companies in Saudi Arabia",
    "flow measurement companies Kuwait",
    "PLC SCADA system integrator Kuwait",
    "inspection and testing companies Kuwait",
    "oil and gas service company Fahaheel",
    "industrial engineering services GCC",
    "Texas Technical Services Co",
    "Mitsubishi electric authorized integrator Kuwait",
    "industrial automation companies in GCC",
    "custody transfer metering Kuwait",
    "Endress Hauser distributor Kuwait",
    "KEM Kuppers distributor Kuwait",
    "Faure Herman helical flow meter Kuwait",
    "authorized partnerships Kuwait",
  ],
  twitter: {
    card: "summary_large_image",
    title: "About Us | Industrial Automation Company in Kuwait & GCC",
    description:
      "Industrial automation company in Kuwait, UAE & GCC since 2008 — PLC SCADA, flow measurement, inspection & testing.",
    images: ["/og-default.png"],
  },
};

const testimonials = [
  {
    text: "The dedication that Texas Technical Services Co. (TTS) shows to understanding our unique needs sets them apart. Their tailored solutions and unwavering support have elevated our operations to new heights.",
    name: "Peter John",
    role: "Flow Specialist",
    avatar: "/about/testimonial-peter.jpg",
  },
  {
    text: "Reliability and accuracy are paramount in our industry. Texas Technical Services Co. (TTS) has consistently delivered on both fronts. Their dedicated team and advanced solutions have played a pivotal role in our success.",
    name: "Kevin Rogers",
    role: "Custody Metering Expert",
    avatar: "/about/testimonial-kevin.jpg",
  },
  {
    text: "Texas Technical Services Co. (TTS) has been an indispensable partner in our operations. Their expertise in measurement solutions has revolutionized the way we handle custody and allocation measurement. Their commitment to quality is truly commendable.",
    name: "Jason Bright",
    role: "Process Engineer",
    avatar: "/about/testimonial-jason.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about-us/" },
        ]}
      />
      <SpeakableJsonLd headline="About Texas Technical Services — Industrial Automation Company in Kuwait & GCC" />
      <ReviewJsonLd
        items={testimonials.map((t) => ({
          author: t.name,
          reviewBody: t.text,
          ratingValue: 5,
        }))}
      />
      <OrganizationJsonLd
        logo="/logo.svg"
        telephone={[
          "+965 97243755",
          "+965 66347267",
          "+971 569553747",
          "+971 567793973",
        ]}
        email="sales@texastechserv.com"
        sameAs={[
          "https://www.linkedin.com/company/texas-technical-service-company",
          "https://www.facebook.com/texastechserv",
          "https://www.instagram.com/texas_technical_services",
          "https://www.youtube.com/@TEXASTECHNICALSERVICES",
          "https://x.com/texastechserv",
          "https://bsky.app/profile/texastechserv.bsky.social",
          "https://medium.com/@texastechserv",
          "https://hashnode.com/@texastechserv",
          "https://substack.com/@texastechserv",
          "https://www.quora.com/profile/Texas-Technical-Service-Company-W-L-L",
          "https://wellfound.com/company/texas-technical-service-company-w-l-l",
          "https://www.dnb.com/business-directory/company-profiles.texas_technical_services_company_for_general_trading__contracting_wll.7ca7aec2c7eaf2e011689ae38a275cdf.html",
          "https://www.crunchbase.com/organization/texas-technical-services",
        ]}
        address={{
          streetAddress:
            "Munira Tower Office No. 30, 9th Floor – Building No.6702, Block 7 – Makkah Street",
          addressLocality: "Fahaheel",
          addressCountry: "KW",
        }}
      />
      <FaqPageJsonLd items={aboutUsFaq} />

      {/* ── Redesigned About Us Content View ── */}
      <AboutUsView />
    </>
  );
}
