import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-20 px-6 gap-10">
        {/* 顶部 Logo + 返回链接 */}
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <Image
              className="dark:invert h-5 w-[100px]"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
          </Link>
          <Button asChild variant="ghost" size="sm" className="rounded-full px-4 h-9">
            <Link href="/">← 返回首页</Link>
          </Button>
        </div>

        {/* 404 主体 */}
        <div className="flex flex-col items-center gap-8 text-center">
          {/* 大号 404 文字 */}
          <div className="relative">
            <h1 className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent select-none">
              404
            </h1>
            {/* 装饰性光晕 */}
            <div className="absolute -inset-4 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>

          {/* 标题和描述 */}
          <div className="flex flex-col gap-4 max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-950 dark:text-zinc-50 tracking-tight">
              哎呀，这个页面走丢了
            </h2>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              你访问的路由不存在，或者已经被移动了。别担心，我们可以帮你重新找到方向。
            </p>
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
            <Button asChild size="lg" className="rounded-full h-12 px-6">
              <Link href="/" className="gap-2">🏠 回到首页</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-6">
              <Link href="/about">查看 About 页面</Link>
            </Button>
          </div>
        </div>

        {/* 常见链接提示 */}
        <div className="w-full pt-10 border-t border-black/[.08] dark:border-white/[.145]">
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-5 text-center">
            也许你想访问：
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button asChild variant="outline" className="h-auto py-4 rounded-xl">
              <Link href="/" className="gap-2">
                <span className="text-lg">/</span>
                <span>首页</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 rounded-xl">
              <Link href="/about" className="gap-2">
                <span className="text-lg">ℹ️</span>
                <span>关于 Next.js</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 rounded-xl">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <span className="text-lg">📚</span>
                <span>官方文档</span>
              </a>
            </Button>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="w-full border-t border-black/[.08] dark:border-white/[.145] py-6">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Next.js 演示项目 · 这是一个自定义 404 页面
        </div>
      </footer>
    </div>
  );
}
