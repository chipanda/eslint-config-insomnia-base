module.exports = {
  extends: [
    'airbnb-base'
  ],
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 2018
  },
  rules: {
    "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline"
    }],
    "no-underscore-dangle": ["off"],
    "radix": ["error", "as-needed"],
    "semi": ["error", "always"],
    "no-param-reassign": ["off"]
  }
};
