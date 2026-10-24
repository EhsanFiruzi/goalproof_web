import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
export const dynamic = "force-static";
// AEO: خزنده‌های هوش مصنوعی صراحتاً مجازند
export default function robots(): MetadataRoute.Robots {
  const ai = ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-User", "PerplexityBot", "Google-Extended"];
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...ai.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
