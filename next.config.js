module.exports = {
  async rewrites() {
    return [
      {
        source: '/^[^api]\\+$/:slug*',
        destination: `http://18.141.180.79/api/:slug*`,
      },
    ];
  },
  images: {
    formats: ['image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};
