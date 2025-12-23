import { defineConfig } from "eslint/config";
import eslintConfigNext from "eslint-config-next/core-web-vitals";

export default defineConfig([
  // Next.js flat config with Core Web Vitals rules and built-in ignores
  ...eslintConfigNext,
  // Project-wide rules that are not included in the Next.js preset
  {
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
    },
  },
  // Extra TypeScript rules
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    ignores: ["node_modules/**"],
  },
]);
