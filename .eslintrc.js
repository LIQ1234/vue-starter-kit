module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6
  },
  env: {
    browser: true,
    es6: true
  },

  extends: [
    // "@vue/prettier",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // "plugin:vue/essential",
    // "plugin:vue/strongly-recommended",
    "eslint:recommended",
    // "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "plugin:flowtype/recommended",
    "prettier/flowtype",
    "prettier",
    "plugin:vue/essential"
  ],

  rules: {
    "prettier/prettier": "error",
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"]
      }
    ],
    "no-unused-vars": "warn",
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    "max-len": ["error", 80],
    "import/extensions": 0,
    // "no-return-assign": "error",
    "keyword-spacing": [
      2,
      {
        overrides: {
          function: {
            after: false
          }
        }
      }
    ],
    "vue/no-unused-vars": "warn",
    "vue/html-self-closing": 'off',
    "array-callback-return": "error",
    "no-lone-blocks": 2,
    eqeqeq: 2,
    "no-var": "error",
    "no-plusplus": "error",
    // "comma-dangle": [
    //   "error",
    //   {
    //     arrays: "always-multiline",
    //     objects: "always-multiline",
    //     imports: "always-multiline",
    //     exports: "always-multiline",
    //     functions: "never"
    //   }
    // ],
    "no-shadow": 0
  },

  globals: {
    getLodop: true,
    chrome: true,
    workbox: true,
    process: "readonly",
    module: "readonly",
    require: "readonly",
    __dirname: "readonly"
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
