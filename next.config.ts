import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Kita menggunakan komponen <ResponsiveImage> berbasis Sharp & <picture>
  },
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;