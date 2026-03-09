# Tru Gold Coast Bond Cleaners

## Current State
The site has 4 pages: Home, Services, About, Contact. The HomePage has hero, trust bar, why choose us, services preview, bond refund section, FAQ, and CTA. No suburb-specific pages exist.

## Requested Changes (Diff)

### Add
- 12 suburb pages (one per major Gold Coast suburb) at routes `/suburbs/:suburb`
- Each suburb page includes:
  - Unique `<title>`, meta description, and keywords meta tag for SEO
  - H1 with suburb name + bond cleaning keyword
  - ~400 words of simple, SEO-optimised content explaining bond cleaning in that suburb (written for a 10-year-old)
  - At least 1 image with descriptive alt text
  - CTA buttons (Get a Free Quote, WhatsApp)
- A "Suburbs We Serve" section on the HomePage linking to each suburb page
- A `useMetaTags` hook update (already exists) used on each suburb page

Suburbs: Surfers Paradise, Broadbeach, Southport, Robina, Burleigh Heads, Varsity Lakes, Nerang, Helensvale, Coomera, Labrador, Miami, Palm Beach

### Modify
- `App.tsx`: add 12 new suburb routes
- `HomePage.tsx`: add "Suburbs We Serve" grid section with links to each suburb page

### Remove
- Nothing removed

## Implementation Plan
1. Generate 3 suburb-themed cleaning images (reused across pages)
2. Create `SuburbPage.tsx` — a single component that accepts suburb data as props/params
3. Create `suburbData.ts` — data file with 400-word content, meta tags, and image per suburb
4. Update `App.tsx` with 12 suburb routes
5. Update `HomePage.tsx` with a new "Suburbs We Serve" section linking to all suburb pages
