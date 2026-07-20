import React, { useState } from "react";
import { ArrowLeft, Calendar, MessageSquare, Send, User } from "lucide-react";
import Button from "../common/Button";

/**
 * Presentational component displaying a detailed full view of a single blog post.
 * Includes interactive comment listing and submission.
 * 
 * Props:
 * - post: The single blog post object containing comments
 * - onBack: Callback function to go back to the listing view
 * - onAddComment: Callback when a new comment is submitted, receives (postId, commentObj)
 */
export default function BlogDetail({ post, onBack, onAddComment }) {
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!post) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Post not found.</p>
        <Button onClick={onBack} className="mt-4" variant="outline">
          Back to Blogs
        </Button>
      </div>
    );
  }

  const { id, title, content, image, date, author, readTime, comments = [] } = post;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) {
      setErrorMessage("Please fill out both your name and comment message.");
      return;
    }

    setErrorMessage("");
    const newComment = {
      id: Date.now().toString(),
      author: commentName.trim(),
      text: commentText.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })
    };

    if (onAddComment) {
      onAddComment(id, newComment);
    }

    // Reset fields
    setCommentText("");
    setCommentName("");
  };

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
      {/* Back button and Meta header banner */}
      <div className="p-6 sm:p-8 border-b border-gray-50 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b0d26] hover:text-[#e7212b] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Articles</span>
        </button>
        <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full uppercase tracking-wider">
          {readTime}
        </span>
      </div>

      {/* Hero Header Area */}
      <div className="px-6 pt-6 sm:px-10 sm:pt-10">
        <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mb-4 font-medium">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gray-400" />
            {date}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
          <span className="text-[#e7212b] font-semibold">Industrial Tech Insights</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b0d26] leading-tight mb-6">
          {title}
        </h1>

        {/* Author details */}
        <div className="flex items-center gap-3.5 pb-8 border-b border-gray-100">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-gray-100"
          />
          <div>
            <p className="text-sm sm:text-base font-bold text-gray-800 leading-tight">{author.name}</p>
            <p className="text-xs text-gray-400">Technical Writer / Engineering Consultant</p>
          </div>
        </div>
      </div>

      {/* Featured Banner Image */}
      <div className="relative aspect-[21/9] w-full bg-gray-50 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Blog Post Content Body */}
      <div className="px-6 py-8 sm:px-10 sm:py-12">
        <div 
          className="prose prose-red max-w-none text-gray-600 text-sm sm:text-base leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* Comment Section Panel */}
      <div className="bg-gray-50/50 border-t border-gray-100 px-6 py-10 sm:px-10 sm:py-12">
        <div className="max-w-2xl">
          <h3 className="text-lg sm:text-xl font-bold text-[#0b0d26] mb-8 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#e7212b]" />
            Comments ({comments.length})
          </h3>

          {/* Comments List */}
          {comments.length === 0 ? (
            <p className="text-sm text-gray-400 italic mb-8">No comments yet. Be the first to share your thoughts!</p>
          ) : (
            <div className="space-y-6 mb-10">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4 bg-white p-5 rounded-2xl border border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-red-50 text-[#e7212b] flex items-center justify-center font-bold text-sm uppercase shrink-0">
                    {comment.author.substring(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                      <h4 className="text-sm font-bold text-[#0b0d26]">{comment.author}</h4>
                      <span className="text-[10px] font-semibold text-gray-400">{comment.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Comment Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100">
            <h4 className="text-sm font-bold text-[#0b0d26] uppercase tracking-wider mb-4">Leave a Comment</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <p className="text-xs text-red-500 font-medium">{errorMessage}</p>
              )}
              
              <div>
                <label htmlFor="commentName" className="block text-xs font-bold text-gray-500 uppercase mb-1">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    id="commentName"
                    type="text"
                    placeholder="Enter your name"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:border-[#e7212b] focus:ring-1 focus:ring-[#e7212b] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="commentText" className="block text-xs font-bold text-gray-500 uppercase mb-1">Your Message</label>
                <textarea
                  id="commentText"
                  rows="4"
                  placeholder="Share your thoughts or ask a question..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full p-4 text-sm border border-gray-200 rounded-xl focus:border-[#e7212b] focus:ring-1 focus:ring-[#e7212b] outline-none transition-colors"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                icon={Send}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Post Comment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}
