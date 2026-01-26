import { render, screen } from "@testing-library/react"
import AboutPage from "@/app/about/page"
import CommercialCleaningPage from "@/app/commercial-cleaning/page"
import ConsumablesPage from "@/app/consumables/page"
import ContactPage from "@/app/contact/page"
import CareersPage from "@/app/careers/page"
import PrivacyPolicyPage from "@/app/privacy-policy/page"
import TermsOfServicePage from "@/app/terms-of-service/page"
import { officeAddress } from "@/lib/structured-data"

describe("static pages", () => {
  it("renders the About page", () => {
    render(<AboutPage />)
    expect(screen.getByRole("heading", { level: 1, name: /A disciplined, accountable cleaning partner/i })).toBeInTheDocument()
  })

  it("renders the Commercial Cleaning page", () => {
    render(<CommercialCleaningPage />)
    expect(
      screen.getByRole("heading", { name: /contract cleaning with clear accountability/i }),
    ).toBeInTheDocument()
  })

  it("renders the Consumables & Hygiene Supplies page", () => {
    render(<ConsumablesPage />)

    expect(
      screen.getByRole("heading", { level: 1, name: /consumables & hygiene supplies/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 2, name: /product range/i })).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { level: 2, name: /speak to us about consumables supply/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /we're happy to review your current setup and advise how consumables can be integrated into your cleaning programme\./i,
      ),
    ).toBeInTheDocument()
  })

  it("renders the Contact page with key actions", () => {
    render(<ContactPage />)

    expect(screen.getByRole("heading", { name: /request a commercial cleaning quote/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /call 07966 881 555/i })).toHaveAttribute("href", "tel:+447966881555")
    expect(screen.getByRole("link", { name: /whatsapp us/i })).toHaveAttribute("href", "https://wa.me/447966881555")

    // Check all contact details are rendered
    expect(screen.getAllByText(/07966 881 555/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/operations@redhacklegroup.com/i)).toBeInTheDocument()
    // Check office address is in the Google Maps iframe title
    expect(
      screen.getByTitle(
        new RegExp(`${officeAddress}`, 'i'),
      ),
    ).toBeInTheDocument()
  })

  it("renders the Careers page with key content", () => {
    render(<CareersPage />)

    expect(screen.getByRole("heading", { level: 1, name: /careers at red hackle/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /operations@redhacklegroup.com/i })).toHaveAttribute(
      "href",
      "mailto:operations@redhacklegroup.com",
    )
  })

  it("renders the Privacy Policy page", () => {
    render(<PrivacyPolicyPage />)
    expect(screen.getByRole("heading", { name: /privacy policy/i })).toBeInTheDocument()
  })

  it("renders the Terms of Service page", () => {
    render(<TermsOfServicePage />)
    expect(screen.getByRole("heading", { name: /terms of service/i })).toBeInTheDocument()
  })
})
