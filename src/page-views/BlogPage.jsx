import React, { useState } from "react";
import BlogList from "../components/blog/BlogList";
import BlogDetail from "../components/blog/BlogDetail";
import initialPosts from "../data/blogPosts.json";
import { BookOpen } from "lucide-react";

/**
 * Container component for the Blog Section.
 * Handles state for list/detail navigation views, loading data,
 * and managing in-memory comments.
 */
export default function BlogPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPostId, setSelectedPostId] = useState(null);

  // Find currently active post
  const activePost = posts.find((p) => p.id === selectedPostId);

  // Navigation handlers
  const handleViewPost = (id) => {
    setSelectedPostId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add Comment Handler (Container State Mutation)
  const handleAddComment = (postId, newComment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...(post.comments || []), newComment]
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="py-10 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedPostId === null ? (
          /* LIST VIEW */
          <div className="space-y-10 animate-fade-in">
            {/* Header Text */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-[#e7212b] rounded-full text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" /> Company Insights
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b0d26] tracking-tight">
                Our Engineering & Technology Blog
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Stay updated with the latest trends in control systems engineering, custom telemetry configurations, and ergonomic design methodologies.
              </p>
            </div>

            {/* List presentation */}
            <BlogList posts={posts} onReadMore={handleViewPost} />
          </div>
        ) : (
          /* DETAIL VIEW */
          <div className="animate-fade-in">
            <BlogDetail
              post={activePost}
              onBack={handleBackToList}
              onAddComment={handleAddComment}
            />
          </div>
        )}
      </div>
    </div>
  );
}
