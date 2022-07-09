/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.gravatar.com',
      'media1.tunn3l.com',
      'media2.tunn3l.com',
      'media3.tunn3l.com',
      'media4.tunn3l.com',
      'media5.tunn3l.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/ig/:path*',
        destination: '/:path*',
      },
    ]
  },
}

module.exports = nextConfig
