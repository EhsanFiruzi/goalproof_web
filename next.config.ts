import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/fa", permanent: false }];
  },
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
