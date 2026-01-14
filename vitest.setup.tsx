import "@testing-library/jest-dom/vitest"
import type React from "react"
import { vi } from "vitest"

// Simple fetch polyfill for test environment
if (typeof global !== "undefined" && !global.fetch) {
  global.fetch = vi.fn()
}

if (typeof globalThis !== "undefined" && !globalThis.fetch) {
  globalThis.fetch = vi.fn()
}

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
