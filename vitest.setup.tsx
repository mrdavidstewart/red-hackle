import "@testing-library/jest-dom/vitest"
import type React from "react"
import { vi, beforeEach } from "vitest"

// Reset and setup fetch mock before each test
beforeEach(() => {
  // Clear any existing mocks
  vi.clearAllMocks()
  
  // Ensure fetch is available as a mockable function
  if (!globalThis.fetch) {
    globalThis.fetch = vi.fn()
  }
  if (!global.fetch) {
    global.fetch = vi.fn()
  }
})

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    <div data-testid="next-image" data-src={typeof src === "string" ? src : ""} data-alt={alt} {...props} />
  ),
}))

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
    <a href={typeof href === "string" ? href : ""} {...props}>
      {children}
    </a>
  ),
}))
