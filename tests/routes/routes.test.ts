import { NextRequest } from "next/server"
import { vi } from "vitest"
import { GET as getRobots } from "@/app/robots.txt/route"
import { GET as getSitemap } from "@/app/sitemap.xml/route"
import { GET as getContact, POST as postContact } from "@/app/api/contact/route"
import { clearRateLimit } from "@/lib/security"

// Mock the global fetch for server-side route testing
const mockFetch = vi.fn()
vi.stubGlobal("fetch", mockFetch)

describe("route handlers", () => {
  const originalEnv = process.env

  beforeEach(() => {
    // Reset the fetch mock for each test
    mockFetch.mockReset()
    mockFetch.mockResolvedValue({ ok: true } as Response)
    
    // Restore original environment
    process.env = { ...originalEnv }
    
    // Ensure test environment variables are available
    process.env.RESEND_API_KEY = "test-key"
    process.env.FROM_EMAIL = "Red Hackle <test@example.com>"
    
    clearRateLimit()
  })

  afterEach(() => {
    // Don't unstub all globals - just restore environment
    process.env = originalEnv
  })
  it("serves robots.txt", async () => {
    const response = getRobots()
    const text = await response.text()

    expect(response.headers.get("Content-Type")).toBe("text/plain")
    expect(text).toContain("Sitemap: https://www.redhacklecleaningservices.com/sitemap.xml")
  })

  it("serves sitemap.xml", async () => {
    const response = getSitemap()
    const text = await response.text()

    expect(response.headers.get("Content-Type")).toBe("application/xml")
    expect(text).toContain("<loc>https://www.redhacklecleaningservices.com/contact</loc>")
  })

  it("rejects unsupported methods for contact route", async () => {
    const response = await getContact()
    const data = await response.json()

    expect(response.status).toBe(405)
    expect(data.error).toBe("Method not allowed")
  })

  it("accepts valid contact submissions", async () => {
    mockFetch.mockResolvedValue({ ok: true } as Response)

    const formData = new FormData()
    formData.set("firstName", "Jamie")
    formData.set("lastName", "Smith")
    formData.set("email", "jamie@example.com")
    formData.set("phone", "07966881555")
    formData.set("message", "Office cleaning quote request.")
    formData.set("timestamp", Date.now().toString())

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
    })

    const response = await postContact(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
  })

  it("returns validation errors for invalid contact submissions", async () => {
    mockFetch.mockResolvedValue({ ok: true } as Response)

    const formData = new FormData()
    formData.set("firstName", "")
    formData.set("lastName", "")
    formData.set("email", "invalid-email")
    formData.set("phone", "12345")
    formData.set("message", "")
    formData.set("timestamp", Date.now().toString())

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
    })

    const response = await postContact(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe("All fields are required")
  })

  it("rejects submissions with honeypot field filled", async () => {
    process.env.RESEND_API_KEY = "test-key"

    const formData = new FormData()
    formData.set("firstName", "Jamie")
    formData.set("lastName", "Smith")
    formData.set("email", "jamie@example.com")
    formData.set("phone", "07966881555")
    formData.set("message", "Test message")
    formData.set("timestamp", Date.now().toString())
    formData.set("website", "https://spam.com")

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
    })

    const response = await postContact(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe("Spam detected")
  })

  it("rejects submissions with invalid timestamp", async () => {
    process.env.RESEND_API_KEY = "test-key"

    const formData = new FormData()
    formData.set("firstName", "Jamie")
    formData.set("lastName", "Smith")
    formData.set("email", "jamie@example.com")
    formData.set("phone", "07966881555")
    formData.set("message", "Test message")
    formData.set("timestamp", (Date.now() - 400000).toString())

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
    })

    const response = await postContact(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe("Invalid submission")
  })

  it("rejects submissions with invalid email format", async () => {
    process.env.RESEND_API_KEY = "test-key"

    const formData = new FormData()
    formData.set("firstName", "Jamie")
    formData.set("lastName", "Smith")
    formData.set("email", "notanemail")
    formData.set("phone", "07966881555")
    formData.set("message", "Test message")
    formData.set("timestamp", Date.now().toString())

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
    })

    const response = await postContact(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe("Invalid email format")
  })

  it("rejects submissions with invalid phone format", async () => {
    process.env.RESEND_API_KEY = "test-key"

    const formData = new FormData()
    formData.set("firstName", "Jamie")
    formData.set("lastName", "Smith")
    formData.set("email", "jamie@example.com")
    formData.set("phone", "12345")
    formData.set("message", "Test message")
    formData.set("timestamp", Date.now().toString())

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
    })

    const response = await postContact(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe("Invalid phone format")
  })

  it("returns error when RESEND_API_KEY is not configured", async () => {
    delete process.env.RESEND_API_KEY

    const formData = new FormData()
    formData.set("firstName", "Jamie")
    formData.set("lastName", "Smith")
    formData.set("email", "jamie@example.com")
    formData.set("phone", "07966881555")
    formData.set("message", "Test message")
    formData.set("timestamp", Date.now().toString())

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
    })

    const response = await postContact(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.error).toBe("Email service not configured")
  })

  it("handles email sending failures", async () => {
    mockFetch.mockResolvedValue({ ok: false } as Response)

    const formData = new FormData()
    formData.set("firstName", "Jamie")
    formData.set("lastName", "Smith")
    formData.set("email", "jamie@example.com")
    formData.set("phone", "07966881555")
    formData.set("message", "Test message")
    formData.set("timestamp", Date.now().toString())

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
    })

    const response = await postContact(request)
    const data = await response.json()

    expect(response.status).toBe(502)
    expect(data.error).toBe("Unable to send message")
  })

  it("handles unexpected errors gracefully", async () => {
    process.env.RESEND_API_KEY = "test-key"
    
    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: null,
    })

    const response = await postContact(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.error).toBe("Internal server error")
  })

  it("enforces rate limiting after multiple requests", async () => {
    mockFetch.mockResolvedValue({ ok: true } as Response)

    // Make 5 successful requests (the limit)
    for (let i = 0; i < 5; i++) {
      const formData = new FormData()
      formData.set("firstName", "Jamie")
      formData.set("lastName", "Smith")
      formData.set("email", "jamie@example.com")
      formData.set("phone", "07966881555")
      formData.set("message", "Test message")
      formData.set("timestamp", Date.now().toString())

      const request = new NextRequest("http://localhost/api/contact", {
        method: "POST",
        body: formData,
        headers: {
          "x-forwarded-for": "192.168.1.1",
        },
      })

      await postContact(request)
    }

    // 6th request should be rate limited
    const formData = new FormData()
    formData.set("firstName", "Jamie")
    formData.set("lastName", "Smith")
    formData.set("email", "jamie@example.com")
    formData.set("phone", "07966881555")
    formData.set("message", "Test message")
    formData.set("timestamp", Date.now().toString())

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
      headers: {
        "x-forwarded-for": "192.168.1.1",
      },
    })

    const response = await postContact(request)
    const data = await response.json()

    expect(response.status).toBe(429)
    expect(data.error).toBe("Too many requests")
  })

  it("handles rate limiting with x-real-ip header", async () => {
    mockFetch.mockResolvedValue({ ok: true } as Response)

    const formData = new FormData()
    formData.set("firstName", "Jamie")
    formData.set("lastName", "Smith")
    formData.set("email", "jamie@example.com")
    formData.set("phone", "07966881555")
    formData.set("message", "Test message")
    formData.set("timestamp", Date.now().toString())

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
      headers: {
        "x-real-ip": "10.0.0.1",
      },
    })

    const response = await postContact(request)

    expect(response.status).toBe(200)
  })

  it("handles rate limiting with no IP headers", async () => {
    mockFetch.mockResolvedValue({ ok: true } as Response)

    const formData = new FormData()
    formData.set("firstName", "Jamie")
    formData.set("lastName", "Smith")
    formData.set("email", "jamie@example.com")
    formData.set("phone", "07966881555")
    formData.set("message", "Test message")
    formData.set("timestamp", Date.now().toString())

    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: formData,
    })

    const response = await postContact(request)

    expect(response.status).toBe(200)
  })
})
