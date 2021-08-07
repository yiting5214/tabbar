module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential",
    // "eslint:recommended", "@vue/prettier"   //关闭eslint
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "off"

    //关闭 prettier
    // [
    //   'warn', {
    //     semi: false,
    //     singleQuote: true,
    //     endOfLine: 'auto'
    //   },
    // ],
  },
};
