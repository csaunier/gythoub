import prettierConfig from "@gythoub/prettier-config/base.js"

export default {
  ...prettierConfig,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
