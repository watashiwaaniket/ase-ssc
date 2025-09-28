import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns : [new URL('https://littlewish.in/**')]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  trailingSlash: false,
};

export default nextConfig;
