import type { Metadata } from "next";
import MagneticParticleHero from "@/components/service/magnetic-particle-inspection-mt/MagneticParticleHero";
import MagneticParticleContent from "@/components/service/magnetic-particle-inspection-mt/MagneticParticleContent";

export const metadata: Metadata = {
  title: "Magnetic Particle Inspection (MT)",
  description:
    "Magnetic Particle Testing (MPT/MPI) for surface and near-surface defect detection in ferromagnetic materials — iron, steel, nickel, and cobalt. Wet fluorescent and colour contrast methods to ASME V, ISO 17638, ASTM E709 in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/magnetic-particle-inspection-mt/" },
  openGraph: {
    title: "Magnetic Particle Inspection (MT) | Texas Technical Services",
    description: "MPI/MPT for surface and near-surface defect detection in ferromagnetic materials. ASME V, ISO 17638. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/magnetic-particle-inspection-mt/",
    images: [{ url: "https://texastechserv.com/og-magnetic-particle.jpg", width: 1200, height: 630, alt: "Magnetic Particle Inspection — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Magnetic Particle Inspection (MT) | Texas Technical Services", description: "MPI for ferromagnetic materials. ASME V, ISO 17638. Kuwait & Dubai." },
  keywords: ["magnetic particle inspection Kuwait", "MPI Kuwait", "MPT Kuwait", "MT NDT Kuwait", "weld MPI Kuwait", "ferromagnetic inspection Kuwait", "ASME V MPI Kuwait", "Texas Technical Services MPI"],
};

export default function MagneticParticlePage() {
  return (
    <>
      <MagneticParticleHero />
      <MagneticParticleContent />
      {/* Contact section — to be added */}
    </>
  );
}
