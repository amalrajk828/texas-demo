/**
 * Pinned-scene scroll configuration.
 *
 * sceneLength  — outer wrapper height in vh units.
 *                 The user scrolls through this range while the inner stage stays fixed.
 * phases       — normalised [0,1] breakpoints that map to the scene's own progress value.
 * mobileScale  — factor applied to sceneLength on screens < 768 px (default 0.6).
 * label        — shown in the right-hand progress rail.
 */

export interface PhaseConfig {
  /** Phase A end: background settles */
  aEnd: number;
  /** Phase B range: main panel unfolds */
  bStart: number;
  bEnd: number;
  /** Phase C range: supporting elements pop in */
  cStart: number;
  cEnd: number;
  /** Phase D start: exit / cross-dissolve */
  dStart: number;
}

export interface SceneConfig {
  id: string;
  label: string;
  sceneLength: number; // vh
  mobileScale: number; // fraction
  phases: PhaseConfig;
  /** Framer spring smoothing applied to the raw scrollYProgress */
  spring: { stiffness: number; damping: number; mass: number };
}

export const SCENES: SceneConfig[] = [
  {
    id: "scene-hero",
    label: "Hero",
    sceneLength: 300,
    mobileScale: 0.6,
    phases: {
      aEnd:   0.25,
      bStart: 0.25, bEnd: 0.60,
      cStart: 0.50, cEnd: 0.85,
      dStart: 0.85,
    },
    spring: { stiffness: 80, damping: 28, mass: 1 },
  },
  {
    id: "scene-about",
    label: "About",
    sceneLength: 200,
    mobileScale: 0.65,
    phases: {
      aEnd:   0.20,
      bStart: 0.20, bEnd: 0.55,
      cStart: 0.45, cEnd: 0.80,
      dStart: 0.80,
    },
    spring: { stiffness: 75, damping: 26, mass: 1 },
  },
  {
    id: "scene-services",
    label: "Services",
    sceneLength: 450,
    mobileScale: 0.6,
    phases: {
      aEnd:   0.12,
      bStart: 0.12, bEnd: 0.38,
      cStart: 0.35, cEnd: 0.60,
      dStart: 0.90,
    },
    spring: { stiffness: 70, damping: 26, mass: 1 },
  },
  {
    id: "scene-whatwedo",
    label: "What We Do",
    sceneLength: 300,
    mobileScale: 0.6,
    phases: {
      aEnd:   0.18,
      bStart: 0.18, bEnd: 0.50,
      cStart: 0.42, cEnd: 0.80,
      dStart: 0.85,
    },
    spring: { stiffness: 80, damping: 28, mass: 1 },
  },
  {
    id: "scene-products",
    label: "Products",
    sceneLength: 300,
    mobileScale: 0.6,
    phases: {
      aEnd:   0.20,
      bStart: 0.20, bEnd: 0.55,
      cStart: 0.48, cEnd: 0.82,
      dStart: 0.85,
    },
    spring: { stiffness: 80, damping: 28, mass: 1 },
  },
  {
    id: "scene-vision",
    label: "Vision",
    sceneLength: 200,
    mobileScale: 0.65,
    phases: {
      aEnd:   0.22,
      bStart: 0.22, bEnd: 0.55,
      cStart: 0.48, cEnd: 0.82,
      dStart: 0.85,
    },
    spring: { stiffness: 75, damping: 26, mass: 1 },
  },
  {
    id: "scene-industries",
    label: "Industries",
    sceneLength: 350,
    mobileScale: 0.6,
    phases: {
      aEnd:   0.15,
      bStart: 0.15, bEnd: 0.45,
      cStart: 0.40, cEnd: 0.88,
      dStart: 0.90,
    },
    spring: { stiffness: 70, damping: 26, mass: 1 },
  },
  {
    id: "scene-team",
    label: "Team",
    sceneLength: 150,
    mobileScale: 0.7,
    phases: {
      aEnd:   0.25,
      bStart: 0.25, bEnd: 0.60,
      cStart: 0.50, cEnd: 0.85,
      dStart: 0.85,
    },
    spring: { stiffness: 80, damping: 28, mass: 1 },
  },
  {
    id: "scene-cta",
    label: "Contact",
    sceneLength: 150,
    mobileScale: 0.7,
    phases: {
      aEnd:   0.25,
      bStart: 0.25, bEnd: 0.60,
      cStart: 0.50, cEnd: 0.85,
      dStart: 0.85,
    },
    spring: { stiffness: 80, damping: 28, mass: 1 },
  },
];

/** Active scenes in order for the progress rail. */
export const ACTIVE_SCENE_IDS = SCENES.map((s) => s.id);
