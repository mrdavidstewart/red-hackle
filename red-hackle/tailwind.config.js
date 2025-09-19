/**
 * Tailwind CSS v4 zero-config enhancement file.
 * Not strictly required, but allows future extension (plugins, theme tokens, etc.).
 */

export default {
  darkMode: 'class',
  // v4 does automatic content detection, but explicit globs help tooling & editors.
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './new-starter.html',
  ],
  theme: {
    extend: {
      // Example: custom easing, spacing, or colors if needed later
      // colors: { brand: 'oklch(var(--brand))' },
      borderRadius: {
        xs: '4px',
      },
    },
  },
  plugins: [
    // If you later add animation libraries or forms/typography plugins, include here.
  ],
};
