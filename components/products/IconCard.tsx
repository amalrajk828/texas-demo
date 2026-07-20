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
          ? "rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#F5821F]/40 transition-colors"
          : "rounded-xl bg-white border border-[#E8E8F0] p-5 hover:border-[#F5821F]/30 hover:shadow-lg transition-all"
      }
    >
      {item.Icon && (
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
            isDark ? "bg-[#F5821F]/10" : "bg-[#F5821F]/10"
          }`}
        >
          <item.Icon className="w-5 h-5 text-[#F5821F]" strokeWidth={1.8} />
        </div>
      )}
      <h3
        className={`text-[15px] font-bold leading-tight mb-2 ${
          isDark ? "text-white" : "text-[#1A1A2E]"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`text-[12.5px] leading-relaxed ${
          isDark ? "text-white/55" : "text-[#555770]"
        }`}
      >
        {item.body}
      </p>
    </div>
  );
}
