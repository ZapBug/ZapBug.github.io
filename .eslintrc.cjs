module.exports = {
  env: { node: true, es2022: true, browser: true },
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended", // Astro 官方推荐规则
    "plugin:prettier/recommended" // 必须放在最后，覆盖格式冲突
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // 覆盖 Astro 推荐规则中的解析器设置
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser", // 指定 Astro 文件解析器
      parserOptions: {
        parser: "@typescript-eslint/parser", // Astro 内 TS 脚本的解析器
        extraFileExtensions: [".astro"],
      },
      rules: {
        // 可在此处覆盖 Astro 文件的特定规则
      },
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
  ],
};
