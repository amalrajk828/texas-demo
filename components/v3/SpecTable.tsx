import React from "react";

export interface SpecRow {
  parameter?: string;
  label?: string;
  value: string;
  notes?: string;
}

interface SpecTableProps {
  headers?: { parameter?: string; value?: string; notes?: string };
  rows: SpecRow[];
  caption?: string;
  className?: string;
}

/**
 * Standard SpecTable component matching Home V3 Technical Specifications & Turnkey Solutions panel:
 * - Rounded container (rounded-[20px])
 * - Uppercase small column headers with subtle borders
 * - Responsive horizontal scroll container
 */
export default function SpecTable({
  headers = { parameter: "Parameter", value: "Specification", notes: "Compliance / Standard" },
  rows,
  caption,
  className = "",
}: SpecTableProps) {
  const hasNotes = rows.some((r) => r.notes);

  return (
    <div
      className={`rounded-[20px] bg-white/80 backdrop-blur-md border border-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] overflow-hidden ${className}`}
    >
      {caption && (
        <div
          className="px-6 py-4 bg-black/[0.02] border-b border-black/[0.06] text-[13px] font-bold uppercase tracking-wider"
          style={{ color: "var(--brand-action, #8a302f)" }}
        >
          {caption}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-[14px]">
          <thead>
            <tr className="border-none" style={{ backgroundColor: "var(--brand-action, #8a302f)" }}>
              <th
                className="py-3.5 px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-white"
                style={{ backgroundColor: "var(--brand-action, #8a302f)" }}
              >
                {headers.parameter}
              </th>
              <th
                className="py-3.5 px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-white"
                style={{ backgroundColor: "var(--brand-action, #8a302f)" }}
              >
                {headers.value}
              </th>
              {hasNotes && (
                <th
                  className="py-3.5 px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-white"
                  style={{ backgroundColor: "var(--brand-action, #8a302f)" }}
                >
                  {headers.notes}
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-black/[0.05]">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-black/[0.02] transition-colors"
              >
                <td className="py-3.5 px-6 font-semibold text-[#1a1a1a]">
                  {row.parameter || row.label}
                </td>
                <td className="py-3.5 px-6 text-[#595956]">
                  {row.value}
                </td>
                {hasNotes && (
                  <td className="py-3.5 px-6 text-[13px] text-[#595956]">
                    {row.notes || "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
