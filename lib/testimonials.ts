export type InternalTestimonial = {
  id: string
  source: "internal"
  rating: number
  quote: string
  name: string
  role: string
}

export const testimonials: InternalTestimonial[] = [
  {
    id: "internal:sarah-mclean",
    source: "internal",
    rating: 5,
    quote:
      "Red Hackle stepped in with a clear scope, reliable supervisors, and a quality checklist we can share with our tenants.",
    name: "Sarah McLean",
    role: "Property Manager, Dundee",
  },
  {
    id: "internal:david-kerr",
    source: "internal",
    rating: 5,
    quote: "Their team keeps our office spotless and adapts quickly when we host visitors or late meetings.",
    name: "David Kerr",
    role: "Operations Lead, Broughty Ferry",
  },
  {
    id: "internal:ian-thomson",
    source: "internal",
    rating: 5,
    quote: "We needed a fast turnaround on a construction handover and the sparkle clean was on point.",
    name: "Ian Thomson",
    role: "Site Manager, Angus",
  },
]
