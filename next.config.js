/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "cretara.dev",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
