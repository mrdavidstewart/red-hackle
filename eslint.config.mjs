import { defineConfig } from "eslint/config";
import eslintConfigNext from "eslint-config-next/core-web-vitals";
import reactPlugin from "eslint-plugin-react";

// Filter out React rules from Next.js config since they cause
// "getFilename is not a function" error with ESLint v10
const nextConfigFiltered = eslintConfigNext
  .filter((config) => !config.rules || !Object.keys(config.rules).some((rule) => rule.startsWith("react/")))
  .map((config) => {
    if (config.settings?.react) {
      // Remove react settings that trigger auto-detection
      const { react, ...otherSettings } = config.settings;
      return { ...config, settings: Object.keys(otherSettings).length > 0 ? otherSettings : undefined };
    }
    return config;
  });

export default defineConfig([
  // Next.js config without React plugin rules
  ...nextConfigFiltered,
  // Properly configure React with explicit version for ESLint v10
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "19.2.4",
      },
    },
    rules: {
      "react/display-name": "warn",
      "react/no-unescaped-entities": "warn",
    },
  },
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
