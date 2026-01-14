import { buildMetadata } from "@/lib/seo"

describe("buildMetadata", () => {
  it("builds metadata with canonical and social tags", () => {
    const metadata = buildMetadata({
      title: "Contact",
      description: "Get in touch",
      path: "/contact",
    })

    expect(metadata.title).toBe("Contact")
    expect(metadata.alternates?.canonical).toBe("/contact")
    expect(metadata.openGraph?.url).toBe("https://www.redhacklecleaningservices.com/contact")
    expect(metadata.twitter?.card).toBe("summary_large_image")
  })
})
