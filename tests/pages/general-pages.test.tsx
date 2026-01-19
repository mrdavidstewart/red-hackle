import { render, screen } from "@testing-library/react"
import AboutPage from "@/app/about/page"
import CaseStudiesPage from "@/app/case-studies/page"
import CommercialCleaningPage from "@/app/commercial-cleaning/page"
import ContactPage from "@/app/contact/page"
import PrivacyPolicyPage from "@/app/privacy-policy/page"
import TermsOfServicePage from "@/app/terms-of-service/page"

describe("static pages", () => {
  it("renders the About page", () => {
    render(<AboutPage />)
    expect(screen.getByRole("heading", { name: /disciplined, accountable cleaning partner/i })).toBeInTheDocument()
  })

  it("renders the Case Studies page", () => {
    render(<CaseStudiesPage />)
    expect(screen.getByRole("heading", { name: /examples of commercial outcomes/i })).toBeInTheDocument()
  })

  it("renders the Commercial Cleaning page", () => {
    render(<CommercialCleaningPage />)
    expect(
      screen.getByRole("heading", { name: /managed contract cleaning with clear accountability/i }),
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
    expect(screen.getByText(/165 Brook Street, DD5 1DJ/i)).toBeInTheDocument()
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
