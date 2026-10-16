import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { VideoObjectJsonLd } from "@/components/schema/VideoObjectJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
} from "@/components/v3";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import V3VideoGrid from "@/components/videos/V3VideoGrid";
import { videos } from "@/lib/videos";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering Videos | Demos, Calibration & Walkthroughs",
  description:
    "Watch video walkthroughs, equipment demos, and project highlights from Texas Technical Services — covering ICONICS SCADA, flow meter installation, control room design, and industrial automation across the GCC.",
  keywords: [
    "industrial automation videos",
    "flow meter installation Kuwait",
    "PLC SCADA demo",
    "control room design",
    "ICONICS SCADA demo",
    "FLOWSIC600 gas flow meter",
    "non-destructive testing NDT video",
    "Mitsubishi Electric automation",
    "custody transfer metering video",
    "industrial inspection demo",
    "Texas Technical Services videos",
    "oil and gas automation GCC",
  ],
  alternates: { canonical: "/videos/" },
  openGraph: {
    title: "Engineering Videos | Texas Technical Services",
    description:
      "Watch video walkthroughs, equipment demos, and project highlights from Texas Technical Services — ICONICS SCADA, flow meter installation, control room design, and industrial automation.",
    url: `${SITE_URL}/videos/`,
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Videos | Texas Technical Services",
    description:
      "Video walkthroughs, equipment demos, and project highlights from Texas Technical Services — ICONICS SCADA, flow meters, control rooms, and industrial automation.",
    images: ["/og-default.png"],
  },
};

const videosFaq = [
  {
    q: "What kind of videos does Texas Technical Services publish?",
    a: "Our videos cover industrial automation demos (ICONICS SCADA, Mitsubishi Electric PLC/HMI), flow metering projects (FLOWSIC600 custody transfer installation), control room builds, non-destructive testing (NDT), and project highlights from oil & gas, refinery, and petrochemical facilities across the GCC.",
  },
  {
    q: "How often are new videos released?",
    a: "We publish new videos as projects are completed or when new equipment demos are available. Subscribe to our YouTube channel at youtube.com/@TEXASTECHNICALSERVICES to stay updated.",
  },
  {
    q: "Can I use these videos for training or educational purposes?",
    a: "Yes. Our technical walkthroughs and equipment demos are intended to educate engineers, plant managers, and procurement teams on industrial automation, flow measurement, and inspection technologies. Contact us for collaboration or bulk training material requests.",
  },
  {
    q: "Does Texas Technical Services offer live demos or consultations?",
    a: "Absolutely. We offer on-site and virtual demos for flow metering systems, SCADA platforms, and control room solutions. Reach out via our contact page to schedule a consultation with our engineering team.",
  },
];

export default function VideosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Videos", href: "/videos/" },
        ]}
      />
      <ItemListJsonLd
        name="Texas Technical Services Video Library"
        items={videos.map((v) => ({
          name: v.title,
          url: `/videos/#${v.id}`,
          description: v.description,
        }))}
      />
      {videos.map((v) => (
        <VideoObjectJsonLd
          key={v.id}
          name={v.title}
          description={v.description}
          thumbnailUrl={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
          embedUrl={`https://www.youtube.com/embed/${v.id}`}
          uploadDate={v.uploadDate}
        />
      ))}
      <FaqPageJsonLd items={videosFaq} />

      {/* ── 1. Hero ── */}
      <PageHero
        title="Engineering Demos & Project Walkthroughs"
        subtitle="Visual walkthroughs of fiscal metering skids, SCADA control room architectures, in-situ ultrasonic calibrations, and non-destructive testing procedures."
        category="Media Library"
        badgeText={`${videos.length} Technical Videos`}
        primaryCta={{ label: "Browse Videos", href: "#video-library" }}
        secondaryCta={{ label: "Subscribe on YouTube", href: "https://www.youtube.com/@TEXASTECHNICALSERVICES", external: true }}
      />

      {/* ── 2. Video Grid ── */}
      <Section id="video-library" tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Demonstration Archive"
            title="Field Demonstrations & Technical Walkthroughs"
            description="Explore our recorded site commissioning sessions, hardware teardowns, and software integrations across Kuwait and UAE facilities."
          />
          <V3VideoGrid videos={videos} />
        </Container>
      </Section>

      {/* ── 3. FAQ ── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Video Library FAQ"
            title="Frequently Asked Questions"
            description="Details regarding live webinars, technical training material access, and custom demonstration requests."
          />
          <ServiceFaqAccordion items={videosFaq} />
        </Container>
      </Section>

      {/* ── 4. CTA ── */}
      <CTASection
        title="Need a Customized Live Demo for Your Team?"
        subtitle="Schedule a dedicated technical demonstration with our flow measurement and industrial automation specialists in Kuwait or Dubai."
        primaryCta={{ label: "Request Live Demo", href: "/contacts/" }}
        secondaryCta={{ label: "Explore Products", href: "/products/" }}
      />
    </>
  );
}
