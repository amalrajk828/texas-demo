export default function ServiceProcessSteps({
  title,
  steps,
}: {
  title: string;
  steps: { name: string; description: string }[];
}) {
  return (
    <section className="bg-[#f4f5f8] py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-5 h-px bg-[#0891B2]" />
          <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
            Our Process
          </span>
        </div>
        <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
          {title}
        </h2>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.name}
              className="flex gap-5 items-start bg-white rounded-2xl border border-[#e8eaf0] p-6 lg:p-8"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e7212b] flex items-center justify-center">
                <span className="text-white text-sm font-bold">{i + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B0D26] mb-2">
                  {step.name}
                </h3>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
