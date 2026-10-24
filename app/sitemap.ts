import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((l) => ({
    url: `${SITE.home}/${l}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: l === "fa" ? 1 : 0.9,
    alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${SITE.home}/${x}`])) },
  }));
}
