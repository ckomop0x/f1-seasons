import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import globals from 'globals';
import nextConfig from 'eslint-config-next';
import importPlugin from 'eslint-plugin-import';
import importHelpers from 'eslint-plugin-import-helpers';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

const nextPlugin = nextConfig[0].plugins['@next/next'];

export default tseslint.config([
  {
    ignores: [
      '**/jest-preprocess.js',
      '**/jest.config.js',
      '**/loadershim.js',
      '**/next-env.d.ts',
    ],
  },
  {
    plugins: { react: fixupPluginRules(reactPlugin) },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules,
    },
    languageOptions: reactPlugin.configs.flat.recommended.languageOptions,
  },
  importPlugin.flatConfigs.recommended,
  jsxA11y.flatConfigs.recommended,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  nextPlugin.configs.recommended,
  {
    plugins: {
      'import-helpers': fixupPluginRules(importHelpers),
      'react-hooks': reactHooks,
    },

    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      },

      parser: tseslint.parser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
      },

      'import/resolver': {
        typescript: {},
      },

      react: {
        pragma: 'React',
        version: 'detect',
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          singleQuote: true,
          tabWidth: 2,
          useTabs: false,
          arrowParens: 'avoid',
          trailingComma: 'all',
          endOfLine: 'lf',
          semi: true,
        },
      ],

      'import/no-unused-modules': 'error',
      'import/no-useless-path-segments': 'error',

      'import-helpers/order-imports': [
        'error',
        {
          groups: [
            ['/^react/', 'module'],
            ['parent', 'sibling', 'index'],
            '/.\\.css$/',
            '/.\\.scss$/',
          ],

          newlinesBetween: 'always',
        },
      ],

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',

          prev: [
            'const',
            'let',
            'var',
            'if',
            'for',
            'try',
            'switch',
            'function',
            'expression',
            'block-like',
          ],

          next: [
            'return',
            'if',
            'for',
            'try',
            'switch',
            'function',
            'block-like',
          ],
        },
      ],

      'react/display-name': 0,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/no-unescaped-entities': 0,
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',

      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
          accessibility: 'explicit',
        },
      ],

      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/triple-slash-reference': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      'arrow-body-style': 'error',
      'arrow-parens': ['error', 'as-needed'],
      camelcase: 'off',
      'comma-dangle': 'off',

      complexity: [
        'error',
        {
          max: 40,
        },
      ],

      'constructor-super': 'error',
      curly: ['error', 'multi-line'],
      'default-case': 'error',
      'dot-notation': 'off',
      'eol-last': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'id-match': 'off',
      'linebreak-style': 'off',
      'max-classes-per-file': ['error', 1],
      'max-len': 'off',
      'new-parens': 'off',
      'newline-per-chained-call': 'off',
      'no-bitwise': 'off',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-console': 'off',
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'off',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-extra-semi': 'off',
      'no-fallthrough': 'error',
      'no-invalid-this': 'off',
      'no-irregular-whitespace': 'off',
      'no-magic-numbers': 'off',
      'no-multiple-empty-lines': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-redeclare': 'error',
      'no-return-await': 'error',
      'no-sequences': 'error',

      'no-shadow': [
        'off',
        {
          hoist: 'all',
        },
      ],

      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'off',
      'no-unsafe-finally': 'error',

      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
        },
      ],

      'no-unused-labels': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      quotes: 'off',
      'quote-props': 'off',
      radix: 'error',
      'space-in-parens': ['off', 'never'],
      'spaced-comment': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'error',
    },
  },
]);
