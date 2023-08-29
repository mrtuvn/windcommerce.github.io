/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
