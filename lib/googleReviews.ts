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

type GooglePlacesReview = {
  author_name?: string
  author_url?: string
  rating?: number
  relative_time_description?: string
  text?: string
  time?: number
}

type GooglePlacesResult = {
  reviews?: GooglePlacesReview[]
  url?: string
}

type GooglePlacesResponse = {
  status?: string
  result?: GooglePlacesResult
}

const clampRating = (rating: number) => Math.min(5, Math.max(1, rating))

export const fetchGoogleReviews = async (): Promise<GoogleReview[]> => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return []
  }

  const params = new URLSearchParams({
    place_id: placeId,
    fields: "reviews,url",
    key: apiKey,
  })

  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`, {
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    return []
  }

  const data = (await response.json()) as GooglePlacesResponse

  if (data.status !== "OK" || !data.result?.reviews) {
    return []
  }

  const placeUrl = data.result.url

  return data.result.reviews
    .filter((review) => review.text?.trim())
    .map((review) => {
      const ratingValue = Number.isFinite(review.rating) ? (review.rating as number) : 0
      const safeRating = clampRating(Math.round(ratingValue) || 1)
      const text = review.text?.trim() ?? ""

      return {
        id: `google:${review.author_name ?? "anonymous"}:${review.time ?? text.slice(0, 16)}`,
        source: "google",
        rating: safeRating,
        quote: text,
        name: review.author_name ?? "Google reviewer",
        role: review.relative_time_description ?? "Google review",
        url: placeUrl ?? review.author_url,
        time: review.time,
      }
    })
}
