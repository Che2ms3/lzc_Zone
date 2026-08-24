import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  getAllSlugs,
  getPostBySlug,
  getAllPosts,
  type BlogPost,
} from "../_mock/posts";

// 静态生成所有已知 slug 的详情页（SSG）
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// 动态路由默认让无效 slug 进入 notFound（不缓存 404）
export const dynamicParams = true;

// 从 slug 生成独立的 metadata（标题、描述走 SEO 模板）
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: "文章未找到",
      description: "抱歉，这篇文章不存在或已被移除",
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: BlogPost | undefined = getPostBySlug(slug);

  if (!post) {
    notFound(); // 走全局自定义 404 页面
  }

  // 找出上一篇/下一篇（顺序与列表页一致）
  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <article className="flex flex-1 w-full max-w-3xl flex-col py-12 px-6 gap-10">
        {/* 面包屑 + 返回 */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
          <Link
            href="/blog"
            className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors inline-flex items-center gap-1"
          >
            <span aria-hidden>←</span> 返回 Blog 列表
          </Link>
          <span>/</span>
          <span className="text-zinc-700 dark:text-zinc-300 truncate">
            {post.title}
          </span>
        </nav>

        {/* 元信息 + 标签 */}
        <header className="flex flex-col gap-5">
          <div className="flex items-center flex-wrap gap-3">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full border ${post.tag.color}`}
            >
              {post.tag.label}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-500">
              {post.date}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
            <span className="text-xs text-zinc-500 dark:text-zinc-500">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-snug">
            {post.title}
          </h1>

          {/* 作者卡片 */}
          <div className="flex items-center gap-3 pt-2">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-sm">
              {post.author.name.charAt(0)}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                {post.author.name}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-500">
                {post.author.role}
              </span>
            </div>
          </div>
        </header>

        {/* 封面图 */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-zinc-100 dark:bg-zinc-900 shadow-sm">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* 摘要（高亮引述） */}
        <blockquote className="rounded-xl border-l-4 border-blue-500 dark:border-blue-400 bg-blue-500/5 dark:bg-blue-500/10 px-5 py-4 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300 italic">
          {post.excerpt}
        </blockquote>

        {/* 正文段落 */}
        <div className="flex flex-col gap-6 text-[17px] leading-8 text-zinc-800 dark:text-zinc-200 [&>p]:first-letter:text-3xl [&>p]:first-letter:font-semibold [&>p]:first-letter:text-blue-600 dark:[&>p]:first-letter:text-blue-400 [&>p]:first-letter:mr-1 [&>p]:first-letter:float-left [&>p:first-of-type]:first-letter:leading-9">
          {post.content.map((para, i) => (
            <p key={i} className="text-justify">
              {para}
            </p>
          ))}
        </div>

        {/* 分割线 */}
        <hr className="border-black/[.08] dark:border-white/[.145]" />

        {/* 上一篇 / 下一篇导航 */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group flex flex-col rounded-xl border border-black/[.08] dark:border-white/[.145] p-4 hover:bg-black/[.03] dark:hover:bg-white/[.05] transition-colors"
            >
              <span className="text-xs text-zinc-500 dark:text-zinc-500 mb-1.5">
                ← 上一篇
              </span>
              <span className="text-sm font-medium text-zinc-950 dark:text-zinc-50 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div></div>
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group flex flex-col sm:items-end rounded-xl border border-black/[.08] dark:border-white/[.145] p-4 hover:bg-black/[.03] dark:hover:bg-white/[.05] transition-colors"
            >
              <span className="text-xs text-zinc-500 dark:text-zinc-500 mb-1.5">
                下一篇 →
              </span>
              <span className="text-sm font-medium text-zinc-950 dark:text-zinc-50 line-clamp-2 text-right group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {next.title}
              </span>
            </Link>
          ) : null}
        </section>

        {/* 底部 CTA */}
        <section className="flex items-center justify-center gap-3 pt-4">
          <Button asChild variant="outline" size="lg" className="rounded-full h-11 px-6">
            <Link href="/blog">查看所有文章</Link>
          </Button>
        </section>
      </article>

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
