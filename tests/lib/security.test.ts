import {
  checkRateLimit,
  generateSecureToken,
  isValidEmail,
  isValidPhone,
  sanitizeInput,
  secureHeaders,
} from "@/lib/security"
import { vi } from "vitest"

describe("security utilities", () => {
  it("sanitizes potentially unsafe input", () => {
    const dirty = `<script>alert("x")</script> javascript: onload=alert(1)`
    const result = sanitizeInput(dirty)

    expect(result).not.toMatch(/<|>|javascript:|onload=/i)
  })

  it("validates email addresses", () => {
    expect(isValidEmail("ops@redhacklegroup.com")).toBe(true)
    expect(isValidEmail("invalid-email")).toBe(false)
  })

  it("validates UK phone numbers", () => {
    expect(isValidPhone("07966 881 555")).toBe(true)
    expect(isValidPhone("+447966881555")).toBe(true)
    expect(isValidPhone("12345")).toBe(false)
  })

  it("enforces rate limits within a window", () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2024-01-01T00:00:00Z"))

    const key = "limit-test"
    expect(checkRateLimit(key, 2, 1000)).toBe(true)
    expect(checkRateLimit(key, 2, 1000)).toBe(true)
    expect(checkRateLimit(key, 2, 1000)).toBe(false)

    vi.setSystemTime(new Date("2024-01-01T00:00:02Z"))
    expect(checkRateLimit(key, 2, 1000)).toBe(true)

    vi.useRealTimers()
  })

  it("generates secure tokens", () => {
    const token = generateSecureToken()
    expect(token).toEqual(expect.any(String))
    expect(token.length).toBeGreaterThan(10)
  })

  it("exposes secure headers", () => {
    expect(secureHeaders).toMatchObject({
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
    })
  })
})
