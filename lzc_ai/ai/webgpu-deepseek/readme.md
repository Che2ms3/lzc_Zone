# webgpu-deepseek
## huggingface
AI 圈最火的开源模型社区，各个厂商把AI模型发布到这里。
modelscope

transform.js
web访问 id远程下载，访问，并执行nlp任务。
场景 

deepseek-r1-distill-qwen 1.5B 文件上传 -> huggingface ->transform.js ->
web 下载到浏览器本地（慢）-> 浏览器缓存 
->webgpu（新特性，兼容性）-> nlp任务

## 安装依赖
- @huggingface/transformers
  js 版本的transformer库，用于加载模型执行推理。
- "marked": "^15.0.5"，
  aigc 返回的是markdown格式文件，有利于在文本中表示一定的格式，比如代码，加粗，引用等等。
  显示到页面前需要把md格式转换成html格式，才能在浏览器中显示。

  更加简洁
  #=<h1></h1>
## 引入webworker


## load
- 空值合并运算符
  ？？= 用于在变量为null或undefined时，赋值。
  如果变量为false或者其他值，则不赋值。
  用于避免重复赋值，保持变量的原始值。AutoTokenizer.from_pretrained
  开销比较大
- web 异步下载 
  AutoTokenizer.from_pretrained promise
  文件比较大，文件的chunk慢慢到达，提供一个process_callback
  AutoModelForCausalLM.from_pretrained promise
  Promise.all([])
  