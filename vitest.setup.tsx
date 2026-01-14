import "@testing-library/jest-dom/vitest"
import type React from "react"
import { vi, beforeEach, afterEach } from "vitest"

// Create a mock fetch function
const mockFetch = vi.fn()

// Set it globally before all tests
vi.stubGlobal("fetch", mockFetch)

// Reset mock between tests
beforeEach(() => {
  mockFetch.mockClear()
})

afterEach(() => {
  mockFetch.mockClear()
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
