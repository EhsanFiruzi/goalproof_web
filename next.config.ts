import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // خالی برای username.github.io یا دامنه‌ی اختصاصی؛ "/repo" برای ریپوی پروژه‌ای
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default nextConfig;
