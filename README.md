# Red Hackle Cleaning Services website

Single-page marketing site for Red Hackle Cleaning Services built with Next.js (App Router).

## Key files
- `app/layout.tsx`: Global metadata/head configuration and JSON-LD.
- `app/page.tsx`: Main single-page layout (hero, services, coverage, testimonials, about, contact, FAQ).
- `app/sitemap.xml/route.ts`: Dynamic sitemap.
- `app/robots.txt/route.ts`: Robots.txt served via route handler.

## Running locally
```bash
pnpm dev # or npm/yarn/bun dev
```
Visit http://localhost:3000.

## Search Console and analytics readiness
- Add a Google Search Console verification meta tag via the `verification.google` field in `app/layout.tsx` metadata or by inserting a `<meta name="google-site-verification" ...>` inside the `<head>` block there.
- Add analytics/gtag scripts with Next.js `<Script>` in `app/layout.tsx` so they load globally without changing page layout. Keep them `afterInteractive` to avoid layout shift.

## Future content/FAQ ideas (for approval before adding)
- Coverage radius specifics (e.g., travel fees beyond 30 miles).
- Insurance and vetting process details.
- Booking/lead times and cancellation flexibility.
- How keys/access and alarm codes are handled for commercial cleans.

## Off-site/local SEO actions to consider
- Keep Google Business Profile updated with photos, hours, services and posts.
- Maintain consistent NAP (name, address, phone) across directories (Yell, Thomson Local, Bing Places, Apple Maps).
- Encourage Google reviews after completed jobs; respond to all reviews.
- List core services and locations in trusted local/industry directories.
