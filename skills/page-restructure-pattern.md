# Page Restructure Pattern Guide

## Overview
This document outlines the standardized 8-section page restructure pattern used across Red Hackle service pages and landing pages. This pattern has been successfully implemented on:
- builders-sparkle
- contract-cleaning
- office-workplace
- end-of-tenancy
- deep-one-off
- outsourcing
- consumables
- accommodation-housekeeping

## File Structure Changes

### Imports
Replace old imports with new reusable components:
```tsx
// OLD - Remove these:
import { FaqSection } from "@/components/site/faq-section"
import { eastCoastOfScotland, includingAreaStatement } from "@/lib/structured-data"

// NEW - Add these:
import { FaqSectionCard } from "@/components/site/faq-section-card"
import { CoverageSection } from "@/components/site/coverage-section" // If showing regional coverage
```

### Metadata
- Update title to be concise and benefit-focused (not descriptive)
- Rewrite description to highlight key value proposition
- Remove geographic constants from metadata
- Example:
  - OLD: "Commercial Cleaning Supplies"
  - NEW: "Managed Consumables & Hygiene Supply"

### Constants
Keep only what's needed:
- **faqItems**: Array of `{question, answer}` objects (expand to 4 items)
- **relatedServices**: Array of related service links
- **REMOVE**: Old descriptive arrays (deliverables, scopeOfWorks, idealFor, productRanges, etc.)

## 8-Section Structure

### 1. Hero Section
- **Background**: Dark (bg-gray-950) with red radial gradient
- **Badge**: White background with service category
- **h1 Title**: New, benefit-focused heading
- **Copy**: 2-3 lines with value proposition (use `<br />` to separate)
- **NO buttons in hero** - Let the content breathe

Example:
```tsx
<h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Managed Consumables &amp; Hygiene Supply</h1>
<p className="mt-4 text-lg text-gray-300">
    Never run out of stock again. Managed consumables for offices, facilities, and shared commercial spaces.
    <br /><br />
    Standalone or bundled with your cleaning contract.
</p>
```

### 2. Who This Service Is For (2-Column Split)
- **Background**: bg-gray-50
- **Card layout**: Single card with grid gap-8 md:grid-cols-2
- **Left column**: "This service is ideal for:" with 5 bullet points
- **Right column**: "Not the right fit if:" with 3 bullet points
- **Character**: Literal bullet (•) not unicode

```tsx
<section className="bg-gray-50">
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <Card className="border border-gray-200">
            <CardContent className="p-6">
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="font-semibold text-gray-900">This service is ideal for:</h3>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>• Item one</li>
                            {/* ... */}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">Not the right fit if:</h3>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>• Item one</li>
                            {/* ... */}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</section>
```

### 3. What We Supply/Include (2-Card Grid)
- **Background**: bg-white
- **h2 Title**: "What We Supply" or "What's Included"
- **Grid**: md:grid-cols-2 with two equal cards
- **Left card**: Standard/Core offerings
- **Right card**: Optional/Add-on offerings
- **Closing note**: Single paragraph below grid explaining flexibility

```tsx
<section className="bg-white">
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold text-gray-900">What We Supply</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="border border-gray-200">
                <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900">Standard [Item]s</h3>
                    <ul className="mt-4 space-y-2 text-gray-600">
                        <li>• Item one</li>
                        {/* ... */}
                    </ul>
                </CardContent>
            </Card>
            <Card className="border border-gray-200">
                <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900">Optional / [Category]</h3>
                    <ul className="mt-4 space-y-2 text-gray-600">
                        <li>• Item one</li>
                        {/* ... */}
                    </ul>
                </CardContent>
            </Card>
        </div>
        <p className="mt-6 text-gray-600">Closing statement about flexibility or bundling options.</p>
    </div>
</section>
```

### 4. Common Scenarios We Support
- **Background**: bg-gray-50
- **Card**: Single card with scenario list
- **h2 Title**: "Common scenarios we support" or "Common scenarios we handle"
- **Intro**: "We regularly support:"
- **List**: 5 bullet points of real-world use cases
- **Optional closing**: A single sentence reinforcing the value
- **NO grid** - Just single card with list

```tsx
<section className="bg-gray-50">
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <Card className="border border-gray-200">
            <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">Common scenarios we support</h2>
                <p className="mt-4 text-gray-600">We regularly support:</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Scenario one</li>
                    {/* ... */}
                </ul>
                <p className="mt-4 text-gray-600">Optional closing statement reinforcing focus/philosophy.</p>
            </CardContent>
        </Card>
    </div>
</section>
```

### 5. How We Deliver/Manage (4-Step Process)
- **Background**: bg-white
- **h2 Title**: "How we deliver" or "How we manage [service]"
- **Grid**: md:grid-cols-2 with 4 cards (2x2 layout)
- **Each card**: Numbered circular badge (1-4) with red styling
- **Numbering**: Circular badge with bg-red-100, text-red-700, h-8 w-8
- **Content**: 3-4 sub-bullet points per step

