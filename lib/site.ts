function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  const isProd = process.env.NODE_ENV === "production";

  if (!raw) {
    if (isProd) {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL is not set. Set it to your real https:// domain before building for production.",
      );
    }
    return "http://localhost:3000";
  }

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(`NEXT_PUBLIC_SITE_URL is not a valid URL: "${raw}"`);
  }

  if (isProd) {
    const bad =
      url.protocol !== "https:" ||
      url.hostname === "localhost" ||
      url.hostname.endsWith(".example") ||
      url.hostname.endsWith(".local");
    if (bad) {
      throw new Error(`NEXT_PUBLIC_SITE_URL must be the real https:// production domain, got "${raw}".`);
    }
  }
  return url.origin;
}

/** مسیر پایه برای ریپوی پروژه‌ای ("/repo")؛ برای سایت ریشه‌ای رشته‌ی خالی */
const rawBase = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim().replace(/\/+$/, "");
export const BASE_PATH = rawBase && !rawBase.startsWith("/") ? `/${rawBase}` : rawBase;

/** برای فایل‌های public که با <Image src> یا <img> استفاده می‌شوند */
export const withBase = (path: string) => `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;

const origin = resolveSiteUrl();

export const SITE = {
  name: "GoalProof",
  nameFa: "گل‌پروف",
  /** فقط origin، مثل https://user.github.io */
  url: origin,
  /** origin + basePath، مبنای canonical و sitemap و ... */
  home: `${origin}${BASE_PATH}`,
  packageId: "ir.ehsan.goalproof",
  myket: "https://myket.ir/app/ir.ehsan.goalproof",
  myketDev: "https://myket.ir/developer/dev-105207",
  bazaarDev: "https://cafebazaar.ir/developer/045014426640",
  email: "ijaeyung1286@gmail.com",
  author: "Ehsan Firuzi",
} as const;

/** ابعاد واقعی اسکرین‌شات‌ها (برای جلوگیری از layout shift) */
export const SCREENSHOT_SIZE = { width: 1080, height: 2400 } as const;

const FILES = [
  "Screenshot_1784749271",
  "Screenshot_1784749278",
  "Screenshot_1784750347",
  "Screenshot_1784750386",
  "Screenshot_1784750633",
  "Screenshot_1784750795",
  "Screenshot_1784750815",
  "Screenshot_1784750832",
  "Screenshot_1784750847",
  "Screenshot_1784750855",
  "Screenshot_1784750868",
];

/** id همان نام فایل است؛ کپشن هر تصویر در dictionary زیر screens.captions با همین id نوشته می‌شود */
export const SCREENSHOTS = FILES.map((id) => ({ id, src: withBase(`/app_screen_shot/${id}.webp`) }));
