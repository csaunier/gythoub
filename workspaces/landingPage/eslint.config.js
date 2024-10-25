import gythoubEslintConfig from "@gythoub/eslint-config/base.js"
import eslintPluginAstro from "eslint-plugin-astro"

export default [
  ...gythoubEslintConfig,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "react/no-unknown-property": "off",
    },
    ignores: ["node_modules/", "dist/", "**/*.d.ts"],
  },
]
