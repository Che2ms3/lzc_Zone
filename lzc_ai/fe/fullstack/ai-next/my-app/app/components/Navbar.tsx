"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  exact?: boolean; // 是否需要精确匹配（首页 / 用 exact 防止匹配所有路径）
};

const navItems: NavItem[] = [
  { href: "/", label: "首页", exact: true },
  { href: "/about", label: "关于 Next.js" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (item: NavItem): boolean => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname?.startsWith(item.href) ?? false;
  };

  return (
    <nav className="w-full border-b border-black/[.08] dark:border-white/[.145] bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={72}
            height={16}
            priority
          />
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-zinc-950 dark:text-zinc-50 border-b-2 border-zinc-950 dark:border-zinc-50 pb-0.5 transition-colors"
                    : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
