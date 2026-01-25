"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Mail, MapPin, Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { eastCoastOfScotland } from "@/lib/structured-data"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Commercial Cleaning", href: "/commercial-cleaning" },
  { label: "Consumables", href: "/consumables" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() ?? ""
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="hidden bg-gray-950 text-gray-200 lg:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-destructive" />
              <a href="tel:+447966881555" className="hover:text-white">
                07966 881 555
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-destructive" />
              <a href="mailto:operations@redhacklegroup.com" className="hover:text-white">
                operations@redhacklegroup.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-destructive" />
            <span>{eastCoastOfScotland}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Red Hackle Cleaning Services">
          <Image
            src="/images/red-hackle-logo.png"
            alt="Red Hackle Cleaning Services logo"
            width={220}
            height={80}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-700 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-destructive ${isActive(link.href) ? "text-destructive" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" className="border-gray-300">
            <a href="tel:+447966881555" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              07966 881 555
            </a>
          </Button>
          <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-md border border-gray-200 p-2 text-gray-700 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="flex flex-col gap-4 px-4 py-5 text-base font-semibold text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`hover:text-destructive ${isActive(link.href) ? "text-destructive" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" className="border-gray-300">
                <a href="tel:+447966881555" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call 07966 881 555
                </a>
              </Button>
              <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
