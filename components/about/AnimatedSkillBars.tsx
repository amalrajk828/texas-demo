"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const skills = [
  { label: "Flow Measurement & Control System Solutions", value: 30 },
  { label: "Inspection and Testing", value: 30 },
  { label: "Industrial Process Automation Solutions", value: 20 },
  { label: "Analyzers", value: 10 },
  { label: "Integrated Command and Control Room Solutions", value: 10 },
];

/* Individual bar — each bar owns its own motion values so stagger works correctly */
function SkillBar({
  label,
  value,
  inView,
  index,
}: {
  label: string;
  value: number;
  inView: boolean;
  index: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    if (inView) {
      animate(count, value, {
        duration: 1.2,
        ease: "easeOut",
        delay: index * 0.15,
      });
    } else {
      count.set(0);
    }
  }, [inView, value, index, count]);

  return (
    <div>
      <div className="flex justify-between text-[13px] mb-2">
        <span className="text-gray-700 font-medium">{label}</span>
        <motion.span className="text-[#e7212b] font-bold shrink-0 ml-3">
          {rounded}
        </motion.span>
      </div>
      <div className="h-[5px] bg-gray-100/60 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#e7212b] rounded-full"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${value}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.15 }}
        />
      </div>
    </div>
  );
}

export default function AnimatedSkillBars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mt-8 space-y-5">
      {skills.map((s, i) => (
        <SkillBar
          key={s.label}
          label={s.label}
          value={s.value}
          inView={inView}
          index={i}
        />
      ))}
    </div>
  );
}
