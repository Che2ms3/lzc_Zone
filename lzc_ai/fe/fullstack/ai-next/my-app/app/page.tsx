import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-6 bg-white dark:bg-black sm:items-start gap-12">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            欢迎使用{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              Next.js
            </code>
            。
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            这是一个基于 Next.js App Router 的示例项目，使用 TypeScript + Tailwind CSS 构建。
            想要了解 Next.js 的核心概念、渲染模式与项目结构？
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto rounded-full h-12 px-6">
            <Link href="/about" className="gap-2">
              了解 Next.js →
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-12 px-6">
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              官方文档
            </a>
          </Button>
        </div>

        <div className="w-full pt-8 border-t border-black/[.08] dark:border-white/[.145]">
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4">快速操作：</p>
          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <Button asChild variant="outline" className="h-auto py-3 rounded-xl">
              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Image
                  className="dark:invert h-[14px] w-4"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={16}
                  height={14}
                />
                一键部署到 Vercel
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto py-3 rounded-xl">
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Image
                  className="h-4 w-4"
                  src="/window.svg"
                  alt="templates icon"
                  width={16}
                  height={16}
                />
                浏览项目模板
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
