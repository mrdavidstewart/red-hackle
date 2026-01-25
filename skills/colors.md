# Color System Skill

## Purpose
Maintain a consistent, accessible, and themeable color system across the application using CSS variables.

This skill exists to ensure color consistency, improve maintainability, and support both light and dark themes with proper contrast ratios.

## When to Use
Apply this skill when working on:
- Component styling and colors
- Button, link, and interactive element colors
- Theme-aware designs (light/dark mode)
- Accessibility and contrast ratios
- Design system consistency

## Core Principles
- Use CSS variables (from `styles/globals.css`) instead of hardcoded Tailwind color classes
- Ensure WCAG AA contrast compliance for all text colors
- Maintain separate light and dark theme color values
- Leverage the `destructive` color system for primary CTAs and alerts

## Allowed Actions
- Use Tailwind classes with CSS variables: `bg-destructive`, `text-destructive`, `bg-primary`, etc.
- Add new color tokens to `styles/globals.css` when needed
- Implement theme-specific colors in the `.dark` media query
- Use semantic color names in class names (`destructive`, `primary`, `secondary`)
- Apply hover/opacity variants: `hover:bg-destructive/90`, `text-destructive/80`

## Disallowed Actions
- Using hardcoded Tailwind color classes like `bg-red-500`, `text-blue-600`, `border-green-400`
- Defining colors inline or in component styles instead of CSS variables
- Creating new color tokens without considering dark theme implications
- Using incompatible color combinations (insufficient contrast ratios)

## Color Reference

### Destructive (Red)
- **Light theme**: `oklch(0.5379 0.2104 26.26)` with white foreground (`oklch(0.985 0 0)`)
- **Dark theme**: `oklch(0.5379 0.2104 26.26)` with white foreground (`oklch(0.985 0 0)`)
- **Usage**: Primary CTAs, quote buttons, alerts, important actions
- **Contrast**: WCAG AA compliant (white text on red background)

### Primary (Grayscale)
- **Light theme**: White background (`oklch(0.985 0 0)`)
- **Dark theme**: Dark gray (`oklch(0.1608 0.0309 280.45)`)
- **Usage**: Default buttons, backgrounds, primary typography

### Secondary & Muted
- **Light theme**: Light gray variants
- **Dark theme**: Medium gray variants
- **Usage**: Subdued text, borders, secondary buttons

## File Locations
- CSS Variables: [`styles/globals.css`](../styles/globals.css) (lines 1-100)
- Button Component: [`components/ui/button.tsx`](../components/ui/button.tsx) (line 15 defines destructive variant)
- Badge Component: [`components/ui/badge.tsx`](../components/ui/badge.tsx) (line 17 defines destructive variant)

## Success Indicators
- All buttons and interactive elements use `bg-destructive text-white`
- No hardcoded Tailwind color classes (`text-red-*`, `bg-blue-*`, etc.) in components
- Consistent color usage across all pages and components
- Proper contrast ratios verified in both light and dark themes
- Theme switching works without color flickering or contrast issues
