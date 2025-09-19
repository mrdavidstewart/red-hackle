"use client"

import * as React from "react"
import { useEffect, useState } from "react"

export interface ThemeProviderProps {
  children: React.ReactNode
  /** attribute to set on <html> ("class" or "data-theme") */
  attribute?: "class" | "data-theme"
  /** default theme when no preference stored */
  defaultTheme?: "light" | "dark" | string
  /** whether to respect system preference */
  enableSystem?: boolean
  /** disable transition flicker when switching */
  disableTransitionOnChange?: boolean
}

const STORAGE_KEY = "theme"

function getSystemTheme() {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "light",
  enableSystem = true,
  disableTransitionOnChange = true,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window === "undefined") return defaultTheme
    return localStorage.getItem(STORAGE_KEY) || (enableSystem ? getSystemTheme() : defaultTheme)
  })

  // apply theme side-effects
  useEffect(() => {
    const root = document.documentElement
    const applied = theme || defaultTheme

    const prev = attribute === "class" ? root.className : root.getAttribute(attribute)

    const apply = () => {
      if (attribute === "class") {
        // remove possible existing themes (light/dark) to avoid accumulation
        root.classList.remove("light", "dark")
        root.classList.add(applied)
      } else {
        root.setAttribute(attribute, applied)
      }
    }

    let transitionStyle: HTMLStyleElement | null = null
    if (disableTransitionOnChange) {
      transitionStyle = document.createElement("style")
      transitionStyle.appendChild(
        document.createTextNode("*{transition:none!important}"),
      )
      document.head.appendChild(transitionStyle)
    }

    apply()
    localStorage.setItem(STORAGE_KEY, applied)

    if (disableTransitionOnChange) {
      // force reflow then remove style next frame
      window.getComputedStyle(root).opacity
      requestAnimationFrame(() => {
        transitionStyle?.parentNode?.removeChild(transitionStyle)
      })
    }

    return () => {
      // no cleanup needed currently
      if (prev && attribute !== "class") {
        // keep previous attribute changes minimal
      }
    }
  }, [theme, attribute, defaultTheme, disableTransitionOnChange])

  // watch system preference changes
  useEffect(() => {
    if (!enableSystem) return
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const listener = () => {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        setTheme(media.matches ? "dark" : "light")
      }
    }
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [enableSystem])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

interface ThemeContextValue {
  theme: string
  setTheme: (value: string) => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
