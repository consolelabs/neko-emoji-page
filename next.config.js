/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
}

module.exports = nextConfig
