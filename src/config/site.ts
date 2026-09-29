export const FRAME_COUNT = 240;
export const FRAME_COUNT_LITE = 120;
export const FRAME_PATH = "/frames/f_%04d.webp";
export const FRAME_PATH_LITE = "/frames-lite/f_%04d.webp";
export const POSTER_PATH = "/hero-poster.jpg";
export const LERP_FACTOR = 0.12;
export const MAX_DPR = 2;

export const OVERLAY = {
  base: "rgba(15, 17, 21, 0.65)",
  tint: "#8a302f",
} as const;

// ── Fixed-stage cross-fade constants ──────────────────────────
export const SECTION_SCROLL_LENGTH = 200; // vh per section (desktop, comfortable plateau >= 200vh)
export const SECTION_SCROLL_LENGTH_MOBILE = 150; // vh per section (< 768px)
export const PLATEAU = 0.10; // full opacity while |d| <= 0.10
export const FADE_OUT_RANGE = 0.30; // outgoing fully gone by 30% of transition
export const FADE_IN_DELAY = 0.25; // incoming starts appearing only after outgoing is mostly gone
export const FADE_IN_RANGE = 0.30; // incoming fade-in span

