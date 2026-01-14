import { NextRequest } from "next/server"
import { vi } from "vitest"
import { GET as getRobots } from "@/app/robots.txt/route"
import { GET as getSitemap } from "@/app/sitemap.xml/route"
import { GET as getContact, POST as postContact } from "@/app/api/contact/route"

describe("route handlers", () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    vi.unstubAllGlobals()
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
    process.env.RESEND_API_KEY = "test-key"
    process.env.FROM_EMAIL = "Red Hackle <test@example.com>"

    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal("fetch", fetchMock)

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
    process.env.RESEND_API_KEY = "test-key"
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal("fetch", fetchMock)

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
})
