// 博客 mock 数据的唯一数据源 —— 列表页（blog/page.tsx）与详情页（blog/[slug]/page.tsx）共用
// 新增/修改文章只需要在这里编辑一次。

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  readTime: string;
  tag: {
    label: string;
    color: string;
  };
  author: {
    name: string;
    role: string;
  };
  content: string[]; // 正文段落数组，每一项渲染为一个 <p>
};

const IMG_COVER_RENDER =
  "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Next.js%20rendering%20modes%20illustration%20SSG%20SSR%20ISR%20diagram%20with%20servers%20and%20browser%20modern%20tech%20style&image_size=landscape_16_9";

const IMG_COVER_REACT =
  "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=React%2019%20new%20features%20showcase%20with%20colorful%20code%20blocks%20and%20geometric%20shapes%20modern%20purple%20gradient&image_size=landscape_16_9";

const posts: BlogPost[] = [
  {
    slug: "nextjs-rendering-deep-dive",
    title: "深入理解 Next.js 的三种渲染模式：SSG、SSR 与 ISR",
    excerpt:
      "在构建 Next.js 应用时，选择合适的渲染策略直接影响首屏性能、SEO 与可维护性。本文带你从原理出发，拆解静态生成、服务端渲染与增量再生成的适用场景与实战技巧。",
    cover: IMG_COVER_RENDER,
    date: "2026 年 8 月 15 日",
    readTime: "8 分钟阅读",
    tag: {
      label: "Next.js",
      color:
        "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    },
    author: {
      name: "LZC",
      role: "全栈工程师",
    },
    content: [
      "Next.js 之所以能成为 React 生态中最流行的框架之一，核心原因是它把「渲染策略」这件事彻底做成了可配置的选项。同一份 React 代码，你既可以在构建时把它渲染成静态 HTML，也可以在用户每次请求时动态生成，甚至把两者结合起来 —— 这就是我们常说的 SSG、SSR 和 ISR。",
      "SSG（Static Site Generation，静态生成）是 Next.js 默认推荐的方式。只要页面组件在代码中没有显式声明动态数据依赖，Next.js 就会在 next build 阶段把它预渲染为纯静态 HTML 文件。用户访问时直接由 CDN 响应，延迟最低、成本最低，非常适合博客、文档、营销落地页这类内容不经常变化的场景。",
      "SSR（Server-Side Rendering，服务端渲染）则发生在用户每次请求时。每当浏览器请求一个 SSR 路由，Next.js 都会在服务端完整渲染一次页面、拿到最新的数据，再把 HTML 下发给客户端。它适合个性化推荐、实时仪表盘、用户订单详情这类「每次访问都可能有不同内容」的页面。代价是 TTFB（首字节时间）会比静态页面高，对服务器资源消耗也更大。",
      "ISR（Incremental Static Regeneration，增量静态再生成）可以说是 SSG 和 SSR 的完美折中。页面一开始仍然是在构建时生成的静态页（继承了 SSG 的首屏速度），但你可以通过 revalidate 参数告诉 Next.js：「每隔 N 秒，当有请求进来时在后台重新生成一份新的静态页」。新的页面生成之后，后续用户访问就会拿到最新的静态内容。这种方式在保持接近 SSG 性能的同时，拥有了 SSR 级别的「内容新鲜度」，非常适合商品详情、新闻、论坛帖子等场景。",
      "在 Next.js 最新的 App Router 中，这三种模式已经不再需要用 getStaticProps / getServerSideProps 这样的 API 明确区分，而是通过导出 revalidate、dynamic 等配置项，甚至是使用 fetch(..., { next: { revalidate: 60 } }) 这样的请求级缓存策略，让你在同一个页面里可以对不同的数据选择不同的刷新周期 —— 这也被称为「Streaming SSR + 细粒度缓存」混合模式，是 Next.js 区别于其它框架的最大亮点。",
      "总结一下：如果你不知道该选什么，**默认 SSG**；如果内容每次请求都变，选 SSR；如果内容会更新但不要求毫秒级实时，选 ISR。实际项目中，一个 Next.js 应用往往是三种模式并存，针对不同路由因地制宜，才能在性能、成本与用户体验之间达到最好的平衡。",
    ],
  },
  {
    slug: "react-19-whats-new",
    title: "React 19 新特性速览：Actions、use hook 与 Server Components",
    excerpt:
      "React 19 带来了诸多期待已久的能力：表单 Actions 让表单提交变得优雅，use() 原生支持 Promise 与 Context，Server Components 从实验走向稳定。一篇文章带你快速掌握所有重点。",
    cover: IMG_COVER_REACT,
    date: "2026 年 8 月 5 日",
    readTime: "6 分钟阅读",
    tag: {
      label: "React",
      color:
        "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    },
    author: {
      name: "LZC",
      role: "前端开发",
    },
    content: [
      "React 19 是一次「开发者体验导向」的版本发布：过去几年被大家反复吐槽的表单处理、异步数据读取、Context 深层嵌套等问题，在这个版本都有了官方一级答案。",
      "最引人注目的新能力是 **Actions**。过去实现一个登录表单，你需要自己维护 loading 状态、手动处理乐观更新、错误回滚；现在，只要给 <form action={formAction} /> 传入一个异步函数，React 就会自动帮你跟踪 pending 状态、配合 useFormStatus 在任意子组件读取表单提交中的状态，甚至通过 useOptimistic 实现「先改 UI 再等服务端确认」的乐观更新体验。配合 Next.js 的 Server Actions，这份逻辑甚至可以直接运行在服务端，前端零 JS。",
      "另一个让大家大呼过瘾的 API 是 **use()**。它有两个完全不同但都超实用的用法：第一，把 Promise 传给 use()，React 会自动配合 Suspense 挂起并等待 resolve，之后重新渲染——从此你不再需要 useEffect + useState 的那套「异步拉数据模板」。第二，把 Context 传给 use()，可以直接在条件分支和循环里调用，摆脱了只能在组件顶层 useContext 的限制（虽然官方仍然建议不要滥用条件读取，但确实让高阶组件、动态切换场景的代码清爽了很多）。",
      "然后是 **Server Components（RSC）** 的正式稳定。简单说，React 现在把组件分成两类：一类运行在浏览器（加 'use client' 标记），有交互、有状态、能调用浏览器 API；另一类默认运行在服务器端，能直接 import 数据库、读取文件、直连 API，它们的渲染结果通过流的形式发给客户端。这种模式让你的前端代码天然「分层」，避免了「前端项目其实只是把服务端渲染的大 HTML 再 hydrate 一遍」的尴尬，打包体积显著下降。Next.js 从 v13 开始就已经全面推行 App Router + RSC，现在 React 19 官方盖章，生态的兼容会越来越顺。",
      "其它细节还包括：useRef 可以直接通过 initialValue 传函数初始化了（不再为了避免构造函数多次执行写 useRef(null) + if ref.current==null 的模板）、forwardRef 可以用一个普通函数接收第二个 ref 参数了（再也不必为 HOC 包一层 forwardRef 导致 DevTools 里出现 Anonymous）、<title> <meta> 这些 document 元素可以直接写在组件树里，React 会自动帮你挂到 document.head 上，省掉了一个 react-helmet-async 包。",
      "整体看，React 19 并没有引入什么惊世骇俗的新概念，而是把过去几年社区摸索出的最佳实践（Suspense、流式 SSR、表单 action、Server Components）逐一纳入官方 API、把心智负担降下来。对业务开发来说，这意味着更短的业务代码、更一致的协作方式，以及更少的「XXX 到底怎么写才算 best practice」讨论。",
    ],
  },
];

// 供列表页、详情页消费的两个辅助函数
export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
