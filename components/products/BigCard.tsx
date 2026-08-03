import type { BigCardItem } from "./types";

export default function BigCard({ item }: { item: BigCardItem }) {
  const isBordered = item.variant === "bordered";
  const isDark = !isBordered;

  return (
    <div
      className={
        isBordered
          ? "relative rounded-2xl bg-white/[0.10] backdrop-blur-xl border border-white/[0.12] p-7 flex flex-col shadow-[0_4px_32px_rgba(0,0,0,0.35)]"
          : "relative rounded-xl border border-white/[0.12] bg-white/[0.10] backdrop-blur-xl p-6 flex flex-col shadow-[0_4px_32px_rgba(0,0,0,0.35)]"
      }
    >
      {item.Icon && item.title && (
        <div className="flex items-center gap-2 mb-4">
          <item.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
          <h3
            className={`text-[19px] font-bold ${
              isDark ? "text-white" : "text-white"
            }`}
          >
            {item.title}
          </h3>
        </div>
      )}
      {!item.Icon && item.title && (
        <h3
          className={`text-[19px] font-bold mb-2 ${
            isDark ? "text-white" : "text-white"
          }`}
        >
          {item.title}
        </h3>
      )}
      {item.subtitle && (
        <p
          className={`text-[12px] font-semibold tracking-wide uppercase mb-4 ${
            isDark ? "text-white/65" : "text-[#e7212b]"
          }`}
        >
          {item.subtitle}
        </p>
      )}

      {item.items && item.items.length > 0 && (
        <ul
          className={`space-y-2.5 text-[14px] leading-relaxed ${
            isDark ? "text-white/70" : "text-white/70"
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
                        isDark ? "text-white" : "text-white"
                      }`}
                    >
                      {label}
                    </p>
                    <p
                      className={
                        isDark ? "text-white/60 text-[13px]" : "text-white/60 text-[13px]"
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
