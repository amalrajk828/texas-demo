const services = [
  "Flow Measurement", "Industrial Automation", "Inspection & Testing",
  "CEMS Solutions", "Metering Systems", "Custody Transfer", "Plant Automation", "NDT Services",
];

const industries = [
  "Oil & Gas", "Refinery", "Petrochemicals", "LNG",
  "Power Plant", "Water Treatment", "Cement", "Metal & Steel",
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`ticker-row flex w-max ${reverse ? "ticker-row-reverse" : ""}`}
    >
      {doubled.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-4 px-5 text-[13px] font-semibold tracking-wider whitespace-nowrap"
          style={{ color: "rgba(255,255,255,0.50)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "color-mix(in srgb, var(--color-brand-red) 60%, transparent)" }}
          />
          {item.toUpperCase()}
        </span>
      ))}
    </div>
  );
}

export default function TickerBanner() {
  return (
    <div
      className="overflow-hidden"
      style={{ background: "var(--color-brand-navy-mid)" }}
    >
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(229,57,53,0.20), transparent)" }} />

      <div className="py-2.5 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
        <MarqueeRow items={services} />
      </div>

      <div className="py-2.5">
        <MarqueeRow items={industries} reverse />
      </div>

      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(229,57,53,0.20), transparent)" }} />

      <style>{`
        .ticker-row {
          animation: ticker-left 28s linear infinite;
        }
        .ticker-row-reverse {
          animation: ticker-right 32s linear infinite;
        }
        @keyframes ticker-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ticker-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
