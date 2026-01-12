export type GoogleReview = {
  id: string
  source: "google"
  rating: number
  quote: string
  name: string
  role: string
  url?: string
  time?: number
}

type PlacesV1Review = {
  rating?: number
  text?: { text?: string }
  relativePublishTimeDescription?: string
  publishTime?: string
  authorAttribution?: {
    displayName?: string
    uri?: string
  }
}

type PlacesV1Response = {
  googleMapsUri?: string
  reviews?: PlacesV1Review[]
}

const clampRating = (rating: number) => Math.min(5, Math.max(1, rating))

const toUnixSeconds = (iso?: string): number => {
  if (!iso) return 0
  const ms = Date.parse(iso)
  return Number.isFinite(ms) ? Math.floor(ms / 1000) : 0
}

export const fetchGoogleReviews = async (): Promise<GoogleReview[]> => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) return []

  const endpoint = `https://places.googleapis.com/v1/places/${placeId}`

  const response = await fetch(endpoint, {
    headers: {
      // API key and field mask are headers in Places API (New)
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "googleMapsUri,reviews.rating,reviews.text,reviews.authorAttribution,reviews.relativePublishTimeDescription,reviews.publishTime",
    },
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    return []
  }

  const data = (await response.json()) as PlacesV1Response

  const placeUrl = data.googleMapsUri
  const reviews = data.reviews ?? []
  if (!reviews.length) return []

  return reviews
    .sort((a, b) => toUnixSeconds(b.publishTime) - toUnixSeconds(a.publishTime))
    .map((review, index) => {
      const text = review.text?.text?.trim() ?? ""
      return { review, index, text }
    })
    .filter(({ text }) => text.length > 0)
    .map(({ review, index, text }) => {
      const ratingValue = Number.isFinite(review.rating) ? (review.rating as number) : 0
      const safeRating = clampRating(Math.round(ratingValue) || 1)

      return {
        id: `google:${review.authorAttribution?.displayName ?? "anonymous"}:${review.publishTime ?? index}`,
        source: "google",
        rating: safeRating,
        quote: text,
        name: review.authorAttribution?.displayName ?? "Google reviewer",
        role: review.relativePublishTimeDescription ?? "Google review",
        url: placeUrl ?? review.authorAttribution?.uri,
        time: toUnixSeconds(review.publishTime),
      }
    })
}
