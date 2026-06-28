import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/car-rental",
  assetPrefix: "/car-rental/",
  images: {
    unoptimized: true,
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
