/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.it'
      },
      {
        protocol: 'https',
        hostname: '**.halfwit.tech'
      }
    ]
  }
}

module.exports = nextConfig
