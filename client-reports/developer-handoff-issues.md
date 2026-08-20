# Lighthouse under 70 — developer handoff

**Site:** https://azmortgage.vercel.app  
**Date:** 17 Aug 2026  
**Bar:** score **80+** is the acceptance line. **Under 70** is this ticket.  
**Scans:** Unlighthouse mobile (183 pages, sampled) and desktop (222 pages, full sitemap)

Full page-level scores: `reports/under-70-pages.csv`

---

## What failed

| Device | Pages scanned | Pages with any category under 70 | Performance under 70 | SEO under 70 | A11y / Best Practices under 70 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Mobile | 183 | **183 (100%)** | 0 | **183** | 0 |
| Desktop | 222 | **222 (100%)** | **2** | **222** | 0 |

There are two distinct problems. SEO is a single site-wide bug. Performance is two pages with a main-thread stall.

---

## P0 — Site-wide: pages are blocked from indexing

**Every scanned URL** includes:

```html
<meta name="robots" content="noindex, nofollow" />
```

Lighthouse audit: **Page is blocked from indexing** (`is-crawlable` score 0).

That alone drops **SEO to 69** on 403 of 405 scans. Google will not index these pages while this tag is present.

### Extra SEO miss (one page)

| URL | Mobile SEO | Desktop SEO | Extra failure |
| --- | ---: | ---: | --- |
| https://azmortgage.vercel.app/mortgage-101/ | 61 | 61 | Links do not have descriptive text (`link-text`) |

### Fix

1. Remove `noindex, nofollow` on the production domain. If this Vercel URL is only a preview, confirm production (likely `azmortgagebrothers.com`) does **not** ship this tag, then re-run Lighthouse on production.
2. On `/mortgage-101/`, replace generic link text (`click here`, `read more`, `learn more`) with descriptive anchors.

**Done when:** `is-crawlable` passes and SEO is **80+** on homepage + a sample of inner pages. `/mortgage-101/` SEO should match the rest after link-text is fixed.

---

## P0 — Desktop performance under 70

Mobile performance is fine (182/183 pages at 95–100; homepage 79, which is still below the 80 bar but not in this under-70 list).

Desktop has **two** pages under 70. Both are the same failure mode: **Total Blocking Time ~5s** and **Speed Index ~9s**.

| URL | Perf | LCP | FCP | TBT | Speed Index | TTI |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| https://azmortgage.vercel.app/ | **42** | 2.5 s | 1.4 s | **5,070 ms** | **9.1 s** | 6.6 s |
| https://azmortgage.vercel.app/arizona-mortgage-closing-costs/ | **45** | 2.4 s | 1.1 s | **5,420 ms** | **9.7 s** | 6.6 s |

Main-thread work on both is ~5.8–5.9s, almost all in the **Other** group (not React render). Unused JS on both:

- `/_next/static/chunks/4bd1b696-0562a75e9b1eb3c3.js` (~25 KB wasted)
- `/_next/static/chunks/3794-33a1ead1018407b5.js` (~25 KB wasted)

That unused JS is too small to explain a 5s TBT. Look for a long task on the homepage and closing-costs page: analytics, chat widget, map, calculator, or a sync loop during hydration.

### Fix

1. Profile both URLs in Chrome Performance panel (desktop, no throttle first, then with Lighthouse desktop settings).
2. Find the ~5s long task. Likely candidates: third-party scripts, a mortgage calculator, or work that only runs on these two templates.
3. Defer / lazy-load third parties until after first paint. Split the heavy chunk so it is not on the homepage critical path.
4. Re-run desktop Lighthouse on those two URLs. **Target: Performance 80+.** TBT should be well under 300 ms on desktop.

---

## Acceptance

Do not close this until:

- [ ] Production pages do **not** send `noindex, nofollow`
- [ ] Homepage desktop Performance **80+** (currently 42)
- [ ] `/arizona-mortgage-closing-costs/` desktop Performance **80+** (currently 45)
- [ ] `/mortgage-101/` SEO **80+**
- [ ] Spot-check 5 other URLs on mobile and desktop: all four categories **80+**

Unlighthouse reports (still on this machine if scans are running):

- Mobile: http://localhost:5678/
- Desktop: http://localhost:5679/
