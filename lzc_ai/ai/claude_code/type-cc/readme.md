# Claude Code

- AIGC 代码生成
  豆包复杂代码 chatbot
- vs code+cc 插件
  Ai Coding Agent
  手和脚 直接干活，生成的代码直接写入文件夹
- cc 的命令工具
  - 基于node.js
  - npm config set registry https://registry.npmmirror.com
    npm node package management
    包的来源设置为淘宝源 国内 快
    npm install -g @anthropic-ai/claude-code
    全局安装cc命令行npm包

    Claude -- version 

## cc 开发网页 jima
- claude 
  是否信任文件夹
  就像你请了一个程序员来帮你改项目，得先把办公室门禁给他，他才能进去看代码、改文件、跑命令，但权限页只限你授权这个文件夹。

  这体现了Anthropic在Claude code里面强调
  最小权限+安全边界 思想   
## vibe coding
- 不要急于将任务交给llm
- 先思考
  五个构建块，llm 擅长执行准确详细的任务
  prompt设计能力是关键

  ## cc 提供plan 模式
  通过询问一系列问题，cc 会根据你的问题，生成一个计划，帮助你完成任务
  代替Prompt

## plan 模式
- 不是直接执行任务
- 先规划一下
  请了诸葛亮
  /plan
- 新的工作模式
  不太了解行业或领域，/plan可以降低难度
  - Claude code 非常智能（智能体）
    思考规划并执行
  - 对新手友好
  
## 使用cc 维护一个已有的项目
- 先思考，了解项目
  运行起来，按模块看代码
  - cc 
   - 如果之前就是cc开发的 
   直接查看根目录下的Claude.md 文件（项目描述文件）
   /init 
   初始化项目，生成Claude.md 文件
   将项目都分析一遍

