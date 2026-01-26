# Red Hackle Cleaning Services website

Commercial-first marketing site for Red Hackle Cleaning Services built with Next.js (App Router) and Tailwind CSS.

## Key areas
- `app/page.tsx`: Commercial-first homepage with sectors, services, proof, and CTA content.
- `app/commercial-cleaning/page.tsx`: Contract cleaning overview and onboarding.
- `app/services/*`: Individual service pages.
- `app/contact/page.tsx`: Quote enquiry form and contact details.
- `app/sitemap.xml/route.ts` and `app/robots.txt/route.ts`: SEO assets.

## Running locally
```bash
pnpm dev
```
Visit http://localhost:3000.

## Build
```bash
pnpm build
pnpm start
```

## Testing
```bash
pnpm test
```

### Coverage expectations
- Coverage is enforced at 80% for lines, statements, branches, and functions.
- Run `pnpm test` to generate text and HTML coverage reports.

## SEO + structured data
- Global metadata, Open Graph, and Twitter cards are configured in `app/layout.tsx`.
- JSON-LD LocalBusiness and Service schema is injected in `app/layout.tsx`.
- `app/sitemap.xml/route.ts` and `app/robots.txt/route.ts` provide crawl-ready assets.

## Dependency update tooling
- Dependabot config: `.github/dependabot.yml`.
- Renovate config: `renovate.json`.
