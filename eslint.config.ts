import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // enable prettier plugin and show formatting issues as errors
  {
    plugins: { prettier: pluginPrettier },
    rules: { "prettier/prettier": "error" },
  },
  // turn off ESLint rules that conflict with prettier
  { extends: ["prettier"] },
]);
