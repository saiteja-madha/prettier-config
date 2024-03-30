# My Prettier Configuration

This package provides a custom [Prettier](https://prettier.io/) configuration tailored for my projects.

## Installation

Feel free to install this package in your project by running the following command:

```bash
# Using npm
npm install @saiteja-madha/prettier-config --save-dev

# Using yarn
yarn add @saiteja-madha/prettier-config --dev

# Using pnpm
pnpm add @saiteja-madha/prettier-config --save-dev
```

## Usage

To use this configuration, create a `.prettierrc.js` file in the root of your project and add the following code:

```javascript
module.exports = {
    ...require("@saiteja-madha/prettier-config"),
};
```
