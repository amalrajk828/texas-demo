/* Kit D — Grey: CTA — clean white section, red accent text */
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GreyCta() {
  return (
    <section className="relative py-24" style={{ background: "var(--g-section-b)", borderTop: "1px solid var(--g-border)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[11px] font-bold tracking-[4px] uppercase mb-5" style={{ color: "var(--g-muted)" }}>Get in Touch</p>
        <h2 className="text-[2.6rem] sm:text-[3.2rem] font-black leading-[1.08] tracking-tight mb-5"
          style={{ color: "var(--color-brand-red)" }}>
          Have a project in mind?
        </h2>
        <p className="text-[18px] leading-[1.85] mb-10 max-w-xl mx-auto" style={{ color: "var(--g-muted)" }}>
          Talk to our team about your flow measurement, automation, or inspection requirements.
          ISO 9001:2015 certified · Est. 2008.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contacts/"
            className="inline-flex items-center gap-2 text-white font-bold text-[15px] px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all"
            style={{
              background: "var(--color-brand-red)",
              boxShadow: "0 4px 20px color-mix(in srgb, var(--color-brand-red) 30%, transparent)",
            }}>
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/service/"
            className="inline-flex items-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-xl border hover:-translate-y-0.5 transition-all"
            style={{ color: "var(--g-heading)", borderColor: "var(--g-border)", background: "var(--g-card-bg)" }}>
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
