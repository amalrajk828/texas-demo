import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layout, Sparkles, PlusCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Screen Variations Hub | Demo",
  description: "Browse and preview independent home screen variations and prototypes.",
  robots: { index: false, follow: false },
};

const VARIANTS = [
  {
    id: "home-v1",
    title: "Home V1 — Finalized Design",
    description: "Finalized homepage design, moved from the former Home V5 route.",
    href: "/demo/home-v1/",
    status: "Active",
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    features: [
      "Cinematic HD Silk Ripple Video Background",
      "CSS Green-to-Bronze Duo-Tone Color Grade",
      "Staggered Animated Slide Typography & Progress Bar",
      "Frosted Backdrop-Blur Floating Nav Pill",
    ],
    updatedAt: "Finalized Design",
  },
  {
    id: "home-v2",
    title: "Home V2 — Flow Measurement Hero",
    description: "Hero section replaced with the exact design, layout, and MoltenMetal shader from /service/flow-measurement-solutions/. Rest of the page remains identical.",
    href: "/demo/home-v2/",
    status: "Active",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    features: [
      "Flow Measurement MoltenMetal Shader Hero",
      "Pill Badges, CTAs & Metric Highlight Cards",
      "Partners Marquee & Ticker Banner",
      "Identical Kit D Sections Below Hero",
    ],
    updatedAt: "Flow Hero Variant",
  },
  {
    id: "home-v3",
    title: "Home V3 — Blog Hero & Liquid Gel Blob",
    description: "Hero section matching /blog/ with layered MoltenMetal ember shader, photorealistic 12-point SVG liquid gel blob, and dark glass stat cards.",
    href: "/demo/home-v3/",
    status: "New",
    badgeColor: "bg-[#E53935]/15 text-[#ff6b6b] border-[#E53935]/30",
    features: [
      "Layered MoltenMetal + SVG Liquid Gel Blob",
      "Breathing 12-Point Ambient Wobble & Reach",
      "Blog Hero Eyebrow, CTAs & Glass Stat Cards",
      "Identical Kit D Sections Below Hero",
    ],
    updatedAt: "Blog Hero Variant",
  },
  {
    id: "home-v4",
    title: "Home V4 — Dark Glassy 3D Hero (React Three Fiber)",
    description: "Dark, glassy 3D hero with a rotating glass torus-knot, counter-rotating glowing inner icosahedron, neon blue/pink lighting, and glassmorphic stats.",
    href: "/demo/home-v4/",
    status: "New",
    badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    features: [
      "React Three Fiber 3D Glass Torus-Knot",
      "Counter-Rotating Glowing Neon Wireframe Core",
      "Neon Cyan & Hot Pink Dual Point Lighting & Glow Pulse",
      "Identical Kit D Sections Below Hero",
    ],
    updatedAt: "Glassy 3D Variant",
  },
  {
    id: "home-v6",
    title: "Home V6 — Parallax Scroll & Dual-Video Crossfade Hero",
    description: "Hero featuring scroll-linked parallax translation, receding scale, and soft fade-out, powered by dual-video crossfade looping and unified shared content.",
    href: "/demo/home-v6/",
    status: "New",
    badgeColor: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    features: [
      "Scroll-Linked Parallax Translation & Receding Scale",
      "Dual-Video Seamless Crossfade Loop",
      "Unified Shared Content Source (HERO_CONTENT)",
      "Dark Contrast Scrim & Glassmorphic Stat Cards",
    ],
    updatedAt: "Scroll Parallax Variant",
  },
];

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white font-sans selection:bg-[#E53935] selection:text-white pb-24">
      {/* Top Header */}
      <header className="border-b border-white/[0.08] bg-[#0c0f17]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E53935] flex items-center justify-center font-black text-white text-sm shadow-lg shadow-[#E53935]/30">
              T
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-wide uppercase text-white/90">
                Texas Tech Serv — Demo Lab
              </h1>
              <p className="text-[11px] text-white/40 font-mono">Homepage Design Variations</p>
            </div>
          </div>

          <Link
            href="/"
            className="text-xs font-semibold text-white/60 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02]"
          >
            ← Back to Live Site
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        {/* Eyebrow & Title */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E53935]/10 border border-[#E53935]/20 text-[#E53935] text-xs font-semibold tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" /> Design Sandbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
            Homepage Style Variations
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Test, restyle, and prototype multiple homepage concepts in completely isolated environments without touching or affecting the live production site.
          </p>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {VARIANTS.map((variant) => (
            <div
              key={variant.id}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0e111a] p-6 sm:p-7 hover:border-white/20 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${variant.badgeColor}`}>
                    {variant.status}
                  </span>
                  <span className="text-[11px] text-white/40 font-mono">
                    {variant.updatedAt}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#E53935] transition-colors">
                  {variant.title}
                </h3>
                <p className="text-[13.5px] text-white/60 leading-relaxed mb-6">
                  {variant.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                  <p className="text-[11px] font-bold text-white/40 uppercase tracking-wider">Features Included</p>
                  {variant.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-[12.5px] text-white/75">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E53935] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={variant.href}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-[#E53935] hover:bg-[#c62828] transition-all duration-200 shadow-lg shadow-[#E53935]/25 hover:shadow-[#E53935]/40"
              >
                Launch Preview <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}

          {/* Add Variant Card Placeholder */}
          <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-dashed border-white/15 bg-white/[0.01] p-8 transition-colors hover:border-white/30">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white/40">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1.5">Add Next Variation</h3>
            <p className="text-xs text-white/50 max-w-[220px] mb-4">
              Duplicate <code className="text-[#E53935] bg-[#E53935]/10 px-1.5 py-0.5 rounded">demo/home-v1/</code> to <code className="text-[#E53935] bg-[#E53935]/10 px-1.5 py-0.5 rounded">demo/home-v2/</code> to start a new test.
            </p>
            <span className="text-[11px] font-mono text-white/30 tracking-widest uppercase">
              Ready for v2, v3...
            </span>
          </div>
        </div>

        {/* How to use section */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0c0f17] p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Layout className="w-5 h-5 text-[#E53935]" />
            <h3 className="text-base font-bold text-white">How This Sandbox Works</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-white/60">
            <div>
              <p className="font-bold text-white mb-1">1. Isolated Components</p>
              <p className="text-xs leading-relaxed">
                Each variant inside <code className="text-white/80 font-mono">demo/home-vX/components/</code> is completely decoupled from the live website.
              </p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">2. Zero Production Impact</p>
              <p className="text-xs leading-relaxed">
                Edits, experiments, and styling changes made in <code className="text-white/80 font-mono">demo/</code> will never alter the live <code className="text-white/80 font-mono">/</code> homepage.
              </p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">3. Instant Routing</p>
              <p className="text-xs leading-relaxed">
                Navigate directly to <code className="text-white/80 font-mono">/demo/home-v1/</code> in your browser to preview changes in real time with Next.js HMR.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
