"use client";

import React, { useEffect, useState } from "react";

// Helper to generate a string of random box-shadows
function generateStars(count: number, maxWidth = 2000, maxHeight = 2000) {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * maxWidth);
    const y = Math.floor(Math.random() * maxHeight);
    shadows.push(`${x}px ${y}px #FFF`);
  }
  return shadows.join(", ");
}

export default function StarfieldBackground() {
  const [stars1, setStars1] = useState("");
  const [stars2, setStars2] = useState("");
  const [stars3, setStars3] = useState("");

  useEffect(() => {
    // Generate star coordinates client-side to prevent SSR mismatch
    setStars1(generateStars(700));
    setStars2(generateStars(200));
    setStars3(generateStars(100));
  }, []);

  return (
    <div 
      className="absolute inset-0 -z-10 overflow-hidden" 
      style={{
        background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
        .animate-star-slow {
          animation: animStar 150s linear infinite;
        }
        .animate-star-mid {
          animation: animStar 100s linear infinite;
        }
        .animate-star-fast {
          animation: animStar 50s linear infinite;
        }
      `}} />

      {/* Layer 1 - Small stars (1px) */}
      {stars1 && (
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute rounded-full animate-star-slow"
            style={{
              width: "1px",
              height: "1px",
              background: "transparent",
              boxShadow: stars1,
            }}
          />
          <div 
            className="absolute rounded-full animate-star-slow"
            style={{
              width: "1px",
              height: "1px",
              background: "transparent",
              boxShadow: stars1,
              top: "2000px",
            }}
          />
        </div>
      )}

      {/* Layer 2 - Medium stars (2px) */}
      {stars2 && (
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute rounded-full animate-star-mid"
            style={{
              width: "2px",
              height: "2px",
              background: "transparent",
              boxShadow: stars2,
            }}
          />
          <div 
            className="absolute rounded-full animate-star-mid"
            style={{
              width: "2px",
              height: "2px",
              background: "transparent",
              boxShadow: stars2,
              top: "2000px",
            }}
          />
        </div>
      )}

      {/* Layer 3 - Large stars (3px) */}
      {stars3 && (
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute rounded-full animate-star-fast"
            style={{
              width: "3px",
              height: "3px",
              background: "transparent",
              boxShadow: stars3,
            }}
          />
          <div 
            className="absolute rounded-full animate-star-fast"
            style={{
              width: "3px",
              height: "3px",
              background: "transparent",
              boxShadow: stars3,
              top: "2000px",
            }}
          />
        </div>
      )}
    </div>
  );
}
