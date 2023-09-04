module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-import-newlines'],
  rules: {
    'camelcase': 'error',
    'no-extra-semi': 'error',
    'comma-dangle': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-duplicate-imports': 'error',
    'no-case-declarations': 'error',
    'no-trailing-spaces': ['error', { 'ignoreComments': true }],
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': 'const',
        'next': 'return'
      },
      {
        'blankLine': 'always',
        'prev': 'const',
        'next': 'if'
      },
      {
        'blankLine': 'always',
        'prev': 'let',
        'next': 'return'
      },
      {
        'blankLine': 'always',
        'prev': 'let',
        'next': 'if'
      },
      {
        'blankLine': 'always',
        'prev': 'var',
        'next': 'return'
      },
      {
        'blankLine': 'always',
        'prev': 'var',
        'next': 'if'
      },
      {
        'blankLine': 'always',
        'prev': 'if',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': 'export',
        'next': '*'
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'always',
        'asyncArrow': 'always'
      }
    ],
    'space-before-blocks': 'error',
    'import-newlines/enforce': [
      'error',
      2,
      180
    ],
    'arrow-spacing': 'error',
    'keyword-spacing': 'error',
    'switch-colon-spacing': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 0
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'max-len': [
      'error',
      {
        'code': 180
      }
    ],
    'key-spacing': [
      'error',
      {
        'afterColon': true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': false
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': false,
        'argsIgnorePattern': '^_',
        'caughtErrors': 'all'
      }
    ]
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
  overrides: [
    {
      'files': [
        '*.spec.ts'
      ],
      'env': {
        'jest': true
      }
    }
  ],
  ignorePatterns: [
    'node_modules',
    'dist',
    'bin',
    'lib',
    'build',
    'out'
  ]
}