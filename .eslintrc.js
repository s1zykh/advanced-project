const allTsExtensionsArray = ["ts", "tsx", "mtsx"];
const allJsExtensionsArray = ["js", "jsx", "mjsx"];
const allExtensions = [...allTsExtensionsArray, ...allJsExtensionsArray].join(
  ","
);
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.*", "*config.*", "*.test.*", "*.stories.*"],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: [
    "@stylistic", 
    "react", 
    "import", 
    "i18next", 
    "react-hooks", 
    "s1zykh-test-plugin"
  ],
  rules: {
    "no-console": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "s1zykh-test-plugin/path-checker": "error",
    "no-undef": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "warn",
    "linebreak-style": 0,
    "global-require": 0,
    "no-shadow": "off",
    "react/no-deprecated": "off",
    indent: [2, 4],
    "max-len": "off",
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
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/jsx-indent-props": [2, 4],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "import/no-unresolved": "off",
    "react/jsx-closing-tag-location": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/no-array-index-key": "off",
    "no-param-reassign": "off",
    "default-param-last": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": [
      2,
      {
        groups: [
          ["builtin",
          "external"],
          [ "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type"]
        ],
        "newlines-between": "always",
      },
    ],
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      1,
      { markupOnly: true, ignoreAttribute: ["data-testid", "to"] },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  },
  overrides: [
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
