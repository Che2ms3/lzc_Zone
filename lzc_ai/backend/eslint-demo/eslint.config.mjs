import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser },
    rules: {
      // 级别 2=error 1=warn 警告 0关闭
      "no-var": 2,// 不能用var
      "no-console": 1,// 开发时用，上线后不用
      "semi":["error","always"],
      "quotes": ["error","double"],
      "indent": ["error",2]
    }
  },
    
]);
