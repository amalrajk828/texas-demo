"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  TrendingUp,
  Activity,
  Cpu,
  Zap,
  Database,
  Wifi,
  Shield,
  Rocket,
} from "lucide-react";

const categories = [
  {
    Icon: Activity,
    label: "Category 01",
    title: "Predictive Maintenance",
    body: "AI-driven algorithms that forecast equipment health and predict failures before they impact operations.",
    bullets: ["Anomaly Detection", "Vibration Analysis", "RUL Prediction", "Pattern Recognition", "Asset Health"],
    result:
      "Reduce unplanned downtime by up to 50% and optimize spare parts inventory.",
  },
  {
    Icon: TrendingUp,
    label: "Category 02",
    title: "Process Optimization",
    body: "Advanced machine learning models for real-time production tuning and operational efficiency.",
    bullets: [
      "Throughput Maximization",
      "Quality Prediction",
      "Virtual Metrology",
      "Smart Control",
      "Digital Twin",
    ],
    result:
      "Increase yield and stabilize processes with autonomous parameter adjustments.",
  },
  {
    Icon: Shield,
    label: "Category 03",
    title: "Smart Monitoring",
    body: "Holistic view of plant operations with intelligent alert systems and energy management.",
    bullets: [
      "Real-time Energy Analytics",
      "ESG & Carbon Tracking",
      "Intelligent Alerting",
      "Cloud Dashboarding",
    ],
    result:
      "Data-driven decision making for sustainable and efficient facility management.",
  },
];

const coreTech = [
  { Icon: Brain, label: "Deep Learning" },
  { Icon: Cpu, label: "Edge Computing" },
  { Icon: Database, label: "Big Data Analytics" },
  { Icon: Wifi, label: "Industrial IoT" },
];

const outcomes = [
  { num: "50%", label: "Downtime Reduction", desc: "Unplanned downtime cut in half through predictive maintenance" },
  { num: "15%", label: "Yield Improvement", desc: "Average yield gain from autonomous process optimization" },
  { num: "30%", label: "Energy Savings", desc: "Energy consumption reduction via smart monitoring" },
  { num: "24/7", label: "AI Monitoring", desc: "Continuous AI surveillance of all critical assets" },
];

export default function SpaceAiContent() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0D26] overflow-hidden pt-32 pb-20 lg:pb-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(231,33,43,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[350px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(231,33,43,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 mb-8 text-[14px] text-white/50 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span className="text-white/20">/</span>
            <Link href="/solutions/" className="hover:text-white/70 transition-colors">
              Solutions
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">Space AI</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
                <Brain className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <span className="text-[#0891B2] text-[14px] font-semibold tracking-[3px] uppercase">
                Strategic Partner — Industrial AI
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6">
              Space AI —{" "}
              <em className="not-italic text-current">
                Next-Generation AI
              </em>{" "}
              &amp; Machine Learning for Industry
            </h1>

            <p className="text-white/70 text-base sm:text-[16px] leading-relaxed mb-8 max-w-2xl">
              From field devices to enterprise analytics — Space AI brings deep
              learning, edge computing, and big data to your plant floor.
              Reduce unplanned downtime, increase yield, and unlock autonomous
              optimization across oil &amp; gas, manufacturing, and process
              industries.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
              >
                Start a Pilot
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/partners/"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                Our Strategic Partners →
              </Link>
            </div>
          </div>

          {/* Outcomes */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {outcomes.map((o) => (
              <div
                key={o.label}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center"
              >
                <p className="text-2xl font-bold text-[#e7212b] leading-none">
                  {o.num}
                </p>
                <p className="text-[12px] text-white mt-1.5 font-semibold tracking-wide">
                  {o.label}
                </p>
                <p className="text-[10px] text-white/70 mt-1.5 leading-tight">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE TECHNOLOGIES STRIP ═══════════════════════════ */}
      <section className="bg-[#0B0D26] border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <Rocket className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Core Technologies
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1 max-w-3xl">
              {coreTech.map((t) => (
                <div
                  key={t.label}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center gap-2.5 hover:border-[#e7212b]/40 transition-colors"
                >
                  <t.Icon className="w-4 h-4 text-[#e7212b] shrink-0" strokeWidth={1.8} />
                  <span className="text-white/80 text-[12.5px] font-semibold tracking-wide">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ THREE CATEGORIES ══════════════════════════════════ */}
      <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Industrial AI Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-3xl">
              Three categories of AI that{" "}
              <em className="not-italic text-current">
                transform industrial operations
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300"
              >
                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
                      <cat.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-bold text-[#e7212b]/30 tracking-[2.5px]">
                      {cat.label}
                    </span>
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0B0D26] leading-snug mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-[1.75] mb-5">
                    {cat.body}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {cat.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-[13px] text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 border-t border-[#e8eaf0]">
                    <div className="flex items-start gap-2">
                      <Zap
                        className="w-3.5 h-3.5 text-[#e7212b] shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <p className="text-[12.5px] font-semibold text-[#0B0D26] leading-[1.5]">
                        What You Get:{" "}
                        <span className="text-gray-600 font-normal">
                          {cat.result}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS / DARK ═══════════════════════════════ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#0B0D26] overflow-hidden relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-[400px] h-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at right, rgba(231,33,43,0.09) 0%, transparent 70%)",
              }}
            />

            <div className="relative p-10 lg:p-14">
              <div className="text-center mb-12 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <span className="w-5 h-px bg-[#0891B2]" />
                  <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                    How It Works
                  </span>
                  <span className="w-5 h-px bg-[#0891B2]" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-[1.15]">
                  From data to decisions in{" "}
                  <em className="not-italic text-current">three steps</em>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    n: "01",
                    t: "Connect & Ingest",
                    d: "Plug into your SCADA, historian, vibration sensors, and lab systems. Edge or cloud — your choice.",
                  },
                  {
                    n: "02",
                    t: "Learn & Predict",
                    d: "Models train on your data, learning normal behavior and detecting anomalies before failures.",
                  },
                  {
                    n: "03",
                    t: "Recommend & Automate",
                    d: "Operators receive actionable insights; closed-loop control can be enabled for autonomous optimization.",
                  },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-black text-[#e7212b]">
                        {s.n}
                      </span>
                      <div className="flex-1 h-px bg-white/10" />
                    </div>
                    <h3 className="text-white font-bold text-[16px] mb-2">
                      {s.t}
                    </h3>
                    <p className="text-white/70 text-[13.5px] leading-[1.7]">
                      {s.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0D26] border-t-4 border-[#e7212b] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-[22px] mb-1">
                Ready to put AI to work on your plant?
              </p>
              <p className="text-gray-400 text-sm">
                Start with a focused pilot on your highest-value asset — quantify
                ROI in 90 days, then scale across the enterprise.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#e7212b]/20 transition-all duration-200"
            >
              Start a Pilot →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
