/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // ✅ Remove this if you're on Next.js 15+ (handled by default)
  // swcMinify: true,

  // ✅ Skip ESLint during Netlify build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
