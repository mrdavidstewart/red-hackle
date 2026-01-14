import { render, screen } from "@testing-library/react"
import ServicesPage from "@/app/services/page"
import BuildersSparklePage from "@/app/services/builders-sparkle/page"
import CommercialCleaningServicePage from "@/app/services/commercial-cleaning/page"
import ContractCleaningPage from "@/app/services/contract-cleaning/page"
import DeepOneOffPage from "@/app/services/deep-one-off/page"
import EndOfTenancyPage from "@/app/services/end-of-tenancy/page"
import OfficeWorkplacePage from "@/app/services/office-workplace/page"

describe("services pages", () => {
  it("renders the services overview", () => {
    render(<ServicesPage />)
    expect(screen.getByRole("heading", { name: /commercial cleaning services/i })).toBeInTheDocument()
  })

  it("renders the office & workplace service page", () => {
    render(<OfficeWorkplacePage />)
    expect(screen.getByRole("heading", { name: /office & workplace cleaning/i })).toBeInTheDocument()
  })

  it("renders the contract cleaning service page", () => {
    render(<ContractCleaningPage />)
    expect(screen.getByRole("heading", { name: /contract cleaning services/i })).toBeInTheDocument()
  })

  it("renders the end of tenancy service page", () => {
    render(<EndOfTenancyPage />)
    expect(screen.getByRole("heading", { name: /end of tenancy cleaning/i })).toBeInTheDocument()
  })

  it("renders the builders & sparkle service page", () => {
    render(<BuildersSparklePage />)
    expect(screen.getByRole("heading", { name: /builders & sparkle cleaning/i })).toBeInTheDocument()
  })

  it("renders the deep & one-off service page", () => {
    render(<DeepOneOffPage />)
    expect(screen.getByRole("heading", { name: /deep & one-off cleaning/i })).toBeInTheDocument()
  })

  it("renders the commercial cleaning service page", () => {
    render(<CommercialCleaningServicePage />)
    expect(screen.getByRole("heading", { name: /commercial cleaning services/i })).toBeInTheDocument()
  })
})
