/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    semi: "off",
  },
  overrides: [
    {
      files: ["apps/**/*.{ts,tsx}"],
      rules: {
        "no-var": "warn",
        "no-empty": "off",
        "prefer-const": "warn",
        "no-unused-vars": "off", // 所有参数解构占位, 便于维护
        "no-empty-pattern": "off",
        "no-empty-function": "off", // 允许空函数: 占位函数
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off", // 允许any, 业务优先
      },
    },
  ],
}
