# GoalProof landing

- فونت‌ها: app/fonts/Vazirmatn-{Regular,Medium,Bold}.woff2
- public/og.png (۱۲۰۰×۶۳۰) و app/icon.png لازم است.
- .env.production: NEXT_PUBLIC_SITE_URL=https://دامنه‌ی-واقعی  (بدون آن build عمداً شکست می‌خورد)
- package.json → scripts: "prebuild": "node scripts/validate-site.mjs"
- کپشن اسکرین‌شات‌ها: lib/i18n/dictionaries/{fa,en}.ts → screens.captions با کلید نام فایل (بدون .png)
