/* eslint-disable import/no-unresolved */
import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["dist/**"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      'import': importPlugin,
      'react': pluginReact,
      '@typescript-eslint': tsPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['src'],
        },
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      // Manually include rules from the recommended configurations
      ...pluginJs.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': [
        'error',
        { caseSensitiveStrict: true },
      ],
      // You need to manually specify the rules that are part of the recommended configs
    },
  },
];
