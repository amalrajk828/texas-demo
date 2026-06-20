const items = [
  "Flow Measurement", "Industrial Automation", "Inspection & Testing",
  "CEMS Solutions", "Metering Systems", "Custody Transfer", "Plant Automation", "NDT Services",
];

export default function LightTicker() {
  return (
    <div className="border-y overflow-hidden py-3" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-5 text-[12px] tracking-[2px] whitespace-nowrap font-semibold"
            style={{ color: "var(--color-text-muted)" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-red)" }} />
            {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
