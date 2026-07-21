# SEO Audit Action Plan — Texas Technical Services

**Date:** July 21, 2026  
**Site:** texastechserv.com  
**Framework:** Next.js 16 on Netlify  

---

## Site Overview

| Attribute | Value |
|-----------|-------|
| **Type** | Industrial B2B (Services + Products) |
| **Target Markets** | Kuwait, UAE/Dubai, Saudi Arabia, GCC |
| **Core Services** | Flow Measurement, Industrial Automation, Inspection & Testing |
| **Product Lines** | Flow Meters, Analyzers, PLC/SCADA, Custody Metering |

---

## Executive Summary

**Overall Health: Good foundation with several high-priority issues**

The site has a solid technical SEO foundation — proper metadata, canonical tags, JSON-LD schema (LocalBusiness, Organization, Breadcrumb, FAQ, Service, Review), XML sitemap, robots.txt, and trailing slash consistency. However, there are **critical duplicate content issues**, **URL structure inconsistencies**, and **missing schema on most service pages** that need immediate attention.

### Top 5 Priority Issues

1. **Duplicate content pages** (`heat-treatment-services` / `heat-treatment-services-2`, `metallurgical-services` / `metallurgical-services-2`, `air-permeability-test` / `air-permeability-test-2`, etc.) — these are **critical** and must be consolidated or properly canonicalized
2. **Missing H1 tags** on multiple service pages (components render H1, but metadata `title` is often too generic)
3. **Blog articles lack structured data** — no BlogPosting schema despite having rich content
4. **`services_group/` section creates duplicate URL paths** for the same service content
5. **Some service pages have thin content** — only components, no text content on the page itself

---

## Technical SEO Findings

### 1. Duplicate Service Pages (CRITICAL)

**Issue:** Multiple services exist in two versions with **identical content, identical titles, identical descriptions, and identical components**.

**Affected Pages:**
- `/service/heat-treatment-services/` ↔ `/service/heat-treatment-services-2/`
- `/service/metallurgical-services/` ↔ `/service/metallurgical-services-2/`
- `/service/air-permeability-test/` ↔ `/service/air-permeability-test-2/`
- `/service/water-penetration-test/` ↔ `/service/water-penetration-test-2/`
- `/service/lifting-equipment-inspection/` ↔ `/service/lifting-equipment-inspection-2/`
- `/service/torque-tightening-bolt-tensioning/` ↔ `/service/torque-tightening-bolt-tensioning-2/`
- `/service/hose-test/` ↔ `/service/hose-test-2/`

**Impact:** HIGH — Google will ignore one version or split ranking signals. Wastes crawl budget and dilutes authority.

**Fix:** 301 redirect the `-2` variants to the primary versions. Remove them from the sitemap. Add `<link rel="canonical">` pointing to the primary.

**Priority:** 1

---

### 2. services_group Section Creates URL Duplication

**Issue:** The `services_group/` routes duplicate content that already exists under `/service/` and `/services/`. For example:
- `/services_group/services/flow-measurement-solutions/` duplicates `/service/flow-measurement-solutions/`
- `/services_group/services/inspection-testing/` duplicates `/service/inspection-testing/`

These pages are in the sitemap and could confuse Google about which URL to index.

**Impact:** HIGH — Splitting authority across duplicate URL structures.

**Fix:** Either 301 redirect `services_group/*` to the canonical `/service/*` paths, or noindex the `services_group` section entirely.

**Priority:** 1

---

### 3. Missing BlogPosting Schema

**Issue:** Blog articles have rich, well-structured content (with FAQ sections, tables, headings) but lack `BlogPosting` JSON-LD schema. A `BlogPostingJsonLd` component exists but is not used on any blog page.

**Impact:** MEDIUM — Missing rich result opportunities for blog content in search.

**Fix:** Add `<BlogPostingJsonLd>` to `/app/blog/[slug]/page.tsx`.

**Priority:** 2

---

### 4. Schema Markup Gap on Most Service Pages

**Issue:** Only some service pages implement `ServiceJsonLd` (flow-measurement, tensile-test, heat-treatment, metallurgical). Many others only have `BreadcrumbJsonLd`. Key missing pages:
- `/service/inspection-testing/`
- `/service/non-destructive-testing-ndt/`
- `/service/industrial-automation/`
- `/service/plant-automation/`
- Most NDT sub-services

**Impact:** MEDIUM — Missing rich results for service searches.

**Fix:** Add `ServiceJsonLd` to all service pages.

**Priority:** 2

---

### 5. Sitemap Contains Non-Canonical / Redirected URLs

**Issue:** The sitemap includes URLs that are actually redirects in `next.config.ts`:
- `/products/sensors/:slug+` → redirects to `/portfolio/:slug`
- `/products/plc/:slug+` → redirects to `/portfolio/:slug`

Also, the sitemap contains URLs for pages that may not exist in the app directory (e.g., `/service/upgrade-of-metering-control-system/`).

**Impact:** MEDIUM — Wastes crawl budget; Google may flag soft 404s.

**Fix:** Audit sitemap against actual routes. Remove redirect targets and non-existent URLs.

**Priority:** 2

---

### 6. Inconsistent OG Image Handling

**Issue:** Some service pages reference OG images that may not exist (e.g., `/og-tensile-test.jpg`, `/og-heat-treatment.jpg`). The blog page uses hardcoded absolute URLs for OG images while most pages use relative paths.

**Impact:** LOW — Broken social sharing previews.

**Fix:** Verify all OG images exist. Standardize to relative paths with `metadataBase`.

**Priority:** 3

---

### 7. Missing `keywords` Metadata on Some Pages

