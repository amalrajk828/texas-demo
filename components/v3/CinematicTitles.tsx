import Link from "next/link";
import s from "./cinematic-titles.module.css";

const chapters = [
  ["Flow measurement", "Measure", "every drop."],
  ["Process automation", "Control", "every process."],
  ["Systems integration", "Connect", "every system."],
] as const;

export default function CinematicTitles({ frame, still = false }: { frame: number; still?: boolean }) {
  const index = Math.min(2, Math.max(0, Math.floor((frame - 1) / 100)));
  const [label, verb, phrase] = chapters[index];
  const local = (frame - 1) % 100;
  const opacity = Math.max(0, Math.min(1, index ? local / 9 : 1, index < 2 ? (99 - local) / 9 : 1));

  return (
    <div className={s.overlay} inert={!still && frame >= 275} style={{ opacity: still ? 1 : Math.min(1, Math.max(0, (275 - frame) / 20)) }}>
      <h1 className="sr-only">Texas Technical Services: flow measurement, process automation and systems integration</h1>
      <div className={s.copy} style={{ opacity, transform: `translateY(${(1 - opacity) * 10}px)` }} aria-hidden="true">
        <div className={s.label}><i /> {label}</div>
        <p className={s.title}>{verb}<br />{phrase}</p>
      </div>
      <div className={s.credits}>
        <span>Kuwait &nbsp;/&nbsp; UAE</span>
        {still || index === 2 ? <Link href="/services/">Explore services ↗</Link> : <span>Scroll to explore ↓</span>}
      </div>
      {!still && <div className={s.timeline} aria-hidden="true"><i style={{ transform: `scaleX(${frame / 300})` }} /></div>}
    </div>
  );
}
