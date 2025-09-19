"use client"

import { useEffect } from "react"

interface CalendlyInlineProps {
  url?: string
  height?: string
}

export function CalendlyInline({
  url = "https://calendly.com/operations-redhacklegroup",
  height = "700px",
}: CalendlyInlineProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      )
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return <div className="calendly-inline-widget" data-url={url} style={{ minWidth: "320px", height }} />
}