```tsx
<section className="bg-white">
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold text-gray-900">How we deliver</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Repeat this card structure 4 times */}
            <Card className="border border-gray-200">
                <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-700">1</div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">Step Title</h3>
                            <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                <li>• Point one</li>
                                <li>• Point two</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
            {/* ... repeat 3 more times for steps 2-4 */}
        </div>
    </div>
</section>
```

### 6. What Success Looks Like
- **Background**: bg-gray-50
- **Card**: Single card with checkmark list
- **h2 Title**: "What success looks like"
- **Checkmarks**: Use literal checkmark character (✔) not unicode
- **List**: 4 success outcomes with checkmarks
- **Character**: Use `✔` (U+2714) not `\u2714`

```tsx
<section className="bg-gray-50">
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <Card className="border border-gray-200">
            <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">What success looks like</h2>
                <ul className="mt-4 space-y-2 text-gray-600">
                    <li>✔ Outcome one</li>
                    <li>✔ Outcome two</li>
                    {/* ... */}
                </ul>
            </CardContent>
        </Card>
    </div>
</section>
```

### 7. Case Study
- **Background**: bg-white
- **Card**: Single card with bg-gray-50
- **h2 Title**: "Case Study"
- **Location/Title**: Bold paragraph with location and context
- **Description**: 1-2 sentences describing the scenario
- **Result**: Bold "The result:" or "The outcome:" with key metrics/benefits
- **Format**: Use em-dash (—) or strong tags for emphasis

```tsx
<section className="bg-white">
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
                    <p className="mt-4 font-semibold text-gray-900">Location – Area Details</p>
                    <p className="mt-3 text-gray-600">
                        Narrative about the challenge and what you did.
                    </p>
                    <p className="mt-3 text-gray-600">
                        <strong>The result:</strong> outcome achieved and benefits realized.
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
</section>
```

### 8. FAQ Section (Using FaqSectionCard Component)
- **Use reusable component**: `<FaqSectionCard items={faqItems} title="[Service] FAQs" />`
- **Background**: Handled by component (bg-gray-50)
- **Items array**: Array of `{question, answer}` objects
- **Min 4 items**: Expand FAQ items from 2 to 4 items
- **No description parameter**: Unlike old FaqSection, this takes only items and title

```tsx
<FaqSectionCard items={faqItems} title="Service Name FAQs" />
```

### 9. CTA Section (Call-To-Action / Contact)
- **Background**: bg-white
- **Card**: Single card with bg-gray-50
- **h2 Title**: Action-oriented question (e.g., "Need housekeeping you can rely on for every changeover?")
- **Copy**: "Tell us:" followed by 4-5 key info points
- **Button**: Single CTA button linking to /contact with descriptive text
- **Button styling**: bg-destructive text-white hover:bg-destructive/90

```tsx
<section className="bg-white">
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="space-y-6 p-6 sm:p-8">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">Action-oriented question here?</h2>
                    <p className="mt-4 text-gray-600"><strong>Tell us:</strong></p>
                    <ul className="mt-4 space-y-3 text-gray-600">
                        <li>• Information point one</li>
                        <li>• Information point two</li>
                        {/* ... */}
                    </ul>
                    <p className="mt-4 text-gray-600">
                        Closing statement about what you&apos;ll provide.
                    </p>
                    <div className="mt-6">
                        <Button asChild className="bg-destructive text-white hover:bg-destructive/90">
                            <Link href="/contact">Request a [Service] Quote</Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</section>
```

### (Optional) RelatedServices Section
- **Always include** for service pages
- **Use reusable component**: `<RelatedServices title="Related services" description="..." services={relatedServices} />`
- **Update services array** with 3 related service links
- **Place after CTA**

## Character Encoding Guidelines

### DO Use Literal Characters
- **Bullets**: `•` (U+2022) - Use literal character in code
- **Checkmarks**: `✔` (U+2714) - Use literal character in code
- **Em-dash**: `—` (U+2014) or use `&amp;` for ampersand

### DO Escape HTML Special Characters in JSX
- **Apostrophe**: `&apos;` (e.g., `You&apos;re` not `You're`)
- **Ampersand**: `&amp;` (e.g., `this &amp; that`)
- **Quotes**: `&quot;` (e.g., `&quot;exact match&quot;`)

### DON'T Use Unicode Escape Sequences
- ❌ DON'T use `\u2022` for bullets
- ❌ DON'T use `\u2714` for checkmarks
- ✅ DO use literal `•` and `✔` characters

## Styling Rules

