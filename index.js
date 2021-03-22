module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-prettier",
    "stylelint-config-rational-order",
  ],
  ignoreFiles: ["build/**/*.css", "public/**/*.css", "node_modules/**/*.css"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    indentation: 2,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extends", "ignores"],
      },
    ],
    "declaration-block-trailing-semicolon": "always",
    "comment-whitespace-inside": "always",
    "declaration-block-no-duplicate-properties": true,
    "block-opening-brace-space-before": "always",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "block-opening-brace-newline-after": "always",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-empty-line-before": "never",
    "font-family-name-quotes": "always-where-required",
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": ["width", "height"],
    "no-descending-specificity": null,
    "number-leading-zero": null,
    "custom-property-empty-line-before": null,
    "order/order": [
      "declarations",
      {
        type: "at-rule",
        name: "media",
      },
      {
        type: "rule",
        selector: "^&::(before|after)",
      },
      {
        type: "rule",
        selector: "^&:\\w",
      },
      {
        type: "rule",
        selector: "^&_",
      },
      {
        type: "rule",
        selector: "^.",
      },
    ],
    "unit-allowed-list": [
      "em",
      "rem",
      "s",
      "fr",
      "%",
      "deg",
      "px",
      "ms",
      "vh",
      "vw",
      "ex",
      "vmin",
      "vmax",
    ],
  },
};