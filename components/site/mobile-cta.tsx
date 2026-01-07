import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-red-700 bg-red-600 px-3 py-3 shadow-2xl md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <Button asChild className="flex-1 bg-white text-red-600 hover:bg-gray-100">
          <a href="tel:+447966881555" className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Button asChild className="flex-1 bg-black text-white hover:bg-gray-900">
          <Link href="/contact">Get a Quote</Link>
        </Button>
      </div>
    </div>
  )
}
