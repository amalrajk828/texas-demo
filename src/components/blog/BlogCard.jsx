import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

/**
 * Presentational component for displaying a preview card of a blog post.
 * 
 * Props:
 * - post: Object containing { id, title, excerpt, image, date, author: { name, avatar }, readTime }
 * - onReadMore: Callback when clicking to view details, receives the post ID
 */
export default function BlogCard({ post, onReadMore }) {
  if (!post) return null;

  const { id, title, excerpt, image, date, author, readTime } = post;

  return (
    <article 
      onClick={() => onReadMore && onReadMore(id)}
      className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-500 cursor-pointer h-full"
    >
      {/* Featured Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Read Time Tag */}
        {readTime && (
          <span className="absolute top-4 right-4 z-10 px-2.5 py-1 text-[10px] font-semibold text-white bg-black/60 backdrop-blur-md rounded-full tracking-wide">
            {readTime}
          </span>
        )}
      </div>

      {/* Body Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Date & Metadata */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-medium">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gray-300" />
            {date}
          </span>
          {readTime && <span className="w-1 h-1 rounded-full bg-gray-200" />}
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gray-300" />
            Industrial Tech
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#0b0d26] group-hover:text-[#e7212b] transition-colors duration-300 line-clamp-2 leading-snug mb-3">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
          {excerpt}
        </p>

        {/* Footer: Author & Read More Link */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <div className="flex items-center gap-2.5">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-7 h-7 rounded-full object-cover ring-2 ring-gray-100"
            />
            <span className="text-xs font-semibold text-gray-700">{author.name}</span>
          </div>

          <span className="inline-flex items-center gap-1 text-[#e7212b] text-xs font-semibold group-hover:gap-2 transition-all duration-300">
            Read Article
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
