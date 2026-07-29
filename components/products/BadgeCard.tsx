import type { BadgeItem } from "./types";

export default function BadgeCard({
  item,
  variant = "light",
}: {
  item: BadgeItem;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  if (isDark) {
    return (
      <div className="rounded-lg border border-[#e7212b]/30 bg-[#e7212b]/8 px-4 py-2.5 flex items-center gap-2.5">
        {item.Icon && (
          <item.Icon className="w-4 h-4 text-[#e7212b]" strokeWidth={2} />
        )}
        <span className="text-white text-[13px] font-semibold">
          {item.name}
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-white/[0.12] bg-white/[0.10] backdrop-blur-sm px-4 py-2.5 text-center">
      <p className="text-white text-[13px] font-bold leading-tight">
        {item.name}
      </p>
      {item.desc && (
        <p className="text-white/60 text-[11px] mt-0.5">{item.desc}</p>
      )}
    </div>
  );
}
