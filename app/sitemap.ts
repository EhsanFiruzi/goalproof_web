import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((l) => ({
    url: `${SITE.url}/${l}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: l === "fa" ? 1 : 0.9,
    alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${SITE.url}/${x}`])) },
  }));
}
