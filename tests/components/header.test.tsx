import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SiteHeader } from "@/components/site/header"

describe("SiteHeader", () => {
  it("renders primary navigation links", () => {
    render(<SiteHeader />)

    const links = screen.getAllByRole("link")
    expect(links.length).toBeGreaterThan(0)
    
    // Check that navigation contains links to main pages
    const hrefs = links.map(link => link.getAttribute("href"))
    expect(hrefs).toContain("/services")
    expect(hrefs).toContain("/contact")
  })

  it("toggles the mobile navigation menu", async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    const toggleButton = screen.getByRole("button", { name: /toggle navigation/i })

    expect(screen.queryByText(/call 07966 881 555/i)).not.toBeInTheDocument()

    await user.click(toggleButton)
    expect(screen.getByText(/call 07966 881 555/i)).toBeInTheDocument()

    await user.click(toggleButton)
    expect(screen.queryByText(/call 07966 881 555/i)).not.toBeInTheDocument()
  })
})
