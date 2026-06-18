import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard, { type Product } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Industrial Sensors",
  description:
    "SICK industrial sensors for precision detection, safety monitoring, identification, and measurement in ports, mining, automation, and manufacturing environments.",
  alternates: { canonical: "https://texastechserv.com/products/sensors/" },
  openGraph: {
    title: "Industrial Sensors | Texas Technical Services",
    description:
      "SICK sensors engineered for precision, reliability, and performance in the most demanding environments.",
    url: "https://texastechserv.com/products/sensors/",
  },
};

const sensors: Product[] = [
  {
    id: 1,
    name: "Radar Sensors",
    slug: "radar-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/Radar Sensors.png",
    description: "Radar sensors reliably detect objects regardless of harsh environmental conditions, even providing object speed analysis. Essential for collision prevention in ports, gantry cranes, ship-to-shore cranes, and open pit excavators."
  },
  {
    id: 2,
    name: "Photoelectric Sensors",
    slug: "photoelectric-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/Photoelectric Sensors.png",
    description: "SICK photoelectric sensors feature precise optics and SIRIC® and LED technologies, delivering market-leading reliability even under interference. Widely used in automation applications globally."
  },
  {
    id: 3,
    name: "Safety Light-Beam Sensors",
    slug: "safety-light-beam-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/3.-SAFETY-LIGHT-BEAM-SENSORS.png",
    description: "High-reliability safety light-beam sensors for industrial access protection and hazard zone monitoring in demanding environments requiring certified safety performance."
  },
  {
    id: 4,
    name: "Safety Light Curtains",
    slug: "safety-light-curtains",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/4.-SAFETY-LIGHT-CURTAIN.png",
    description: "Dependable and budget-friendly access protection for hazardous points and areas. Available in compact and robust designs for diverse ambient conditions with machine function integration."
  },
  {
    id: 5,
    name: "Safety Distance Sensors",
    slug: "safety-distance-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/5.SAFETY-DISTANCE-SENSOR.png",
    description: "Certified safety distance sensors for reliable presence detection and hazard zone monitoring in industrial automation environments."
  },
  {
    id: 6,
    name: "Safety Laser Scanners",
    slug: "safety-laser-scanners",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/6.SAFETY-LASER-SENSOR.png",
    description: "Advanced safety laser scanners providing 2D area monitoring for personnel protection and mobile robot navigation in industrial settings."
  },
  {
    id: 7,
    name: "Safety Camera Sensors",
    slug: "safety-camera-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/7.-SAFETY-SENSOR-CAMERA.png",
    description: "Vision-based safety camera sensors for intelligent area monitoring, presence detection, and machine safeguarding with high-resolution imaging."
  },
  {
    id: 8,
    name: "RFID",
    slug: "rfid",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/8.RFID_.png",
    description: "Industrial RFID systems for reliable identification, tracking, and data management across manufacturing, logistics, and process automation environments."
  },
  {
    id: 9,
    name: "Non-Contact Motion Sensors",
    slug: "non-contact-motion-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/Non-Contact Motion.png",
    description: "Non-contact motion detection sensors for wear-free, precise speed and position measurement in industrial drive and conveyor systems."
  },
  {
    id: 10,
    name: "Motor Feedback Systems",
    slug: "motor-feedback-systems",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/10.-MOTION-FEEDBACK-SENSOR.png",
    description: "High-resolution motor feedback systems for servo drives, providing accurate position and speed data for precision motion control applications."
  },
  {
    id: 11,
    name: "Mobile Handheld Scanners",
    slug: "mobile-handheld-scanners",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/11.MOBILE-HANDHELD-SCANNER.png",
    description: "Rugged mobile handheld barcode and data matrix scanners for warehouse logistics, manufacturing tracking, and field data capture."
  },
  {
    id: 12,
    name: "Magnetic Sensors",
    slug: "magnetic-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/12.MAGNETIC-SENSOR.png",
    description: "Compact magnetic sensors for reliable cylinder position detection and non-contact switching in pneumatic and hydraulic automation systems."
  },
  {
    id: 13,
    name: "Inductive Proximity Sensors",
    slug: "inductive-proximity-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/INDUCTIVE-SAFETY-SWITCH.png",
    description: "Industry-proven inductive proximity sensors for metal object detection with high switching frequency, flush and non-flush mounting for all automation needs."
  },
  {
    id: 14,
    name: "Image-Based Code Readers",
    slug: "image-based-code-readers",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/IMAGE-BASED-CODE-READER.png",
    description: "Intelligent image-based code readers for 1D/2D barcode, QR code, and data matrix reading in high-speed production and traceability applications."
  },
  {
    id: 15,
    name: "Glare Sensors",
    slug: "glare-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/GLARE-SENSOR.png",
    description: "Specialized glare sensors for detecting shiny, reflective, or transparent surfaces — ideal for glass and foil detection where standard sensors struggle."
  },
  {
    id: 16,
    name: "Fork Sensors",
    slug: "fork-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/FORK-TYPE-SENSOR.png",
    description: "Compact fork sensors with integrated emitter and receiver for reliable detection of small parts, labels, and edges on conveyor and packaging lines."
  },
  {
    id: 17,
    name: "Fixed Mount Barcode Scanners",
    slug: "fixed-mount-barcode-scanners",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/BARCODE-SCANNER.png",
    description: "High-performance fixed mount barcode scanners for automated identification in logistics, conveyor sorting, and production line tracking at high throughputs."
  },
  {
    id: 18,
    name: "Fiber-Optic Sensors and Fibers",
    slug: "fiber-optic-sensors-and-fibers",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/FIBER-OPTICAL-SENSOR.png",
    description: "Optimal for limited installation space or small object detection. Application-specific fiber-optic cables handle extended range, temperature resistance, and flexible mounting."
  },
  {
    id: 19,
    name: "Encoders",
    slug: "encoders",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/ENCODER-SENSOR.png",
    description: "Incremental and absolute encoders for precise angle, position, and speed measurement in motors, drives, and industrial automation systems."
  },
  {
    id: 20,
    name: "Distance Sensors",
    slug: "distance-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/DISTANCE-SENSOR1.png",
    description: "Laser and ultrasonic distance sensors for precise non-contact distance measurement in positioning, level control, and presence detection applications."
  },
  {
    id: 21,
    name: "Cylinder Sensors",
    slug: "cylinder-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/CYLINDER-SENSOR.png",
    description: "Compact cylinder sensors for detecting pneumatic cylinder piston positions, available in T-slot and band mounting for standard and miniature cylinders."
  },
  {
    id: 22,
    name: "Contrast Sensors",
    slug: "contrast-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/CONTRAST-SENSOR.png",
    description: "High-speed contrast sensors for detecting colour and brightness differences on printed marks, labels, and packaging in high-speed web and print applications."
  }
];

export default function SensorsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#F5821F]">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
          }}
        />
        {/* Orange radial glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(245,130,31,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Industrial Sensors</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              SICK · Industrial Sensors
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
            Industrial Sensors
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            SICK offers a comprehensive range of industrial sensors engineered for precision and performance in the most demanding environments.
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            Our Industrial Sensor Range
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5821F] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            We offer a comprehensive range of SICK industrial sensors engineered for precision and performance in the most demanding environments — from ports and mining to automation and manufacturing.
          </p>
        </div>
      </section>

      {/* ── Sensors List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
          <div className="flex flex-col">
            {sensors.map((sensor, index) => (
              <React.Fragment key={sensor.id}>
                <ProductCard product={sensor} category="sensors" />
                {index < sensors.length - 1 && (
                  <div className="border-t border-[#E8E8F0] my-[10px]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#F5821F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-[22px] mb-1">
                Need help selecting the right sensor?
              </p>
              <p className="text-[#A0A8C0] text-sm">
                Our engineers are ready to assist with your application requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#F5821F] hover:bg-[#e07214] text-white font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-[#F5821F]/20 transition-all duration-200"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
