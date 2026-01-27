import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { sanitizeInput, isValidEmail, isValidPhone, checkRateLimit, secureHeaders } from "@/lib/security"

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
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
    const timestamp = (formData.get("timestamp") as string) || ""
    const honeypot = (formData.get("website") as string) || ""
    const turnstileToken = (formData.get("turnstileToken") as string) || ""

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

    // Verify Turnstile token before sending any email.
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY is not configured")
      return NextResponse.json(
        { error: "Captcha verification unavailable" },
        {
          status: 500,
          headers: secureHeaders,
        },
      )
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        {
          status: 400,
          headers: secureHeaders,
        },
      )
    }

    try {
      const verificationResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
          ...(clientIP !== "unknown" ? { remoteip: clientIP } : {}),
        }),
      })

      if (!verificationResponse.ok) {
        console.warn("Turnstile verification failed", { status: verificationResponse.status })
        return NextResponse.json(
          { error: "Captcha verification failed" },
          {
            status: 400,
            headers: secureHeaders,
          },
        )
      }

      const verificationData = (await verificationResponse.json()) as {
        success?: boolean
        "error-codes"?: string[]
      }

      if (!verificationData.success) {
        console.warn("Turnstile verification rejected", verificationData)
        return NextResponse.json(
          { error: "Captcha verification failed" },
          {
            status: 400,
            headers: secureHeaders,
          },
        )
      }
    } catch (error) {
      console.error("Turnstile verification error", error)
      return NextResponse.json(
        { error: "Captcha verification failed" },
        {
          status: 502,
          headers: secureHeaders,
        },
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        {
          status: 500,
          headers: secureHeaders,
        },
      )
    }

    const fromEmail = process.env.FROM_EMAIL || "Red Hackle <onboarding@resend.dev>"
    const emailSubject = `New contact form enquiry from ${firstName} ${lastName}`
    const emailText = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      message,
    ].join("\n")

    const resend = new Resend(resendApiKey)

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: "operations@redhacklegroup.com",
      subject: emailSubject,
      text: emailText,
      replyTo: email,
    })

    if (error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        {
          status: 500,
          headers: secureHeaders,
        },
      )
    }

    return NextResponse.json(
      { success: true, data },
      {
        status: 200,
        headers: secureHeaders,
      },
    )
  } catch {
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
