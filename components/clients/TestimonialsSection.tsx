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

        <CardGrid max={4}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card justify-between hover:-translate-y-1.5 transition-all duration-300 fade-up d${i + 2}`}
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#8a302f] text-[#8a302f]" />
                  ))}
                </div>
                <p className="text-[#2b2f36] italic text-[14px] sm:text-[14.5px] leading-[1.8]">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 mt-6 border-t border-black/[0.08]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-white shadow-sm border border-black/[0.06]">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                </div>
                <div>
                  <p className="text-[#1a1c20] font-bold text-sm leading-tight">{t.name}</p>
                  <p className="text-[#5f6670] text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
