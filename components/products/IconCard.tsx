import type { IconCardItem, IconCardVariant } from "./types";

export default function IconCard({
  item,
  variant = "light",
}: {
  item: IconCardItem;
  variant?: IconCardVariant;
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={
        isDark
          ? "relative rounded-xl border border-white/[0.12] bg-white/[0.10] backdrop-blur-xl p-5 hover:border-[#e7212b]/40 transition-all duration-500 shadow-[0_4px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_40px_rgba(231,33,43,0.12)]"
          : "relative rounded-xl bg-white/[0.10] backdrop-blur-xl border border-white/[0.12] p-5 hover:border-[#e7212b]/40 transition-all duration-500 shadow-[0_4px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_40px_rgba(231,33,43,0.12)]"
      }
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl overflow-hidden" />
      <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.16) 0%, transparent 70%)" }}
      />
      {item.Icon && (
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
            isDark ? "bg-[#e7212b]/10" : "bg-[#e7212b]/10"
          }`}
        >
          <item.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
        </div>
      )}
      <h3
        className={`text-[16px] font-bold leading-tight mb-2 ${
          isDark ? "text-white" : "text-white"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`text-[13px] leading-relaxed ${
          isDark ? "text-white/70" : "text-white/70"
        }`}
      >
        {item.body}
      </p>
    </div>
  );
}
