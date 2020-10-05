const withMDX = require('@next/mdx')()

module.exports = {
  withMDX,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog/jwt-authentication-node',
        permanent: false,
      },
    ]
  },
}
