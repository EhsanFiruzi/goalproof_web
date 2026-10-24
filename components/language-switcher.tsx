"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const SECTIONS = ["features", "screens", "badges", "themes", "faq", "download"];

/**
 * تغییر زبان بدون پرش: بخشی که کاربر الان در آن است پیدا می‌شود و
 * به همان بخش در زبان مقابل می‌رویم (در بالای صفحه، به بالای صفحه).
 */
export function LanguageSwitcher({ target, label, className }: { target: Locale; label: string; className?: string }) {
  const router = useRouter();

  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    let hash = "";
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) hash = `#${id}`;
    }
    router.push(`/${target}${hash}`);
  }

  return (
    <Link
      href={`/${target}`}
      hrefLang={target}
      lang={target}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-10 items-center gap-2 rounded-lg border border-line px-3 text-sm text-muted transition hover:border-brand hover:text-white",
        className,
      )}
    >
      <Globe className="size-4" aria-hidden />
      {label}
    </Link>
  );
}
