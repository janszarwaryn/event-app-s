/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['cdn.sanity.io', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
