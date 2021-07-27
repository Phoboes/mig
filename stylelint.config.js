module.exports = {
  extends: [
    "stylelint-config-sass-guidelines",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": null,
  },
  fix: true,
  formatter: "verbose",
  syntax: "scss",
};
