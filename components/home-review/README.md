# Homepage review themes

Both `/light1/` and `/light2/` use copy from the content rendered by `app/page.tsx`. Both themes omit the detailed proprietary-platform section at the user's request. Light1 places the partner logo grid after Industries; Light2 places it before Industries. The existing homepage implementation is unchanged.

## Content contract

`data/homepage-review.json` is generated from the existing HeroSlider, TickerBanner, and Grey homepage components. It preserves their wording, slide titles and descriptions, service summaries, service details, Texaflow and Space AI descriptions, statistics, team content, company introduction, certification labels, and contact CTA. Partner names, logos, and URLs use the same `ALL_PARTNERS` list as the homepage. Footer details come from the existing shared footer.

The current homepage's numerical and marketing claims are preserved as written; the review themes do not introduce or independently verify those claims.

Validate copy parity:

```sh
npm run check:review-content
```

After intentionally editing the original homepage copy, refresh the snapshot:

```sh
node scripts/sync-homepage-review-content.mjs
```

Do not edit the generated JSON manually. Presentation components may add functional controls such as next/previous slide, but business descriptions belong in the original source components.

## Different presentations

- **Light 1:** warm stone and muted steel-teal gradients, bold Georgia display typography, a split video hero, three matching frosted-glass expertise cards with offset shadows and motion, image-led service chapters that slide horizontally on smaller screens, a dark section with a browsable statistics panel, certification panels, and a split-image contact section.
- **Light 2:** rose, blue, and sage gradients; a centered hero with a wide media deck; translucent glass surfaces; rounded cards; overlapping image panels; different service and solution grids; a light experience section; a light team section, visible hero certificates, a glossy partner carousel, animated statistics, and an image-backed contact section using the former platform-card UI.

Shared data keeps all retained business copy tied to the homepage; the platform-section omission in both review routes is a presentation choice. Light2 navigation is generated from the homepage Header constants; Light1 uses section anchors, including the moved partner grid. The `.glass` rules in `review.module.css` define the second layout, not just a palette change. Existing `components/light1/` and `components/light2/` entry points remain as adapters; the active pages use `ReviewHome`.

## Motion and video

- Light2 uses the supplied pill navbar and spotlight references with the existing Framer Motion dependency. Its brown glow and contact button remain visible on mobile. The added partner carousel shares the homepage logo list, pauses on hover/focus or via its button, and becomes static with reduced motion. Counters preserve final source values in server HTML and accessible text.
- Framer Motion provides progressive section reveals, spring hover effects, glass-card pointer tilt, and slide-caption transitions.
- Light1's expertise cards use the existing Motion component for entrance and hover movement. Reduced-motion visitors see the complete cards without animation.
- Light1's Vision figures sit in a native horizontal scroll-snap carousel with previous/next buttons, direct markers, arrow-key navigation, and touch swiping. Service and certification cards have matching hover and keyboard-focus cues; reduced-motion settings remove their transitions.
- Server HTML starts visible and includes the final statistics. No blank or zero-valued counters are required before hydration.
- A live `prefers-reduced-motion` subscription disables automatic motion, including when the setting changes after mounting.
- Both themes use the existing `Automated-1-2.mp4` and `newproduct.mp4`, with their existing poster images. Light 1 opens on the automation video; Light 2 retains its original first image slide. Only an active, visible video is mounted. Slides advance every nine seconds; hover, keyboard focus, page visibility, and the pause control suspend advancement.
- Video controls support explicit playback and pausing. Reduced-motion users see the poster until they choose to play.
- Native mobile navigation works with JavaScript disabled and supports Escape and close-on-selection when enhanced.

## SEO and verification

Both routes inherit the original homepage metadata copy, use the homepage canonical, retain `noindex, follow`, and remain excluded from the sitemap. Both have one H1 and one main landmark. The review-only organization schema adds no reviews or ratings.

Checks include source-copy parity, TypeScript, targeted ESLint, production build, desktop/tablet/mobile layouts at 1440/1280/1024/768/430/390/360px, axe accessibility, image loading, video playback, pause/reduced-motion behavior, and JavaScript-disabled navigation. Browser artifacts are kept outside the repository at `F:/texas/themes-review/`.

The repository-wide lint baseline already contains unrelated errors; targeted lint covers all new or updated review components. Earlier Lighthouse measurements in the original light1 implementation do not describe these new animated themes.

Before the platform-section removal, both themes passed all 42 source-copy checks and all 41 link checks. Current Light2 layout checks confirm the requested omission and partner-grid move. No missing images, runtime errors, page-width overflow, or axe WCAG A/AA violations were found. Both existing videos played and paused correctly; changing reduced-motion preferences stopped automatic playback. Both mobile menus and the page content worked with JavaScript disabled.

Local Lighthouse mobile results before the latest Light2 refinements: light1 scored 83 for performance and light2 scored 84; both scored 100 for accessibility and best practices. The SEO score of 69 reflects their intentional `noindex` status. LCP was 4.2s/4.1s, total blocking time 90ms/90ms, and CLS 0/0.002 respectively. These are lab results rather than field Core Web Vitals; mobile LCP remains an optimization opportunity before either design becomes the production homepage.
