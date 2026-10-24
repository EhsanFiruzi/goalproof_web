import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, ogLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { Features } from "@/components/features";
import { BadgesShowcase } from "@/components/badges-showcase";
import { ThemesShowcase } from "@/components/themes-showcase";
import { Screenshots } from "@/components/screenshots";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { PageEffects } from "@/components/page-effects";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);

  return {
    title: d.meta.title,
    description: d.meta.description,
    keywords: d.meta.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: { fa: "/fa", en: "/en", "x-default": "/fa" },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: "GoalProof",
      title: d.meta.title,
      description: d.meta.description,
      locale: ogLocale(locale),
      images: [{ url: "/og.png", width: 1200, height: 630, alt: d.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.title,
      description: d.meta.description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2"
      >
        {d.common.skip}
      </a>
      <PageEffects />
      <SiteHeader locale={locale} d={d} />
      <main id="main">
        <Hero locale={locale} d={d} />
        <TrustStrip d={d} />
        <Features d={d} />
        <div data-reveal>
          <Screenshots d={d} />
        </div>
        <div data-reveal>
          <BadgesShowcase d={d} />
        </div>
        <ThemesShowcase themes={d.themes} />
        <div data-reveal>
          <Faq d={d} />
        </div>
        <FinalCta locale={locale} d={d} />
      </main>
      <SiteFooter locale={locale} d={d} />
      <JsonLd data={buildJsonLd(locale, d)} />
    </>
  );
}
