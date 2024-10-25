/** @type {import('stylelint').Config} */
export default {
  plugins : [
    "stylelint-selector-bem-pattern"
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-property-sort-order-smacss",
    "stylelint-config-css-modules",
    ],
  "rules": {
    "selector-class-pattern": null,
    "custom-property-pattern": null
  }
};