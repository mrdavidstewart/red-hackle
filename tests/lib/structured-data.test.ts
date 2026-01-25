import { describe, expect, it } from "vitest"
import {
    baseUrl,
    businessInfo,
    buildAggregateRatingSchema,
    buildBlogPostingSchema,
    buildBreadcrumbSchema,
    buildFaqSchema,
    buildServiceSchema,
    eastCoastOfScotland,
    includingAreaStatement,
} from "@/lib/structured-data"

describe("structured-data", () => {
    describe("constants", () => {
        it("exports baseUrl", () => {
            expect(baseUrl).toBe("https://www.redhacklecleaningservices.com")
        })

        it("exports eastCoastOfScotland", () => {
            expect(eastCoastOfScotland).toBe("East Coast of Scotland")
        })

        it("exports includingAreaStatement", () => {
            expect(includingAreaStatement).toBe(", including Tayside, Angus, Fife, Perth, Aberdeen & Aberdeenshire.")
        })

        it("exports businessInfo", () => {
            expect(businessInfo.name).toBe("Red Hackle Cleaning Services")
            expect(businessInfo.legalName).toBe("Red Hackle Cleaning Services Ltd")
            expect(businessInfo.telephone).toBe("+447966881555")
            expect(businessInfo.email).toBe("operations@redhacklegroup.com")
        })
    })

    describe("buildServiceSchema", () => {
        it("builds a valid service schema", () => {
            const schema = buildServiceSchema({
                name: "Office Cleaning",
                description: "Professional office cleaning services",
                slug: "/services/office-cleaning",
            })

            expect(schema["@context"]).toBe("https://schema.org")
            expect(schema["@type"]).toBe("Service")
            expect(schema.name).toBe("Office Cleaning")
            expect(schema.description).toBe("Professional office cleaning services")
            expect(schema.url).toBe(`${baseUrl}/services/office-cleaning`)
            expect(schema.provider["@id"]).toBe(`${baseUrl}/#business`)
        })
    })

    describe("buildBreadcrumbSchema", () => {
        it("builds a valid breadcrumb schema", () => {
            const items = [
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Office Cleaning", path: "/services/office-cleaning" },
            ]

            const schema = buildBreadcrumbSchema(items)

            expect(schema["@context"]).toBe("https://schema.org")
            expect(schema["@type"]).toBe("BreadcrumbList")
            expect(schema.itemListElement).toHaveLength(3)
            expect(schema.itemListElement[0].position).toBe(1)
            expect(schema.itemListElement[0].name).toBe("Home")
            expect(schema.itemListElement[0].item).toBe(`${baseUrl}/`)
        })
    })

    describe("buildFaqSchema", () => {
        it("builds a valid FAQ schema", () => {
            const items = [
                { question: "What services do you offer?", answer: "We offer commercial cleaning services." },
                { question: "Where do you operate?", answer: "East Coast of Scotland." },
            ]

            const schema = buildFaqSchema(items)

            expect(schema["@context"]).toBe("https://schema.org")
            expect(schema["@type"]).toBe("FAQPage")
            expect(schema.mainEntity).toHaveLength(2)
            expect(schema.mainEntity[0]["@type"]).toBe("Question")
            expect(schema.mainEntity[0].name).toBe("What services do you offer?")
            expect(schema.mainEntity[0].acceptedAnswer["@type"]).toBe("Answer")
            expect(schema.mainEntity[0].acceptedAnswer.text).toBe("We offer commercial cleaning services.")
        })
    })

    describe("buildBlogPostingSchema", () => {
        it("builds a valid blog posting schema", () => {
            const schema = buildBlogPostingSchema({
                headline: "How to Clean Your Office",
                description: "A guide to office cleaning",
                slug: "/blog/office-cleaning-guide",
                datePublished: "2025-01-01",
                dateModified: "2025-01-15",
                image: "/images/office-cleaning.jpg",
            })

            expect(schema["@context"]).toBe("https://schema.org")
            expect(schema["@type"]).toBe("BlogPosting")
            expect(schema.headline).toBe("How to Clean Your Office")
            expect(schema.description).toBe("A guide to office cleaning")
            expect(schema.url).toBe(`${baseUrl}/blog/office-cleaning-guide`)
            expect(schema.datePublished).toBe("2025-01-01")
            expect(schema.dateModified).toBe("2025-01-15")
            expect(schema.image).toContain("/images/office-cleaning.jpg")
            expect(schema.author["@type"]).toBe("Organization")
            expect(schema.publisher["@type"]).toBe("Organization")
        })
    })

    describe("buildAggregateRatingSchema", () => {
        it("builds a valid aggregate rating schema", () => {
            const schema = buildAggregateRatingSchema({
                ratingValue: 4.8,
                reviewCount: 52,
            })

            expect(schema["@context"]).toBe("https://schema.org")
            expect(schema["@type"]).toBe("AggregateRating")
            expect(schema.ratingValue).toBe(4.8)
            expect(schema.reviewCount).toBe(52)
        })
    })
})