### Alternating Backgrounds
- Odd sections (1, 3, 5, 7, 9): bg-gray-50 or bg-white (alternate)
- Even sections (2, 4, 6, 8): bg-white or bg-gray-50 (alternate)
- Pattern: gray-50 → white → gray-50 → white → gray-50

### Cards
- `className="border border-gray-200"` on all cards
- `bg-gray-50` only on case study card
- CardContent padding: `p-6` default, `p-6 sm:p-8` for larger sections

### Grids
- Two-column: `grid gap-6 md:grid-cols-2`
- Responsive: Stacks on mobile, 2 columns on md breakpoint

### Typography
- Section titles (h2): `text-2xl font-semibold text-gray-900`
- Card titles (h3): `font-semibold text-gray-900`
- Body text: `text-gray-600`
- Hero h1: `text-4xl font-black text-white sm:text-5xl`

## Testing Guidelines

### Test Structure
Each page should have assertions for:
1. **Main h1 heading** - Use `{ level: 1 }` to be specific
2. **Section headings** - h2 titles for main sections
3. **Key content** - Verify important text is present

### Test Pattern
```tsx
it("renders the [service] service page", () => {
    render(<ServicePage />)
    expect(
        screen.getByRole("heading", { level: 1, name: /exact h1 title/i }),
    ).toBeInTheDocument()
    expect(
        screen.getByRole("heading", { name: /section title/i }),
    ).toBeInTheDocument()
    expect(
        screen.getByText(/key content snippet/i),
    ).toBeInTheDocument()
})
```

### Why `{ level: 1 }` is Important
- Pages have multiple h2/h3 headings
- Without level specification, tests may find wrong heading
- This ensures you're testing the main page title, not a section

## Metadata Guidelines

### Title
- **Keep concise** (50-60 characters)
- **Benefit-focused** not descriptive
- Examples:
  - ✅ "Managed Consumables & Hygiene Supply"
  - ❌ "Commercial Cleaning Supplies and Consumables Management Services"

### Description
- **2-3 short sentences** (150-160 characters)
- **Lead with benefit**
- **No geographic references** (removed from description)
- **Action-oriented**
- Example:
  - "Never run out of stock again. Managed consumables for offices, facilities, and shared commercial spaces. Standalone or bundled with cleaning."

## FAQ Guidelines

### Quantity
- **Minimum 4 items** per page
- Each item: `{question: string, answer: string}`

### Content
- **Focus on practical questions** not sales pitch
- **Keep answers concise** (1-2 sentences)
- **Address common objections** and use cases
- **Examples**:
  - ✅ "Can you handle high-frequency changeovers?"
  - ❌ "Why should I choose Red Hackle?"

### Question Style
- **Phrased as customer questions**
- **Specific to the service**
- **Address concerns and capabilities**

## Component Usage

### FaqSectionCard (Reusable)
```tsx
<FaqSectionCard items={faqItems} title="[Service] FAQs" />
```
- Props: `items` (required), `title` (optional, defaults to "FAQs")
- Provides bg-gray-50, spacing, and consistent card layout

### CoverageSection (Reusable)
```tsx
<CoverageSection regions={coverageRegions} />
```
- Props: `regions` (required array of strings)
- Optional: `description`, `additionalText` for customization
- Use when showcasing regional coverage

### RelatedServices (Existing)
```tsx
<RelatedServices
    title="Related services"
    description="..."
    services={relatedServices}
/>
```

## Common Pitfalls to Avoid

1. **Keep old constants** - Remove productRanges, scopeOfWorks, deliverables, etc.
2. **Keep old FaqSection imports** - Replace with FaqSectionCard
3. **Use unicode escapes** - Use literal bullet/checkmark characters
4. **Unescape HTML entities** - Keep &apos;, &amp;, &quot; escaped
5. **Forget level: 1 in tests** - Specify heading level in assertions
6. **Include buttons in hero** - Hero should have only title and copy
7. **Inconsistent spacing** - Follow md:grid-cols-2, gap-6 pattern
8. **Merge case study with CTA** - Keep them as separate sections

## Quick Reference: Section Order

1. Hero (bg-gray-950)
2. Who/What (bg-gray-50)
3. What's Included (bg-white)
4. Common Scenarios (bg-gray-50)
5. How We Deliver (bg-white)
6. What Success Looks Like (bg-gray-50)
7. Case Study (bg-white)
8. FAQ (bg-gray-50)
9. CTA (bg-white)
10. RelatedServices (variable bg)

## Examples

See the following pages for complete implementation examples:
- `/app/services/builders-sparkle/page.tsx` - Original service page restructure
- `/app/services/contract-cleaning/page.tsx` - Contract-focused example
- `/app/consumables/page.tsx` - Consumables-specific example
- `/app/outsourcing/page.tsx` - Outsourcing-specific example
- `/app/services/accommodation-housekeeping/page.tsx` - Accommodation-focused example
