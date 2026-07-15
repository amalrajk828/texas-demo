import React from "react";
import BlogCard from "./BlogCard";
import { BookOpen } from "lucide-react";

/**
 * Presentational component to render a grid list of Blog Cards.
 * 
 * Props:
 * - posts: Array of blog post objects
 * - onReadMore: Callback function when a post card is clicked
 */
export default function BlogList({ posts = [], onReadMore }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#e7212b] mb-4">
          <BookOpen className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#0b0d26]">No Articles Found</h3>
        <p className="text-gray-500 text-sm mt-1 max-w-xs mx-auto">
          We couldn't find any blog posts matching your search or criteria. Please check back later!
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Blog Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post) => (
          <div key={post.id} className="h-full">
            <BlogCard post={post} onReadMore={onReadMore} />
          </div>
        ))}
      </div>
    </div>
  );
}
