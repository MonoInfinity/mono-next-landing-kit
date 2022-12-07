/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
    productionBrowserSourceMaps: false,
    env: {
        SERVER_URL: process.env.SERVER_URL,
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: { images: { allowFutureImage: true } },
    i18n,
};

module.exports = nextConfig;
