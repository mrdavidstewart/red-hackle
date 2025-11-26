import { NextResponse } from "next/server"

export function GET() {
  const robotsTxt = `
User-agent: *
Allow: /
Disallow: /new-starter
Disallow: /new-starter/

# Specific bot instructions
User-agent: Googlebot
Disallow: /new-starter
Disallow: /new-starter/

User-agent: Bingbot
Disallow: /new-starter
Disallow: /new-starter/

User-agent: Slurp
Disallow: /new-starter
Disallow: /new-starter/

Sitemap: https://www.redhacklecleaningservices.com/sitemap.xml
`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
