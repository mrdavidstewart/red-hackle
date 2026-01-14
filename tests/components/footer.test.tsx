import { render, screen } from "@testing-library/react"
import { SiteFooter } from "@/components/site/footer"

describe("SiteFooter", () => {
  it("renders company information and key links", () => {
    render(<SiteFooter />)

    expect(screen.getByText(/red hackle cleaning services/i)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /commercial cleaning/i })).toHaveAttribute("href", "/commercial-cleaning")
    expect(screen.getByRole("link", { name: /privacy policy/i })).toHaveAttribute("href", "/privacy-policy")
    expect(screen.getByRole("link", { name: /terms of service/i })).toHaveAttribute("href", "/terms-of-service")
  })
})
