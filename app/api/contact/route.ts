import { type NextRequest, NextResponse } from "next/server"
import { sanitizeInput, isValidEmail, isValidPhone, checkRateLimit, secureHeaders } from "@/lib/security"

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    // Robust IP extraction (restore header-based derivation for edge/platform variability)
    const forwardedFor = request.headers.get("x-forwarded-for") || ""
    const realIp = request.headers.get("x-real-ip") || ""
    const cfConnectingIp = request.headers.get("cf-connecting-ip") || ""
    const flyClientIp = request.headers.get("fly-client-ip") || ""
    const vercelForwardedFor = request.headers.get("x-vercel-forwarded-for") || ""
    const candidateChain = [forwardedFor, vercelForwardedFor]
      .filter(Boolean)
      .flatMap((v: string) => v.split(",").map((s: string) => s.trim()).filter(Boolean))
    const clientIP =
      candidateChain[0] ||
      realIp ||
      cfConnectingIp ||
      flyClientIp ||
      (typeof request.ip === "string" ? request.ip : "") ||
      "unknown"
    if (!checkRateLimit(clientIP, 5, 300000)) {
      return NextResponse.json(
        { error: "Too many requests" },
        {
          status: 429,
          headers: secureHeaders,
        },
      )
    }

    // Parse and validate request
    const formData = await request.formData()

    const firstName = sanitizeInput((formData.get("firstName") as string) || "")
    const lastName = sanitizeInput((formData.get("lastName") as string) || "")
    const email = sanitizeInput((formData.get("email") as string) || "")
    const phone = sanitizeInput((formData.get("phone") as string) || "")
    const message = sanitizeInput((formData.get("message") as string) || "")
    const token = (formData.get("token") as string) || ""
    const timestamp = (formData.get("timestamp") as string) || ""
    const honeypot = (formData.get("website") as string) || ""

    // Security checks
    if (honeypot) {
      return NextResponse.json(
        { error: "Spam detected" },
        {
          status: 400,
          headers: secureHeaders,
        },
      )
    }

    // Validate timestamp (prevent replay attacks)
    const submissionTime = Number.parseInt(timestamp)
    const now = Date.now()
    if (!submissionTime || Math.abs(now - submissionTime) > 300000) {
      // 5 minutes
      return NextResponse.json(
        { error: "Invalid submission" },
        {
          status: 400,
          headers: secureHeaders,
        },
      )
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        {
          status: 400,
          headers: secureHeaders,
        },
      )
    }

    // Validate formats
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        {
          status: 400,
          headers: secureHeaders,
        },
      )
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Invalid phone format" },
        {
          status: 400,
          headers: secureHeaders,
        },
      )
    }

    // In production, you would:
    // 1. Save to secure database
    // 2. Send email notification
    // 3. Log the submission securely

    console.log("Secure contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      message: message.substring(0, 100) + "...", // Don't log full message
      timestamp: new Date(submissionTime).toISOString(),
      ip: clientIP,
    })

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      {
        status: 200,
        headers: secureHeaders,
      },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
        headers: secureHeaders,
      },
    )
  }
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405,
      headers: {
        ...secureHeaders,
        Allow: "POST",
      },
    },
  )
}
