# GoalProof landing

1. فایل‌ها را روی پروژه‌ی `goalproof_web` کپی کنید (ساختار بدون `src/`؛ alias پیش‌فرض `@/*` باید به ریشه اشاره کند).
2. فونت Vazir را از https://github.com/rastikerdar/vazir-font دانلود کنید و این سه فایل را در `app/fonts/` بگذارید:
   `Vazir-Regular.woff2`, `Vazir-Medium.woff2`, `Vazir-Bold.woff2`
3. در `public/` بگذارید: `og.png` (۱۲۰۰×۶۳۰) ، و در `app/` فایل `icon.png` (آیکن اپ).
4. `.env.local`:  NEXT_PUBLIC_SITE_URL=https://دامنه‌ی-شما
5. `npm run dev` → http://localhost:3000 (به /fa ریدایرکت می‌شود)
