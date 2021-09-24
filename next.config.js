module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `https://api.mentorship.shecodesvietnam.com/api/:slug*`
      },
    ]
  },
}
