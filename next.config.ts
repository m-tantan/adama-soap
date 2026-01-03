import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: isProd ? '/adama-soap' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Required for static export with locales
};

export default nextConfig;
