module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `http://18.141.180.79/api/:slug*`,
      },
    ]
  },
}
