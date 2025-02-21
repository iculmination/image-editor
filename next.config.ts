import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn-icons-png.freepik.com" },
    ],
  },
};

export default nextConfig;
