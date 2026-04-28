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
  fullName: "",
  companyPropertyAddress: "",
  postcode: "",
  email: "",
  phone: "",
  serviceRequired: "",
  serviceTimeline: "",
  briefDetails: "",
}

const serviceRequiredOptions = [
  "Commercial / office cleaning",
  "Hospitality / venue cleaning",
  "End of tenancy cleaning",
  "One-off / deep clean",
  "Builders / sparkle clean",
  "Holiday let / Airbnb turnover",
  "Not sure yet",
]

const serviceTimelineOptions = [
  "As soon as possible",
  "Within the next week",
  "Within the next month",
  "Ongoing / recurring service",
  "I’m just getting prices",
]

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      fullName: formData.fullName.trim(),
      companyPropertyAddress: formData.companyPropertyAddress.trim(),
      postcode: formData.postcode.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      serviceRequired: formData.serviceRequired.trim(),
      serviceTimeline: formData.serviceTimeline.trim(),
      briefDetails: formData.briefDetails.trim(),
    }

    const errors: Record<string, string> = {}
    if (!trimmedData.fullName) errors.fullName = "Please enter your full name."
    if (!trimmedData.companyPropertyAddress) {
      errors.companyPropertyAddress = "Please enter your company or property address."
    }
    if (!trimmedData.postcode) {
      errors.postcode = "Please enter your postcode."
    } else if (!isValidPostcode(trimmedData.postcode)) {
      errors.postcode = "Please enter a valid UK postcode."
    }
    if (!trimmedData.email) {
      errors.email = "Please enter your email address."
    } else if (!isValidEmail(trimmedData.email)) {
      errors.email = "Please enter a valid email address."
    }
    if (!trimmedData.phone) {
      errors.phone = "Please enter a phone number."
    } else if (!isValidPhone(trimmedData.phone)) {
      errors.phone = "Please enter a valid UK phone number."
    }
    if (!trimmedData.serviceRequired) errors.serviceRequired = "Please select the service you need."
    if (!trimmedData.serviceTimeline) errors.serviceTimeline = "Please select when you need the service."
    if (!trimmedData.briefDetails) {
      errors.briefDetails = "Please include brief details of what you need."
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
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700" htmlFor="fullName">
          Full name
        </label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="Full name"
          value={formData.fullName}
          onChange={handleInputChange}
          autoComplete="name"
          required
          aria-invalid={Boolean(fieldErrors.fullName)}
          aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
        />
        {fieldErrors.fullName ? (
          <p id="fullName-error" className="text-sm text-destructive" role="alert">
            {fieldErrors.fullName}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700" htmlFor="companyPropertyAddress">
          Company or property address
        </label>
        <Input
          id="companyPropertyAddress"
          name="companyPropertyAddress"
          placeholder="Company name / property address"
          value={formData.companyPropertyAddress}
          onChange={handleInputChange}
          autoComplete="street-address"
          required
          aria-invalid={Boolean(fieldErrors.companyPropertyAddress)}
          aria-describedby={fieldErrors.companyPropertyAddress ? "companyPropertyAddress-error" : undefined}
        />
        {fieldErrors.companyPropertyAddress ? (
          <p id="companyPropertyAddress-error" className="text-sm text-destructive" role="alert">
            {fieldErrors.companyPropertyAddress}
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
          placeholder="SW1A 1AA"
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

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700" htmlFor="email">
            Email address
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
        <label className="text-sm font-semibold text-gray-700" htmlFor="serviceRequired">
          Service required
        </label>
        <select
          id="serviceRequired"
          name="serviceRequired"
          value={formData.serviceRequired}
          onChange={handleInputChange}
          required
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
          aria-invalid={Boolean(fieldErrors.serviceRequired)}
          aria-describedby={fieldErrors.serviceRequired ? "serviceRequired-error" : undefined}
        >
          <option value="">Select a service</option>
          {serviceRequiredOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {fieldErrors.serviceRequired ? (
          <p id="serviceRequired-error" className="text-sm text-destructive" role="alert">
            {fieldErrors.serviceRequired}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700" htmlFor="serviceTimeline">
          When do you need this?
        </label>
        <select
          id="serviceTimeline"
          name="serviceTimeline"
          value={formData.serviceTimeline}
          onChange={handleInputChange}
          required
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
          aria-invalid={Boolean(fieldErrors.serviceTimeline)}
          aria-describedby={fieldErrors.serviceTimeline ? "serviceTimeline-error" : undefined}
        >
          <option value="">Select timing</option>
          {serviceTimelineOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {fieldErrors.serviceTimeline ? (
          <p id="serviceTimeline-error" className="text-sm text-destructive" role="alert">
            {fieldErrors.serviceTimeline}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700" htmlFor="briefDetails">
          Brief details
        </label>
        <Textarea
          id="briefDetails"
          name="briefDetails"
          placeholder="Please include property size, number of rooms, frequency required, access details, or anything specific we should know."
          value={formData.briefDetails}
          onChange={handleInputChange}
          required
          rows={5}
          aria-invalid={Boolean(fieldErrors.briefDetails)}
          aria-describedby={fieldErrors.briefDetails ? "briefDetails-error" : undefined}
        />
        {fieldErrors.briefDetails ? (
          <p id="briefDetails-error" className="text-sm text-destructive" role="alert">
            {fieldErrors.briefDetails}
          </p>
        ) : null}
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
