import { render, screen } from "@testing-library/react"
import RootLayout from "@/app/layout"

// Mock Next.js components
vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter" }),
}))

vi.mock("next/script", () => ({
  default: ({ children, ...props }: { children?: React.ReactNode }) => <script {...props}>{children}</script>,
}))

describe("RootLayout", () => {
  it("renders children within the layout", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>,
    )

    expect(screen.getByText(/test content/i)).toBeInTheDocument()
  })

  it("includes header navigation", () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>,
    )

    expect(screen.getByRole("banner")).toBeInTheDocument()
  })

  it("includes footer", () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>,
    )

    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("includes mobile CTA component", () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>,
    )

    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })
})
