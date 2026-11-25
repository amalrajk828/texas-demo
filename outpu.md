Replace the entire scroll-driven hero animation on the home page with a new one built from the attached video (place it in the project as /public/hero-source.mp4). Remove the old 299-frame sequence and rebuild the hero so it works perfectly on desktop and mobile, with every card placed cleanly.

VIDEO FACTS: 1920x1080, 24 fps, 10 s (240 frames), with an audio track that is not needed. Scenes: 0-1s oil field, 1-2s storage tanks, 2-4s pipelines to the port, 4-5s tanker at the jetty, 5-6s refinery, 6-7s control room, 7-8s Middle East network map, 8-10s dark end card with Texas logo and tagline ("Complete Automation • Metering • Instrumentation • Digitalization Solutions").

STEP 1 - Extract new frames with ffmpeg
Delete the old frames: public/hero-frames/frame_001..299.webp, public/hero-frames/mobile/*, and the heavy PNG folder public/VID-20261125-WA0009_1_gwr_video_mvp-ezgif-split/ (once nothing references it).
Desktop (16:9, 240 frames):
  ffmpeg -i public/hero-source.mp4 -an -vf "fps=24,scale=1600:-2" -c:v libwebp -quality 72 -compression_level 6 public/hero-frames/frame_%03d.webp
Mobile (4:5 center crop, every second frame = 120 frames, to keep the download light):
  ffmpeg -i public/hero-source.mp4 -an -vf "fps=12,crop=ih*4/5:ih,scale=720:900" -c:v libwebp -quality 70 public/hero-frames/mobile/frame_%03d.webp
Do not hard-code 299. Write a small constant or manifest (e.g. hero-frames/manifest.json with desktopCount and mobileCount) and read the counts from it. Target total weight: desktop under about 12 MB, mobile under about 5 MB. Lower the quality if needed.

STEP 2 - Scroll engine (rewrite, don't patch)
1. Hero section is a tall scroll track containing a sticky full-screen stage: track height 600vh on desktop, 450vh on mobile; stage position: sticky; top: 0; height: 100vh with 100svh/100dvh fallback for mobile browser bars.
2. Draw frames on a <canvas> sized to the stage and multiplied by devicePixelRatio (cap at 2). Use "cover" fitting: center on desktop; on mobile, center-crop with the focal point slightly toward the middle-top.
3. progress = scroll position inside the track, from 0 to 1. frameIndex = round(smoothedProgress * (totalFrames-1)). Smooth with a lerp (about 0.12 per frame) inside requestAnimationFrame so the motion feels fluid, and skip drawing when the frame index didn't change.
4. Preload in priority order: first 12 frames immediately (show frame 1 as the poster so there is no blank hero), then the rest in the background in batches. If a frame isn't loaded yet, draw the nearest loaded frame. Use createImageBitmap or Image.decode() to avoid jank.
5. Choose the desktop or mobile set by viewport width (max-width: 768px) and re-select on resize/orientation change without a page reload. Debounce resize.
6. Support prefers-reduced-motion: show a static frame and stack the cards normally with no scroll scrubbing.
7. If GSAP ScrollTrigger or Lenis is already used in the project, keep using it. Otherwise use a passive scroll listener. Only one scroll system may drive the hero.
8. Release the pin smoothly at the end so the next section (company overview) follows with no jump or blank gap.

STEP 3 - Card choreography driven by the same progress value
Cards are the existing ones from the current hero. Reuse the existing components and styles. Do not redesign them. Only change placement and timing.
Timeline (progress = share of the 10 s video):
- 0.00-0.12 (oil field): Panel A, left: "Engineered Excellence in Custody Metering & Automation" with the "Contact Us" and "OUR SERVICES" buttons. It fades and rises in, then stays.
- 0.12-0.30 (tanks): Panel A slides out left and fades; Panel B takes its place: "WHAT WE DO / Precision solutions for critical industries".
- 0.30-0.55 (pipelines and tanker): Panel B stays on the left. The three service cards on the right appear one after another: 01 Flow Measurement & Control (at 0.30), 02 Inspection & Testing (at 0.40), 03 Industrial Automation (at 0.50). Keep the slight tilted, overlapping stack look from the current design, but without clipping.
- 0.55-0.72 (refinery and control room): Right cards and Panel B fade out. Panel C appears on the left: "Flow Measurement & Control System Solutions" with the "Know More" and "OUR PRODUCTS" buttons. The "INDUSTRIAL SERVICES" video/slider card (01/04) slides in on the right.
- 0.72-0.88 (network map): Panel C and the slider stay. The stats bar (18+ Years Experience, 8 Industries Served, 200+ Approved Clients, 16+ Global Vendors) rises from the bottom, with its numbers counting up once.
- 0.88-1.00 (end card): All cards fade out so the video's own Texas logo and tagline (placed around the center) are fully visible and unobstructed. Show only a centered "Contact Us" button below the tagline, then release the pin.
Each card transitions with opacity + translateY (24-40px) over about 0.06 progress with ease-out. Cards must reverse correctly when scrolling up. Do not use CSS transitions that fight the scroll; derive state from progress. Only one left panel is visible at a time, and panels never overlap each other.

STEP 4 - Desktop placement (reference 1920x1080, scale fluidly down to 1024)
- Safe areas: keep clear of the navbar (top 100px), the WhatsApp button (bottom-right 24px), and the right-edge progress dots (right 20px, vertically centered).
- Left panels: left 4vw, vertically centered, width clamp(340px, 24vw, 440px). Do not cover the pipes and the main subject in the center of the frame.
- Right service-card stack: right 5vw, vertically centered, width clamp(260px, 17vw, 320px), gap about 16px, with no overlap of the progress dots.
- Slider card (Panel C): right 4vw, width about 38vw, vertically centered above the stats bar.
- Stats bar: bottom 4vh, centered, width min(1100px, 86vw), above the stage bottom edge.
- Cards keep their existing glass/white look with a subtle shadow so text stays readable over any scene. Add a very soft dark-to-transparent gradient behind the left side of the stage if contrast is low on the bright desert and sky scenes.

STEP 5 - Mobile placement (360-430px wide, also check 320px and landscape)
- Stage layout: the canvas fills the top 58svh; the cards live in a bottom area (about 42svh) below it, so cards never hide the video. Cards are width calc(100vw - 32px), centered, 16px side gutters.
- Only one card or group is visible at a time (crossfade), in the same order as the timeline. The three service cards show as a single compact card that swaps content (01, then 02, then 03), with three small dots.
- Panel A and Panel C buttons stay on one row; if they don't fit, stack them full-width.
- The slider card (INDUSTRIAL SERVICES) becomes a compact horizontal card below Panel C, with the prev/next controls inside it.
- Stats bar: 2x2 grid, shown during the map scene.
- End card: the 4:5 crop would cut the video's logo and tagline, so on mobile fade the canvas to dark in the last 10% and render the Texas logo and tagline as HTML text centered, with the Contact Us button below.
- Hide the right-edge progress dots on mobile or move them to a horizontal bar at the stage bottom. Keep the WhatsApp button from covering buttons (give the card area bottom padding of 72px).
- Fonts: card heading about 22-26px, body about 13-14px. Nothing overflows, and no card is taller than 40svh.

STEP 6 - Quality checks
- Test at 1920x1080, 1440x900, 1280x720, 1024x768, 768x1024, 430x932, 390x844, 360x740, 320x568.
- Confirm no blank or flickering frames, no layout jump at pin start or release, no horizontal scroll, and smooth scrubbing forward and backward (including fast scroll and a scroll-to-top jump).
- Run Lighthouse on mobile: no big LCP regression (frame 1 must show instantly), total image weight within the targets above.
- Pause the rAF loop when the hero is off-screen (IntersectionObserver) and when the tab is hidden.

Do NOT change: navbar, other sections, page copy, brand colors, card visual styling, the colors set earlier, fonts. Only rebuild the hero animation, frames and card placement.
When finished, list all files created, changed and deleted, the final frame counts, and the card timeline you implemented.