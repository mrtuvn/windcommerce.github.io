import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default million.next(nextConfig);
