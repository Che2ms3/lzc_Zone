# 流式输出

- Agent 开发时代
  - Agent 越来越像人，走向AGI时代
  - 如何将工作拆分，将AI擅长的交给Agent，我们审核，不擅长的我们接管
  - 项目工程初始化交给Agent 
  1. 没有必要从0 开始写vue项目
    src/App.vue
    index.html
  2. 到GitHub 拉取一个项目模板

- 热更新 hot reload
  开发阶段的利器 vite
  文件修改 -> 刷新页面 -> 丢失页面状态 -> 局部刷新

vue/react 数据状态 密密麻麻 

- stream 返回就是二进制流
  Unit8Array[十进制数，....] 0-255 之间无符号整数组 
  安排解码

## server 流式输出
### 后端返回的数据流
- 二进制文本流
- \n 换行符 每个数据（data：）块，一行结束
  兼顾响应速度和传输效率
  llm生成token时json短一点
  llm再生成一些token，json格式化 
  一次性发送多少个data：不确定的，1行，也可能2行3行
- data: {} json格式的文本 completion差不多的结构 

  出错 数据包一定的大小 当json 数据超过大小， 截断 cache_20260402","choices":[{"index":0, \n split for data: json JSON.parse() 有可能失败 
  try{

  } catch(e) { 
  // 出错 不能扔掉， 下一段接着要 接着发送后面的部分。 
  }

