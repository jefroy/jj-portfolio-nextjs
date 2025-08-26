/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // This allows for static export if needed
    domains: ['localhost'], // Add any external domains here if needed
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: false,
}

module.exports = nextConfig
