import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard, { type Product } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "AC Servos | AC Servo Drives & Motors",
  description:
    "Explore Mitsubishi Electric's MELSERVO series AC servo drives and motors — including MR-JE and MR-JET systems for precise machine positioning and multi-axis control.",
  alternates: { canonical: "https://texastechserv.com/products/acservos/" },
  openGraph: {
    title: "Mitsubishi Electric AC Servos | Texas Technical Services",
    description:
      "Mitsubishi Electric's MELSERVO series AC servo drives and motors delivering precise high-performance positioning.",
    url: "https://texastechserv.com/products/acservos/",
  },
};

const acServosData: (Product & { series: string })[] = [
  {
    id: 1,
    name: "MR-JE Series Servo Drive",
    slug: "melservo-je-servo-drive",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JE Series",
    image: "/images/acservos/MR-JE-Servo-Amplifier.webp",
    description: "The MR-JE Series is Mitsubishi Electric's compact and cost-effective AC servo drive platform designed for basic positioning, speed, and torque control in small to mid-size machines. It provides reliable servo performance in a simple, easy-to-integrate design, making it ideal for OEM equipment and light automation systems."
  },
  {
    id: 2,
    name: "HG-KN Series Servo Motors",
    slug: "melservo-je-hg-kn-servo-motor",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JE Series",
    image: "/images/acservos/mr_j5_lineup_2.webp",
    description: "The HG-KN Series is Mitsubishi Electric's compact AC servo motor range designed for high-response, precise motion control in small to medium-size machines. These motors are optimized for use with MR-JE and MR-J4 servo amplifiers, delivering smooth motion, high speed, and accurate positioning in a space-saving design."
  },
  {
    id: 3,
    name: "HG-SN Series Servo Motors",
    slug: "melservo-je-hg-sn-servo-motor",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JE Series",
    image: "/images/acservos/mr_j5_lineup_2.webp",
    description: "The HG-SN Series is Mitsubishi Electric's medium-capacity AC servo motor range designed for high-torque, high-accuracy motion control in industrial and OEM machinery. These motors are optimized for use with MR-JE servo amplifiers, delivering stable speed, strong torque, and precise positioning in a robust industrial design."
  },
  {
    id: 4,
    name: "MR-JET Series Servo Drive",
    slug: "melservo-jet-servo-drive",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JET Series",
    image: "/images/acservos/mr_jet_lineup_1.webp",
    description: "The MR-JET Series is Mitsubishi Electric's EtherCAT-based servo drive platform designed for high-speed, synchronized, multi-axis motion control in modern automation systems. It provides real-time networked motion, advanced control modes, and compact hardware, making it ideal for packaging lines, robotics, conveyors, and coordinated machine axes. MR-JET covers a power range of 100 W to 1 kW and supports EtherCAT, CC-Link IE Field Basic, and CC-Link IE Field TSN depending on model."
  },
  {
    id: 5,
    name: "HG-KNS Series Servo Motors",
    slug: "melservo-jet-hg-kns-servo-motor",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JET Series",
    image: "/images/acservos/MR-JET_SERVO_MOTOR.webp",
    description: "The HG-KNS Series is Mitsubishi Electric's compact, high-response AC servo motor range designed specifically for EtherCAT-based MR-JET servo systems. These motors deliver fast acceleration, smooth motion, and precise positioning, making them ideal for high-speed, multi-axis OEM machines."
  },
  {
    id: 6,
    name: "HG-SNS Series Servo Motors",
    slug: "melservo-jet-hg-sns-servo-motor",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JET Series",
    image: "/images/acservos/MR-JET_SERVO_MOTOR.webp",
    description: "The HG-SNS Series is Mitsubishi Electric's medium- to high-capacity AC servo motor range developed for EtherCAT-based MR-JET servo systems. It provides high torque, smooth speed control, and precise positioning, making it ideal for synchronized multi-axis industrial machines."
  }
];

export default function AcServosPage() {
  // Group products by series
  const jeSeriesProducts = acServosData.filter((p) => p.series === "MELSERVO-JE Series");
  const jetSeriesProducts = acServosData.filter((p) => p.series === "MELSERVO-JET Series");

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
            <span className="text-white">AC Servos</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#F5821F]" />
            <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
              Mitsubishi Electric · Motion Control
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-none mb-2">
            AC Servos
          </h1>
          <p className="text-white/60 text-base max-w-xl font-medium">
            AC Servo Drives & Motors — Mitsubishi Electric
          </p>
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────── */}
      <section className="bg-white py-12">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#1A1A2E] text-[28px] font-bold">
            AC Servo Drives & Motors
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5821F] mx-auto mt-3 mb-4" />
          <p className="text-[#555770] text-base leading-relaxed">
            Mitsubishi Electric&apos;s MELSERVO series delivers precise, high-performance AC servo solutions for OEM machines and industrial automation — from compact cost-effective MR-JE drives for basic positioning to advanced EtherCAT-based MR-JET systems for synchronized multi-axis motion control.
          </p>
        </div>
      </section>

      {/* ── Products List Section ─────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E8E8F0] border-b border-[#E8E8F0]">
        <div className="max-w-[1100px] mx-auto px-10 pb-[80px]">
          <div className="flex flex-col">
            
            {/* ── MELSERVO-JE Group ── */}
            <div className="bg-[#FFF8F3] border-l-4 border-[#F5821F] py-3 px-6 mt-8 mb-4 flex items-center gap-4 shadow-sm rounded-[4px]">
              <span className="text-[#1A1A2E] font-bold text-base font-sans leading-none uppercase tracking-wider">
                MELSERVO-JE Series
              </span>
              <div className="h-px bg-[#F5821F]/20 flex-1" />
            </div>
            
            <div className="flex flex-col gap-6">
              {jeSeriesProducts.map((servo) => (
                <ProductCard key={servo.slug} product={servo} category="acservos" />
              ))}
            </div>

            {/* ── MELSERVO-JET Group ── */}
            <div className="bg-[#FFF8F3] border-l-4 border-[#F5821F] py-3 px-6 mt-12 mb-4 flex items-center gap-4 shadow-sm rounded-[4px]">
              <span className="text-[#1A1A2E] font-bold text-base font-sans leading-none uppercase tracking-wider">
                MELSERVO-JET Series
              </span>
              <div className="h-px bg-[#F5821F]/20 flex-1" />
            </div>

            <div className="flex flex-col gap-6">
              {jetSeriesProducts.map((servo) => (
                <ProductCard key={servo.slug} product={servo} category="acservos" />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative bg-[#1A1A2E] border-t-4 border-[#F5821F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-[22px] mb-1">
                Need help selecting the right servo system?
              </h3>
              <p className="text-[#A0A8C0] text-sm">
                Our motion control specialists can help you select, size, and configure the right Mitsubishi Electric servo drive and motor combination for your machine.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#F5821F] hover:bg-[#e07214] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#F5821F]/20 transition-all duration-200"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
