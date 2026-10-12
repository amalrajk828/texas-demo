export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroCta {
  label: string;
  href: string;
  primary?: boolean;
}

export interface HeroGalleryItem {
  id: string;
  title: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
}

export interface HeroContent {
  sectionLabel: string;
  heading: string;
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  stats: HeroStat[];
  mainGraphic: {
    src: string;
    videoSrc: string;
    poster: string;
    alt: string;
    tag: string;
  };
  gallery: HeroGalleryItem[];
}

/**
 * Shared, single source of truth for the Hero Section content across the
 * production homepage and all isolated demo variations (/demo/home-v2 .. v6).
 */
export const HERO_CONTENT: HeroContent = {
  sectionLabel: "INDUSTRIAL AUTOMATION",
  heading: "Industrial Process Automation Solutions",
  headingPrefix: "Industrial Process",
  headingHighlight: "Automation",
  headingSuffix: "Solutions",
  description:
    "Empowering industries through industrial automation. PLC SCADA systems, control integration, and commissioning for oil & gas, manufacturing, and power generation.",
  primaryCta: {
    label: "Know More",
    href: "/service/industrial-automation/",
    primary: true,
  },
  secondaryCta: {
    label: "Our Services",
    href: "/services/",
    primary: false,
  },
  stats: [
    { value: "18+", label: "Years" },
    { value: "8", label: "Industries" },
    { value: "200+", label: "Clients" },
    { value: "16+", label: "Vendors" },
  ],
  mainGraphic: {
    src: "/homevideos/Automated-1-2-poster.jpg",
    videoSrc: "/homevideos/Automated-1-2.mp4",
    poster: "/homevideos/Automated-1-2-poster.jpg",
    alt: "Industrial Process Automation — PLC SCADA automation systems by leading automation company TTS",
    tag: "Automation",
  },
  gallery: [
    {
      id: "mitsubishi-diagram",
      title: "Hyper Historian / Mitsubishi Automation",
      type: "video",
      src: "/homevideos/Automated-1-2.mp4",
      poster: "/homevideos/Automated-1-2-poster.jpg",
      alt: "Industrial Process Automation — PLC SCADA automation systems by leading automation company TTS",
    },
    {
      id: "control-room",
      title: "Control Room Facility",
      type: "image",
      src: "/homevideos/homebannerimage.jpg",
      alt: "Texas Technical Services — industrial flow measurement and control systems facility",
    },
    {
      id: "equipment",
      title: "Flow & Metering Equipment",
      type: "video",
      src: "/homevideos/newproduct.mp4",
      poster: "/homevideos/newproduct-poster.jpg",
      alt: "Flow Measurement and Control System Solutions — liquid hydrocarbon and gas metering by TTS",
    },
    {
      id: "workers",
      title: "Certified Testing & Inspection",
      type: "image",
      src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
      alt: "Inspection and Testing services — NDT, mechanical testing, and specialized inspection by TTS",
    },
  ],
};
