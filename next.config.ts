     1|import type { NextConfig } from "next";
     2|
     3|const nextConfig: NextConfig = {
     4|  output: "export",
     5|  basePath: "/car-rental",
     6|  assetPrefix: "/car-rental/",
     7|  images: {
     8|    unoptimized: true,
     9|  },
    10|  /* config options here */
    11|  typescript: {
    12|    ignoreBuildErrors: true,
    13|  },
    14|  reactStrictMode: false,
    15|};
    16|
    17|export default nextConfig;
    18|