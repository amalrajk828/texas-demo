"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PortfolioGroupCategoryCard from "./PortfolioGroupCategoryCard";
import type { CategoryLink } from "@/lib/portfolio-group";

export default function PortfolioGroupCategoryGrid({
  links,
}: {
  links: CategoryLink[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {links.map((link, i) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.08 + (i % 3) * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <PortfolioGroupCategoryCard link={link} />
        </motion.div>
      ))}
    </div>
  );
}
