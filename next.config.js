/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // Alternative for stricter production config:
    // domains: ['your-specific-domain.com', 'api.example.com'],
reactStrictMode: true,
  // Disable SWC minification temporarily to get clearer error messages
  swcMinify: false,
  },
}

module.exports = nextConfig
