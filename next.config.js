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
            {
                protocol: 'https',
                hostname: 'cretara.dev',
            },
        ],
        // Alternative for stricter production config:
        domains: ['cretara.dev'],
    },
    reactStrictMode: true,
}

module.exports = nextConfig
