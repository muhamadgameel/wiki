module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "jest", "solid"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:solid/recommended",
    "plugin:solid/typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "prettier",
  ],
  globals: {},
  settings: {},
  rules: {
    semi: "off",
    "sort-imports": "warn",
  },
};
