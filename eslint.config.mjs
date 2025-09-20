// Flat ESLint configuration (ESLint 9 + TypeScript 5 + React + Tailwind)
// Removed dependency on eslint-config-next to avoid patch incompatibilities.

import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "coverage",
      "*.min.js",
      "**/*.d.ts",
      "eslint.config.*"
    ]
  },

  // TypeScript recommended (type-checked + stylistic) — scoped to TS files only
  ...tseslint.configs.recommendedTypeChecked.map((c) => ({
    ...c,
    files: ["**/*.{ts,tsx}"],
  })),
  ...tseslint.configs.stylisticTypeChecked.map((c) => ({
    ...c,
    files: ["**/*.{ts,tsx}"],
  })),

  // Our TypeScript project settings + rules
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
        ecmaVersion: 2022,
        sourceType: "module"
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      // tailwindcss plugin removed (incompatible with Tailwind v4 at time of config)
    },
    settings: {
      react: { version: "detect" },
      // Tailwind plugin disabled pending v4-compatible release
    },
    rules: {
      // Base JS / TS
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      // Security
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      // React
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // TypeScript fine‑tuning
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" }
      ],
      // Disable this typed rule explicitly (the presets may enable it)
      "@typescript-eslint/await-thenable": "off",
      // Imports
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
            ["object", "type"]
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true }
        }
      ],
      // Tailwind rules removed (plugin disabled)
    }
  },

  // Plain JavaScript — ensure no TS parser/services or TS rules run here
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module"
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin
    },
    rules: {
      // Base JS rules (no TS-specific ones here)
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      // Security
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      // React
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Imports
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
            ["object", "type"]
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true }
        }
      ]
    }
  },

  // Tests (both TS and JS)
  {
    files: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ]
    }
  }
];
