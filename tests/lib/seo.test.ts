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
    expect(metadata.twitter).toBeDefined()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((metadata.twitter as any)?.card).toBe("summary_large_image")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((metadata.twitter as any)?.title).toBe("Contact")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((metadata.twitter as any)?.description).toBe("Get in touch")
  })
})
