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
          className="inline-flex items-center gap-4 px-6 text-[12px] font-mono font-medium tracking-[0.15em] uppercase whitespace-nowrap text-[#e9eaef]/80"
        >
          {/* Small square red bullet */}
          <span
            className="w-[5px] h-[5px] flex-shrink-0 bg-[var(--accent)]"
            style={{ borderRadius: 0 }}
          />
          {item}
        </span>
      ))}
    </div>
  );
}

export default function TickerBanner() {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--bg-alt, #070503)",
        borderBottom: "1px solid var(--border-default, rgba(255, 255, 255, 0.08))",
      }}
    >
      <div className="py-3 border-b" style={{ borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))" }}>
        <MarqueeRow items={services} />
      </div>

      <div className="py-3">
        <MarqueeRow items={industries} reverse />
      </div>

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
