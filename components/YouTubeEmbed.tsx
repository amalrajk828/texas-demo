export default function YouTubeEmbed({ url }: { url: string }) {
  const videoId =
    url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    )?.[1] ?? null;

  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
