import { vi } from "vitest"

describe("fetchGoogleReviews", () => {
  const originalEnv = process.env

  beforeEach(() => {
    vi.resetModules()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
    vi.unstubAllGlobals()
  })

  it("returns an empty array when configuration is missing", async () => {
    delete process.env.GOOGLE_PLACES_API_KEY
    delete process.env.GOOGLE_PLACE_ID

    const { fetchGoogleReviews } = await import("@/lib/googleReviews")

    await expect(fetchGoogleReviews()).resolves.toEqual([])
  })

  it("returns an empty array when the API call fails", async () => {
    process.env.GOOGLE_PLACES_API_KEY = "test-key"
    process.env.GOOGLE_PLACE_ID = "test-place"
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }))

    const { fetchGoogleReviews } = await import("@/lib/googleReviews")

    await expect(fetchGoogleReviews()).resolves.toEqual([])
  })

  it("normalizes and sorts reviews from the API", async () => {
    process.env.GOOGLE_PLACES_API_KEY = "test-key"
    process.env.GOOGLE_PLACE_ID = "test-place"
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            googleMapsUri: "https://maps.example.com",
            reviews: [
              {
                rating: 6,
                text: { text: "Outstanding service." },
                relativePublishTimeDescription: "2 days ago",
                publishTime: "2024-01-02T00:00:00Z",
                authorAttribution: { displayName: "Alex", uri: "https://example.com/alex" },
              },
              {
                rating: 4,
                text: { text: "Reliable team." },
                relativePublishTimeDescription: "1 week ago",
                publishTime: "2024-01-01T00:00:00Z",
                authorAttribution: { displayName: "Sam" },
              },
            ],
          }),
      }),
    )

    const { fetchGoogleReviews } = await import("@/lib/googleReviews")
    const reviews = await fetchGoogleReviews()

    expect(reviews).toHaveLength(2)
    expect(reviews[0]).toMatchObject({
      name: "Alex",
      rating: 5,
      url: "https://maps.example.com",
    })
    expect(reviews[0].time).toBeGreaterThan(reviews[1].time ?? 0)
  })
})
