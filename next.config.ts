// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Replace with your image domains
  },
  // Other Next.js configuration options can be added here
};

module.exports = nextConfig;
