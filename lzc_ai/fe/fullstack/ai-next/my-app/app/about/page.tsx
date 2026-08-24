import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "关于 Next.js",
  description: "了解 Next.js 的核心概念、特性与项目结构",
};

const features = [
  {
    title: "App Router 路由系统",
    desc: "基于文件系统的路由，通过 app 目录自动生成路由，支持嵌套路由、动态路由段、路由组等高级功能。",
    icon: "📁",
  },
  {
    title: "服务器组件 & 客户端组件",
    desc: "默认渲染在服务器端，减少客户端 JavaScript 体积；需要交互的组件通过 'use client' 指令声明。",
    icon: "🖥️",
  },
  {
    title: "多种渲染策略",
    desc: "支持 SSR（服务端渲染）、SSG（静态生成）、ISR（增量静态再生成）和 CSR，灵活适配不同场景。",
    icon: "⚡",
  },
  {
    title: "数据获取优化",
    desc: "内置 fetch API 扩展，支持请求去重、缓存策略配置；Server Actions 直接处理表单提交。",
    icon: "📦",
  },
  {
    title: "内置优化能力",
    desc: "Image、Font、Script 组件自动优化资源加载，提升 Core Web Vitals 指标。",
    icon: "🚀",
  },
  {
    title: "TypeScript & Tailwind",
    desc: "开箱即用的 TypeScript 支持，内置 Tailwind CSS 4.0 配置，开发体验一流。",
    icon: "🎨",
  },
];

const projectStructure = [
  { path: "app/", desc: "App Router 路由根目录，所有页面和布局放置于此" },
  { path: "app/page.tsx", desc: "首页组件，访问 / 路由时渲染" },
  { path: "app/about/page.tsx", desc: "About 页面组件，访问 /about 路由时渲染" },
  { path: "app/layout.tsx", desc: "根布局组件，包裹所有页面的共享 UI" },
  { path: "app/globals.css", desc: "全局样式文件，配置 Tailwind 与主题变量" },
  { path: "public/", desc: "静态资源目录，图片、SVG 等文件可直接引用" },
  { path: "next.config.ts", desc: "Next.js 配置文件，自定义构建与运行行为" },
  { path: "tsconfig.json", desc: "TypeScript 编译配置" },
];

const renderModes = [
  {
    name: "静态生成 (SSG)",
    badge: "构建时",
    color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    desc: "页面在 build 阶段生成 HTML，可被 CDN 缓存，适合内容不常变的页面。",
  },
  {
    name: "服务端渲染 (SSR)",
    badge: "请求时",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    desc: "每次用户请求时动态生成 HTML，数据始终为最新，适合个性化内容。",
  },
  {
    name: "增量再生成 (ISR)",
    badge: "构建 + 定时",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    desc: "结合 SSG 与 SSR 的优势，按设定时间窗口自动重新生成静态页面。",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-5xl flex-col py-20 px-6 gap-20">
        {/* 标题区 */}
        <section className="flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[.08] dark:border-white/[.145] px-4 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Next.js v16 · React 19 · TypeScript
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight max-w-3xl">
            用 Next.js 构建
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              现代化全栈 Web 应用
            </span>
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Next.js 是一个由 Vercel 开发和维护的 React 框架，为构建生产级应用提供了路由、渲染、数据获取等开箱即用的能力。
          </p>
        </section>

        {/* 核心特性 */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
              核心特性
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Next.js 提供了构建现代 Web 应用所需的一切基础设施
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-white dark:bg-zinc-950/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 渲染模式对比 */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
              渲染模式
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              根据业务场景灵活选择最合适的渲染策略
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {renderModes.map((mode) => (
              <div
                key={mode.name}
                className="p-6 rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-white dark:bg-zinc-950/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {mode.name}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${mode.color}`}
                  >
                    {mode.badge}
                  </span>
                </div>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {mode.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 项目结构 */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
              项目结构
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              当前项目的关键目录与文件说明
            </p>
          </div>
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-white dark:bg-zinc-950/50 overflow-hidden">
            <div className="px-4 py-3 border-b border-black/[.08] dark:border-white/[.145] flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                my-app/
              </span>
            </div>
            <div className="p-4 font-mono text-sm">
              {projectStructure.map((item, i) => (
                <div
                  key={item.path}
                  className={`py-2.5 px-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 ${
                    i % 2 === 0
                      ? "bg-zinc-50 dark:bg-zinc-900/30 rounded-lg"
                      : ""
                  }`}
                >
                  <span className="text-blue-600 dark:text-blue-400 font-semibold min-w-[180px]">
                    {item.path}
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400 font-sans text-sm">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 快速开始 */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
              快速开始
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              几条命令即可启动本地开发环境
            </p>
          </div>
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-black dark:bg-zinc-950 overflow-hidden">
            <div className="px-5 py-4 flex items-center justify-between border-b border-white/10">
              <span className="text-xs text-zinc-400 font-mono">Terminal</span>
            </div>
            <div className="p-5 space-y-3 font-mono text-sm">
              <div>
                <span className="text-green-400"># 安装依赖</span>
              </div>
              <div>
                <span className="text-blue-400">$</span>
                <span className="text-zinc-200 ml-2">npm install</span>
              </div>
              <div className="pt-2">
                <span className="text-green-400"># 启动开发服务器（默认 http://localhost:3000）</span>
              </div>
              <div>
                <span className="text-blue-400">$</span>
                <span className="text-zinc-200 ml-2">npm run dev</span>
              </div>
              <div className="pt-2">
                <span className="text-green-400"># 生产构建</span>
              </div>
              <div>
                <span className="text-blue-400">$</span>
                <span className="text-zinc-200 ml-2">npm run build</span>
              </div>
              <div className="pt-2">
                <span className="text-green-400"># 运行生产构建</span>
              </div>
              <div>
                <span className="text-blue-400">$</span>
                <span className="text-zinc-200 ml-2">npm start</span>
              </div>
            </div>
          </div>
        </section>

        {/* 底部 CTA */}
        <section className="flex flex-col items-center gap-8 py-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
              想了解更多？
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
              阅读官方文档，开启你的 Next.js 全栈开发之旅
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-6">
              <Link href="/">← 返回首页</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full h-12 px-6">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                查看官方文档
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="w-full border-t border-black/[.08] dark:border-white/[.145] py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-500">
          <p>Built with Next.js · Powered by Vercel</p>
          <p>© {new Date().getFullYear()} About Next.js Demo</p>
        </div>
      </footer>
    </div>
  );
}
