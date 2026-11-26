import type { Metadata } from "next";
import HomeSections from "@/components/home/HomeSections";
import ScrollSequenceHero from "@/components/v3/ScrollSequenceHero";
import styles from "./takeover.module.css";

export const metadata: Metadata = {
  title: "Cinematic hero preview",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return (
    <>
      <ScrollSequenceHero cinematic />
      <div className={styles.takeover}>
        <HomeSections />
      </div>
    </>
  );
}
