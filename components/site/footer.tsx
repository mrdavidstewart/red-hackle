import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold text-white">Red Hackle Cleaning Services</p>
            <p className="mt-3 text-sm text-gray-300">
              Commercial-first cleaning partner for offices, property managers, hospitality venues, and construction
              handovers across the East Coast of Scotland.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <a
                  href="https://maps.google.com/?q=165+Brook+Street%2C+DD5+1DJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  165 Brook Street, DD5 1DJ
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                <a href="tel:+447966881555" className="hover:text-white">
                  07966 881 555
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-500" />
                <a href="mailto:operations@redhacklegroup.com" className="hover:text-white">
                  operations@redhacklegroup.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/commercial-cleaning" className="hover:text-white">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Compliance</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2025 Red Hackle Cleaning Services Ltd. All rights reserved.</p>
          <p>Red Hackle Cleaning Services Ltd - Registered in Scotland - Company No: SC463742 - VAT No: GB256909665</p>
        </div>
      </div>
    </footer>
  )
}
