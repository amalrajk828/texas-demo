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
      <div className="rounded-lg border border-[#F5821F]/30 bg-[#F5821F]/8 px-4 py-2.5 flex items-center gap-2.5">
        {item.Icon && (
          <item.Icon className="w-4 h-4 text-[#F5821F]" strokeWidth={2} />
        )}
        <span className="text-white text-[12.5px] font-semibold">
          {item.name}
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[#E8E8F0] bg-white px-4 py-2.5 text-center">
      <p className="text-[#1A1A2E] text-[12px] font-bold leading-tight">
        {item.name}
      </p>
      {item.desc && (
        <p className="text-[#555770] text-[10px] mt-0.5">{item.desc}</p>
      )}
    </div>
  );
}
