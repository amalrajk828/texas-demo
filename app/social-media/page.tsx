import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, ExternalLink } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { OrganizationJsonLd } from "@/components/schema/OrganizationJsonLd";
import { SITE_EMAIL } from "@/lib/site";

const SOCIAL_URLS = [
  "https://www.linkedin.com/company/texas-technical-service-company",
  "https://www.facebook.com/texastechserv",
  "https://www.instagram.com/texas_technical_services",
  "https://www.youtube.com/@TEXASTECHNICALSERVICES",
  "https://x.com/texastechserv",
  "https://medium.com/@texastechserv",
  "https://www.quora.com/profile/Texas-Technical-Service-Company-W-L-L",
  "https://wellfound.com/company/texas-technical-service-company-w-l-l",
  "https://thegulfdirectory.com/businesses/texas-technical-service-company-wll",
  "https://angloinfo.com/kuwait-city/directory/work/services/texas-technical-service-company-wll-6a3f737560dbd",
];

export const metadata: Metadata = {
  title: "Social Media Platforms | Connect With Us",
  description:
    "Find Texas Technical Service Company on LinkedIn, Facebook, Instagram, YouTube, X (Twitter), Medium, Quora, and more — your source for industrial automation and flow measurement expertise across the GCC.",
  alternates: { canonical: "/social-media/" },
  openGraph: {
    title: "Social Media Platforms | Texas Technical Services",
    description:
      "Follow Texas Technical Service Company on LinkedIn, Facebook, Instagram, YouTube, X, and industry directories for automation and flow measurement expertise.",
    url: "/social-media/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Platforms | Texas Technical Services",
    description:
      "Connect with Texas Technical Service Company on LinkedIn, Facebook, Instagram, YouTube, X, and more.",
    images: ["/og-default.png"],
  },
  keywords: [
    "Texas Technical Services social media",
    "industrial automation company LinkedIn",
    "flow measurement company Kuwait social",
    "Texas Technical Service Company W.L.L. profiles",
    "follow Texas Technical Services",
    "Texas Technical Services YouTube",
    "automation company Facebook Kuwait",
    "PLC SCADA company Instagram",
    "industrial services GCC social media",
  ],
};

type Platform = {
  name: string;
  handle: string;
  url: string;
  description: string;
  icon: string;
  viewBox?: string;
};

