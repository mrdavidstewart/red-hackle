import { NextResponse } from "next/server"

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

User-agent: Googlebot
Disallow: /api/

User-agent: Bingbot
Disallow: /api/

User-agent: Slurp
Disallow: /api/

Sitemap: https://www.redhacklecleaningservices.com/sitemap.xml
`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
