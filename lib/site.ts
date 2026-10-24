export const SITE = {
  name: "GoalProof",
  nameFa: "گل‌پروف",
  // دامنه‌ی واقعی خودتون رو در .env.local بذارید: NEXT_PUBLIC_SITE_URL=https://yourdomain.com
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://goalproof.example",
  packageId: "ir.ehsan.goalproof",
  myket: "https://myket.ir/app/ir.ehsan.goalproof",
  myketDev: "https://myket.ir/developer/dev-105207",
  bazaarDev: "https://cafebazaar.ir/developer/045014426640",
  email: "ijaeyung1286@gmail.com",
  author: "Ehsan Firuzi",
} as const;

export const SCREENSHOTS = [
  "Screenshot_1784749271.png",
  "Screenshot_1784749278.png",
  "Screenshot_1784750347.png",
  "Screenshot_1784750386.png",
  "Screenshot_1784750633.png",
  "Screenshot_1784750795.png",
  "Screenshot_1784750815.png",
  "Screenshot_1784750832.png",
  "Screenshot_1784750847.png",
  "Screenshot_1784750855.png",
  "Screenshot_1784750868.png",
].map((f) => `/app_screen_shot/${f}`);

// ابعاد واقعی اسکرین‌شات‌ها (روی یکی از فایل‌ها Properties > Details بزنید)
export const SCREENSHOT_SIZE = { width: 1080, height: 2400 } as const;
