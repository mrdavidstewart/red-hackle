import { render, screen } from "@testing-library/react"
import { SiteFooter } from "@/components/site/footer"

describe("SiteFooter", () => {
  it("renders company information and key links", () => {
    render(<SiteFooter />)

    expect(screen.getAllByText(/red hackle cleaning services/i)[0]).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /commercial cleaning/i })).toHaveAttribute("href", "/commercial-cleaning")
    expect(screen.getByRole("link", { name: /careers/i })).toHaveAttribute("href", "/careers")
    expect(screen.getByRole("link", { name: /privacy policy/i })).toHaveAttribute("href", "/privacy-policy")
    expect(screen.getByRole("link", { name: /terms of service/i })).toHaveAttribute("href", "/terms-of-service")
  })
})
