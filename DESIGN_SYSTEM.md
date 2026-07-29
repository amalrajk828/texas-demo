# Texas Technical Services — Glassmorphism Design System (Master Document)

This document is the authoritative single source of truth for design tokens, glassmorphism card surfaces, section backgrounds, navbar specifications, grid layout rules, and global styling constraints.

---

## 1. Light Glass Sections
- **Background**: `linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)`
- **Ambient Depth Blobs**: 2–3 soft blurred radial blobs (`filter: blur(80–100px)`, muted blue-gray/white tones).
- **Light Glass Cards**: `background: rgba(255,255,255,0.3–0.4); backdrop-filter: blur(18–20px); border: 1px solid rgba(255,255,255,0.5–0.6); box-shadow: 0 8px 24px rgba(0,0,0,0.06–0.08); border-radius: 20–24px;` with top-edge white sheen highlight.

---

## 2. Dark Glass Sections
- **Background**: `#0B0D26` / `#0A0C11` (dark navy base) with dotted grid texture (`radial-gradient(circle, rgba(255,255,255,0.08–0.12) 1px, transparent 1px); background-size: 24px 24px;` via `.blueprint-grid .blueprint-dot-grid`).
- **Dark Glass Cards**: `background: rgba(255,255,255,0.04–0.08); backdrop-filter: blur(16–20px); border: 1px solid rgba(255,255,255,0.08–0.12); box-shadow: 0 20px 40px rgba(0,0,0,0.40); border-radius: 16–20px;` (always white-tinted transparency, never plain black).
- **Text & Accent Colors**: White headings (`#FFFFFF`), light-gray body text (`rgba(255,255,255,0.6)` / `text-gray-300`), red (`#e7212b`) accents & badges.

---

# Homepage Design System Reference (`app/page.tsx`)

This document details the complete design system used on the homepage of Texas Technical Services.

## 1. Background System & Theme Architecture

The homepage uses a dual-theme architecture wrapped via `<ThemeWrapper vars={...}>` which injects CSS variables dynamically at section boundaries.

### CSS Theme Variables

#### Brand Core Tokens (`VARS`)
- `--color-brand-red`: `#E53935`
- `--color-brand-red-dark`: `#B71C1C`
- `--color-brand-red-light`: `#FFCDD2`
- `--color-brand-navy`: `#0F1117`
- `--color-brand-navy-mid`: `#181C26`
- `--color-brand-gray`: `#1E2330`
- `--color-footer-bg`: `#0A0C11`
- `--color-footer-text`: `#FFFFFF`
- `--color-footer-muted`: `rgba(156, 163, 175, 0.70)`

#### Light Theme Tokens (`LIGHT_GREY_VARS`)
- `--g-section-a`: `#FFFFFF` (Pure white background)
- `--g-section-b`: `#F9FAFB` (Subtle off-white section background)
- `--g-heading`: `#111827` (Dark charcoal primary text)
- `--g-muted`: `#4B5563` (Muted body text)
- `--g-border`: `rgba(0, 0, 0, 0.06)` (Hairline divider border)
- `--g-card-bg`: `#F0F1F3` (Light grey card background)
- `--g-card-border`: `rgba(0, 0, 0, 0.06)`
- `--g-card-shadow`: `0 4px 20px rgba(0, 0, 0, 0.04)`
- `--g-stat-bg`: `#F3F4F6`

#### Dark Theme Tokens (`DARK_GREY_VARS`)
- `--g-section-a`: `#141820` (Deep charcoal dark background)
- `--g-section-b`: `#0F1117` (Navy-black section background)
- `--g-heading`: `#F9FAFB` (Light heading text)
- `--g-muted`: `#9CA3AF` (Muted gray body text)
- `--g-border`: `rgba(255, 255, 255, 0.08)`
- `--g-card-bg`: `#1E2330` (Dark card background)
- `--g-card-border`: `rgba(255, 255, 255, 0.09)`
- `--g-card-shadow`: `0 4px 24px rgba(0, 0, 0, 0.40)`
- `--g-stat-bg`: `#252B3B`

### Section Background Patterns
- **Blueprint Grid (.blueprint-grid & .blueprint-dot-grid)**:
  - Base: `#0A0C11`
  - Pattern: `radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`
  - Size: `22px 22px`
- **Ambient Radial Blobs**:
  - Red glow: `radial-gradient(circle, rgba(229,57,53,0.12) 0%, transparent 70%)`
  - Purple/Blue glow: `radial-gradient(circle, rgba(95,90,246,0.1) 0%, transparent 70%)`
- **Section Hairline Separators**:
  - `<div className="absolute top-0 inset-x-0 h-px bg-white/[0.08]" />`

---

## 2. Typography

- **Heading Font**: Plus Jakarta Sans (`var(--font-display)`)
- **Body Font**: Inter (`var(--font-body)`)
- **Monospace Number Font**: Monospace (`font-mono`, `letter-spacing: -0.02em`)

### Type Scale
- **H1 (Hero)**: `text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-[1.05] tracking-tight`
- **H2 (Section Headings)**: `text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-black leading-[1.05] tracking-tight`
- **H3 (Card Headings)**: `text-[19px] font-black leading-snug tracking-tight`
- **Eyebrow Label**: `text-[11px] font-bold tracking-[3.5px] uppercase`
- **Body Large**: `text-[16px] sm:text-[17px] leading-[1.85]`
- **Body Regular**: `text-xs sm:text-sm leading-relaxed`

---

## 3. Color Palette

- **Brand Primary Accent**: `#E53935` (`var(--color-brand-red)`)
- **Brand Dark Accent**: `#B71C1C` (`var(--color-brand-red-dark)`)
- **Dark Headings**: `#111827`
- **Light Headings**: `#F9FAFB`
- **Muted Light Text**: `#4B5563`
- **Muted Dark Text**: `#9CA3AF`

---

## 4. Component Patterns

### Glassmorphic Dark Card
- **Background**: `rgba(14, 17, 23, 0.58)`
- **Backdrop Blur**: `blur(18px)`
- **Border**: `1px solid rgba(255,255,255,0.12)` (hover: `rgba(255,255,255,0.22)`)
- **Border Radius**: `rounded-[20px]`
- **Shadow**: `0 20px 40px rgba(0, 0, 0, 0.5)`
- **Sheen Overlay**: `top-0 inset-x-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent`

### Light Glass / Card System
- **Background**: `linear-gradient(135deg, #ffffff 0%, #fafafa 60%, #fff1f2 100%)`
- **Border**: `rgba(0,0,0,0.08)`
- **Shadow**: `0 4px 20px rgba(0,0,0,0.06)`
- **Border Radius**: `rounded-2xl` / `rounded-[20px]`

### Buttons
- **Primary Button**: `bg-[#E53935] hover:bg-[#B71C1C] text-white font-bold px-7 py-3.5 rounded-lg shadow-lg shadow-[#E53935]/20`
- **Secondary Button**: `border border-white/15 hover:border-white/35 text-white/70 hover:text-white px-7 py-3.5 rounded-lg`

### Spacing & Section Rhythm
- **Vertical Padding**: `py-24 lg:py-32`
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6`
