import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add security headers for all routes
  response.headers.set("X-Frame-Options", "SAMEORIGIN")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  // Special handling for new-starter route
  if (request.nextUrl.pathname.startsWith("/new-starter")) {
    // Extra privacy headers for the private route
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet, noimageindex")
    response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate, private")
    response.headers.set("Pragma", "no-cache")
    response.headers.set("Expires", "0")
  }

  // Block suspicious requests
  const userAgent = request.headers.get("user-agent") || ""
  const suspiciousPatterns = [/bot/i, /crawler/i, /spider/i, /scraper/i]
  const legitimateBots = [/googlebot/i, /bingbot/i, /slurp/i, /duckduckbot/i]

  const isSuspicious = suspiciousPatterns.some((pattern) => pattern.test(userAgent))
  const isLegitimate = legitimateBots.some((pattern) => pattern.test(userAgent))

  if (isSuspicious && !isLegitimate) {
    return new NextResponse("Access Denied", { status: 403 })
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
