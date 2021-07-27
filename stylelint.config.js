module.exports = {
  extends: [
    "stylelint-config-sass-guidelines",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-scss"],
  // rules: {
  //   "at-rule-no-unknown": null,
  //   "scss/at-rule-no-unknown": null,
  // },
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "extend",
          "at-root",
          "debug",
          "warn",
          "error",
          "tailwind",
          "if",
          "else",
          "for",
          "each",
          "while",
          "mixin",
          "include",
          "content",
          "return",
          "function",
        ],
      },
    ],
  },
  fix: true,
  formatter: "verbose",
  syntax: "scss",
};
