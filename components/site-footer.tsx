import type { Locale } from "@/lib/i18n/config";
import { otherLocale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { SITE } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
import { LanguageSwitcher } from "./language-switcher";

export function SiteFooter({ locale, d }: { locale: Locale; d: Dictionary }) {
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <BrandLogo locale={locale} />
          <p className="mt-2 max-w-xs text-sm leading-7 text-muted">{d.footer.tagline}</p>
        </div>
        <div>
          <p className="mb-3 font-medium">{d.footer.moreApps}</p>
          <ul className="space-y-2 text-sm text-muted">
            <li><a href={SITE.myketDev} {...ext} className="hover:text-white">{d.footer.myket}</a></li>
            <li><a href={SITE.bazaarDev} {...ext} className="hover:text-white">{d.footer.bazaar}</a></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-medium">{d.footer.support}</p>
          <a href={`mailto:${SITE.email}`} className="text-sm text-muted hover:text-white" dir="ltr">
            {SITE.email}
          </a>
          <div className="mt-4">
            <LanguageSwitcher target={otherLocale(locale)} label={d.common.otherLangLabel} />
          </div>
        </div>
      </div>
      <p className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {SITE.name}. {d.footer.rights}
      </p>
    </footer>
  );
}
