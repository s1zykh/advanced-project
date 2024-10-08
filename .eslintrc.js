const { off } = require('process');

const allTsExtensionsArray = ['ts', 'tsx', 'mtsx'];
const allJsExtensionsArray = ['js', 'jsx', 'mjsx'];
const allExtensions = [...allTsExtensionsArray, ...allJsExtensionsArray].join(
    ',',
);
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.*', '*config.*', '*.test.*', '*.stories.*'],
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    plugins: [
        '@stylistic',
        'react',
        'import',
        'i18next',
        'react-hooks',
        's1zykh-test-plugin',
        'unused-imports',
    ],
    rules: {
        'no-console': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/jsx-no-useless-fragment': 'warn',
        's1zykh-test-plugin/path-checker': ['error', { alias: '@' }],
        's1zykh-test-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        's1zykh-test-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-unused-vars': 'warn',
        'linebreak-style': 0,
        'global-require': 0,
        'no-shadow': 'off',
        'react/no-deprecated': 'off',
        'function-call-argument-newline': [2, 'consistent'],
        'function-paren-newline': [2, 'multiline'],
        'jsx-quotes': [2, 'prefer-double'],
        quotes: [2, 'single'],
        semi: [1, 'always'],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-props-no-spreading': 'warn',
        'function-paren-newline': 'off',
        'react/function-component-definition': 'off',
        'import/no-unresolved': 'off',
        'react/jsx-closing-tag-location': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'react/no-array-index-key': 'off',
        'no-param-reassign': 'off',
        'default-param-last': 'off',
        'no-nested-ternary': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/order': [
            2,
            {
                groups: [
                    ['builtin', 'external'],
                    [
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                        'type',
                    ],
                ],
                'newlines-between': 'always',
            },
        ],
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            1,
            { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
