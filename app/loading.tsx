export default function RootLoading() {
  return (
    <div className="fixed inset-0 bg-[#000000] blueprint-grid blueprint-dot-grid flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[#e7212b] border-t-transparent rounded-full animate-spin" />
        <p className="text-white/40 text-sm">Loading...</p>
      </div>
    </div>
  );
}
