export interface HeroSlide {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  tag: string;
}

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    type: "image",
    src: "/homevideos/homebannerimage.jpg",
    alt: "Texas Technical Services — industrial flow measurement and control systems facility",
    tag: "Industrial Services",
  },
  {
    type: "video",
    src: "/homevideos/Automated-1-2.mp4",
    poster: "/homevideos/Automated-1-2-poster.jpg",
    alt: "Industrial Process Automation — PLC SCADA automation systems by leading automation company TTS",
    tag: "Automation",
  },
  {
    type: "video",
    src: "/homevideos/newproduct.mp4",
    poster: "/homevideos/newproduct-poster.jpg",
    alt: "Flow Measurement and Control System Solutions — liquid hydrocarbon and gas metering by TTS",
    tag: "Metering",
  },
  {
    type: "image",
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "Inspection and Testing services — NDT, mechanical testing, and specialized inspection by TTS",
    tag: "NDT & Testing",
  },
] as const;

export interface CertBadge {
  src: string;
  alt: string;
}

export const HERO_CERT_BADGES: readonly CertBadge[] = [
  { src: "/about/cert-iso9001.png", alt: "ISO 9001:2015 Certified" },
  { src: "/about/cert-iso14001.png", alt: "ISO 14001:2015 Certified" },
  { src: "/about/cert-iso45001.png", alt: "ISO 45001:2018 Certified" },
  { src: "/about/cert-uasl.png", alt: "UASL Accredited" },
  { src: "/about/cert-accurate-white.png", alt: "Accurate Calibration Certified" },
] as const;

export interface HeroStat {
  prefix: string;
  num: string;
  label: string;
}

export const HERO_STATS: readonly HeroStat[] = [
  { prefix: "/01", num: "18+", label: "Years Experience" },
  { prefix: "/02", num: "8", label: "Industries Served" },
  { prefix: "/03", num: "200+", label: "Approved Clients" },
  { prefix: "/04", num: "16+", label: "Global Vendors" },
] as const;
