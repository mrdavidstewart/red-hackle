import "@testing-library/jest-dom/vitest"
import type React from "react"

// Stub fetch globally before any tests run
vi.stubGlobal(
  "fetch",
  vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ success: true }),
  }),
)

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
