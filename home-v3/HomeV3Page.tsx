"use client";

import "./home-v3-theme.css";
import V3FloatingNavbar from "./components/V3FloatingNavbar";
import V3SideRail from "./components/V3SideRail";
import V3HeroStage from "./components/V3HeroStage";
import V3DisciplinesStage from "./components/V3DisciplinesStage";
import V3SectorsStage from "./components/V3SectorsStage";
import V3SolutionsStage from "./components/V3SolutionsStage";
import V3ProfileStage from "./components/V3ProfileStage";
import V3TestimonialsStage from "./components/V3TestimonialsStage";
import V3RfqStage from "./components/V3RfqStage";
import V3Footer from "./components/V3Footer";

export default function HomeV3Page() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased relative min-h-screen selection:bg-primary selection:text-white">
      {/* Fixed Ambient Glowing Nodes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[540px] h-[540px] rounded-full bg-blob-blue blur-3xl" />
        <div className="absolute top-96 right-10 w-[420px] h-[420px] rounded-full bg-blob-red blur-3xl" />
      </div>

      {/* Floating Pill Dock Header */}
      <V3FloatingNavbar />

      {/* Interactive Right-side Dot Navigation Rail (Stage-Aware) */}
      <V3SideRail />

      {/* Main Content Area */}
      <main className="relative z-10 w-full pt-[74px] min-h-screen bg-transparent">
        <div className="flex flex-col w-full relative">
          {/* Section 1: Hero Stage */}
          <V3HeroStage />

          {/* Section 2: Core Disciplines Stage (Fanned Glass Stack) */}
          <V3DisciplinesStage />

          {/* Section 3: Sector Matrix Stage (Asymmetric Bento Grid) */}
          <V3SectorsStage />

          {/* Section 4: Solutions & OEM Partners Stage */}
          <V3SolutionsStage />

          {/* Section 5: Corporate Infrastructure & Photo Collage Stage */}
          <V3ProfileStage />

          {/* Section 6: Endorsements & Field Reliability Stage */}
          <V3TestimonialsStage />

          {/* Section 7: RFQ Consultation Stage */}
          <V3RfqStage />
        </div>
      </main>

      {/* Deep Obsidian Structural Footer */}
      <V3Footer />
    </div>
  );
}
