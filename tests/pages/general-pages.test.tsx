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
    expect(screen.getByRole("heading", { level: 1, name: /Red Hackle Cleaning Services/i })).toBeInTheDocument()
  })

  it("renders the Commercial Cleaning page", () => {
    render(<CommercialCleaningPage />)
    expect(
      screen.getByRole("heading", { name: /commercial cleaning services across the east coast of scotland/i }),
    ).toBeInTheDocument()
  })

  it("renders the Consumables & Hygiene Supplies page", () => {
    render(<ConsumablesPage />)

    expect(
      screen.getByRole("heading", { level: 1, name: /managed consumables & hygiene supply/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /what we supply/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /common scenarios we support/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /how we manage consumables/i }),
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
    expect(screen.getByText(/last updated: 26 january 2026/i)).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /who we are/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /what personal data we collect/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /how we use your information/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /your data protection rights/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /operations@redhacklegroup.com/i })).toHaveAttribute(
      "href",
      "mailto:operations@redhacklegroup.com",
    )
  })

  it("renders the Terms of Service page", () => {
    render(<TermsOfServicePage />)
    expect(screen.getByRole("heading", { name: /terms of service/i })).toBeInTheDocument()
    expect(screen.getByText(/last updated: 26 january 2026/i)).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /about us/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /pricing and payment/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /governing law/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /operations@redhacklegroup.com/i })).toHaveAttribute(
      "href",
      "mailto:operations@redhacklegroup.com",
    )
  })
})
