import { render, screen } from "@testing-library/react"
import { vi } from "vitest"

vi.mock("@/lib/googleReviews", () => ({
  fetchGoogleReviews: vi.fn().mockResolvedValue([
    {
      id: "google:alex",
      source: "google",
      rating: 5,
      quote: "Excellent service.",
      name: "Alex",
      role: "Google review",
      url: "https://maps.example.com",
    },
  ]),
}))

import HomePage from "@/app/page"

describe("HomePage", () => {
  it("renders hero content and testimonials", async () => {
    const page = await HomePage()
    render(page)

    expect(
      screen.getByRole("heading", { name: /commercial & contract cleaning services/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/trusted by our clients/i)).toBeInTheDocument()
    expect(screen.getByText(/excellent service/i)).toBeInTheDocument()
  })
})
