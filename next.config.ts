import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://is1-ssl.mzstatic.com/**')],
  },
};

export default nextConfig;
