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

  it("validates email and phone formats", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Fill with valid data except email and phone (using valid HTML5 email format but invalid custom format)
    await user.type(screen.getByLabelText(/first name/i), "Jamie")
    await user.type(screen.getByLabelText(/last name/i), "Smith")
    await user.type(screen.getByLabelText(/work email/i), "test@test")
    await user.type(screen.getByLabelText(/phone number/i), "12345")
    await user.type(screen.getByLabelText(/cleaning requirements/i), "Office cleaning needed")

    await user.click(screen.getByRole("button", { name: /send enquiry/i }))

    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter a valid uk phone number/i)).toBeInTheDocument()
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

    expect(await screen.findByText(/we've received your enquiry and will respond shortly/i)).toBeInTheDocument()

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

  it("clears field errors when user starts typing", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Trigger validation errors first
    await user.type(screen.getByLabelText(/first name/i), "Jamie")
    await user.type(screen.getByLabelText(/last name/i), "Smith")
    await user.type(screen.getByLabelText(/work email/i), "test@test")
    await user.type(screen.getByLabelText(/phone number/i), "12345")
    await user.type(screen.getByLabelText(/cleaning requirements/i), "Office cleaning needed")

    await user.click(screen.getByRole("button", { name: /send enquiry/i }))

    // Wait for validation errors to appear
    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter a valid uk phone number/i)).toBeInTheDocument()

    // Now fix the email - error should clear
    await user.clear(screen.getByLabelText(/work email/i))
    await user.type(screen.getByLabelText(/work email/i), "jamie@example.com")

    // Email error should be gone
    await waitFor(() => {
      expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument()
    })

    // Phone error should still be there
    expect(screen.getByText(/please enter a valid uk phone number/i)).toBeInTheDocument()
  })

  it("clears form-level error when user corrects a field", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Trigger validation errors
    await user.type(screen.getByLabelText(/first name/i), "J")
    await user.type(screen.getByLabelText(/last name/i), "S")
    await user.type(screen.getByLabelText(/work email/i), "bad@email")
    await user.type(screen.getByLabelText(/phone number/i), "123")
    await user.type(screen.getByLabelText(/cleaning requirements/i), "Test")

    await user.click(screen.getByRole("button", { name: /send enquiry/i }))

    // Wait for form error
    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument()

    // Type in the email field to trigger error clearing
    await user.type(screen.getByLabelText(/work email/i), ".com")

    // The form-level error state should be cleared (status changes from error to idle)
    // We can verify this by checking that the error is no longer in an error state
    await waitFor(() => {
      expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument()
    })
  })
})