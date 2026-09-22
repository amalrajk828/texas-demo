export default function KeyApplications({
  applications,
  variant = "light",
  className = "",
}: {
  applications: string[];
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";

  return (
    <div className={`mt-6 flex flex-wrap items-center justify-center gap-2 ${className}`}>
      <span
        className={`text-[10px] font-semibold tracking-[2px] uppercase ${
          isDark ? "text-[#e7212b]" : "text-[#e7212b]"
        } mr-2`}
      >
        Key Applications:
      </span>
      {applications.map((a) => (
        <span
          key={a}
          className={
            isDark
              ? "rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/70 text-[11.5px] font-medium"
              : "rounded-full bg-[#F8F9FA] border border-[#E8E8F0] px-3 py-1 text-[#555770] text-[12px] font-medium"
          }
        >
          {a}
        </span>
      ))}
    </div>
  );
}
