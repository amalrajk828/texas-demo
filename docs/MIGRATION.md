# Migration Guide: Moving Pages from Legacy to Home V3 Design System

This repository uses Next.js Route Groups to strictly isolate the new **Home V3 design system** from the **Legacy design system**.

---

## 1. Architecture Overview

The application is partitioned into two independent route groups, each with its own root `layout.tsx` (`<html>` / `<body>`) and isolated global stylesheet:

```
app/
├── (v3)/
│   ├── layout.tsx             # Root layout for V3 (Sora/Inter fonts, Studio #e8e8e6 backdrop)
│   ├── globals-v3.css         # V3 Tailwind v4 styles, theme variables, showcase styles
│   ├── home-v3-showcase.css   # Scoped showcase scrollytelling CSS
│   ├── not-found.tsx          # 404 handler for V3 routes
│   ├── page.tsx               # "/" (Home V3)
│   └── about-us/
│       └── page.tsx           # "/about-us" (About Us V3)
├── (legacy)/
│   ├── layout.tsx             # Root layout for Legacy (Jakarta/Inter fonts, Black #000000 backdrop)
│   ├── globals.css            # Restored original legacy stylesheet
│   ├── not-found.tsx          # 404 handler for Legacy routes
│   ├── services/              # All legacy services pages
│   ├── industries/            # All legacy industry pages
│   ├── products/              # All legacy product pages
│   └── ...                    # All other routes
├── sitemap.ts                 # Shared XML sitemap
└── favicon.ico
```

Because route groups with brackets (`(v3)` and `(legacy)`) are transparent to Next.js routing, all public URLs remain completely unchanged:
- `http://localhost:3000/` -> served by `app/(v3)/page.tsx`
- `http://localhost:3000/about-us/` -> served by `app/(v3)/about-us/page.tsx`
- `http://localhost:3000/services/` -> served by `app/(legacy)/services/page.tsx`
- `http://localhost:3000/industries/` -> served by `app/(legacy)/industries/page.tsx`

---

## 2. Component System Partitioning

- **V3 Components (`components/v3/*`):**
  - `Container`: Standard width container (`max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12`)
  - `Section`: Consistent vertical rhythm (`py-16 sm:py-20 lg:py-24`, supports `variant="studio" | "white" | "dark" | "glass"`)
  - `PageHero`: Canonical header-clearing hero (`pt-[108px] sm:pt-[120px]`, breadcrumbs, eyebrow, stats, actions)
  - `Button`: Pill-shaped buttons (`rounded-full`, `variant="primary" | "secondary" | "dark" | "outline"`, with arrow)
  - `Card`: Soft rounded cards (`rounded-[20px]`, studio glass/white, hover depth)
  - `SectionHeading`: Centered/left uppercase eyebrow pill + bold heading + intro paragraph
  - `LogoCard`: Contained logo cards for partners and OEM displays
  - `SpecTable`, `CTASection`
  - `V3Header` & `V3Footer`: Frosted glass desktop and mobile navigation

- **Legacy Components:**
  - Located in `components/t-grey/`, `components/service/`, `components/industries/`, `components/products/`, etc.
  - Used exclusively by pages inside `app/(legacy)/`.

---

## 3. How to Migrate a Legacy Page to V3 (Step-by-Step)

When migrating a page (e.g., `/services`):

### Step 1: Move the route folder
Move the folder from `app/(legacy)/services` to `app/(v3)/services`:
```bash
# Example in PowerShell:
Move-Item -Path "app/(legacy)/services" -Destination "app/(v3)/services"
```

### Step 2: Rebuild page using V3 components
Open `app/(v3)/services/page.tsx` and structure it with V3 design tokens:
```tsx
import { PageHero, Section, Container, SectionHeading, Card, Button } from "@/components/v3";

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#e8e8e6] text-[#1a1a1a]">
      <PageHero
        eyebrow="Comprehensive Engineering Capabilities"
        title="Industrial Automation & Measurement Services"
        description="Turnkey fiscal metering, SCADA integration, and non-destructive testing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" }
        ]}
      />

      <Section variant="studio">
        <Container>
          <SectionHeading
            eyebrow="Our Disciplines"
            title="Explore Specialized Services"
          />
          {/* Service grid using <Card> and <Button> */}
        </Container>
      </Section>
    </div>
  );
}
```

### Step 3: Remove legacy imports
Ensure the page **no longer imports** any legacy components or legacy CSS modules. All primitives should come from `@/components/v3`.

### Step 4: Verify
1. Run `npx tsc --noEmit` to verify type safety.
2. Visit `http://localhost:3000/services/` in the browser.
3. Confirm that:
   - Header doesn't overlap the hero heading (`PageHero` handles the fixed offset).
   - Content is centered with side padding (`Container` handles responsive padding).
   - Cards have equal gaps and buttons display white text on maroon backgrounds.
