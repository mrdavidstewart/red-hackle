import { render, screen } from "@testing-library/react"
import { MobileStickyCta } from "@/components/site/mobile-cta"

describe("MobileStickyCta", () => {
  it("renders call and quote actions", () => {
    render(<MobileStickyCta />)

    expect(screen.getByRole("link", { name: /call now/i })).toHaveAttribute("href", "tel:+447966881555")
    expect(screen.getByRole("link", { name: /get a quote/i })).toHaveAttribute("href", "/contact")
  })
})
