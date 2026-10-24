import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { otherLocale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { SITE } from "@/lib/site";
import { MyketButton } from "./myket-button";


export function SiteHeader({ locale, d }: { locale: Locale; d: Dictionary }) {
  const links = [
    ["#features", d.nav.features],
    ["#badges", d.nav.badges],
    ["#themes", d.nav.themes],
    ["#screens", d.nav.screens],
    ["#faq", d.nav.faq],
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-bold" aria-label={SITE.name}>
          <Image
            src="/app-icon.png"
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-xl"
            priority
          />
          <span className="text-lg">{locale === "fa" ? SITE.nameFa : SITE.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale(locale)}`}
            hrefLang={otherLocale(locale)}
            lang={otherLocale(locale)}
            className="rounded-lg border border-line px-3 py-1.5 text-sm text-muted transition hover:border-brand hover:text-white"
          >
            {d.common.otherLangLabel}
          </Link>
          <MyketButton
            locale={locale}
            label={d.common.downloadLabel}
            alt={d.common.downloadAlt}
            className="hidden sm:inline-block"
            imgClassName="h-10"
          />
        </div>
      </div>
    </header>
  );
}
