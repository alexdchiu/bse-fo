/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // output: 'standalone',
  experimental: {
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, '../../')
  },
}