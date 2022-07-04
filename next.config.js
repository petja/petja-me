/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.gravatar.com"],
  },
  async rewrites() {
    return [
      {
        source: "/ig/:path*",
        destination: "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
