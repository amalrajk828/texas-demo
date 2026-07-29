export default function ProductPageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-[#1A1A2E] text-[28px] font-bold">
          {title}
        </h2>
        <div className="w-[60px] h-[3px] bg-[#e7212b] mx-auto mt-3 mb-4" />
        <p className="text-[#555770] text-base leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
