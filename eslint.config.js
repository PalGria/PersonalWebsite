import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Build output, including the deploy folders on the VPS
    ignores: ["dist/**", "dist-old/**", "live/**", "live-old/**", ".vite-react-ssg-temp/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      'react': pluginReact,
      'react-hooks': pluginReactHooks,
      '@typescript-eslint': tsPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // Manually include rules from the recommended configurations.
      // Unresolved imports are caught by `tsc -b`, which runs in the build.
      ...pluginJs.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      // TypeScript already reports undefined identifiers (and knows about types/globals).
      'no-undef': 'off',
    },
  },
];
