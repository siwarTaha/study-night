export default [
  {
    files: ["src/**/*.js", "test/**/*.js", "cypress/**/*.js", "gulpfile.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        cy: "readonly",
      },
    },
    rules: {
      eqeqeq: "error",
      "no-unused-vars": "error",
      "no-var": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
