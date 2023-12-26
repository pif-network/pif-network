import withBundleAnalyser from 'next-bundle-analyzer';

/** @type {import("next").NextConfig} */
let config = {
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

const shouldAnalyse = process.env.ANALYSE === 'true';

if (shouldAnalyse) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('INFO: ANALYSE is enabled.');
    // import('next-bundle-analyzer').then((mod) => mod.default);
    config = withBundleAnalyser(config)();
  }
}

export default config;
