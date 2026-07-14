/* Kit B — Mid: CTA with diagonal stripe pattern and darker overlay */
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MidCta() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "var(--color-brand-red)" }}>
      {/* Diagonal stripe */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "repeating-linear-gradient(-55deg,white 0px,white 1px,transparent 1px,transparent 18px)" }} />
      {/* Dark bottom vignette */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 60%)" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[11px] font-bold tracking-[4px] uppercase text-white/60 mb-4">Get in Touch</p>
        <h2 className="text-[2.4rem] sm:text-[3rem] font-black text-white leading-[1.1] tracking-tight mb-6">
          Have a project in mind?
        </h2>
        <p className="text-[18px] text-white/75 leading-[1.85] mb-10 max-w-xl mx-auto">
          Talk to our team about your flow measurement, automation, or inspection requirements.
          ISO 9001:2015 certified · Est. 2008.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contacts/" className="inline-flex items-center gap-2 bg-white font-bold text-[16px] px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all shadow-xl"
            style={{ color: "var(--color-brand-red)" }}>
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/services/" className="inline-flex items-center gap-2 font-semibold text-[16px] px-8 py-4 rounded-xl border border-white/30 text-white hover:border-white/60 transition-all backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.10)" }}>
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
