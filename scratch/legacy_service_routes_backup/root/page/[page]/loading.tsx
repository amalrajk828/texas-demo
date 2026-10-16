export default function ServicesPageLoading() {
  return (
    <section className="relative bg-[#f4f5f8] py-20 overflow-hidden min-h-screen">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-md mx-auto mb-12">
          <div className="h-12 bg-gray-200 rounded-xl animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-white border border-[#e8eaf0] overflow-hidden">
              <div className="aspect-[16/9] bg-gray-200 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
