## Eslint

ESLint is an open source project that helps you find and fix problems with your JavaScript code. It doesn't matter if you're writing JavaScript in the browser or on the server,
with or without a framework, ESLint can help your code live its best life.

## Usage

Update your `package.json` adding this following code:

```json
{
  "eslintConfig": {
    "extends": "@prte/eslint-config"
  }
}
```

Or if you prefer using `.eslintrc.json` consider using this:

```json
{
  "extends": "@prte/eslint-config"
}
```

Or if you prefer using `.eslintrc.js` consider using this:

```javascript
module.exports = {
  extends: "@prte/eslint-config"
};
```
