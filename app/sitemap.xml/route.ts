import { NextResponse } from "next/server"

export function GET() {
  const lastmod = new Date().toISOString()

  const urls = [
    "/",
    "/about",
    "/case-studies",
    "/careers",
    "/commercial-cleaning",
    "/consumables",
    "/contact",
    "/privacy-policy",
    "/resources",
    "/services",
    "/services/accommodation-housekeeping",
    "/services/builders-sparkle",
    "/services/commercial-cleaning",
    "/services/office-workplace",
    "/services/contract-cleaning",
    "/services/end-of-tenancy",
    "/services/deep-one-off",
    "/services/linen-services",
    "/terms-of-service",
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>https://www.redhacklecleaningservices.com${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
