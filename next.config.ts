import type { NextConfig } from 'next';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repository.endsWith('.github.io');
const basePath = repository && !isUserSite ? `/${repository}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: basePath,
  trailingSlash: true,
};

export default nextConfig;
