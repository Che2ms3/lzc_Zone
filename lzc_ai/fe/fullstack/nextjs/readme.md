# 大前端手里的next.js

Next是React全栈框架，Nuxt 是Vue全栈框架，Nest 是后端框架。
NextJS 适合做全栈项目，可以写页面(前端)，也可以写api(后端)
背靠Vercel，seo做的非常棒，很多AI产品用next.js做官网。

## SEO 搜索引擎优化

SPA 好处
体验很好，组件是在前端挂载（useEffect去异步请求数据），不需要刷新页面。前端路由的支持，让页面切换效果快、好。
SPA的短板
像Native 移动端App，IOS、Android  App Store 小红点
SPA 抄的原生APP 体验做的和APP一样
App里80%页面是用SPA做的，
原生的要写两套，WebView 组件用于显示网页，前端来做
根本就不是为了SEO ，不是用浏览器搜索引擎(baidu,google
pc时代是流量的入口 SEO就是命
)推荐打开，移动端时代(超级App，20%原生，80%都是SPA )
html只需要写一次，不需要写两套。

SEO 非常差，没有SEO  #root 节点
AI 超厉害，OPC 产品多如牛毛，AI Agent产品站点
SEO去推广
如 掘金产品 csdn 老牌的内容类的网站
力量来自SEO
主流的SPA开发之外，全栈SEO良好的next.js(nuxt.js)

`#root(SPA) -> seo(react jsx -> html)(next.js)`

## 创建全栈项目

npx create-next-app@latest
选择默认配置
nuxt react全栈框架
react/react-dom react 界面
typescript
tailwindcss
eslint 代码风格规范

GEO Generative Engine Optimization
用户入口：豆包
生成的时候，带上我们的内容，购买链接

- SEO 友好 怎么实现的呢？
  - SPA #/todos
  Routes
    `Route path="/todos" element={<Todos /> /}`
    懒加载Todos 组件，在前端(client)挂载(#root),不需要刷新页面。
    index.html #root script src="main.js"
    CSR Client Side Rendering 客户端渲染
    Server 前端项目所在的服务器 / index.html
    当爬虫通过url来爬取的时候 #root script
    Client用户的浏览器 用户看得到页面，main.js App.jsx Todos.jsx
    在client端的运行  CSR

Java 全栈
    server，3000
    /todos 后端路由
    controller处理请求，service mysql 查询
    todos 数据？ seo需要的
    react 只要把react-dom不管
    react js node的方式
    react 组件只要不做事件监听，不做useEffect，
    组件函数 + todos 数据 模板的编译在一起就好？
    服务器端不是dom，字符串的格式化
    /todos api todos json数组
    前后端分离 /todos api  todos json 数组
    全栈项目 /todos 返回的就是react组件编译过后的html
        jsx + todos(数据) = 服务端UI html
        SSR Server Side Rendering 服务器端渲染

## CSR 和 SSR

SEO的根本
组件到底在哪里渲染
CSR Client 浏览器 SPA
SSR Server 服务端 Next.js

## next.js 语法

约定大于一切

- App Router
不需要建，文件就是路由，嵌套路由 建立文件夹
 page.jsx 就是页面
 nav 共用的，layout.js布局文件
 next.js 是给react开发者的开箱即用的利器。
 渲染规则：
 /about 后端路由
 /about/page.tsx 组件的编译 tsx-> html
- 先到layout.tsx 布局
  - page.tsx

## SEO的基本做法

第一层 你是谁？title    做什么？description  有什么价值提供？keywords
`<meta name="description" content="这是一个描述">`
`<meta name="keywords" content="这是一个关键词">`
第二层
做内容 用户来的原因
第三层
ssr 服务器端渲染
/post/:id  一个页面 千万篇 SSR 整站被SEO收录的内容给你的加权

## 客户端组件

next.js 将react server component 带到服务器端渲染，ssr开发模式。
jsx -> html  seo
有些页面 强交互 'use client'申明
不是只在浏览器渲染，先在服务器端把能渲染的渲染完，再去客户端渲染。
包好了水饺，冻上，给你送来，
水煮 水和
水合(hydration)：浏览器拿到静态HTML之后，挂载客户端js、绑定点击事件、激活交互；
csr组件 会执行两次，一次在服务器，第二次在客户端，打补丁