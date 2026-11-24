"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Section, Container, CardGrid } from "@/components/v3";

const testimonials = [
  {
    text: "The dedication that Texas Technical Services Co. (TTS) shows to understanding our unique needs sets them apart. Their tailored solutions and unwavering support have elevated our operations to new heights.",
    name: "Peter John",
    role: "Flow Specialist",
    avatar: "/about/testimonial-peter.jpg",
  },
  {
    text: "Reliability and accuracy are paramount in our industry. Texas Technical Services Co. (TTS) has consistently delivered on both fronts. Their dedicated team and advanced solutions have played a pivotal role in our success.",
    name: "Kevin Rogers",
    role: "Custody Metering Expert",
    avatar: "/about/testimonial-kevin.jpg",
  },
  {
    text: "Texas Technical Services Co. (TTS) has been an indispensable partner in our operations. Their expertise in measurement solutions has revolutionized the way we handle custody and allocation measurement. Their commitment to quality is truly commendable.",
    name: "Jason Bright",
    role: "Expert",
    avatar: "/about/testimonial-jason.jpg",
  },
];

interface TestimonialsSectionProps {
  tone?: "white" | "light" | "grey";
}

function TestimonialAvatar({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = React.useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (failed || !src) {
    return (
      <div className="w-[46px] h-[46px] min-w-[46px] min-h-[46px] rounded-full shrink-0 flex items-center justify-center bg-[rgba(138,48,47,0.1)] text-[#8a302f] font-bold text-sm border-2 border-white shadow-sm ring-1 ring-black/[0.06]">
        {initials}
      </div>
    );
  }

  return (
    <div className="relative w-[46px] h-[46px] min-w-[46px] min-h-[46px] rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm ring-1 ring-black/[0.06] bg-[rgba(138,48,47,0.06)]">
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover"
        sizes="46px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function TestimonialsSection({ tone = "white" }: TestimonialsSectionProps) {
  const sectionTone = tone === "light" ? "white" : tone;

  return (
    <Section tone={sectionTone} className="relative overflow-hidden">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <div className="fade-up">
            <span
              className="text-[11px] font-bold tracking-[0.28em] uppercase block"
              style={{ color: "var(--eyebrow-color, #8a302f)" }}
            >
              TESTIMONIALS
            </span>
          </div>
          <div className="fade-up d1">
            <h2 className="mt-4 font-heading text-[28px] sm:text-[34px] lg:text-[42px] font-extrabold tracking-[-0.025em] text-[#1a1c20] leading-[1.16]">
              What people say
            </h2>
          </div>
        </div>

        <CardGrid max={3}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group rounded-[24px] bg-[#DCDCD9] border border-[#C8C8C5] p-7 sm:p-8 flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 fade-up d${i + 2}`}
            >
              <div className="flex flex-col flex-1">
                {/* Horizontal row of stars */}
                <div className="inline-flex flex-row items-center gap-1 mb-5 shrink-0" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#8a302f] text-[#8a302f] shrink-0" />
                  ))}
                </div>
                {/* Italic quote body */}
                <blockquote className="text-[#2b2f36] italic text-[15px] sm:text-[15.5px] leading-[1.7] flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
              </div>

              {/* Author block pinned to bottom */}
              <div className="flex items-center gap-3.5 pt-5 mt-auto border-t border-black/[0.08] w-full">
                <TestimonialAvatar name={t.name} src={t.avatar} />
                <div className="min-w-0">
                  <p className="text-[#1a1c20] font-bold text-sm leading-tight truncate">{t.name}</p>
                  <p className="text-[#5f6670] text-xs mt-0.5 truncate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
