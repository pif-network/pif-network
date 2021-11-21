module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `https://api-mentorship-shecodesvietnam.herokuapp.com/api/:slug*`,
      },
    ]
  },
}
