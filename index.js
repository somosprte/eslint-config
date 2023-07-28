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
    'import-newlines/enforce': [
      'error',
      2,
      140
    ],
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
        'code': 140
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
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.d.ts'],
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