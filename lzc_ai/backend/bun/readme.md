# Bun
Bun 是比 node 更快、开箱即用、零配置的JS/TS 运行时+包管理器
node 优化的升级版，性能特别好
ahthorpic 收购了 用于Claude code底层

## typescript
来自微软，是js的超集，添加了类型约束
js 弱类型，经常会出类型错误 
- 静态类型编译 ts -> js文件， 检查类型或代码错误
- ts 非常强大 ，已经是AI Agent 的标配

##  js 的易错性
- 浏览器input输入 我们以为是数字，实际上是字符串
- + 加法和字符串拼接
- 又不报错，导致错误可能隐藏在系统里很久。
ts 来解决
## 安装一下
powershell -c "irm bun.sh/install/windows | iex"

curl -fsSL https://bun.sh/install | bash （macOs）


