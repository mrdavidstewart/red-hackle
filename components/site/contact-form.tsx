"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"
import { isValidEmail, isValidPhone, isValidPostcode } from "@/lib/security"

interface GtagWindow extends Window {
  gtag?: (event: string, action: string, data: Record<string, string | number>) => void
}

interface TurnstileWindow extends Window {
  turnstile?: {
    render: (
      element: HTMLElement,
      options: {
        sitekey: string
        size?: "normal" | "compact" | "flexible"
        callback?: (token: string) => void
        "error-callback"?: () => void
        "expired-callback"?: () => void
      },
    ) => string
    execute: (widgetId: string) => void
    reset: (widgetId: string) => void
  }
}

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  addressLine1: "",
  addressLine2: "",
  townCity: "",
  postcode: "",
}

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formError, setFormError] = useState<string | null>(null)
  const [turnstileReady, setTurnstileReady] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState("")
  const turnstileTokenRef = useRef("")
  const turnstileWidgetRef = useRef<string | null>(null)
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null)
  const turnstileSiteKey = process.env.TURNSTILE_SITE_KEY || ""

  useEffect(() => {
    if (!turnstileReady || !turnstileSiteKey || !turnstileContainerRef.current) return
    const turnstile = (window as TurnstileWindow).turnstile
    if (!turnstile || turnstileWidgetRef.current) return

    // Render the Turnstile widget and capture tokens for form submission.
    turnstileWidgetRef.current = turnstile.render(turnstileContainerRef.current, {
      sitekey: turnstileSiteKey,
      size: "compact",
      callback: (token) => {
        setTurnstileToken(token)
        turnstileTokenRef.current = token
      },
      "error-callback": () => {
        setTurnstileToken("")
        turnstileTokenRef.current = ""
      },
      "expired-callback": () => {
        setTurnstileToken("")
        turnstileTokenRef.current = ""
      },
    })
  }, [turnstileReady, turnstileSiteKey])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => {
      if (!prev[name]) return prev
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [name]: _, ...rest } = prev
      return rest
    })
    if (formStatus === "error") {
      setFormStatus("idle")
      setFormError(null)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormError(null)

    const trimmedData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      addressLine1: formData.addressLine1.trim(),
      addressLine2: formData.addressLine2.trim(),
      townCity: formData.townCity.trim(),
      postcode: formData.postcode.trim(),
    }

    const errors: Record<string, string> = {}
    if (!trimmedData.firstName) errors.firstName = "Please enter your first name."
    if (!trimmedData.lastName) errors.lastName = "Please enter your last name."
    if (!trimmedData.email) {
      errors.email = "Please enter your work email."
    } else if (!isValidEmail(trimmedData.email)) {
      errors.email = "Please enter a valid email address."
    }
    if (!trimmedData.phone) {
      errors.phone = "Please enter a phone number."
    } else if (!isValidPhone(trimmedData.phone)) {
      errors.phone = "Please enter a valid UK phone number."
    }
    if (!trimmedData.message) errors.message = "Please share your cleaning requirements."
    if (!trimmedData.addressLine1) errors.addressLine1 = "Please enter your address line 1."
    if (!trimmedData.townCity) errors.townCity = "Please enter your town or city."
    if (!trimmedData.postcode) {
      errors.postcode = "Please enter your postcode."
    } else if (!isValidPostcode(trimmedData.postcode)) {
      errors.postcode = "Please enter a valid UK postcode."
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setFormStatus("error")
      setFormError("Please correct the highlighted fields.")
      return
    }

    if (!turnstileSiteKey) {
      setFormStatus("error")
      setFormError("Captcha is not configured. Please try again later.")
      return
    }

    if (!turnstileToken) {
      setFormStatus("error")
      setFormError("Please complete the captcha verification.")
      return
    }

    setFormStatus("submitting")

    const payload = new FormData(event.currentTarget)
    payload.set("timestamp", Date.now().toString())
    payload.set("turnstileToken", turnstileToken)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message")
      }

      // Track conversion in Google Ads
      if (typeof window !== "undefined" && (window as GtagWindow).gtag) {
        (window as GtagWindow).gtag!("event", "conversion", {
          send_to: "AW-17541701344/wYB2CKbM_-wbEOC9xKxB",
          value: 1.0,
          currency: "GBP",
        })
      }

      setFormStatus("success")
      setFormData(initialForm)
      setFieldErrors({})
      setTurnstileToken("")
      turnstileTokenRef.current = ""
      if ((window as TurnstileWindow).turnstile && turnstileWidgetRef.current) {
        ; (window as TurnstileWindow).turnstile?.reset(turnstileWidgetRef.current)
      }
    } catch (error) {
      setFormStatus("error")
      setFormError(error instanceof Error ? error.message : "Something went wrong")
      setTurnstileToken("")
      turnstileTokenRef.current = ""
      if ((window as TurnstileWindow).turnstile && turnstileWidgetRef.current) {
        ; (window as TurnstileWindow).turnstile?.reset(turnstileWidgetRef.current)
      }
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          onLoad={() => setTurnstileReady(true)}
        />
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="firstName">
            First name
          </label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleInputChange}
            autoComplete="given-name"
            required
            aria-invalid={Boolean(fieldErrors.firstName)}
            aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined}
          />
          {fieldErrors.firstName ? (
            <p id="firstName-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.firstName}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="lastName">
            Last name
          </label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            autoComplete="family-name"
            required
            aria-invalid={Boolean(fieldErrors.lastName)}
            aria-describedby={fieldErrors.lastName ? "lastName-error" : undefined}
          />
          {fieldErrors.lastName ? (
            <p id="lastName-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.lastName}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="email">
            Work email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email"
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="phone">
            Phone number
          </label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="07966 881 555"
            value={formData.phone}
            onChange={handleInputChange}
            autoComplete="tel"
            required
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
          />
          {fieldErrors.phone ? (
            <p id="phone-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700" htmlFor="message">
          Cleaning requirements
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your site size, schedule, and any compliance requirements."
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message ? (
          <p id="message-error" className="text-sm text-destructive" role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-4 border-t border-gray-200 pt-6">
        <h3 className="text-sm font-semibold text-gray-700">Address</h3>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="addressLine1">
            Address line 1
          </label>
          <Input
            id="addressLine1"
            name="addressLine1"
            placeholder="House number and street"
            value={formData.addressLine1}
            onChange={handleInputChange}
            autoComplete="address-line1"
            required
            aria-invalid={Boolean(fieldErrors.addressLine1)}
            aria-describedby={fieldErrors.addressLine1 ? "addressLine1-error" : undefined}
          />
          {fieldErrors.addressLine1 ? (
            <p id="addressLine1-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.addressLine1}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="addressLine2">
            Address line 2 <span className="font-normal text-gray-500">(optional)</span>
          </label>
          <Input
            id="addressLine2"
            name="addressLine2"
            placeholder="Building name or flat number"
            value={formData.addressLine2}
            onChange={handleInputChange}
            autoComplete="address-line2"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="townCity">
              Town or city
            </label>
            <Input
              id="townCity"
              name="townCity"
              placeholder="Town or city"
              value={formData.townCity}
              onChange={handleInputChange}
              autoComplete="address-level2"
              required
              aria-invalid={Boolean(fieldErrors.townCity)}
              aria-describedby={fieldErrors.townCity ? "townCity-error" : undefined}
            />
            {fieldErrors.townCity ? (
              <p id="townCity-error" className="text-sm text-destructive" role="alert">
                {fieldErrors.townCity}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="postcode">
              Postcode
            </label>
            <Input
              id="postcode"
              name="postcode"
              placeholder="e.g. SW1A 1AA"
              value={formData.postcode}
              onChange={handleInputChange}
              autoComplete="postal-code"
              required
              aria-invalid={Boolean(fieldErrors.postcode)}
              aria-describedby={fieldErrors.postcode ? "postcode-error" : undefined}
            />
            {fieldErrors.postcode ? (
              <p id="postcode-error" className="text-sm text-destructive" role="alert">
                {fieldErrors.postcode}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <input type="text" name="website" tabIndex={-1} aria-hidden="true" className="hidden" />
      <div ref={turnstileContainerRef} className="flex justify-center my-4" />
      <input type="hidden" name="turnstileToken" value={turnstileToken} />

      <Button type="submit" className="w-full bg-destructive text-white hover:bg-destructive/90" disabled={formStatus === "submitting"}>
        <Mail className="mr-2 h-4 w-4" />
        {formStatus === "submitting" ? "Sending..." : "Send enquiry"}
      </Button>

      {formStatus === "success" && (
        <p className="text-sm text-green-600" role="status">
          Thanks. We&apos;ve received your enquiry and will respond shortly.
        </p>
      )}
      {formStatus === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {formError || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  )
}
