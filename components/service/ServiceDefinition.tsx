export default function ServiceDefinition({ definition }: { definition: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4">
      <p className="text-gray-700 text-base leading-relaxed">{definition}</p>
    </div>
  );
}
