import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { otherLocale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { BrandLogo } from "./brand-logo";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader({ locale, d }: { locale: Locale; d: Dictionary }) {
  const links = [
    ["#features", d.nav.features],
    ["#screens", d.nav.screens],
    ["#badges", d.nav.badges],
    ["#themes", d.nav.themes],
    ["#faq", d.nav.faq],
  ] as const;
  const other = otherLocale(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-5">
        <Link href={`/${locale}`} aria-label="GoalProof" className="rounded-lg">
          <BrandLogo locale={locale} />
        </Link>

        <nav aria-label={d.nav.menuLabel} className="hidden items-center gap-1 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher target={other} label={d.common.otherLangLabel} className="hidden md:inline-flex" />
          {/* دکمه‌ی هدر به بخش دانلود (با آیکن رسمی مایکت) هدایت می‌کند */}
          <a
            href="#download"
            data-cta="header"
            data-cta-destination="download-section"
            className="inline-flex min-h-10 items-center rounded-xl bg-brand px-4 text-sm font-bold text-white transition hover:brightness-110"
          >
            {d.common.headerCta}
          </a>
          <MobileMenu label={d.common.menu} navLabel={d.nav.menuLabel} links={links}>
            <LanguageSwitcher target={other} label={d.common.otherLangLabel} className="w-full justify-center" />
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
