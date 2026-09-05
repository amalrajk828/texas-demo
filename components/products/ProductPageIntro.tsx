export default function ProductPageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-[#0B0D26] py-12">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-white text-[30px] font-bold">
          {title}
        </h2>
        <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
        <p className="text-white/70 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
