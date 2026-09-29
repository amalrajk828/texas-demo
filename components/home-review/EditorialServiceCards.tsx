"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, Gauge, ScanLine } from "lucide-react";
import data from "@/data/homepage-review.json";
import { Card, Reveal } from "./Motion";
import s from "./review.module.css";

const icons = [Gauge, ScanLine, Cpu];

export default function EditorialServiceCards() {
  return (
    <div className={s.storyCards}>
      {data.what.services.map((item, index) => {
        const Icon = icons[index];
        return (
          <Reveal key={item.num} className={s.storyCardFrame} delay={index * 0.1}>
            <Card glass className={s.storyCard}>
              <span className={s.storyCardIcon} aria-hidden="true">
                <Icon size={31} strokeWidth={1.5} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link prefetch={false} href="/services/" className={s.storyCardLink}>
                Learn more about our services
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </Card>
          </Reveal>
        );
      })}
    </div>
  );
}
