import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LightCta() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "var(--color-brand-red)" }}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-white/40" />
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/80">Get in Touch</span>
          <span className="w-8 h-px bg-white/40" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight">
          Have a project in mind?
        </h2>
        <p className="text-white/75 text-[15px] mb-9 max-w-md mx-auto leading-relaxed">
          Talk to our team about your requirements. Kuwait and Dubai offices ready to help.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contacts/"
            className="inline-flex items-center gap-2 bg-white font-bold px-8 py-3.5 rounded-lg text-[14px] transition-all hover:-translate-y-0.5 shadow-lg"
            style={{ color: "var(--color-brand-red)" }}>
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/service/"
            className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-lg text-[14px] transition-all">
            Our Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
