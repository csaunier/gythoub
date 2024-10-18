import js from "@eslint/js"
import reactPlugin from "eslint-plugin-react"
import jsxA11y from "eslint-plugin-jsx-a11y"
import eslintConfigPrettier from "eslint-config-prettier"
import tsEslint from "typescript-eslint"
import globals from "globals"

export default tsEslint.config(
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
  ...tsEslint.configs.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    ignores: ["node_modules/", "dist/"],
  }
)
