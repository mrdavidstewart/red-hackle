import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema } from "@/lib/structured-data"

export const metadata = buildMetadata({
  title: "About Red Hackle Cleaning Services",
  description:
    "Red Hackle Cleaning Services: a professional, accountable commercial cleaning partner supporting businesses across the East Coast of Scotland with reliability, consistency, and clear communication.",
  path: "/about",
})

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ])

  return (
    <main className="pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.35),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Badge className="bg-white/10 text-white">About Us</Badge>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Red Hackle Cleaning Services</h1>
          <p className="mt-4 text-lg text-gray-300">
            A professional commercial and specialist cleaning provider supporting businesses across the East Coast of Scotland. We work with organisations that value reliability, consistency and clear communication.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">About our leadership and experience</h2>
            <p className="text-gray-600">
              Red Hackle Cleaning Services is led by Arthur Keith, whose background brings a disciplined, structured and accountable approach to how the business operates.
            </p>
            <p className="text-gray-600">
              Arthur&apos;s leadership style is rooted in preparation, clear standards and responsibility. Those principles shape everything we do, from how work is scoped and priced, to how teams are deployed and supported on site.
            </p>
            <p className="text-gray-600">
              That leadership focus ensures consistency across services and provides our clients with confidence that delivery is not dependent on chance, but on process, oversight and accountability.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row pt-4">
              <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                <Link href="/contact">Request a site survey</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Explore our services</Link>
              </Button>
            </div>
          </div>
          <Card className="border border-gray-200">
            <CardContent className="flex items-center justify-center p-6">
              <Image
                src="/images/arthur-cartoon-900.png"
                alt="Arthur (Managing Director) from Red Hackle Cleaning Services"
                width={180}
                height={180}
                className="rounded-2xl object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Why Clients Choose Red Hackle</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• We operate with commercial realities in mind</li>
                <li>• We are clear about what we will and will not take on</li>
                <li>• We prioritise quality, safety and reliability over shortcuts</li>
                <li>• We communicate like professionals, not salespeople</li>
              </ul>
              <p className="mt-6 text-gray-600">
                If you are looking for a cleaning provider that treats your site, property or operation with the same seriousness that you do, we are likely a good fit.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900">A Commercial Approach to Cleaning</h2>
          <p className="mt-4 text-gray-600">We do not position ourselves as a one size fits all cleaning company.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Our services are built around:</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Clear scoping</li>
                  <li>• Realistic programming</li>
                  <li>• Proper resourcing</li>
                  <li>• Consistent delivery</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">We are often brought in where:</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Standards have slipped</li>
                  <li>• Previous suppliers have been unreliable</li>
                  <li>• Handover deadlines matter</li>
                  <li>• Accountability is required</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="mt-6 text-gray-600">
            For our clients, cleaning is rarely the main event. But when it goes wrong, it becomes a problem very quickly. Our role is to remove that risk.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Who We Are Best Suited For (and Why That Matters)</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900">We work best with clients who:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Want work done properly, not rushed</li>
                    <li>• Value clarity over vague promises</li>
                    <li>• Understand that quality requires planning</li>
                    <li>• Are looking for a professional, long term supplier</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">We are open about situations where we may not be the right fit:</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Immediate, last minute turnaround without scope</li>
                    <li>• Quick and cheap solutions</li>
                    <li>• Work priced without understanding the site or risks</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                That honesty protects our clients, our teams, and the standard of work delivered.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">How We Build Trust With Commercial Clients</h2>
              <p className="mt-4 text-gray-600">
                Trust is earned through consistency, not claims.
              </p>
              <h3 className="mt-6 font-semibold text-gray-900">Our clients trust us because we:</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Agree clear scopes before work begins</li>
                <li>• Communicate openly if site conditions change</li>
                <li>• Resource jobs properly rather than over promising</li>
                <li>• Take responsibility for delivery, not excuses</li>
              </ul>
              <h3 className="mt-6 font-semibold text-gray-900">We focus on what matters:</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• We do not rely on assumptions</li>
                <li>• We do not guess pricing</li>
                <li>• We do not blur boundaries</li>
              </ul>
              <p className="mt-6 text-gray-600">
                This approach allows our clients to rely on us and to justify that reliance internally.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Accountability and Standards</h2>
              <p className="mt-4 text-gray-600">
                Every service we deliver is underpinned by:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Defined scopes of work</li>
                <li>• Trained, uniformed operatives</li>
                <li>• Clear lines of communication</li>
                <li>• A practical understanding of live environments</li>
              </ul>
              <p className="mt-6 text-gray-600">
                Whether we are supporting a builders handover, a commercial premises, or a managed accommodation portfolio, our aim is the same.
              </p>
              <p className="mt-3 font-semibold text-gray-900">
                Do the job properly, deliver what is agreed, and be straightforward to deal with.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <Card className="border border-gray-200">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900">Relationships, Not Transactions</h2>
              <p className="mt-4 text-gray-600">
                Many of our commercial clients work with us because they want:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• A supplier they do not have to chase</li>
                <li>• Fewer issues, not more meetings</li>
                <li>• A service that improves stability rather than adding friction</li>
              </ul>
              <p className="mt-6 text-gray-600">
                We see ourselves as a service partner, not just a contractor ticking boxes.
              </p>
              <p className="mt-3 text-gray-600">
                That mindset shapes how we scope, staff and deliver every job.
              </p>
              <div className="mt-6">
                <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </main>
  )
}
