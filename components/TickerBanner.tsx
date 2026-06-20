const items = [
  "Flow Measurement", "Industrial Automation", "Inspection & Testing",
  "CEMS Solutions", "Metering Systems", "Custody Transfer", "Plant Automation", "NDT Services",
];

export default function TickerBanner() {
  return (
    <div
      className="border-y border-white/[0.06] py-3 overflow-hidden"
      style={{ background: "var(--color-brand-navy-mid)" }}
    >
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-5 text-[13px] text-white/40 tracking-wider whitespace-nowrap"
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "color-mix(in srgb, var(--color-brand-red) 60%, transparent)" }}
            />
            {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
