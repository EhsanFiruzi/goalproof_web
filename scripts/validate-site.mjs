// اجرا قبل از build: node scripts/validate-site.mjs  (در package.json: "prebuild")
import { existsSync, readFileSync } from "node:fs";

for (const f of [".env.production.local", ".env.local", ".env.production", ".env"]) {
  if (existsSync(f) && typeof process.loadEnvFile === "function") {
    try { process.loadEnvFile(f); } catch {}
  }
}

const errors = [];
const url = process.env.NEXT_PUBLIC_SITE_URL;
try {
  const u = new URL(url ?? "");
  if (u.protocol !== "https:" || u.hostname === "localhost" || u.hostname.endsWith(".example")) {
    errors.push(`NEXT_PUBLIC_SITE_URL باید دامنه‌ی واقعی https باشد (فعلاً: ${url})`);
  }
} catch {
  errors.push("NEXT_PUBLIC_SITE_URL تنظیم نشده یا معتبر نیست");
}

const need = ["public/og.png", "app/icon.png", "public/svg_icons/get_from_myket-fa.svg", "public/svg_icons/get_from_myket-en.svg"];

const site = readFileSync("lib/site.ts", "utf8");
for (const [, id] of site.matchAll(/"(Screenshot_\d+)"/g)) need.push(`public/app_screen_shot/${id}.png`);

const fa = readFileSync("lib/i18n/dictionaries/fa.ts", "utf8");
for (const key of ["step", "streak", "special"]) {
  const re = new RegExp("\\n    " + key + ": \\[([\\s\\S]*?)\\n    \\],");
  const block = fa.match(re)?.[1] ?? "";
  if (!block) errors.push(`بلاک ${key} در fa.ts پیدا نشد`);
  for (const [, f] of block.matchAll(/file: "([^"]+)"/g)) need.push(`public/badges/${key}/${f}.svg`);
}

for (const p of need) if (!existsSync(p)) errors.push(`فایل پیدا نشد: ${p}`);

if (errors.length) {
  console.error("\n✖ validate-site:\n" + errors.map((e) => "  - " + e).join("\n") + "\n");
  process.exit(1);
}
console.log("✔ validate-site: OK");
