const allTsExtensionsArray = ["ts", "tsx", "mtsx"];
const allJsExtensionsArray = ["js", "jsx", "mjsx"];
const allExtensions = [...allTsExtensionsArray, ...allJsExtensionsArray].join(
  ","
);
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: [".eslintrc.*"],
  extends: ["plugin:react/recommended", "airbnb", "eslint:recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["@stylistic", "react", "import"],
  rules: {
    "no-console": "warn",
    "no-unused-vars": "warn",
    "linebreak-style": ["error", "windows"],
    "no-shadow": "off",
    indent: [2, 4],
    "max-len": [2, { code: 120 }],
    "array-bracket-spacing": [2, "always"],
    "function-call-argument-newline": [2, "consistent"],
    "function-paren-newline": [2, "multiline"],
    "jsx-quotes": [2, "prefer-double"],
    quotes: [2, "single"],
    semi: [1, "always"],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [2, 4],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": [
      2,
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
      },
    ],
    "no-underscore-dangle": "off",
  },
  globals: {
    __IS_DEV__: true,
  },
};