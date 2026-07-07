# 多模态
- 生图模型
- 前段项目
  axios / fetch http 调用llm endpoint
  apiKey 写的明文 
  - dotenv node 环境，process
  - 前端环境 apiKey.env
## 前端工程化 vite
  - 页面开发
  - 工程开发 

## vite
  项目脚手架
## .env 流程
- vite   npm
- .env.local    VITE_QWEN_API_KEY=...
- import.meta.env.VITE_QWEN_API_KEY
既可以使用llm，还可以保证key 不被泄漏
VITE 就是前端项目在工程化这块的大管家
npm run dev VITE vite接管整个项目
