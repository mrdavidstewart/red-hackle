import { render, screen } from "@testing-library/react"
import ServicesPage from "@/app/services/page"
import BuildersSparklePage from "@/app/services/builders-sparkle/page"
import RetailCleaningPage from "@/app/services/retail-cleaning/page"
import ContractCleaningPage from "@/app/services/contract-cleaning/page"
import DeepOneOffPage from "@/app/services/deep-one-off/page"
import EndOfTenancyPage from "@/app/services/end-of-tenancy/page"
import OfficeWorkplacePage from "@/app/services/office-workplace/page"
import AccommodationHousekeepingPage from "@/app/services/accommodation-housekeeping/page"
import LinenServicesPage from "@/app/services/linen-services/page"

describe("services pages", () => {
  it("renders the services overview", () => {
    render(<ServicesPage />)
    expect(screen.getByRole("heading", { name: /Professional Cleaning Services for Homes & Businesses/i })).toBeInTheDocument()
  })

  it("renders the office & workplace service page", () => {
    render(<OfficeWorkplacePage />)
    expect(screen.getByRole("heading", { name: /office & workplace cleaning/i, level: 1 })).toBeInTheDocument()
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
    expect(screen.getByRole("heading", { name: /deep & one-off cleaning/i, level: 1 })).toBeInTheDocument()
  })

  it("renders the commercial cleaning service page", () => {
    render(<RetailCleaningPage />)
    expect(screen.getByRole("heading", { name: /retail & public-facing commercial cleaning/i })).toBeInTheDocument()
  })

  it("renders the accommodation housekeeping service page", () => {
    render(<AccommodationHousekeepingPage />)
    expect(screen.getByRole("heading", { level: 1, name: /accommodation housekeeping/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /what's included/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /how we deliver/i })).toBeInTheDocument()
  })

  it("renders the linen services page", () => {
    render(<LinenServicesPage />)
    expect(screen.getByRole("heading", { level: 1, name: /linen services for short-stay accommodation/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /what's included/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /how we deliver/i })).toBeInTheDocument()
  })
})
