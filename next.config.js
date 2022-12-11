/** @type {import('next').NextConfig} */

const nextConfig = {
    productionBrowserSourceMaps: false,
    env: {
        SERVER_URL: process.env.SERVER_URL,
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
