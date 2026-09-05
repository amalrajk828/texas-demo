"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import BlogPagination from "./BlogPagination";

const POSTS_PER_PAGE = 6;

export default function BlogGrid({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const isFirstRender = React.useRef(true);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const scrollToSection = () => {
    const grid = document.getElementById("blog-section");
    grid?.querySelectorAll(".fade-up:not(.visible)").forEach((el) => el.classList.add("visible"));
    const y = (grid?.getBoundingClientRect().top ?? 0) + window.scrollY - 100;
    if (window.lenis) {
      window.lenis.scrollTo(y, { duration: 1.2 });
    } else {
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (page === currentPage) {
      scrollToSection();
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToSection();
  }, [currentPage]);

  return (
    <div>
      <div id="blog-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post, index) => {
          const mappedPost = {
            name: post.title,
            slug: post.slug,
            image: post.image,
            description: post.description,
            category: post.category,
            brand: post.pillar,
            date: post.date,
            readTime: post.readTime,
          };
          return (
            <ProductCard
              key={post.slug}
              product={mappedPost}
              iconName={post.icon}
              readMoreText="Read Article"
              href={`/blog/${post.slug}/`}
              priority={index < 3}
              badgeClassName="bg-white/80 text-[#0891B2] border-[#e7212b]/20 backdrop-blur-md px-2.5 py-1 rounded-full border text-[11px] font-medium tracking-[1.5px] uppercase"
            />
          );
        })}
      </div>

      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
