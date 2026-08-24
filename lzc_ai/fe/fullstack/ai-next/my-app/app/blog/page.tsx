import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllPosts, type BlogPost } from "./_mock/posts";

export const metadata = {
  title: "Blog",
  description: "Next.js 与前端开发相关的博客文章",
};

const posts: BlogPost[] = getAllPosts();

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-5xl flex-col py-16 px-6 gap-14">
        {/* 标题区 */}
        <section className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/[.08] dark:border-white/[.145] px-4 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
            博客文章 · 共 {posts.length} 篇
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight">
            博客与技术文章
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            记录关于 Next.js、React 以及现代前端工程化的实践与思考。
          </p>
        </section>

        {/* 博客卡片网格 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-white dark:bg-zinc-950/50 overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 h-full"
            >
              {/* 封面图 */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900"
              >
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={posts.indexOf(post) === 0}
                />
                {/* 标签 */}
                <span
                  className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md border ${post.tag.color} bg-white/70 dark:bg-black/50`}
                >
                  {post.tag.label}
                </span>
              </Link>

              {/* 内容区 */}
              <div className="flex flex-1 flex-col p-6 gap-5">
                {/* 元信息 */}
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                  <span>{post.readTime}</span>
                </div>

                {/* 标题 */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xl font-semibold text-zinc-950 dark:text-zinc-50 leading-snug hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>

                {/* 摘要 */}
                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* 作者 & 阅读更多 */}
                <div className="flex items-center justify-between pt-3 border-t border-black/[.06] dark:border-white/[.10]">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                      {post.author.name.charAt(0)}
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                        {post.author.name}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-500">
                        {post.author.role}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-2 transition-all"
                  >
                    阅读全文
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* 底部 CTA */}
        <section className="flex flex-col items-center gap-6 pt-8 pb-4 text-center">
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            更多文章即将发布，敬请期待 ✨
          </p>
          <Button asChild variant="outline" size="lg" className="rounded-full h-11 px-6">
            <Link href="/about">← 回到关于页面</Link>
          </Button>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="w-full border-t border-black/[.08] dark:border-white/[.145] py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-500">
          <p>Built with Next.js · Powered by Vercel</p>
          <p>© {new Date().getFullYear()} Next.js Blog Demo</p>
        </div>
      </footer>
    </div>
  );
}
