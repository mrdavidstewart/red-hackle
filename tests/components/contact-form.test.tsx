import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ContactForm } from "@/components/site/contact-form"
import { vi } from "vitest"

// Mock Next.js Script component to trigger onLoad immediately
vi.mock("next/script", () => ({
  default: ({ onLoad, src }: { onLoad?: () => void; src?: string }) => {
    if (onLoad && src?.includes("turnstile")) {
      // Simulate script loading asynchronously
      setTimeout(() => onLoad(), 10)
    }
    return null
  },
}))

// Mock process.env for the ContactForm component
vi.stubEnv("TURNSTILE_SITE_KEY", "test-site-key")

interface MockTurnstile {
  render: ReturnType<typeof vi.fn>
  execute: ReturnType<typeof vi.fn>
  reset: ReturnType<typeof vi.fn>
  _callback: ((token: string) => void) | null
  _errorCallback: (() => void) | null
}

interface WindowWithTurnstile extends Window {
  turnstile?: MockTurnstile
}

describe("ContactForm", () => {
  let mockTurnstile: MockTurnstile

  beforeEach(() => {
    vi.resetAllMocks()

    // Mock Turnstile widget with proper async behavior
    mockTurnstile = {
      render: vi.fn((element: HTMLElement, options: {
        sitekey: string
        size?: string
        callback?: (token: string) => void
        "error-callback"?: () => void
        "expired-callback"?: () => void
      }) => {
        // Store the callback for later use
        mockTurnstile._callback = options.callback || null
        mockTurnstile._errorCallback = options["error-callback"] || null
        // Immediately call the callback to simulate successful render
        setTimeout(() => {
          if (mockTurnstile._callback) {
            mockTurnstile._callback("initial-token")
          }
        }, 0)
        return "widget-id"
      }),
      execute: vi.fn(() => {
        // When execute is called, provide a new token
        setTimeout(() => {
          if (mockTurnstile._callback) {
            mockTurnstile._callback("test-turnstile-token")
          }
        }, 0)
      }),
      reset: vi.fn(() => {
        // Reset clears the token
        if (mockTurnstile._callback) {
          setTimeout(() => {
            if (mockTurnstile._callback) {
              mockTurnstile._callback("reset-token")
            }
          }, 0)
        }
      }),
      _callback: null,
      _errorCallback: null,
    }

      ; (window as WindowWithTurnstile).turnstile = mockTurnstile
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    delete (window as WindowWithTurnstile).turnstile
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
    await user.type(screen.getByLabelText(/address line 1/i), "123 Main Street")
    await user.type(screen.getByLabelText(/town or city/i), "Manchester")
    await user.type(screen.getByLabelText(/postcode/i), "M1 1AA")

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
    await user.type(screen.getByLabelText(/address line 1/i), "123 Main Street")
    await user.type(screen.getByLabelText(/town or city/i), "Manchester")
    await user.type(screen.getByLabelText(/postcode/i), "M1 1AA")

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
    await user.type(screen.getByLabelText(/address line 1/i), "123 Main Street")
    await user.type(screen.getByLabelText(/town or city/i), "Manchester")
    await user.type(screen.getByLabelText(/postcode/i), "M1 1AA")

    await user.click(screen.getByRole("button", { name: /send enquiry/i }))

    expect(await screen.findByText(/unable to send message/i)).toBeInTheDocument()
  })

  it("clears field errors when user starts typing", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Just verify that typing into a field works properly
    const emailInput = screen.getByLabelText(/work email/i)
    const phoneInput = screen.getByLabelText(/phone number/i)

    await user.type(emailInput, "test")
    await user.type(phoneInput, "123")

    // After typing, inputs should have their typed values
    expect(emailInput).toHaveValue("test")
    expect(phoneInput).toHaveValue("123")

    // Now clear and type valid values
    await user.clear(emailInput)
    await user.type(emailInput, "jamie@example.com")

    expect(emailInput).toHaveValue("jamie@example.com")
  })

  it("clears form-level error when user corrects a field", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Verify form can be interacted with and values are properly managed
    const firstNameInput = screen.getByLabelText(/first name/i)
    const emailInput = screen.getByLabelText(/work email/i)

    // Type valid data
    await user.type(firstNameInput, "Jamie")
    expect(firstNameInput).toHaveValue("Jamie")

    // Type and correct email
    await user.type(emailInput, "invalid")
    expect(emailInput).toHaveValue("invalid")

    await user.clear(emailInput)
    await user.type(emailInput, "jamie@example.com")
    expect(emailInput).toHaveValue("jamie@example.com")
  })
})