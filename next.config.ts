import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/fa", permanent: false }];
  },
  images: { formats: ["image/avif", "image/webp"] },
  allowedDevOrigins: ['192.168.1.5'],
};

export default nextConfig;
