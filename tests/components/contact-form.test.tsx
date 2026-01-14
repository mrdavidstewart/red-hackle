import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ContactForm } from "@/components/site/contact-form"
import { vi } from "vitest"

describe("ContactForm", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it("validates required fields before submitting", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole("button", { name: /send enquiry/i }))

    expect(await screen.findByText(/please correct the highlighted fields/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter your first name/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter your last name/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter your work email/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter a phone number/i)).toBeInTheDocument()
    expect(screen.getByText(/please share your cleaning requirements/i)).toBeInTheDocument()
  })

  it("submits the form and shows a success message", async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ success: true }),
    })
    vi.stubGlobal("fetch", fetchMock)

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/first name/i), "Jamie")
    await user.type(screen.getByLabelText(/last name/i), "Smith")
    await user.type(screen.getByLabelText(/work email/i), "jamie@example.com")
    await user.type(screen.getByLabelText(/phone number/i), "07966881555")
    await user.type(screen.getByLabelText(/cleaning requirements/i), "Office cleaning twice a week.")

    await user.click(screen.getByRole("button", { name: /send enquiry/i }))

    expect(await screen.findByText(/we've received your enquiry/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByLabelText(/first name/i)).toHaveValue("")
      expect(screen.getByLabelText(/last name/i)).toHaveValue("")
      expect(screen.getByLabelText(/work email/i)).toHaveValue("")
      expect(screen.getByLabelText(/phone number/i)).toHaveValue("")
      expect(screen.getByLabelText(/cleaning requirements/i)).toHaveValue("")
    })
  })

  it("shows an error message when the request fails", async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      json: vi.fn().mockResolvedValue({ error: "Unable to send message" }),
    })
    vi.stubGlobal("fetch", fetchMock)

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/first name/i), "Jamie")
    await user.type(screen.getByLabelText(/last name/i), "Smith")
    await user.type(screen.getByLabelText(/work email/i), "jamie@example.com")
    await user.type(screen.getByLabelText(/phone number/i), "07966881555")
    await user.type(screen.getByLabelText(/cleaning requirements/i), "Office cleaning twice a week.")

    await user.click(screen.getByRole("button", { name: /send enquiry/i }))

    expect(await screen.findByText(/unable to send message/i)).toBeInTheDocument()
  })
})
