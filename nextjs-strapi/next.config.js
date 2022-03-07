// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const path = require('path')
require('dotenv').config() // *** Data fetching

module.exports = {

  // *** Data fetching
  env: {
    API_URL: process.env.API_URL
  },

  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['publoc'] = path.join(__dirname, 'public')

    return config
  }
}