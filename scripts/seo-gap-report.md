# SEO Route Gap Report

Generated while syncing live WP meta into Next.js.

## Summary

| Category | Count |
|----------|------:|
| Done URLs scraped | 162 |
| Exact static `page.tsx` match | 59 |
| Dynamic route match (service-area cities / counties) | 100 |
| No Next route (skipped apply) | 3 |

## Missing Next routes (meta scraped, not applied)

- `/arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year` (Done post)
- `/sell-my-house-fast-arizona` (Done page)
- `/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements` (Done post)

## Slug mismatch (aliased)

Live WP:
`/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements`

Next.js route:
`/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-in-requirements`

Alias wired in `lib/seo.ts` so the existing Next page receives the live meta.
