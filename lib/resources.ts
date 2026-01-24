import { baseUrl, businessInfo } from "@/lib/structured-data"

export type ResourceEntry = {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  excerpt: string
  category: string
  readTime: string
  datePublished: string
  dateModified: string
  image: string
  sections: { heading: string; body: string[] }[]
  relatedServices: { label: string; href: string }[]
}

export const resources: ResourceEntry[] = [
  {
    slug: "/resources/commercial-cleaning-checklist",
    title: "Commercial Cleaning Checklist for Facilities Managers",
    seoTitle: "Commercial Cleaning Checklist",
    seoDescription:
      "Use this commercial cleaning checklist to validate scopes, SLAs, and quality controls for office and managed property cleaning contracts.",
    excerpt:
      "A practical checklist for validating cleaning scopes, service levels, and reporting before signing a commercial contract.",
    category: "Facilities & Procurement",
    readTime: "6 min read",
    datePublished: "2024-11-01",
    dateModified: "2025-02-01",
    image: `${baseUrl}/images/team-photo.jpg`,
    sections: [
      {
        heading: "What to capture in your scope of works",
        body: [
          "List every area that needs routine cleaning (offices, washrooms, kitchens, receptions) plus any specialist zones such as server rooms or workshop areas.",
          "Define frequencies for each task so expectations are clear: daily touchpoint sanitisation, weekly deep cleans, and monthly compliance checks.",
          "Identify access requirements, alarm codes, and security rules so mobilisation is smooth and risks are controlled.",
        ],
      },
      {
        heading: "Service levels and reporting expectations",
        body: [
          "Set KPIs for inspection scores, response times, and escalation procedures that align with your operational needs.",
          "Agree how reporting will be delivered—weekly reports, monthly dashboards, or quarterly reviews—so performance stays visible.",
          "Make sure consumable replenishment and waste handling responsibilities are documented to avoid scope gaps later.",
        ],
      },
      {
        heading: "Compliance and assurance checks",
        body: [
          "Confirm your supplier can supply RAMS, insurance certificates, and any site-specific training evidence.",
          "Ask about supervision, QA routines, and how issues are resolved to keep standards consistent across multiple sites.",
          `Record the agreed service area and contact points for decision makers to keep governance clear across ${businessInfo.name} contracts.`,
        ],
      },
    ],
    relatedServices: [
      { label: "Managed Contract Cleaning", href: "/commercial-cleaning" },
      { label: "Office & Workplace Cleaning", href: "/services/office-workplace" },
      { label: "Consumables Supply", href: "/consumables" },
    ],
  },
  {
    slug: "/resources/builders-clean-handover-guide",
    title: "Builders Clean Handover Guide for Contractors",
    seoTitle: "Builders Clean Handover Guide",
    seoDescription:
      "Learn how to prepare a builders clean for snag-free handovers, including sparkle clean scopes, inspections, and scheduling tips.",
    excerpt:
      "A step-by-step guide to preparing construction sites for snag-free handovers with structured sparkle cleaning.",
    category: "Construction Handover",
    readTime: "5 min read",
    datePublished: "2024-10-15",
    dateModified: "2025-01-18",
    image: `${baseUrl}/images/team-photo.jpg`,
    sections: [
      {
        heading: "Phase the clean by build stage",
        body: [
          "Schedule a pre-handover clean once major trades are finished to remove dust and debris from surfaces.",
          "Reserve a final sparkle clean for snagging so the site is presentation-ready for clients and stakeholders.",
        ],
      },
      {
        heading: "Typical sparkle clean inclusions",
        body: [
          "Detail windows, frames, and glass partitions to remove paint flecks and adhesive residue.",
          "Deep-clean kitchens, washrooms, and circulation areas so they meet occupancy standards.",
          "Provide clear snag lists to the site manager so remaining defects can be tracked quickly.",
        ],
      },
      {
        heading: "Inspection and sign-off",
        body: [
          "Walk the site with the contractor or client representative and agree any final touch-ups.",
          "Capture completion photos or checklists to support compliance records and handover documentation.",
        ],
      },
    ],
    relatedServices: [
      { label: "Builders & Sparkle Cleaning", href: "/services/builders-sparkle" },
      { label: "Deep & One-off Cleaning", href: "/services/deep-one-off" },
      { label: "Contact our team", href: "/contact" },
    ],
  },
]
