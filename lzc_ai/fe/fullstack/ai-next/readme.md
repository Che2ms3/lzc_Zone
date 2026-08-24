# Next.js + AI

基于React的全栈开发框架，最好的AI全栈框架，为全栈开发叠加了上下文buf。

## 什么是框架？ Framework？
想象成一个建筑蓝图/工具箱，不需要从0开始盖房子。
而是提供了地基、墙壁和屋顶的一个基本架构。
以前是为开发者所有，现在是AI也可以用。
我们只需要关注组装和装修这个房子，关注业务。
## js 和 React  库
返回JSX的函数，响应式状态
把开发者从低级的前端API命令式流水线编程，
通过现代前端库React/Vue MVM，直接写业务就好。

const [count, setCount] = useState(0);
<>
  {count}
  onClick={() => setCount(count + 1)}
</>
##  Next.js 基于React 的最好的面向AI的全栈框架， 
AI上下文 = 组件 + 响应式业务 + 服务器端渲染 + api 
不使用框架：散乱的积木
- 图片放哪里？ /public
- 页面文件放哪里？ /app
- 组件放那里？ /components
使用框架 预制的乐高积木 提供了一系列的约束最佳实践，和AI SDD 文档上下文不谋而合。

开发效率大大提高，常见功能内置好，文件放在哪里，请求放在哪里？
框架提供基础结构，开发者专注于**业务**逻辑。AI FDE harness 落地。
使用框架，也给AI约束，一套上下文。AI能够更高效的根据框架给的约束开发项目。

## 为什么选择Next.js？
- 传统的前后端全栈开发
  react + Java/Python 两种语言，上下文切换成本
- Claude code /codex 支持最后
  约束，简化（csr,ssr）开箱即用
- 生态超级丰富
  - shadcn/UI 组件库
    ElementUI ANTD ...
    vibe coding 写组件，引入组件

- tailwindcss 
  原子类名 自带语义，特别适合AI学习
  AI语义分析能力
- vercel 公司
  全球唯一一家JS栈 AI coding Agent 以及生态的公司技术公司
  快捷发布 域名二级，绑定域名。

## 创建项目
  