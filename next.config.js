/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
}

module.exports = nextConfig
