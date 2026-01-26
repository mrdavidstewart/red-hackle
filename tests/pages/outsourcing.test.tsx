import { render, screen } from "@testing-library/react"
import OutsourcingPage from "@/app/outsourcing/page"

describe("Outsourcing page", () => {
    it("renders the main heading", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { level: 1, name: /outsourced cleaning delivery/i }),
        ).toBeInTheDocument()
    })

    it("renders the subheading", () => {
        render(<OutsourcingPage />)
        expect(screen.getByText(/a dependable contractor for service partners/i)).toBeInTheDocument()
    })

    it("renders the introduction section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/at red hackle cleaning services, we specialise in commercial and contract cleaning services/i),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/whether you are managing multiple sites, working with facilities teams/i),
        ).toBeInTheDocument()
    })

    it("renders the what partnering looks like section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /what partnering with red hackle looks like/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/we act as a trusted contractor for outsourced cleaning delivery/i),
        ).toBeInTheDocument()
    })

    it("renders all approach items", () => {
        render(<OutsourcingPage />)
        expect(screen.getByRole("heading", { name: /structured onboarding and mobilisation/i })).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /clear scope and performance reporting/i })).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /experienced, supervised teams/i })).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /flexible scheduling/i })).toBeInTheDocument()
    })

    it("renders the coverage across Scotland section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /coverage across scotland/i }),
        ).toBeInTheDocument()
        expect(screen.getByText(/tayside/i)).toBeInTheDocument()
        expect(screen.getByText(/glasgow/i)).toBeInTheDocument()
        expect(screen.getByText(/edinburgh/i)).toBeInTheDocument()
        expect(screen.getByText(/aberdeen and aberdeenshire/i)).toBeInTheDocument()
    })

    it("renders the who we support section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /who we support/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/already have cleaning contracts or service commitments in place/i),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/need dependable delivery without day-to-day operational management/i),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/expect professional teams aligned to defined scopes and standards/i),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/value clear communication, reporting and accountability/i),
        ).toBeInTheDocument()
    })

    it("renders the why partners choose Red Hackle section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /why partners choose red hackle/i }),
        ).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /accountability and quality assurance/i })).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /fast response and mobilisation/i })).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /transparent delivery/i })).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: /professional representation/i })).toBeInTheDocument()
    })

    it("renders accountability card content", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/defined scopes, supervised teams and structured oversight ensure predictable service outcomes/i),
        ).toBeInTheDocument()
    })

    it("renders response card content", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/once scope and access are confirmed, we mobilise efficiently and communicate clearly/i),
        ).toBeInTheDocument()
    })

    it("renders transparency card content", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/you always know what is being delivered, how it is being measured and who is responsible/i),
        ).toBeInTheDocument()
    })

    it("renders professional representation card content", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByText(/our teams represent your standards on site, maintaining a professional and consistent presence/i),
        ).toBeInTheDocument()
    })

    it("renders the closing CTA section", () => {
        render(<OutsourcingPage />)
        expect(
            screen.getByRole("heading", { name: /strengthen your contract delivery/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByText(/outsourcing cleaning delivery should simplify operations, not complicate them/i),
        ).toBeInTheDocument()
    })

    it("renders contact CTA link", () => {
        render(<OutsourcingPage />)
        expect(screen.getByRole("link", { name: /contact us today to discuss cleaning delivery requirements/i })).toHaveAttribute(
            "href",
            "/contact",
        )
    })
})