**Issue:** Some service pages lack `keywords` metadata while others have it. Inconsistent implementation.

**Impact:** LOW — Keywords meta tag has minimal SEO value but should be consistent.

**Priority:** 4

---

## On-Page SEO Findings

### 8. Title Tag Issues

**Issue:** Some titles are not well-optimized:
- `/service/tensile-test/` → title is just "Tensile Test" (too short, missing brand/context)
- `/service/impact-test/` → likely similar
- Many service titles follow pattern: "[Service Name]" without geographic or brand context

**Impact:** MEDIUM — Titles are the #1 on-page ranking signal.

**Fix:** Follow the pattern used on better-optimized pages:
`"[Service] — [Standard/Context] | Texas Technical Services"` or at minimum include brand name.

**Priority:** 2

---

### 9. Homepage Keywords Meta Tag Contains Low-Value Terms

**Issue:** Homepage `keywords` includes "industrial automation companies near me" (local intent on a non-local page), "vision industrial automation services & products" (unrelated brand name).

**Impact:** LOW — Keywords meta tag is ignored by Google, but this signals potential keyword strategy misalignment.

**Priority:** 4

---

### 10. Blog Article URLs Not in Sitemap

**Issue:** The dynamic blog routes (`/blog/[slug]/`) are generated in the sitemap via `blogArticles`, but there are only ~5 articles. The blog section could benefit from more content.

**Impact:** LOW — Content gap, not a technical issue.

**Priority:** 5

---

## Content Quality Findings

### 11. Service Pages with Thin Component-Only Content

**Issue:** Many service pages render only component content (Hero + Content sections) without visible text on the page itself. The actual content lives inside React components that may be minimal.

**Impact:** MEDIUM — Thin content signals; harder to rank for long-tail queries.

**Fix:** Audit each service page component to ensure ≥300 words of unique, helpful content per page.

**Priority:** 2

---

### 12. Blog Content Quality is Excellent

**Positive Finding:** The blog articles are well-written, technically deep, properly structured with H2/H3 hierarchy, include comparison tables, and have FAQ sections. This is a strong E-E-A-T signal.

---

### 13. Missing FAQ Schema on Blog Articles

**Issue:** Blog articles contain FAQ sections in their HTML content but don't use `FaqPageJsonLd`. Only the flow-measurement service page uses it.

**Impact:** MEDIUM — Missing FAQ rich results in search.

**Fix:** Parse FAQ content from blog articles and inject `FaqPageJsonLd`.

**Priority:** 2

---

## Architecture & Crawlability

### 14. URL Structure

**Strengths:**
- Trailing slash consistency ✓
- Lowercase, hyphen-separated ✓
- Readable, descriptive URLs ✓
- Canonical tags on all pages ✓

**Issues:**
- `/service/page/[page]/page.tsx` creates paginated service URLs that are non-standard
- Inconsistent depth: `/services_group/services/inspection-testing/page/2/` is very deep

---

### 15. Internal Linking

**Strengths:**
- Services linked from homepage sections
- Breadcrumbs implemented
- Related services linked within service pages

**Issues:**
- Many orphan service pages (no internal links from parent pages)
- Services not all linked from the main `/services/` listing page

---

## Prioritized Action Plan

### Critical (Blocking Indexation/Ranking)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | **301 redirect all `-2` duplicate service pages** to primary versions and remove from sitemap | HIGH | LOW |
| 2 | **Noindex or 301 redirect `services_group/*`** section to canonical `/service/*` paths | HIGH | LOW |
| 3 | **Audit sitemap** — remove non-existent URLs and redirect targets | HIGH | LOW |

### High-Impact Improvements

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 4 | **Add `BlogPostingJsonLd`** to all blog article pages | MEDIUM | LOW |
| 5 | **Add `ServiceJsonLd`** to all service pages missing it | MEDIUM | MEDIUM |
| 6 | **Add `FaqPageJsonLd`** to blog articles with FAQ sections | MEDIUM | MEDIUM |
| 7 | **Optimize title tags** on thin-titled pages (tensile-test, impact-test, etc.) | MEDIUM | LOW |
| 8 | **Add rich text content** (≥300 words) to thin service pages | MEDIUM | HIGH |

### Quick Wins (Easy, Immediate Benefit)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 9 | Verify all OG images exist; fix broken social previews | LOW | LOW |
| 10 | Clean up homepage `keywords` meta tag | LOW | LOW |
| 11 | Add internal links from `/services/` listing to all service sub-pages | MEDIUM | MEDIUM |

### Long-Term Recommendations

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 12 | Create comparison/alternative pages (e.g., "Flow Meter Types Compared") | HIGH | HIGH |
| 13 | Build location-specific landing pages for Kuwait/Dubai/Saudi | HIGH | HIGH |
| 14 | Expand blog content to 10+ articles covering all three pillars | MEDIUM | HIGH |
| 15 | Implement hreflang if targeting multi-language (Arabic) in future | LOW | HIGH |

---

## What's Working Well

- **Strong LocalBusiness + Organization schema** in layout.tsx
- **Proper canonical tags** on all pages
- **Trailing slash consistency** site-wide
- **Well-structured sitemap** with priorities and change frequencies
- **Blog content quality** is exceptional (technical depth, E-E-A-T signals)
- **OpenGraph and Twitter Card metadata** on all pages
- **Breadcrumb schema** implemented throughout
- **FAQ schema** on high-value service page (flow measurement)
- **Clean URL structure** with descriptive slugs
- **robots.txt** properly configured (blocking `/_next/` and `component-demo/`)
- **Images use modern formats** (WebP, AVIF) with proper sizing
