/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['cdn.sanity.io', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
