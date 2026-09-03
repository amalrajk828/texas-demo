import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { getCategoryColor } from "../../utils/categoryColor";

/**
 * FeaturedArticle
 * Randomly selects one post from the posts array on each page load.
 * The selection is stable during re-renders (useState lazy initializer)
 * but changes on every full page reload/refresh.
 *
 * Props:
 * - posts: full array of blog post objects
 * - onReadMore: callback(id) to navigate to the detail view
 */
export default function FeaturedArticle({ posts = [], onReadMore }) {
  // Lazy initializer runs once on mount — stable during re-renders,
  // new random post on every page load.
  const [post] = useState(() => {
    if (!posts || posts.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * posts.length);
    return posts[randomIndex];
  });

  if (!post) return null;

  const { id, title, excerpt, image, date, author, readTime, category } = post;

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-7">
          <span className="w-4 h-px bg-[#0891B2]" />
          <span className="text-[#0891B2] text-[10.5px] font-bold tracking-[3.5px] uppercase">
            Featured Article
          </span>
        </div>

        {/* Card */}
        <div
          onClick={() => onReadMore && onReadMore(id)}
          className="group grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
        >
          {/* Left — image */}
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            {/* Category badge */}
            {category && (
              <span className={`absolute top-4 left-4 z-10 text-[10px] font-bold uppercase tracking-[1.5px] px-3 py-1.5 rounded-full ${getCategoryColor(category)}`}>
                {category}
              </span>
            )}
          </div>

          {/* Right — content */}
          <div className="flex flex-col justify-between p-8 sm:p-10 bg-white">
            <div>
              <h2 className="text-[#0B0D26] text-2xl sm:text-[1.75rem] font-black leading-tight mb-4 group-hover:text-[#e7212b] transition-colors duration-300">
                {title}
              </h2>
              <p className="text-gray-500 text-[14.5px] leading-[1.8] line-clamp-4 mb-6">
                {excerpt}
              </p>

              {/* Divider */}
              <hr className="border-gray-100 mb-5" />

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 text-[12px] text-gray-400 font-medium">
                <span className="flex items-center gap-1.5 text-[#0B0D26] font-bold uppercase tracking-wide text-[11px]">
                  <User className="w-3.5 h-3.5" />
                  {author?.name || "TTS Editorial"}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#e7212b]" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#e7212b]" />
                  {readTime}
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <span className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white text-[13px] font-bold px-6 py-3 rounded-full transition-colors duration-200">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
