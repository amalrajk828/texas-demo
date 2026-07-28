import type { BigCardItem } from "./types";

export default function BigCard({ item }: { item: BigCardItem }) {
  const isBordered = item.variant === "bordered";
  const isDark = !isBordered;

  return (
    <div
      className={
        isBordered
          ? "rounded-2xl border-2 border-[#1A1A2E] p-7 flex flex-col"
          : "rounded-xl border border-white/10 bg-white/[0.03] p-6 flex flex-col"
      }
    >
      {item.Icon && item.title && (
        <div className="flex items-center gap-2 mb-4">
          <item.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
          <h3
            className={`text-[18px] font-bold ${
              isDark ? "text-white" : "text-[#1A1A2E]"
            }`}
          >
            {item.title}
          </h3>
        </div>
      )}
      {!item.Icon && item.title && (
        <h3
          className={`text-[18px] font-bold mb-2 ${
            isDark ? "text-white" : "text-[#1A1A2E]"
          }`}
        >
          {item.title}
        </h3>
      )}
      {item.subtitle && (
        <p
          className={`text-[11px] font-semibold tracking-wide uppercase mb-4 ${
            isDark ? "text-white/55" : "text-[#e7212b]"
          }`}
        >
          {item.subtitle}
        </p>
      )}

      {item.items && item.items.length > 0 && (
        <ul
          className={`space-y-2.5 text-[13px] leading-relaxed ${
            isDark ? "text-white/65" : "text-[#555770]"
          }`}
        >
          {item.items.map((it) => {
            const isObj = typeof it !== "string";
            const label = isObj ? it.label : it;
            const desc = isObj ? it.desc : undefined;
            const IconEl = isObj ? it.Icon : undefined;
            return (
              <li key={isObj ? it.label : it} className="flex items-start gap-2">
                {IconEl ? (
                  <IconEl
                    className="w-4 h-4 text-[#e7212b] shrink-0 mt-0.5"
                    strokeWidth={1.8}
                  />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0 mt-2" />
                )}
                {desc ? (
                  <div>
                    <p
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-[#1A1A2E]"
                      }`}
                    >
                      {label}
                    </p>
                    <p
                      className={
                        isDark ? "text-white/55 text-[12.5px]" : "text-[#555770] text-[12.5px]"
                      }
                    >
                      {desc}
                    </p>
                  </div>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
