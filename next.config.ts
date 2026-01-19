import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

// Set to true if using custom domain, false if using github.io/repo-name path
const useCustomDomain = true;

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  // When using a custom domain, basePath should be empty
  // When using username.github.io/repo-name, basePath should be '/repo-name'
  basePath: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
