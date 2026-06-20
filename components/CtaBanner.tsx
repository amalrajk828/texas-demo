import { ArrowRight } from "lucide-react";
import { ThemeCTALink } from "@/components/ThemeButton";

export default function CtaBanner() {
  return (
    <section className="py-20" style={{ background: "var(--color-brand-navy)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span
            className="w-8 h-px"
            style={{ background: "color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }}
          />
          <span
            className="text-[11px] font-semibold tracking-[2.5px] uppercase"
            style={{ color: "var(--color-brand-red)" }}
          >
            Get in touch
          </span>
          <span
            className="w-8 h-px"
            style={{ background: "color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }}
          />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Have a project in mind?
        </h2>
        <p className="text-white/50 text-[15px] mb-8 max-w-md mx-auto">
          Talk to our team about your requirements. Kuwait and Dubai offices ready to help.
        </p>
        <ThemeCTALink href="/contacts/">
          Contact Us <ArrowRight className="w-4 h-4" />
        </ThemeCTALink>
      </div>
    </section>
  );
}
