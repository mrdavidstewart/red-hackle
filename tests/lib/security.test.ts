import {
  checkRateLimit,
  clearRateLimit,
  generateSecureToken,
  isValidEmail,
  isValidPhone,
  isValidPostcode,
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

  it("validates UK postcodes", () => {
    expect(isValidPostcode("SW1A 1AA")).toBe(true)
    expect(isValidPostcode("B33 8TH")).toBe(true)
    expect(isValidPostcode("sw1a1aa")).toBe(true)
    expect(isValidPostcode("INVALID")).toBe(false)
    expect(isValidPostcode("")).toBe(false)
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

  it("resets rate limit after window expires", () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2024-01-01T00:00:00Z"))

    const key = "reset-test"
    expect(checkRateLimit(key, 1, 1000)).toBe(true)
    expect(checkRateLimit(key, 1, 1000)).toBe(false)

    // Move time forward past the window
    vi.setSystemTime(new Date("2024-01-01T00:00:01.001Z"))
    expect(checkRateLimit(key, 1, 1000)).toBe(true)

    vi.useRealTimers()
    clearRateLimit()
  })

  it("generates secure tokens", () => {
    const token = generateSecureToken()
    expect(token).toEqual(expect.any(String))
    expect(token.length).toBeGreaterThan(10)
  })

  it("sanitizes non-string input", () => {
    expect(sanitizeInput(null as unknown as string)).toBe("")
    expect(sanitizeInput(undefined as unknown as string)).toBe("")
  })

  it("truncates long strings", () => {
    const longString = "a".repeat(2000)
    const result = sanitizeInput(longString)
    expect(result.length).toBeLessThanOrEqual(1000)
  })

  it("generates tokens using window.crypto when available", () => {
    // Mock window.crypto
    const originalWindow = global.window
    const mockCrypto = {
      getRandomValues: vi.fn((array: Uint8Array) => {
        for (let i = 0; i < array.length; i++) {
          array[i] = i % 256
        }
        return array
      }),
    }

    Object.defineProperty(global, "window", {
      value: { crypto: mockCrypto },
      writable: true,
    })

    const token = generateSecureToken()
    expect(token).toEqual(expect.any(String))
    expect(mockCrypto.getRandomValues).toHaveBeenCalled()

    global.window = originalWindow
  })

  it("exposes secure headers", () => {
    expect(secureHeaders).toMatchObject({
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
    })
  })
})
