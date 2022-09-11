module.exports = {
  env: {
    'vue/setup-compiler-macros': true, // 修复 defineProps、defineEmits 未定义的错误警告
    browser: true, // 浏览器
    node: true // Node
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    // 配置 jsx
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    indent: ['error', 2], // 缩进风格
    //quotes: ['error', 'single', { 'avoidEscape': true }], // 使用单引号
    'comma-dangle': ['error', 'never'], // 禁止对象尾逗号
    "vue/comment-directive": "off",
    'no-restricted-syntax': [
      'error',
      'WithStatement', // with 语句
      "BinaryExpression[operator='in']" // in 运算符
    ], // 禁止特定语法，参考：https://eslint.org/docs/rules/no-restricted-syntax
    camelcase: 'error', // 必须使用驼峰式命名法，参考：https://eslint.org/docs/rules/camelcase
    'no-var': 'error',
    'no-empty': 'error', // 禁止空的块语句，参考：https://eslint.org/docs/rules/no-empty
    'prefer-const': [
      'warn',
      { destructuring: 'all' /* ignoreReadBeforeAssign: true */ }
    ], // 使用 const 声明固定值，参考：https://cn.eslint.org/docs/rules/prefer-const
    'prefer-template': 'error', // 使用模板字面量拼接字符串，参考：https://eslint.org/docs/rules/prefer-template
    'object-shorthand': 'off', // 使用 ES6+ 语法简写对象，参考：https://eslint.org/docs/rules/object-shorthand
    'no-constant-condition': 'error', // 禁止在条件语句中使用常量，参考：https://eslint.org/docs/rules/no-constant-condition

    // TS
    "@typescript-eslint/explicit-module-boundary-types": "off",
    '@typescript-eslint/no-explicit-any': 'off', // 关闭：禁止使用 any 类型，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    // '@typescript-eslint/no-non-null-assertion': 'off', // 关闭：禁止使用 ! 进行非空断言，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // 关闭：禁止在可选链后使用 ! 进行非空断言，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md

    // vue
    'vue/no-v-html': 'off', // 关闭：禁止使用 v-html
    'vue/require-default-prop': 'off', // 关闭：props 指定类型后必须带有默认值
    // 'vue/require-explicit-emits': 'off', // 关闭：必须要显示的声明 emits，才能使用
    'vue/multi-word-component-names': 'off', // 关闭：组件名必须由多个单词组成
    'vue/component-definition-name-casing': 'off',
    // 'vue/comma-dangle': 'off', // 尾部逗号
    'vue/multiline-html-element-content-newline': ['off'],
    'vue/singleline-html-element-content-newline': ['off']
  },
  overrides: [
    {
      // 指定后缀文件启用 TypeScript 规则
      files: ['*.ts', '*.tsx', '*.vue']

    }
  ]
}
