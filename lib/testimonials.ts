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
    id: "internal:margaret-douglas",
    source: "internal",
    rating: 5,
    quote: "Happy with work carried out. Would recommend David and his team without hesitation.",
    name: "Margaret Douglas",
    role: "Facilities Manager",
  },
  {
    id: "internal:moira-elizabeth",
    source: "internal",
    rating: 5,
    quote:
      "From start to finish had such a great level of service. An in person visit to discuss requirements, followed up promptly with an extensive breakdown which was clear, easy to follow, and had catered for more than originally thought. Felt safe and comfortable which is the main thing for myself so I could trust and not worry. Thank you",
    name: "Moira Elizabeth",
    role: "Office Manager",
  },
  {
    id: "internal:karen-cooper",
    source: "internal",
    rating: 5,
    quote:
      "Have Sam helping me with my cleaning at the moment going for a knee replacement on the 15th August and Sam is great at helping me keep on top of my homework",
    name: "Karen Cooper",
    role: "Operations Lead",
  },
  {
    id: "internal:tara-macandrew",
    source: "internal",
    rating: 5,
    quote:
      "Excellent friendly service from Arthur and his team. From first contact to job completion, I knew they wouldn't let me down. Highly recommend Arthur and his team at Red Hackle. Will 100% use again.",
    name: "Tara Macandrew",
    role: "Property Manager",
  },
]
