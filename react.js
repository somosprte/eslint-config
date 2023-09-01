require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["import", "prettier", "react", "react-hooks", "@typescript-eslint"],
  rules: {
    "prettier/prettier": ["warn"],
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-closing-bracket-location": [
      "warn",
      {
        nonEmpty: "after-props",
        selfClosing: "tag-aligned",
      },
    ],
    "react/jsx-curly-brace-presence": ["warn", "never"],
    "react/jsx-curly-spacing": [
      "warn",
      {
        when: "never",
      },
    ],
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-first-prop-new-line": ["warn", "multiline"],
    "react/jsx-fragments": ["warn", "syntax"],
    "react/jsx-indent": ["warn", 2],
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-no-bind": [
      "warn",
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-props-no-multi-spaces": "warn",
    "react/jsx-tag-spacing": "warn",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/jsx-wrap-multilines": [
      "warn",
      {
        declaration: false,
        assignment: false,
        return: true,
        arrow: true,
      },
    ],
    "react/no-access-state-in-setstate": "warn",
    "react/no-did-mount-set-state": "warn",
    "react/no-did-update-set-state": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-redundant-should-component-update": "warn",
    "react/no-this-in-sfc": "warn",
    "react/no-unknown-property": "warn",
    "react/no-will-update-set-state": "warn",
    "react/require-render-return": "warn",
    "react/self-closing-comp": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/default": "off",
    "import/export": "error",
    "import/first": "warn",
    "import/namespace": [
      "error",
      {
        allowComputed: true,
      },
    ],
    "import/no-duplicates": "error",
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "index", "sibling"],
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Number: {
            message: "Use `number` instead.",
            fixWith: "number",
          },
          Boolean: {
            message: "Use `boolean` instead.",
            fixWith: "boolean",
          },
          Symbol: {
            message: "Use `symbol` instead.",
            fixWith: "symbol",
          },
          Object: {
            message: "Use `object` instead.",
            fixWith: "object",
          },
          String: {
            message: "Use `string` instead.",
            fixWith: "string",
          },
          "{}": {
            message: "Use `object` instead.",
            fixWith: "object",
          },
        },
        extendDefaults: false,
      },
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow",
      },
    ],
    "@typescript-eslint/no-extra-non-null-assertion": "warn",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "warn",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: true,
        caughtErrors: "all",
      },
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",
    "no-undef": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/extensions": ["*.ts", "*.tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": ["*.ts", "*.tsx"],
    },
    "import/resolver": {
      node: {
        extensions: ["*.ts", "*.tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
  env: {
    browser: true,
    commonjs: true,
  },
};
