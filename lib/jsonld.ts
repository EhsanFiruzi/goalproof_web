import { SITE, SCREENSHOTS } from "./site";
import type { Locale } from "./i18n/config";
import type { Dictionary } from "./i18n/types";

export function buildJsonLd(locale: Locale, d: Dictionary) {
  const url = `${SITE.home}/${locale}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.home}/#website`,
        url: SITE.home,
        name: SITE.name,
        inLanguage: ["fa", "en"],
      },
      {
        "@type": "MobileApplication",
        "@id": `${url}#app`,
        name: locale === "fa" ? SITE.nameFa : SITE.name,
        alternateName: [SITE.name, SITE.nameFa],
        description: d.meta.description,
        url,
        operatingSystem: "ANDROID",
        applicationCategory: "LifestyleApplication",
        downloadUrl: SITE.myket,
        installUrl: SITE.myket,
        inLanguage: locale,
        // src اسکرین‌شات‌ها از قبل basePath دارد؛ فقط origin اضافه می‌شود
        screenshot: SCREENSHOTS.slice(0, 5).map((s) => `${SITE.url}${s.src}`),
        author: { "@type": "Person", name: SITE.author, url: SITE.myketDev },
        featureList: d.features.items.map((i) => i.title),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale,
        mainEntity: d.faq.items.map((i) => ({
          "@type": "Question",
          name: i.q,
          acceptedAnswer: { "@type": "Answer", text: i.a },
        })),
      },
    ],
  };
}
