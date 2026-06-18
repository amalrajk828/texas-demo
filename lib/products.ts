export type Product = {
  slug: string;
  name: string;
  category: "Industrial Sensors" | "PLC" | "ICONICS" | "GOT" | "Frequency Inverters (VFD)" | "AC Servos";
  parentPath: string;
  image?: string;
  description?: string;
  keyApplications?: string[];
  keyBenefits?: string[];
  industries?: string[];
  externalLink?: string;
  downloadLink?: string | null;
  series?: string;
  variants?: string[];

  // Optional fields for detail pages
  heroImage?: string;
  brand?: string;
  tagline?: string;
  intro?: string;
  paragraphs?: string[];
  bulletSections?: { heading: string; items: string[] }[];
  gallery?: { src: string; alt: string }[];
  subBlocks?: any[];
  youtubeUrl?: string;
  models?: string[];
  downloadHref?: string;
  detailHref?: string;
};

export const products: Product[] = [

  // ── INDUSTRIAL SENSORS (22) ──────────────────────────────
  {
    slug: "radar-sensors",
    name: "Radar Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/Radar Sensors.png",
  },
  {
    slug: "photoelectric-sensors",
    name: "Photoelectric Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/Photoelectric Sensors.png",
  },
  {
    slug: "safety-light-beam-sensors",
    name: "Safety Light-Beam Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/3.-SAFETY-LIGHT-BEAM-SENSORS.png",
  },
  {
    slug: "safety-light-curtains",
    name: "Safety Light Curtains",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/4.-SAFETY-LIGHT-CURTAIN.png",
  },
  {
    slug: "safety-distance-sensors",
    name: "Safety Distance Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/5.SAFETY-DISTANCE-SENSOR.png",
  },
  {
    slug: "safety-laser-scanners",
    name: "Safety Laser Scanners",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/6.SAFETY-LASER-SENSOR.png",
  },
  {
    slug: "safety-camera-sensors",
    name: "Safety Camera Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/7.-SAFETY-SENSOR-CAMERA.png",
  },
  {
    slug: "rfid",
    name: "RFID",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/8.RFID_.png",
  },
  {
    slug: "non-contact-motion-sensors",
    name: "Non-Contact Motion Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/Non-Contact Motion.png",
  },
  {
    slug: "motor-feedback-systems",
    name: "Motor Feedback Systems",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/10.-MOTION-FEEDBACK-SENSOR.png",
  },
  {
    slug: "mobile-handheld-scanners",
    name: "Mobile Handheld Scanners",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/11.MOBILE-HANDHELD-SCANNER.png",
  },
  {
    slug: "magnetic-sensors",
    name: "Magnetic Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/12.MAGNETIC-SENSOR.png",
  },
  {
    slug: "inductive-proximity-sensors",
    name: "Inductive Proximity Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/INDUCTIVE-SAFETY-SWITCH.png",
  },
  {
    slug: "image-based-code-readers",
    name: "Image-Based Code Readers",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/IMAGE-BASED-CODE-READER.png",
  },
  {
    slug: "glare-sensors",
    name: "Glare Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/GLARE-SENSOR.png",
  },
  {
    slug: "fork-sensors",
    name: "Fork Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/FORK-TYPE-SENSOR.png",
  },
  {
    slug: "fixed-mount-barcode-scanners",
    name: "Fixed Mount Barcode Scanners",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/BARCODE-SCANNER.png",
  },
  {
    slug: "fiber-optic-sensors-and-fibers",
    name: "Fiber-Optic Sensors and Fibers",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/FIBER-OPTICAL-SENSOR.png",
  },
  {
    slug: "encoders",
    name: "Encoders",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/ENCODER-SENSOR.png",
  },
  {
    slug: "distance-sensors",
    name: "Distance Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/DISTANCE-SENSOR1.png",
  },
  {
    slug: "cylinder-sensors",
    name: "Cylinder Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/CYLINDER-SENSOR.png",
  },
  {
    slug: "contrast-sensors",
    name: "Contrast Sensors",
    category: "Industrial Sensors",
    parentPath: "/products/sensors",
    image: "/images/sensors/CONTRAST-SENSOR.png",
  },

  // ── PLC (5) ───────────────────────────────────────────────
  {
    slug: "melsec-iq-r-series",
    name: "MELSEC iQ-R Series",
    category: "PLC",
    parentPath: "/products/plc",
    image: "/images/plc/MELSEC-iQ-R-Series.png",
  },
  {
    slug: "melsec-q-series",
    name: "MELSEC-Q Series",
    category: "PLC",
    parentPath: "/products/plc",
    image: "/images/plc/MELSEC-Q-Series-.webp",
  },
  {
    slug: "fx5u-plc",
    name: "FX5U",
    category: "PLC",
    parentPath: "/products/plc",
    image: "/images/plc/FX5U.png",
  },
  {
    slug: "fx5uj-plc-2",
    name: "FX5UJ",
    category: "PLC",
    parentPath: "/products/plc",
    image: "/images/plc/FX5UJ.png",
  },
  {
    slug: "fx5s-plc",
    name: "FX5S",
    category: "PLC",
    parentPath: "/products/plc",
    image: "/images/plc/FX5S.jpg",
  },

  // ── ICONICS (1) ───────────────────────────────────────────
  {
    slug: "genesis64",
    name: "GENESIS64",
    category: "ICONICS",
    parentPath: "/products/iconics",
    image: "/images/iconics/GENESIS64.webp",
  },

  // ── GOT (1) ───────────────────────────────────────────────
  {
    slug: "got2000series",
    name: "GOT2000 Series",
    category: "GOT",
    parentPath: "/products/got",
    image: "/images/got/GOT2000-Series.png",
  },

  // ── FREQUENCY INVERTERS VFD (10) ─────────────────────────
  {
    slug: "fr-cs80-series",
    name: "FR-CS80 Series",
    category: "Frequency Inverters (VFD)",
    parentPath: "/products/frequency-inverter-vfd",
    image: "/images/frequency-inverters/CS80.webp",
  },
  {
    slug: "fr-d700-series",
    name: "FR-D700 Series",
    category: "Frequency Inverters (VFD)",
    parentPath: "/products/frequency-inverter-vfd",
    image: "/images/frequency-inverters/FR-E800.webp",
  },
  {
    slug: "fr-e800-series",
    name: "FR-E800 Series",
    category: "Frequency Inverters (VFD)",
    parentPath: "/products/frequency-inverter-vfd",
    image: "/images/frequency-inverters/FR-E800-2.webp",
  },
  {
    slug: "e800-e-series",
    name: "E800-E Series (Ethernet Communication)",
    category: "Frequency Inverters (VFD)",
    parentPath: "/products/frequency-inverter-vfd",
    image: "/images/frequency-inverters/FR-E800.webp",
  },
  {
    slug: "e800-sce-series",
    name: "E800-SCE Series (Ethernet Safety Communication)",
    category: "Frequency Inverters (VFD)",
    parentPath: "/products/frequency-inverter-vfd",
    image: "/images/frequency-inverters/FR-E800-2.webp",
  },
  {
    slug: "fr-f800-series",
    name: "FR-F800 Series",
    category: "Frequency Inverters (VFD)",
    parentPath: "/products/frequency-inverter-vfd",
    image: "/images/frequency-inverters/FR-F800.webp",
  },
  {
    slug: "fr-f800-e-series",
    name: "FR-F800-E Series",
    category: "Frequency Inverters (VFD)",
    parentPath: "/products/frequency-inverter-vfd",
    image: "/images/frequency-inverters/FR-F800.webp",
  },
  {
    slug: "fr-f846-e-series",
    name: "FR-F846-E Series",
    category: "Frequency Inverters (VFD)",
    parentPath: "/products/frequency-inverter-vfd",
    image: "/images/frequency-inverters/FR-F800.webp",
  },
  {
    slug: "fr-a800-e-series",
    name: "FR-A800-E Series",
    category: "Frequency Inverters (VFD)",
    parentPath: "/products/frequency-inverter-vfd",
    image: "/images/frequency-inverters/FR-A800.webp",
  },
  {
    slug: "fr-a741-regenerative-series",
    name: "FR-A741 Regenerative Series",
    category: "Frequency Inverters (VFD)",
    parentPath: "/products/frequency-inverter-vfd",
    image: "/images/frequency-inverters/FR-A800.webp",
  },

  // ── AC SERVOS (6) ─────────────────────────────────────────
  {
    slug: "melservo-je-servo-drive",
    name: "MR-JE Series Servo Drive",
    category: "AC Servos",
    parentPath: "/products/acservos",
    image: "/images/acservos/MR-JE-Servo-Amplifier.webp",
  },
  {
    slug: "melservo-je-hg-kn-servo-motor",
    name: "HG-KN Series Servo Motors",
    category: "AC Servos",
    parentPath: "/products/acservos",
    image: "/images/acservos/mr_j5_lineup_2.webp",
  },
  {
    slug: "melservo-je-hg-sn-servo-motor",
    name: "HG-SN Series Servo Motors",
    category: "AC Servos",
    parentPath: "/products/acservos",
    image: "/images/acservos/mr_j5_lineup_2.webp",
  },
  {
    slug: "melservo-jet-servo-drive",
    name: "MR-JET Series Servo Drive",
    category: "AC Servos",
    parentPath: "/products/acservos",
    image: "/images/acservos/mr_jet_lineup_1.webp",
  },
  {
    slug: "melservo-jet-hg-kns-servo-motor",
    name: "HG-KNS Series Servo Motors",
    category: "AC Servos",
    parentPath: "/products/acservos",
    image: "/images/acservos/MR-JET_SERVO_MOTOR.webp",
  },
  {
    slug: "melservo-jet-hg-sns-servo-motor",
    name: "HG-SNS Series Servo Motors",
    category: "AC Servos",
    parentPath: "/products/acservos",
    image: "/images/acservos/MR-JET_SERVO_MOTOR.webp",
  },
];

export function getProductsByPath(parentPath: string): Product[] {
  const normalizedPath = parentPath.endsWith("/") ? parentPath.slice(0, -1) : parentPath;
  return products.filter((p) => {
    const pPath = p.parentPath.endsWith("/") ? p.parentPath.slice(0, -1) : p.parentPath;
    return pPath === normalizedPath;
  });
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
