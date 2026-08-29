import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Play } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { VideoObjectJsonLd } from "@/components/schema/VideoObjectJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import VideoGrid from "./_components/VideoGrid";
import { videos } from "@/lib/videos";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Videos | Industrial Automation, Flow Metering & Inspection Demos",
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
    "process control video",
    "Pyrotech control room",
    "connected field service",
  ],
  alternates: { canonical: "/videos/" },
  openGraph: {
    title: "Videos | Industrial Automation, Flow Metering & Inspection Demos",
    description:
      "Watch video walkthroughs, equipment demos, and project highlights from Texas Technical Services — ICONICS SCADA, flow meter installation, control room design, and industrial automation.",
    url: `${SITE_URL}/videos/`,
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Videos | Texas Technical Services",
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

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="bg-[#000000] blueprint-grid blueprint-dot-grid relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(231,33,43,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <nav className="flex items-center gap-1.5 mb-8 text-[11px] text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/55">Videos</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-16">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#0891B2] text-[10px] font-medium tracking-[2.5px] uppercase">
                  ISO 9001:2015 Certified · Est. 2008
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.15] mb-5">
                Our
                <br />
                <em className="not-italic text-[#e7212b]">Videos</em>
              </h1>
              <p className="text-white/55 text-base sm:text-lg leading-relaxed">
                Watch walkthroughs, equipment demos, and project highlights
                from the field — covering industrial automation, flow
                measurement, control room design, and inspection services
                across the GCC.
              </p>
            </div>

            <div className="flex flex-row lg:flex-col gap-3 shrink-0">
              <div className="bg-white/[0.04] border border-white/[0.08] hover:border-[#e7212b]/30 rounded-xl px-5 py-4 text-center min-w-[88px] transition-colors duration-200">
                <p className="text-2xl font-medium text-[#e7212b]">
                  {videos.length}
                </p>
                <p className="text-[10px] text-white/30 mt-1 tracking-wide">
                  Videos
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] hover:border-[#e7212b]/30 rounded-xl px-5 py-4 text-center min-w-[88px] transition-colors duration-200">
                <p className="text-2xl font-medium text-[#e7212b]">
                  <Play className="w-5 h-5 inline" />
                </p>
                <p className="text-[10px] text-white/30 mt-1 tracking-wide">
                  Watch Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEOS GRID ══════════════════════════════════════ */}
      <VideoGrid videos={videos} />

      {/* ══ YOUTUBE CTA ═════════════════════════════════════ */}
      <section className="bg-white pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <a
            href="https://www.youtube.com/@TEXASTECHNICALSERVICES"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            Visit Our YouTube Channel <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <FaqPageJsonLd items={videosFaq} />
      <SpeakableJsonLd headline="Videos — Industrial Automation, Flow Metering & Inspection Demos" />
      <PageFaqSection
        items={videosFaq}
        title="Questions About"
        highlight="Our Videos"
      />

      {/* ══ CTA BANNER ══════════════════════════════════════ */}
      <section className="bg-[#000000] blueprint-grid blueprint-dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#0891B2] text-[9px] font-medium tracking-[2.5px] uppercase">
              Have a project in mind?
            </span>
            <span className="w-8 h-px bg-[#e7212b]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Ready to Achieve More?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            We partner with ambitious companies to solve complex challenges,
            improve operations and deliver real results using tailored industrial
            automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
