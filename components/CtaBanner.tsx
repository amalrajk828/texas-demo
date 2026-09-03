import { ArrowRight } from "lucide-react";
import { ThemeCTALink } from "@/components/ThemeButton";

export default function CtaBanner() {
  return (
    <section className="py-20" style={{ background: "var(--color-brand-navy)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2.5 mb-4">
          <span
            className="w-5 h-px"
            style={{ background: "#0891B2" }}
          />
          <span
            className="text-[11px] font-semibold tracking-[2.5px] uppercase"
            style={{ color: "#0891B2" }}
          >
            Get in touch
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 max-w-2xl">
          Have a project in mind?
        </h2>
        <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
          Talk to our team about your requirements. Kuwait and Dubai offices ready to help.
        </p>
        <ThemeCTALink href="/contacts/">
          Contact Us <ArrowRight className="w-4 h-4" />
        </ThemeCTALink>
      </div>
    </section>
  );
}