const official: Platform[] = [
  {
    name: "LinkedIn",
    handle: "linkedin.com/company/texas-technical-service-company",
    url: "https://www.linkedin.com/company/texas-technical-service-company",
    description:
      "Company updates, project highlights, and what we're building across the GCC.",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Facebook",
    handle: "facebook.com/texastechserv",
    url: "https://www.facebook.com/texastechserv",
    description:
      "Project milestones and announcements from the team.",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "Instagram",
    handle: "@texas_technical_services",
    url: "https://www.instagram.com/texas_technical_services",
    description:
      "A visual look at how we work, what we build, and the people behind it.",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    name: "YouTube",
    handle: "@TEXASTECHNICALSERVICES",
    url: "https://www.youtube.com/@TEXASTECHNICALSERVICES",
    description:
      "Video walkthroughs, equipment demos, and project highlights from the field.",
    icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "X (Twitter)",
    handle: "@texastechserv",
    url: "https://x.com/texastechserv",
    description:
      "Short updates on industrial automation and the GCC energy sector.",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

const registered: Platform[] = [
  {
    name: "Medium",
    handle: "@texastechserv",
    url: "https://medium.com/@texastechserv",
    description:
      "Longer pieces on automation and flow measurement from our engineering team.",
    icon: "M46.5340803,65.2157554 C46.6968378,63.6076572 46.0836,62.018231 44.8828198,60.93592 L32.6512605,46.2010582 L32.6512605,44 L70.6302521,44 L99.9859944,108.380952 L125.794585,44 L162,44 L162,46.2010582 L151.542017,56.2281011 C150.640424,56.9153477 150.193188,58.0448862 150.380019,59.1628454 L150.380019,132.837155 C150.193188,133.955114 150.640424,135.084652 151.542017,135.771899 L161.755369,145.798942 L161.755369,148 L110.38282,148 L110.38282,145.798942 L120.963119,135.527337 C122.002801,134.487948 122.002801,134.182246 122.002801,132.592593 L122.002801,73.0417402 L92.585901,147.755438 L88.6106443,147.755438 L54.3622782,73.0417402 L54.3622782,123.115814 C54.0767278,125.221069 54.7759199,127.3406 56.2581699,128.863022 L70.0186741,145.55438 L70.0186741,147.755438 L31,147.755438 L31,145.55438 L44.7605042,128.863022 C46.2319621,127.338076 46.8903838,125.204485 46.5340803,123.115814 L46.5340803,65.2157554 Z",
    viewBox: "0 0 195 195",
  },
  {
    name: "Quora",
    handle: "Texas Technical Service Company W.L.L.",
    url: "https://www.quora.com/profile/Texas-Technical-Service-Company-W-L-L",
    description:
      "We answer questions on industrial automation when we have something useful to add.",
    icon: "M7.3799.9483A11.9628 11.9628 0 0 1 21.248 19.5397l2.4096 2.4225c.7322.7362.21 1.9905-.8272 1.9905l-10.7105.01a12.52 12.52 0 0 1-.304 0h-.02A11.9628 11.9628 0 0 1 7.3818.9503Zm7.3217 4.428a7.1717 7.1717 0 1 0-5.4873 13.2512 7.1717 7.1717 0 0 0 5.4883-13.2511Z",
  },
  {
    name: "Wellfound",
    handle: "Texas Technical Service Company W.L.L.",
    url: "https://wellfound.com/company/texas-technical-service-company-w-l-l",
    description:
      "Our story, our team, and what we're building.",
    icon: "M23.998 8.128c.063-1.379-1.612-2.376-2.795-1.664-1.23.598-1.322 2.52-.156 3.234 1.2.862 2.995-.09 2.951-1.57zm0 7.748c.063-1.38-1.612-2.377-2.795-1.665-1.23.598-1.322 2.52-.156 3.234 1.2.863 2.995-.09 2.951-1.57zm-20.5 1.762L0 6.364h3.257l2.066 8.106 2.245-8.106h3.267l2.244 8.106 2.065-8.106h3.257l-3.54 11.274H11.39c-.73-2.713-1.46-5.426-2.188-8.14l-2.233 8.14H3.5z",
  },
  {
    name: "The Gulf Directory",
    handle: "Texas Technical Service Company W.L.L.",
    url: "https://thegulfdirectory.com/businesses/texas-technical-service-company-wll",
    description:
      "Verified business listing on the Gulf region's premier business directory.",
    icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1z",
  },
  {
    name: "Angloinfo Kuwait",
    handle: "Texas Technical Service Company W.L.L.",
    url: "https://angloinfo.com/kuwait-city/directory/work/services/texas-technical-service-company-wll-6a3f737560dbd",
    description:
      "Business listing on Angloinfo Kuwait for services in the GCC.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  },
];

const stats = [
  { num: "4", label: "Active Channels" },
  { num: "9", label: "Total Profiles" },
  { num: "18+", label: "Years of Expertise" },
];

export default function SocialMediaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Social Media", href: "/social-media/" }]} />
      <OrganizationJsonLd
        name="Texas Technical Service Company W.L.L."
        url="https://texastechserv.com"
        sameAs={SOCIAL_URLS}
        telephone="+96566347267"
        email="sales@texastechserv.com"
        address={{
          streetAddress: "Fahaheel",
          addressLocality: "Kuwait City",
          addressCountry: "KW",
        }}
      />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="bg-[#0B0D26] relative overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        {/* Red glow — top right */}
        <div
          className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(231,33,43,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-8 text-[11px] text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/55">Social Media</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-16">
            {/* Left — headline */}
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
                  ISO 9001:2015 Certified · Est. 2008
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.15] mb-5">
                Connect With
                <br />
                <em className="not-italic text-[#e7212b]">Us</em>
              </h1>
              <p className="text-white/55 text-base sm:text-lg leading-relaxed">
                One place to find every account we use. Follow us on social media
                for industry insights, project updates, and automation expertise
                from the GCC&apos;s trusted technical service partner.
              </p>
            </div>

            {/* Right — stats */}
            <div className="flex flex-row lg:flex-col gap-3 shrink-0">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.04] border border-white/[0.08] hover:border-[#e7212b]/30 rounded-xl px-5 py-4 text-center min-w-[88px] transition-colors duration-200"
                >
                  <p className="text-2xl font-medium text-[#e7212b]">{s.num}</p>
                  <p className="text-[10px] text-white/30 mt-1 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ OFFICIAL CHANNELS ════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
              Verified Accounts
            </span>
          </div>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[1.75rem] sm:text-[2rem] font-semibold text-[#181D4E]">
              Official Channels
            </h2>
            <span className="text-gray-400 text-[12px]">
              {official.length} Platforms
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {official.map((platform, i) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`fade-up d${i + 1} group block rounded-2xl bg-white border border-[#e8eaf0] hover:border-[#e7212b]/60 transition-all duration-300 hover:shadow-2xl p-6`}
                style={
                  {
                    "--tw-shadow-color": "rgba(231,33,43,0.12)",
                    "--tw-shadow": "var(--tw-shadow-colored)",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#0B0D26] flex items-center justify-center shrink-0 group-hover:bg-[#e7212b] transition-colors duration-300">
                    <svg viewBox={platform.viewBox || "0 0 24 24"} className="w-5 h-5 text-white" fill="currentColor">
                      <path d={platform.icon} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#181D4E] font-semibold text-lg group-hover:text-[#e7212b] transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-gray-400 text-[12px] mt-0.5 truncate">
                      {platform.handle}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#e7212b] transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed mt-4">
                  {platform.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REGISTERED PROFILES ══════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
              Also On
            </span>
          </div>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[1.75rem] sm:text-[2rem] font-semibold text-[#181D4E]">
              Registered Profiles
            </h2>
            <span className="text-gray-400 text-[12px]">
              {registered.length} Platforms
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {registered.map((platform, i) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`fade-up d${i + 1} group block rounded-2xl bg-white border border-[#e8eaf0] hover:border-[#e7212b]/60 transition-all duration-300 hover:shadow-lg p-5`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {/* Small icon badge */}
                  <div className="w-11 h-11 rounded-xl bg-[#0B0D26]/5 flex items-center justify-center shrink-0 group-hover:bg-[#e7212b]/10 transition-colors">
                    <svg viewBox={platform.viewBox || "0 0 24 24"} className="w-5 h-5 text-[#0B0D26] group-hover:text-[#e7212b] transition-colors" fill="currentColor">
                      <path d={platform.icon} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">
                      Registered
                    </p>
                    <h3 className="text-[#181D4E] font-semibold text-sm">
                      {platform.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-2 mb-3">
                  {platform.description}
                </p>
                <div className="flex items-center gap-1 text-[#181D4E] text-[11px] font-medium group-hover:text-[#e7212b] transition-colors">
                  Open Profile
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GET IN TOUCH ════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
              Get in Touch
            </span>
            <span className="w-8 h-px bg-[#e7212b]/40" />
          </div>
          <h2 className="text-[1.75rem] sm:text-[2rem] font-semibold text-[#181D4E] mb-4">
            Don&apos;t see your favourite platform?
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto mb-8">
            Just ask. We&apos;ll tell you if we use that platform, or reach out
            to us directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Email Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://wa.me/96597243755"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#e8eaf0] hover:border-[#e7212b]/60 text-[#181D4E] font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══════════════════════════════════════ */}
      <section className="bg-[#0B0D26] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
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
