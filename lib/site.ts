export const SITE_URL = "https://texastechserv.com";
export const SITE_EMAIL = "sales@texastechserv.com";

export const HERO_VIDEO_SOURCE_FILE =
  "home-v1/components/Public/hero/lv_0_20260928120745.mp4";
export const HERO_VIDEO_PATH = "/hero-pipeline.mp4";
export const HERO_POSTER_PATH = "/hero-poster.jpg";
// The pipeline source is encoded all-keyframe (-g 1) for responsive seeking.
export const LERP_FACTOR = 0.08;
export const HERO_OVERLAY_COLOR = "rgba(15, 17, 21, 0.65)";
export const HERO_TINT_COLOR = "#8a302f";

// ── Cross-fade stage constants ─────────────────────────────────────────────
// How many vh of scroll distance each section occupies (at least 200vh for comfortable plateau).
export const SECTION_SCROLL_LENGTH = 200; // vh per section (desktop)
export const SECTION_SCROLL_LENGTH_MOBILE = 150; // vh per section (< 768px)

// Crossfade range constants
export const PLATEAU = 0.10; // full opacity while |d| <= 0.10
export const FADE_OUT_RANGE = 0.30; // outgoing fully gone by 30% of transition
export const FADE_IN_DELAY = 0.25; // incoming starts appearing only after outgoing is mostly gone
export const FADE_IN_RANGE = 0.30; // incoming fade-in span

// Legacy compatibility aliases
export const FADE_SHARPNESS = 3.33;
export const HOLD_WIDTH = 0.20;

