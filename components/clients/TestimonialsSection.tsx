"use client";

import Image from "next/image";
import { Star } from "lucide-react";

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

export default function TestimonialsSection() {
  return (
    <section className="bg-[#000000] blueprint-grid blueprint-dot-grid relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)" }} />
      <div className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="text-center mb-14">
          <div className="fade-up">
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#0891B2]">
              testimonials
            </span>
          </div>
          <div className="fade-up d1">
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white">
              What people say
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`fade-up d${i + 2}`}>
              <div
                className="bg-white/5 border border-white/10 hover:border-[#e7212b]/40 rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 h-full"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#e7212b] text-[#e7212b]" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-[14px] leading-[1.9] flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-white/20">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
